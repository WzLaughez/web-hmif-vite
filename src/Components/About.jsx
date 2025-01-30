import React from 'react'
import HeroPage from '../layouts/HeroPage'

const About = () => {
  return (
    <>
    <HeroPage teks="About"/>
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-6">Tentang HMIF UNTAN</h1>
      <div className="space-y-4">
        <p>
          Himpunan Mahasiswa Informatika (HMIF) Universitas Tanjungpura adalah organisasi mahasiswa yang fokus pada pengembangan kemampuan di bidang teknologi informasi.
        </p>
        <p>
          Kami berkomitmen untuk:
          - Mengembangkan potensi mahasiswa
          - Mendukung inovasi teknologi
          - Membangun jaringan profesional
        </p>
      </div>
    </div>
    </>
  )
}

export default About