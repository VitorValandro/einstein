import { SbBlokData } from "@storyblok/astro";
import type { RichTextType } from "storyblok-rich-text-astro-renderer";

export type SBRichText = RichTextType;
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

export interface SBCta {
  title: string;
  link?: SBLink;
  icon?: SBAsset;
}

export interface SBTestimonial {
  image: SBAsset;
  title: string;
  subtitle: string;
  text: string;
}

export type Blok<T> = SbBlokData & T;
