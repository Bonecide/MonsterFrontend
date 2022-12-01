import Image from 'next/image'
export default function IMG({src,alt,className,...props}) {

    return(
        <Image {...props} className={className} src={src} alt={alt} width={0} height={0} layout='raw'/>
    )
}