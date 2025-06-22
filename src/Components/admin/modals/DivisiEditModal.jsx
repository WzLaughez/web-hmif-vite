import { useState, useEffect } from "react";

export default function EditDivisiModal({ isOpen, onClose, onSave, divisi }) {
  const [nama, setNama] = useState("");
  const [ketuaNama, setKetuaNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  useEffect(() => {
    if (divisi) {
      setNama(divisi.nama || "");
      setKetuaNama(divisi.ketua_nama || "");
      setDeskripsi(divisi.deskripsi || "");
      setSelectedFile(null);
    }
  }, [divisi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: divisi.id, nama, file: selectedFile });
    onClose(); // langsung tutup modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Edit Divisi</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama Divisi */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama Divisi</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
        {/* Ketua Divisi */}
          <div>
            <label className="block text-sm font-medium mb-1">Ketua Divisi</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={ketuaNama}
              onChange={(e) => setKetuaNama(e.target.value)}
              required
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-sm font-medium mb-1">Deskripsi Divisi</label>
            <textarea
              className="w-full border rounded p-2"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows={3}
            />
          </div>
          {/* Upload Foto Ketua */}
          <div>
            <label className="block text-sm font-medium mb-1">Foto Ketua (opsional)</label>
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
