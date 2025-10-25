import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperScrollbar = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/pv2Gd88b/a-modern-flat-illustration-depicting-a-d-Oi-V8da5h-S06-W85-EWxs-Thww-qiu52-OS9-K3-QLahu9-C4h-Q.jpg",
      title: "SkillSwap – Learn. Share. Grow. Together.",
      subtitle:
        "Exchange skills, build connections, and discover new passions in your local community.",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/8n0JBsrJ/a-realistic-photograph-with-vibrant-colo-v-Cwrl-Kx-FTEe-Q5w-XVB-AOkw-g-H1rvw-No-T7697k-5e-Y4z-Aw.jpg",
      title: "Play Your First Chord Today",
      subtitle: "Master music with fun beginner-friendly lessons near you.",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/99XnS22W/a-modern-vector-illustration-of-diverse-DHMc-XRe-QLKUu9bn-Mk4i-RQ-kps-Rlzj-LTRmt4-Cbgn-HIb-XQ.jpg",
      title: "Speak Confidently. Anywhere.",
      subtitle:
        "Improve your English with real conversations and friendly guidance.",
    },
    {
      id: 4,
      image:
        "https://i.ibb.co.com/mVJWtBGL/a-cinematic-photograph-of-a-young-studen-72-QA6-w-Rh653w-A2o-L6-Pg-vz1-RJ7yf-Ra2-SMD4-HUa2-Nw-Q.jpg",
      title: "Start Building Your Digital Future",
      subtitle:
        "Learn coding from passionate local mentors — zero experience needed!",
    },
    {
      id: 5,
      image:
        "https://i.ibb.co.com/B5TcN8Fj/a-clean-minimalist-banner-illustration-o-ew2tja1-ESxy-Hrm-NAQe-ERJw-Njm-HIPMQg-M5-RMydrr-HNA.jpg",
      title: "Relax. Recharge. Rebalance.",
      subtitle: "Stress relief through gentle yoga and mindful breathing.",
    },
    {
      id: 6,
      image:
        "https://i.ibb.co.com/21K8SN3V/a-warm-cozy-illustration-of-a-person-sit-w9w-Pwrxn-Qp-Ox11py-PCe-Psg-Vo6-HJlsm-Q4uf-BYh-egf6i-Q.jpg",
      title: "Write Stories That Inspire",
      subtitle: "Unlock creativity with guided storytelling workshops.",
    },
    {
      id: 7,
      image:
        "https://i.ibb.co.com/Xk6zBwTs/a-vibrant-realistic-photograph-of-a-youn-mr9-L4z7-DTGORn-S7u-O9c-Cmg-DLE9ztq1-Skmx6kz53-SVzfw.jpg",
      title: "Capture Life Like Never Before",
      subtitle: "Learn composition, lighting, and pro-level camera skills.",
    },
    {
      id: 8,
      image:
        "https://i.ibb.co.com/6JgS85Tc/a-vibrant-photograph-of-a-traditional-ba-Hlq6-Dcfb-TH6q-U7-V3-Gsc2-Yw-w-Cnei-M7-TRz-Otbpq-Ww8-PZ1-A.jpg",
      title: "Taste the Flavors of Bangladesh",
      subtitle: "Learn to cook delicious local dishes step by step!",
    },
    {
      id: 9,
      image:
        "https://i.ibb.co.com/4w1C2t7n/a-modern-flat-vector-illustration-of-a-b-BUj-TWXc8-Q7-W93-J711-Ep-HRQ-Mv-Bw-JVXYRXK1f-Dn-Fbr-Juig.jpg",
      title: "Design Your Own Creative World",
      subtitle: "Learn modern design tools and create stunning visuals.",
    },
  ];

  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-5 rounded-xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperScrollbar;
