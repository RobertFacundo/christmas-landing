
import divider4 from '@/app/torndivider4.png'
import divider5 from '@/app/torndivider5.png'
import Image from 'next/image'

const TornDivider = () => {
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
        bottom-[-44px]
    "
        >
            <Image
                src={divider4}
                alt="Torn divider"
                className="
                z-30
            w-full
            h-[95px]
            object-fill
        "
            />
        </div>
    )
}

export default TornDivider;