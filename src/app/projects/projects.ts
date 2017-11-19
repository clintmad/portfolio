import { Project } from './project';

export const PROJECTS = [
    new Project("subscriptions", "Subscriptions", "Allows you to take note of subscriptions you've signed up for so you know when they renew.", "assets/images/subscriptions.png", "https://my-subs.herokuapp.com/"),
    new Project("weather", "Weather and Tech News", "Uses your location to show your the weather. The background changes according to the current weather. News feed with the latest news on tech", "assets/images/geoweather.png", "https://clintmad.github.io/geoweather/"),
    new Project("quotes", "Random Quote Generator", "Generates a random quote and changes the background color each time.", "assets/images/random-quote.png", "https://clintmad.github.io/quotes/"),
    new Project("mole", "Whack-A-Mole", "Whack-A-Mole game that keeps track of your score and your high score. Mole speeds increase as your score increases.", "assets/images/whack-a-mole.png", "https://clintmad.github.io/whack-a-mole/")
];