import Image from "next/image";
import Link from "next/link";
import React from "react";

function MyFooter() {
  return (
    <footer class="flex flex-row gap-0 bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white border border-t  border-t-black font-sc">
      <div class="w-full bg-black/5 p-4 text-center max-sm:hidden md:text-sm">
        © 2024 Copyright:
        <a href="/"> Nawar Dev</a>
      </div>
      <div className="md:flex justify-center  gap-4  w-full bg-black/5 p-4 text-center md:text-sm">
        <div className="max-sm:hidden">Download Resume:</div>
        <Link
          cl
          href="https://drive.usercontent.google.com/u/1/uc?id=1y81VrZ3GqyQISg5FfoVAq_zIPb8kVFaz&export=download"
          target="_blank"
        >
          <Image src="/pdf.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Social */}
      <div className=" md:flex flex  justify-center  gap-4  w-full bg-black/5 p-4 text-center">
        <Link cl href="https://github.com/nowarmerey" target="_blank">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link
          cl
          href="www.linkedin.com/in/nawar-meree-036491164"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link
          cl
          href="https://khamsat.com/user/%D9%86%D9%88%D8%A7%D8%B1-%D9%85%D8%B1%D8%B9%D9%8A"
          target="_blank"
        >
          <Image src="/khamsat.png" alt="" width={24} height={24} />
        </Link>

        <Link
          cl
          href="https://www.instagram.com/nowarmeree?igsh=NndhNTY5cnA2Mno0"
          target="_blank"
        >
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link
          cl
          href="https://www.facebook.com/share/2GGrQC5nETwcFZjm/?mibextid=qi2Omg"
          target="_blank"
        >
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
      </div>
    </footer>
  );
}

export default MyFooter;
