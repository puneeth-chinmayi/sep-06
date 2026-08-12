import { motion } from "framer-motion";
import backgroundVideo from "../assets/videos/engagement-bg.mp4";

const Hero = () => {
  const scrollToInvitation = () => {
    document
      .getElementById("invitation")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

        {/* Top Text - moved upward only on mobile */}
<div className="-translate-y-12 sm:translate-y-0">

  {/* Small heading */}
  <motion.p
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="mb-5 text-xs tracking-[0.35em] uppercase sm:text-sm"
  >
    Together with our families
  </motion.p>

  {/* Invitation Text */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.7 }}
    className="mb-4 text-lg font-light tracking-wide"
  >
    Invite you to celebrate the engagement of
  </motion.p>

</div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 1,
            ease: "easeOut",
          }}
        >
          <h1 className="text-5xl font-signature leading-tight m:text-7xl">
            Puneeth
          </h1>

          <div className="my-3 text-2xl font-signature italic">
            &
          </div>

          <h1 className="text-5xl font-signature leading-tight m:text-7xl">
            Chinmai
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 h-px bg-white/70"
        />

        {/* Engagement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-5 text-sm tracking-[0.25em] uppercase"
        >
          Engagement Ceremony
        </motion.p>

      </div>

      

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToInvitation}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          Scroll to begin
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-8 w-5 justify-center rounded-full border border-white/70 pt-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;