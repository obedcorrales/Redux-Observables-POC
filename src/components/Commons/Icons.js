import React from "react";
import { SvgIcon } from "material-ui";

export const HomeIcon = properties => (
    <SvgIcon {...properties}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill={properties.fill || "none"} />
    </SvgIcon>
);

export const BackIcon = properties => (
    <SvgIcon {...properties}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" fill={properties.fill || "none"} />
    </SvgIcon>
);
