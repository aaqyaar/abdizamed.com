import React from "react";
import { Meta } from "components";
import { Head } from "next/document";

type Props = {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
};

export default function CustomHead({ title, icon, children }: Props) {
  return (
    <Head>
      <title>{title || "Abdi Zamed Website"}</title>
      <link rel="icon" href={icon || "/favicon.ico"} />
      {children ? children : <Meta />}
    </Head>
  );
}
