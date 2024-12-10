"use client"
import Typical from 'react-typical'

export default function App() {
    return (
        <div className="bg-[#080023]">
            <nav className="w-full py-1">
                <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                    <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block"></label>
                    <div className="md:flex items-center md:w-auto w-full" id="menu">
                        <nav className="ml-6 mt-1">
                            <svg width="70" height="58" viewBox="0 0 75 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75 0L65.4 30.6077H59.7599C56.263 30.6232 56.4698 32.3781 55.0306 37.2047L54.3873 39.4038L51.8145 48.1645L46.6667 62.9072C46.6667 62.9072 43.5298 63.116 38.4698 62.9072H29.6028H28.2635L25.9559 55.6316L22.4142 43.1197L20.6434 36.8637C19.3048 30.6103 17.7623 30.6096 13.853 30.6077H13.848H8.82353L0 0L6.09375 10.6391L9.14062 15.9587L10.6641 18.6185L10.7482 18.7654C11.8408 20.6458 12.8035 21.2302 14.7076 21.2783H15.2696H18.4926C21.0175 21.2787 22.4063 21.899 23.5068 24.4823L24.6613 27.6964L26.85 35.0057L30.1741 45.3187L31.8361 50.4752L32.6671 53.0534C33.0387 54.1374 34.137 55.6063 35.6802 55.6316H37.8623H40.0444H40.2117C41.7865 55.58 42.6575 54.0703 42.9615 53.0534L43.6964 50.4752L45.1663 45.3187L48.075 35.0057L50.016 27.6964L50.939 24.435C51.8972 22.0085 53.2125 21.2919 55.8094 21.2783H59.0063H59.328C61.7206 21.2592 62.8904 20.7925 63.9915 18.9861L64.2047 18.6185L65.7469 15.9587L68.8313 10.6391L75 0Z" fill="url(#paint0_linear_62_166)" />
                                <defs>
                                    <linearGradient id="paint0_linear_62_166" x1="37.5" y1="0" x2="37.5" y2="75.9623" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.5" stopColor="white" />
                                        <stop offset="0.95" stopColor="#737373" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </nav>
                    </div>
                    <div className="order-2 md:order-3 md:mr-4">
                        <div className="flex">
                            <button className="mr-4 rounded-lg bg-[#1E1561] px-6 py-2 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <a href="/login">Log in</a>
                            </button>
                            <button className="rounded-lg bg-[#7931FF] px-6 py-2 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <a href="/register">Sign Up</a>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="middle-container">
                <svg className="mx-auto mt-4" width="400" height="200" viewBox="0 0 439 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M300.364 0L279.746 65.9492H267.633C260.123 65.9827 260.567 69.7639 257.476 80.1636L256.094 84.9017L250.569 103.778L239.513 135.544C239.513 135.544 232.776 135.993 221.908 135.544H199.988L195.032 119.867L183.622 79.4287C180.747 65.9549 177.435 65.9533 169.039 65.9492H158.237L139.287 0L162.19 40.1165L162.371 40.4331C164.717 44.4848 166.785 45.7438 170.874 45.8474H172.081H179.003C184.426 45.8483 187.409 47.185 189.772 52.751L192.252 59.6763L196.952 75.4254L209.446 114.312C210.244 116.648 212.603 119.813 215.917 119.867H225.29H225.649C229.032 119.756 230.902 116.503 231.555 114.312L236.29 97.6464L242.537 75.4254L246.706 59.6763L248.688 52.6492C250.746 47.4209 253.571 45.8767 259.148 45.8474H266.014H266.705C271.844 45.8064 274.356 44.8008 276.721 40.9086L277.179 40.1165L300.364 0Z" fill="url(#paint0_linear_62_169)" />
                    <defs>
                        <linearGradient id="paint0_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="mt-10 text-xl text-center">SIMULATED TRADING. LEVERAGING REAL SKILLS</div>
            </div>
            <div className="slider-container w-full mx-auto my-24 ">
                <div className="flex text-xl text-bold space-x-1 justify-center">
                    <h1> Play around with </h1>
                    <Typical className="text-[#D454FF] text-bold"
                        steps={[
                            'real-time market data',
                            1500,
                            'limit and market orders',
                            1500,
                            'the help of others',
                            1500,
                        ]}
                        wrapper="p"
                        loop={Infinity}
                    />
                </div>
                <div className='mt-64'></div>
            </div>
            <div className="bottom-container mx-auto">
                <div className='text-xl font-bold text-center mt-24'>START TODAY!</div>
                <div className='mx-auto text-center mt-3'>
                    <button className="text-center rounded-lg bg-[#7931FF] px-24 py-2 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        <a href="/register">Sign Up Now</a>
                    </button>
                </div>
            </div>
        </div>
    );
}