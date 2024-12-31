"use client";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css"; // Pastikan ini sesuai dengan versi Swiper Anda

//= Components
import StatementSplitter from "@/components/Common/StatementSplitter";
//= Static Data
import data from "@/data/AppsTechnology/works.json";

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 15,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 15000,
  navigation: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
};

function Works() {
  return (
    <section className="tc-works-style4">
      <div className="about-marqee-style4">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <a href="#">
              Our Project{" "}
              <span className="icon-35 mx-5">
                <img
                  src="/home_4/assets/img/icons/star2.png"
                  alt="Nexoria Creative"
                />
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              Top-Notch Design{" "}
              <span className="icon-35 mx-5">
                <img
                  src="/home_4/assets/img/icons/star2.png"
                  alt="Nexoria Creative"
                />
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              Our Project{" "}
              <span className="icon-35 mx-5">
                <img
                  src="/home_4/assets/img/icons/star2.png"
                  alt="Nexoria Creative"
                />
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              Top-Notch Design{" "}
              <span className="icon-35 mx-5">
                <img
                  src="/home_4/assets/img/icons/star2.png"
                  alt="Nexoria Creative"
                />
              </span>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="works wow fadeInUp slow">
          <div className="row gx-0">
            {data.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <div className="work-card">
                  <a href="#" className="tag text-primary fw-bold">
                    <span className="icon-6 bg-000 rounded-circle me-2"></span>
                    {item.category}
                  </a>
                  <a href="#0" className="img img-cover">
                    <img src={item.image} alt="" />
                  </a>
                  <h4 className="fsz-30 mt-30">
                    <StatementSplitter statement={item.title} />
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tombol "more services" di tengah */}
        <div className="text-center mt-80">
          <a href="#" className="butn button_su_inner bg-primary text-white">
            <span className="button_text_container fsz-16 text-uppercase">
              more projects
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Works;
