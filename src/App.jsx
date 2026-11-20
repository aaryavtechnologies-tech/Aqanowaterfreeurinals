import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ApplicationsPage from './pages/ApplicationsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import LiveDemoPage from './pages/LiveDemoPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="site-wrapper">
      <TopBar />
      <Header onOpenDemo={handleOpenDemo} />

      <Routes>
        <Route path="/" element={<HomePage onOpenDemo={handleOpenDemo} />} />
        <Route path="/about" element={<AboutPage onOpenDemo={handleOpenDemo} />} />
        <Route path="/features" element={<FeaturesPage onOpenDemo={handleOpenDemo} />} />
        <Route path="/applications" element={<ApplicationsPage onOpenDemo={handleOpenDemo} />} />
        <Route path="/how-it-works" element={<HowItWorksPage onOpenDemo={handleOpenDemo} />} />
        <Route path="/live-demo" element={<LiveDemoPage onOpenDemo={handleOpenDemo} />} />
        <Route path="/products" element={<ProductsPage onOpenDemo={handleOpenDemo} />} />
        <Route path="/contact" element={<ContactPage onOpenDemo={handleOpenDemo} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer onOpenDemo={handleOpenDemo} />
      <FloatingActions />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
