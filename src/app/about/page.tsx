export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/farm-aerial.jpg')" }}></div>
        <div className="container relative z-20 h-full flex items-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
            Our Story
          </h1>
        </div>
      </div>

      <div className="container py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6 text-dark">Rooted in Tradition, Committed to Excellence</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-dark/80 mb-4">
                Waliin Farm has been a cornerstone of sustainable cattle farming since 2024. 
                Founded by Delesa Gebisa and friends, our farm began with 300 care meter and a simple vision: 
                to raise healthy, ethically-treated cattle while preserving the land for future generations.
              </p>
              <p className="text-lg text-dark/80">
                Today, we manage 1000 acres of pastureland and care for 20 head of 200 cattle, 
                combining time-honored practices with modern agricultural science to produce premium beef 
                and dairy products.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl h-64" 
                style={{ backgroundImage: "url('/images/farm-family.jpg')", backgroundSize: 'cover' }}></div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-dark">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Animal Welfare",
                desc: "Cattle are raised humanely with ample space, clean water, and natural forage. No growth hormones or unnecessary antibiotics.",
                icon: "🐄"
              },
              {
                title: "Quality Meet",
                desc: "Regenerative grazing practices that improve soil health, prevent erosion, and promote biodiversity.",
                icon: "🌱"
              },
              {
                title: "Affordable Price",
                desc: "Supporting local economies through farm-to-table partnerships and educational farm tours.",
                icon: "🤝"
              }
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-dark">{value.title}</h3>
                <p className="text-dark/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-dark">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Delesa Gebisa",
                role: "Operations Manager",
                bio: "Oversees daily farm operations and coordinates with local distributors.",
                img: "/images/avatar.png"
              },
              {
                name: "Firaol Delesa",
                role: "Veterinary Consultant",
                bio: "Specializes in holistic livestock health. Ensures all animals receive top-tier care.",
                img: "/images/avatar.png"
              },
              {
                name: "Lebeta Ararsa",
                role: "Finance Manager",
                bio: "Oversees campanies financial operations and transactions..",
                img: "/images/avatar.png"
              }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200"
                    style={{ backgroundImage: `url('${member.img}')`, backgroundSize: 'cover' }}></div>
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-dark/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-secondary/20 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6 text-center text-dark">Certifications & Affiliations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["USDA Organic", "Animal Welfare Approved", "Local Farm Co-op", "Grass-Fed Certified"].map((cert, i) => (
              <div key={i} className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium text-dark">
                {cert}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-dark">Visit Our Farm</h2>
          <p className="text-lg text-dark/80 max-w-2xl mx-auto mb-8">
            We welcome visitors for farm tours every [Day]! See our cattle grazing, learn about sustainable practices, 
            and taste fresh farm products.
          </p>
          <button className="bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-md transition">
            Book a Tour
          </button>
        </section> */}
      </div>
    </div>
  );
}