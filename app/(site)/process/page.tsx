"use client";
import { motion } from "framer-motion";

const Process = () => {
    return (
        <>
            {/* <!-- ===== About Start ===== --> */ }
            <section className="py-20 lg:pt-25 xl:pt-30 xl:w-full bg-">
                <div className="mx-auto max-w-c-1235 px-2 md:px-8 xl:px-0 ">
                    {/* <!-- Section Title Start --> */ }
                    <motion.div
                        variants={ {
                            hidden: {
                                opacity: 0,
                                y: -20,
                            },

                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        } }
                        initial="hidden"
                        whileInView="visible"
                        transition={ { duration: 1, delay: 0.1 } }
                        viewport={ { once: true } }
                        className="animate_top mx-auto text-center w-full"
                    >
                        <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
                            <span className="text-sectiontitle font-medium text-black dark:text-white">
                                HOW WE WORK
                            </span>
                        </div>
                        <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                            Tailored App and Portal Solution
                        </h2>
                        <p className="mx-auto md:w-4/5 lg:w-4/5 xl:w-[76%]">At iManage, we're committed to providing a customised app and portal solution that meets your unique needs. Our meticulous process ensures you receive a solution perfectly aligned with your business requirements. Here's a glimpse of our step-by-step approach
                        </p>
                    </motion.div>
                </div>
                <div className="mx-auto w-3/5 px-2 md:px-8 xl:px-0 mt-14">
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <motion.div
                            variants={ {
                                hidden: {
                                    opacity: 0,
                                    x: '100%', // Start from the right for the first card
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                            } }
                            initial="hidden"
                            animate="visible"
                        >
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            </li>
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                            </li>
                        </motion.div>
                    </ol>


                </div>
            </section>
        </>
    );
};

export default Process;
