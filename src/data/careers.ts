export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  link: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: "a",
    title: "Senior Cloud Infrastructure Architect",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    link: "#"
  },
  {
    id: "b",
    title: "Principal Machine Learning Engineer",
    department: "AI & Data",
    location: "Office (Bangalore)",
    type: "Full-time",
    link: "#"
  },
  {
    id: "c",
    title: "Threat Intelligence Specialist",
    department: "Cybersecurity",
    location: "Hybrid (Mumbai)",
    type: "Full-time",
    link: "#"
  }
];

export const locationsList = ["All Locations", "Office (Bangalore)", "Remote (India)", "Hybrid (Mumbai)"];
export const departmentsList = ["All Departments", "Engineering", "AI & Data", "Cybersecurity"];
