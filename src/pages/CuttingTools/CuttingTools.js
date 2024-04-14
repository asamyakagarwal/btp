import React from 'react'
import hss from '../../assets/hss.jpg'
import carbide from '../../assets/carbide.jpg'
import diamond from '../../assets/diamond.jpg'
import cbn from '../../assets/cbn.jpg'
import turning from '../../assets/turning.jpg'
import chamfering from '../../assets/chamfering.jpg'
import tct from '../../assets/tct.jpg'
import facing from '../../assets/facing.jpg'
import forming from '../../assets/forming.jpg'
import grooving from '../../assets/grooving.jpg'
import boring from '../../assets/boring.jpg'
import knurling from '../../assets/knurling.jpg'
import LatheNav from '../../components/LatheNav/LatheNav'

const CuttingTools = () => {
  return (
    <div>
        <LatheNav/>
        <h1>Lathe Cutting Tools: Shaping Metal with Precision</h1>
        <p>The lathe is a powerful machine for shaping metal into cylindrical parts. But its magic lies in the cutting tools, the unsung heroes that remove material and create the desired form.</p>
        <div id='material' className='material_based'>
            <h1>Material Based Cutting Tools</h1>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>High-speed Steel(HSS)</h2>
                <p>HSS Lathe Cutting Tool. Known for its dimensional accuracy and high tensile strength, these products are tested in terms of quality in order to ensuring the faultlessness.</p>
                <img src={hss} alt='high speed steel'/>
                <p>Offered products are manufactured by high class material and recent technology as per the set standard. Furthermore, the offered products are available from us in diverse specifications of clients within a promised time frame.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Carbide</h2>
                <img src={carbide} alt='carbide'/>
                <p>Carbide lathe cutting tools are hard and brittle. Therefore, they are compatible with virtually all materials. However, they are expensive, making their use limited in part manufacturing.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Diamond</h2>
                <img src={diamond} alt='diamond'/>
                <p>Lathe cutting tools made from diamonds are very hard. As a result, they are suitable for working with all materials. Nevertheless, like carbide tools, they are costly, which limits their industrial application.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Cubic Boron Nitride</h2>
                <img src={cbn} alt='cubic boron nitride'/>
                <p>Cubic Boron Nitride is the next in line in terms of hardness. They are durable, abrasion resistant, and suitable for rough machining and intermittent cutting, especially workpiece cast iron.</p>
            </div>
        </div>
        </div>
        <div id='operation' className='operation_based'>
            <h1>Operations Based Cutting Tools</h1>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Turning tools</h2>
                <img src={turning} alt='turning tools'/>
                <p>Turning tools are applicable in removing materials along the length of a workpiece. Consequently, it leads to a reduction in the diameter of the workpiece. There are two types:</p>
                <p>
                    <ul>
                        <li>Rough turning tools: Rough turning tools are those that are used to remove large amounts of material from a workpiece in a single pass. Therefore, they are typically used to create rough shapes or to prepare surfaces for subsequent finishing operations.</li>
                        <li>Finish turning tools: Finish turning tools are used to remove small amounts of material from a workpiece in order to create a smooth, finished surface.</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Chamfering tools</h2>
                <img src={chamfering} alt='chamfering'/>
                <p>These lathes’ cutting tools are suitable for chamfering, i.e., producing a slanting edge. Turning tools are also suitable for chamfering. However, they must be set at the right angle to the workpiece. Moreover, they become obsolete when the inclination angle is high.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Thread Cutting tools</h2>
                <img src={tct} alt='thread cutting tools'/>
                <p>Thread cutting tools are suitable for making spiral thread patterns on cylindrical parts. Generally, they have a nose angle that depends on the intending thread angle. Furthermore, the tool’s cross-section will affect the thread’s pitch.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Facing tools</h2>
                <img src={facing} alt='facing tools'/>
                <p>Facing tools utilizes the side cutting edge to remove the thin layer of materials and produce a smooth surface.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Forming tools</h2>
                <img src={forming} alt='forming tools'/>
                <p>A forming tool combines a turning and grooving tool applicable in making complex shapes at a go. While the turning tool will do the same job, a forming tool is ideal as it increases accuracy and reduces cycle time.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Grooving tools</h2>
                <img src={grooving} alt='grooving tools'/>
                <p>These tools are applicable in making grooves on a workpiece with cylindrical surfaces. There are several shapes of grooves determined by the lathes machine tool shape. Common ones are V-shaped and square cutting tools.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Boring tools</h2>
                <img src={boring} alt='boring tools'/>
                <p>A boring tool is a cutting tool characterized by a boring bar with a cutting tool at its end. So, it is applicable in working and increasing the diameter of a hole.</p>
            </div>
        </div>
        <div className='cuttingTools'>
            <div className='description'>
                <h2>Knurling tools</h2>
                <img src={knurling} alt='knurling tools'/>
                <p>Knurling tools have two or more metal rolling wheels with embossed patterns. Usually, they are applicable in making indents on a workpiece to increase its grips.</p>
            </div>
        </div>
        </div>
    </div>

  )
}

export default CuttingTools