import React from "react";
import mobile from "assets/mobile.svg";
import web from "assets/web.svg";
import seo from "assets/seo.svg";
import branding from "assets/branding.svg";
import Image from "next/image";

export default function Services() {
  //
  const serviceSection = [
    {
      id: 101,
      icon: (
        <Image
          src={mobile}
          style={{
            width: "12rem",
            height: "6rem",
          }}
          className="mt-4 text-gray-700"
          alt="mobile"
        />
      ),
      serviceTitle: "Mobile Development",
      description:
        " is the act or process by which a mobile app is developed for android & ios devices.",
    },
    {
      id: 106,
      icon: (
        <Image
          src={web}
          style={{
            width: "12rem",
            height: "6rem",
          }}
          className="mt-4 text-gray-700"
          alt="web"
        />
      ),
      serviceTitle: "Website Development",
      description:
        " is the act or process by which a web dev is developed by web applications & systems.",
    },
    {
      id: 102,
      icon: (
        <Image
          src={seo}
          style={{
            width: "12rem",
            height: "6rem",
          }}
          className="mt-4 text-gray-700"
          alt="web"
        />
      ),
      serviceTitle: "SEO Optimization",
      description:
        " is the act or process by which a web dev is developed by web applications & systems.",
    },
    {
      id: 103,
      icon: (
        <Image
          src={branding}
          style={{
            width: "12rem",
            height: "6rem",
          }}
          className="mt-4  text-gray-700"
          alt="branding"
        />
      ),
      serviceTitle: "Branding & Video Editing",
      description:
        "is the designing and developing logos , videos & images and products for the industry.",
    },
  ];

  return (
    <section id="Services">
      <div className="my-20 flex justify-center">
        <h1 className=" inline-block rounded border-b-4 border-gray-700 text-4xl font-bold tracking-wider text-gray-900">
          My Services
        </h1>
      </div>
      <article className="mx-20 mb-20 grid gap-6 font-poppins md:grid-cols-2  lg:grid-cols-4">
        {serviceSection.map((service) => (
          <div
            key={service.id}
            className="flex flex-col  items-center  justify-center rounded shadow-lg shadow-slate-100"
          >
            {service.icon}
            <h1 className="my-4 text-lg md:text-xl lg:text-2xl">
              {service.serviceTitle}
            </h1>
            <p className="md:text-md mb-8 w-4/5 text-center text-sm text-gray-600 lg:text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
