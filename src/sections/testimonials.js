/** @jsx jsx */
import dynamic from 'next/dynamic';
import { jsx, Box, Container } from 'theme-ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
const Testimonial = dynamic(() => import('components/cards/testimonial'));
// import Testimonial from 'components/cards/testimonial';
import avatar5 from 'assets/images/testimonials/Aurizoneide-1.jpeg';

import avatar1 from 'assets/images/testimonials/Holcenis-Bertino_.jpg';


const data = [
  [
    {
      id: 1,
      avatar: avatar1,
      name: 'Holcenis Bertino',
      username: '@holcenisbertino',
      text: `A SkeBug Music é a melhor do mercado, grande variedade artistas.`,
    },
  ],
  [
    {
      id: 2,
      avatar: avatar5,
      name: 'Aurizoneide Mateus',
      username: '@aurizoneidemateus',
      text: `Obrigado por fazer dos meus dias um pouquinho melhor. Plataforma execelente para comprar e ouvir músicas.`,
    },
  ],
];

const Testimonials = () => {
  const options = {
    spaceBetween: 20,
    loop: false,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Depoimentos"
          description="O que os nossos usuários dizem sobre a SkeBug Music"
        />
      </Container>
      <Swiper sx={styles.carousel} {...options}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map((slide) => (
              <Testimonial key={slide.id} data={slide} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Box sx={styles.testimonials}></Box> */}
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#FFFCF7',
    pt: [10, null, null, 9, 10, 11, 11],
    pb: [7, null, null, 7, 7, 9, 9],
  },
  heading: {
    mb: [7, null, null, null, 8],
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  carousel: {
    '&.swiper-container': {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
