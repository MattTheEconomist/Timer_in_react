import React, { useEffect, useState } from 'react';
import './App.css';
import  { csv } from 'd3';
import * as d3 from'd3';
import Bar from './charts/bar.js'
import Pie from './charts/pie.js'
import fullData from './CRA.json'
import BarWithState from './barWithState'


function App() {
  const [selectedClass, setSelectedClass] = useState("FirstClass")



  let titles = {
    //what graphs go with MD? 
    // MarketDominant:{}, 
    MarketingMail:{underPie: 'Marketing Mail % Revenue Underwater', ccBar: 'Marketing Mail Cost Coverage', revBar: 'Marketing Mail Revenue' , volBar: 'Marketing Mail Volume'},
    FirstClass:{underPie: 'First Class % Revenue Underwater', ccBar: 'First Class Cost Coverage', revBar: 'First Class Revenue', volBar: 'First Class Volume' },
    Periodicals:{underPie: 'Periodicals % Revenue Underwater' , ccBar: 'Periodicals Cost Coverage', revBar: 'Periodicals Revenue' , volBar: 'Periodicals Volume'},
    Services:{underPie: 'Special Services % Revenue Underwater', ccBar:'Services Cost Coverage', revBar: 'Services Revenue', volBar: 'Special Services Volume'},
  }

  

  // let selectedClass = 'MarketingMail'
  // let selectedClass = 'FirstClass'
  // let selectedClass = 'Periodicals'


//create full class-level data object
    let classData = fullData.filter(row=> row.MailClass=== selectedClass)

    //create all data arrays 
    let productData = classData.map(row=> row.MailProduct)
    let revData = classData.map(row=> row.Revenue)
    let volData = classData.map(row=>row.Pieces)
    let ccData = classData.map(row=>row.CostCoverage)
    let contData = classData.map(row=> row.ContributionPP)


    console.log("vol data", volData)
    console.log("rev data", revData)
    
    //pop off total rows 
    let arrays = [productData, revData, volData, ccData, contData]

      for(let i=0; i<arrays.length; i++){
        arrays[i] = arrays[i].pop()
      }


      //gen data for underwater percentage for dat pie 
      let underWater = classData.filter(row=> row.CostCoverage < 1).map(row=> row.Revenue).reduce((a,b)=>a+b)
      
      let overWaterTemp = classData.filter(row=> row.CostCoverage > 1)
      let overWater = 0

      if(overWaterTemp.length !=0){
        overWater = overWaterTemp.map(row=> row.Revenue).reduce((a,b)=>a+b)
      }

      let pieData = [underWater, overWater]

      function handleClassSelect(e){

        setSelectedClass(e.target.value.split(' ').join(''))
      }



      return <>
    <div className="buttonArea">
      <input type="button" value="First Class" onClick={handleClassSelect}  id="FirstClassBtn" className="classBtn"/>
      <input type="button" value="Marketing Mail" onClick={handleClassSelect} id="MarketingMailBtn" className="classBtn"/>
      <input type="button" value="Periodicals" onClick={handleClassSelect} id="PeriodicalsBtn" className="classBtn"/>
      <input type="button" value="Special Services" onClick={handleClassSelect} id="SpecialServicesBtn"className="classBtn"/>

    </div>



    <div className="chartArea">
        <div className="leftArea">
            <Pie className="pieChart" size={150} values={pieData} title={titles[selectedClass].underPie}/>

            <Bar   className ="barChart" width={400} height={200} labels={productData} values={volData} title={titles[selectedClass].volBar}/>

      </div>
        <div className="barArea">



          <Bar   className ="barChart" width={400} height={200} labels={productData} values={ccData} title={titles[selectedClass].ccBar}/>
          <Bar   className ="barChart" width={400} height={200} labels={productData} values={volData} title={titles[selectedClass].revBar}/>
      </div>
        <div className="barArea">
          
         
      

        </div>
    </div>

  

      </>

}





export default App;
