import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { reviews } from "./slides.info";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import styles from "./Reviews.module.scss";
import { Title, Text } from "../../components/ui-kit";
import { Navigation } from "./Navigation";

interface ISlide {
  id: number;
  img: string;
  name: string;
  city: string;
  text: string;
}

export function Slider() {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [slideActive, setSlideActive] = useState<number>(0);

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        bulletClass: styles.swiper_pagination_bullet,
        bulletActiveClass: styles.swiper_pagination_bullet_active,
        clickable: true,
      }}
      className={styles.swiper}
      style={{
        margin: "8px 29px 0px",
        padding: "24px 24px 58px",
      }}
      onSlideChange={() => setSlideActive(swiper ? swiper.activeIndex : 0)}
      onSwiper={setSwiper}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        475: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {reviews.map((review: ISlide) => {
        const { id, img, name, city, text } = review;
        return (
          <SwiperSlide
            className={styles.slide}
            key={id}
            style={{ height: "auto" }}
          >
            <SlideHeader id={id} img={img} name={name} city={city} />
            <Text size="14" classNames={styles.review}>
              {text}
            </Text>
          </SwiperSlide>
        );
      })}
      {swiper && <Navigation swiper={swiper} slideActive={slideActive} />}
    </Swiper>
  );
}

function SlideHeader({ img, name, city }: Omit<ISlide, "text">) {
  return (
    <div className={`${styles.header} row no-wrap`}>
      <div className={styles.img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.info}>
        <Title size={"h6"} tag={"h6"} classNames={styles.review_name}>
          {name}
        </Title>
        <Text size={"12"} classNames={styles.review_name}>
          {city}
        </Text>
      </div>
    </div>
  );
}
