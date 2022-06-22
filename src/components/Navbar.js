import profile_pic from "../assets/images/Me.jpg";

const Navbar = () => {
    return (
        <div className="bg-gray-50 sticky top-0 z-10">
            <header>
                <div className="relative z-20 border-b bg-white">
                    <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
                        <div className="flex items-center justify-between">
                            <div className="relative z-20">
                                <a href="www.google.com" className="flex items-center">
                                    <img src={profile_pic} alt="Logo" className="w-10 h-10 rounded-full" />
                                    <span className="ml-5 font-bold text-blue-800 text-xl">
                                        PYAE SONE
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center justify-end border-l lg:border-l-0">
                                <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />
                                <label for="hamburger" className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                    <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                </label>

                                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                        <ul className="px-6 pt-32 text-gray-700 font-bold space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                            <li>
                                                <a href="www.google.com" className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100" >
                                                    <span className="relative group-hover:text-cyan-800"> Home </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="www.google.com" className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100" >
                                                    <span className="relative group-hover:text-cyan-800"> About </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="www.google.com" className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100" >
                                                    <span className="relative group-hover:text-cyan-800"> Skills </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="www.google.com" className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100" >
                                                    <span className="relative group-hover:text-cyan-800"> Projects </span>
                                                </a>
                                            </li>
                                        </ul>

                                        {/* <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                                            <a href="www.google.com" className='block px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-cyan-400 text-center text-white'>
                                               Contact Me
                                            </a>
                                        </div> */}

                                        <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                                            <a href="www.google.com" className="contact text-white text-xl px-20 font-bold py-2 rounded-lg lg:px-5 lg:text-base" > Contact Me </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
