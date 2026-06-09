export interface IndustryData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  metrics: { value: string; label: string }[];
  detailsTitle: string;
  detailsDesc: string;
  highlights: { title: string; desc: string; icon: string }[];
  bentoTitle: string;
  bentoItems: { title: string; desc: string; cols: number; imageUrl?: string; imageAlt?: string; icon?: string }[];
}

export const industriesData: Record<string, IndustryData> = {
  "fintech": {
    slug: "fintech",
    title: "FinTech Analytics Platform",
    tagline: "Secure & Compliant",
    description: "Engineering secure, compliant fintech ecosystems and real-time trading dashboards for global banking leaders and financial innovators.",
    heroImage: "/images/growth_metrics.png",
    heroImageAlt: "Modern trading floor displaying multi-screen stock indices.",
    metrics: [
      { value: "Continuous", label: "Transaction Reliability" },
      { value: "Secure", label: "Compliance Hardened" }
    ],
    detailsTitle: "Secure Financial Architecture",
    detailsDesc: "Financial technology requires zero margin of error, sub-millisecond data pipelines, and adherence to shifting international standards.",
    highlights: [
      { title: "High-Frequency Ledger", desc: "Constructing distributed databases optimized to process high transaction volumes with zero lock delay.", icon: "account_balance" },
      { title: "Automated Fraud Detection", desc: "Integrating real-time machine learning anomaly detectors directly inside ledger transactions.", icon: "security" }
    ],
    bentoTitle: "Fintech Integration Scope",
    bentoItems: [
      { title: "Real-time Trading Systems", desc: "Constructing high-performance client boards linking straight to global exchange markets.", cols: 12 }
    ]
  },
  "manufacturing": {
    slug: "manufacturing",
    title: "Manufacturing ERP Solutions",
    tagline: "Industry 4.0",
    description: "Optimizing supply chain operations, automated warehouse tracking, and predictive factory maintenance using modern IoT integrations.",
    heroImage: "/images/enterprise_erp.png",
    heroImageAlt: "A large automated industrial assembly plant at twilight.",
    metrics: [
      { value: "-25%", label: "Equipment Downtime" },
      { value: "98.5%", label: "Supply Chain Accuracy" }
    ],
    detailsTitle: "Connected Production Lines",
    detailsDesc: "Our systems connect shop-floor industrial hardware straight to executive ERP databases to enable real-time operational views.",
    highlights: [
      { title: "Predictive Maintenance", desc: "Analyzing machine vibration sensors to alert technicians before system failures interrupt assembly lines.", icon: "precision_manufacturing" },
      { title: "Inventory Automation", desc: "Using RFID sensors to track raw parts and automatically coordinate supply orders when stockpiles deplete.", icon: "warehouse" }
    ],
    bentoTitle: "Industry 4.0 Layout",
    bentoItems: [
      { title: "Operational Control Boards", desc: "Creating unified dashboards for supervisors to monitor machinery efficiency metrics globally.", cols: 12 }
    ]
  },
  "logistics": {
    slug: "logistics",
    title: "Logistics Tracking Platform",
    tagline: "Global Supply Chain",
    description: "Streamlining shipment routing, fleet coordination, and warehouse inventory data flow with high-efficiency edge analytics.",
    heroImage: "/images/cloud_architecture.png",
    heroImageAlt: "Stylized map showing routes and shipping hubs.",
    metrics: [
      { value: "Significant", label: "Fuel Cost Savings" },
      { value: "Real-time", label: "GPS Dispatching" }
    ],
    detailsTitle: "Dynamic Route Optimizers",
    detailsDesc: "Avoid traffic delays and routing mistakes. Our software updates fleet paths dynamically using live traffic analytics.",
    highlights: [
      { title: "Fleet Management", desc: "Tracking truck diagnostics, location history, and delivery status logs live.", icon: "local_shipping" },
      { title: "Warehouse Synchronization", desc: "Direct database updates linking cargo unload events straight to supply orders.", icon: "sync" }
    ],
    bentoTitle: "Logistics Dashboard",
    bentoItems: [
      { title: "Fleet Steering Hubs", desc: "Admins assign orders and track cargo locations globally from a unified interface.", cols: 12 }
    ]
  },
  "healthcare": {
    slug: "healthcare",
    title: "Healthcare Management Platform",
    tagline: "Compliant Compliant Systems",
    description: "Developing interoperable record database networks, secure doctor portals, and telehealth communication channels that satisfy regulatory protocols.",
    heroImage: "/images/cybersecurity.png",
    heroImageAlt: "Highly secure sterile research lab facilities.",
    metrics: [
      { value: "Compliant", label: "Compliance Certified" },
      { value: "Near-Perfect", label: "Network Uptime" }
    ],
    detailsTitle: "Interoperable Patient Portals",
    detailsDesc: "Unifying clinical data across clinics while ensuring strict compliance with patient privacy laws.",
    highlights: [
      { title: "EHR Interoperability", desc: "Allowing hospitals to share files safely using standardized HL7/FHIR record protocols.", icon: "health_and_safety" },
      { title: "Secure Telemedicine", desc: "Encrypted direct audio-video channels linking patients to doctors safely.", icon: "video_chat" }
    ],
    bentoTitle: "Medical Dashboards",
    bentoItems: [
      { title: "Provider Core Board", desc: "Allowing doctors to view patient histories and issue prescriptions securely.", cols: 12 }
    ]
  }
};
