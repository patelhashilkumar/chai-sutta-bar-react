# Chai Sutta Bar (Clone)

This is a full-stack web application designed for **Chai Sutta Bar**, featuring a responsive frontend and a robust backend integrated with MongoDB Atlas. The application facilitates franchise inquiries, customer feedback, and job applications, while showcasing the brand's menu, story, and global presence.

## 🚀 Tech Stack

**Frontend:**
*   **React** (Vite): Fast, modern UI library.
*   **Tailwind CSS**: Utility-first CSS framework for custom, responsive design.
*   **React Router DOM**: For seamless client-side navigation.
*   **Framer Motion**: For smooth animations and transitions.

**Backend:**
*   **Node.js & Express**: Scalable server-side environment.
*   **MongoDB & Mongoose**: NoSQL database for flexible data storage.
*   **Dotenv**: Environment variable management.
*   **Cors**: Cross-Origin Resource Sharing handling.

## 📂 Project Structure

```
clone chai/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, Footer, Forms)
│   │   ├── pages/          # Page views (Home, Franchise, Menu, etc.)
│   │   └── data/           # Static data files
│   └── ...
└── server/                 # Node/Express Backend
    ├── models/             # Mongoose Schemas (Franchise, Feedback, Contact)
    ├── routes/             # API Endpoints
    └── server.js           # Entry point
```

## 🛠️ Setup & Installation

### Prerequisites
*   Node.js installed on your machine.
*   A MongoDB Atlas connection string.

### 1. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your MongoDB URI:
```env
MONGO_URI=your_mongodb_connection_string_here
PORT=5001
```

Start the backend server:
```bash
npm start
# Server runs on http://localhost:5001
```

### 2. Frontend Setup
Open a new terminal, navigate to the client directory, and install dependencies:
```bash
cd client
npm install
```

Start the development server:
```bash
npm run dev
# Client runs on http://localhost:5173 (or similar)
```

## ✨ Key Features

*   **Global Franchise CTA**: "Request A Franchise Consultation" section appears on every page, directing users to the application form.
*   **Dynamic Forms**:
    *   **Franchise Inquiry**: Collects detailed applicant info (Budget, Location, etc.) and saves to MongoDB.
    *   **Feedback**: Allows customers to submit reviews and suggestions.
    *   **Contact**: General inquiry form with location map.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
*   **MongoDB Integration**: All form submissions are persisted in a secure cloud database.
*   **Floating Contact Widget**: Quick access to WhatsApp and Phone support.

## 📝 API Endpoints

*   `POST /api/franchise` - Submit new franchise inquiry.
*   `POST /api/feedback` - Submit customer feedback.
*   `POST /api/contact` - Submit general contact inquiry.

## 🤝 Contributing
1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
