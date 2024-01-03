import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ItemList = ({ shoes }) => {
  return !shoes ? (
    <p>No hay zapatillas disponibles.</p>
  ) : (
    <Swiper
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      slidesPerGroup={4}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      className="max-w-4xl"
    >
      {shoes.map((shoe) => (
        <SwiperSlide key={shoe.id}>
          <Item shoe={shoe} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemList;