export default function Card({ title, description, url }: { title: string; description: string; url: string }) {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#161616] hover:shadow-xl transition-shadow duration-300">
            <div className="p-7">
                <div className="text-wrap overflow-hidden">
                    <h2 className="text-xl font-semibold text-[#AB568F] mb-2">{title}</h2>
                </div>
                <div className="min-h-[40px] max-h-[40px] text-wrap overflow-hidden">
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <div className="p-7 pt-0">
                <img className="w-full h-48 object-cover rounded-2xl" src={url} alt="Imagen de ejemplo"/>
            </div>
        </div>
    );
}