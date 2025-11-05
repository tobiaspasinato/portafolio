import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Slider from "./Slider";

export default function Card({ title, description, images, url }: { title: string; description: string; images: Array<string>; url: string }) {

    const [ flag, setFlag ] =  useState(false);

    const handleClick = () => {
        setFlag(!flag);
    }

    return (
        <>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#161616] hover:shadow-xl hover:transform hover:scale-[1.05] transition duration-700 ease-in-out" onClick={() => handleClick()}>
                <div className="p-7">
                    <div className="text-wrap overflow-hidden">
                        <h2 className="text-xl font-semibold text-[#AB568F] mb-2">{title}</h2>
                    </div>
                    <div className="min-h-[40px] max-h-[40px] text-wrap overflow-hidden">
                        <p className="text-sm">{description}</p>
                    </div>
                </div>
                <div className="p-7 pt-0">
                    <Image className="w-full h-48 object-cover rounded-2xl" src={images[0]} alt="Imagen de ejemplo" width={400} height={192} />
                </div>
            </div>
            <AnimatePresence>
                {flag && <MaxCard title={title} description={description} images={images} url={url} isShow={() => handleClick()} />}
            </AnimatePresence>
        </>
    );
}

function MaxCard({ title, description, images, url, isShow}: { title: string; description: string; images: Array<string>; url: string; isShow: () => void }) {
    
    const handleClick = () => {
        isShow();
    }

    return (
        <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="absolute inset-0 bg-black/70" 
                onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div 
                className="relative bg-[#161616] text-white p-10 rounded-2xl shadow-2xl overflow-y-auto w-[90vw] h-[90vh]"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ 
                    type: "spring", 
                    damping: 25, 
                    stiffness: 300,
                    duration: 0.4 
                }}
            >
                <button 
                    onClick={handleClick}
                    className="absolute top-4 right-4 text-white hover:text-[#AB568F] transition-colors text-xl font-bold"
                >
                    ✕
                </button>
                <Slider images={images} url={url} />
                <h2 className="text-2xl font-semibold text-[#AB568F] mb-4 pt-8">{title}</h2>
                <p className="mb-6 text-gray-300">{description}</p>
            </motion.div>
        </motion.div>
    );
}