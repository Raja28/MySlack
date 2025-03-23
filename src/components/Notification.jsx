import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineArrowRightAlt } from "react-icons/md";
export default function Notification() {
    const [showNotification, setNotification] = useState(true)

    return (
        <>
            {showNotification && <div className="bg-primary p-2 text-light container rounded rounded-pill d-flex justify-content-between px-4 align-items-center">
                <div className="d-flex gap-3">
                    Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.
                    <a className="m-0 link-underline-light text-light d-flex agp-1 align-items-center ">
                        <p className="m-0">Lets go</p>
                        <MdOutlineArrowRightAlt />
                    </a>
                </div>

                <div className="btn btn-sm text-light" onClick={()=> setNotification(prev => false)}>
                    <IoIosClose className="fs-4" />
                </div>
            </div>}
        </>
    )
}