module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};

    // Check for empty username
    if(username.trim() === ''){
        errors.username = 'Username must not be empty'
    }

    // Check empty email and valid email format
    if(email.trim() === ''){
        errors.email = 'Email must not be empty'
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regex)){
            errors.email = 'Email must be a valid email address';
        }
    }

    // Check empty password and matching with confirm password
    if(password === ''){
        errors.password = 'Passwords must not be empty'
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Password must match';
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1 
    }
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty'
    }
    if(password.trim() === ''){
        errors.password = 'Password must not be empty'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1 
    }
}