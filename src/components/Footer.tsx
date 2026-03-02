import { Code2 } from "lucide-react";
function Footer() {
  return (
    <footer className="border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="mx-2 px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <Code2 color="#8b5cf6" size={22} />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ml-3">
            ReactHub
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm opacity-70 font-bold">
          <a href="#" className="hover:opacity-100 transition">
            Components
          </a>
          <a href="#" className="hover:opacity-100 transition">
            Request
          </a>
          <a href="#" className="hover:opacity-100 transition">
            Feedback
          </a>
        </div>

        {/* Right Text */}
        <div className="text-sm opacity-70">
          Built for developers, by developers.
        </div>
      </div>
    </footer>
  );
}

export default Footer;