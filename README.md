<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="title">Weather App</h1>
    <p class="paragraf">Weather app, work with APIs (OpenWeatherApi)</p>
    <article class="text">
      <p class="paragraf">
        It's my first app with API, I used OpenWeather API to find the weather
        in each city by fetch and async function. Also I do request by search.
        Below will be ScreanShots of my Web application ^-^
      </p>
    </article>
    <div class="photos">
      <div class="row">
        <div class="column">
          <img
            src="/src/first_screen.png"
            alt="search"
            class="img"
            style="width: 100%"
          />
        </div>
        <div class="column">
          <img
            src="/src/second_screen.png"
            alt="Los_Angeles"
            class="img"
            style="width: 100%"
          />
        </div>
        <div class="column">
          <img
            src="/src/third_screen.png"
            alt="Almaty"
            class="img"
            style="width: 100%"
          />
        </div>
        <div class="column">
          <img
            src="/src/Error_screen.png"
            alt="error"
            class="img"
            style="width: 100%"
          />
        </div>
        <div class="column">
          <img
            src="/src/peace_of_code.png"
            alt="code"
            class="img"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
    <style>
      body {
        background: #364156;
        color: #dff8eb;
      }
      .title {
        font-size: 40px;
        text-align: center;
        margin-bottom: 30px;
      }
      .paragraf {
        text-align: center;
        font-size: 20px;
      }
      article {
        width: 500px;
        height: 250px;
        background: #cdcdcd;
        border-radius: 50px;
        display: block;
        margin: 10px auto 0;
      }
      article p {
        padding-top: 60px;
        padding-left: 40px;
        max-width: 400px;
        color: #364156;
      }

      .photos {
        display: block;
        margin: 0 auto 0;
      }

      .column {
        float: left;
        width: 33%;
        padding: 50px;
      }

      /* Clearfix (clear floats) */
      .row::after {
        content: "";
        clear: both;
        display: table;
      }
    </style>
  </body>
</html>
