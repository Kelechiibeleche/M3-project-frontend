🌥️ RoloCloud
“Keep your contacts safe — the cloud way ☁️”

RoloCloud is a full-stack contact management web app that lets users securely store, organize, and annotate their contacts with notes — all in the cloud. Built using the MERN stack (MongoDB, Express, React, Node.js), it supports user authentication, CRUD operations, and a clean, modern UI.

🚀 Features
👤 User Authentication

Signup & Login with JWT-based authentication

Protected routes for logged-in users

Personalized dashboard and profile page

📇 Contact Management

Create, view, update, and delete contacts

Add profile images and detailed contact info (email, address, phone)

Linked contacts displayed in a clean, card-based layout

🗒️ Notes System

Add personal notes for each contact (e.g. birthdays, appointments, reminders)

View and delete notes easily

Each note is linked to a specific contact

🧭 Navigation & UI

Modern responsive design with blue-accented theme

Navbar for easy navigation

Footer with quick links and social profiles

Animated page transitions and styled buttons

🏗️ Tech Stack
Area	Technology
Frontend	React, Axios, React Router DOM
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Auth	JWT (JSON Web Token)
Styling	CSS3, Flexbox, Responsive Design
Dev Tools	Nodemon, Vite, Postman

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| POST   | `/auth/signup`      | Register a new user    |
| POST   | `/auth/login`       | Log in and receive JWT |
| GET    | `/auth/verify`      | Verify token           |
| GET    | `/auth/profile/:id` | Get user profile data  |

| Method | Endpoint                        | Description           |
| ------ | ------------------------------- | --------------------- |
| GET    | `/contact/all-contacts/:userId` | Get all user contacts |
| GET    | `/contact/single-contact/:id`   | Get one contact       |
| POST   | `/contact/create-a-contact`     | Add a new contact     |
| PUT    | `/contact/update-a-contact/:id` | Edit contact          |
| DELETE | `/contact/delete-a-contact/:id` | Delete contact        |

| Method | Endpoint                     | Description                 |
| ------ | ---------------------------- | --------------------------- |
| GET    | `/notes/:contactId`          | Get all notes for a contact |
| POST   | `/notes/add-note/:contactId` | Add new note                |
| DELETE | `/notes/delete-note/:noteId` | Delete note                 |

👩‍💻 Example User Flow

Sign up or log in

Add new contacts — fill name, phone, email, and upload an image

Click a contact to view details

Add notes (e.g., “Birthday reminder – May 22”)

Edit or delete contacts and notes anytime



