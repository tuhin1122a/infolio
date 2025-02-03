import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="relative text-white bg-black w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/8324.png"
            alt="Creative Agency"
            className="object-cover brightness-50"
            fill
            priority
          />
        </div>

        {/* Content */}
        <div className="relative w-full mx-auto py-20 px-6 md:px-12">
          {/* Paragraph positioned at the top right */}
          <p className="absolute top-6 right-8 text-lg md:text-2xl max-w-lg mx-auto tracking-widest">
            We are a creative studio that specializes in providing high-quality
            design and branding solutions to businesses and individuals.
          </p>

          <div className="text-center relative w-full mt-28">
            {/* Navigation items */}
            <div className="flex justify-between w-full">
              <div>
                <h2 className="cursor-pointer hover:underline">
                  BUILDING DIGITAL DESIGN
                </h2>
              </div>
              <div>
                <h2 className="cursor-pointer hover:underline">
                  CREATIVE STUDIO
                </h2>
              </div>
            </div>

            {/* Title */}
            <div className="relative z-10 w-full">
              <h1 className="text-3xl md:text-8xl font-semibold text-center absolute top-1/3 w-full tracking-tight">
                C R E A T I V E A G E N C Y
              </h1>
            </div>

            {/* Image centered */}
            <div className="relative z-0 mt-16 flex justify-center">
              <Image
                src="/21.jpg"
                alt="Team Collaboration"
                className="shadow-lg w-full  h-auto"
                width={1440}
                height={1280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
    </>
  );
};

export default HeroSection;
