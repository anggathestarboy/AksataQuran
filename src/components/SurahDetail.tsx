'use client';

import { useState, useEffect } from 'react';
import { SurahDetail } from '@/types/quran';
import { quranApi } from '@/lib/quran-api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, ArrowLeft, Volume2, MapPin } from 'lucide-react';

interface SurahDetailProps {
  surahNumber: number;
  onBack: () => void;
}

export default function SurahDetail({ surahNumber, onBack }: SurahDetailProps) {
  const [surah, setSurah] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurahDetail = async () => {
      try {
        setLoading(true);
        const data = await quranApi.getSurahDetail(surahNumber);
        setSurah(data);
      } catch (err) {
        setError('Gagal memuat detail surah. Silakan coba lagi.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahDetail();
  }, [surahNumber]);

  const playAudio = () => {
    if (surah?.audio) {
      const audio = new Audio(surah.audio);
      audio.play().catch(err => console.error('Error playing audio:', err));
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
        <p className="text-gray-600">Memuat detail surah...</p>
      </div>
    );
  }

  if (error || !surah) {
    return (
      <div className="text-center p-8">
        <div className="max-w-md mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600 mb-4">{error || 'Surah tidak ditemukan'}</p>
            <Button onClick={onBack} className="bg-emerald-600 hover:bg-emerald-700 mr-2">
              Kembali
            </Button>
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
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <Button 
          onClick={onBack} 
          variant="ghost" 
          className="mb-4 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Daftar Surah
        </Button>
        
        <Card className="border-emerald-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl text-emerald-800">
              {surah.nama_latin}
            </CardTitle>
            <p className="text-xl text-gray-600">{surah.nama}</p>
            <p className="text-gray-700">{surah.arti}</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                {surah.jumlah_ayat} ayat
              </Badge>
              <div className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                {surah.tempat_turun}
              </div>
              <Button 
                onClick={playAudio}
                size="sm" 
                variant="outline"
                className="border-emerald-300 text-emerald-600 hover:bg-emerald-50"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Audio
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Ayat-ayat */}
      <div className="space-y-6 pb-8">
        {surah.ayat.map((ayat, index) => (
          <Card key={ayat.nomor} className="border-emerald-100 hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Nomor ayat */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-800 font-semibold">{ayat.nomor}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Ayat ke-{index + 1} dari {surah.jumlah_ayat}
                  </div>
                </div>

                {/* Ayat dalam bahasa Arab */}
                <div className="text-right">
                  <p className="text-2xl md:text-3xl leading-loose font-arabic text-gray-800 mb-4">
                    {ayat.ar}
                  </p>
                </div>

                <Separator className="bg-emerald-200" />

                {/* Terjemahan */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Transliterasi:</p>
                    <p className="text-gray-700 italic leading-relaxed" 
                       dangerouslySetInnerHTML={{ __html: ayat.tr }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Terjemahan:</p>
                    <p className="text-gray-600 leading-relaxed">
                      {ayat.idn}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}