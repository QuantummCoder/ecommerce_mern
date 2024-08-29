import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Policy page"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%",margin: "10px"}}
          />
        </div>
        <div className="col-md-4" style={{marginTop: "15px", fontFamily: "'Poppins', sans-serif", fontSize: "1rem"}}>
          <p>Privacy Policy: Outlines data collection, usage, protection, user rights, and third-party sharing practices.</p>
          <p>Return and Refund Policy: Defines return eligibility, process, refund timelines, non-returnable items, and shipping cost responsibilities.</p>
          <p>Shipping Policy: Details shipping options, delivery times, costs, handling time, and order tracking.
          </p>
          <p>Terms of Service: Sets user responsibilities, prohibited activities, intellectual property rights, and service limitations.</p>
          <p>Cookie Policy: Explains cookie usage, types, purposes, user management options, and privacy impact.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy