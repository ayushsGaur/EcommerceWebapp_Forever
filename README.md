# Forever - Full Stack E-Commerce Platform

## Overview

Forever is a full-stack e-commerce web application built using the MERN stack. The platform allows users to browse products, manage their cart, place orders, and complete purchases through multiple payment options. It also includes a dedicated admin panel for managing products and customer orders.

The project was developed to gain hands-on experience in building scalable web applications, implementing secure authentication, integrating payment gateways, and managing end-to-end e-commerce workflows.

## Live Demo

**Customer Website:**
https://forever-frontend-sandy-theta.vercel.app/

**Admin Panel:**
https://forever-admin-zeta-nine.vercel.app/

## Features

### Customer Features

* User registration and login authentication
* Browse products by category and subcategory
* Product search and filtering
* Add products to cart
* Update cart quantities
* Secure checkout process
* Order placement and tracking
* Multiple payment options

  * Stripe
  * Razorpay
  * Cash on Delivery (COD)
* Responsive user interface for desktop and mobile devices

### Admin Features

* Add new products
* Upload multiple product images
* Edit and manage product catalog
* Delete products
* View customer orders
* Manage order status
* Monitor inventory through the admin dashboard

## Tech Stack

### Frontend

* React.js
* React Router
* Context API
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication & Security

* JWT Authentication
* Bcrypt Password Hashing

### Cloud & Services

* Cloudinary (Image Storage)
* Stripe Payment Gateway
* Razorpay Payment Gateway
* Vercel Deployment

## Project Architecture

The application is divided into three independent modules:

### Frontend

Customer-facing application responsible for product browsing, cart management, authentication, and checkout.

### Backend

REST API server handling authentication, products, orders, payments, and database operations.

### Admin Panel

Separate administrative interface for managing products and customer orders.

## Key Functionalities Implemented

* RESTful API development
* Authentication and authorization
* Product management system
* Cart management logic
* Order management workflow
* Payment gateway integration
* Image upload and cloud storage
* State management using React Context API
* Responsive UI design

## Installation

### Clone the Repository

```bash
git clone https://github.com/ayushsGaur/EcommerceWebapp_Forever.git
cd EcommerceWebapp_Forever
```

### Install Dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

Admin

```bash
cd admin
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend directory and add the required variables:

```env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=

STRIPE_SECRET_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

### Start the Application

Backend

```bash
npm run server
```

Frontend

```bash
npm run dev
```

Admin

```bash
npm run dev
```

## Screenshots

### Home Page

The customer-facing storefront provides product discovery, navigation, and shopping functionality through a clean and responsive interface.

### Admin Dashboard

The admin panel enables product management, image uploads, order handling, and inventory administration from a centralized dashboard.

## Learning Outcomes

Through this project, I gained practical experience in:

* Building full-stack applications using the MERN stack
* Designing RESTful APIs
* Implementing authentication and authorization
* Integrating third-party payment gateways
* Managing cloud-based media storage
* Deploying production-ready web applications
* Handling complete e-commerce workflows

## Future Improvements

* Product reviews and ratings
* Wishlist functionality
* Advanced search and filtering
* Coupon and discount system
* Email notifications
* Sales analytics dashboard
* Inventory alerts

## Author

Ayush Anand

## License

This project is intended for educational and portfolio purposes.
