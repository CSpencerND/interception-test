import type { ApiType } from "@/faker/faker-functions";
import type { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};
export type { SiteConfig } from "@/site.config";

export type Maybe<T> = null | undefined | T;
export type SearchParams<Key extends string> = Record<Key, string | string[] | undefined>;

export type Product = ApiType["product"];
export type Colors = ApiType["product"]["colors"];
export type Sizes = ApiType["product"]["sizes"];
