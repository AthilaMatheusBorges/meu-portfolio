import React from 'react'

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiDart
} from 'react-icons/di'

import { RiFlutterFill } from 'react-icons/ri'

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'flutter', name: 'Flutter', icon: <RiFlutterFill /> },
  { id: 'dart', name: 'Dart', icon: <DiDart /> }
]

const TechnologiesContainer = () => {
  const { innerWidth: width, innerHeight: height } = window
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 2500
            //disableOnInteraction: true,
          }}
          loop={true}
          spaceBetween={15}
          slidesPerView={(innerWidth * 0.65) / 200}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {technologies.map(tech => (
            <SwiperSlide key={tech.id}>
              <div className="technology-card" id={tech.id}>
                {tech.icon}
                <div className="technology-info">
                  <h3>{tech.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TechnologiesContainer
