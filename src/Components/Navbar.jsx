import Button from "./Button";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const showElement = location.pathname === "/";

  const handleNavigation = () => {
    navigate("/one");
  };

  const handleBackNavigation = () => {
    navigate("/");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-[6%] flex items-center justify-between px-5"
    >
      <div className="font-bold text-2xl flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 841.9 595.3"
          width="40"
          height="40"
        >
          <g fill="#113930">
            <circle cx="420.9" cy="296.5" r="50" />
            <path d="M520.5 78.1c-45.7-77.7-129.3-128-226.5-128S113.3 0.5 67.6 78.1c-45.7 77.7-45.7 179.4 0 257.1 45.7 77.7 129.3 128 226.5 128s180.8-50.3 226.5-128c45.7-77.7 45.7-179.4 0-257.1zm-251.1 375.9c-92.2 0-166.9-74.7-166.9-166.9S177.2 120.1 269.4 120.1 436.3 194.8 436.3 287s-74.7 166.9-166.9 166.9z" />
            <path d="M747.6 241c-30.5-52.8-86.1-89.4-146.4-100.7s-127.5 0.7-176.1 36.3c-48.6 35.6-83.2 91.6-98.6 153.5-15.4 61.9-8.1 125.3 20.4 182.7 30.5 52.8 86.1 89.4 146.4 100.7s127.5-0.7 176.1-36.3c48.6-35.6 83.2-91.6 98.6-153.5 15.4-61.9 8.1-125.3-20.4-182.7zm-124.1 283c-92.2 0-166.9-74.7-166.9-166.9S531.3 191.1 623.5 191.1 790.4 265.8 790.4 358s-74.7 166.9-166.9 166.9z" />
          </g>
        </svg>
        Challenger
      </div>
      {showElement ? (
        <div>
          <Button
            action={handleNavigation}
            classStyle="border-2 border-[#004838] px-2 py-1 hover:text-[#9fc960] transition ease-in-out duration-300 hover:bg-[#004838] cursor-pointer rounded-xl font-semibold bg-white"
          >
            <div className="flex gap-2 items-center">Get Started</div>
          </Button>
        </div>
      ) : (
        <div>
          <Button
            action={handleBackNavigation}
            classStyle="border-2 border-[#004838] px-2 py-2 hover:text-[#9fc960] transition ease-in-out duration-300 hover:bg-[#004838] cursor-pointer rounded-xl font-semibold bg-white"
          >
            <div className="flex gap-2 items-center">Get Back</div>
          </Button>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
