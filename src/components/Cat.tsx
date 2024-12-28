import { useState } from 'react'
import './cat.css'

export const Cat = ()=> {
    const [modal,setModal] = useState(false)
    const [initialized,setInitialized] = useState(false)

    const Modal = ()=> {
        return (
            <div className={!initialized
                ? "abbaModalHidden"
                : modal
                ? "abbaModal"
                : "abbaModalOff"} onClick={()=>setModal(false)}>
                <h3>Abaddon the Despoiler</h3>
                ≽^•⩊•^≼
                <p>A stray cat that appeared in my house</p>
            </div>
        )
    }

    return (
        <div>
            <Modal/>
            <div className='catContainer'>
            <div className='catHead catColor' onClick={()=> {
                setModal(!modal)
                setInitialized(true)
            }}>
                <div className='catLeftEye catEye'>
                    <div className="leftEyelid eyelid catColor"></div>
                    <div className="pupil"></div>
                </div>
                <div className='catRightEye catEye'>
                    <div className="rightEyelid eyelid catColor"></div>
                    <div className="pupil"></div>
                </div>
            </div>
            <div className='catLeftEar catEar catColor'>
                <div className="catLeftInsideEar catInsideEar"></div>
            </div>
            <div className='catRightEar catEar catColor'>
                <div className="catRightInsideEar catInsideEar"></div>
            </div>
            <div className="catHair catColor"></div>
            <div className="catBody catColor">
                <div className="catFoot leftFoot catColor"></div>
                <div className="catFoot rightFoot catColor"></div>
            </div>
            <div className="catTail">
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
                <span className="catColor"></span>
            </div>
        </div>
        </div>
    
    )
}