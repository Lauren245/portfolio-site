export function validateEmail(email){
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //convert the email to a lowercase string and test it against the regex.
  return emailRegex.test(String(email).toLowerCase());
}