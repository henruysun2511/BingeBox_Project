export function isLoggedIn() {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) return false;

    try {
        const user = JSON.parse(currentUser);
        return user.isLogin === true;
    } catch (e) {
        return false;
    }
}