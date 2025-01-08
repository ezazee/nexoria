import "@/styles/globals.css";
import "@/styles/modal-video.css";
import "lightgallery/css/lightgallery.css";
import LoadingScreen from "@/components/Common/Loader";
import SideMenu from "@/components/SideMenu";
import MouseCursor from "@/components/Common/MouseCursor";
import ScrollToTop from "@/components/Common/ScrollToTop";
import WhatsAppPopup from "@/components/Common/WhatsAppPopup";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import generateStylesheetObject from "@/common/generateStylesheetsObject";

export const metadata = {
  title: "Nexoria Creative",
  description: "Nexoria Creative - Most Creative Digital Agency",
  keywords: [
    "Nexoria",
    "Agency",
    "Digital",
    "Design",
    "Coding",
    "Development",
    "React",
    "Next.js",
    "Nexoria Creative",
    "Creative",
  ],
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Sora:wght@100;200;300;400;500;600;700;800&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Darker+Grotesque:wght@300;400;500;600;700;800;900&family=Inter:wght@200;300;400;500;700;900&family=Prata&display=swap",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="home-style4">
        <LoadingScreen />
        {/* Page Components */}
        <SideMenu />
        <div id="scrollsmoother-container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <MouseCursor />
        <ScrollToTop />
        <WhatsAppPopup />

        {/* Page Scripts */}
        <Script
          src="/common/assets/js/lib/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/assets/js/gsap_lib/gsap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/assets/js/gsap_lib/ScrollSmoother.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/assets/js/gsap_lib/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/common/assets/js/gsap_lib/SplitText.min.js"
          strategy="lazyOnload"
        />
        <Script src="/common/assets/js/common_js.js" strategy="lazyOnload" />
        <Script src="/assets/js/home_4_scripts.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
