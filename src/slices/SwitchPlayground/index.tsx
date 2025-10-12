import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { Color } from "three";
import clsx from "clsx";

/**
 * Props for `SwitchPlayground`.
 */
export type SwitchPlaygroundProps =
  SliceComponentProps<Content.SwitchPlaygroundSlice>;

/**
 * Component for "SwitchPlayground" Slices.
 */
const SwitchPlayground: FC<SwitchPlaygroundProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
      innerClassName="flex flex-col justify-center"
    >
      <FadeIn>
        <h2 className="font-bold-slanted scroll-pt-6 text-6xl uppercase md:text-8xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mb-6 max-w-4xl text-4xl text-pretty">
          <PrismicRichText field={slice.primary.description} />
        </div>

        <FadeIn
          targetChildren
          className="grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2"
        >
          {slice.primary.switches.map((item) =>
            isFilled.contentRelationship(item.switch) ? (
              <SharedCanvas key={item.switch.id} color={item.switch} />
            ) : null,
          )}
        </FadeIn>
      </FadeIn>
    </Bounded>
  );
};

export default SwitchPlayground;

type SharedCanvasProps = {
  color: Content.SwitchPlaygroundSliceDefaultPrimarySwitchesItem["switch"];
};

const SharedCanvas = ({ color }: SharedCanvasProps) => {
  if (!isFilled.contentRelationship(color) || !color.data) return null;

  const colorName = color.uid as "red" | "brown" | "blue" | "black";
  const { color: hexColor, name } = color.data;

  const bgColor = {
    blue: "bg-sky-950",
    red: "bg-red-950",
    brown: "bg-amber-950",
    black: "bg-gray-900",
  }[colorName];

  return (
    <div className="group relative min-h-96 overflow-hidden rounded-3xl select-none">
      {/*Text Button*/}
      {/*Canvas*/}
      <div
        className={clsx(
          "font-black-slanted absolute inset-0 -z-10 grid place-items-center text-8xl uppercase",
          bgColor,
        )}
      >
        <svg className="pointer-events-none h-auto w-full" viewBox="0 0 75 100">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
          ></text>
        </svg>
      </div>
    </div>
  );
};
