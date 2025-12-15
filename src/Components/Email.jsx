import React from "react";
//icons for lebels in email form import
import { FiUser, FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
export default function Email() {
  const [result, setResult] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setPhone(numericValue);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append Web3Forms Access Key
    formData.append("access_key", "a97d3f33-63af-4b29-8376-9d6e803af778");

    try {
        // Send only to Web3Forms
        const web3Res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const web3Data = await web3Res.json();
        
        if (web3Data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setPhone("");
        } else {
            console.error("Web3Forms Failed:", web3Data);
            setResult(web3Data.message || "Failed to submit form.");
        }
    } catch (error) {
        console.error("Network Error", error);
        setResult("Network error, please try again later.");
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] p-8  text-[var(--text-primary)] ">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-md mx-auto bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold text-center text-[var(--accent)] mb-2">Ready to Start?</h2>
        <p className="text-center text-[var(--text-secondary)] mb-6">Get a free consultation for your project today.</p>
        <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
          <label htmlFor="name" className="mb-2 text-lg font-bold flex items-center"><FiUser className="mr-2" />Name</label>
          <input type="text" name="name" required placeholder="Enter your name" className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] " />

          <label htmlFor="email" className="mb-2 text-lg font-bold flex items-center"><FiMail className="mr-2" />Email</label>
          <input type="email" name="email" required placeholder="Enter your email" className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] " />

          <label htmlFor="phone" className="mb-2 text-lg font-bold flex items-center"><FiPhone className="mr-2" />Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            value={phone}
            onChange={handlePhoneChange}
            required 
            placeholder="Enter your phone number" 
            className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] " 
          />

          <label htmlFor="message" className="mb-2 text-lg font-bold flex items-center"><FiMessageCircle className="mr-2" />Message</label>

          <textarea name="message" required placeholder="Enter your message" className="mb-2 px-4 py-2 rounded-md border-2 border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] w-2xl h-32 shadow-neutral-400 "></textarea>

          <button type="submit" className="bg-[var(--accent)] text-white px-4 py-2 rounded-md hover:scale-105 transition ">Submit Form</button>

        </form>
        <span>{result}</span>
      </motion.div>

    </div>
  );
}

