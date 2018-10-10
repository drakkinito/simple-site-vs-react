export const checkCradetials = (data) => {
    if(data.username.toLowerCase() === 'a' || data.password === '1') {
        return true
    }
    return false
}