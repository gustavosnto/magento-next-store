export default function Header() {
    return (
        <header className="py-4 bg-slate-100 sticky top-0 left-0">
            <div className="container flex justify-between items-center">
                <div className="w-full lg:w-[300px]">
                    <h1 className="text-2xl font-bold">{process.env.STORE_NAME}</h1>
                </div>

                <div>
                    <form action="" className="w-[500px] relative">
                        <span>
                            <input
                                type="text"
                                className="w-full h-12 px-4 rounded border"
                                placeholder="Buscar produtos..."
                            />
                        </span>
                        <button type="submit" className="absolute top-0 bottom-0 right-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m1.4-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </form>
                </div>

                <div className="w-full lg:w-[300px] flex gap-5 justify-end items-center">
                    <div className="flex flex-col-reverse text-center items-center gap-1">
                        <span className="text-sm">Minha Conta</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                    </div>
                    <div className="flex flex-col-reverse text-center items-center gap-1">
                        <span className="text-sm">Carrinho</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </div>
                </div>
            </div>
        </header>
    );
}