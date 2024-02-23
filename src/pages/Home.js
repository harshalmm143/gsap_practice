// import React, { useEffect } from 'react';
// import { gsap, ScrollTrigger } from 'gsap/all'; // Import ScrollTrigger along with gsap

// import '../styles/Home.css';

// const Home = () => {
//     useEffect(() => {
//         gsap.to('.h1', {
//             x: 180,

//         });
//     }, []);



//     return (
//         <>
//             <div className='page1'>
//                 <h1 className='h1'>VERY HARSHAL MOTIRAM MAHAJAN KHADKE BHUSAWAL DIST JALGOAN.</h1>
//             </div>
//             {/* <div className='page2'>
//                 <h1>SIMPLE</h1>
//             </div>
//             <div className='page3'>
//                 <h1>SCROLL</h1>
//             </div>
//             <div className='page4'>
//                 <h1>SNAP</h1>
//             </div> */}
//         </>
//     );
// }

// export default Home;

import React, { useEffect } from 'react';
import { gsap } from 'gsap/all';
import '../styles/Home.css';

const Home = () => {
    useEffect(() => {


        gsap.to('.h1', {
            x: -1300,
            duration: 3,
            yoyo: true,
            color: "#030807",
            ease: 'power2.inOut'
        });
        gsap.to('.page1', {
            x: 1280,
            duration: 7,
            ease: "none",
            yoyo: true,
        });
    }, []);

    return (
        <>
            <div className='page1'>
                <h1 className='h1'>HARSHAL MOTIRAM MAHAJAN.</h1>
            </div>
        </>
    );
}

export default Home;
