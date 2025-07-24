import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-0" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-40">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to collaborate on <span className="text-purple">your</span> next
          project?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let's discuss how I can help you build innovative solutions with AI/ML and modern technologies.
        </p>
        <a href="mailto:stephenferrao.in@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <p className="text-white-200 mt-4 text-center text-sm">
          Copy my email address: <span className="text-purple font-mono">stephenferrao.in@gmail.com</span>
        </p>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Stephen Ferrao
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-100 transition-all duration-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
