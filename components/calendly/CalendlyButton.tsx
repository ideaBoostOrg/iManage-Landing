'use client'
import { useEffect } from "react";

const CalendlyButton = ({ headerBtn = true }) => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        const link = document.createElement("link");
        link.setAttribute(
            "href",
            "https://assets.calendly.com/assets/external/widget.css"
        );
        link.setAttribute("rel", "stylesheet");
        if (!head) return;
        head.appendChild(link);
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);

        return () => {
            head.removeChild(link);
            head.removeChild(script);
        };
    }, []);

    const openPopupWidget = () => {
        console.log("Clicked")
        // window.calendly.showPopupWidget(
        //     "https://calendly.com/ideaboostpvtltd/demo"
        // );
    };

    return (
        <button
            onClick={ openPopupWidget }
            className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
        >
            Schedule a Demo
        </button>
    );
};

export default CalendlyButton;