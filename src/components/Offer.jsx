

// import React from 'react'
// import gym1 from '../assets/gym1.jpeg'
// import gym2 from '../assets/gym2.jpeg'
// import gym3 from '../assets/gym3.jpeg'
// import gym4 from '../assets/gym4.jpg'

// const images = [gym1, gym2, gym3, gym4]

// const Offer = () => {
//   return (
//     <div className='min-h-screen flex flex-col bg-neutral-950 text-white font-extrabold text-center items-center'>
//       <h1 className='text-4xl m-20 sm:text-5xl md:m-30'>
//         We offer something for <br className='hidden md:block' /> everybody
//       </h1>
      
//       <div className="grid w-full justify-center gap-4 px-10 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className="w-full h-[300px] rounded-lg bg-blend-overlay bg-[#384638]/90 bg-cover bg-center"
//             style={{ backgroundImage: `url(${img})` }}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Offer



import React from 'react'
import gym1 from '../assets/gym1.jpeg'
import gym2 from '../assets/gym2.jpeg'
import gym3 from '../assets/gym3.jpeg'
import gym4 from '../assets/gym4.jpg'

const images = [gym1, gym2, gym3, gym4]
const captions = [
  "CrossFit Group Classes",
  "Strength Training",
  "Personal Training",
  "Member Only Events"
]

const Offer = () => {
  return (
    <div className='min-h-screen flex flex-col bg-neutral-950 text-white font-extrabold text-center items-center'>
      <h1 className='text-4xl m-20 sm:text-5xl md:m-30'>
        We offer something for <br className='hidden md:block' /> everybody
      </h1>

      <div className="grid w-full justify-center gap-4 px-10 grid-cols-[repeat(auto-fit,_minmax(200px,_2fr))]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full h-[250px] rounded-lg overflow-hidden bg-blend-overlay bg-[#384638]/80 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/40">
              <p className="text-white text-2xl md:text-3xl sm:text-3xl font-bold drop-shadow">
                {captions[idx]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offer
