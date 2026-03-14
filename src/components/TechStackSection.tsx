import React from "react";
import { ImageProps } from "../utils/models/stores";

function TechStackSection() {

    const TechStackLogos = [
        { logo: ImageProps.OniduuruLogo, name: "Oniduuru" },
        { logo: ImageProps.paystackLogo, name: "Paystack" },
        { logo: ImageProps.awsLogo, name: "AWS" },
        { logo: ImageProps.amazonLaightSailLogo, name: "Amazon Lightsail" },
         { logo: ImageProps.hostingerLogo, name: "Hostinger" },
        { logo: ImageProps.angularLogo, name: "Angular" },
        { logo: ImageProps.capacitorLogo, name: "Capacitor" },
        { logo: ImageProps.cloudinaryLogo, name: "Cloudinary" },
        { logo: ImageProps.flowbiteLogo, name: "Flowbite" },
        { logo: ImageProps.ionicLogo, name: "Ionic" },
        { logo: ImageProps.monoLookupLogo, name: "Mono Lookup" },
        { logo: ImageProps.nestJsLogo, name: "NestJS" },
        { logo: ImageProps.reduceImagesLogo, name: "Reduce Images" },
        { logo: ImageProps.tailwindLogo, name: "TailwindCSS" },
        { logo: ImageProps.MoniepointLogo, name: "Moniepoint" },
    ];

    return (
        <section className="bg-white py-20 px-6 lg:px-20">

            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Technologies Powering Oniduuru
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                    Our platform is powered by modern technologies, secure payment
                    infrastructure, and scalable cloud services to deliver a fast,
                    reliable, and seamless marketplace experience.
                </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center">

                {TechStackLogos.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center justify-center"
                    >
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="h-12 object-contain opacity-70 hover:opacity-100 transition duration-300"
                        />

                        <p className="text-sm text-gray-500 mt-3 text-center">
                            {item.name}
                        </p>
                    </div>
                ))}

            </div>

        </section>
    );
}
export default TechStackSection;