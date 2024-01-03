"use client";

import { motion } from "framer-motion";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "iManage",
    // description: "This is Docs page for Solid Pro",
    // other metadata
};

const About = () => {
    return (
        <>
            {/* <!-- ===== About Start ===== --> */ }
            <section className="py-20 lg:pt-25 xl:pt-30">
                <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                    <div className="flex items-center gap-8 lg:gap-32.5">
                        <motion.div
                            variants={ {
                                hidden: {
                                    opacity: 0,
                                    x: -20,
                                },

                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            } }
                            initial="hidden"
                            whileInView="visible"
                            transition={ { duration: 0.5, delay: 0.1 } }
                            viewport={ { once: true } }
                            className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 rounded-md"
                        >
                            <Image
                                src="/images/about/d-about-v.png"
                                alt="About"
                                className="dark:hidden"
                                fill
                            />
                            <Image
                                src="/images/about/l-about-v.png"
                                alt="About"
                                className="hidden dark:block"
                                fill
                            />
                        </motion.div>
                        <motion.div
                            variants={ {
                                hidden: {
                                    opacity: 0,
                                    x: 20,
                                },

                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            } }
                            initial="hidden"
                            whileInView="visible"
                            transition={ { duration: 0.5, delay: 0.1 } }
                            viewport={ { once: true } }
                            className="animate_right md:w-1/2"
                        >
                            <span className="font-medium uppercase text-black dark:text-white">
                                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                                    About us
                                </span>{ " " }
                                Our Vision
                            </span>
                            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                                Redefining Cleaning
                                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                                    Excellence
                                </span>
                            </h2>
                            <p>
                                Redefine the cleaning industry by pioneering innovation, transparency, and efficiency, setting new standards for excellence and shaping a future of streamlined cleaning management.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== About End ===== --> */ }

            {/* <!-- ===== About Two Start ===== --> */ }
            <section>
                <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
                    <div className="flex items-center gap-8 lg:gap-32.5">
                        <motion.div
                            variants={ {
                                hidden: {
                                    opacity: 0,
                                    x: -20,
                                },

                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            } }
                            initial="hidden"
                            whileInView="visible"
                            transition={ { duration: 1, delay: 0.1 } }
                            viewport={ { once: true } }
                            className="animate_left md:w-1/2"
                        >
                            <h4 className="font-medium uppercase text-black dark:text-white">
                                Our mission
                            </h4>
                            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                                Simplify, Streamline,   { "   " }
                                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                                    Elevate
                                </span>
                            </h2>
                            <p>
                                Our mission is to simplify and elevate cleaning management, fostering collaboration through effective communication. We prioritize transparency, efficiency, and community service, unlocking the true potential of cleaning businesses. Join us on this transformative journey.
                            </p>
                            {/* <div>
                                <a
                                    href="#"
                                    className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                                >
                                    <span className="duration-300 group-hover:pr-2">
                                        Know More
                                    </span>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="currentColor"
                                    >
                                        <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                                    </svg>
                                </a>
                            </div> */}
                        </motion.div>
                        <motion.div
                            variants={ {
                                hidden: {
                                    opacity: 0,
                                    x: 20,
                                },

                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            } }
                            initial="hidden"
                            whileInView="visible"
                            transition={ { duration: 1, delay: 0.1 } }
                            viewport={ { once: true } }
                            className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2 "
                        >
                            <Image
                                src="/images/about/d-about-m.png"
                                alt="About"
                                className="dark:hidden rounded-lg"
                                fill
                            />
                            <Image
                                src="/images/about/l-about-m.png"
                                alt="About"
                                className="hidden dark:block rounded-lg dark:bg-blacksection dark:bg-gradient-to-t dark:from-black dark:to-[#23273c]"
                                fill
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== About Two End ===== --> */ }
        </>
    );
};

export default About;
