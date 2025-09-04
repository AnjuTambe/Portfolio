// Navbar component for portfolio
export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-black fixed top-0 left-0 z-50 shadow-lg">
      <div className="text-2xl font-bold text-white">
        <span className="text-white">A</span><span className="text-blue-400">T</span>
      </div>
      <div className="flex gap-8 text-white text-lg">
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
