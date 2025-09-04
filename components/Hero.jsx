// Hero section component for portfolio
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Hello, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Anjali Tambe</span>
      </h1>
      <p className="text-lg text-gray-300 mt-4">Software Engineer | AI Enthusiast | Cloud Developer</p>
      <div className="mt-6 flex flex-row gap-4">
        <a href="#projects" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform btn-primary">View My Work</a>
      </div>
    </section>
  );
}
