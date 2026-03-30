import aviation1 from "@/assets/projects/aviation1.jpg";
import aviation2 from "@/assets/projects/aviation2.jpeg";
import aviation3 from "@/assets/projects/aviation3.jpeg";
import aviation4 from "@/assets/projects/aviation4.jpeg";
import billboard1 from "@/assets/projects/billboard1.jpg";
import billboard2 from "@/assets/projects/billboard2.jpg";
import billboard3 from "@/assets/projects/billboard3.jpg";
import brand1 from "@/assets/projects/brand1.jpg";
import brand2 from "@/assets/projects/brand2.png";
import faisal1 from "@/assets/projects/faisal1.jpg";
import faisal2 from "@/assets/projects/faisal2.jpg";
import faisal3 from "@/assets/projects/faisal3.jpg";
import faisal4 from "@/assets/projects/faisal4.jpg";
import panaflex1 from "@/assets/projects/panaflex1.jpg";
import signageMidnight from "@/assets/projects/signage-midnight.jpg";
import lettersMaking from "@/assets/projects/letters-making.jpg";
import acrylicCutting from "@/assets/projects/acrylic-cutting.jpg";
import wallArt from "@/assets/projects/wall-art.jpg";
import threeDLetters from "@/assets/projects/3d-letters.jpg";
import page1 from "@/assets/portfolio/page1.jpeg";
import page2 from "@/assets/portfolio/page2.jpg";
import page3 from "@/assets/portfolio/page3.jpg";
import page4 from "@/assets/portfolio/page4.jpg";
import page5 from "@/assets/portfolio/page5.jpg";

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tags: string[];
  highlight: string;
  scopeOfWork: string[];
  client: string;
  location: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "503-aviation-base-workshop",
    title: "503 Aviation Base Workshop EME",
    subtitle: "MI-17 Overhaul Hangar Renovation",
    description: "Complete hangar renovation including LED workstations, floor marking, signage boards, and safety installations. Inaugurated by General Qamar Javed Bajwa.",
    fullDescription: "RTS Advertising Hub ne 503 Aviation Base Workshop EME ke liye MI-17 Overhaul Hangar ki complete renovation ki. Is project mein aircraft maintenance ke liye portable LED workstations design aur install kiye gaye, floor marking ki gayi, safety signage boards lagaye gaye, aur capability display boards banaye gaye. Yeh project Chief of Army Staff General Qamar Javed Bajwa ne inaugurate kiya aur national media coverage mili.",
    image: page1,
    images: [page1, aviation1, aviation3 ],
    tags: ["Defense", "Renovation", "LED Signage"],
    highlight: "National Recognition",
    scopeOfWork: [
      "Aircraft Maintenance Working Plate Forms",
      "Portable LED Workstations (in front of each aircraft)",
      "Floor Marking & Safety Lines",
      "Capability Signage Boards",
      "3D Electric Wiring Display Systems",
      "Safety Glass Frames & Installation",
    ],
    client: "Pakistan Army — EME Corps",
    location: "503 Aviation Base Workshop, Rawalpindi",
    year: "2023",
  },
  {
    id: 2,
    slug: "hangar-systems-signage",
    title: "Hangar Systems & Signage",
    subtitle: "Comprehensive Aviation Facility",
    description: "Capability signage boards, 3D electric wiring displays, safety glass frames, and workstation floor pasting for aviation maintenance teams.",
    fullDescription: "Aviation facility ke liye comprehensive signage aur display systems ka project. Is mein capability boards, 3D wiring displays, safety installations, aur workstation floor designs shamil thay. Har cheez military-grade quality standards ke mutabiq banai gayi.",
    image: page2,
    images: [page2, aviation1, aviation2, aviation3,],
    tags: ["Signage", "3D Systems", "Industrial"],
    highlight: "High-Profile Project",
    scopeOfWork: [
      "Capability Signage Boards",
      "3D Electric Wiring Display",
      "Safety Glass Frames",
      "Workstation Floor Pasting",
      "Directional Signage",
    ],
    client: "Pakistan Army",
    location: "Rawalpindi",
    year: "2023",
  },
  {
    id: 3,
    slug: "cda-kort-faisal-masjid",
    title: "CDA & KORT Joint Project",
    subtitle: "Faisal Masjid Accessibility",
    description: "Designed and installed signage boards for disabled person's facilities and directional signboards across Faisal Masjid premises.",
    fullDescription: "CDA aur KORT ke joint project mein Faisal Masjid ke premises mein disabled persons ke liye accessibility signage boards design aur install kiye gaye. Directional signboards, facility markers, aur information boards lagaye gaye taake visitors ko asaani ho. Yeh project national landmark ke liye tha.",
    image: page3,
    images: [page3, faisal1,  faisal3, ],
    tags: ["Government", "Accessibility", "Public Welfare"],
    highlight: "Landmark Project",
    scopeOfWork: [
      "Disabled Person Facility Signage",
      "Directional Signboards",
      "Information Display Boards",
      "Accessibility Markers",
      "Facility Identification Signs",
    ],
    client: "CDA & KORT",
    location: "Faisal Masjid, Islamabad",
    year: "2024",
  },
  {
    id: 4,
    slug: "billboard-network",
    title: "Billboard Network",
    subtitle: "Premium Advertising Reach",
    description: "Strategic billboard placements in prime locations including Westminster School, Allied School, and major chowks across Rawalpindi.",
    fullDescription: "Rawalpindi aur Islamabad ke prime locations par billboard network establish kiya gaya. DHA, Capital Smart City, schools, aur major chowks par strategic billboards lagaye gaye. Har billboard ke liye high-quality flex/vinyl printing aur professional installation ki gayi.",
    image: page4,
    images: [page4, billboard1, billboard3],
    tags: ["Outdoor", "Billboard", "Real Estate"],
    highlight: "Premium Locations",
    scopeOfWork: [
      "Site Selection & Survey",
      "Billboard Structure Installation",
      "Flex/Vinyl Printing",
      "Lighting & Illumination",
      "Monthly Maintenance",
    ],
    client: "DHA, Capital Smart City & Others",
    location: "Rawalpindi & Islamabad",
    year: "2024",
  },
  {
    id: 5,
    slug: "brand-campaigns",
    title: "Brand Campaigns",
    subtitle: "Print & Digital Media",
    description: "Executed campaigns for Sony, OPPO, and various local businesses including signage, branding, and print media advertising.",
    fullDescription: "Mukhtalif brands ke liye comprehensive advertising campaigns execute kiye gaye. Sony, OPPO, aur local businesses ke liye signage, branding materials, print media ads, aur promotional items design aur deploy kiye gaye. Har campaign client ki requirements ke mutabiq customize kiya gaya.",
    image: page5,
    images: [page5, brand1, brand2, acrylicCutting, wallArt],
    tags: ["Branding", "Print Media", "Corporate"],
    highlight: "Diverse Portfolio",
    scopeOfWork: [
      "Brand Identity Design",
      "Signage & Display Boards",
      "Print Media Campaigns",
      "Promotional Materials",
      "Corporate Branding",
    ],
    client: "Sony, OPPO & Local Businesses",
    location: "Pan-Pakistan",
    year: "2024-2025",
  },
];
