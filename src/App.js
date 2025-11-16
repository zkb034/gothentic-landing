import "./index.css";

export default function App() {
  return <TravnityLanding />;
}

function TravnityLanding() {
  const nav = [
    { label: "About us", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "Recommendations", href: "#community" },
  ];

  const chips = [
    "City breaks",
    "Nature",
    "Food & Culture",
    "Coastal",
    "Hidden gems",
    "By train",
    "Low-footprint",
  ];

  const destinations = [
    {
      title: "Copenhagen by Bike",
      blurb: "Canals, pastry stops & coastal ride",
      img: "https://images.unsplash.com/photo-1520975922284-4cba17d1d6a6?q=80&w=1200&auto=format&fit=crop",
      tag: "City break · Low-footprint",
    },
    {
      title: "Lisbon Alfama Walks",
      blurb: "Trams, fado & tiled facades",
      img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop",
      tag: "Food & Culture",
    },
    {
      title: "Istanbul Bazaars",
      blurb: "Spice routes & ferry sunsets",
      img: "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop",
      tag: "Hidden gems",
    },
    {
      title: "Kyoto Temple Run",
      blurb: "Shrines, tea & bamboo groves",
      img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1200&auto=format&fit=crop",
      tag: "Nature · Culture",
    },
    {
      title: "Tuscany Slow Roads",
      blurb: "Farm stays & hill towns",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
      tag: "By train · Food",
    },
    {
      title: "Santorini Trails",
      blurb: "Cliff paths & blue domes",
      img: "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?q=80&w=1200&auto=format&fit=crop",
      tag: "Coastal",
    },
  ];

  const quotes = [
    {
      name: "Marta · Porto",
      text:
        "Travnity surfaced a train-first route and a local supper club. Best city break I've had—low stress, low footprint.",
    },
    {
      name: "Jonas · Copenhagen",
      text:
        "Loved the collage-style guides. The chips made it easy to filter to bike-friendly spots and cafés.",
    },
    {
      name: "Aisha · Istanbul",
      text:
        "The ‘Hidden gems’ list felt community-curated—no tourist traps. Saved the whole plan offline.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="font-display text-3xl md:text-4xl font-black tracking-tight">
            Travnity
          </div>
          <nav className="hidden md:flex items-center gap-3">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="rounded-xl border-2 border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#login"
            className="hidden md:inline-flex rounded-xl border-2 border-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Log in / Profile
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-12 gap-10 items-center">
        <div className="col-span-12 lg:col-span-6">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight">
            Travnity
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-prose">
            A community-driven travel platform where real experiences meet personal
            discovery.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href="#destinations"
              className="rounded-xl border-2 border-slate-300 px-5 py-2 text-sm font-medium hover:bg-slate-50"
            >
              See our travel destinations
            </a>
            <a
              href="#community"
              className="rounded-xl border-2 border-slate-300 px-5 py-2 text-sm font-medium hover:bg-slate-50"
            >
              People’s recommendations
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <PhotoCollage />
        </div>
      </section>

      {/* Search + chips */}
      <section id="about" className="mx-auto max-w-7xl px-6 lg:px-8 pb-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2">
            <div className="h-4 w-4 rounded-full border border-slate-300" />
            <input
              aria-label="Search destinations"
              placeholder="Search city, vibe, or activity…"
              className="w-full bg-transparent outline-none text-sm"
            />
            <button className="rounded-lg border border-slate-300 px-3 py-1 text-xs hover:bg-slate-50">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs md:text-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations grid */}
      <section id="destinations" className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-display text-3xl font-bold">Curated destinations</h2>
          <a href="#destinations" className="text-sm text-slate-600 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <article
              key={d.title}
              className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${d.img})` }}
                role="img"
                aria-label={d.title}
                title={d.title}
              />
              <div className="p-4">
                <div className="text-xs text-slate-500">{d.tag}</div>
                <h3 className="mt-1 font-semibold">{d.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{d.blurb}</p>
                <div className="mt-3">
                  <a
                    href="#"
                    className="inline-flex rounded-xl border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50"
                  >
                    View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community / social proof */}
      <section id="community" className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <h2 className="font-display text-3xl font-bold mb-5">People’s recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-slate-200 p-5 bg-white"
            >
              <div className="flex items-center gap-3">
                <Avatar />
                <figcaption className="font-medium">{q.name}</figcaption>
              </div>
              <blockquote className="mt-3 text-slate-700 text-sm leading-relaxed">
                “{q.text}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-slate-200 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold">
              Get city guides & hidden gems
            </h3>
            <p className="text-slate-600 text-sm">
              Monthly, no spam. Train-first trips, local hosts, and low-footprint picks.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We’ll be in touch.");
            }}
            className="flex w-full md:w-auto gap-2"
          >
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="w-full md:w-72 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none"
            />
            <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 text-sm text-slate-600 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
          <div>© {new Date().getFullYear()} Travnity</div>
          <div className="flex gap-4">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#destinations" className="hover:underline">
              Destinations
            </a>
            <a href="#community" className="hover:underline">
              Community
            </a>
            <a href="#login" className="hover:underline">
              Login
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile tab bar */}
      <MobileTabBar />
    </div>
  );
}

/* ---------- UI bits (no extra packages) ---------- */

function PhotoCollage() {
  // Editorial collage with subtle rotations.
  const imgs = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512455102796-5e3ee1ff0f5b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  ];
  const frames = [
    "rotate-[-4deg] translate-x-2",
    "rotate-[3deg] -translate-y-2",
    "rotate-[-2deg] translate-y-3",
    "rotate-[4deg] -translate-x-2",
    "rotate-[1deg]",
    "rotate-[-3deg] translate-x-1",
  ];
  return (
    <div className="relative h-[380px] sm:h-[440px] lg:h-[520px]">
      {imgs.map((src, i) => (
        <div
          key={i}
          className={`absolute shadow-xl rounded-md border border-white overflow-hidden bg-white ${frames[i]}`}
          style={{
            width: i % 2 === 0 ? 190 : 220,
            height: i % 2 === 0 ? 130 : 150,
            top: 20 + (i % 3) * 110,
            left: 10 + i * 48,
          }}
          title="Travel collage"
          role="img"
          aria-label="Travel collage photo"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" className="text-slate-400">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path
        d="M4 20c0-4 4-6 8-6s8 2 8 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MobileTabBar() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Explore", href: "#destinations" },
    { label: "Saved", href: "#community" },
    { label: "Profile", href: "#login" },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl grid grid-cols-4">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            className="flex flex-col items-center py-2 text-xs"
          >
            <div className="h-5 w-5 rounded-full border border-slate-300 mb-1" />
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
