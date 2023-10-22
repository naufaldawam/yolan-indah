import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { PlayCircle, Easel, Gem, GeoAlt, Command } from 'react-bootstrap-icons';
import './Hero.css';

// import image
import ImageHero from '../../assets/images/hero-img.svg'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="position-relative">
        <Row className="gy-5" data-aos="fade-in">
          <Col lg={6} order={{ xs: 2, lg: 1 }} className="d-flex flex-column justify-content-center text-center text-lg-start">
            <h2>
              Welcome to <span>Impact</span>
            </h2>
            <p>
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Button href="#about" className="btn-get-started">
                Get Started
              </Button>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <PlayCircle />
                <span>Watch Video</span>
              </a>
            </div>
          </Col>
          <Col lg={6} order={{ xs: 1, lg: 2 }}>
            <Image src={ImageHero} fluid alt="" data-aos="zoom-out" data-aos-delay="100" />
          </Col>
        </Row>
      </div>

      <div className="icon-boxes position-relative">
        <div className="position-relative">
          <Row className="gy-4 mt-5">
            <Col xl={3} md={6} data-aos="fade-up" data-aos-delay={100}>
              <div className="icon-box">
                <div className="icon">
                  <Easel />
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Lorem Ipsum
                  </a>
                </h4>
              </div>
            </Col>
            <Col xl={3} md={6} data-aos="fade-up" data-aos-delay={200}>
              <div className="icon-box">
                <div className="icon">
                  <Gem />
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Sed ut perspiciatis
                  </a>
                </h4>
              </div>
            </Col>
            <Col xl={3} md={6} data-aos="fade-up" data-aos-delay={300}>
              <div className="icon-box">
                <div className="icon">
                  <GeoAlt />
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Magni Dolores
                  </a>
                </h4>
              </div>
            </Col>
            <Col xl={3} md={6} data-aos="fade-up" data-aos-delay={500}>
              <div className="icon-box">
                <div className="icon">
                  <Command />
                </div>
                <h4 className="title">
                  <a href="" className="stretched-link">
                    Nemo Enim
                  </a>
                </h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default Hero;
