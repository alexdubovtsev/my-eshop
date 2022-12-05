import React, { FC, useState } from "react";
import Link from "next/link";
import classes from "./Footerbanner.module.scss"
import {urlFor} from "../../lib/client"

interface FooterBannerProps {
  footerBanner: any;
}

const FooterBanner: FC<FooterBannerProps> = ({footerBanner}) => {

  return (
    <div>
      footer
    </div>
  )}

export default FooterBanner;