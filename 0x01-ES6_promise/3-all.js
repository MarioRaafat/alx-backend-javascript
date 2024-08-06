import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup(){
  let photo = uploadPhoto();
  photo.then( photo_data => {
    let usr = createUser();
    usr.then( usr_data => {
      console.log(photo_data.body, usr_data.firstName, usr_data.lastName);
    });
  })
  .catch(() => console.log('Signup system offline'));
}
