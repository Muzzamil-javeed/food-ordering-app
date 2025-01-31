import Image from "next/image";
import MenuItems from "./menu/MenuItem";
import SectionHeader from "./SectionHeader";

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

                    <SectionHeader subheader={'Check Out'} submenu={'Our Menu'} />
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