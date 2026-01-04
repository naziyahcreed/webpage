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
    <div id="contact" className="bg-[var(--bg-primary)] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background visual */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent)] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[var(--accent-secondary)] rounded-full blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[var(--bg-secondary)]/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden golden-border-textured relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          {/* Left Side: Contact Info / CTA */}
          <div className="md:col-span-2 golden-bg p-8 flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-black">Let's Discuss Your Project</h3>
                <p className="mb-6 text-black">
                  Ready to bring your ideas to life? Fill out the form and I'll get back to you within 24 hours.
                </p>
                
                <div className="flex flex-col space-y-4 font-medium text-black">
                    <div className="flex items-center space-x-2">
                        <FiMail /> <span>naziyahcreedmd@gmail.com</span>
                    </div>
                </div>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-3 p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-2 golden-text">Get in Touch</h2>
            <p className="text-[var(--text-secondary)] mb-8 text-sm">Fill in the fields below to start a conversation.</p>
            
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold flex items-center"><FiUser className="mr-2 text-[#f9aa33]"/> <span className="golden-text">Name</span></label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter Name" 
                    className="px-4 py-3 rounded-lg border-none golden-border-textured bg-[var(--bg-primary)]/50 text-[var(--text-primary)] focus:outline-none transition-all w-full h-auto" 
                  />
                </div>
                <div className="flex flex-col space-y-2">
                   <label htmlFor="phone" className="text-sm font-semibold flex items-center"><FiPhone className="mr-2 text-[#f9aa33]"/> <span className="golden-text">Phone</span></label>
                   <input 
                    type="tel" 
                    name="phone" 
                    value={phone}
                    onChange={handlePhoneChange}
                    required 
                    placeholder="+91 Phone No" 
                    className="px-4 py-3 rounded-lg border-none golden-border-textured bg-[var(--bg-primary)]/50 text-[var(--text-primary)] focus:outline-none transition-all w-full h-auto" 
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-semibold flex items-center"><FiMail className="mr-2 text-[#f9aa33]"/> <span className="golden-text">Email Address</span></label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="trustme@example.com" 
                  className="px-4 py-3 rounded-lg border-none golden-border-textured bg-[var(--bg-primary)]/50 text-[var(--text-primary)] focus:outline-none transition-all w-full h-auto" 
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm font-semibold flex items-center"><FiMessageCircle className="mr-2 text-[#f9aa33]"/> <span className="golden-text">Your Message</span></label>
                <textarea 
                  name="message" 
                  required 
                  placeholder="Tell me about your project needs..." 
                  className="px-4 py-3 rounded-lg border-none golden-border-textured bg-[var(--bg-primary)]/50 text-[var(--text-primary)] focus:outline-none transition-all w-full h-32 resize-none shadow-inner"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full golden-btn text-black font-bold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-200 transform active:scale-95 flex items-center justify-center space-x-2 h-14"
              >
                  <FiMessageCircle className="w-5 h-5"/>
                  <span>Send Message</span>
              </button>

              {result && (
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center font-medium mt-2 ${result.includes("Success") ? "text-green-500" : "text-red-500"}`}
                >
                    {result}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </motion.div>
      <div className="golden-line opacity-80 mt-16"></div>
    </div>
  );
}

