# Product List App

## Overview

This is a simple React application designed to manage a list of products. The primary objective of this project is to demonstrate the use of a RESTful API to fetch and manipulate product data, rather than focusing on the design and styling aspects.

## Features

- **Fetch Products**: Retrieve a list of products from a local JSON API.
- **Add Product**: Submit new products to the API using a POST request.
- **Loading State**: Indicate when data is being fetched or processed.
- **Error Handling**: Display errors if the data fetch or POST request fails.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Custom Hook**: `useFetch` for handling data fetching and POST requests.
- **CSS**: Basic styling to layout the application.

## Setup

To run this application locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/product-list-app.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd product-list-app
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Run the Application**

    ```bash
    npm start
    ```

    The application will start on [http://localhost:3000](http://localhost:3000).

## How It Works

- **Fetching Data**: The application uses the `useFetch` custom hook to retrieve product data from a local JSON API (`http://localhost:3000/products`). This hook manages the state for data, loading, and error handling.
- **Adding Products**: Users can submit new products via a form. The `httpConfig` function within the `useFetch` hook is used to configure and execute POST requests to add new products to the API.
- **Error Handling**: Errors during data fetching or POST requests are captured and displayed to the user.

## Notes

- The focus of this project is to showcase API interaction with JSON data, rather than detailed UI design.
- For demonstration purposes, basic CSS is used to structure the application. You may customize the design further based on your preferences or requirements.

## Contributing

Feel free to submit issues or pull requests. If you have any suggestions or improvements, please let me know!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
