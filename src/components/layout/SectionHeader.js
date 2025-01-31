export default function SectionHeader({ subheader, submenu }) {
    return (
        <>
            <div className="text-center mt-5">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">{subheader}</h3>
                <h2 className="text-primary font-bold text-4xl italic mb-5">{submenu}</h2>
            </div>
        </>
    )
} 