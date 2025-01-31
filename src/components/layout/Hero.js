import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <>
            <section>
                <div className="hero">
                    <div className="py-8">
                        <h1 className="text-4xl font-semibold">Everything is better with a&nbsp;<span className="text-primary">Pizza</span></h1>
                        <p className="my-4 text-gray-500">Pizza is the missing piece that makes every day complete, a single yet delicious Joy in Life</p>
                        <div className="flex gap-4 items-center">
                            <button className="items-center bg-primary text-white px-8 py-2 rounded-full flex gap-2 uppercase text-sm">
                                Order Now
                                <Right />
                            </button>
                            <button className="flex gap-2 text-gray-500 font-semibold">
                                Learn More
                                <Right />
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} className="w-40" alt={'pizza'} />
                    </div>
                </div>
            </section>
        </>
    )
}