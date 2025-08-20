import React, { useState } from "react";
import "./Companies.css";
import AdSense from "../AdSense/AdSense";

// Local logo imports (you'll need to add these images to your project)
// For now, we'll use placeholder divs with company initials
const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterHiring, setFilterHiring] = useState("all");

  const topCompanies = [
    {
      id: 1,
      name: "Google",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://careers.google.com",
      logo: "https://logo.clearbit.com/google.com",
      description:
        "World's leading technology company specializing in Internet-related services and products.",
      jobs: "500+ openings",
      rating: 4.8,
      reviews: "12.4k",
      location: "Global",
      employees: "156,500+",
      founded: 1998
    },
    {
      id: 2,
      name: "Microsoft",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://careers.microsoft.com",
      logo: "https://logo.clearbit.com/microsoft.com",
      description:
        "Multinational technology corporation developing software, hardware, and cloud services.",
      jobs: "450+ openings",
      rating: 4.7,
      reviews: "9.8k",
      location: "Global",
      employees: "221,000+",
      founded: 1975
    },
    {
      id: 3,
      name: "Amazon",
      type: "MNC",
      industry: "E-commerce & Technology",
      hiring: "Yes",
      website: "https://www.amazon.jobs",
      logo: "https://logo.clearbit.com/amazon.com",
      description:
        "Global e-commerce, cloud computing, digital streaming, and artificial intelligence company.",
      jobs: "600+ openings",
      rating: 4.5,
      reviews: "15.2k",
      location: "Global",
      employees: "1,608,000+",
      founded: 1994
    },
    {
      id: 4,
      name: "Apple",
      type: "MNC",
      industry: "Technology",
      hiring: "Limited",
      website: "https://www.apple.com/careers",
      logo: "https://logo.clearbit.com/apple.com",
      description:
        "Multinational technology company that designs, develops, and sells consumer electronics.",
      jobs: "200+ openings",
      rating: 4.6,
      reviews: "8.9k",
      location: "Global",
      employees: "164,000+",
      founded: 1976
    },
    {
      id: 5,
      name: "Meta (Facebook)",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://www.meta.com/careers",
      logo: "https://logo.clearbit.com/meta.com",
      description:
        "Technology conglomerate focusing on social media, virtual reality, and technology services.",
      jobs: "350+ openings",
      rating: 4.3,
      reviews: "7.2k",
      location: "Global",
      employees: "86,482+",
      founded: 2004
    },
    {
      id: 6,
      name: "Netflix",
      type: "MNC",
      industry: "Entertainment Technology",
      hiring: "Yes",
      website: "https://jobs.netflix.com",
      logo: "https://logo.clearbit.com/netflix.com",
      description:
        "Global streaming entertainment service with original content and licensed programming.",
      jobs: "120+ openings",
      rating: 4.4,
      reviews: "3.1k",
      location: "Global",
      employees: "12,800+",
      founded: 1997
    },
    {
      id: 7,
      name: "Tesla",
      type: "MNC",
      industry: "Automotive & Energy",
      hiring: "Yes",
      website: "https://www.tesla.com/careers",
      logo: "https://logo.clearbit.com/tesla.com",
      description:
        "Electric vehicle and clean energy company specializing in sustainable transportation.",
      jobs: "280+ openings",
      rating: 4.2,
      reviews: "6.5k",
      location: "Global",
      employees: "110,000+",
      founded: 2003
    },
    {
      id: 8,
      name: "Tata Consultancy Services",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.tcs.com/careers",
      logo: "https://logo.clearbit.com/tcs.com",
      description:
        "Leading global IT services, consulting and business solutions organization.",
      jobs: "800+ openings",
      rating: 4.3,
      reviews: "23.1k",
      location: "India",
      employees: "616,171+",
      founded: 1968
    },
    {
      id: 9,
      name: "Infosys",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.infosys.com/careers",
      logo: "https://logo.clearbit.com/infosys.com",
      description:
        "Global leader in next-generation digital services and consulting.",
      jobs: "550+ openings",
      rating: 4.2,
      reviews: "18.7k",
      location: "India",
      employees: "335,186+",
      founded: 1981
    },
    {
      id: 10,
      name: "Wipro",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://careers.wipro.com",
      logo: "https://logo.clearbit.com/wipro.com",
      description:
        "Leading global information technology, consulting and business process services company.",
      jobs: "400+ openings",
      rating: 4.0,
      reviews: "14.3k",
      location: "India",
      employees: "243,128+",
      founded: 1945
    },
    {
      id: 11,
      name: "HCL Technologies",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.hcltech.com/careers",
      logo: "https://logo.clearbit.com/hcltech.com",
      description:
        "Global technology company offering integrated portfolio of products, solutions and services.",
      jobs: "380+ openings",
      rating: 4.1,
      reviews: "11.9k",
      location: "India",
      employees: "222,270+",
      founded: 1991
    },
    {
      id: 12,
      name: "Tech Mahindra",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.techmahindra.com/careers",
      logo: "https://logo.clearbit.com/techmahindra.com",
      description:
        "Leading provider of digital transformation, consulting and business re-engineering services.",
      jobs: "320+ openings",
      rating: 4.0,
      reviews: "9.8k",
      location: "India",
      employees: "152,400+",
      founded: 1986
    },
    {
      id: 13,
      name: "Reliance Industries",
      type: "Corporate",
      industry: "Conglomerate",
      hiring: "Yes",
      website: "https://careers.ril.com",
      logo: "https://logo.clearbit.com/ril.com",
      description:
        "India's largest private sector company with diverse business portfolio.",
      jobs: "300+ openings",
      rating: 4.1,
      reviews: "7.5k",
      location: "India",
      employees: "236,334+",
      founded: 1966
    },
    {
      id: 14,
      name: "Adani Group",
      type: "Corporate",
      industry: "Infrastructure & Energy",
      hiring: "Yes",
      website: "https://www.adanienterprises.com/careers",
      logo: "https://logo.clearbit.com/adanienterprises.com",
      description:
        "Indian multinational conglomerate with businesses in resources, logistics, energy and agriculture.",
      jobs: "250+ openings",
      rating: 4.2,
      reviews: "5.2k",
      location: "India",
      employees: "23,000+",
      founded: 1988
    },
    {
      id: 15,
      name: "Tata Motors",
      type: "Corporate",
      industry: "Automotive",
      hiring: "Yes",
      website: "https://www.tatamotors.com/careers",
      logo: "https://logo.clearbit.com/tatamotors.com",
      description:
        "Leading global automobile manufacturer with diverse portfolio of cars, trucks and buses.",
      jobs: "180+ openings",
      rating: 4.0,
      reviews: "8.3k",
      location: "India",
      employees: "78,000+",
      founded: 1945
    },
    {
      id: 16,
      name: "Mahindra & Mahindra",
      type: "Corporate",
      industry: "Automotive",
      hiring: "Yes",
      website: "https://www.mahindra.com/careers",
      logo: "https://logo.clearbit.com/mahindra.com",
      description:
        "Indian multinational automotive manufacturing corporation with diverse business interests.",
      jobs: "160+ openings",
      rating: 4.1,
      reviews: "6.7k",
      location: "India",
      employees: "256,000+",
      founded: 1945
    },
    {
      id: 17,
      name: "Accenture",
      type: "MNC",
      industry: "Consulting & IT Services",
      hiring: "Yes",
      website: "https://www.accenture.com/in-en/careers",
      logo: "https://logo.clearbit.com/accenture.com",
      description:
        "Global professional services company with leading capabilities in digital, cloud and security.",
      jobs: "700+ openings",
      rating: 4.3,
      reviews: "42.6k",
      location: "Global",
      employees: "721,000+",
      founded: 1989
    },
    {
      id: 18,
      name: "IBM",
      type: "MNC",
      industry: "Technology & Consulting",
      hiring: "Yes",
      website: "https://www.ibm.com/in-en/careers",
      logo: "https://logo.clearbit.com/ibm.com",
      description:
        "Multinational technology and consulting company providing hardware, software and cloud services.",
      jobs: "420+ openings",
      rating: 4.1,
      reviews: "33.8k",
      location: "Global",
      employees: "282,100+",
      founded: 1911
    },
    {
      id: 19,
      name: "Oracle",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://www.oracle.com/careers",
      logo: "https://logo.clearbit.com/oracle.com",
      description:
        "Multinational computer technology corporation specializing in database software and cloud systems.",
      jobs: "380+ openings",
      rating: 4.0,
      reviews: "21.4k",
      location: "Global",
      employees: "143,000+",
      founded: 1977
    },
    {
      id: 20,
      name: "Intel",
      type: "MNC",
      industry: "Semiconductors & Technology",
      hiring: "Yes",
      website:
        "https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html",
      logo: "https://logo.clearbit.com/intel.com",
      description:
        "World's largest semiconductor chip manufacturer by revenue, developing computing technologies.",
      jobs: "320+ openings",
      rating: 4.2,
      reviews: "18.9k",
      location: "Global",
      employees: "121,100+",
      founded: 1968
    },
    {
      id: 21,
      name: "Cisco",
      type: "MNC",
      industry: "Networking & Technology",
      hiring: "Yes",
      website: "https://www.cisco.com/c/en/us/about/careers.html",
      logo: "https://logo.clearbit.com/cisco.com",
      description:
        "Multinational technology conglomerate developing networking hardware, software and telecommunications.",
      jobs: "290+ openings",
      rating: 4.3,
      reviews: "16.7k",
      location: "Global",
      employees: "83,300+",
      founded: 1984
    },
    {
      id: 22,
      name: "Samsung",
      type: "MNC",
      industry: "Electronics & Technology",
      hiring: "Yes",
      website: "https://www.samsung.com/in/about-us/careers",
      logo: "https://logo.clearbit.com/samsung.com",
      description:
        "South Korean multinational manufacturing conglomerate focusing on electronics and technology.",
      jobs: "340+ openings",
      rating: 4.1,
      reviews: "14.5k",
      location: "Global",
      employees: "287,000+",
      founded: 1938
    },
    {
      id: 23,
      name: "Sony",
      type: "MNC",
      industry: "Electronics & Entertainment",
      hiring: "Yes",
      website: "https://www.sony.com/en/SonyInfo/careers",
      logo: "https://logo.clearbit.com/sony.com",
      description:
        "Japanese multinational conglomerate specializing in electronics, gaming, entertainment and financial services.",
      jobs: "220+ openings",
      rating: 4.2,
      reviews: "11.3k",
      location: "Global",
      employees: "109,700+",
      founded: 1946
    },
    {
      id: 24,
      name: "JPMorgan Chase",
      type: "MNC",
      industry: "Banking & Financial Services",
      hiring: "Yes",
      website: "https://careers.jpmorgan.com",
      logo: "https://logo.clearbit.com/jpmorganchase.com",
      description:
        "Multinational investment bank and financial services holding company, largest bank in the United States.",
      jobs: "460+ openings",
      rating: 4.4,
      reviews: "19.8k",
      location: "Global",
      employees: "293,723+",
      founded: 2000
    },
    {
      id: 25,
      name: "Goldman Sachs",
      type: "MNC",
      industry: "Investment Banking",
      hiring: "Yes",
      website: "https://www.goldmansachs.com/careers",
      logo: "https://logo.clearbit.com/goldmansachs.com",
      description:
        "Global investment banking, securities and investment management firm serving institutional clients.",
      jobs: "280+ openings",
      rating: 4.5,
      reviews: "12.7k",
      location: "Global",
      employees: "45,100+",
      founded: 1869
    },
    {
      id: 26,
      name: "Morgan Stanley",
      type: "MNC",
      industry: "Investment Banking",
      hiring: "Yes",
      website: "https://www.morganstanley.com/people",
      logo: "https://logo.clearbit.com/morganstanley.com",
      description:
        "American multinational investment management and financial services company.",
      jobs: "240+ openings",
      rating: 4.3,
      reviews: "10.4k",
      location: "Global",
      employees: "81,567+",
      founded: 1935
    },
    {
      id: 27,
      name: "Deloitte",
      type: "MNC",
      industry: "Professional Services",
      hiring: "Yes",
      website: "https://www2.deloitte.com/global/en/careers.html",
      logo: "https://logo.clearbit.com/deloitte.com",
      description:
        "Multinational professional services network providing audit, consulting, tax and advisory services.",
      jobs: "520+ openings",
      rating: 4.2,
      reviews: "38.9k",
      location: "Global",
      employees: "456,626+",
      founded: 1845
    },
    {
      id: 28,
      name: "PwC",
      type: "MNC",
      industry: "Professional Services",
      hiring: "Yes",
      website: "https://www.pwc.com/gx/en/careers.html",
      logo: "https://logo.clearbit.com/pwc.com",
      description:
        "Multinational professional services network of firms operating as partnerships under the PwC brand.",
      jobs: "480+ openings",
      rating: 4.1,
      reviews: "36.2k",
      location: "Global",
      employees: "364,000+",
      founded: 1998
    },
    {
      id: 29,
      name: "EY",
      type: "MNC",
      industry: "Professional Services",
      hiring: "Yes",
      website: "https://www.ey.com/en_in/careers",
      logo: "https://logo.clearbit.com/ey.com",
      description:
        "Multinational professional services partnership with focus on assurance, tax, transaction and advisory services.",
      jobs: "440+ openings",
      rating: 4.0,
      reviews: "32.7k",
      location: "Global",
      employees: "365,399+",
      founded: 1989
    },
    {
      id: 30,
      name: "KPMG",
      type: "MNC",
      industry: "Professional Services",
      hiring: "Yes",
      website: "https://home.kpmg/xx/en/home/careers.html",
      logo: "https://logo.clearbit.com/kpmg.com",
      description:
        "Multinational professional services network and one of the Big Four accounting organizations.",
      jobs: "380+ openings",
      rating: 4.1,
      reviews: "28.4k",
      location: "Global",
      employees: "265,000+",
      founded: 1987
    }
  ];

  const industries = [
    "all",
    "Technology",
    "E-commerce & Technology",
    "IT Services",
    "Conglomerate",
    "Entertainment Technology",
    "Automotive & Energy"
  ];
  const companyTypes = ["all", "MNC", "Corporate"];
  const hiringStatuses = ["all", "Yes", "Limited"];

  const filteredCompanies = topCompanies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      filterIndustry === "all" || company.industry === filterIndustry;
    const matchesType = filterType === "all" || company.type === filterType;
    const matchesHiring =
      filterHiring === "all" || company.hiring === filterHiring;

    return matchesSearch && matchesIndustry && matchesType && matchesHiring;
  });

  // Function to generate a color based on company name for consistent fallback backgrounds
  const getColorFromName = (name) => {
    const colors = [
      "#3B82F6",
      "#10B981",
      "#F59E0B",
      "#EF4444",
      "#8B5CF6",
      "#EC4899",
      "#06B6D4",
      "#84CC16",
      "#F97316",
      "#6366F1"
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="companies-page">
      {/* Hero Section */}
      <div className="companies-hero">
        <div className="hero-content">
          <h1>Discover Top Companies</h1>
          <p>
            Find your perfect workplace among {topCompanies.length}+ leading
            employers
          </p>
        </div>
      </div>

      <div className="companies-container">
        {/* Search and Filters */}
        <div className="companies-filters">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search companies or industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <select
              value={filterIndustry}
              onChange={(e) => setFilterIndustry(e.target.value)}
            >
              <option value="all">All Industries</option>
              {industries
                .filter((ind) => ind !== "all")
                .map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
            </select>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              {companyTypes
                .filter((type) => type !== "all")
                .map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
            </select>

            <select
              value={filterHiring}
              onChange={(e) => setFilterHiring(e.target.value)}
            >
              <option value="all">All Statuses</option>
              {hiringStatuses
                .filter((status) => status !== "all")
                .map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing {filteredCompanies.length} of {topCompanies.length}{" "}
            companies
          </p>
        </div>

        {/* Ad Banner */}
        <div className="ad-section">
          <AdSense
            slot="3581145953"
            format="auto"
            responsive="true"
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1915488793968759"
            data-ad-slot="3581145953"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* Companies Grid */}
        <div className="company-list">
          {filteredCompanies.length === 0 ? (
            <div className="no-companies">
              <i className="fas fa-building"></i>
              <h3>No companies found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            filteredCompanies.map((company) => (
              <div key={company.id} className="company-card">
                <div className="company-header">
                  <div className="company-logo-container">
                    <div
                      className="company-logo-fallback"
                      style={{
                        backgroundColor: getColorFromName(company.name)
                      }}
                    >
                      {company.name.charAt(0)}
                    </div>
                  </div>
                  <div className="company-basic-info">
                    <h3>{company.name}</h3>
                    <span className="company-type">{company.type}</span>
                  </div>
                  <div className="company-rating">
                    <span className="rating-stars">{company.rating} ★</span>
                    <span className="rating-count">({company.reviews})</span>
                  </div>
                </div>

                <div className="company-description">
                  <p>{company.description}</p>
                </div>

                <div className="company-details">
                  <div className="detail-item">
                    <i className="fas fa-industry"></i>
                    <span>{company.industry}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{company.location}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-briefcase"></i>
                    <span>{company.jobs}</span>
                  </div>
                </div>

                <div className="company-footer">
                  <div className="hiring-status">
                    <span
                      className={`status-indicator ${company.hiring.toLowerCase()}`}
                    ></span>
                    <span
                      className={`hiring-text ${
                        company.hiring === "Yes"
                          ? "hiring-yes"
                          : "hiring-limited"
                      }`}
                    >
                      {company.hiring === "Yes"
                        ? "Actively Hiring"
                        : "Limited Openings"}
                    </span>
                  </div>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-website"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Careers
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Ad Banner */}
        <div className="ad-section">
          <AdSense
            slot="3581145953"
            format="auto"
            responsive="true"
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1915488793968759"
            data-ad-slot="3581145953"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* Newsletter Section */}
        <div className="companies-newsletter">
          <div className="newsletter-content">
            <h3>Get Company Updates</h3>
            <p>Stay informed about new opportunities and hiring trends</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
