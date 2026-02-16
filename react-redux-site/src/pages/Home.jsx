import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      
      <main className="main-content">
        {/* Hero секция */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-small">Добро пожаловать в</span>
              <span className="hero-title-large">GrandMotors</span>
            </h1>
            <p className="hero-subtitle">
              Ваш автомобиль премиум-класса — ближе, чем вы думаете
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Смотреть каталог</button>
              <button className="btn btn-outline">Записаться на тест-драйв</button>
            </div>
          </div>
        </section>

        {/* Превью каталога */}
        {/* Превью каталога */}
<section className="preview-section">
  <div className="container">
    <h2 className="section-title">Популярные модели</h2>
    <div className="cars-grid">
      {/* Карточка Mercedes-Benz S-Class */}
      <div className="car-card">
        <div className="car-image-container">
          <img 
            src="https://i.pinimg.com/1200x/42/3e/99/423e998884b603c3889822e8be6c8832.jpg" 
            alt="Mercedes-Benz S-Class" 
            className="car-image"
          />
          <div className="car-overlay">
            <span className="car-price">от 12 000 000 ₽</span>
          </div>
        </div>
        <div className="car-info">
          <h3 className="car-name">Mercedes-Benz S-Class</h3>
          <div className="car-specs">
            <span className="car-spec">2024</span>
            <span className="car-spec">367 л.с.</span>
            <span className="car-spec">9.2 л/100км</span>
          </div>
          <button className="car-btn">Подробнее</button>
        </div>
      </div>

      {/* Карточка BMW 7 Series */}
      <div className="car-card">
        <div className="car-image-container">
          <img 
            src="https://i.pinimg.com/736x/fe/d1/b3/fed1b3844d38e8b87fd8958f406fff70.jpg" 
            alt="BMW 7 Series" 
            className="car-image"
          />
          <div className="car-overlay">
            <span className="car-price">от 11 500 000 ₽</span>
          </div>
        </div>
        <div className="car-info">
          <h3 className="car-name">BMW 7 Series</h3>
          <div className="car-specs">
            <span className="car-spec">2024</span>
            <span className="car-spec">380 л.с.</span>
            <span className="car-spec">8.8 л/100км</span>
          </div>
          <button className="car-btn">Подробнее</button>
        </div>
      </div>

      {/* Карточка Audi A8 */}
      <div className="car-card">
        <div className="car-image-container">
          <img 
            src="https://i.pinimg.com/1200x/df/de/db/dfdedbd9a62425d854ba3b61451a7923.jpg" 
            alt="Audi A8" 
            className="car-image"
          />
          <div className="car-overlay">
            <span className="car-price">от 10 800 000 ₽</span>
          </div>
        </div>
        <div className="car-info">
          <h3 className="car-name">Audi A8</h3>
          <div className="car-specs">
            <span className="car-spec">2024</span>
            <span className="car-spec">340 л.с.</span>
            <span className="car-spec">8.5 л/100км</span>
          </div>
          <button className="car-btn">Подробнее</button>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;