import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>My Portfolio</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <section id="about">
          <h2>About Me</h2>
          <p>Hi my name is Gavin I have been programming for about 3 years and this is my portfolio</p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>I am currently enrolled in the UCLA bootcamp for full stack web development</li>

          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/gavinrn/blackjack">Blackjack in python</a></li>
            <li><a href="https://github.com/gavinrn/weather-forecast">Weather Dashboard</a></li>
            <li><a href="https://github.com/gavinrn/Password-Generator">Password Generator</a></li>
            <li><a href="https://github.com/gavinrn/project-currency">Stock Page</a></li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <footer>
          <p>Made by Gavin McNutt</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);