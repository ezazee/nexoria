"use client";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 150,
  centeredSlides: true,
  slidesPerView: "auto",
  speed: 15000,
  navigation: false,
  autoplay: true,
  loop: true,
};

function Screens() {
  return (
    <section className="tc-screens-style4">
      <div className="container">
        <div className="title text-center" data-speed="0.5" data-lag="0.5">
          <h2 className="fsz-60">
            Discover What Users Are Saying About Their Experiences Using Our
            Service
          </h2>
        </div>
        <div className="screens-content">
          <div className="sliders">
            <div className="row">
              <div className="col-lg-4 d-none d-lg-block">
                <div className="slider-colmn">
                  <Swiper {...swiperOptions} style={{ overflow: "visible" }}>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/1.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/2.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/3.png" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="slider-colmn" dir="rtl">
                  <Swiper {...swiperOptions} style={{ overflow: "visible" }}>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/4.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/5.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/6.png" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-block">
                <div className="slider-colmn">
                  <Swiper {...swiperOptions} style={{ overflow: "visible" }}>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/3.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/2.png" alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img img-cover">
                        <img src="/assets/img/screens/1.png" alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Screens;
