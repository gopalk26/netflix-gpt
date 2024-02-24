

export const checkValadition = (email,password) =>{
    const isvalidemail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isvalidemail) return "Email ID is not valid";
    if(!isValidPassword) return "Password is Not Valid";

    return null;



};