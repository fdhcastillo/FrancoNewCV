import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from '@material-ui/lab';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useState } from "react";

export const ContactForm = () => {
  const [sucess, setSucess] = useState(false);
  const { register,  handleSubmit , errors, reset} = useForm();
   const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  const onSubmitForm = data =>{
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data })
      })
        .then(() => setSucess(true))
        .catch(error => alert(error));
    reset();
    setTimeout(()=>{
      setSucess(false);
    },4000)
  }
  return (
    <>
      <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit(onSubmitForm)} netlify>
        <h3> <MailOutlineIcon /> Please, leave me a message</h3>
        <label type="text" name="name"> Name or Fullname: </label>
        <input name="name" ref={register({required: true})} className="nes-input" placeholder="name or fullname" style={{fontSize:'12px',marginBottom:'15px'}} />
        {errors.name && <span className="nes-text is-error">This field is required</span>}
        <label type="text" name="email"> Email: </label>
        <input name="email" ref={register({required: true})} className="nes-input" placeholder="email@example.com" style={{fontSize:'12px',marginBottom:'15px'}} />
        {errors.email && <span className="nes-text is-error">This field is required</span>}
        <label type="text" name="message"> Message: </label>
        <textarea className="nes-textarea" name="message" ref={register({required: true})} placeholder="Here put ur message, thank you" style={{fontSize:'12px',marginBottom:'15px',minHeight:'150px'}}></textarea>
        {errors.message && <span className="nes-text is-error">This field is required</span>}
        <button type="submit" className="nes-btn">
            Submit
        </button>
        {sucess && <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Form sent — <strong>Thank you,I'll respond as soon as possible</strong>
      </Alert>}
      </form>
    </>
  )
}