import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Marquee`.
 */
export type MarqueeProps = SliceComponentProps<Content.MarqueeSlice>;

/**
 * Component for "Marquee" Slices.
 */
const Marquee: FC<MarqueeProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.phrases.map((item, i) => (
        <div
          key={i}
          className="font-bold-slanted px-14 text-[180px] leading-none text-gray-400/80 uppercase md:text-[220px]"
        >
          {item.text}
        </div>
      ))}
    </section>
  );
};

export default Marquee;
