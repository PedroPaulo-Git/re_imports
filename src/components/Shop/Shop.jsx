import BannerPod1 from "../../assets/banner.png";
import BannerPod2 from "../../assets/banner2.png";
import BannerPod3 from "../../assets/banner3.png";
import waka from "../../assets/waka.png";
import ignite150v from "../../assets/ignite.png";
import waka2 from "../../assets/waka2.png";
import lost from "../../assets/lost.png";
import oxbar from "../../assets/oxbar.jpg";
import oxbarold from "../../assets/oxbar.png";


//produtcs

import igniteEX from "../../assets/IGNITEEX.png";
import ELF6EX from "../../assets/ELF6EX.png";
import WAKA2EX from "../../assets/WAKA2EX.png";
import lostmaryEX from "../../assets/lostmaryEX.png";
import OXBAR8EX from "../../assets/OXBAR8EX.png";
import ELFWORLDEX from "../../assets/ELFWORLDEX.png";
import BLVKEX from "../../assets/BLVKEX.png";
import Blacksheep from "../../assets/Blacksheep.jpg";
import MainBanner from "../../assets/MainBanner.jpg";
const produtosDestaque = [
  {
    id: 1,
    name: "Ignite 150V",
    href: "https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato.",
    imageSrc: ignite150v,
    imageAlt: "Pod Ignite 150V",
    price: "R$50",
    puffs: "15000 Puffs",
  },
  {
    id: 2,
    name: "Lost",
    href: "#",
    imageSrc: lost,
    imageAlt: "Pod Lost",
    price: "R$50",
    puffs: "6000 Puffs",
  },
  {
    id: 3,
    name: "Oxbar",
    href: "#",
    imageSrc: oxbarold,
    imageAlt: "Pod Oxbar",
    price: "R$50",
    puffs: "10000 Puffs",
  },
  {
    id: 4,
    name: "Waka",
    href: "#",
    imageSrc: waka,
    imageAlt: "Pod Waka",
    price: "R$50",
    puffs: "8000 Puffs",
  },
];

const produtos = [
  {
    id: 1,
    name: "Ignite EX",
    href: "#",
    imageSrc: igniteEX,
    imageAlt: "Pod Ignite EX",
    price: "R$50",
    puffs: "5000 Puffs",
  },
  {
    id: 2,
    name: "Waka 2",
    href: "#",
    imageSrc: WAKA2EX,
    imageAlt: "Pod Waka 2",
    price: "R$50",
    puffs: "5000 Puffs",
  },
  {
    id: 3,
    name: "ELF 6 EX",
    href: "#",
    imageSrc: ELF6EX,
    imageAlt: "Pod ELF 6 EX",
    price: "R$50",
    puffs: "6000 Puffs",
  },
  {
    id: 4,
    name: "Black Sheep",
    href: "#",
    imageSrc: Blacksheep,
    imageAlt: "Pod Black Sheep",
    price: "R$50",
    puffs: "10000 Puffs",
  },
  {
    id: 5,
    name: "OXBAR 8 EX",
    href: "#",
    imageSrc: OXBAR8EX,
    imageAlt: "Pod OXBAR 8 EX",
    price: "R$50",
    puffs: "8000 Puffs",
  },
  {
    id: 6,
    name: "Lost Mary EX",
    href: "#",
    imageSrc: lostmaryEX,
    imageAlt: "Pod Lost Mary EX",
    price: "R$50",
    puffs: "6500 Puffs",
  },
  {
    id: 7,
    name: "BLVK EX",
    href: "#",
    imageSrc: BLVKEX,
    imageAlt: "Pod BLVK EX",
    price: "R$50",
    puffs: "10000 Puffs",
  },
  {
    id: 8,
    name: "ELF World EX",
    href: "#",
    imageSrc: ELFWORLDEX,
    imageAlt: "Pod ELF World EX",
    price: "R$50",
    puffs: "10500 Puffs",
  },
];
  
function Shop() {
    return (
        <>
      <div id="shop" className="bg-white mx-auto px-2">
        <div className="mx-auto max-w-2xl px-4 py-16 lg:pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <span className="flex items-center mt-2">
          <span className="h-px flex-1 bg-[#111111]"></span>
          <span className="shrink-0 px-6 text-center text-3xl sm:text-3xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-transparent bg-clip-text">
            Mais Vendidos
          </span>
          <span className="h-px flex-1 bg-[#000000]"></span>
        </span>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {produtosDestaque.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.puffs}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    {/* DISCOUNT  */}
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 ">
        <img
          alt=""
          src={BannerPod1}
          className="h-60 w-full object-contain sm:object-cover  md:h-full"
        />
      
        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 my-auto">
          <p className="text-sm font-semibold uppercase tracking-widest">Corra e pegue já o seu</p>
      
          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Tenha 20% de desconto </span>
      
            <span className="mt-2 block text-sm">Na sua proxima compra</span>
          </h2>
      
          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="#"
          >
            Aproveitar desconto
          </a>
      
          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Oferta válida até 30 de novembro*
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <span className="flex items-center mt-2">
          <span className="h-px flex-1 bg-[#111111]"></span>
          <span className="shrink-0 px-6 text-center text-3xl sm:text-3xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-transparent bg-clip-text">
            Mais Produtos
          </span>
          <span className="h-px flex-1 bg-[#000000]"></span>
        </span>
  
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {produtos.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white shadow-xl group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.puffs}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </>
    )
  }
  export default Shop;