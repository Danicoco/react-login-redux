//replace with your api link
export const baseURL = "htpp://localhost:5000/api/v1";
export const config = {
    headers: {
        'Content-Type': "application/json",
        'x-auth-authorization': localStorage.getItem('token')
    }
}