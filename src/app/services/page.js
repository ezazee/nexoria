import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import MouseCursor from "@/components/Common/MouseCursor";
import ScrollToTop from "@/components/Common/ScrollToTop";
//= Page Components
import SideMenu from "@/components/SideMenu";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Works from "@/components/Works";
import Newsletter from "@/components/Newsletter";
import Screens from "@/components/Screens";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/Common/WhatsAppPopup";

export const metadata = {
  title: 'Nexoria Creative',
  icons: {
    icon: "/assets/img/fav2.png",
    shortcut: "/assets/img/fav2.png",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap',
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/ionicons.css',
      '/common/assets/css/lib/animate.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/assets/css/home_4_style.css'
    ])
  }
}

export default function Services() {
  return (
    <body className="home-style4">
      <LoadingScreen />
      {/* Page Components */}
      <SideMenu />
      <div id="scrollsmoother-container">
        <Header />
        <main>
          <Features />
        </main>
        <Footer />
      </div>
      <MouseCursor />
      <ScrollToTop />
      <WhatsAppPopup />
      {/* Page Scripts */}
      <Script src="/common/assets/js/lib/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/gsap.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/ScrollSmoother.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/SplitText.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/common_js.js" strategy="lazyOnload" />
      <Script src="/home_4/assets/js/home_4_scripts.js" strategy="lazyOnload" />
    </body>
  )
}
