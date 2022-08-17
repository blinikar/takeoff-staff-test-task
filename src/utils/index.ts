export const getCookie = (name: string) => {
  return document.cookie
    .split(';')
    .find(cookie => cookie.includes(`${name}=`))
    ?.split('=')[1];
}
