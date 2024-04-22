import { Swiper as SwiperType } from "swiper";
import styles from "./Reviews.module.scss";
import { reviews } from "./slides.info";
import { ArrowSlider } from "../../components/ui-kit/icons";

interface INavigation {
  swiper: SwiperType;
  slideActive: number;
}

export function Navigation({ swiper, slideActive }: INavigation) {
  const handleSlidePrev = () => {
    if (swiper) swiper.slidePrev();
  };
  const handleSlideNext = () => {
    if (swiper) swiper.slideNext();
  };
  return (
    <>
      <div
        onClick={handleSlidePrev}
        className={`${styles.swiper_nav} ${styles.swiper_nav_left} ${
          slideActive === 0 && styles.swiper_nav_disabled
        }`}
      >
        <ArrowSlider />
      </div>
      <div
        onClick={handleSlideNext}
        className={`${styles.swiper_nav} ${styles.swiper_nav_right} ${
          slideActive === reviews.length - 3 && styles.swiper_nav_disabled
        }`}
      >
        <ArrowSlider />
      </div>
    </>
  );
}
