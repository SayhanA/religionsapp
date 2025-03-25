# ReligionsApp

## 📌 Overview

**ReligionsApp** is a web application built using **SvelteKit**, **Vite**, and **Tailwind CSS**, designed to manage and display various religions and their associated castes. It provides a smooth and responsive UI, enabling users to explore religious classifications effectively. The backend is developed using **Node.js, Express.js, and MongoDB**, making data management efficient and scalable.

## 🌐 Live Demo

🚀 **[ReligionsApp Live](https://religionapp.netlify.app/)**

## 📂 Backend Repository

The backend API for this project is hosted separately. You can check out the backend source code here:

🔗 **[Backend GitHub Repository](https://github.com/SayhanA/religionAdmin)**

## ✨ Features

- **Religion & Caste Management**: Users can browse different religions and their associated castes.
- **State Management**: Utilizes Svelte stores to handle selected religion and caste dynamically.
- **API Integration**: Uses **Axios** for efficient data fetching from the backend.
- **Responsive UI**: Built with **Tailwind CSS** to ensure mobile-first responsiveness.
- **Form Validation & Notifications**: Implements **svelte-toasts** for user feedback and error handling.
- **Optimized Performance**: Lightweight Svelte components for fast loading and smooth interactions.
- **Code Quality**: Prettier and ESLint integration for consistent and clean code.

## 🛠️ Tech Stack

### **Frontend**
- **SvelteKit** (Framework)
- **Vite** (Development & Build Tool)
- **Tailwind CSS** (Styling)
- **Axios** (API Calls)
- **svelte-toasts** (Notifications & Alerts)
- **Prettier & ESLint** (Code Formatting & Linting)

### **Backend**
- **Node.js** (Runtime Environment)
- **Express.js** (Web Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **dotenv** (Environment Variable Management)

## 🚀 Installation & Setup

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/SayhanA/religionsapp.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd religionsapp
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add:

```ini
BASE_URL=https://your-api-url.com
```

Replace `https://your-api-url.com` with the actual backend API URL.

## 🔥 Usage

### Start the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview the Built App

```bash
npm run preview
```

## ✅ Linting & Formatting

To check for linting issues:

```bash
npm run lint
```

To auto-format the code:

```bash
npm run format
```

## 📜 Project Structure

```
religionsapp/
├── src/
│   ├── routes/  # Svelte routes
│   ├── store.js  # Svelte stores for global state management
│   ├── config.js  # Configuration settings
│   ├── components/  # Reusable Svelte components
│   ├── styles/  # Tailwind CSS custom styles
│   ├── assets/  # Static assets like images
│   ├── app.html  # Root HTML template
│   ├── main.js  # Entry point of the app
├── static/  # Publicly accessible assets
├── .env  # Environment variables
├── package.json  # Project metadata and dependencies
├── README.md  # Documentation
└── .gitignore  # Ignored files in version control
```

## 📜 API Endpoints (Backend)

| Method | Endpoint         | Description                  |
|--------|-----------------|------------------------------|
| GET    | `/religions`    | Fetches all religions       |
| GET    | `/casts?id=xyz` | Fetches castes by religion ID |
| POST   | `/religions`    | Adds a new religion         |
| POST   | `/casts`        | Adds a new caste            |

For more API details, check the [Backend Repository](https://github.com/SayhanA/religionAdmin).

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature-branch-name`.
3. **Make your changes**.
4. **Commit your changes**: `git commit -m 'Add some feature'`.
5. **Push to the branch**: `git push origin feature-branch-name`.
6. **Submit a pull request**.

## 📞 Contact

For any questions or suggestions, feel free to reach out:

📧 **Email**: sayhanahmed05@gmail.com  
📞 **Phone**: +8801782132001  

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

