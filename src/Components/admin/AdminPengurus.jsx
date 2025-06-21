import React, { useEffect, useState } from 'react';
import supabase from './utils/supabaseClient';
import PengumumanFormModal from './modals/PengumumanFormModal';
import DeleteConfirmationModal from './modals/DeleteModals';
import { Link } from 'react-router-dom';
import {
  Search, PlusCircle, Edit, Trash2, AlertCircle, X,
  ChevronLeft, ChevronRight, Users, FileText, Menu, GalleryHorizontal
} from 'lucide-react';
import PengurusEditModal from './modals/PengurusEditModal';

const AdminPengurus = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPengumuman, setCurrentPengumuman] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    image_url: ''
  });

  // State for pengurus
  const [pengurusData, setPengurusData] = useState([]);
  const [currentPengurus, setCurrentPengurus] = useState(null);
  const [showEditModalPengurus, setShowEditModalPengurus] = useState(false);
  const [showDeleteModalPengurus, setShowDeleteModalPengurus] = useState(false);

  const handleEditPengurus = (p) => {
    setCurrentPengurus(p);           // set data pengurus terpilih
    setShowEditModalPengurus(true);  // tampilkan modal edit
  };
  const handleDeletePengurus = async (id) => {
  if (!confirm('Yakin ingin menghapus pengurus ini?')) return;
  const { error } = await supabase.from('pengurus_utama').delete().eq('id', id);
  if (error) {
    showNotification('Gagal menghapus pengurus', 'error');
  } else {
    setPengurusData((prev) => prev.filter((pengurus) => pengurus.id !== id));
    showNotification('Pengurus berhasil dihapus', 'success');
  }
  };
  const handleUpdatePengurus = async () => {
  let image_url = currentPengurus.foto; // default pakai foto lama

  if (selectedFile) {
    const fileExt = selectedFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `public/${fileName}`;

    const { error: uploadError } = await supabase
      .storage
      .from('pengumuman')
      .upload(filePath, selectedFile);

    if (uploadError) {
      showNotification('Gagal upload gambar', 'error');
      return;
    }

    const { data: publicUrl } = supabase
      .storage
      .from('pengumuman')
      .getPublicUrl(filePath);

    image_url = publicUrl.publicUrl;
  }

  const { id, nama, jabatan } = currentPengurus;
  const { error } = await supabase
    .from('pengurus_utama')
    .update({ nama, jabatan, foto_url: image_url })
    .eq('id', id);

  if (error) {
    showNotification('Gagal memperbarui pengurus', 'error');
    console.error('Update error:', error);
  } else {
    setPengurusData((prev) =>
      prev.map((p) => (p.id === id ? { ...p, nama, jabatan, foto: image_url } : p))
    );
    showNotification('Pengurus berhasil diperbarui', 'success');
    setShowEditModalPengurus(false);
    setSelectedFile(null); // reset file
  }
  };


  // State untuk menteri
  const [menteriData, setMenteriData] = useState([]);

  // State untuk divisi
  const [divisiData, setDivisiData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);

    // Fetch semua data sekaligus
    const [{ data: pengurus }, { data: menteri }, { data: divisi }] = await Promise.all([
      supabase.from('pengurus_utama').select('*'),
      supabase.from('menteri').select('*'),
      supabase.from('divisi').select('*, anggota_divisi(*)'),
    ]);
    setPengurusData(pengurus || []);
    setMenteriData(menteri || []);
    setDivisiData(divisi || []);
    setLoading(false);
  };
const handleFileChange = (e) => {
  setSelectedFile(e.target.files[0]);
};
  const itemsPerPage = 5;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };


  const confirmDelete = async () => {
    const { error } = await supabase.from('pengumuman').delete().eq('id', currentPengumuman.id);
    if (!error) {
      setPengumumans(pengumumans.filter(item => item.id !== currentPengumuman.id));
      showNotification('Pengumuman berhasil dihapus', 'success');
    } else {
      showNotification('Gagal menghapus pengumuman', 'error');
    }
    setShowDeleteModal(false);
  };

  const handleEdit = (pengumuman) => {
    setCurrentPengumuman(pengumuman);
    setFormData({
      title: pengumuman.title,
      content: pengumuman.content,
      date: pengumuman.date,
      image_url: pengumuman.image_url
    });
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddForm = async () => {
  let image_url = '';

  if (selectedFile) {
    const fileExt = selectedFile.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `public/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('pengumuman') // sesuaikan dengan nama bucket-mu
      .upload(filePath, selectedFile);

    if (uploadError) {
      
      console.error('Upload error:', uploadError);
      showNotification('Gagal upload gambar', 'error');
      return;
    }

    const { data: publicUrl } = supabase
      .storage
      .from('pengumuman')
      .getPublicUrl(filePath);

    image_url = publicUrl.publicUrl;
  }

  const { data, error } = await supabase
      .from('pengumuman')
      .insert([{
        ...formData,
        image_url: image_url || ''
      }])
      .select();

    if (!error) {
      setPengumumans([...pengumumans, ...data]);
      showNotification('Pengumuman berhasil ditambahkan', 'success');
      setShowEditModal(false);
      resetForm();
    } else {
      console.error('Insert error:', error);
      showNotification('Gagal menambahkan pengumuman', 'error');
    }
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (currentPengumuman) {
    // update logika tetap
    const { error } = await supabase
      .from('pengumuman')
      .update(formData)
      .eq('id', currentPengumuman.id);

    if (!error) {
      setPengumumans(pengumumans.map(item =>
        item.id === currentPengumuman.id ? { ...item, ...formData } : item
      ));
      showNotification('Pengumuman berhasil diperbarui', 'success');
      setShowEditModal(false);
      resetForm();
    } else {
      showNotification('Gagal memperbarui pengumuman', 'error');
    }
  } else {
    // gunakan ini untuk tambah baru
    await handleAddForm();
  }
};

  const resetForm = () => {
    setFormData({ title: '', content: '', date: '', image_url: '' });
    setCurrentPengumuman(null);
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  const filteredDivisi = divisiData.filter((d) => d.nama.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-800 text-white ${showSidebar ? 'w-64' : 'w-16'} transition-all`}>
        <div className="p-4 flex items-center justify-between">
          {showSidebar && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button onClick={() => setShowSidebar(!showSidebar)} className="p-1 rounded-full hover:bg-blue-700">
            <Menu size={20} />
          </button>
        </div>
        <nav className="mt-6">
          
            <Link to="/admin" >
              <div className="px-4 py-3 flex items-center cursor-pointer hover:bg-blue-700 ">
                <FileText size={20} />
                {showSidebar && <span className="ml-4">Pengumuman</span>}
              </div>
            </Link>
          <Link to="/admin/galeri">
          <div className="px-4 py-3 flex items-center cursor-pointer hover:bg-blue-700">
            <GalleryHorizontal size={20} />
            {showSidebar && <span className="ml-4">Galeri</span>}
          </div>
          </Link>
          <Link to="/admin/pengurus">
          <div className="px-4 py-3 flex items-center cursor-pointer hover:bg-blue-700 bg-blue-900">
            <Users size={20} />
            {showSidebar && <span className="ml-4">Pengurus</span>}
          </div>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 shadow">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Admin</h1>
        </header>

        <div className="p-6">
          {notification.show && (
            <div className={`mb-4 px-4 py-2 rounded text-white ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
              {notification.message}
            </div>
          )}

          {/* === PENGURUS SECTION === */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Pengurus</h2>
      <table className="min-w-full bg-white rounded shadow mb-6">
        <thead>
          <tr className="bg-blue-50 border-b text-left text-sm text-gray-600">
            <th className="p-2">Jabatan</th>
            <th className="p-2">Nama</th>
            <th className="p-2">Foto</th>
            <th className="p-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pengurusData.map((p) => (
            <tr key={p.id} className="hover:bg-blue-50 border-b">
              <td className="p-2">{p.jabatan}</td>
              <td className="p-2">{p.nama}</td>
              <td className="p-2">
                <img src={p.foto || '/placeholder.png'} className="w-12 h-12 rounded-full object-cover" />
              </td>
              <td className="p-2 text-center">
                <button className="text-blue-600 hover:bg-blue-100 p-1 mr-2" onClick={() => handleEditPengurus(p)}><Edit size={18} /></button>
                <button className="text-red-600 hover:bg-red-100 p-1" onClick={() => handleDeletePengurus(p.id)}>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PengurusEditModal
          isOpen={showEditModalPengurus}
          onClose={() => setShowEditModalPengurus(false)}
          pengurus={currentPengurus}
          setPengurus={setCurrentPengurus}
          onSave={handleUpdatePengurus}
          handleFileChange={handleFileChange}
      />

      {/* === MENTERI SECTION === */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Menteri</h2>
      <table className="min-w-full bg-white rounded shadow mb-6">
        <thead>
          <tr className="bg-blue-50 border-b text-left text-sm text-gray-600">
            <th className="p-2">Kementerian</th>
            <th className="p-2">Nama</th>
            <th className="p-2">Foto</th>
            <th className="p-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {menteriData.map((m) => (
            <tr key={m.id} className="hover:bg-blue-50 border-b">
              <td className="p-2">{m.jabatan}</td>
              <td className="p-2">{m.nama}</td>
              <td className="p-2"><img src={m.foto || '/placeholder.png'} className="w-12 h-12 rounded-full object-cover" /></td>
              <td className="p-2 text-center">
                <button className="text-blue-600 hover:bg-blue-100 p-1 mr-2"><Edit size={18} /></button>
                <button className="text-red-600 hover:bg-red-100 p-1" onClick={() => handleDeletePengurus(p.id)}>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

          {/* Search and Add */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari Anggota..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
              onClick={() => {
                resetForm();
                setShowEditModal(true);
              }}
            >
              <PlusCircle size={18} className="mr-2" /> Tambah Baru
            </button>
          </div>
      {/* === DIVISI SECTION === */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Divisi dan Anggota</h2>

        {filteredDivisi.map((d) => (
          <div key={d.id} className="bg-white p-4 rounded shadow mb-6">
            {/* Info Divisi */}
            <h3 className="text-lg font-bold mb-1">{d.nama}</h3>
            {/* <p className="text-sm text-gray-600 mb-2">{d.deskripsi}</p> */}
            <div className="flex items-center mb-4">
              {d.ketua_foto ? (
                <img src={d.ketua_foto} className="w-12 h-12 rounded-full mr-3" />
              ) : (
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-3">👤</div>
              )}
              <span className="text-sm font-medium">Ketua: {d.ketua_nama}</span>
                        <button className="text-blue-600 hover:bg-blue-100 p-1 rounded mr-2">
                          <Edit size={18} />
                        </button>
                        <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                          <Trash2 size={18} />
                        </button>
            </div>

        {/* Tabel Anggota */}
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead className="bg-blue-50 text-gray-600 text-sm">
            <tr>
              <th className="p-2 border-b border-gray-200 text-left">Foto</th>
              <th className="p-2 border-b border-gray-200 text-left">Nama Anggota</th>
              <th className="p-2 border-b border-gray-200 text-center">Aksi</th>
            </tr>
          </thead>
            <tbody>
                {d.anggota_divisi.length > 0 ? (
                  d.anggota_divisi.map((anggota) => (
                    <tr key={anggota.id} className="hover:bg-blue-50">
                      <td className="p-2 border-b border-gray-200">
                        {anggota.foto ? (
                          <img
                            src={anggota.foto}
                            className="w-10 h-10 rounded-full object-cover"
                            alt={anggota.nama}
                          />
                        ) : (
                          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">👥</div>
                        )}
                      </td>
                      <td className="p-2 border-b border-gray-200 text-sm">{anggota.nama}</td>
                      <td className="p-2 border-b border-gray-200 text-center">
                        <button className="text-blue-600 hover:bg-blue-100 p-1 rounded mr-2">
                          <Edit size={18} />
                        </button>
                        <button className="text-red-600 hover:bg-red-100 p-1 rounded">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-gray-500">Belum ada anggota</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}

        </div>
        
        <footer className="bg-white p-4 shadow mt-auto">
          <p className="text-center text-gray-600">© 2023 Admin Panel</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminPengurus;
