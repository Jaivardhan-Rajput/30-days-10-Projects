# 🚀 FormValidator

A responsive and user-friendly HTML form with JavaScript-based validation for real-time input checking. This project demonstrates how to perform client-side form validation using modern JavaScript practices.

This is Project 3 of my **[30 Days 10 Projects Challenge](https://github.com/Jaivardhan-Rajput/30-days-10-Projects)**.

---

## 📁 Project Structure

```
FormValidator/
│
├── index.html      # Main HTML file with the form
├── style.css       # Styling for layout, input fields, and buttons
└── script.js       # JavaScript for validating user input
```

---

## ✨ Features

- ✅ First Name & Last Name validation (letters only)
- ✅ Age validation (between 1 and 120)
- ✅ Gender selection (radio buttons)
- ✅ Phone Number (10-digit validation)
- ✅ Email format validation
- ✅ Password strength checker (uppercase, lowercase, number, symbol)
- ✅ Confirm password match
- ✅ Inline error collection via alerts
- ✅ Responsive layout with clean styling

---

## 🖥️ Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Flexbox layout and form styling
- **JavaScript (Vanilla)** – Client-side form validation

---

## 📘 Understanding Regex Used

| Field       | Regular Expression                          | Meaning |
|-------------|---------------------------------------------|---------|
| **Name**    | `/^[A-Za-z]+$/`                             | Only letters (uppercase/lowercase) |
| **Phone**   | `/^\d{10}$/`                                | Exactly 10 digits |
| **Email**   | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`              | Basic email structure |
| **Password**| `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/` | Strong password pattern with all character types |

These patterns are based on real-world usage and adapted from:
- [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [regex101.com](https://regex101.com/)
- Stack Overflow and community best practices

---

## 🛠️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Jaivardhan-Rajput/30-days-10-Projects.git
   ```

2. Navigate into the project folder:
   ```bash
   cd 30-days-10-Projects/FormValidator
   ```

3. Open `index.html` in your browser.

---

## 📬 Contact

- 🌐 LinkedIn: [https://www.linkedin.com/in/jaivardhan-rajput-5a8263346/]
- 💻 GitHub: [https://github.com/Jaivardhan-Rajput]

---

## ✅ License

This project is open-source and free to use under the [MIT License](LICENSE).
