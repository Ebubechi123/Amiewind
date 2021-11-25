import Image from 'next/image'

const Card = ({image,className,text}) => {
    return ( 
        <>
        <div className={className}>
            <div>
           <Image src={image}/>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
        </>
     );
}
 
export default Card;