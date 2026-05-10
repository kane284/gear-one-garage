import { useState } from "react";
// Place your logo file inside the public folder as Gear.jpeg

export default function ModernMobileMechanicWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const services = [
    "Diagnostics",
    "Servicing",
    "Brakes & Suspension",
    "Battery & Electrical",
    "Vehicle Inspections",
    "Pre-Purchase Checks",
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
  ];

  const renderPage = () => {
    switch (activePage) {
      case "services":
        return (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-5xl font-bold text-center mb-14">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service}
                  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:scale-[1.02] transition"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                    {service}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Professional mobile mechanic support with modern diagnostics and transparent communication.
                  </p>
                </div>
              ))}
            </div>
          </section>
        );

      case "about":
        return (
          <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">About Us</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Modern Mobile Mechanic combines dealership-level diagnostics with mobile convenience.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We use digital inspection reports, modern booking systems, and AI-enhanced reporting to deliver a premium customer experience.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Digital Reports",
                  "Fast Booking",
                  "Professional Diagnostics",
                  "Mobile Convenience",
                ].map((item) => (
                  <div key={item} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-cyan-400 font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
              alt="Mechanic"
              className="rounded-3xl shadow-2xl"
            />
          </section>
        );

      case "gallery":
        return (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-5xl font-bold text-center mb-14">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Vehicle"
                  className="rounded-3xl h-80 object-cover w-full border border-slate-800 hover:scale-[1.02] transition"
                />
              ))}
            </div>
          </section>
        );

      case "booking":
        return (
          <section className="max-w-4xl mx-auto px-6 py-20">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
              <h2 className="text-4xl font-bold text-center mb-4">Book A Service</h2>
              <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
                Easily request diagnostics, servicing, inspections, and repairs through our integrated Jobber booking system.
              </p>

              <div className="bg-slate-950 border border-cyan-500/20 rounded-3xl p-6 mb-8 text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                    Powered by Jobber
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Customers can securely request appointments, choose services, and receive confirmations directly through Jobber.
                </p>

                <a
                  href="https://clienthub.getjobber.com/client_hubs/YOUR-JOBBER-LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-semibold shadow-lg"
                >
                  Open Jobber Booking Portal
                </a>
              </div>

              <div className="space-y-6">
                <input placeholder="Full Name" className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4" />
                <input placeholder="Phone Number" className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4" />
                <input placeholder="Vehicle Registration" className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4" />

                <select className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4">
                  <option>Select Service</option>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>

                <textarea
                  placeholder="Describe the issue or requested work"
                  className="w-full min-h-[140px] bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4"
                />

                <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition rounded-2xl py-4 font-semibold shadow-lg">
                  Submit Booking Request
                </button>

                <p className="text-center text-slate-400 text-sm pt-2">
                  Or use the Jobber portal above for live scheduling and confirmations.
                </p>
              </div>
            </div>
          </section>
        );

      case "reviews":
        return (
          <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-5xl font-bold text-center mb-14">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Fast, professional and reliable service.",
                "Excellent communication and transparent pricing.",
                "The digital inspection report was brilliant.",
              ].map((review) => (
                <div key={review} className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                  <p className="text-slate-300 leading-relaxed">“{review}”</p>
                </div>
              ))}
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
            <p className="text-slate-300 text-lg mb-10">
              Get in touch today for diagnostics, servicing, inspections, and repairs.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="tel:+447700900000" className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-semibold">
                Call Now
              </a>

              <a href="mailto:bookings@modernmobilemechanic.co.uk" className="border border-slate-700 hover:border-cyan-400 transition px-8 py-4 rounded-2xl">
                Send Email
              </a>

              <a href="https://wa.me/447700900000" target="_blank" className="border border-slate-700 hover:border-cyan-400 transition px-8 py-4 rounded-2xl">
                WhatsApp
              </a>
            </div>
          </section>
        );

      default:
        return (
          <>
            <section className="relative overflow-hidden border-b border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 opacity-90" />

              <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-1 mb-6 rounded-full bg-slate-900 text-sm border border-slate-700 text-slate-200">
                    AI-Enhanced Vehicle Care & Mobile Diagnostics
                  </div>

                  <h1 className="text-6xl font-bold leading-tight mb-6">
                    Premium Mobile Mechanic <span className="text-cyan-400">Built For Modern Drivers</span>
                  </h1>

                  <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                    Professional mobile mechanic services with advanced diagnostics, digital inspection reports, and premium customer care inspired by the Gear One Garage brand.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setActivePage("booking")}
                      className="px-6 py-3 rounded-2xl bg-cyan-500 font-semibold hover:bg-cyan-600 transition"
                    >
                      Book Now
                    </button>

                    <button
                      onClick={() => setActivePage("services")}
                      className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-cyan-400 transition"
                    >
                      View Services
                    </button>
                  </div>
                </div>

                <div>
                  <img
                    src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop"
                    alt="Mechanic"
                    className="rounded-3xl shadow-2xl border border-slate-800"
                  />
                </div>
              </div>
            </section>

            <section className="bg-slate-900 border-y border-slate-800">
              <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-6 text-center">
                {[
                  ["500+", "Vehicles Repaired"],
                  ["24/7", "Booking Requests"],
                  ["Mobile", "At Your Door"],
                  ["AI", "Enhanced Reports"],
                ].map(([number, label]) => (
                  <div key={label} className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{number}</div>
                    <div className="text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/Gear.jpeg"
              alt="Gear One Garage Logo"
              className="h-14 w-14 object-contain rounded-full border border-cyan-500/30 bg-white/5"
            />

            <div>
              <h1 className="text-xl font-bold tracking-wide text-cyan-400">
                GEAR ONE GARAGE
              </h1>
              <p className="text-xs text-slate-400 tracking-[0.2em] uppercase">
                Mobile Mechanic Services
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            {[
              "home",
              "services",
              "about",
              "gallery",
              "booking",
              "reviews",
              "contact",
            ].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`capitalize transition hover:text-cyan-400 ${
                  activePage === page ? "text-cyan-400" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="md:hidden border border-slate-700 px-3 py-2 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 space-y-4 text-slate-200">
            {[
              "home",
              "services",
              "about",
              "gallery",
              "booking",
              "reviews",
              "contact",
            ].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setActivePage(page);
                  setMobileMenuOpen(false);
                }}
                className="block capitalize hover:text-cyan-400"
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </nav>

      {renderPage()}

      <footer className="border-t border-slate-800 py-8 text-center text-slate-400 text-sm">
        © 2026 Gear One Garage. All rights reserved.
      </footer>
    </div>
  );
}
