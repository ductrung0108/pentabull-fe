"use client"
import Typical from 'react-typical'

export default function App() {
    return (

        <body className="bg-[#080023]">
            <nav className="w-full py-1  ">
                <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                    <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">

                    </label>

                    <div className="md:flex items-center md:w-auto w-full " id="menu">
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
                        <div className=" flex ">
                            <button className="mr-4 rounded-lg bg-[#1E1561] px-6 py-2 text-sm font-bold text-white shadow-md  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><a href="/login">Log in</a></button>

                            <button className="rounded-lg bg-[#7931FF] px-6 py-2 text-sm font-bold text-white shadow-md  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><a href="/register">Sign Up</a></button>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="middle-container">
                <svg className="mx-auto mt-4" width="400" height="200" viewBox="0 0 439 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M300.364 0L279.746 65.9492H267.633C260.123 65.9827 260.567 69.7639 257.476 80.1636L256.094 84.9017L250.569 103.778L239.513 135.544C239.513 135.544 232.776 135.993 221.908 135.544H199.988L195.032 119.867L183.622 79.4287C180.747 65.9549 177.435 65.9533 169.039 65.9492H158.237L139.287 0L162.19 40.1165L162.371 40.4331C164.717 44.4848 166.785 45.7438 170.874 45.8474H172.081H179.003C184.426 45.8483 187.409 47.185 189.772 52.751L192.252 59.6763L196.952 75.4254L209.446 114.312C210.244 116.648 212.603 119.813 215.917 119.867H225.29H225.649C229.032 119.756 230.902 116.503 231.555 114.312L236.29 97.6464L242.537 75.4254L246.706 59.6763L248.688 52.6492C250.746 47.4209 253.571 45.8767 259.148 45.8474H266.014H266.705C271.844 45.8064 274.356 44.8008 276.721 40.9086L277.179 40.1165L300.364 0Z" fill="url(#paint0_linear_62_169)" />
                    <path d="M0 181.272H23.0229C26.3758 181.272 29.2816 181.639 31.7403 182.374C34.1991 183.109 36.2387 184.173 37.8593 185.567C39.4798 186.942 40.6813 188.628 41.4636 190.624C42.2646 192.621 42.665 194.872 42.665 197.377C42.665 199.732 42.2739 201.908 41.4915 203.904C40.7092 205.901 39.5078 207.634 37.8872 209.103C36.2853 210.554 34.255 211.693 31.7962 212.522C29.3375 213.332 26.4316 213.737 23.0788 213.737L8.85712 213.709V225.435H0V181.272ZM23.2464 205.967C24.9229 205.967 26.3851 205.769 27.6331 205.374C28.8997 204.959 29.9521 204.385 30.7904 203.65C31.6472 202.897 32.2805 201.992 32.6903 200.938C33.1187 199.864 33.3329 198.677 33.3329 197.377C33.3329 194.759 32.4854 192.725 30.7904 191.274C29.1139 189.805 26.5993 189.07 23.2464 189.07H8.85712V205.967H23.2464Z" fill="url(#paint1_linear_62_169)" />
                    <path d="M52.3604 181.272H89.5491V189.127H61.2175V197.943H86.308V205.317H61.2175V217.608H90.1358V225.435H52.3604V181.272Z" fill="url(#paint2_linear_62_169)" />
                    <path d="M99.915 181.272H108.772L135.986 195.682V181.272H144.843V225.435H135.986V205.176L108.772 190.851V225.435H99.915V181.272Z" fill="url(#paint3_linear_62_169)" />
                    <path d="M170.353 189.127H154.231V181.272H195.332V189.127H179.21V225.435H170.353V189.127Z" fill="url(#paint4_linear_62_169)" />
                    <path d="M219.696 181.272H229.084L250.207 225.435H240.902L237.41 218.004H211.9L208.519 225.435H199.187L219.696 181.272ZM233.917 210.629L224.473 190.568L215.281 210.629H233.917Z" fill="url(#paint5_linear_62_169)" />
                    <path d="M256.996 181.272H280.326C283.176 181.272 285.654 181.583 287.758 182.204C289.882 182.807 291.642 183.645 293.039 184.719C294.436 185.793 295.47 187.074 296.141 188.562C296.83 190.031 297.174 191.623 297.174 193.337C297.174 196.144 296.299 198.602 294.548 200.712C296.56 201.917 298.059 203.481 299.046 205.402C300.034 207.323 300.527 209.508 300.527 211.957C300.527 214.01 300.183 215.866 299.493 217.523C298.823 219.181 297.789 220.603 296.392 221.79C295.014 222.958 293.263 223.862 291.139 224.502C289.034 225.124 286.548 225.435 283.679 225.435H256.996V181.272ZM283.735 198.225C284.499 198.225 285.244 198.253 285.97 198.31C287.218 197.104 287.842 195.729 287.842 194.185C287.842 192.584 287.218 191.35 285.97 190.483C284.741 189.598 282.934 189.155 280.55 189.155H265.853V198.225H283.735ZM283.903 217.636C286.287 217.636 288.094 217.118 289.323 216.082C290.571 215.046 291.195 213.587 291.195 211.703C291.195 209.819 290.571 208.35 289.323 207.295C288.094 206.24 286.287 205.713 283.903 205.713H265.853V217.636H283.903Z" fill="url(#paint6_linear_62_169)" />
                    <path d="M307.876 181.272H316.733V205.6C316.733 207.596 317.003 209.377 317.543 210.94C318.083 212.485 318.884 213.794 319.946 214.867C321.026 215.941 322.358 216.761 323.941 217.326C325.525 217.872 327.369 218.145 329.474 218.145C331.56 218.145 333.395 217.872 334.978 217.326C336.58 216.761 337.912 215.941 338.973 214.867C340.054 213.794 340.864 212.485 341.404 210.94C341.944 209.377 342.214 207.596 342.214 205.6V181.272H351.071V206.673C351.071 209.574 350.587 212.211 349.619 214.585C348.65 216.958 347.244 218.993 345.4 220.688C343.556 222.383 341.292 223.693 338.61 224.616C335.946 225.539 332.901 226 329.474 226C326.046 226 322.991 225.539 320.309 224.616C317.645 223.693 315.392 222.383 313.547 220.688C311.703 218.993 310.297 216.958 309.328 214.585C308.36 212.211 307.876 209.574 307.876 206.673V181.272Z" fill="url(#paint7_linear_62_169)" />
                    <path d="M361.884 181.272H370.742V217.58H396.139V225.435H361.884V181.272Z" fill="url(#paint8_linear_62_169)" />
                    <path d="M404.745 181.272H413.602V217.58H439V225.435H404.745V181.272Z" fill="url(#paint9_linear_62_169)" />
                    <defs>
                        <linearGradient id="paint0_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_62_169" x1="219.681" y1="168.147" x2="219.681" y2="256.143" gradientUnits="userSpaceOnUse">
                            <stop offset="0.5" stopColor="white" />
                            <stop offset="0.95" stopColor="#737373" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className=" mt-10 text-xl text-center">SIMULATED TRADING. LEVERAGING REAL SKILLS</div>
            </div>

            <div className="slider-container w-full mx-auto my-24">

                <div className="flex text-xl text-bold space-x-1 justify-center"> <h1> Play around with </h1>
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




            <div className="bottom-container mx-auto " >
                <div className='text-xl font-bold text-center mt-24'>START TODAY!</div>
                <div className='mx-auto text-center mt-3'>
                    <button className="text-center rounded-lg bg-[#7931FF] px-24 py-2 text-sm font-bold text-white shadow-md  transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><a href="/register">Sign Up Now</a></button>

                </div>
            </div>









        </body >
    );

}