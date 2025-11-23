import "./index.css";

export default function App() {
  return <TravnityLanding />;
}

function TravnityLanding() {
  const nav = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Discover", href: "#stories" },
  ];

  const interests = [
    {
      label: "Nature & Hiking",
      description: "Lakes, forests, and mountain trails.",
      icon: "🌿",
    },
    {
      label: "Cultural Heritage",
      description: "Historic districts, crafts, and rituals.",
      icon: "🏛️",
    },
    {
      label: "Local Food",
      description: "Markets, home kitchens, and food tours.",
      icon: "🍲",
    },
    {
      label: "Off-the-Beaten-Path",
      description: "Quiet villages and lesser-known spots.",
      icon: "🧭",
    },
  ];

  const stories = [
    {
      id: 1,
      title: "Alpine Village Hiking Trail",
      location: "Switzerland",
      summary:
        "Trek through mountain villages, stay in family-run guesthouses, and experience slow travel at its finest.",
      author: "Emma Johnson",
      views: "2.4k",
      image:
        "https://images.unsplash.com/photo-1516569422553-2914dbc91e8e?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Traditional Craft Workshop",
      location: "Kyoto, Japan",
      summary:
        "Learn centuries-old pottery techniques from local artisans and share tea with your host family.",
      author: "Michael Chen",
      views: "6.1k",
      image:
        "https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Rainforest Wildlife Conservation",
      location: "Costa Rica",
      summary:
        "Volunteer with local conservationists, monitor wildlife, and stay in eco-lodges near the forest edge.",
      author: "Sarah Martinez",
      views: "3.5k",
      image:
        "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const stats = [
    { label: "Authentic Stories", value: "2400+", sub: "Shared by real travelers" },
    { label: "Sustainability Focus", value: "85%", sub: "Average eco-score of experiences" },
    { label: "Countries", value: "120+", sub: "Covered by our community" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader nav={nav} />

      <main>
        <HeroSection />

        <ExploreByInterestSection interests={interests} />

        <FeaturedStoriesSection stories={stories} />

        <ShareJourneySection />

        <StatsSection stats={stats} />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ---------- Layout sections ---------- */

function SiteHeader({ nav }) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="tracking-[0.25em] text-xs font-semibold uppercase text-slate-700">
            TRAVNITY
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-slate-700">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#profile"
          className="hidden md:inline-flex rounded-full border border-amber-500/60 px-4 py-1.5 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100"
        >
          Profile
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[420px] md:h-[460px] lg:h-[520px] flex items-center justify-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-100">
          Plan authentic journeys that match your passions
        </h1>
        <p className="mt-3 text-sm md:text-base text-amber-50/90 max-w-xl">
          Find sustainable trips, local hosts, and real stories from travelers who’ve already
          walked the path.
        </p>

        <SearchBar />

        {/* Tiny logo bottom-right like in your mock */}
        <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-amber-100/80 text-xs">
          <LogoMark small />
          <span>TRAVNITY</span>
        </div>
      </div>
    </section>
  );
}

function ExploreByInterestSection({ interests }) {
  return (
    <section className="bg-amber-50 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center">Explore by interest</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-amber-100/80 px-4 py-5 flex flex-col items-start shadow-sm"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/80 text-lg">
                <span>{item.icon}</span>
              </div>
              <h3 className="mt-3 text-sm font-semibold">{item.label}</h3>
              <p className="mt-1 text-xs text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedStoriesSection({ stories }) {
  return (
    <section id="stories" className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Featured Authentic Stories</h2>
          <p className="mt-1 text-sm text-slate-600">
            Real experiences from our community of conscious travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareJourneySection() {
  return (
    <section className="bg-[#958750] text-amber-50 py-12 md:py-14">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Share Your Journey</h2>
        <p className="mt-3 text-sm md:text-base text-amber-50/90">
          Your authentic travel stories can inspire others to travel more mindfully and
          sustainably. Join our community and make a positive impact.
        </p>
        <button className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-900 px-6 py-2 text-sm font-semibold hover:bg-amber-50">
          Share Your Story
        </button>
      </div>
    </section>
  );
}

function StatsSection({ stats }) {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl md:text-3xl font-semibold text-slate-900">
              {stat.value}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-700">{stat.label}</div>
            <div className="mt-1 text-xs text-slate-500">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-slate-200 border-t border-slate-300 mt-6">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="tracking-[0.25em] text-xs font-semibold uppercase text-slate-700">
            TRAVNITY
          </span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a href="#stories" className="hover:underline">
            Discover
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a
            href="#profile"
            className="rounded-full border border-amber-500/60 px-3 py-1 text-xs font-medium text-amber-800"
          >
            Profile
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* ---------- Smaller UI components ---------- */

function SearchBar() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-6 w-full max-w-xl"
    >
      <div className="flex items-center rounded-full bg-white/95 shadow-lg overflow-hidden">
        <div className="pl-4 pr-2 text-slate-400">
          <span className="inline-block h-4 w-4 rounded-full border border-slate-400" />
        </div>
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="flex-1 bg-transparent text-sm md:text-base outline-none px-1 py-2 text-slate-800"
        />
        <button
          type="submit"
          className="bg-[#b79c4f] text-white text-sm font-semibold px-5 py-2 hover:bg-[#a48b3f]"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function StoryCard({ story }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative h-44">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${story.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute top-3 right-3 rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow">
          {story.views}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-slate-500 flex items-center gap-1">
          <span className="text-[10px]">📍</span>
          <span>{story.location}</span>
        </div>
        <h3 className="mt-1 text-sm font-semibold">{story.title}</h3>
        <p className="mt-2 text-xs text-slate-600 flex-1">{story.summary}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>by {story.author}</span>
          <button className="text-amber-700 font-medium hover:underline">
            Read more
          </button>
        </div>
      </div>
    </article>
  );
}

function LogoMark({ small = false }) {
  const size = small ? 18 : 22;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="text-slate-700"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="7"
        width="9"
        height="11"
        rx="1.5"
        ry="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="10"
        y="5"
        width="8"
        height="11"
        rx="1.3"
        ry="1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M9 5.5h4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 4l2.5-2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
