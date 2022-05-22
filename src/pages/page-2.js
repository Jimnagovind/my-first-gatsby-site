import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
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

export default SecondPage
