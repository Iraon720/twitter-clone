import { useContext } from 'react';
import { Context } from '../Context';
import { useForm } from 'react-hook-form';

function SignIn() {
const { userInfo, setUserInfo } = useContext(Context);
const { name,username, email, number,password } = userInfo;
const {Register, formState:{errors}}=useForm({
  defaultValues: {
    username:'',
    email:'',
    number:'',
    password:''

  }
});





  return (
    <div className='login'>
      <form>
        <input
          {...Register('username', {
            required: 'Please enter valid username or email address.',
          })}
          placeholder='Please enter username or email'
        />
        <p>{errors.username?.message}</p>
        <input
          {...Register('password', {
            required: 'Please enter valid password.',
            minLength: {
              value: 8,
              message: '',
            },
          })}
          placeholder='Please enter password'
        />
        <p>{errors.password?.message}</p>
      </form>
    </div>
  );
}

export default SignIn;
