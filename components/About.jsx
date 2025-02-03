import Link from "next/link";

export default function About() {
  return (
    <>
      <div
        className="bg-slate-100 w-full h-auto py-12 px-10 flex flex-col md:flex-row items-center justify-between 
    relative md:absolute md:-bottom-80 shadow-lg bg-[url('/1.svg')] bg-cover bg-center"
      >
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
          <p className="text-gray-700 leading-relaxed pt-10">
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
    </>
  );
}
