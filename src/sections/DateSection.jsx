import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DateSection = () => {
  const calculateTimeLeft = () => {
    const engagementDate = new Date("2026-09-06T11:00:00+05:30");
    const now = new Date();

    const difference = engagementDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

return (
  <section
    id="invitation"
    className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-5 py-20 text-[#2B2A28]
    bg-[linear-gradient(to_bottom,#81796E_10%,#A8A59F_48%,#D8D4CC_70%,#F3F0EA_100%)]"
  >
    {/* Smooth transition from Hero */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />

    {/* Subtle background decoration */}
    <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-[#4B4945]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full border border-[#4B4945]" />
    </div>

    <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        {/* Small invitation sentence */}
        <motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-[14px] font-medium tracking-[0.35em] uppercase text-black/70"
>
  Mark your calendars
</motion.p>

{/* Invitation text */}
<motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="mt-5 max-w-xs text-lg leading-relaxed text-black/80 sm:text-base"
>
  Join us as we celebrate a beautiful beginning and
  the promise of a lifetime together.
</motion.p>

        {/* Save the date */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-xs font-medium tracking-[0.45em] uppercase text-[#252422]"
        >
          Save the Date
        </motion.h2>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-5"
        >
          <div className="text-8xl font-light leading-none text-[#252422] sm:text-9xl">
            06
          </div>

          <div className="mt-3 text-xl font-light tracking-[0.25em] uppercase text-[#302E2B]">
            September
          </div>

          <div className="mt-2 text-sm tracking-[0.4em] uppercase text-[#68645E]">
            2026
          </div>
        </motion.div>

        {/* Day and time */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="h-px w-16 bg-[#8E8578]" />

          <p className="mt-3 text-xs tracking-[0.28em] uppercase text-[#3D3A36]">
            Sunday • 11:00 AM
          </p>
        </motion.div>

        {/* Countdown heading */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="mt-16"
>
  <p className="text-[10px] tracking-[0.35em] uppercase text-[#68645E]">
    Counting down to
  </p>

  <h3 className="mt-3 font-signature text-4xl text-[#34312D]">
    Our Beginning
  </h3>
</motion.div>

{/* Countdown */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 1 }}
  className="mt-8 w-full"
>
  <div className="relative mx-auto grid max-w-sm grid-cols-4 overflow-hidden border-y border-[#6F6A62]/60 py-5">
    {countdownItems.map((item, index) => (
      <div
        key={item.label}
        className={`relative flex flex-col items-center justify-center px-1 ${
          index !== countdownItems.length - 1
            ? "border-r border-[#6F6A62]/60"
            : ""
        }`}
      >
        <motion.span
          key={item.value}
          initial={{ opacity: 0.4, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[1.8rem] font-light leading-none text-[#252422] sm:text-4xl"
        >
          {String(item.value).padStart(2, "0")}
        </motion.span>

        <span className="mt-3 text-[7px] tracking-[0.22em] uppercase text-[#625E57] sm:text-[8px]">
          {item.label}
        </span>
      </div>
    ))}
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default DateSection;