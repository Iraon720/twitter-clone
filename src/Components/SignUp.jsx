import { NavLink } from "react-router-dom";

function SignUp() {
  return <div className=''>
     <title>Expressive/signup</title>
  
    <h1>Expressive!</h1>
    <form>
      <p class="calling">
        Ready to Join? Fill out credentials below and
        <strong>Lets Get Expressive!</strong>
      </p>

      <input
        class="forms"
        type="text"
        id="Email-signup"
        name="Username"
        minlength="5"
        maxlength="35"
        placeholder="Enter your email address"
        required
      />
      <br />
      <br />
      <input
        class="forms"
        autocapitalize="off"
        autocorrect="off"
        name="password"
        type="password"
        id="password-signup"
        class="password"
        minlength="8"
        maxlength="25"
        placeholder="Create Password"
        required
      />
      <br />
      <br />
      <input
        class="forms"
        autocapitalize="off"
        autocorrect="off"
        name="password"
        id="re-enter"
        type="password"
        class="password-2"
        minlength="8"
        maxlength="25"
        placeholder="Re-Enter Password"
        required
      />
      <br />
      <br />
      <input
        class="forms"
        autocapitalize="off"
        autocorrect="off"
        name="username"
        type="text"
        id="username-signup"
        class="username"
        minlength="5"
        maxlength="25"
        placeholder="Create Profile Name"
        required
      />
      <br />
      <br />
     
        <button >
          Sign Up
        </button>
    

      <p class="user">
        Already have account?
       <NavLink to='/signin'>Login</NavLink>
      </p>
    </form>
  </div>;
}

export default SignUp;
