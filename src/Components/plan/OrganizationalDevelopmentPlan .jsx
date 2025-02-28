import React from 'react';

const OrganizationalDevelopmentPlan = () => {
  const sections = [
    {
      title: "Menciptakan Lingkungan Beriman, Bertakwa, dan Toleran",
      programs: [
        {
          name: "Kajian Rutin Keimanan dan Kebangsaan",
          description: "Mengadakan forum lintas agama untuk meningkatkan pemahaman, toleransi, dan harmoni antar mahasiswa."
        },
        {
          name: "Kampanye Nilai Kemanusiaan",
          description: "Mengadakan kegiatan seperti Hari Peduli Sesama atau diskusi tematik untuk menguatkan kesadaran beragama dan berbudaya."
        },
        {
          name: "Mentoring Rohani dan Psikologis",
          description: "Fasilitasi kegiatan seperti kelompok kecil diskusi keagamaan dan support group untuk menjaga keseimbangan spiritual dan mental mahasiswa."
        }
      ]
    },
    {
      title: "Membangun Iklim Organisasi yang Hidup dan Adaptif",
      programs: [
        {
          name: "Pemetaan Potensi Anggota",
          description: "Mengidentifikasi kekuatan, minat, dan keterampilan anggota untuk distribusi tugas yang efektif."
        },
        {
          name: "Pelatihan Kepemimpinan Dinamis",
          description: "Mengadakan workshop kepemimpinan berbasis adaptasi dan inovasi."
        },
        {
          name: "Rapat Evaluasi Berkala",
          description: "Menggunakan pendekatan partisipatif untuk meningkatkan kinerja dan dinamika organisasi."
        }
      ]
    },
    {
      title: "Menghadirkan Pengabdian yang Bernyawa",
      programs: [
        {
          name: "Bakti Sosial Berkelanjutan",
          description: "Pelaksanaan medical camp di daerah terpencil secara rutin dengan kolaborasi instansi kesehatan."
        },
        {
          name: "Edukasi Masyarakat Progresif",
          description: "Kampanye kesehatan berbasis isu aktual seperti stunting, kesehatan ibu-anak, dan penyakit menular."
        },
        {
          name: "Kampanye Lingkungan Aktif",
          description: "Program seperti eco-friendly campus, reboisasi, dan pengelolaan limbah medis."
        }
      ]
    },
    {
      title: "Membangkitkan Kesadaran Kolektif dan Mendorong Tindakan Nyata",
      programs: [
        {
          name: "Forum Isu Strategis",
          description: "Diskusi rutin dengan tema-tema kesehatan dan sosial yang relevan."
        },
        {
          name: "Kampanye Digital",
          description: "Menggunakan media sosial BEM untuk menyuarakan isu penting melalui infografik, video, dan artikel."
        },
        {
          name: "Hari Kesadaran Bersama",
          description: "Mengadakan acara seperti aksi damai atau kampanye donasi untuk menggerakkan kesadaran kolektif."
        }
      ]
    },
    {
      title: "Menghidupkan Potensi Prestasi Mahasiswa",
      programs: [
        {
          name: "Kompetisi Internal dan Eksternal",
          description: "Mengadakan mini-competition seperti lomba debat, poster kesehatan, atau penelitian."
        },
        {
          name: "Fasilitasi Peluang Prestasi",
          description: "Membentuk tim khusus untuk membantu mahasiswa mendapatkan informasi beasiswa, lomba, atau pelatihan internasional."
        },
        {
          name: "Inspirasi Prestasi",
          description: "Mengadakan talkshow dengan alumni atau mahasiswa berprestasi untuk membangun motivasi."
        }
      ]
    },
    {
      title: "Menjalin Kolaborasi untuk Dampak Lebih Besar",
      programs: [
        {
          name: "Kemitraan Strategis",
          description: "Mengadakan kerja sama dengan lembaga pemerintah, organisasi kesehatan, dan perusahaan."
        },
        {
          name: "Kolaborasi Antar BEM",
          description: "Menginisiasi proyek lintas fakultas atau universitas seperti National Medical Forum."
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 "
          >
            <div className="bg-Sage/50 px-4 py-3 border-b border-blue-100">
              <h2 className="text-lg font-semibold text-black">
                {index + 1}. {section.title}
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {section.programs.map((program, programIndex) => (
                  <div 
                    key={programIndex} 
                    className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="text-blue-500 mt-1">→</div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{program.name}</h3>
                      <p className="text-gray-600 mt-1 text-sm">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationalDevelopmentPlan;