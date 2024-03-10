import Image from 'next/image';
import dance from '../../../public/dance.svg'

function Dance() {
    return ( 
        <div className='p-5'>
            <h1 className="text-start mb-4 fw-bold fst-italic " >Explore your <span className="text-primary">hobby </span>or<span className="text-primary"> passion </span></h1>
            <div>
            <Image src={dance} alt="Dance" width={300} height={216}  />
            </div>
        </div>
     );
}

export default Dance;