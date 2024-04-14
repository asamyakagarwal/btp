import React from 'react';

import operation1 from '../../assets/operation1.jpeg';
import operation2 from '../../assets/operation2.jpeg';
import operation3 from '../../assets/operation3.jpeg';
import operation4 from '../../assets/operation4.jpeg';
import operation5 from '../../assets/operation5.jpeg';
import operation6 from '../../assets/operation6.jpeg';
import operation7 from '../../assets/operation7.jpeg';
import operation8 from '../../assets/operation8.jpeg';
import operation9 from '../../assets/operation9.jpeg';
import operation10 from '../../assets/operation10.jpeg';
import operation11 from '../../assets/operation11.jpeg';
import operation12 from '../../assets/operation12.jpeg';
import operation13 from '../../assets/operation13.jpeg';
import operation14 from '../../assets/operation14.jpeg';
import operation15 from '../../assets/operation15.jpeg';
import operation16 from '../../assets/operation16.jpeg';
import operation17 from '../../assets/operation17.jpeg';
import operation18 from '../../assets/operation18.jpeg';
import operation19 from '../../assets/operation19.jpeg';
import operation20 from '../../assets/operation20.jpeg';
import operation21 from '../../assets/operation21.jpeg';
import operation22 from '../../assets/operation22.jpeg';
import operation23 from '../../assets/operation23.jpeg';
import operation24 from '../../assets/operation24.jpeg';
import operation25 from '../../assets/operation25.jpeg';

import LatheNav from '../../components/LatheNav/LatheNav';


const Operations = () => {
    return (
        <div>

            <LatheNav />


            <h1>OPERATIONS OF LATHE</h1>
            <p>
                Welcome to our guide on lathe machine operations! Below, you'll find a comprehensive overview of
                essential operations used in lathe machining.
            </p>

            {/* Centering */}
            <div id="centering" className="operation">
                <div className="description">
                    <h1>Centering</h1>
                    <img src={operation1} alt="" />
                    <p>
                        When work is required to be turned between
                        centers or between a chuck and center, conical
                        shaped holes must be provided at the ends of the
                        workpiece to provide bearing surface for lathe
                        centers. To prepare a cylindrical workpiece for
                        centering, it is first necessary to locate the center
                        hole. Center holes are produced by using combined drill and counter shank tool. This is held on drill chuck and may be mounted on headstock or in tailstock. The included angle of the hole should be exactly 60 to fit 60-point angle of lathe center

                    </p>
                </div>
            </div>


            {/* Turning */}
            <div id="turning" className="operation">
                <div className="description">
                    <h1>Turning</h1>
                    <img src={operation2} alt="" />
                    <p>
                        Turning in a lathe is to remove excess amount of
                        material from workpiece to produce a cone shaped or
                        a cylindrical surface.
                        Round turning is the process of removal of
                        excess material from workpiece in a minimum time
                        by applying high rate of feed and heavy depth of cut.
                        The depth of cut for rough turning operation in
                        average machine shop work is from 2 to 5 mm and
                        rate of feed from 0.3 to 1.5 mm per revolution of
                        workpiece. Whereas finish turning requires high
                        cutting speed, small feed and a very small depth of
                        cut to generate a smooth surface. In finish turning
                        depth of cut rages from 0.5 to 1 mm and rate of feed
                        is from 0.1 to 0.3 mm per revolution of workpiece.
                        When workpiece having different diameter is turned,
                        the surface forming the step from one diameter to
                        other is called shoulder, and machining this part of
                        the workpiece is called shoulder turning. There are
                        four types of shoulders; Square shoulder, angular or
                        beveled shoulder, radius shoulder and undercut
                        shoulder

                    </p>
                </div>
            </div>


            {/* Taper turning */}
            <div id="taperturning" className="operation">
                <div className="description">
                    <h1>Taper turning</h1>
                    <img src={operation3} alt="" />
                    <p>
                        A taper defined as a uniform increase or
                        decrease in diameter of workpiece measured along its
                        length. It produces conical surface by gradual
                        reduction in diameter. Tapering of a part has wide
                        application in construction of the machine. Almost
                        all machine spindles have taper holes which receive
                        taper shank of various tool and work holding devices.

                    </p>
                </div>
            </div>


            {/* Facing */}
            <div id="facing" className="operation">
                <div className="description">
                    <h1>Facing</h1>
                    <img src={operation4} alt="" />
                    <p>
                        Facing is an operation of machining the end of
                        the workpiece to produce a flat surface. This is also used to cut the workpiece to the required length. A
                        properly ground facing tool is mounted in a tool
                        holder in the tool post. A regular turning tool may
                        also be used for facing a large workpiece. The
                        surface is finished to size by giving usual roughing
                        and finishing cuts. For roughing the average of cross
                        feed from 0.3 to 0.7 mm per revolution and depth of
                        cut from 2 to 5 mm. For finishing the average of
                        cross feed from 0.1 to 0.3 mm per revolution and
                        depth of cut 0.7 to 1 mm.

                    </p>
                </div>
            </div>

            {/*  Knurling  */}
            <div id="knurling" className="operation">
                <div className="description">
                    <h1>Knurling</h1>
                    <img src={operation5} alt="" />
                    <p>
                        Knurling is the process of embossing a diamond
                        shaped pattern on a surface of the workpiece. The
                        purpose of the knurling is to provide an effective
                        gripping surface on the workpiece to prevent it from
                        slipping when operated by hand. The operation is
                        performed by a special knurling tool which consist of
                        one set of hardened steel rollers in a holder with the
                        teeth cut on their surface in a definite pattern. When
                        single roller is used to generate parallel grooves and
                        when two rollers are used, one right hand and one
                        left hand to generate the diamond shaped pattern.
                        Knurling is done at slowest speed available in lathe.
                        Usually speed is reduced to one forth that of turning
                        and some amount of oil is required. Speed varies
                        from 1 to 2 mm per revolution.

                    </p>
                </div>
            </div>

            {/* Filing */}
            <div id="filing" className="operation">
                <div className="description">
                    <h1>Filing</h1>
                    <img src={operation6} alt="" />
                    <p>
                        This operation is done after turning to remove
                        burrs, sharp corners and feed marks on the workpiece
                        and also to bring it to size by removing very small
                        amount of metal. The operation consists of passing a
                        flat single cut file over the workpiece which revolves
                        at very high speed. The file handle is gripped by left
                        hand and the tip of the file by right hand to avoid
                        accidents.

                    </p>
                </div>
            </div>

            {/* Polishing  */}
            <div id="polishing" className="operation">
                <div className="description">
                    <h1>Polishing</h1>
                    <img src={operation7} alt="" />
                    <p>
                        Polishing is performed after filling to improve
                        the surface quality of the workpiece. Polishing with
                        successively finer grade of enemy cloth after filling
                        results in very smooth and bright surface. The lathe
                        is run at high speed from 1500 to 1800 rpm and used
                        on enemy cloth

                    </p>
                </div>
            </div>

            {/* Grooving */}
            <div id="grooving" className="operation">
                <div className="description">
                    <h1>Grooving</h1>
                    <img src={operation8} alt="" />
                    <p>
                        Grooving is the process of reducing the diameter
                        of the workpiece over a very narrow surface. It is
                        often done at the end of thread to leave a small
                        margin. The work is revolved half the speed of
                        turning and a grooving tool of required shape is fedstraight to the workpiece. A grooving tool is similar
                        to a parting-off tool.

                    </p>
                </div>
            </div>

            {/* Spinning */}
            <div id="spinning" className="operation">
                <div className="description">
                    <h1>Spinning</h1>
                    <img src={operation9} alt="" />
                    <p>
                        Spinning is the process of forming a thin sheet
                        of metal by revolving the job at high speed and
                        pressing it against former attached to the headstock.
                        A support is also given from the tailstock end. The
                        pressure is gradually applied to the revolving sheet
                        metal by long round nose forming tool.

                    </p>
                </div>
            </div>

            {/* Spring Winding */}
            <div id="springwinding" className="operation">
                <div className="description">
                    <h1>Spring Winding</h1>
                    <img src={operation10} alt="" />
                    <p>
                        It is the process of making a coiled spring by
                        passing the wire around a mandrel which is revolvedon a chuck or between centers. A small hole is
                        provided on a steel bar which is supported on a tool
                        post and wire is allowed to pass through it. The
                        diameter of mandrel should be less than the desire
                        spring diameter as all spring expands in diameter
                        after they are taken out of the mandrel.

                    </p>
                </div>
            </div>

            {/* Forming */}
            <div id="forming" className="operation">
                <div className="description">
                    <h1>Forming</h1>
                    <img src={operation11} alt="" />
                    <p>
                        Forming is the process of turning a convex,
                        concave or any irregular shape. Form turning may be
                        accomplished by following three methods:
                        • Using a form tool
                        • Combing cross land longitudinal feed
                        • Tracing or copying a template
                        Usually two types of forming tools are used;
                        straight and circular. Straight type is used for wider
                        surface and circular type for narrower surfaces. The
                        cross-feed ranges from 0.01 to 0.08 mm per
                        revolution and the cutting speed is slightly less than
                        that of the straight turning

                    </p>
                </div>
            </div>

            {/* Eccentric turning */}
            <div id="eccentricturning" className="operation">
                <div className="description">
                    <h1>Eccentric turning</h1>
                    <img src={operation12} alt="" />
                    <p>
                        If a cylindrical workpiece has two separate axis
                        of rotation one being out of center to the other center,
                        the workpiece is termed eccentric and turning of
                        different surface of workpiece ids known as eccentric
                        turning. Crank shaft is the common example of
                        eccentric turning. In eccentric turning counter
                        balance weights are mounted on the faceplate to get
                        uniform turning

                    </p>
                </div>
            </div>

            {/* Chamfering */}
            <div id="chamfering" className="operation">
                <div className="description">
                    <h1>Chamfering</h1>
                    <img src={operation13} alt="" />
                    <p>
                        Chamfering is the operation of beveling the
                        extreme end of the workpiece. This is done to
                        remove the burrs, to protect the end of workpiece
                        from being damaged and to have better look. The
                        operation may be carried out after knurling, rough
                        turning, boring and drilling. Chamfering id essential
                        operation after thread cutting so that nut may pass
                        freely on the threaded workpiece

                    </p>
                </div>
            </div>

            {/* Thread cutting  */}
            <div id="threadcutting" className="operation">
                <div className="description">
                    <h1>Thread cutting</h1>
                    <img src={operation14} alt="" />
                    <p>
                        It is most of the important operation performed
                        in a lathe. The principle of the thread cutting is to
                        produce a helical groove on a cylindrical or conical
                        surface by feeding the tool longitudinally when the
                        job is revolved between centers or by a chunk. The
                        longitudinal feed should be equal to the pitch of
                        thread to be cut per revolution. A chaser is a
                        multipoint threading tool having the same form pitch
                        of thread to be chased. A chaser is used to finish a
                        partly cut thread to the size and shape required.
                        Thread cutting is done at one third or one half of the
                        speed of turning

                    </p>
                </div>
            </div>

            {/* Drilling */}
            <div id="drilling" className="operation">
                <div className="description">
                    <h1>Drilling</h1>
                    <img src={operation15} alt="" />
                    <p>
                        It is the operation of the producing a cylindrical
                        hole in a workpiece by rotating cutting edge of cuter
                        is known as drill. It can be performed by a lathe any
                        one of following methods.
                        • The workpiece is revolved in a chuck or
                        faceplate and drill is held in tailstock drill holder
                        feeding is affected by feeding of tailstock center.
                        • The drill is held and revolved by drill chuck
                        attached to the headstock spindle and workpiece
                        is held and supported of tailstock spindle when
                        workpiece is irregular in shape.

                    </p>
                </div>
            </div>

            {/*  Reaming */}
            <div id="reaming" className="operation">
                <div className="description">
                    <h1>Reaming</h1>
                    <img src={operation16} alt="" />
                    <p>
                        Reaming is the operation of finishing and sizing
                        a hole which has been previously drilled or bored.
                        The tool is called reamer, which has multiple cutting
                        edge. Reamer is held on tailstock and is held
                        stationary while work is revolved at very slow speed.
                        Speed varies from 0.5 to 2 mm per revolution.

                    </p>
                </div>
            </div>

            {/* Boring */}
            <div id="boring" className="operation">
                <div className="description">
                    <h1>Boring</h1>
                    <img src={operation17} alt="" />
                    <p>
                        t is the process of enlarging and turning a hole
                        produced by drilling, punching, casting of forging.
                        Boring cannot originate hole. Boring is similar toexternal turning operation can be performed in lathe
                        by following methods:
                        • The workpiece is revolved in a chuck and tool is
                        fitted to the tool post is fed in to the workpiece.
                        This method is suitable for boring small sized
                        work.
                        • The workpiece is clamped on carriage and
                        boring bar holding the tool is supported between
                        centers and made to revolve.

                    </p>
                </div>
            </div>

            {/* Counter boring */}
            <div id="counterboring" className="operation">
                <div className="description">
                    <h1>Counter boring</h1>
                    <img src={operation18} alt="" />
                    <p>
                        It is the operation of enlarging a hole through a
                        certain distance from one end instead of enlarging
                        the whole drilled surface. It is similar to a shoulder
                        work in external turning. The operation is similar to
                        boring and a plain boring tool or a counter bore may
                        be used

                    </p>
                </div>
            </div>

            {/* Taper boring */}
            <div id="taperboring" className="operation">
                <div className="description">
                    <h1>Taper boring</h1>
                    <img src={operation19} alt="" />
                    <p>
                        he principle of turning taper hole is similar to
                        the external taper turning operation and is
                        accomplished by rotating the workpiece on chuck
                        and feeding the tool at an angle to the axis of rotation
                        of the workpiece

                    </p>
                </div>
            </div>

            {/* Internal thread cutting */}
            <div id="internalthreadcutting" className="operation">
                <div className="description">
                    <h1>Internal thread cutting</h1>
                    <img src={operation20} alt="" />
                    <p>
                        The principle of cutting internal thread is similar
                        to that an external thread, the only difference being
                        in tool used. The tool is similar to a boring tool with
                        cutting edge ground to shape conforming to the type
                        of thread to be cut. The hole is to be bored to the root
                        diameter of the thread

                    </p>
                </div>
            </div>

            {/* Tapping */}
            <div id="tapping" className="operation">
                <div className="description">
                    <h1>Tapping</h1>
                    <img src={operation21} alt="" />
                    <p>
                        Tapping is the operation of cutting internal
                        threads of small diameter using a multiple cutting
                        tool called the tap. In a lathe, workpiece is mounted
                        on chuck and revolved at very low speed. A tap of
                        required size held on fixture and it will automatically
                        feed into the work with the help of special fixture

                    </p>
                </div>
            </div>

            {/* Undercutting */}
            <div id="undercutting" className="operation">
                <div className="description">
                    <h1>Undercutting</h1>
                    <img src={operation22} alt="" />
                    <p>
                        Undercutting is similar to grooving operation
                        when performed inside the hole. It is process of
                        boring a groove at a distance from end of a hole this
                        is similar to boring operation. Undercutting is done at
                        the end of internal thread to provide clearance for
                        tool


                    </p>
                </div>
            </div>

            {/* Parting off */}
            <div id="partingoff" className="operation">
                <div className="description">
                    <h1>Parting off</h1>
                    <img src={operation23} alt="" />
                    <p>
                        Parting off is the operation of cutting a
                        workpiece after it has been machined to the desired
                        shape and size. The process involves rotating the
                        workpiece on a chuck at half speed that of turning
                        and feeding by narrow paring off tool perpendicular
                        to the lathe axis. The feed varies from 0.07 to 0.15
                        mm per revolution and depth of cut which is equal to
                        width of tool range from 3 to 10 mm.

                    </p>
                </div>
            </div>


            {/* Milling */}
            <div id="milling" className="operation">
                <div className="description">
                    <h1>Milling</h1>
                    <img src={operation24} alt="" />
                    <p>
                        Milling is the operation of removing metal by
                        feeding the workpiece against the rotating cutterhaving multiple cutting edges. It is performed in a
                        lathe by any one of the following methods:
                        • For cutting Keyways or grooves, the workpiece
                        is supported on the cross slide by a special
                        attachment and fed against a rotating milling
                        cutter held by a chuck. The depth of cut is given
                        by vertical adjustment of the workpiece provided
                        by the attachment.
                        • The workpiece may be supported between
                        centres and held stationary. The attachment
                        mounted on the carriage drives the cutter from
                        an individual motor.



                    </p>
                </div>
            </div>


            {/* Grinding */}
            <div id="grinding" className="operation">
                <div className="description">
                    <h1>Grinding</h1>
                    <img src={operation25} alt="" />
                    <p>
                        It is the operation of removing metal in the form
                        of minute chips by feeding the work against a
                        rotating abrasive wheel known as the grinding wheel.
                        Both internal and external surfaces of the workpiece
                        may be ground by using a special attachment
                        mounted on cross side


                    </p>
                </div>
            </div>








        </div>
    );
};

export default Operations;