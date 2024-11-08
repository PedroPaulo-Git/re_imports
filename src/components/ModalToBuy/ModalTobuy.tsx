import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";

const ModalToBuy = ({ setShowModal, product }) => {
  const closeModal = () => setShowModal(false);
  const [open, setOpen] = useState(true);
  const [selectedFlavor, setSelectedFlavor] = useState(""); // Estado para o sabor selecionado

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  const handleCheckAvailability = () => {
    if (selectedFlavor) {
      const message = `Olá, estou interessado no produto ${product.name} (${selectedFlavor}).\nPreço: ${product.price}\nQuantidade de Puffs: ${product.puffs}\nGostaria de saber sobre a disponibilidade.`;
      const whatsappLink = `https://wa.me/8199049803?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank"); // Abre o link no WhatsApp
    } else {
      alert("Por favor, selecione um sabor.");
    }
  };
  return (
    <Dialog open={open} onClose={closeModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="absolute top-1/2 left-1/2 px-2 w-4/4 lg:w-3/4 -translate-x-1/2 -translate-y-1/2  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 mx-auto text-center sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-xl lg:text-2xl mb-6 font-semibold text-gray-900"
                  >
                    Detalhes do Produto
                  </DialogTitle>
                  <div className="mt-2 flex gap-6 text-lg">
                    <div className="text-left">
                      <span>SABORES :</span>
                      <form>
                        <ul className="text-sm w-32">
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="grape"
                              value="Uva" // Valor do sabor
                            />
                            <label htmlFor="grape">🍇 Uva</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="strawberry"
                              value="Morango" // Valor do sabor
                            />
                            <label htmlFor="strawberry">🍓 Morango</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="watermelon"
                              value="Melancia" // Valor do sabor
                            />
                            <label htmlFor="watermelon">🍉 Melancia</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="cherry"
                              value="Cereja" // Valor do sabor
                            />
                            <label htmlFor="cherry">🍒 Cereja</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="pineapple"
                              value="Abacaxi" // Valor do sabor
                            />
                            <label htmlFor="pineapple">🍍 Abacaxi</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="red-apple"
                              value="Maçã Vermelha" // Valor do sabor
                            />
                            <label htmlFor="red-apple">🍎 Maçã Vermelha</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="green-apple"
                              value="Maçã Verde" // Valor do sabor
                            />
                            <label htmlFor="green-apple">🍏 Maçã Verde</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="banana"
                              value="Banana" // Valor do sabor
                            />
                            <label htmlFor="banana">🍌 Banana</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="peach"
                              value="Pêssego" // Valor do sabor
                            />
                            <label htmlFor="peach">🍑 Pêssego</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="lemon"
                              value="Limão" // Valor do sabor
                            />
                            <label htmlFor="lemon">🍋 Limão</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="orange"
                              value="Laranja" // Valor do sabor
                            />
                            <label htmlFor="orange">🍊 Laranja</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="melon"
                              value="Melão" // Valor do sabor
                            />
                            <label htmlFor="melon">🍈 Melão</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="mango"
                              value="Manga" // Valor do sabor
                            />
                            <label htmlFor="mango">🥭 Manga</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="pear"
                              value="Pêra" // Valor do sabor
                            />
                            <label htmlFor="pear">🍐 Pêra</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="coconut"
                              value="Coco" // Valor do sabor
                            />
                            <label htmlFor="coconut">🥥 Coco</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="lemon-sicilian"
                              value="Limão Siciliano" // Valor do sabor
                            />
                            <label htmlFor="lemon-sicilian">
                              🍋 Limão Siciliano
                            </label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="tangerine"
                              value="Tangerina" // Valor do sabor
                            />
                            <label htmlFor="tangerine">🍊 Tangerina</label>
                          </li>
                          <li>
                            <input
                              onChange={handleFlavorChange}
                              type="radio"
                              name="fruit"
                              id="kiwi"
                              value="Kiwi" // Valor do sabor
                            />
                            <label htmlFor="kiwi">🥝 Kiwi</label>
                          </li>
                        </ul>
                      </form>
                    </div>

                    <span className="">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="w-56"
                      />
                      <div className="flex flex-col lg:flex-row w-32 lg:w-full justify-between mt-4">
                        <div className="text-base text-gray-500 flex-col flex">
                          <span className="text-black flex ">
                            Nome :{" "}
                            <p className="text-gray-500">{product.name}</p>{" "}
                          </span>
                          <span className="text-black flex ">
                            Puffs :{" "}
                            <p className="text-gray-500">{product.puffs}</p>{" "}
                          </span>
                        </div>
                        <span>
                          <span className="flex text-base">
                            Preço :
                            <p className="text-gray-500">{product.price}</p>
                          </span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleCheckAvailability}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                Disponibilidade
              </button>
              <button
                type="button"
                data-autofocus
                onClick={closeModal}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Fechar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default ModalToBuy;
