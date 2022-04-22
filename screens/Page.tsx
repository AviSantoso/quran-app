import _page from "../data/page.json";

export interface IPage {
  verses: IVerse[];
  pagination: IPagination;
}

export interface IPagination {
  per_page: number;
  current_page: number;
  next_page: null;
  total_pages: number;
  total_records: number;
}

export interface IVerse {
  id: number;
  verse_number: number;
  verse_key: string;
  juz_number: number;
  hizb_number: number;
  rub_el_hizb_number: number;
  ruku_number: number;
  manzil_number: number;
  sajdah_number: null;
  text_uthmani: string;
  page_number: number;
  translations: ITranslation[];
}

export interface ITranslation {
  id: number;
  resource_id: number;
  text: string;
}

export const page = _page as IPage;
