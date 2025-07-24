# GiveNTake

A collaborative web application for item swapping, built as a group coursework project. The app allows users to list items, make bids, and swap items with others. The frontend is built with React, and the backend uses Firebase for authentication, database, and storage.

## Features
- User authentication (Sign Up, Sign In)
- Item listing and browsing
- Bidding and swap offers
- User profile management
- Real-time notifications
- Responsive design

## Tech Stack
- **Frontend:** React
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Styling:** CSS Modules

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (v8 or higher recommended)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/giventake.git
   cd giventake
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - In the Firebase Console, go to Project Settings > General > Your apps > Firebase SDK snippet.
   - Copy your config object and replace the placeholder in `src/firebase.js`:
     ```js
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

### Running the App
```bash
npm start
```
The app will run at [http://localhost:3000](http://localhost:3000).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is for educational purposes as part of a university course. For other uses, please contact the maintainers.
