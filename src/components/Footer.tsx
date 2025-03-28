import Link from "next/link";
import { Github, LinkedinIcon, MailIcon } from "lucide-react";

// const Github = GithubIcon;
const Linkedin = LinkedinIcon;
const Mail = MailIcon;


export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Caydran Mah. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-white hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-white hover:text-blue-300 transition-colors" />
            </Link>
            <Link href="mailto:contact@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-white hover:text-blue-300 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
