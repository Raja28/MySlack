import slackLogo from '../assets/slack12.png'

export default function HeroSection2() {
    return (
        <>
            <section className='container my-4'>
                <div className="d-flex gap-3 flex-lg-nowarap">
                    <div className='w-100' style={{maxHeight: "15rem"}}>
                        <img src={slackLogo} alt="img"
                            className='img-fuild w-100 h-100 rounded object-fit-cover'
                        />
                    </div>

                    <div className='d-flex flex-column justify-content-between w-100'>
                        <div>


                            <div >
                                <h2>Now is your moment to build a</h2>
                                <h2>better tomorrow</h2>
                            </div>

                            <div className='fs-5'>
                                <p className='m-0'>We've seen what the future can be. Now it's time to decide</p>
                                <p>what it will be.</p>
                            </div>
                        </div>
                        <div>
                            <p className='btn btn-outline-dark m-0'>WATCH VIDEO</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}