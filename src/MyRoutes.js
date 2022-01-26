import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import MyNavbar from "./components/MyNavbar";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import AuthProvider from "./contexts/AuthProvider";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ClientProvider>
          <BrowserRouter>
            <MyNavbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/add" element={<AddPage />} />
              <Route path="/admin/add/:id" element={<EditPage />} />
              <Route path="/product-detail/:id" element={<DetailPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ClientProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
