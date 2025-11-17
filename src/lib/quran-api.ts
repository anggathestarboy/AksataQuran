import axios from 'axios';
import { Surah, SurahDetail } from '@/types/quran';

const API_BASE_URL = 'https://quran-api.santrikoding.com/api';

export const quranApi = {
  // Mendapatkan semua daftar surah
  getAllSurah: async (): Promise<Surah[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/surah`);
      // Transform data structure to match our interface
      return response.data.map((surah: any) => ({
        nomor: surah.nomor,
        nama: surah.nama,
        nama_latin: surah.nama_latin,
        jumlah_ayat: surah.jumlah_ayat,
        tempat_turun: surah.tempat_turun,
        arti: surah.arti,
        deskripsi: surah.deskripsi || '',
        audio: surah.audio || ''
      }));
    } catch (error) {
      console.error('Error fetching surah list:', error);
      throw error;
    }
  },

  // Mendapatkan detail surah berdasarkan nomor
  getSurahDetail: async (nomor: number): Promise<SurahDetail> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/surah/${nomor}`);
      const surahData = response.data;
      
      // Transform data structure to match our interface
      const surah: SurahDetail = {
        nomor: surahData.nomor,
        nama: surahData.nama,
        nama_latin: surahData.nama_latin,
        jumlah_ayat: surahData.jumlah_ayat,
        tempat_turun: surahData.tempat_turun,
        arti: surahData.arti,
        deskripsi: surahData.deskripsi || '',
        audio: surahData.audio || '',
        ayat: surahData.ayat.map((ayat: any) => ({
          nomor: ayat.nomor,
          ar: ayat.ar,
          tr: ayat.tr || '',
          idn: ayat.idn || ''
        }))
      };
      
      return surah;
    } catch (error) {
      console.error('Error fetching surah detail:', error);
      throw error;
    }
  }
};