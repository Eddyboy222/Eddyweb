import { useEffect, useRef, useState } from "react";

const CONTACT = { whatsappPhone: "", instagramUrl: "", email: "" };
const categories = [
  "All work",
  "Social Media Designs",
  "Event Flyers",
  "Branding & Identity",
  "Church & Event Graphics",
  "Print Designs",
] as const;
type Category = (typeof categories)[number];
type Project = {
  src: string;
  title: string;
  category: Exclude<Category, "All work">;
  description: string;
};
const projects: Project[] = [
  {
    src: "/images/Credo%20exchnage%20Poster%201.png",
    title: "Credo Exchange",
    category: "Social Media Designs",
    description: "A vibrant promotional campaign for a digital exchange brand.",
  },
  {
    src: "/images/Credo%20exchnage%20Poster%202%20s3.png",
    title: "Credo Exchange — Campaign",
    category: "Branding & Identity",
    description:
      "A bold, energetic visual identity brought to life across campaign artwork.",
  },
  {
    src: "/images/EBC%20Poster%201.png",
    title: "EBC Gadgets & Tech",
    category: "Social Media Designs",
    description:
      "Confident product promotion for a technology and gadget retailer.",
  },
  {
    src: "/images/EBC%20Poster%202.png",
    title: "EBC — Product Campaign",
    category: "Print Designs",
    description:
      "A high-impact product graphic built around a bright, recognizable palette.",
  },
  {
    src: "/images/Anticipate%20.png",
    title: "Anticipate",
    category: "Event Flyers",
    description: "A polished event-led design made to build anticipation.",
  },
  {
    src: "/images/Pentecost%20sunday%20s2.png",
    title: "Pentecost Sunday",
    category: "Church & Event Graphics",
    description: "Warm, expressive artwork for a church celebration.",
  },
  {
    src: "/images/Anticipation%20F%20s3.png",
    title: "Anticipation",
    category: "Event Flyers",
    description:
      "A second direction for an event campaign, designed to stand out.",
  },
];
const navigation = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
const services = [
  "Graphic Design",
  "Social Media Design",
  "Flyer & Poster Design",
  "Branding & Logo Design",
  "Event Graphics",
  "Print Design",
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>("All work");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const heroGalleryRef = useRef<HTMLDivElement>(null);
  const visibleProjects =
    activeCategory === "All work"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const instagramHref = CONTACT.instagramUrl || undefined;
  const whatsappHref = CONTACT.whatsappPhone
    ? `https://wa.me/${CONTACT.whatsappPhone.replace(/\D/g, "")}`
    : undefined;
  const emailHref = CONTACT.email ? `mailto:${CONTACT.email}` : undefined;
  const scrollToSlide = (index: number) => {
    const nextIndex = (index + projects.length) % projects.length;
    const track = heroGalleryRef.current?.querySelector(
      ".hero-gallery-track",
    ) as HTMLElement | null;
    if (!track) return;
    track.style.animationDelay = `${-(42 * nextIndex) / projects.length}s`;
    setActiveSlide(nextIndex);
  };
  const eyebrow =
    "mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#76736c]";
  const sectionTitle =
    "font-[Manrope] text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[64px]";
  const textLink =
    "inline-flex w-fit items-center gap-3 border-b border-[#f7941d] pb-2 text-xs font-semibold transition-colors hover:text-[#f7941d]";

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
      @keyframes eg-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      @keyframes eg-fade { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
      .hero-gallery-track { animation: eg-marquee 42s linear infinite; width:max-content; }
      .hero-gallery:hover .hero-gallery-track { animation-play-state: paused; }
      @media (prefers-reduced-motion: reduce) { *,*::before,*::after { scroll-behavior:auto!important; animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; } }
    `}</style>
      <div className="min-h-screen overflow-x-hidden bg-[#f8f7f3] font-['DM_Sans',sans-serif] text-[#24231f] selection:bg-[#f7941d] selection:text-white mb-30">
        {/* Header and navigation */}
        <header className="fixed top-0 z-40 w-full grid h-18 grid-cols-[1fr_auto_1fr] items-center border-b border-black/[0.07] bg-[#f8f7f3]/95 px-5 backdrop-blur-xl sm:h-19.5 sm:px-[6.1vw]">
          <a
            className="flex w-fit items-center gap-2.5 font-[Manrope] text-[13px] font-bold tracking-[-.5px]"
            href="#home"
            aria-label="Eddy Graphics home"
          >
            <span className="text-[25px] font-extrabold tracking-[-2px] text-[#f7941d]">
              <img src="/images/logo/Asset 2.png" alt="Eddy Graphics logo" className="h-9 w-11 sm:h-9 sm:w-11" />
            </span>
          </a>
          <button
            className="col-start-3 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.25 md:hidden"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-px w-5 bg-[#24231f] transition-transform ${menuOpen ? "translate-y-0.75 rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-[#24231f] transition-transform ${menuOpen ? "-translate-y-0.75 -rotate-45" : ""}`}
            />
          </button>
          <nav
            id="primary-navigation"
            aria-label="Main navigation"
            className={`${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"} absolute left-0 right-0 top-full flex flex-col gap-0 border-b border-[#dedcd5] bg-[#f8f7f3] px-5 py-3 shadow-lg transition-all md:visible md:static md:col-start-2 md:flex md:translate-y-0 md:flex-row md:items-center md:gap-[clamp(22px,3.1vw,48px)] md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#dedcd5]/70 py-3 text-xs font-medium text-[#5f5c55] transition-colors hover:text-[#f7941d] md:border-0 md:py-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="col-start-2 row-start-1 ml-auto hidden items-center gap-4 border border-[#dedcd5] px-4 py-3 text-[11px] font-semibold transition-colors hover:border-[#24231f] hover:bg-[#24231f] hover:text-white md:col-start-3 md:flex"
            href="#contact"
          >
            Let&apos;s talk <span>↗</span>
          </a>
        </header>

        <main>
          {/* Hero section */}
          <section
            id="home"
            className="relative isolate overflow-hidden px-5 pb-14 pt-35 sm:px-[6.1vw] sm:pb-12 sm:pt-28 lg:pb-10 lg:pt-30"
          >
            {/* Hero background image placeholder */}
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(248,247,243,0.50), rgba(248,247,243,0.50)), url('/images/hero-background2.png')",
              }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-275 text-center">
              <h1 className="mx-auto max-w-237.5 font-['Beinora'] text-5xl lg:text-7xl md:text-6xl font-black leading-[0.98] md:font-black">
                Turning ideas into{" "}
                <span className="text-[#f7941d]">visual experiences.</span>
              </h1>

              <a
                className={`${textLink} mx-auto mt-6 sm:mt-4`}
                href="#portfolio"
              >
                Explore my work <ArrowIcon />
              </a>
            </div>
          </section>

          {/* Selected-work carousel */}
          <section className="px-0 pb-14 sm:px-[3vw] lg:pb-24">
            <div className="overflow-hidden border-y border-[#dedcd5] sm:rounded-sm sm:border">
              <div
                ref={heroGalleryRef}
                className="hero-gallery overflow-hidden"
              >
                <div className="hero-gallery-track flex gap-3 py-3 sm:gap-4 sm:py-4">
                  {[0, 1].map((setIndex) => (
                    <div
                      className="flex shrink-0 gap-3 sm:gap-4"
                      key={setIndex}
                      aria-hidden={setIndex === 1}
                    >
                      {projects.map((project, projectIndex) => (
                        <button
                          className="group relative aspect-square w-[66vw] max-w-85 shrink-0 overflow-hidden bg-[#e9e6df] sm:w-[31vw] lg:w-[24vw]"
                          key={`${setIndex}-${project.src}`}
                          type="button"
                          aria-label={`Preview ${project.title}`}
                          tabIndex={setIndex === 1 ? -1 : undefined}
                          onClick={() => setSelectedProject(project)}
                        >
                          <img
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            src={project.src}
                            alt={setIndex === 1 ? "" : project.title}
                            loading={projectIndex < 3 ? "eager" : "lazy"}
                            fetchPriority={projectIndex === 0 ? "high" : "auto"}
                          />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex min-h-14.5 items-center justify-between gap-3 px-4 sm:px-6">
                <span className="hidden text-[10px] font-semibold uppercase tracking-[.17em] text-[#76736c] sm:block">
                  Selected work
                </span>
                <div
                  className="flex items-center gap-2"
                  aria-label="Choose a design"
                >
                  {projects.map((project, index) => (
                    <button
                      key={project.src}
                      className={`h-1.25 rounded-full transition-all ${activeSlide === index ? "w-7 bg-[#f7941d]" : "w-1.5 bg-[#c9c6bd] hover:bg-[#76736c]"}`}
                      type="button"
                      aria-label={`Show slide ${index + 1}: ${project.title}`}
                      aria-current={activeSlide === index ? "true" : undefined}
                      onClick={() => scrollToSlide(index)}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="text-lg transition-colors hover:text-[#f7941d]"
                    type="button"
                    aria-label="Previous design"
                    onClick={() => scrollToSlide(activeSlide - 1)}
                  >
                    ←
                  </button>
                  <span className="min-w-13.75 text-center text-[10px] tabular-nums text-[#76736c]">
                    {String(activeSlide + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                  <button
                    className="text-lg transition-colors hover:text-[#f7941d]"
                    type="button"
                    aria-label="Next design"
                    onClick={() => scrollToSlide(activeSlide + 1)}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio grid and category filters */}
          <section
            id="portfolio"
            className="mx-auto max-w-[1600px] px-5 py-16 sm:px-[6.1vw] lg:py-28"
          >
            <div className="mb-9 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
              <div>
                <p className={eyebrow}>A few things I&apos;ve made</p>
                <h2 className={sectionTitle}>
                  Selected <span className="text-[#f7941d]">work.</span>
                </h2>
              </div>
              <p className="max-w-82.5 text-sm leading-6 text-[#76736c]">
                Every project starts with a good idea and ends with a visual
                worth remembering.
              </p>
            </div>
            <div
              className="mb-8 flex gap-2 overflow-x-auto pb-3 scrollbar-none [&::-webkit-scrollbar]:hidden"
              aria-label="Filter portfolio by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 border px-4 py-2.5 text-[11px] transition-colors ${activeCategory === category ? "border-[#24231f] bg-[#24231f] text-white" : "border-[#dedcd5] text-[#5f5c55] hover:border-[#24231f] hover:text-[#24231f]"}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <button
                  key={project.src}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open ${project.title} project preview`}
                  className="group text-left"
                >
                  <span className="relative block aspect-4/4.5 overflow-hidden bg-[#e9e6df]">
                    <img
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                      src={project.src}
                      alt=""
                      loading="lazy"
                    />
                    <span className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-2 place-items-center bg-[#f8f7f3] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowIcon />
                    </span>
                  </span>
                  <span className="flex items-start justify-between gap-4 pt-4">
                    <span>
                      <span className="block text-sm font-semibold">
                        {project.title}
                      </span>
                      <span className="mt-1 block text-[11px] text-[#76736c]">
                        {project.category}
                      </span>
                    </span>
                    <span className="text-[10px] tabular-nums text-[#76736c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* About section */}
          <section
            id="about"
            className="bg-[#efede7] px-5 py-16 sm:px-[6.1vw] lg:py-28"
          >
            <div className="mx-auto max-w-350">
              <p className={eyebrow}>A little about me</p>
              <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end">
                <h2 className="font-[Manrope] text-4xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-5xl lg:text-[68px]">
                  Good design isn&apos;t just seen.{" "}
                  <span className="text-[#f7941d]">It&apos;s felt.</span>
                </h2>
                <div className="max-w-107.5">
                  <p className="mb-6 text-sm leading-7 text-[#66635c]">
                    Eddy Graphics is a creative design brand turning ideas into
                    impactful, professional visuals. From the first spark to the
                    final detail, every piece is made with clarity, character
                    and purpose.
                  </p>
                  <a className={textLink} href="#contact">
                    Have a project in mind? <ArrowIcon />
                  </a>
                </div>
              </div>
              <div className="mt-16 flex items-center gap-3 border-t border-[#d8d5cc] pt-5">
                <span className="font-[Manrope] text-3xl font-extrabold tracking-[-2px] text-[#f7941d]">
                  eg.
                </span>
                <span className="text-[11px] text-[#76736c]">
                  Creative visuals. Thoughtfully made.
                </span>
              </div>
            </div>
          </section>

          {/* Services list */}
          <section
            id="services"
            className="mx-auto max-w-[1600px] px-5 py-16 sm:px-[6.1vw] lg:py-28"
          >
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className={eyebrow}>What I can help with</p>
                <h2 className={sectionTitle}>
                  Made for{" "}
                  <span className="text-[#f7941d]">your next idea.</span>
                </h2>
              </div>
              <p className="max-w-82.5 text-sm leading-6 text-[#76736c]">
                Flexible creative support for brands, businesses and moments
                that matter.
              </p>
            </div>
            <div className="grid grid-cols-1 border-t border-[#dedcd5] sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group flex min-h-25 items-center gap-5 border-b border-[#dedcd5] py-5 sm:px-5 odd:sm:border-r even:sm:pl-8"
                >
                  <span className="text-[10px] text-[#f7941d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-[Manrope] text-lg font-semibold tracking-[-.03em] sm:text-xl">
                    {service}
                  </h3>
                  <span className="text-lg text-[#9a978f] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f7941d]">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact information */}
          <section
            id="contact"
            className="bg-[#24231f] px-5 py-16 text-[#f8f7f3] sm:px-[6.1vw] lg:py-28"
          >
            <div className="mx-auto max-w-350">
              <p className="mb-8 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f7941d]" /> Have
                something in mind?
              </p>
              <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
                <h2 className="font-[Manrope] text-6xl font-semibold leading-[.95] tracking-[-.07em] sm:text-7xl lg:text-[110px]">
                  Let&apos;s make
                  <br />
                  <span className="text-[#f7941d]">it happen.</span>
                </h2>
                <div className="max-w-97.5">
                  <p className="mb-7 text-sm leading-6 text-white/65">
                    Have an idea, a brief, or just a question? I&apos;d love to
                    hear what you&apos;re working on.
                  </p>
                  <a
                    className={`inline-flex w-full items-center justify-between border-b border-white/25 pb-3 text-sm font-medium ${!emailHref ? "pointer-events-none opacity-50" : "hover:text-[#f7941d]"}`}
                    href={emailHref}
                    aria-disabled={!emailHref}
                  >
                    {CONTACT.email || "Your email address"} <span>↗</span>
                  </a>
                  <p className="mt-3 text-[10px] text-white/40">
                    {emailHref
                      ? "Send me a note and let’s start creating."
                      : "Add your email in the CONTACT settings to enable enquiries."}
                  </p>
                </div>
              </div>
              <div className="mt-16 grid border-t border-white/15 sm:grid-cols-3">
                {[
                  {
                    label: "WhatsApp",
                    href: whatsappHref,
                    detail: whatsappHref
                      ? "Start a conversation ↗"
                      : "Add your number",
                  },
                  {
                    label: "Instagram",
                    href: instagramHref,
                    detail: instagramHref
                      ? "Visit profile ↗"
                      : "Add your profile",
                  },
                  {
                    label: "Email",
                    href: emailHref,
                    detail: emailHref ? "Send an email ↗" : "Add your email",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-disabled={!item.href}
                    target={
                      item.href && item.label !== "Email" ? "_blank" : undefined
                    }
                    rel={
                      item.href && item.label !== "Email"
                        ? "noreferrer"
                        : undefined
                    }
                    className={`flex flex-col gap-3 border-b border-white/15 py-5 sm:border-b-0 sm:py-6 ${!item.href ? "pointer-events-none opacity-50" : "hover:text-[#f7941d]"} sm:not-last:border-r sm:not-last:border-white/15 sm:not-last:pr-6 sm:not-first:pl-6`}
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-[11px] text-white/45">
                      {item.detail}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="grid gap-7 px-5 py-8 sm:grid-cols-2 sm:items-center sm:px-[6.1vw] lg:grid-cols-4">
          <a
            className="flex w-fit items-center gap-2 font-[Manrope] text-[13px] font-bold"
            href="#home"
          >
            <span className="text-2xl font-extrabold tracking-[-2px] text-[#f7941d]">
              eg.
            </span>{" "}
            Eddy Graphics
          </a>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-3"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="text-[11px] text-[#5f5c55] hover:text-[#f7941d]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-5">
            <a
              href={instagramHref}
              aria-disabled={!instagramHref}
              target={instagramHref ? "_blank" : undefined}
              rel={instagramHref ? "noreferrer" : undefined}
              className="text-[11px] hover:text-[#f7941d]"
            >
              Instagram ↗
            </a>
            <a
              href={whatsappHref}
              aria-disabled={!whatsappHref}
              target={whatsappHref ? "_blank" : undefined}
              rel={whatsappHref ? "noreferrer" : undefined}
              className="text-[11px] hover:text-[#f7941d]"
            >
              WhatsApp ↗
            </a>
          </div>
          <span className="text-[10px] text-[#76736c] sm:text-right">
            © {new Date().getFullYear()} Eddy Graphics
          </span>
        </footer>

        {/* Project preview lightbox */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-100 grid place-items-center bg-[#171613]/85 p-4 backdrop-blur-sm"
            role="presentation"
            onClick={(event) => {
              if (event.target === event.currentTarget)
                setSelectedProject(null);
            }}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-225 overflow-y-auto bg-[#f8f7f3] shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project preview`}
            >
              <button
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center bg-[#f8f7f3] text-2xl shadow"
                type="button"
                aria-label="Close preview"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <img
                className="mx-auto max-h-[68vh] w-full bg-[#e9e6df] object-contain"
                src={selectedProject.src}
                alt={selectedProject.title}
              />
              <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-end sm:p-7">
                <div>
                  <p className={eyebrow}>{selectedProject.category}</p>
                  <h2 className="font-[Manrope] text-2xl font-semibold tracking-[-.04em]">
                    {selectedProject.title}
                  </h2>
                </div>
                <p className="max-w-90 text-xs leading-6 text-[#76736c]">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
