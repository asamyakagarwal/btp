import React from 'react';
import AnglePlate1 from '../../assets/anglePlate1.jpg';
import AnglePlate2 from '../../assets/anglePlate2.jpg';
import CatchPlate1 from '../../assets/CatchPlate1.png';
import CatchPlate2 from '../../assets/CatchPlate2.png';
import centre1 from '../../assets/centre1.jpg';
import centre2 from '../../assets/centre2.jpg';
import centre3 from '../../assets/centre3.png';
import chuck1 from '../../assets/chuck1.jpg';
import chuck2 from '../../assets/chuck2.jpg';
import three_jaw from '../../assets/3jaw.jpg';
import four_jaw from '../../assets/4jaw.jpg';
import combination from '../../assets/combination.jpg';
import magnetic from '../../assets/magnetic.jpg';
import collet from '../../assets/collet.jpg';


const Accessories = () => {
  return (
    <div>
      <h1>Lathe Machine Accessories Overview</h1>
      <p>
        Welcome to our guide on lathe machine accessories! Below, you'll find a comprehensive overview of essential accessories used in lathe machining.
      </p>

      <div className="accessory">
        <div className="description">
          <h2>Angle Plate</h2>
          <img src={AnglePlate1} alt="Angle Plate" />
          <p>
            Made of cast iron, the angle plate boasts two precisely machined
            faces set at a right angle to each other. It features holes and
            slots on both faces for clamping onto a faceplate and securing
            workpieces with bolts and clamps.
          </p>
          <img src={AnglePlate2} alt="Angle Plate" />
          <p>
            Angle plates are particularly useful when the holding surface of
            the workpiece must remain horizontal, as is often the case in
            tasks such as machining a pipe elbow's flange. A balance weight or
            counterweight may be necessary for eccentric jobs attached to the
            faceplate.
          </p>
        </div>
      </div>

      <div className="accessory">
        <div className="description">
          <h2>Catch Plates or Carriers</h2>
          <img src={CatchPlate1} alt="Catch Plates or Carriers" />
          <p>
            Catch plates and carriers play a vital role in driving workpieces
            when they are held between two centres on a lathe. Carriers are
            essentially driving dogs that attach to the end of the workpiece
            using a setscrew, while catch plates are bolted to the nose of the
            lathe's headstock spindle.
          </p>
          <img src={CatchPlate2} alt="Catch Plates or Carriers" />
          <p>
          Both feature projecting pins that fit into corresponding slots. A single-pin catch plate drives the straight end or tail of the attached carrier, while double-pin catch plates engage with double-tail or double-slotted carriers, providing uniform drive. Bent-tail types are used in conjunction with a faceplate or slotted catch plate.
          </p>
        </div>
      </div>

      {/* Centers */}
      <div className="accessory">
        <div className="description">
          <h2>Centers</h2>
          <img src={centre1} alt="Centers" />
          <img src={centre2} alt="Centers" />
          <p>
          In lathe machining, Centers are essential components used to support and accurately align the workpiece, enabling precise turning, facing, and tapering operations. They provide stability and rotational symmetry to the workpiece during the machining process.
          </p>
          <p>
            Different types of centers include ordinary centre, tipped centre, ball centre, insert type centre, half centre, pipe centre, and frictionless centre.
          </p>
          <img src={centre3} alt="Centers" />
          <ul>
            <li>
                <h4>Ordinary Centre</h4>
                <p>An ordinary centre is a versatile option for general machining and smaller operations. It provides a stable point of support for the workpiece during lathe operations.</p>
            </li>
            <li>
                <h4>Tipped Centre</h4>
                <p>The tipped centre stands out among all centre types due to its crucial role. It features a tip made from hard materials that exhibit exceptional deflection, wear, and tear resistance, ensuring precision and longevity in machining tasks.</p>
            </li>
            <li>
                <h4>Ball Centre</h4>
                <p>Specifically designed for taper turning using the set-over method, the ball centre minimises wear and strain on the workpiece. Its rounded shape facilitates smoother and more precise taper turning.</p>
            </li>
            <li>
                <h4>Insert Type Centre</h4>
                <p>Recognised for its cost-effective design, the insert type centre allows for the replacement of only the high-speed steel "insert" rather than the entire centre. This feature makes it an economical choice for machining operations.</p>
            </li>
            <li>
                <h4>Half Centre</h4>
                <p>Similar to the ordinary centre but with a portion of its centre ground away, the half centre provides stability while accommodating workpieces with specific requirements, allowing for greater versatility in machining tasks.</p>
            </li>
            <li>
                <h4>Pipe Centre</h4>
                <p>Pipe centres are commonly used in production works to support the open ends of pipes. They offer reliable support and alignment for cylindrical workpieces, particularly in scenarios involving pipes.</p>
            </li>
            <li>
                <h4>Frictionless Centre</h4>
                <p>Typically found in the tailstock, the frictionless centre boasts the capability to withstand high-applied forces while allowing rotation along with the workpiece. Its ability to operate at very high speeds makes it ideal for demanding machining applications.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Chucks */}
      <div className="accessory">
        <div className="description">
          <h2>Chucks</h2>
          <img src={chuck1} alt="Chucks" />
          <img src={chuck2} alt="Chucks" />
          <p>
            Chucks are generally used to support and hold the workpiece in order to carry out different operations in the lathe. The different types of chucks include 3 jaw universal chuck, 4 jaw independent chuck, combination chuck, magnetic chuck, and collet chuck.
          </p>
          <ul>
            <li>
                <h4>3 Jaw Universal Chuck</h4>
                <img src={three_jaw} alt="Chucks" />
                <p>The 3 Jaw Universal Chuck is equipped with three high-quality steel jaws arranged at an angle of 120° to each other. These jaws engage with spiral teeth (known as Bevel's teeth) during operation. The interaction with these teeth, facilitated by a bevel pinion rotated using a square-end key, commonly referred to as the "chuck key," causes a simultaneous movement of all three jaws either towards or away from the centre of the chuck. Due to its excellent gripping capabilities, this chuck type is primarily employed for securing workpieces with circular or hexagonal shapes.</p>
            </li>
            <li>
                <h4>4 Jaw Independent Chuck</h4>
                <img src={four_jaw} alt="Chucks" />
                <p>The 4 Jaw Independent Chuck features four jaws positioned at 90° angles to one another. Unlike the 3 jaw chuck, each of these four jaws can be operated independently using individual screws, eliminating the need for a scroll disk. This design makes it ideal for securely holding irregularly shaped workpieces that may not align well with the standard chuck configurations.</p>
            </li>
            <li>
                <h4>Combination Chuck</h4>
                <img src={combination} alt="Chucks" />
                <p>The Combination Chuck combines the functionalities of both the universal chuck and the independent chuck. It is a versatile chuck type that can serve as either a self-centering chuck or an independent chuck, offering flexibility in machining operations. This chuck incorporates independent screws and a scroll disk, allowing the user to choose between moving the jaws separately by manipulating the screws or simultaneously using the scroll disk. Consequently, it is suitable for securing both regularly and irregularly shaped workpieces, offering adaptability in various machining scenarios.</p>
            </li>
            <li>
                <h4>Magnetic Chuck</h4>
                <img src={magnetic} alt="Chucks" />
                <p>Magnetic chuck is one of the most important devices for holding workpiece of short length and large diameters for machining in a lathe. Chuck blocks are added in necessary situations to extend the magnetism to the workpiece, for more accurate and consistent machining</p>
            </li>
            <li>
                <h4>Collet Chuck</h4>
                <img src={collet} alt="Chucks" />
                <p>The range features a self-contained construction, with mechanical grip and an air release front actuated collet chuck. As such the chuck does not require an external actuator. This makes the chuck failsafe as air is only used to open it, spring force holds the workpiece while it is being machined. Higher spindle speeds are achievable since a collet chuck does not have heavy jaws that lose grip force as the spindle speed of the lathe increases</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Face Plate */}
      <div className="accessory">
        {/* <img src={FacePlateImage} alt="Face Plate" /> */}
        <div className="description">
          <h2>Face Plate</h2>
          <p>
            A circular plate threaded at its centre with plain and T-slots, the faceplate is affixed to the lathe spindle's central threaded portion. It secures the workpiece using bolts and clamps within its slots. The faceplate is versatile, accommodating both regular and irregularly shaped workpieces that chucks or centres may not easily hold. This makes it a valuable tool for various machining tasks.
          </p>
        </div>
      </div>

      {/* Lathe Dogs */}
      <div className="accessory">
        {/* <img src={LatheDogsImage} alt="Lathe Dogs" /> */}
        <div className="description">
          <h2>Lathe Dogs</h2>
          <p>
            A lathe carrier, also known as a lathe dog, is a device that clamps around the workpiece and allows the rotary motion of the machine’s spindle to be transmitted to the workpiece. It is used to hold workpieces securely for smooth and even turning.
          </p>
        </div>
      </div>

      {/* Mandrels */}
      <div className="accessory">
        {/* <img src={MandrelsImage} alt="Mandrels" /> */}
        <div className="description">
          <h2>Mandrels</h2>
          <p>
            Mandrels are essential for holding rotating workpieces that have been previously drilled, stepped, turned, or bored, allowing for further machining operations. Various types of mandrels are available to suit specific workpiece requirements.
          </p>
        </div>
      </div>

      {/* Rests */}
      <div className="accessory">
        {/* <img src={RestsImage} alt="Rests" /> */}
        <div className="description">
          <h2>Rests</h2>
          <p>
            Rests serve as support structures in the lathe to prevent the bending of long workpieces due to their own weight and vibrations. Positioned between the lathe's centres, they are essential when the workpiece's length is significantly longer than its diameter.
          </p>
          <p>
            Steady Rest and Follower Rest are two common types of rests used in lathe machining.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Accessories;