import uploadPhoto from "./5-photo-reject.js";
import signUpUser from "./4-user-promise.js";

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((ele) => ({
        status: ele.status,
        value: ele.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
