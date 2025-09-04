// Contact section component for portfolio
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Contact Info */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" /></svg></span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-300 text-sm">atambe@seattleu.edu</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.659 1.591l7.5 7.5a2.25 2.25 0 003.182 0l7.5-7.5A2.25 2.25 0 0021.75 6.993V6.75" /></svg></span>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-300 text-sm">+1-206-538-4255</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-7 19c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.211 0-4 1.789-4 4s1.789 4 4 4 4-1.789 4-4-1.789-4-4-4zm7.5 10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/></svg></span>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-300 text-sm">@anjalisambhajitambe</div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="email" placeholder="Your Email" className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="text" placeholder="Subject" className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <textarea placeholder="Your Message" rows={4} className="bg-gray-900 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button type="submit" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
