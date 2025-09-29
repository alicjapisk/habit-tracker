import React from "react";

export type Variant = "H1" | "H2" | "H3" | "H4" | "T1" | "A1" | "S1";

const variantStyles: Record<Variant, string> = {
  H1: `
    lg:text-1920x/H1 
    md:text-1440x/H1 
    sm:text-360x/H1 
  `,
  H2: `
    lg:text-1920x/H2 
    md:text-1440x/H2 
    sm:text-360x/H2
  `,
  H3: `
    lg:text-1920x/H3 
    md:text-1440x/H3
    sm:text-360x/H3
  `,
  H4: `
    lg:text-1920x/H4 
    md:text-1440x/H4
    sm:text-360x/H4
  `,
  T1: `
    lg:text-1920x/T1 
    md:text-1440x/T1 
    sm:text-360x/T1 
  `,
  A1: `
    lg:text-1920x/A1 
    md:text-1440x/A1 
    sm:text-360x/A1
  `,
  S1: `
    lg:text-1920x/S1 
    md:text-1440x/S1 
    sm:text-360x/S1
  `,
};

type Props = {
  variant: Variant;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export const Text: React.FC<Props> = ({
  variant,
  children,
  as: Component = "p",
  className = "",
}) => {
  const classes = `${variantStyles[variant]} ${className}`;
  return <Component className={classes}>{children}</Component>;
};
