import React from 'react'
import './LoginPage.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({

  email:yup.string().email().required(),
  password:yup.string().min(4).max(10).required(),
  confirmPassword:yup.string().oneOf([yup.ref("password"),null]),
})
const LoginPage = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });
  const submitForm=(data)=>{
    console.log(data);
  }
  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="py-4">
        <h1 className='About_page'>Login Page</h1>
        <p className="para">
        Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.
        Many of our components require the use of JavaScript to function. Specifically, they require , , and our own JavaScript plugins. Place the following  near the end of your pages, right before the closing  tag, to enable them. jQuery must come first, then Popper.js, and then our JavaScript plugins.

        Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.
        </p>
      </div> */}
      

      <section>
     <div className=" Form-Validation" style={{marginBottom:"100px"}}>
     <br></br>  
<div className="inputs">
<div className="between">
<form className="Animation"onSubmit={handleSubmit(submitForm)} >
<h5 className='EmailStarted'>Enter your email to get started.</h5>
<input className='EmailAddress'  type="text" name="email" placeholder="email address" {...register ('email')}/>
 {errors.email && <p className='EmailFirst'>Email must be present.</p>}
 <br/>  <br/> 
 {/* password */}
 <h5 className='password'>Enter your  password.</h5>
 <input className='Password'  type="text" name="password" placeholder="password" {...register ('password')}/>
 {errors.email && <p className='EmailFirst'>Password must be present.</p>}
 <br/>  <br/> 


 <h5 className='confirmPassword'>Enter your Confirm Password.</h5>
 <input className='confirmPassword1' type="text" name="confirmPassword" placeholder="ConfirmPassword" {...register ('confirmPassword')}/>
     {errors.confirmPassword && <p className='EmailFirst'>Please Correct password</p>}
     <br/> <br/> 

<input className='GetStarted' type="submit" id="Get Started"/>

  <br/><br/>        

</form>
</div>

</div>  
          <br/>
        

</div>
</section>




    {/* </div> */}
    </>
  )
}

export default LoginPage
