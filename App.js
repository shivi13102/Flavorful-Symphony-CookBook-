import './App.css';
import React, { useEffect, useState } from 'react';

// Importing images
import argentinaImage from './Images/argentina.jpeg';
import asadoImage from './Images/asado.jpg';
import australiaImage from './Images/autralia.jpg';
import meatPieImage from './Images/meat_pie.jpg';
import brazilImage from './Images/brazil.jpg';
import feijoadaImage from './Images/fejijoada.jpg';
import canadaImage from './Images/canada.jpg';
import poutineImage from './Images/poutine.jpg';
import chinaImage from './Images/china.jpeg';
import pekingDuckImage from './Images/peking_duck.jpg';
import indiaImage from './Images/india.jpg';
import butterChickenImage from './Images/butter_chicken.jpg';
import vietnamImage from './Images/vietnam.jpg';
import phoImage from './Images/pho.jpg';
import peruImage from './Images/peru.jpg';
import cevicheImage from './Images/ceviche.jpg';
import southKoreaImage from './Images/south korea.jpg';
import kimchiImage from './Images/kimchi.jpg';
import egyptImage from './Images/egypt.jpg';
import koshariImage from './Images/koshari.jpg';
import franceImage from './Images/france.jpg';
import croissantsImage from './Images/croissants.jpg';
import germanyImage from './Images/germany.jpg';
import sauerbratenImage from './Images/Sauerbarten.jpg';
import thailandImage from './Images/thailand.jpg';
import padThaiImage from './Images/pad_thai.jpg';
import spainImage from './Images/spain.jpg';
import paellaImage from './Images/paella.jpeg';
import moroccoImage from './Images/morocco.jpg';
import tagineImage from './Images/tagine.jpg';
import mexicoImage from './Images/mexico.jpg';
import tacosImage from './Images/tacos.jpg';
import greeceImage from './Images/greece.jpg';
import gyrosImage from './Images/Gyros.jpg';
import japanImage from './Images/japan.jpg';
import sushiImage from './Images/sushi.png';
import turkeyImage from './Images/turkey.jpeg';
import kebabsImage from './Images/kebabs.jpg';
import italyImage from './Images/italy.jpg';
import pizzaImage from './Images/pizza.jpg';
import choleImage from './Images/chole_bhature.jpeg';
import cinnamonImage from './Images/cinnamon rolls.jpeg';
import casseroleImage from './Images/Johnny Marzetti Casserole.jpeg';

const countriesData = [
  { name: "Argentina", image: argentinaImage, hoverImage: asadoImage },
  { name: "Australia", image: australiaImage, hoverImage: meatPieImage },
  { name: "Brazil", image: brazilImage, hoverImage: feijoadaImage },
  { name: "Canada", image: canadaImage, hoverImage: poutineImage },
  { name: "China", image: chinaImage, hoverImage: pekingDuckImage },
  { name: "India", image: indiaImage, hoverImage: butterChickenImage },
  { name: "Vietnam", image: vietnamImage, hoverImage: phoImage },
  { name: "Peru", image: peruImage, hoverImage: cevicheImage },
  { name: "South Korea", image: southKoreaImage, hoverImage: kimchiImage },
  { name: "Egypt", image: egyptImage, hoverImage: koshariImage },
  { name: "France", image: franceImage, hoverImage: croissantsImage },
  { name: "Germany", image: germanyImage, hoverImage: sauerbratenImage },
  { name: "Thailand", image: thailandImage, hoverImage: padThaiImage },
  { name: "Spain", image: spainImage, hoverImage: paellaImage },
  { name: "Morocco", image: moroccoImage, hoverImage: tagineImage },
  { name: "Mexico", image: mexicoImage, hoverImage: tacosImage },
  { name: "Greece", image: greeceImage, hoverImage: gyrosImage },
  { name: "Japan", image: japanImage, hoverImage: sushiImage },
  { name: "Turkey", image: turkeyImage, hoverImage: kebabsImage },
  { name: "Italy", image: italyImage, hoverImage: pizzaImage },
];

const recipesOfTheDay = [
  {
    name: "Chole Bhature",
    image: choleImage,
    description: "A popular North Indian dish, Chole Bhature is a combination of spicy chickpeas and fried bread. The chickpeas are simmered in a tangy, aromatic tomato-based sauce, making it a perfect companion to the crispy, golden bhature.",
  },
  {
    name: "Cinnamon Rolls",
    image: cinnamonImage,
    description: "These sweet, fluffy rolls are filled with a cinnamon-sugar mixture and baked to perfection. Topped with a creamy icing, they make for a perfect treat any time of the day.",
  },
  {
    name: "Johnny Marzetti Casserole",
    image: casseroleImage,
    description: "Johnny Marzetti Casserole is a hearty dish that combines ground beef, noodles, and tomato sauce with a cheesy topping. It's a comfort food classic, perfect for family dinners.",
  },
];

function App() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipesOfTheDay.length);
    }, 24 * 60 * 60 * 1000); // Change recipe every 24 hours

    return () => clearInterval(interval);
  }, []);

  const recipeOfTheDay = recipesOfTheDay[currentRecipeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );

    const gradientSection = document.querySelector('.gradient-section');
    if (gradientSection) {
      observer.observe(gradientSection);
    }

    return () => {
      if (gradientSection) {
        observer.unobserve(gradientSection);
      }
    };
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="title">Flavorful Symphony</h1>
        <h2 className="subtitle">Where art meets appetite.</h2>
      </header>
      <div className="gradient-section">
        <h2>Explore Cuisines from Around the World</h2>
        <div className="cards-container">
          {countriesData.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      </div>
      
      {/* Recipe of the Day Section */}
      <div className="recipe-of-the-day">
        <h2 className="recipe-of-the-day-title">Recipe of the Day</h2>
        <img 
          src={recipeOfTheDay.image} 
          alt={recipeOfTheDay.name} 
          className="recipe-image" 
        />
        <div className="recipe-description">
          <h2 className="recipe-title">{recipeOfTheDay.name}</h2>
          <p>{recipeOfTheDay.description}</p>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Flavorful Symphony. All rights reserved.</p>
        <p>Follow us on social media for more delicious recipes!</p>
      </footer>
    </div>
  );
}

const CountryCard = ({ country }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={country.image} 
        alt={country.name} 
        className="card-image" 
      />
      <div 
        className="card-hover-image" 
        style={{ backgroundImage: `url(${country.hoverImage})`, opacity: isHovered ? 1 : 0 }}
      ></div>
      <div className="card-title">{country.name}</div>
      <p>Discover the unique flavors of {country.name}.</p>
    </div>
  );
};

export default App;
