export const setTokens = (data: any) => {
    window.localStorage.setItem(`pisces-token`, JSON.stringify(data.token));
    window.localStorage.setItem(`pisces-refresh-token`, JSON.stringify(data.refreshToken));
}

export const clearToken = () => {
    window.localStorage.removeItem(`pisces-token`);
    window.localStorage.removeItem(`pisces-refresh-token`);
}