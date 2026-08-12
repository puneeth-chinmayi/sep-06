import Hero from "./sections/Hero";

function App() {
  return (
    <main>
      <Hero />

      {/* Temporary section so scroll button works */}
      <section
        id="invitation"
        className="flex min-h-screen items-center justify-center bg-[#f7f3ed]"
      >
        <h2 className="text-3xl">The celebration begins here ❤️</h2>
      </section>
    </main>
  );
}

export default App;