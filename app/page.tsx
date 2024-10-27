import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <header className="head1">
        <nav>
          <h1 className="img text-black text-4xl font-bold">
            <span className="text-sky-700 font-bold">P</span>ixel
            <span className="text-sky-700 font-bold">P</span>age
          </h1>
          <ul className="ul">
            <li className="li">
              <Link href="#" className="text-xl"> Home</Link>
            </li>

            <li className="li">
              <Link href="./services" className="text-xl"> Services</Link>
            </li>

            <li className="li">
              <Link href="./about" className="text-xl"> About</Link>
            </li>

            <li className="li">
              <Link href="./contact" className="text-xl"> Contact</Link>
            </li>

           </ul>
        </nav>
      </header>
<main>
  <div>
    <section>
      <h1 className="text-6xl text-sky-700 text-center mt-28">Welcome to web page</h1>
      <p className="w-5/12 text-center text-lg font-serif text-black my">Welcome to Pixel Pages! Discover beautifully designed, customizable web templates that make building your online presence easy and enjoyable for everyone. Lets create together!</p> 
    </section> <br/> <br/>
      <button className="itn w-36 h-12 hover:bg-cyan-200	 text-black font-sans font-semibold rounded-xl bg-sky-700"><a href="">Read More</a></button>
  </div>
</main>



    </div>
  );
}
