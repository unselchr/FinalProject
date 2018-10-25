import React from "react";
// import ReactDOM from 'react-dom';
// import { Col, Row, Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";
import HQContainer from "./../../components/HQContainer";
// const CreateRoster = () => (]
import units from "./../../utils/units";
import "./createRoster.css";
import TroopContainer from "./../../components/TroopsContainer";
class CreateRoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: props.units || [],
      hq:{
        points:0,
        powerLevel:0
      },
      troops: {
        points: 0,
        powerLevel: 0
      },
      elites: {
        points: 0,
        powerLevel: 0
      },
      fastAttack: {
        points: 0,
        powerLevel: 0
      },
      heavySupport: {
        points: 0,
        powerLevel: 0
      },
      lordOfWar: {
        points: 0,
        powerLevel: 0
      },
      transport: {
        points: 0,
        powerLevel: 0
      },
      flyer: {
        points: 0,
        powerLevel: 0
      },
      fortification: {
        points: 0,
        powerLevel: 0
      },
      totalPoints:0,
      totalPowerLevel:0
    }
    this.getNums=this.getNums.bind(this);
    this.updateNums=this.updateNums.bind(this);
  }
  addHQ=function(){
    const hqs=units.hq;
    console.log(hqs);
    
  }
  updateNums(){
    let pt = this.state.hq.points + this.state.troops.points + this.state.elites.points + this.state.fastAttack.points + this.state.heavySupport.points + this.state.lordOfWar.points + this.state.transport.points + this.state.flyer.points + this.state.fortification.points;
    let pl = this.state.hq.powerLevel + this.state.troops.powerLevel + this.state.elites.powerLevel + this.state.fastAttack.powerLevel + this.state.heavySupport.powerLevel + this.state.lordOfWar.powerLevel + this.state.transport.powerLevel + this.state.flyer.powerLevel + this.state.fortification.powerLevel;
    this.setState({totalPoints:pt,totalPowerLevel:pl});
    console.log(pt,pl);
  }
  getNums(nums){
    //console.log(nums);
    this.setState({[nums.category]:{points:nums.points,powerLevel:nums.powerLevel}},()=>this.updateNums());
  }
  render() {
    return (
    <div className="col-md-8">

      <div className="text-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">CHAOS</button>
          <button type="button" className="btn btn-secondary">IMPERIUM</button>
          <button type="button" className="btn btn-secondary">XENOS</button>
          <button type="button" className="btn btn-secondary">FORGE WORLD</button>
        </div>
      </div>
      
      <div className="accordion" id="accordionExample">
          <h5>Points:{this.state.totalPoints} PowerLevel:{this.state.totalPowerLevel}</h5>
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">HQ</button>
              <p>Points:{this.state.hq.points} PowerLevel:{this.state.hq.powerLevel}</p>
            </h5>
          </div>
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <HQContainer returnNums={this.getNums} min={this.state.minHQ} max={this.state.maxHQ} units={[]} />
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                TROOPS
              </button>
                <p>Points:{this.state.troops.points} PowerLevel:{this.state.troops.powerLevel}</p>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
                <TroopContainer returnNums={this.getNums} min={this.state.minHQ} max={this.state.maxHQ} units={[]}/>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ELITES
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                FAST ATTACK
              </button>
            </h5>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFive">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                HEAVY SUPPORT
              </button>
            </h5>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingSix">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                LORD OF WAR
              </button>
            </h5>
          </div>
          <div id="collapseSix" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingSeven">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                TRANSPORT
              </button>
            </h5>
          </div>
          <div id="collapseSeven" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingEight">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                FLYER
              </button>
            </h5>
          </div>
          <div id="collapseEight" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingNine">
            <h5 className="mb-0">
              <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                FORTIFICATION
              </button>
            </h5>
          </div>
          <div id="collapseNine" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

export default CreateRoster;