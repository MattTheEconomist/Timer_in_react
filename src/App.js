import React, { useEffect, useState } from 'react';
import './App.css';
import  { csv } from 'd3';
import * as d3 from'd3';
import Bar from './charts/bar.js'
import data from './CRA.csv';
// import FilterReturnTotals from './filterReturnTotals.js'





function App() {
  const [mmData, setMmData] = useState({})
  const [otherObj, setOtherObj]= useState({})
  const[didLoad, setDidLoad] = useState(false)


      useEffect(()=>{
        d3.csv(data, d=>{
          return{
            MailProduct: d.MailProduct, 
            MailClass: d.MailClass, 
            Revenue: parseInt(d.Revenue),
            AttributableCost: parseInt(d.AttributableCost),
            VVCost:parseInt(d.VVCost),
            RevenuePP: parseFloat(d.RevenuePP),
            AttributableCostPP: parseFloat(d.AttributableCostPP),
            VVCostPP: parseFloat(d.VVCost),
            ContributionPP: parseFloat(d.ContributionPP),
            CostCoverage: parseFloat(d.CostCoverage),
            Pieces: parseInt(d.Pieces),
            Weight: parseInt(d.Weight),
            WeightPP: parseFloat(d.WeightPP)
          }
        }).then(data=>{
          // mmData = data.filter(row=>row.MailClass ==="Marketing Mail")
          // globalData = data.filter(row=>row.MailProduct.includes("Total"))
          // setTestDat(mmData)
          let temp = data.filter(row=>row.MailClass ==="Marketing Mail")
          setMmData(temp)
          setDidLoad(true)
          // console.log(mmData)
        })
      }, [didLoad])

      // useEffect(()=>{
      //   console.log(testDat)
      // },[testDat])
      useEffect(()=>{
        setOtherObj({a:1})
        // console.log('otherObj', otherObj)
      }, [])



  return (
    <div className="App">
          <h2>Postal Dashboard</h2>
          <h5></h5>

        <Bar  width={200} height={200} inputData={mmData} other={otherObj} />

    </div>
    
  )
}

export default App;
