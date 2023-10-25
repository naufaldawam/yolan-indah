import './Counters.css';
import React, { useEffect } from 'react';


//import stats image
import StatesImage from "../../../assets/images/stats-img.svg"

function Counters() {
  useEffect(() => {
    // Menginisialisasi PureCounter atau animasi counter lainnya jika digunakan
    const pureCounters = document.querySelectorAll('.purecounter');
    pureCounters.forEach((counter) => {
      const start = parseInt(counter.getAttribute('data-purecounter-start'), 10) || 0;
      const end = parseInt(counter.getAttribute('data-purecounter-end'), 10) || 0;
      const duration = parseInt(counter.getAttribute('data-purecounter-duration'), 10) || 1;
      const step = Math.abs(Math.floor(duration / (end - start)));

      let current = start;
      const increment = start < end ? 1 : -1;
      const timer = setInterval(() => {
        current += increment;
        counter.textContent = current;

        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    });
  }, []);

  return (
    <section id="stats-counter" className="stats-counter">
      <div className="counter" data-aos="fade-up">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <img src={StatesImage} alt="Stats Image" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong> consequuntur quae diredo para mesta</p>
            </div>
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="453" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counters;
