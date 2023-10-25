
import './Client.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Pastikan Anda sudah menginstal Swiper

// Impor gambar
import c1 from '../../../assets/images/clients/client-1.png';
import c2 from '../../../assets/images/clients/client-2.png';
import c3 from '../../../assets/images/clients/client-3.png';
import c4 from '../../../assets/images/clients/client-4.png';
import c5 from '../../../assets/images/clients/client-5.png';
import c6 from '../../../assets/images/clients/client-6.png';
import c7 from '../../../assets/images/clients/client-7.png';
import c8 from '../../../assets/images/clients/client-8.png';

function Client() {
  return (
    <Swiper
      slidesPerView={4} // Jumlah slide yang ditampilkan dalam satu tampilan
      spaceBetween={30} // Jarak antara slide
      loop={true} // Untuk membuat slider berputar
    >
      <SwiperSlide>
        <img alt="" src={c1} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c2} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c3} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c4} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c5} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c6} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c7} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="" src={c8} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Client;