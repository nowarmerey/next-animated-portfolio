"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";

function About() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true });
  //const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const expRef = useRef();
  const isExpRefInView = useInView(expRef, { once: true });
  //const isExpRefInView = useInView(expRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* Biography Desc */}
            <p className="text-lg">
              Hello! I am a dedicated and passionate IT professional with a
              degree in Information Technology from 2019. With a total of 5
              years of experience in the IT industry, I have honed my skills in
              both technical support and web development.
            </p>
            {/* Biography Quote */}
            <span className="italic">
              I am always ready to take on new challenges and contribute to
              innovative projects.
            </span>
            {/* Biography Sign */}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 728 417"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 379C40.3936 377.426 44.1496 376.739 45.3889 375.5C48.0356 372.853 48.7066 369.602 49.5 366.111C50.3306 362.456 57.7617 357.909 59.2222 362.778C59.8531 364.881 61.8188 365.623 63 363.556C63.4431 362.78 67.5917 366.22 68.3333 366.611C73.9611 369.581 82.6732 372.044 88.4444 368C96.677 362.231 102.138 350.75 106.667 342.222C117.768 321.319 125.572 298.989 131.111 276C141.948 231.025 149.436 179.972 141.278 133.889C140.679 130.504 138.248 105.914 130.056 109.556C123.1 112.647 120.102 123.801 118.333 129.889C109.727 159.517 106.721 191.143 106.222 221.889C105.565 262.343 113.005 301.657 127.444 339.333C129.524 344.761 131.629 350.532 134.833 355.444C137.702 359.844 138.608 356.043 139.667 352.611C141.929 345.281 143.558 337.789 145.333 330.333C145.618 329.138 145.969 325.792 147.5 325.111C148.591 324.626 150.949 325.492 152.333 325.222C157.532 324.208 161.257 332.367 164.333 336C166.097 338.083 175.518 351.476 179.833 347.333C186.947 340.504 191.301 327.629 195.111 319.111C207.796 290.756 219.539 261.56 227.333 231.444C234.816 202.534 238.892 173.045 241.444 143.333C242.562 130.331 244.166 115.744 242.778 102.556C241.887 94.0978 223.813 116.461 222.778 117.889C208.064 138.175 198.824 161.82 196.389 186.778C193.919 212.093 193.719 240.407 204.889 263.944C207.209 268.832 208.235 268.72 213 269C216.602 269.212 217.018 272.277 218.111 275.333C221.036 283.515 223.888 291.682 227.333 299.667C228.659 302.739 230.075 305.415 232.056 308.056C235.488 312.632 235.683 308.4 238 304.667C241.918 298.355 243.635 303.157 246 308.444C249.489 316.243 252.995 324.676 254 333.222C254.584 338.19 259.326 341.492 263.278 343.833C265.99 345.441 266.692 344.176 268 341.278C276.332 322.811 282.304 303.064 289.889 284.278C307.824 239.857 326.131 195.732 341.389 150.278C351.673 119.641 361.958 88.2925 366.167 56.1111C366.476 53.7421 367.426 46.9872 366.056 48.9445C359.502 58.3063 354.783 69.6337 349.333 79.6111C327.072 120.369 307.559 161.481 293.556 205.889C283.743 237.007 280.619 268.904 282.222 301.444C282.514 307.377 283.511 314.52 286.5 319.833C288.558 323.492 302.807 302.808 304.944 300.944C309.815 296.698 311.768 312.293 312.444 314.333C315.255 322.819 318.021 326.693 326.444 328.778C329.214 329.463 335.298 329.409 337.5 331.611C339.448 333.559 343.719 338.89 346.944 337.556C351.993 335.466 357.51 328.079 360.333 324.333C380.745 297.251 395.545 265.533 408.111 234.222C427.642 185.557 441.8 134.868 450.222 83.1111C452.001 72.1817 456.858 51.4101 453 39.3333C449.94 29.7551 419.976 63.4966 419.444 64.1667C378.477 115.831 366.664 185.356 364.667 249.778C364.535 254.035 363.571 283.959 374.556 278.889C382.778 275.094 388.336 266.982 393.111 259.667C393.175 259.568 401.761 244.458 402.778 245.333C405.322 247.524 406.565 263.218 406.722 264.222C410.034 285.347 412.36 306.599 415.278 327.778C415.332 328.171 415.672 344.793 420.611 341.5C423.308 339.702 424.713 336.412 427.889 335.278C436.155 332.326 437.72 352.72 442 357C447.061 362.061 453.846 353.727 456.778 350.167C473.285 330.122 484.657 304.893 494.667 281.222C516.034 230.69 529.099 177.624 538.167 123.611C543.641 91.0026 548.11 57.8193 547.778 24.6667C547.748 21.6497 546.916 10.4 546.222 6.11112C545.997 4.71891 545.951 2.42575 544.556 2.22223C538.436 1.3298 526.289 23.1912 525.111 25.1111C501.592 63.4434 484.68 106.184 469.778 148.444C440.2 232.32 420.111 319.82 420.111 409.111C420.111 415.541 420.189 416.877 423.778 412C429.233 404.587 434.512 397.185 440.5 390.167C447.057 382.481 453.89 374.95 461.444 368.222C463.711 366.204 468.435 361.411 472 361C476.272 360.507 477.053 370.028 482.222 369.778C490.652 369.37 499.161 362.204 505.111 357.444C538.561 330.684 569.398 299.156 599.056 268.389C637.921 228.068 674.374 185.357 705.5 138.722C705.596 138.578 738.596 94.6195 720.556 94.5C716.723 94.4746 712.91 95.4012 709.222 96.4445C697.525 99.7531 660.997 113.676 653.444 116.333C554.026 151.315 451.994 176.161 349.889 201.889C248.837 227.351 147.829 252.999 47 279.333C33.0655 282.973 15.4993 285.729 2.33333 292.556C-1.23136 294.404 9.98873 295.373 14 295.556C41.66 296.813 69.5454 296.179 97.2222 296C120.279 295.851 144.462 295.008 167 290"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* Biography Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              version="1.1"
              Style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;"
              viewBox="0 0 60000 75000"
              x="0px"
              y="0px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              width={50}
              height={50}
            >
              <defs>
                <style type="text/css"></style>
              </defs>
              <g>
                <path
                  class="fil0"
                  d="M17759 22849l82 -8206c0,-5 0,-10 0,-16l0 0c179,-3573 1624,-6722 3793,-8990 2226,-2327 5216,-3726 8387,-3704 3171,-22 6160,1377 8387,3704 2169,2267 3614,5417 3793,8990 1,11 1,22 0,33 55,5515 55,10886 0,16401 0,5 0,10 0,16l0 0c-179,3573 -1624,6722 -3793,8990 -2226,2327 -5216,3726 -8387,3704 -3171,22 -6160,-1377 -8387,-3704 -2169,-2267 -3614,-5417 -3793,-8990 -1,-11 -1,-22 0,-33l-81 -8195zm18729 23161c156,-156 409,-156 566,0 156,156 156,409 0,566l-6744 6744c-156,156 -409,156 -566,0l-6744 -6744c-156,-156 -156,-409 0,-566 156,-156 409,-156 566,0l6461 6461 6461 -6461zm0 4630c156,-156 409,-156 566,0 156,156 156,409 0,566l-6744 6744c-156,156 -409,156 -566,0l-6744 -6744c-156,-156 -156,-409 0,-566 156,-156 409,-156 566,0l6461 6461 6461 -6461zm-9143 -37292l16 -1575c0,-5 0,-10 0,-16l0 0c38,-766 350,-1444 818,-1932 487,-509 1143,-815 1842,-811 699,-4 1355,302 1842,811 468,489 779,1166 818,1932 1,11 1,22 0,33 11,1055 10,2083 0,3139 0,5 0,10 0,16l0 0c-38,766 -350,1444 -818,1932 -487,509 -1143,815 -1842,811 -699,4 -1355,-302 -1842,-811 -468,-489 -779,-1166 -818,-1932 -1,-11 -1,-22 0,-33l-15 -1564zm812 -1553l-15 1556 15 1553 0 3c28,567 255,1064 596,1420 339,354 790,567 1265,564l3 0c475,3 927,-210 1265,-564 340,-356 567,-853 596,-1420l0 0 15 -1556 -15 -1553 0 -3c-28,-567 -255,-1064 -596,-1420 -339,-354 -790,-567 -1265,-564l-3 0c-475,-3 -927,210 -1265,564 -340,356 -567,853 -596,1420l0 0zm-9520 2871l-81 8187 81 8184 0 3c169,3373 1529,6343 3571,8477 2078,2172 4863,3478 7810,3457l3 0c2948,21 5732,-1285 7810,-3457 2042,-2134 3402,-5104 3571,-8477l0 0 81 -8187 -81 -8184 0 -3c-169,-3373 -1529,-6343 -3571,-8477 -2078,-2172 -4863,-3478 -7810,-3457l-3 0c-2948,-21 -5732,1285 -7810,3457 -2042,2134 -3402,5104 -3571,8477l0 0z"
                />
              </g>
            </motion.svg>
          </div>
          {/* Skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skill Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/* Skill List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Javascript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                ReactJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                NextJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                TailwindCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                VisualBasic
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                ThreeJS
              </div>
            </motion.div>
            {/* Skill Scroll SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              version="1.1"
              Style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;"
              viewBox="0 0 60000 75000"
              x="0px"
              y="0px"
              fill-rule="evenodd"
              clip-rule="evenodd"
              width={50}
              height={50}
            >
              <defs>
                <style type="text/css"></style>
              </defs>
              <g>
                <path
                  class="fil0"
                  d="M17759 22849l82 -8206c0,-5 0,-10 0,-16l0 0c179,-3573 1624,-6722 3793,-8990 2226,-2327 5216,-3726 8387,-3704 3171,-22 6160,1377 8387,3704 2169,2267 3614,5417 3793,8990 1,11 1,22 0,33 55,5515 55,10886 0,16401 0,5 0,10 0,16l0 0c-179,3573 -1624,6722 -3793,8990 -2226,2327 -5216,3726 -8387,3704 -3171,22 -6160,-1377 -8387,-3704 -2169,-2267 -3614,-5417 -3793,-8990 -1,-11 -1,-22 0,-33l-81 -8195zm18729 23161c156,-156 409,-156 566,0 156,156 156,409 0,566l-6744 6744c-156,156 -409,156 -566,0l-6744 -6744c-156,-156 -156,-409 0,-566 156,-156 409,-156 566,0l6461 6461 6461 -6461zm0 4630c156,-156 409,-156 566,0 156,156 156,409 0,566l-6744 6744c-156,156 -409,156 -566,0l-6744 -6744c-156,-156 -156,-409 0,-566 156,-156 409,-156 566,0l6461 6461 6461 -6461zm-9143 -37292l16 -1575c0,-5 0,-10 0,-16l0 0c38,-766 350,-1444 818,-1932 487,-509 1143,-815 1842,-811 699,-4 1355,302 1842,811 468,489 779,1166 818,1932 1,11 1,22 0,33 11,1055 10,2083 0,3139 0,5 0,10 0,16l0 0c-38,766 -350,1444 -818,1932 -487,509 -1143,815 -1842,811 -699,4 -1355,-302 -1842,-811 -468,-489 -779,-1166 -818,-1932 -1,-11 -1,-22 0,-33l-15 -1564zm812 -1553l-15 1556 15 1553 0 3c28,567 255,1064 596,1420 339,354 790,567 1265,564l3 0c475,3 927,-210 1265,-564 340,-356 567,-853 596,-1420l0 0 15 -1556 -15 -1553 0 -3c-28,-567 -255,-1064 -596,-1420 -339,-354 -790,-567 -1265,-564l-3 0c-475,-3 -927,210 -1265,564 -340,356 -567,853 -596,1420l0 0zm-9520 2871l-81 8187 81 8184 0 3c169,3373 1529,6343 3571,8477 2078,2172 4863,3478 7810,3457l3 0c2948,21 5732,-1285 7810,-3457 2042,-2134 3402,-5104 3571,-8477l0 0 81 -8187 -81 -8184 0 -3c-169,-3373 -1529,-6343 -3571,-8477 -2078,-2172 -4863,-3478 -7810,-3457l-3 0c-2948,-21 -5732,1285 -7810,3457 -2042,2134 -3402,5104 -3571,8477l0 0z"
                />
              </g>
            </motion.svg>
          </div>
          {/* Experience container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={expRef}
          >
            {/* Experience Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExpRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* Experience List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExpRefInView ? { x: 0 } : {}}
              // transition={{ delay: 0.2 }}
              className=""
            >
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className=" w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    IT Support Engineer
                  </div>
                  {/* Job Desc */}
                  <div className="flex flex-col p-3 text-sm italic">
                    <span>
                      • Providing support, testing and restructuring the
                      internal network of the company, to resolve business
                      challenges and maintain the system continuity
                    </span>
                    <span>
                      • Providing and overseeing the technical needs of working
                      staff as a laptop software or hardware
                    </span>
                    <span>• Managing files and printers sharing network</span>
                    <span>
                      • Collaboration with software testing, evaluation and
                      adaptation to the company needs
                    </span>
                    <span>
                      • Developing a program for managing personnel affairs in
                      Visual Basic language and linking it to the Excel program
                      to be compatible with the rest of the companys previous
                      programs
                    </span>
                    <span>
                      • Developing a truck scale program and issuing periodic
                      reports
                    </span>
                  </div>
                  {/* Job Date */}
                  <div className=" p-3 text-red-400 text-sm font-semibold">
                    2021 - Present
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    STG-E Co.
                  </div>
                </div>
                {/* Center */}
                <div className="flex items-center justify-center w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3"></div>
                {/* Center */}
                <div className="flex items-center justify-center w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative ">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Front-End Developer
                  </div>
                  {/* Job Desc */}
                  <div className=" flex flex-col p-3 text-sm italic">
                    <span>
                      • Implemented and optimized front-end interfaces using
                      HTML, CSS, and JavaScript, leading to a 25% increase in
                      user engagement.
                    </span>
                    <span>
                      • Collaborated with UX/UI designers to translate designs
                      into functional website code, improving the sites
                      aesthetics and usability.
                    </span>
                    <span>
                      • Adhered to web standards and best practices to create an
                      accessible and SEO-friendly website.
                    </span>
                    <span>
                      • Integrated front-end elements with server-side logic,
                      working closely with back-end developers.
                    </span>
                  </div>
                  {/* Job Date */}
                  <div className=" p-3 text-red-400 text-sm font-semibold">
                    2019 - 2021
                  </div>
                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Syriatel
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block sticky top-0  z-30 w-1/3 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
