import { FC, MouseEventHandler, ReactNode } from "react";
import { SBLink } from "../types";
import { cn, getUrlFromSBLink } from "../utils";

export type ButtonVariants = "Primary" | "Outline" | "None";

type Type =
  | {
      tag: "button" | "submit";
      onClick?: MouseEventHandler<HTMLButtonElement>;
    }
  | {
      tag: "anchor";
      onClick?: MouseEventHandler<HTMLAnchorElement>;
      href?: string | SBLink;
    };

interface Props {
  children: ReactNode;
  className?: string;
  variant: ButtonVariants;
  type: Type;
  ariaLabel?: string;
  trackingValue?: string;
}

const getStyleForVariant = (variant: Props["variant"]) => {
  switch (variant) {
    case "Primary":
      return "bg-brand-secondary-900 text-white font-bold";

    case "Outline":
      return "border-brand-primary-900 text-brand-primary-900 bg-red";

    case "None":
      return "bg-transparent text-content-inherit font-medium";
  }
};

const baseStyle = "border-2 border-transparent rounded py-2 px-4 text-base";

const Button: FC<Props> = ({ children, className, variant, type, ariaLabel, trackingValue }) => {
  if (type.tag === "anchor") {
    const safeHref = type.href ?? "";
    const href = typeof safeHref === "string" ? safeHref : getUrlFromSBLink(safeHref);

    return (
      <a
        className={cn(baseStyle, getStyleForVariant(variant), className)}
        href={href}
        onClick={type.onClick}
        aria-label={ariaLabel}
        data-gtm={trackingValue}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type.tag}
      className={cn(baseStyle, getStyleForVariant(variant), className)}
      onClick={type.onClick}
      data-gtm={trackingValue}
    >
      {children}
    </button>
  );
};

export default Button;
