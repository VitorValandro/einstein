import { twMerge } from "tailwind-merge";
import { SBLink } from "./types";
import clsx, { ClassValue } from "clsx";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const getWebpVersionFromSBImage = (src: string) => {
  const SVG_EXTENSION = ".svg";

  const isSvg = src.endsWith(SVG_EXTENSION);
  const url = isSvg ? src : `${src}/m/`;

  return url;
};

export const getUrlFromSBLink = (link: SBLink, escapePath?: string) => {
  if (link.linktype === "url") {
    let url = link.url;
    if (url && escapePath && url.includes(escapePath)) {
      url = url.replace(escapePath, "");
    }
    return url;
  }

  let path = link.cached_url;
  if (path && escapePath && path.includes(escapePath)) {
    path = path.replace(escapePath, "");
  }

  return `${path}${link.anchor ? `#${link.anchor}` : ""}`;
};
