import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import venueImage from "../assets/images/venue.jpg";

const VenueSection = () => {
  const mapUrl = "https://maps.app.goo.gl/SkYM73UMTWPkxoNq6";

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#F3F0EA] px-5 py-20 text-[#302E2B]">
      
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#8E8578]/20" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-[#8E8578]/20" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8E8578]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
        
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[10px] font-medium tracking-[0.38em] uppercase text-[#706B64]"
        >
          The Celebration Awaits
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-3xl font-light tracking-wide"
        >
          Join Us Here
        </motion.h2>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-sm text-sm leading-7 text-[#68645E]"
        >
          As Puneeth and Chinmai begin a beautiful new chapter,
          we would be delighted to have you celebrate this special
          moment with us.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 h-px bg-[#8E8578]"
        />

        {/* Venue Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 w-full"
        >
          <div className="relative overflow-hidden border border-[#8E8578]/60 bg-[#E8E3DA] p-2 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            
            <div className="relative aspect-[5/3] overflow-hidden">
              <img
                src={venueImage}
                alt="Treebo The Meridian"
                className="h-full w-full object-cover"
              />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="border border-white/40 bg-black/20 px-4 py-2 text-[9px] tracking-[0.3em] uppercase text-white backdrop-blur-sm">
                  Our Celebration Venue
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Venue details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#706B64]">
            The Venue
          </p>

          <h3 className="mt-4 text-2xl font-light tracking-wide text-[#302E2B]">
            Treebo The Meridian
          </h3>

          <div className="mx-auto mt-5 h-px w-12 bg-[#8E8578]" />

          <div className="mt-6 flex items-start justify-center gap-3">
            <MapPin
              size={17}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-[#706B64]"
            />

            <p className="max-w-xs text-sm leading-6 text-[#68645E]">
              Ward No. 21, 40/17, District Stadium Road,
              Stadium Road, Dantaramakki,
              Chikkamagaluru, Karnataka 577101
            </p>
          </div>
        </motion.div>

{/* Unique map interaction */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mt-12 flex flex-col items-center"
>
  {/* Decorative route line */}
  <div className="mb-3 flex items-center gap-3">
    <div className="h-px w-8 bg-[#8E8578]/60" />

    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="h-1.5 w-1.5 rounded-full bg-[#81796E]"
    />

    <div className="h-px w-8 bg-[#8E8578]/60" />
  </div>

  <p className="text-[9px] tracking-[0.32em] uppercase text-[#777169]">
    Find your way
  </p>

  {/* Map pin link */}
  <a
    href="https://maps.app.goo.gl/SkYM73UMTWPkxoNq6"
    target="_blank"
    rel="noopener noreferrer"
    className="group mt-5 flex flex-col items-center"
    aria-label="Open Treebo The Meridian location in Google Maps"
  >
    {/* Animated location pin */}
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="relative flex h-12 w-12 items-center justify-center"
    >
      {/* Outer circle */}
      <div className="absolute inset-0 rounded-full border border-[#81796E]/60 transition-transform duration-300 group-hover:scale-110" />

      {/* Location icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-5 w-5 text-[#4E4A44]"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </motion.div>

    <span className="mt-3 text-[9px] tracking-[0.3em] uppercase text-[#4E4A44] transition-opacity duration-300 group-hover:opacity-60">
      Click to open in Google Maps
    </span>
  </a>
</motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 flex flex-col items-center"
        >
          <Heart
            size={14}
            strokeWidth={1.4}
            className="text-[#8E8578]"
          />

          <p className="mt-5 text-sm italic text-[#68645E]">
            We can't wait to celebrate with you.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 pb-3"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-[#8E8578]/50" />

          <p className="text-[12px] tracking-[0.25em] uppercase text-[#8A857D]">
            Crafted by Shreyas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;