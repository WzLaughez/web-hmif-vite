import React, { useEffect, useState } from 'react';
import supabase from './utils/supabaseClient';
import PengumumanFormModal from './modals/PengumumanFormModal';
import DeleteConfirmationModal from './modals/DeleteModals';
import GaleriFormModal from './modals/GaleriFormModal';
import { Link } from 'react-router-dom';
import {
  Search, PlusCircle, Edit, Trash2, AlertCircle, X,
  ChevronLeft, ChevronRight, Users, FileText, Menu, GalleryHorizontal
} from 'lucide-react';

const AdminGaleri = () => {
  const [galeris, setGaleris] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentGaleri, setCurrentGaleri] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    title: '',
    image_url: ''
  });
const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const itemsPerPage = 5;

  const fetchGaleri = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('galeri').select('*');
    if (error) setError('Gagal memuat data');
    else setGaleris(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGaleri();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredGaleris = galeris.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGaleris.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredGaleris.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (galeri) => {
    setCurrentGaleri(galeri);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    const { error } = await supabase.from('galeri').delete().eq('id', currentGaleri.id);
    if (!error) {
      setGaleris(galeris.filter(item => item.id !== currentGaleri.id));
      showNotification('Galeri berhasil dihapus', 'success');
    } else {
      showNotification('Gagal menghapus galeri', 'error');
    }
    setShowDeleteModal(false);
  };

  const handleEdit = (galeri) => {
    setCurrentGaleri(galeri);
    setFormData({
      title: galeri.title,
      image_url: galeri.image_url
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
        .from('pengumuman')
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
      .from('galeri')
      .insert([{ ...formData, image_url: image_url || '' }])
      .select();

    if (!error) {
      setGaleris([...galeris, ...data]);
      showNotification('Galeri berhasil ditambahkan', 'success');
      setShowEditModal(false);
      resetForm();
    } else {
      console.error('Insert error:', error);
      showNotification('Gagal menambahkan galeri', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentGaleri) {
      const { error } = await supabase
        .from('galeri')
        .update(formData)
        .eq('id', currentGaleri.id);

      if (!error) {
        setGaleris(galeris.map(item =>
          item.id === currentGaleri.id ? { ...item, ...formData } : item
        ));
        showNotification('Galeri berhasil diperbarui', 'success');
        setShowEditModal(false);
        resetForm();
      } else {
        showNotification('Gagal memperbarui galeri', 'error');
      }
    } else {
      await handleAddForm();
    }
  };

  const resetForm = () => {
    setFormData({ title: '', image_url: '' });
    setCurrentGaleri(null);
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

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
      <Link to="/admin">
        <div className="px-4 py-3 flex items-center cursor-pointer hover:bg-blue-700">
          <FileText size={20} />
          {showSidebar && <span className="ml-4">Pengumuman</span>}
        </div>
      </Link>
      <Link to="/admin/galeri">
        <div className="px-4 py-3 flex items-center cursor-pointer hover:bg-blue-700 bg-blue-900">
          <GalleryHorizontal size={20} />
          {showSidebar && <span className="ml-4">Galeri</span>}
        </div>
      </Link>
      <Link to="/admin/pengurus">
        <div className="px-4 py-3 flex items-center cursor-pointer hover:bg-blue-700">
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

      {/* Search and Add */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari galeri..."
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

      {/* Konten galeri */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Judul</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Gambar</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.title}</td>
                  <td className="px-4 py-3">
                    <img
                      src={item.image_url || "/api/placeholder/48/48"}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="p-1 text-blue-600 hover:bg-blue-100 rounded"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="p-1 text-red-600 hover:bg-red-100 rounded"
                        onClick={() => handleDelete(item)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-8 text-center text-gray-500">
                  Tidak ada galeri yang ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredGaleris.length > itemsPerPage && (
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Menampilkan {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredGaleris.length)} dari {filteredGaleris.length} galeri
          </div>
          <div className="flex space-x-1">
            <button
              className={`p-2 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`p-2 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Edit/Add Modal */}
      <GaleriFormModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        currentGaleri={currentGaleri}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        pengumuman={currentGaleri}
      />
    </div>

    <footer className="bg-white p-4 shadow mt-auto">
      <p className="text-center text-gray-600">© 2023 Admin Panel</p>
    </footer>
  </div>
</div>

  );
};

export default AdminGaleri;
