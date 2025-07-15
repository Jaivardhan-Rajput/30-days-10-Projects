🔐 Password Generator App
A simple and interactive password generator built using HTML, CSS, and JavaScript. This web app allows users to generate strong and customizable passwords based on selected criteria like uppercase letters, lowercase letters, numbers, symbols, and even random words.

🚀 Live Demo
Check out the live version here: https://password-generator-project-6.netlify.app/

🛠 Features
✅ Generate 3 secure passwords simultaneously (8, 12, and 16 characters long)

✅ Choose from character types:

Uppercase letters

Lowercase letters

Numbers

Special symbols

Words (e.g., "fruit", "galaxy", "brave")

✅ "Include All" option for a full character mix

✅ Real-time validation — prompts users if no options are selected

🧠 How It Works
The user selects desired character types using checkboxes.

On clicking the Generate button:

A character pool is built based on the selection.

Three passwords are generated randomly from the pool:

One with 8 characters

One with 12 characters

One with 16 characters

If no options are selected, a prompt notifies the user to choose criteria.

💻 Tech Stack
HTML — Structure

CSS — Styling

JavaScript — Functionality and interactivity

📁 Project Structure
/passwordGenerator
│
├── index.html
├── style.css
└── script.js
🧪 Example Code Snippet

if (uppercase.checked) {
    charactersPool = charactersPool.concat(characters.uppercase);
}
This snippet shows how character pools are built based on the user’s input.

✨ Future Improvements
Add copy-to-clipboard buttons

Strength meter to show password complexity

Mobile-responsive enhancements

Dark/light theme toggle

🙌 Contribution
Feel free to fork the repository, open issues, or submit pull requests!

📄 License
This project is licensed under the MIT License.
