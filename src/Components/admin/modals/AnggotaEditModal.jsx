import { useState, useEffect } from "react";

export default function EditAnggotaModal({ isOpen, onClose, onUpdate, divisiList, anggota }) {
  const [nama, setNama] = useState("");
  const [selectedDivisi, setSelectedDivisi] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (anggota) {
      setNama(anggota.nama || "");
      setSelectedDivisi(anggota.divisi_id || "");
      setSelectedFile(null);
    }
  }, [anggota]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: anggota.id, nama, divisi_id: selectedDivisi, file: selectedFile });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Edit Anggota</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Pilih Divisi */}
          <div>
            <label className="block text-sm font-medium mb-1">Divisi</label>
            <select
              className="w-full border rounded p-2"
              value={selectedDivisi}
              onChange={(e) => setSelectedDivisi(e.target.value)}
              required
            >
              <option value="" disabled>Pilih divisi</option>
              {divisiList.map((divisi) => (
                <option key={divisi.id} value={divisi.id}>{divisi.nama}</option>
              ))}
            </select>
          </div>

          {/* Nama Anggota */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama Anggota</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          {/* Upload Foto */}
          <div>
            <label className="block text-sm font-medium mb-1">Foto (opsional)</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border rounded p-2"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>

          {/* Tombol */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
