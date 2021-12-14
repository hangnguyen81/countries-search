# Countries search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can fork the project directory to your local computer , you can run: `npm start` to runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In countries search app, I fetch data from 2 APIs: 
* [Rest Countries API](https://restcountries.eu/rest/v2/all) - no API key required. My app built based on version 2 of this API, it is not available now, and my app is not working because of that. instead, ver3 is running. I have not had time to edit my code yet. Link to [ver3](https://restcountries.com/v3.1/all)
* [WeatherStack](https://weatherstack.com) . This API needs key to fetch data. Therefore, you need to register as a member to get API key. To use their service, please read in their [document](https://weatherstack.com/documentation)

You can search as you type
- If one country matches the query, the information of that country will show
- If many countries match the query, 10 countries will be listed with a button 'Show detail', you can click the button to see detail info of the country

A quick look of app

![Demo](https://i.ibb.co/hWhPLXS/03.jpg)
