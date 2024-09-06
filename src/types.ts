import { SbBlokData } from "@storyblok/astro";

export interface SBLink {
  anchor?: string;
  cached_url: string;
  id: string;
  linktype: "url" | "story";
  name: string;
  story?: { full_slug: string };
  url: string;
  target?: string;
}

export interface SBAsset {
  alt: string;
  copyright: string;
  fieldtype: "asset";
  filename: string;
  focus: string;
  id: number;
  is_external_url: boolean;
  name: string;
  title: string;
}

export type Blok<T> = SbBlokData & T;
