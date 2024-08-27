import React from "react";

const ContactPage = () => {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Contact Us</h1>
      <div className="mb-8">
        <p>
          Itahari-5, DharaToll (On the way of Jyoti School), Itahari, Nepal,
          56707
        </p>
        <p>Service Area: Itahari, Nepal</p>
        <p>Mobile: 981-0400003</p>
        <p>Email: namsewal.bakery11@gmail.com</p>
      </div>
      <div className="relative h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.331138210186!2d85.32396091453917!3d27.706595032005206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fb889a77d7%3A0x4d147b6b99b9274e!2sItahari%2C%20Nepal!5e0!3m2!1sen!2snp!4v1694512946451!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
