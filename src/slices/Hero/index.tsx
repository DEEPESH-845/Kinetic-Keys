import { Children, FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-dvh text-white text-shadow-black/30 text-shadow-lg"
    >
      <div className="hero-scene none pointer-events-none sticky top-0 h-dvh w-full">
        {/* Canvas goes Here */}
      </div>
      <div className="hero-content absolute inset-x-0 top-0 h-dvh">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="hero-heading font-black-slanted text-6xl leading-[0.8] uppercase sm:text-7xl lg:text-8xl">
                {children}
              </h1>
            ),
          }}
        />
        <div className="max-w-width">
          <PrismicRichText
            field={slice.primary.body}
            components={{
              heading2: ({ children }) => (
                <h2 className="font-bold-slanted mb-1 text-4xl uppercase lg:mb-2 lg:text-6xl">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
        <button className="font-bold-slanted group flex w-fit cursor-pointer items-center gap-1 rounded bg-sky-400 px-3 py-1 text-2xl uppercase transition disabled:grayscale">
          {slice.primary.buy_button_text}
          <span className="transition group-hover:translate-x-1">{">"}</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
