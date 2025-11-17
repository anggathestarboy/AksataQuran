'use client';

import { ArrowLeft, BookOpen, Heart, Code, Globe, Mail } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="mb-6 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors duration-200 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Dashboard
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
              <img 
                src="/logo.png" 
                alt="Aksata Qur'an Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-emerald-800 mb-2">
              Aksata Qur'an
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Aplikasi Al-Quran Digital
            </p>
            <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              Version 1.0.0
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tentang Aplikasi */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                Tentang Aplikasi
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aksata Qur'an adalah aplikasi Al-Quran digital yang dirancang khusus untuk memberikan kemudahan dalam membaca Al-Quran kapan saja dan di mana saja. Dengan desain yang responsif dan minimalis, aplikasi ini dapat diakses melalui berbagai perangkat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aplikasi ini dilengkapi dengan fitur pencarian surah, terjemahan Bahasa Indonesia, transliterasi Latin, dan audio murotal untuk membantu pengguna dalam memahami dan membaca Al-Quran dengan lebih baik.
              </p>
            </div>

            {/* Fitur Utama */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">
                Fitur Utama
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">114 Surah Lengkap</h3>
                    <p className="text-sm text-gray-600">Semua surah Al-Quran dari Al-Fatihah hingga An-Nas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Desain Responsif</h3>
                    <p className="text-sm text-gray-600">Optimal di desktop, tablet, dan mobile</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Teknologi Modern</h3>
                    <p className="text-sm text-gray-600">Dibangun dengan Next.js 15 dan TypeScript</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Gratis & Open Source</h3>
                    <p className="text-sm text-gray-600">Aplikasi gratis untuk semua pengguna</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teknologi */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">
                Teknologi yang Digunakan
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Next.js</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">TS</div>
                  <div className="text-sm text-gray-600">TypeScript</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">TW</div>
                  <div className="text-sm text-gray-600">Tailwind CSS</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">UI</div>
                  <div className="text-sm text-gray-600">shadcn/ui</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Developer Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4">
                Pengembang
              </h2>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">RA</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg">Rizqi Anggara</h3>
                <p className="text-sm text-gray-600 mb-4">Full Stack Developer</p>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Hubungi Developer</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Informasi Aplikasi */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4">
                Informasi
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Versi</span>
                  <span className="font-medium text-gray-800">1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rilis</span>
                  <span className="font-medium text-gray-800">Desember 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lisensi</span>
                  <span className="font-medium text-gray-800">MIT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">API</span>
                  <span className="font-medium text-gray-800">quran-api</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="bg-emerald-700 text-white rounded-xl p-6 text-center">
              <Heart className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm">
                Dibuat dengan ❤️ untuk kemudahan membaca Al-Quran
              </p>
              <p className="text-xs mt-2 opacity-75">
                © 2024 Aksata Qur'an
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}