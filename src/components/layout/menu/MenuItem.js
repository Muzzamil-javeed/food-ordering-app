import Image from "next/image";
export default function MenuItems() {
    return (
        <>
            <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl">
                <div className="text-center flex justify-center">
                    <Image src={'/pizza.png'} alt="image" width={160} height={160} className="flex justify-center" />
                </div>
                <h4 className="font-semibold my-3 mt-3">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer
                </p>
                <button className="mt-4 bg-primary text-white rounded-full py-2 px-6">
                    Add To Cart $12
                </button>
            </div>
        </>
    )
}