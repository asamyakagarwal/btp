import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav'

const Safety = () => {
    return (
        <div>
            <LatheNav />

            <div className="safety">
                <h1>Precation and Safety</h1>

                <p>
                    Emery cloth should NEVER be used at NC lathes. Employers should assess the need to use emery cloth on components rotating in a lathe. Such operations may not be necessary if:
                    The finish being sought is only cosmetic. For such finishes, the component may be held in one hand and polished by emery cloth held in the other. Alternatively, a finishing belt or machine may be used.
                    A sizing operation can be successfully performed either by turning or by further operations in a dedicated polishing, finishing, or grinding machine.
                </p>

                    <p>
                        For polishing the ends of components, only very short lengths or pads of cloth, which are incapable of causing entanglements, should be used. Overall sleeves should be tight-fitting and gloves should never be worn.
                        Most accidents happen when each end of a strip of emery cloth is held in separate hands and passed around the back of the component being finished. If the cloth is wrapped around the fingers and/or becomes snagged on the component while it is tightly gripped, then a serious injury is the likely result.
                    </p>

                    <p>
                        <h2>Some important safety precautions to follow when using lathes are:</h2>
                        Correct dress is important, remove rings and watches, roll sleeves above elbows.
                        Always stop the lathe before making adjustments.
                        Do not change spindle speeds until the lathe comes to a complete stop.
                        Always wear protective eye protection.
                        Never lay tools directly on the lathe ways. If a separate table is not available, use a wide board with a cleat on each side to lay on the ways.
                        Use two hands when sanding the workpiece. Do not wrap sandpaper or emery cloth around the workpiece.

                    </p>
            </div>
        </div>
    )
}

export default Safety ;