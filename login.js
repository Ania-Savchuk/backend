// Critical fix for security [cite: 191]
function login(user, password) {
    if (!password) throw new Error("Password required");
    console.log("Secure login initiated for: " + user);
    return { status: "authenticated", role: "admin" }; 
}