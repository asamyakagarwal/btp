import React from 'react' ;
import LatheNav from '../../components/LatheNav/LatheNav' ;
import application1 from '../../assets/application1.jpeg';
import application2 from '../../assets/application2.jpeg';
import application3 from '../../assets/application3.jpeg';
import application4 from '../../assets/application4.jpeg';
import application5 from '../../assets/application5.jpeg';
import application6 from '../../assets/application6.jpeg';



const Applications = () => {
    return (
        <div>
            <LatheNav />

            <div className="applications">

                {/* woodturning */}
                <div id="woodturning" className="application">
                    <div className="description">
                        <h1>Wood Turning</h1>
                        <img src={application1 } alt="application1" />
                        <p>
                        Used to make wooden objects such as ornate table legs, baseball bats, wooden bowl, and platters; operators use a variety of tools to form.
                        </p>
                    </div>
                </div>

                {/* metalworking */}
                <div id="metalworking" className="application">
                    <div className="description">
                        <h1>Metal Working</h1>
                        <img src={application2} alt="application2" />
                        <p>
                        Used to create precision parts; most often associated with a multistep process requiring different tools for each step.

                        </p>
                    </div>
                </div>



                {/* metalspinning */}
                <div id="metalspinning" className="application">
                    <div className="description">
                        <h1>Metal Spinning</h1>
                        <img src={application3} alt="application3" />
                        <p>
                        A process where metal spins on a spindle, while the operator works it with tools; an automated process.

                        </p>
                    </div>
                </div>


                {/* acrylicspinning */}
                <div id="acrylicspinning" className="application">
                    <div className="description">
                        <h1>Acrylic Spinning</h1>
                        <img src={application4} alt="application4" />
                        <p>
                        Involves spinning acrylic on a spindle to form items from acrylic; most often used in the making of the top pieces for trophies.

                        </p>
                    </div>
                </div>





                {/* thermalspraying */}
                <div id="thermalspraying" className="application">
                    <div className="description">
                        <h1>Thermal Spraying</h1>
                        <img src={application5} alt="application5" />
                        <p>
                        Combines the rotating spindle with the painting process; the paint sticks to the stock via processes involving heating the paint materials.
                        </p>
                    </div>
                </div>






                {/* pottery */}
                <div id="pottery" className="application">
                    <div className="description">
                        <h1>Pottery</h1>
                        <img src={application6} alt="application6" />
                        <p>
                        By using a potter’s wheel, artisans can make a variety of pottery pieces; though formed mainly by hand, craftspersons also use tools.
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Applications