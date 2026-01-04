import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CertificateModal from "../Components/CertificateModal";
import certificatesData from "../data/certificates.json";
import SEO from "../Components/SEO";

const categories = ["All", "2024", "2025", "Hackathon"];

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Load local JSON
  useEffect(() => {
    // Use local data directly
    const localData = certificatesData.map(c => ({
        ...c,
        image_url: c.images ? c.images[0] : (c.image || "") // Use first image from array if available
    }));
    setCertificates(localData);
  }, []);

  const filtered = certificates
    .filter((c) =>
      selectedCategory === "All" ? true : c.category === selectedCategory
    )
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortBy === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className="px-6 lg:px-20 py-12 bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen" id="certificates">
      <SEO 
        title="Certificates & Achievements" 
        description="View our certifications and achievements in IoT and Robotics competitions."
      />

      <h1 className="text-4xl font-bold text-center mb-10 golden-text">
        Our Achievements
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-lg text-black
              ${selectedCategory === cat ? "golden-bg scale-110" : "golden-btn"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row justify-between mb-8 gap-4">
        <input
          type="text"
          placeholder="Search certificates..."
          className="px-4 py-2 rounded-lg w-full sm:w-1/2 bg-[var(--bg-secondary)] golden-border-textured h-12 text-[var(--text-primary)] focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-lg w-full sm:w-1/4 golden-btn shadow-lg text-black appearance-none h-12 flex items-center justify-center text-center"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest" className="text-black bg-white">Newest First</option>
          <option value="oldest" className="text-black bg-white">Oldest First</option>
        </select>
      </div>

      {/* Certificate Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-[var(--bg-secondary)] shadow-md rounded-lg p-4 cursor-pointer golden-border-textured hover:shadow-2xl transition-all duration-200"
              onClick={() => setSelectedCertificate(cert)}
            >
              <img
                src={cert.image_url || "https://placehold.co/600x400?text=No+Certificate"}
                alt={cert.name}
                className="h-48 w-full object-cover rounded-md"
              />

              <h2 className="font-bold text-xl mt-3 text-[var(--text-primary)]">{cert.name}</h2>
              <p className="golden-text font-bold">{cert.date}</p>
            </motion.div>
          ))
        ) : (
             <p className="text-center col-span-full">
                {certificates.length === 0 ? "Loading..." : "No certificates found matching your criteria."}
             </p>
        )}
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          close={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}
