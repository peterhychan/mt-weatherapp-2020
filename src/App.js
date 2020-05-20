import React from "react";
/* CSS  */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

/* Components */
import Form from "./components/form";
import Weather from "./components/weather";
import Footer from "./components/footer";

/* API Key Used */
const WEATHER_APIKEY = process.env.REACT_APP_OPENWEATHER;

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: null,
    temp_min: null,
    error: false,
  };

  get_WeatherIcon = (rangeId) => {
    /* match the temperature with appropriate icons */
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: "wi-thunderstorm" });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: "wi-sleet" });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: "wi-storm-showers" });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: "wi-snow" });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: "wi-fog" });
        break;
      case rangeId === 800:
        this.setState({ icon: "wi-day-sunny" });
        break;
      default:
        this.setState({ icon: "wi-day-fog" });
    }
  };

  returnTemperature = (temp) => {
    return Math.floor(temp - 273.15);
  };

  getWeather = async (e) => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;
    // check if both city & country are provided
    if (city && country) {
      // fetch weather info from OpenWeather API
      const fetchWeatherInfo = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_APIKEY}`
      );

      const res = await fetchWeatherInfo.json();
      // update state after fetching info from OpenWeather API
      this.setState({
        city: `${res.name}, ${res.sys.country}`,
        country: res.sys.country,
        main: res.weather[0].main,
        celsius: this.returnTemperature(res.main.temp),
        temp_max: this.returnTemperature(res.main.temp_max),
        temp_min: this.returnTemperature(res.main.temp_min),
        error: false,
      });
      // update the icon with appropriate weather
      this.get_WeatherIcon(res.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const {
      error,
      city,
      icon,
      celsius,
      temp_max,
      temp_min,
      description,
    } = this.state;
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={error} />
        <Weather
          cityname={city}
          weatherIcon={icon}
          temp_celsius={celsius}
          temp_max={temp_max}
          temp_min={temp_min}
          description={description}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
