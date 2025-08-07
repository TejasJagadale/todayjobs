import React from "react";
import "./Companies.css";
import AdSense from "../AdSense/AdSense";

const Companies = () => {
  const topCompanies = [
    {
      name: "Google",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://careers.google.com",
      logo: "https://logo.clearbit.com/google.com"
    },
    {
      name: "Microsoft",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://careers.microsoft.com",
      logo: "https://logo.clearbit.com/microsoft.com"
    },
    {
      name: "Amazon",
      type: "MNC",
      industry: "E-commerce & Technology",
      hiring: "Yes",
      website: "https://www.amazon.jobs",
      logo: "https://logo.clearbit.com/amazon.com"
    },
    {
      name: "Tata Consultancy Services (TCS)",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.tcs.com/careers",
      logo: "https://logo.clearbit.com/tcs.com"
    },
    {
      name: "Infosys",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.infosys.com/careers",
      logo: "https://logo.clearbit.com/infosys.com"
    },
    {
      name: "Wipro",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://careers.wipro.com",
      logo: "https://logo.clearbit.com/wipro.com"
    },
    {
      name: "Accenture",
      type: "MNC",
      industry: "Consulting & IT",
      hiring: "Yes",
      website: "https://www.accenture.com/in-en/careers",
      logo: "https://logo.clearbit.com/accenture.com"
    },
    {
      name: "IBM",
      type: "MNC",
      industry: "Technology",
      hiring: "Yes",
      website: "https://www.ibm.com/careers",
      logo: "https://logo.clearbit.com/ibm.com"
    },
    {
      name: "HCL Technologies",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.hcltech.com/careers",
      logo: "https://logo.clearbit.com/hcltech.com"
    },
    {
      name: "Tech Mahindra",
      type: "Corporate",
      industry: "IT Services",
      hiring: "Yes",
      website: "https://www.techmahindra.com/careers",
      logo: "https://logo.clearbit.com/techmahindra.com"
    },
    {
      name: "Capgemini",
      type: "MNC",
      industry: "Consulting & IT",
      hiring: "Yes",
      website: "https://www.capgemini.com/careers",
      logo: "https://logo.clearbit.com/capgemini.com"
    },
    {
      name: "Deloitte",
      type: "MNC",
      industry: "Consulting",
      hiring: "Yes",
      website: "https://www2.deloitte.com/in/en/careers.html",
      logo: "https://logo.clearbit.com/deloitte.com"
    },
    {
      name: "EY (Ernst & Young)",
      type: "MNC",
      industry: "Consulting",
      hiring: "Yes",
      website: "https://www.ey.com/en_in/careers",
      logo: "https://logo.clearbit.com/ey.com"
    },
    {
      name: "KPMG",
      type: "MNC",
      industry: "Consulting",
      hiring: "Yes",
      website: "https://home.kpmg/in/en/home/careers.html",
      logo: "https://logo.clearbit.com/kpmg.com"
    },
    {
      name: "PwC",
      type: "MNC",
      industry: "Consulting",
      hiring: "Yes",
      website: "https://www.pwc.in/careers.html",
      logo: "https://logo.clearbit.com/pwc.com"
    },
    {
      name: "JPMorgan Chase",
      type: "MNC",
      industry: "Banking & Finance",
      hiring: "Yes",
      website: "https://careers.jpmorgan.com",
      logo: "https://logo.clearbit.com/jpmorganchase.com"
    },
    {
      name: "Goldman Sachs",
      type: "MNC",
      industry: "Banking & Finance",
      hiring: "Yes",
      website: "https://www.goldmansachs.com/careers",
      logo: "https://logo.clearbit.com/goldmansachs.com"
    },
    {
      name: "Reliance Industries",
      type: "Corporate",
      industry: "Conglomerate",
      hiring: "Yes",
      website: "https://careers.ril.com",
      logo: "https://logo.clearbit.com/ril.com"
    },
    {
      name: "Aditya Birla Group",
      type: "Corporate",
      industry: "Conglomerate",
      hiring: "Yes",
      website: "https://careers.adityabirla.com",
      logo: "https://logo.clearbit.com/adityabirla.com"
    },
    {
      name: "Larsen & Toubro",
      type: "Corporate",
      industry: "Engineering & Construction",
      hiring: "Yes",
      website: "https://www.larsentoubro.com/corporate/careers",
      logo: "https://logo.clearbit.com/larsentoubro.com"
    }
  ];

  return (
    <div className="companies-container">
      <h1>Top Hiring Companies</h1>
      <p className="subtitle">
        Explore opportunities with leading MNCs and Corporate companies
      </p>

      <AdSense slot="3581145953" format="auto" responsive="true" />

      <div className="company-list">
        {topCompanies.map((company, index) => (
          <div key={index} className="company-card">
            <div className="company-header">
              {company.logo && (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logocom"
                />
              )}
              <h3>{company.name}</h3>
            </div>
            <div className="company-details">
              <p>
                <strong>Type:</strong> {company.type}
              </p>
              <p>
                <strong>Industry:</strong> {company.industry}
              </p>
              <p>
                <strong>Hiring Status:</strong>
                <span
                  className={
                    company.hiring === "Yes" ? "hiring-yes" : "hiring-no"
                  }
                >
                  {company.hiring}
                </span>
              </p>
            </div>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-website"
            >
              Visit Career Page
            </a>
          </div>
        ))}
      </div>

      <AdSense slot="3581145953" format="auto" responsive="true" />
    </div>
  );
};

export default Companies;
