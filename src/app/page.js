//= Scripts
import generateStylesheetObject from "@/common/generateStylesheetsObject";

//= Page Components
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Works from "@/components/Works";
import Newsletter from "@/components/Newsletter";
import Screens from "@/components/Screens";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Header from "@/components/Header";

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
      "/assets/css/home_4_style.css",
    ]),
  },
};

export default function Home4() {
  return (
    <main>
      <Header />
      <Features />
      <Partners />
      <Works />
      <Newsletter />
      <Screens />
      <Testimonials />
      <Download />
      {/* <Blog /> */}
    </main>
  );
}
