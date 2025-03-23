import { FcGoogle } from "react-icons/fc";
import slacks from '../assets/slack3.png'
export default function HeroSection() {

    return (
        <>
            <section className="container mt-4 d-flex flex-sm-wrap  flex-lg-nowrap ">
                <div className="d-flex flex-column w-100 justify-content-between ">

                    <div className="d-flex flex-column fw-semibolder fs-3">
                        <h1 className="">Slack is where the</h1>
                        <h1>future works</h1>
                        <div className="fs-5">
                        <p className="m-0">Transform the way you work one place for</p>
                        <p className="m-0">everyone and everthing you nedd to get stuff done.</p>
                    </div>
                    </div>
                   

                    <div className="d-flex gap-3">
                        <p className="btn btn-lg btn-outline-dark">TRY FOR FREE</p>
                        <p className="d-flex btn btn-primary btn-lg boder align-items-center gap-2">
                            <p className="m-0 border px-2 bg-light rounded ">
                                <FcGoogle />
                            </p>
                            SIGN UP WITH GOOGLE
                        </p>
                    </div>
                </div>

                <div className="w-100 ">
                    <img src={slacks} alt="slack-image" className="w-100 img-fluid" />
                </div>

            </section>
        </>
    )
}