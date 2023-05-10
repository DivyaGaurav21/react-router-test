# react-router-test
mini project for rendering different section of a single page application on clicking different link like (Home , About, Product , etc).  Task is done using react-router-dom library
## npm install
before running 
## Concept used

react-router-dom is a popular library for handling routing in React applications. It provides a collection of navigational components that can be used to create a single-page application (SPA) with multiple views, or pages, that can be accessed via different URLs.
-->
Here are some of the main components provided by react-router-dom:

BrowserRouter: This is a high-level component that wraps around the entire application and provides the routing functionality. It uses HTML5 history API to keep the UI in sync with the URL in the browser address bar.

Route: This component defines a route that maps a URL to a specific component in your application. It takes a path prop that specifies the URL path and a component prop that specifies the React component to render when the path is matched.

Routes: This component is similar to Switch in react-router v5. It is used to define a collection of routes that will be rendered based on the current URL.

Link: This component provides a declarative way to create links between different routes in your application. It takes a to prop that specifies the URL path to navigate to.
