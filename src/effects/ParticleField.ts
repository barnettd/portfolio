import * as THREE from 'three'

interface ParticleFieldOptions {
  canvas: HTMLCanvasElement
  count?: number
}

export class ParticleField {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private particlesMesh: THREE.Points
  private linesMesh: THREE.LineSegments
  private positions: Float32Array
  private velocities: Float32Array
  private mouse = { x: 0, y: 0 }
  private count: number
  private rafId = 0
  private destroyed = false

  constructor({ canvas, count = 90 }: ParticleFieldOptions) {
    this.count = count

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x000000, 0)

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    this.camera.position.z = 5

    // Positions & velocities
    this.positions = new Float32Array(count * 3)
    this.velocities = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      this.positions[i * 3] = (Math.random() - 0.5) * 10
      this.positions[i * 3 + 1] = (Math.random() - 0.5) * 7
      this.positions[i * 3 + 2] = (Math.random() - 0.5) * 3
      this.velocities[i * 3] = (Math.random() - 0.5) * 0.003
      this.velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.003
      this.velocities[i * 3 + 2] = 0
    }

    // Particles
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3))
    const mat = new THREE.PointsMaterial({
      color: 0x3dd9f5,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })
    this.particlesMesh = new THREE.Points(geo, mat)
    this.scene.add(this.particlesMesh)

    // Lines (pre-allocated, updated each frame)
    const maxLines = count * count
    const linePositions = new Float32Array(maxLines * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeo.setDrawRange(0, 0)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3dd9f5,
      transparent: true,
      opacity: 0.12,
    })
    this.linesMesh = new THREE.LineSegments(lineGeo, lineMat)
    this.scene.add(this.linesMesh)

    this.resize()
    window.addEventListener('resize', this.resize)
    window.addEventListener('mousemove', this.onMouse)

    this.animate()
  }

  private resize = () => {
    const w = this.renderer.domElement.parentElement?.clientWidth ?? window.innerWidth
    const h = this.renderer.domElement.parentElement?.clientHeight ?? window.innerHeight
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  private onMouse = (e: MouseEvent) => {
    this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.3
    this.mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.3
  }

  private animate = () => {
    if (this.destroyed) return
    this.rafId = requestAnimationFrame(this.animate)

    // Drift particles
    for (let i = 0; i < this.count; i++) {
      this.positions[i * 3] += this.velocities[i * 3] + this.mouse.x * 0.0015
      this.positions[i * 3 + 1] += this.velocities[i * 3 + 1] + this.mouse.y * 0.0015

      // Wrap
      if (this.positions[i * 3] > 5.5) this.positions[i * 3] = -5.5
      if (this.positions[i * 3] < -5.5) this.positions[i * 3] = 5.5
      if (this.positions[i * 3 + 1] > 3.8) this.positions[i * 3 + 1] = -3.8
      if (this.positions[i * 3 + 1] < -3.8) this.positions[i * 3 + 1] = 3.8
    }
    this.particlesMesh.geometry.attributes.position.needsUpdate = true

    // Build connection lines
    const threshold = 1.8
    const linePos = this.linesMesh.geometry.attributes.position.array as Float32Array
    let lineIdx = 0
    for (let a = 0; a < this.count; a++) {
      for (let b = a + 1; b < this.count; b++) {
        const dx = this.positions[a * 3] - this.positions[b * 3]
        const dy = this.positions[a * 3 + 1] - this.positions[b * 3 + 1]
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < threshold) {
          linePos[lineIdx++] = this.positions[a * 3]
          linePos[lineIdx++] = this.positions[a * 3 + 1]
          linePos[lineIdx++] = this.positions[a * 3 + 2]
          linePos[lineIdx++] = this.positions[b * 3]
          linePos[lineIdx++] = this.positions[b * 3 + 1]
          linePos[lineIdx++] = this.positions[b * 3 + 2]
        }
      }
    }
    this.linesMesh.geometry.setDrawRange(0, lineIdx / 3)
    this.linesMesh.geometry.attributes.position.needsUpdate = true

    // Subtle camera parallax
    this.camera.position.x += (this.mouse.x * 0.4 - this.camera.position.x) * 0.04
    this.camera.position.y += (this.mouse.y * 0.4 - this.camera.position.y) * 0.04

    this.renderer.render(this.scene, this.camera)
  }

  destroy() {
    this.destroyed = true
    cancelAnimationFrame(this.rafId)
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('mousemove', this.onMouse)
    this.renderer.dispose()
  }
}
