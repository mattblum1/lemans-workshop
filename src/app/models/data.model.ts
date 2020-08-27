export interface ImageData {
  collection: Collection;
}

export interface Collection {
  metadata: Metadata;
  href: string;
  items: Item[];
  version: string;
  links: CollectionLink[];
}

export interface Item {
  href: string;
  data: Datum[];
  links?: ItemLink[];
}

export interface Datum {
  date_created: Date;
  center: Center;
  keywords?: string[];
  nasa_id: string;
  description: string;
  media_type: MediaType;
  title: string;
  photographer?: string;
  location?: string;
  description_508?: string;
  album?: string[];
  secondary_creator?: string;
}

export enum Center {
  Gsfc = 'GSFC',
  Hq = 'HQ',
  Jpl = 'JPL',
  Jsc = 'JSC',
  Ksc = 'KSC',
  Maf = 'MAF',
  Msfc = 'MSFC',
}

export enum MediaType {
  Audio = 'audio',
  Image = 'image',
  Video = 'video',
}

export interface ItemLink {
  href: string;
  render?: MediaType;
  rel: Rel;
}

export enum Rel {
  Captions = 'captions',
  Preview = 'preview',
}

export interface CollectionLink {
  prompt: string;
  href: string;
  rel: string;
}

export interface Metadata {
  total_hits: number;
}
