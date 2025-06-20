import React, { useEffect, useState } from 'react';

import AdminPengumuman from './admin/AdminPengumuman';
import { Routes, Route } from 'react-router';
import AdminGaleri from './admin/AdminGaleri';

const Admin = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<AdminPengumuman />} />
      <Route path="/galeri" element={<AdminGaleri />} />
    </Routes>
    </>
  );
};

export default Admin;
