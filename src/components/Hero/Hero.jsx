import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import BannerPod1 from "../../assets/banner.png";
import BannerPod2 from "../../assets/banner2.png";
import BannerPod3 from "../../assets/banner3.png";

const Hero = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc: BannerPod1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc: BannerPod2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc: BannerPod3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];
  return (
    <>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          aria-hidden="true"
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">
              Coleção Premium de Vapes e Pods
            </strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            Descubra nossa variedade de sabores e dispositivos de alta
            qualidade. Perfeito para uma experiência suave e satisfatória.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Comprar Agora <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" className="h-5 w-5 text-gray-900" />
          </button>
        </div>
      </div>
      <div>
        <span className="flex items-center mt-2">
          <span className="h-px flex-1 bg-[#111111]"></span>
          <span className="shrink-0 px-6 text-[#000000] text-center text-3xl sm:text-3xl">
            Destaques
          </span>
          <span className="h-px flex-1 bg-[#000000]"></span>
        </span>
        <div className="flex  mx-auto justify-center mt-10">
          <img className="w-1/3 object-contain" src={BannerPod1} alt="" />
          <div className="my-auto">
            <p className="text-6xl font-semibold text-zinc-800 max-w-sm">
              Encontre o sabor perfeito para você!
            </p>
            <p className="text-2xl font-light text-zinc-800 max-w-sm">
              Vapes modernos e pods de última geração com entrega rápida e
              segura.
            </p>
            <div className="flex w-full gap-5 justify-center">
              {products.map((product) => (
                <div key={product.id} className="group relative ">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-20 rounded-lg ">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Base */}
            <div className="buttonsbanner mt-10 justify-around flex">
              <a
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                href="#"
              >
                <span className="absolute inset-0 border border-gray-800 group-active:border-gray-500"></span>
                <span className="block border border-gray-800 bg-gray-800 px-12 py-3 transition-transform active:border-gray-500 active:bg-gray-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Comprar
                </span>
              </a>

              <a
                className="group relative inline-block text-sm font-medium text-gray-800 focus:outline-none focus:ring active:text-gray-500"
                href="#"
              >
                <span className="absolute inset-0 border border-current"></span>
                <span className=" gap-2 items-center border border-current bg-white px-7 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 flex">
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
