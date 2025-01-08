import generateStylesheetObject from "@/common/generateStylesheetsObject";
import HeaderServices from "@/components/services/Header";
import ServicesSection from "@/components/services/Services";

export const metadata = {
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap",
      "/common/assets/css/lib/bootstrap.min.css",
      "/common/assets/css/lib/all.min.css",
      "/common/assets/css/lib/line-awesome.css",
      "/common/assets/css/lib/themify-icons.css",
      "/common/assets/css/lib/ionicons.css",
      "/common/assets/css/lib/animate.css",
      "/common/assets/css/lib/swiper8.min.css",
      "/common/assets/css/common_style.css",
      "/assets/css/home_1_style.css",
      "/assets/css/home_4_style.css",
      "/assets/css/home_6_style.css",
    ]),
  },
};

export default function Services() {
  return (
    <main>
      <HeaderServices />
      <ServicesSection />
    </main>
  );
}
