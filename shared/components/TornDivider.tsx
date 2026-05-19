
import Image, {StaticImageData} from 'next/image'

interface Prop {
    dividerImage: StaticImageData
}

const TornDivider = ({dividerImage}: Prop) => {
    return (
        <div
            className="
        absolute
        left-0
        w-full
        z-30
        leading-none
        pointer-events-none
        h-[90px]
        bottom-[-40px]
    "
        >
            <Image
                src={dividerImage}
                alt="Torn divider"
                className="
                block
                z-30
            w-full
            h-[100px]
            object-fill
        "
            />
        </div>
    )
}

export default TornDivider;