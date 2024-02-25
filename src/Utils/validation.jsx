export const checkValidation = (email, password) => {
    // Email validation regex pattern
    const emailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;


    // Password validation regex pattern (requires at least 8 characters including uppercase, lowercase, and digits)
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // Check if email is empty
    if (!email) {
        return "Email is required.";
    }

    // Check if email is valid
    if (!emailPattern.test(email)) {
        return "Email address is not valid.";
    }

    // Check if password is empty
    if (!password) {
        return "Password is required.";
    }

    // Check if password meets the criteria
    if (!passwordPattern.test(password)) {
        return "Password must be at least  8 chars , 1 uppercase, 1 lowercase, 1 digit";
        
    }

    return null; // Return null if both email and password are valid
};
