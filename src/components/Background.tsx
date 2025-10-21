import React from 'react'

function Background({ isHome }: { isHome: boolean }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover">
                <source src="/backgif.mp4" type="video/mp4" />
            </video>
            {/* Overlay oscuro sobre el video */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black/50 ${isHome && 'backdrop-blur-xl'}`}></div>
        </div>
    )
}

export default Background;