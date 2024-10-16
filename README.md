# Coin Port

Coin Port is a full-stack web-based application that allows users to view information about cryptocurrencies and create personalized watchlists. Users can sign up, log in, and add specific coins to their watchlists. The app is built using React on the frontend, Node.js and Express on the backend, and MongoDB for the database.

The goal of this project was to gain a deeper understanding of fullstack development and APIs. I wanted to build something that fetched live cryptocurrency data from an external API, so I used CoinGecko API via Uniblock - a free cryptocurrency API aggregator. I gained experience in API integration, RESTful routing, data parsing, and utilzing API documentation. While building the react frontend, I developed my skills in state management, integrating routes, and conditional rendering.

![image](https://github.com/user-attachments/assets/95e2e6e2-d755-43e8-9f37-8c5fcac7af9b)

## Features ##
- User authenticationa and authorization
- Create, read, edit, and delete watchlists
- Add and remove coins from watchlists
- View information about cryptocurrencies (curent price in USD, 24h % change, etc.)
- Fetch live cryptocurrency data from an external API.

## Getting Started ##

Deployment coming soon...

## Technologies Used ##

#Frontend#
- React
- React Router
- Javascript
- CSS

#Backend#
- Node.js
- Express.js
- MongoDB
- JWT
  
#External#
- CoinGecko API (via Uniblock) for live cryptocurrency data
  
## Resources ##

https://docs.uniblock.dev/docs/coingecko

https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?gid=0#gid=0

https://www.geeksforgeeks.org/how-to-update-state-to-re-render-the-component-in-reactjs/#approach-2-using-setstate-in-classbased-component

https://react.dev/learn/conditional-rendering

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

https://reactrouter.com/en/main/hooks/use-navigate

https://budibase.com/blog/inside-it/api-headers/

https://medium.com/@maazmedia1/how-to-create-a-dropdown-menu-in-reactjs-36f27987dbc4

## Notes ##

- Due to API limitations, my function only fetches data when the specific backend route is called. At the moment, this can only be done via Postman.

## Next Steps ##
- Implement a grid/chart framework for more advanced data analysis.
- Add more coin data
- Implement search and filter options on the Coin List page.
- Add notifications for success/failure of actions.
- Mobile responsiveness
- Connect wallet integration
- Learn about websockets

