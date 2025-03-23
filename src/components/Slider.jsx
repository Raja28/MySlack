import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'
import slider4 from '../assets/slider4.jpeg'
import slider5 from '../assets/slider5.png'

const images = [slider1, slider2, slider3, slider4, slider5]

export default function Slider() {
    return (
        <>
            <section className='container'>
                <div className='d-flex justify-content-between mt-4'>
                    {
                        images.map(slider => (
                            <div key={slider} className='' style={{maxWidth: '12rem'}}>
                                {
                                    <img src={slider} alt={"image"} 
                                    className='img-fluid h-100 object-fit-contain' 
                                    />
                                }
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}