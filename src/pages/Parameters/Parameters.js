import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav'
import cs from '../../assets/cs_formula.png'
import cs2 from '../../assets/cs_formula2.png'
import doc from '../../assets/doc_formula.png'
import mt from '../../assets/mt_formula.png'
import ss from '../../assets/ss_formula.png'
import mrr from '../../assets/mrr_formula.png'
import power from '../../assets/power.png'

const Parameters = () => {
  return (
    <div>
        <LatheNav/>
        <h1>Parameters requirements for Lathe</h1>
        <p>The lathe is a fundamental machine tool used for shaping metal workpieces through a rotating cutting tool.Understanding key parameters, calculations, and formulas is essential for operating a lathe effectively and achieving desired results.</p>

        <div id='cs' className='parameters'>
            <div className='description'>
                <h1>Cutting Speed</h1>
                <img src={cs} alt='cutting_speed'/>
                <p>The cutting speed (v) of a tool is the speed at which the metal is removed by the tool from the workpiece. In a lathe, it is the peripherical speed of the work past the cutting tool expressed in meters per minute.Where,
                    <ul>
                        <li>d – is the diameter of the work in mm.</li>
                        <li>n – is the r.p.m of the work.</li>
                    </ul>
                </p>
                <img src={cs2} alt='cutting_speed'/>
                <p>In the British system, cutting speed is expressed in feet per minute and diameter of the work in inches. Where,
                    <ul>
                        <li>d – is the diameter of the work in mm.</li>
                        <li>n – is the r.p.m of the work.</li>
                    </ul>
                </p>
            </div>
        </div>
        <div id='doc' className='parameters'>
            <div className='description'>
                <h1>Depth of Cut</h1>
                <img src={doc} alt='depth of cut'/>
                <p>The depth of cut (t) is the perpendicular distance measured from the machined surface to the uncut surface of the workpiece. In a lathe machine, the depth of cut is shown as follows:Where,
                    <ul>
                        <li>d1 – diameter of the workpiece surface before machining.</li>
                        <li>d2 – diameter of the machined surface.</li>
                    </ul>
                </p>
                <p>Another factor remaining fixed, the depth of cut changes inversely as the cutting speed. For general purpose, the ratio of the depth of cut to the feed varies from 10:1</p>
            </div>
        </div>
        <div id='mt' className='parameters'>
            <div className='description'>
                <h1>Machine Time</h1>
                <p>The machining time in the lathe work can be calculated for a particular operation if the speed of the job, feed and length of the job is known.If “s” is the feed of the job per revolution expressed in mm per revolution and “l” the length of the job in mm, then a number of revolutions of the job required for a complete cut will be: l/s </p>
                <img src={mt} alt='machine time'/>
                <p>Therefore, the time is taken for a complete cut = l / s X n min.</p>
            </div>
        </div>
        <div id='ss' className='parameters'>
            <div className='description'>
                <h1>Spindle speed n (rpm)</h1>
                <img src={ss} alt='spindle speed'/>
            </div>
        </div>
        <div id='mrr' className='parameters'>
            <div className='description'>
                <h1>Metal removal rate Q (cm3/min)</h1>
                <img src={mrr} alt='metal removal'/>
            </div>
        </div>
        <div id='np' className='parameters'>
            <div className='description'>
                <h1>Net power Pc (kW)</h1>
                <img src={power} alt='power'/>
            </div>
        </div>
    </div>

  )
}

export default Parameters