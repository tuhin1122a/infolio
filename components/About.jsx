/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";

// export default function About() {
//   return (
//     <>
//       <div
//         className="bg-white w-full h-auto py-12 px-10 flex flex-col md:flex-row items-center justify-between
//     relative md:absolute md:-bottom-80 z-50 shadow-lg bg-[url('/background.svg')] bg-cover bg-center"
//       >
//         {/* Left Side - Contact Info */}
//         <div className="w-full md:w-2/5 px-6 text-center md:text-left">
//           <h2 className="text-2xl text-gray-900 leading-relaxed mt-8">
//             If you’re looking for a specialist to build a meaningful digital
//             project, you can easily reach us by clicking{" "}
//             <Link href="#" className="text-blue-600 hover:underline">
//               here
//             </Link>
//           </h2>
//           <div className="mt-28 text-gray-800 font-bold text-4xl">
//             28{" "}
//             <span className="text-gray-600 text-xl">YEARS OF EXPERIENCE</span>
//           </div>
//         </div>

//         {/* Right Side - Additional Info */}
//         <div className="w-full md:w-2/5 px-6 text-center md:text-left">
//           <p className="text-gray-700 leading-relaxed pt-10">
//             Whether you are a development agency looking to outsource design
//             work, a company in search of a Product Designer or Product Team, a
//             marketing agency that needs a landing page, a startup that wants to
//             launch an app, or an enterprise that plans to rebrand or redesign
//             its website, we welcome any challenge with our arms wide open.
//           </p>

//           {/* Marquee Effect */}
//           <div className="overflow-hidden whitespace-nowrap mt-20 relative w-full">
//             <div className="inline-block animate-marquee">
//               <span className="mx-8 text-2xl font-semibold text-gray-700">
//                 UI-UX Design *
//               </span>
//               <span className="mx-8 text-2xl font-semibold text-gray-700">
//                 Web Development *
//               </span>
//               <span className="mx-8 text-2xl font-semibold text-gray-700">
//                 Digital Marketing *
//               </span>
//               <span className="mx-8 text-2xl font-semibold text-gray-700">
//                 Digital Product *
//               </span>
//               <span className="mx-8 text-2xl font-semibold text-gray-700">
//                 Branding Design *
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import Link from "next/link";

export default function About() {
  return (
    <section
      className="bg-white w-full h-auto
       py-4 px-2 bg-[url('/1.svg')] bg-cover bg-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Contact Info */}
        <div className="w-full md:w-2/5 px-6 text-center md:text-left">
          <h2 className="text-2xl text-gray-900 leading-relaxed mt-8">
            If you’re looking for a specialist to build a meaningful digital
            project, you can easily reach us by clicking{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              here
            </Link>
          </h2>
          <div className="mt-28 text-gray-800 font-bold text-4xl">
            28{" "}
            <span className="text-gray-600 text-xl">YEARS OF EXPERIENCE</span>
          </div>
        </div>

        {/* Right Side - Additional Info */}
        <div className="w-full md:w-2/5 px-6 text-center md:text-left">
          <p className="text-gray-700 leading-relaxed pt-10 z-50">
            Whether you are a development agency looking to outsource design
            work, a company in search of a Product Designer or Product Team, a
            marketing agency that needs a landing page, a startup that wants to
            launch an app, or an enterprise that plans to rebrand or redesign
            its website, we welcome any challenge with our arms wide open.
          </p>

          {/* Marquee Effect */}
          <div className="overflow-hidden whitespace-nowrap mt-20 relative w-full">
            <div className="inline-block animate-marquee">
              <span className="mx-8 text-2xl font-semibold text-gray-700">
                UI-UX Design *
              </span>
              <span className="mx-8 text-2xl font-semibold text-gray-700">
                Web Development *
              </span>
              <span className="mx-8 text-2xl font-semibold text-gray-700">
                Digital Marketing *
              </span>
              <span className="mx-8 text-2xl font-semibold text-gray-700">
                Digital Product *
              </span>
              <span className="mx-8 text-2xl font-semibold text-gray-700">
                Branding Design *
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons Container */}
      <div>
        <div className="flex justify-center items-center mt-16">
          <p className="text-xl font-semibold text-green-500">Why Choose Us</p>
        </div>
        <div className="w-full flex flex-row space-y-10 mt-40 ">
          <div className="w-full flex flex-col space-y-6 relative">
            {" "}
            {/* Added relative positioning */}
            {/* Image or other widget */}
            <div className="w-full flex justify-center items-center transform rotate-[-10deg]">
              <img
                src="/04.jpg"
                alt="New Image"
                className="w-96 h-auto object-cover rounded-3xl"
              />
            </div>
            {/* Button with animation */}
            <div className="absolute bottom-0 left-0 mb-4 transform rotate-[-90deg] translate-y-[-100%] ">
              {" "}
              {/* Adjusted to position at the bottom */}
              <a
                href="your-link"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-200 text-gray-600 rounded-2xl hover:bg-blue-600 transition duration-300"
              >
                <span className="mr-2">
                  <svg
                    className="w-6 h-6 text-green-500"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                    ></path>
                  </svg>
                </span>
                <span>Watch Now</span>
              </a>
            </div>
          </div>

          {/* Second section with heading and content */}
          <div className="w-full flex flex-col space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Your New Heading</h2>
            </div>

            {/* Additional content or widgets */}
            <div className="w-full flex justify-center">
              <div className="text-center">
                <p className="text-lg text-gray-700">
                  Your content goes here. Provide details about the new
                  component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
