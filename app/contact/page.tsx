import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col content-center items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">Contact Us</h1>
      <div className="mb-8 text-center">
        <p>
          Itahari-5, DharaToll (On the way of Jyoti School), Itahari, Nepal,
          56707
        </p>
        <p>Service Area: Itahari, Nepal</p>
        <p>Mobile: 981-4306104</p>
        <p>Email: namsewal.bakery11@gmail.com</p>
      </div>
      <div className="relative h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.560216965123!2d87.2625685!3d26.6700455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d448e0dde09%3A0xa42751c3b8eb1a24!2sNamsewal%20Bakery!5e0!3m2!1sen!2sin!4v1693688480990!5m2!1sen!2sin"
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
