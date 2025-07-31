# 🎓 Certificate Generator Frontend

Welcome to the **Certificate Generator**!  
This React-based web app allows you to generate, preview, and copy beautiful certificates for any event or category.  
Just enter a category name, and let the app do the magic! ✨

---

## 📁 Project Structure

```
frontend/
│
├── public/                  # Static assets and HTML template
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/                     # Main source code
│   ├── App.jsx              # Main application logic and UI
│   ├── App.css              # Global styles for the app
│   ├── App.test.js          # App tests
│   ├── index.js             # Entry point for React
│   ├── index.css            # Base styles
│   ├── logo.svg             # Logo asset
│   ├── reportWebVitals.js   # Performance measuring
│   ├── setupTests.js        # Test setup
│   └── components/          # Reusable UI components
│       ├── CertificatePreview.jsx  # Renders certificate previews on canvas
│       ├── CertificatePreview.css
│       ├── CodeBlock.jsx          # Shows and copies certificate design code
│       ├── CodeBlock.css
│       ├── ErrorPage.jsx          # Attractive error display with retry
│       ├── ErrorPage.css
│       ├── LoadingSpinner.jsx     # Animated loading spinner
│       └── LoadingSpinner.css
│
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Exact dependency versions
└── README.md                # Project documentation (you are here!)
```

---

## 🚀 Functionality Overview

### Main Features

- **Generate Certificates:**  
  Enter a category name (e.g., "Summer Code Camp") and generate themed certificates with a single click.

- **Live Preview:**  
  Instantly see a canvas-rendered preview of each certificate, including background and custom design code.

- **Copy Design Code:**  
  Easily copy the canvas drawing code for each certificate to reuse or modify.

- **Error Handling:**  
  Friendly error pages with retry and helpful troubleshooting tips.

- **Loading Animation:**  
  Stylish spinner and progress messages while certificates are being generated.

---

## 🧩 Component Summary

- **`App.jsx`**  
  The main app logic: handles user input, fetches certificates from the backend, manages loading and error states, and displays results.

- **`components/CertificatePreview.jsx`**  
  Renders a certificate preview on a canvas, applying the background and executing custom drawing code for each certificate.

- **`components/CodeBlock.jsx`**  
  Displays the certificate's canvas design code in a styled block with a one-click copy button.

- **`components/ErrorPage.jsx`**  
  Shows a visually appealing error message with retry and refresh options, plus troubleshooting tips.

- **`components/LoadingSpinner.jsx`**  
  Animated spinner with a message and bouncing dots to indicate progress.

---

## ✨ How It Works

1. **User enters a category name** and submits the form.
2. **App sends a request** to the backend API to generate certificates.
3. **Loading spinner** is shown while waiting for a response.
4. **Certificates are displayed** with a live canvas preview and the design code.
5. **Errors are handled gracefully** with retry and helpful suggestions.

---

## 🛠️ Getting Started

1. **Install dependencies:**  
   ```bash
   npm install
   ```

2. **Run the app:**  
   ```bash
   npm start
   ```

3. **Open in your browser:**  
   Visit [http://localhost:3300](http://localhost:3300)


---

## 💡 Tips

- Make sure our backend API is running and accessible.
- Try different category names for unique certificate designs!
- Copy and reuse the canvas code for your own projects.

---


