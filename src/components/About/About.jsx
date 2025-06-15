import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Про нас</h2>
          <p>
            Паперові стакани від компанії «WestCupGroup» виготовляються у наступних об'ємах: 110 мл, 175 мл, 280 мл, 420 мл, 500 мл. Виробництво кожної паперової
            стаканчики відбувається виключно на високоякісному обладнанні, що є гарантією високої якості кінцевого продукту. Ми виготовляємо як одношарові паперові
            стаканчики, так і двошарові паперові стаканчики. Європейський картон не дає паперовому стакану зіпсуватися навіть після його тривалого контакту з напоєм.
          </p>
        </div>
        <div className="about-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
