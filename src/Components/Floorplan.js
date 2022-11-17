import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Tabone } from './Tabone'
import { Tabthree } from './Tabthree'
import { Tabtwo } from './Tabtwo'
import {useEffect,useState} from 'react';
import { Groundfloor } from './Groundfloor';
import { Firstfloor } from './Firstfloor';
import {Fourthfloor} from  './fourthfloor'
import { Ftosfloor } from './Fivetosixteenfloor';
import { Seventeenfloor } from './Seventeenfloor';
import { Eighteenfloor } from './Eighteenthtab';


function Floorplan() {
  const [floorcontent, setFloorcontent] = useState([]);

  useEffect(() => {
    async function floordata(){
              const floorcontentdata = await fetch('https://controlf5.co.in/client-demo/react-wordpress/wp-json/wp/v2/pages/33');
              const floorcontentdatas = await floorcontentdata.json();
  setFloorcontent(floorcontentdatas.acf);
  //console.log(floorcontentdatas.acf);
  
  
    }
  
    floordata()
  },[])



return (
    <section id='plan-details'> 
<div id='floorplan' className='container'>
<h4> {floorcontent.floor_plan_title}  </h4>
     <h3> {floorcontent.floor_plan_subtitle} </h3>
    <Tabs
      defaultActiveKey="Firstfloor"
      id='uncontrolled-tab-example'
      className='mb-3'>      
      <Tab eventKey="Firstfloor" title="1st Floor">
        <Firstfloor/>
      </Tab>
      <Tab eventKey="Tabtwo" title="2nd Floor">
        <Tabtwo/>
      </Tab>
      <Tab eventKey="thirdfloor" title="3th to 9th Floor">
        <Tabthree/>
      </Tab>
      <Tab eventKey="fourfloor" title="4th Floor">
     <Fourthfloor/>
      </Tab>
      <Tab eventKey="fivefloor" title="5th to 8th Floor">
        <Ftosfloor/>
      </Tab>
      <Tab eventKey="svnfloor" title="7th to 10th Floor">
      <Seventeenfloor/>
      </Tab>     
    </Tabs>
</div>

</section>
  );
}

export default Floorplan;