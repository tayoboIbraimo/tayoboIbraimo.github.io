import "flowbite";
import "./app.css";
import img from "./ibr.webp";

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#confirmPresence")) {
    console.log("confirmPresence");
    document
      .querySelector<HTMLButtonElement>("#confirmPresence")!
      .addEventListener("click", () => {
        document.dispatchEvent(new Event("confirmPresence"));
      });
  }
});
document.addEventListener("confirmPresence", () => {
  const name:Element|null = document.querySelector("#nome_do_cliente");
  // if name is empty alert por favor preecnha seu nome
  // else get value of this variable and send to this link: `https://api.whatsapp.com/send/?phone=258827378208&text=Ol%C3%A1%21+Eu%2C+${name}%2C+confirmo+minha+presen%C3%A7a+na+festa+de+anivers%C3%A1rio.&type=phone_number&app_absent=0`
  if (name?.value === "") {
      document.getElementById('nameModal')!.classList.remove('hidden')
  } else {
    window.open(
      `https://api.whatsapp.com/send/?phone=258827378208&text=Ol%C3%A1%21+Eu%2C+${name.value}%2C+confirmo+minha+presen%C3%A7a+na+festa+de+anivers%C3%A1rio.&type=phone_number&app_absent=0`,
    );
  }
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section>
  <div
    class="grid md:grid-cols-2 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-8 lg:pt-2 lg:px-16 bg-gradient-to-br from-red-500 via-orange-500 to-[#fd8a4c] shadow-2xl"
  >
    <div
      class="order-2 md:order-1 mr-auto place-self-center tracking-tight p-8"
    >
      <h2
        class="max-w-2xl font-['Playwrite_BE_VLG'] mb-4 text-6xl px-2 w-fit text-white font-extrabold tracking-tight leading-none first-letter:uppercase text-center"
        data-aos="fade-down"
      >
        Convite
      </h2>
      <div
        class="group flex flex-row justify-start rounded-t w-full aos-init aos-animate"
        data-aos="fade-up"
      >
        <div
          class="w-fit p-4 px-6 text-rose-800 flex flex-col bg-white justify-center items-center"
        >
          <span class="text-sm font-bold capitalize"> Agosto </span>
          <span class="text-xl font-extrabold"> 20 </span>
          <span class="text-xl font-extrabold"> 18:00 </span>
        </div>
        <div class="grid content-center mx-3 w-full space-y-1">
          <div class="inline-flex flex-col align-middle space-y-2">
            <span class="inline-flex flex-row align-middle">
              <span class="inline-block align-middle mr-2">
                <svg
                  class="w-4 h-4 fill-rose-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </span>
              <span
                class="inline-flex flex-row align-middle text-sm text-white font-extrabold"
                >Rua das Flores, 123</span
              >
            </span>
          </div>
          <div class="flex justify-between w-full">
            <h2
              class="text-base font-bold font-['Playwrite_BE_VLG'] capitalize tracking-wide"
            >
              Venha comemorar meu aniversário com muita alegria e diversão!
            </h2>
          </div>
          <div
            class="flex justify-between w-fit text-rose-600 bg-white p-1 px-2 capitalize text-xs font-semibold"
          >
            <span>Minha casa</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-start my-4 gap-2">
        <input
          type="text"
          name="nome_do_cliente"
          id="nome_do_cliente"
          class="h-10 border focus:ring-2 focus:!ring-orange-600 border-orange-400 focus:border-orange-400 rounded-sm p-6 px-4 w-full bg-orange-50"
          value=""
          placeholder="Teu nome"
        />
        <button
          data-aos="fade-up"
          id="confirmPresence"
          class="inline-flex place-self-center items-center justify-center w-full h-10 text-sm font-medium text-center text-rose-50 px-5 bg-rose-950  hover:bg-rose-900 p-6"
        >
          Confirmar presença
          <svg
            class="w-3 h-3 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="order-1 md:order-2 lg:mt-0 px-2">
      <div
        class="grid gap-2 items-center justify-items-center bg-transparent"
        data-aos="fade-left"
      >
        <img
          class="h-80 md:h-fit object-cover object-top rounded hover:scale-105 transition-transform duration-500 ease-in-out"
          src="${img}"
          alt="mockup"
          data-aos="fade-left"
        />
      </div>
    </div>
  </div>
</section>
<div class="z-30 ">

<!-- Modal -->
<div id="nameModal" class="hidden fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black/50 backdrop-blur transition-opacity duration-300 ease-in-out transform scale-105">
  <!-- Modal content -->
  <div class="bg-white rounded-sm shadow-lg m-4 sm:m-20 md:max-w-xl md:mx-auto p-6">
    <div class="flex justify-between items-center border-b border-red-900 pb-3">
      <p class="text-lg font-semibold text-red-950">Informação importante!!</p>
      <button class="text-black" onclick="document.getElementById('nameModal').classList.add('hidden');">&times;</button>
    </div>
    <p class="py-4 text-red-950">Por favor preencha seu nome.</p>
    <div class="flex justify-end pt-2">
      <button class="px-4 bg-red-800 p-3 rounded text-white hover:bg-red-700" onclick="document.getElementById('nameModal').classList.add('hidden');">Fechar</button>
    </div>
  </div>
</div>
`;
