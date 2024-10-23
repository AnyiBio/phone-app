# Phones App

Welcome to the Phones App repository! This is a shopping application that simulates a shopping cart experience. It is built with Next.js 14, TypeScript, and Tailwind CSS.

<p align="left"> <img src="https://komarev.com/ghpvc/?username=anyibio&label=Profile%20views&color=0e75b6&style=flat" alt="anyibio" /> </p>

<h3 align="left">Languages and Tools:</h3>
<div align="center">
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
</div>

## Documentation and Architecture

The project follows Hexagonal Architecture principles to ensure a clear separation of concerns. The directory structure is designed to keep the core logic isolated from external dependencies, making the application more maintainable and scalable.

```plaintext
/
├── public/                  # Static files accessible publicly
│   ├── images/              # Static images
│   └── ...                  # Other static files like favicon, robots.txt
├── app/                     # Main application using Next.js
│   ├── ui/                  # Reusable UI components
│   │   ├── Cart.tsx         # Components for cart page
│   │   ├── Phones.tsx       # Components for landing page
│   │   ├── PhoneDetail.tsx  # Components for phone detail
│   │   └── ...              # Other UI components
│   ├── cart/                # page cart
│   ├── phone-detail/[id]    # page phoneId
│   ├── page/                # dashboard, show all the phones
│   ├── api/                 # Application services
│   │   ├── get-phones.ts    # Service to retrieve the data and service to the client
│   │   └── get-detail-phone # Service to retrieve the data and service to the client
│   ├── context/             # Context of the application
│   │   ├──CartContext       # To Add the shopping cart context
│   │   └──CartReducer       # To manage the state and save, delete or retrieve from localstorage
```

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js (v20.12.0 or higher)
- pnpm (v9.10.0 or higher)

## Installation

To run the Top Phones application locally, follow these steps:

1. Clone the repository to your local machine:
   `git clone https://github.com/AnyiBio/phone-app.git`
2. Navigate to the project directory:
   `cd phone-app`
3. Install the project dependencies:
   `pnpm install`

## Usage

To start the development server and run the application locally, use the following command

`pnpm dev`

This command will run the application in development mode, and you can access it in your web browser at http://localhost:3000. The application will automatically reload if you make changes to the source code.

## Building for Production

To build the application for production, use the following command:

`pnpm build`

This will generate optimized production-ready files in the dist directory.

## ENV variables

NEXT_PUBLIC_API_PHONE=

NEXT_PUBLIC_API_AUTHENTICATION=

NEXT_PUBLIC_API_SERVER=

Ask for the credentials, for NEXT_PUBLIC_API_SERVER, can use "http://localhost:3000"

## Contributing

If you would like to contribute to this project, please open an issue or create a pull request. We welcome contributions from the community.

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://www.linkedin.com/in/anyi-jaramillo-henao-biobio" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/anyi-jaramillo-henao-biobio" height="30" width="40" /></a>
</p>
