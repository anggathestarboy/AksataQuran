'use client';

import { useState, useEffect, useMemo } from 'react';
import { Surah } from '@/types/quran';
import { quranApi } from '@/lib/quran-api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, BookOpen, MapPin, Search } from 'lucide-react';

interface SurahListProps {
  onSurahSelect: (surah: Surah) => void;
}

export default function SurahList({ onSurahSelect }: SurahListProps) {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        setLoading(true);
        const data = await quranApi.getAllSurah();
        setSurahs(data);
      } catch (err) {
        setError('Gagal memuat daftar surah. Silakan coba lagi.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const filteredSurahs = useMemo(() => {
    if (!searchTerm) return surahs;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return surahs.filter(surah => 
      surah.nama_latin.toLowerCase().includes(lowerSearchTerm) ||
      surah.nama.toLowerCase().includes(lowerSearchTerm) ||
      surah.arti.toLowerCase().includes(lowerSearchTerm) ||
      surah.tempat_turun.toLowerCase().includes(lowerSearchTerm) ||
      surah.nomor.toString().includes(searchTerm)
    );
  }, [surahs, searchTerm]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
        <p className="text-gray-600">Memuat daftar surah...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="max-w-md mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              Coba Lagi
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-800 mb-2">Al-Quran Digital</h1>
        <p className="text-gray-600">Pilih surah untuk mulai membaca</p>
      </div>
      
      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Cari surah berdasarkan nama, arti, atau nomor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-emerald-200 focus:border-emerald-400 focus:ring-emerald-200"
          />
        </div>
        {searchTerm && (
          <p className="text-sm text-gray-500 mt-2 text-center">
            Ditemukan {filteredSurahs.length} surah dari {surahs.length}
          </p>
        )}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSurahs.map((surah) => (
          <Card 
            key={surah.nomor} 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border-emerald-200 hover:border-emerald-400"
            onClick={() => onSurahSelect(surah)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-800 font-semibold text-sm">{surah.nomor}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg text-emerald-800">{surah.nama_latin}</CardTitle>
                    <p className="text-sm text-gray-600">{surah.nama}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm text-gray-700 mb-3">
                {surah.arti}
              </CardDescription>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                    {surah.jumlah_ayat} ayat
                  </Badge>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {surah.tempat_turun}
                  </div>
                </div>
                <BookOpen className="w-4 h-4 text-emerald-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}