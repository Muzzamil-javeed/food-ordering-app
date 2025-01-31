import Image from "next/image";
import MenuItems from "./menu/MenuItem";

export default function HomeMenu() {
    return (
        <>
            <section>

                <div>
                    <div className="absolute justify-start  left-0 right-0 w-full">
                        <div className="absolute left-0 -top-[70px] text-left -z-10">
                            <Image src={'/sallad1.png'} width={109} height={189} alt="img" />
                        </div>
                        <div className="absolute -top-[100px] right-0 -z-10">
                            <Image src={'/sallad2.png'} width={107} height={195} alt="img" />
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <h3 className="uppercase text-gray-500 font-semibold leading-4">Check Out</h3>
                        <h2 className="text-primary font-bold text-4xl italic mb-5">Our Menu</h2>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                    <MenuItems />
                </div>
            </section>
        </>
    )
}