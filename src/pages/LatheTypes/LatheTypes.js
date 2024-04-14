import React from "react";
import LatheNav from "../../components/LatheNav/LatheNav";
import speed1 from "../../assets/speed1.jpg";
import speed2 from "../../assets/speed2.jpg";
import speed3 from "../../assets/speed3.png";
import automatic1 from "../../assets/automatic1.jpg";
import automatic2 from "../../assets/automatic2.jpg";
import automatic3 from "../../assets/automatic3.png";
import automatic4 from "../../assets/automatic4.png";
import automatic5 from "../../assets/automatic5.png";
import automatic6 from "../../assets/automatic6.png";
import automatic7 from "../../assets/automatic7.png";
import toolroom1 from "../../assets/toolroom1.jpg";
import toolroom2 from "../../assets/toolroom2.jpg";
import toolroom3 from "../../assets/toolroom3.png";
import toolroom4 from "../../assets/toolroom4.png";
import turret1 from "../../assets/turret1.jpg";
import turret2 from "../../assets/turret2.png";
import turret3 from "../../assets/turret3.png";
import engine1 from "../../assets/engine1.jpg";
import engine2 from "../../assets/engine2.jpg";
import engine3 from "../../assets/engine3.png";
import bench1 from "../../assets/bench1.jpg";
import bench2 from "../../assets/bench2.jpg";
import bench3 from "../../assets/bench3.png";
import sp1 from "../../assets/sp1.jpg";
import sp2 from "../../assets/sp2.png";
import sp3 from "../../assets/sp4.png";
import sp4 from "../../assets/sp4.png";
import cnc1 from "../../assets/cnc1.jpg";
import cnc2 from "../../assets/cnc2.jpg";
import cnc3 from "../../assets/cnc3.png";
import cnc4 from "../../assets/cnc4.png";
import './LatheTypes.css'

const LatheTypes = () => {
  return (
    <>
    <LatheNav />
    <div>
      <h1>Types of Lathes</h1>
      <p>
        Lathes are indispensable tools in machining operations, offering
        versatility in shaping various materials with precision. Understanding
        the different types of lathes available can help you choose the right
        one for your specific machining needs. Here's a concise overview of the
        main types:
      </p>

      <div className="type" id='speed'>
        <div className="description">
          <h1>Speed Lathe Machine</h1>
          <img src={speed1} alt="speed_lathe" />
          <img src={speed2} alt="speed_lathe" />
          <p>
            <ul>
              <li>
                {" "}
                A Speed Lathe Machine is a high-speed, hand-operated lathe
                machine, mainly used by woodworkers. It can provide a spindle
                speed from 1200 to 3600rpm.
              </li>
              <li>
                The machine comes with a very simple design, it contains
                headstock, bed, tailstock, and tool post.
              </li>
              <li>
                Due to their high-speed spindle, speed lathe machines are used
                for woodturning, furniture making, metal polishing, spinning,
                and centering.
              </li>
            </ul>
          </p>
          <img src={speed3} alt="speed_lathe" />
        </div>
      </div>
      <div className="type" id='automatic'>
        <div className="description">
          <h1>Automatic Lathe Machine</h1>
          <img src={automatic1} alt="automatic_lathe" />
          <img src={automatic2} alt="automatic_lathe" />
          <p>
            <ul>
              <li>
                {" "}
                An automatic Lathe machine comes with a group of mechanisms that
                makes it capable of changing and feeding cutting tools
                automatically.
              </li>
              <li>
                When you have a job that is complicated precision operations,
                requires skills, and you have to produce it in mass
                quantity…this machine is suitable.
              </li>
              <li>
                This machine is heavy-duty, production-friendly, and expensive.
              </li>
            </ul>
          </p>
          <img src={automatic3} alt="automatic_lathe" />
          <img src={automatic4} alt="automatic_lathe" />
          <img src={automatic5} alt="automatic_lathe" />
          <img src={automatic6} alt="automatic_lathe" />
          <img src={automatic7} alt="automatic_lathe" />
        </div>
      </div>
      <div className="type" id="toolroom">
        <div className="description">
          <h1>Toolroom Lathe Machine</h1>
          <img src={toolroom1} alt="toolroom_lathe" />
          <p>
            This is a special breed of lathe machine mostly used to make
            precision parts and tools such as die, gauges, jigs, and fixtures.
          </p>
          <img src={toolroom2} alt="toolroom_lathe" />
          <p>
            It looks similar to an engine lathe machine. But it is made from
            more accurate and precise parts than an engine lathe machine. Thus,
            the price of a toolroom machine is higher than an engine lathe
            machine.
          </p>
          <img src={toolroom3} alt="toolroom_lathe" />
          <img src={toolroom4} alt="toolroom_lathe" />
        </div>
      </div>
      <div className="type" id="turret">
        <div className="description">
          <h1>Turret Lathe Machine</h1>
          <img src={turret1} alt="turret_lathe" />
          <p>
            A turret lathe machine is an advanced lathe machine used for mass
            production. It is kind of an upgraded version of an engine lathe,
            where the tailstock is replaced by a revolving hexagonal turret.In
            this turret, you can set up multiple cutting tools (usually up to 6
            tools), such as drilling, countersinking, reaming, tapping, etc.
          </p>
          <img src={turret2} alt="turret_lathe" />
          <p>
            You see, this design makes your work a lot easier, all you have to
            do is simply clamp your workpiece in the chuck, perform the first
            operation, now rotate the turret, and perform the second operation.
            You can repeat the process as long as you want.
          </p>
          <p>
            {" "}
            There are mainly three benefits of this machine:
            <ul>
              <li>
                It reduces your workpiece load/unload time:yes, just clamp your
                workpiece once, and perform as many operations you want in a
                single setup.
              </li>
              <li>
                You don't have to change tools every time you perform different
                operations:just rotate the turret and you are good to go.
              </li>
              <li>
                It reduces human errors: you don't have to change the tool
                manually every time, hence it eliminates the chances of human
                error in tool alignment and machining operations.
              </li>
            </ul>
          </p>
          <img src={turret3} alt="turret_lathe" />
        </div>
      </div>
      <div className="type" id="center">
        <div className="description">
          <h1>Center Lathe or Engine Lathe Machine</h1>
          <img src={engine1} alt="engine_lathe" />
          <img src={engine2} alt="engine_lathe" />
          <p>
            <ul>
              <li>
                Engine lathe machine is the most popular type of lathe machine.
                You can find it inside any manufacturing workshop.
              </li>
              <li>
                Nowadays the machine is driven by an electric motor but back in
                the 19th-century people used steam engines to drive the machine.
                That's why it is called an engine lathe machine even it does
                contain an engine nowadays.
              </li>
              <li>
                It is also called center lathe machine, because back then almost
                all machine tools were driven by either separate engines or
                central engines.
              </li>
              <li>
                This type of lathe machine is used for woodworking and
                metalworking. You can perform various machining operations on
                this lathe machine… such as turning, facing, grooving, knurling,
                threading, drilling, boring, reaming, and many more.
              </li>
              <li>
                And lastly, the machine is capable of handling workpieces up to
                1 meter in diameter, and up to 4 meters in length.
              </li>
            </ul>
          </p>
          <img src={engine3} alt="engine_lathe" />
        </div>
      </div>
      <div className="type" id="bench">
        <div className="description">
          <h1>Bench Lathe Machine</h1>
          <img src={bench1} alt="bench_lathe" />
          <p>
            A bench lathe machine is a small-size, hand-operated power lathe,
            mainly used for small precision work. It looks very similar to speed
            lathe machines.
          </p>
          <img src={bench2} alt="bench_lathe" />
          <p>
            If you have a light job that requires lathe machine operations such
            as turning, facing, grooving, parting, threading, drilling, boring,
            knurling, and tapping, this machine is for you.But in general,
            jewelers and watchmakers use this machine a lot for their machining
            needs.
          </p>
          <img src={bench3} alt="bench_lathe" />
        </div>
      </div>
      <div className="type">
        <div className="description">
          <h1>Special Purpose Lathe Machine</h1>
          <img src={sp1} alt="sp_lathe" />
          <p>
            You can guess by the name, special purpose lathe machines are
            custom-tailored lathe machines to suit particular needs. They are
            mostly used for heavy-duty jobs, where regular lathes can’t be used,
            or using regular lathes can be costlier or time-consuming.
          </p>
          <p>
            {" "}
            There are hundreds of special-purpose lathe machines are available
            but here are some of the most popular ones:
            <ul>
              <li>Hydraulic Quill Type Lathe Machines</li>
              <li>Planner Type Lathe Machine</li>
              <li>Wheel lathe machine</li>
              <li>Gap bed lathe machine</li>
              <li>T-lathe machine</li>
              <li>Duplicating lathe machine</li>
              <li>Missile lathe machine</li>
              <li>Duplex or tracer lathes</li>
              <li>Crankshaft lathes machine</li>
              <li>Multi-spindle lathe machine</li>
            </ul>
          </p>
          <img src={sp2} alt="sp_lathe" />
          <img src={sp3} alt="sp_lathe" />
          <img src={sp4} alt="sp_lathe" />
        </div>
      </div>
      <div className="type" id="cnc">
        <div className="description">
          <h1>CNC Lathe Machine</h1>
          <img src={cnc1} alt="cnc_lathe" />
          <p>
            CNC Lathe Machines are the most up-to-date lathe machines in terms
            of technology.They come with a modern computer numeric control
            system (CNC). You can use this control system to add a CAD/CAM
            program and after that, whenever you command the machine, it will
            start and perform the machining operation according to your program
            input.
          </p>
          <img src={cnc2} alt="cnc_lathe" />
          <p>
            {" "}
            There are tons of features in CNC lathe machines, some important
            features are as below:
            <ul>
              <li>It has an automatic tool change system</li>
              <li>
                The accuracy of the finished job is pretty darn better than any
                other type of lathes
              </li>
              <li>
                The power consumption and routine maintenance cost of this
                machine is higher
              </li>
              <li>
                It can cheaply, and speedily perform complex machining
                operations
              </li>
              <li>Mass productions become fast with this machine</li>
              <li>
                It comes with a hydraulic chuck, which means it’s easy and fast
                to clamp workpieces
              </li>
            </ul>
            Many people think that you don’t need special skills to operate this
            machine, however, no one should operate this machine without proper
            training, it is a very expensive machine, and with a new operator,
            the chances of an accident increase.
          </p>
          <img src={cnc3} alt="cnc_lathe" />
          <img src={cnc4} alt="cnc_lathe" />
        </div>
      </div>
    </div>
    </>
  );
};

export default LatheTypes;
