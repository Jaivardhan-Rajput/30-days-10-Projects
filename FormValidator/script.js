document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const age = document.getElementById("age");
    const phone = document.getElementById("pnumber");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const gender = document.querySelector('input[name="gender"]:checked');



    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    let errors = [];

    if (fname.value.trim() === "" || !nameRegex.test(fname.value)) {
        errors.push("Enter a valid first name.")
    };

    if (lname.value.trim() === "" || !nameRegex.test(lname.value)) {
        errors.push("Enter a valid last name.")
    };

    if (age.value.trim() === "" || age.value < 1 || age.value > 120) {
        errors.push("Enter a valid age between 1 and 120.")
    };

    if (!gender) {
        errors.push("Select a gender.")
    };

    if (!phoneRegex.test(phone.value.trim())) {
        errors.push("Enter a valid 10-digit phone number.")
    };

    if (!emailRegex.test(email.value.trim())) {
        errors.push("Enter a valid email.")
    };

    if (!passwordRegex.test(password.value)) {
        errors.push("Password must be at least 8 characters with upper, lower, number, and symbol.")
    };

    if (password.value !== confirmPassword.value) {
        errors.push("Passwords do not match.")
    };

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
        // document.querySelector("form").submit(); // Uncomment to actually submit
    }
});
