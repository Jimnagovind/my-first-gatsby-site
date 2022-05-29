import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


export function initNetlifyIdentity(){
  console.log("initNetlifyIdentity called.")
  const script = document.createElement("script");
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
  script.async = true;
  document.body.appendChild(script);
}

function openNetlifyModal(){
  const netlifyIdentity = window.netlifyIdentity;

  if(netlifyIdentity)
     netlifyIdentity.open();
  else
    console.log('netlifyIdentity not defined')
}

class netlifyIdentity extends Component{
  componentDidMount(){
    initNetlifyIdentity();

  }

  render(){
    return(<div></div>)
  }
}

const SecondPage = () => {
  initNetlifyIdentity();
return(
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <h2 onClick={() => { openNetlifyModal() } }>Login</h2>
    
    <p><b>Contact Form</b></p>
    
<form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
       <p>
    <label>Your Name: </label><br></br>
    <input type="text" name="name" size="25" />
  </p>
  <p>
    <label>Your Email: </label><br></br>
    <input type="email" name="email" size="25" />
  </p>
  
  <p>
    <label>Message: <br></br><textarea name="message" rows="5" cols="40"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
     
    </form>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
}

export default SecondPage
