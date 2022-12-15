import React from 'react'
import Footer from './Footer'
import UserLeft from './UserLeft'
import {useState} from 'react'
function TrackingActivity() {
  const[initialDate,setInitialDate]=useState('')
  const[finalDate,setFinalDate]=useState('')
  function handleForm(e){
    e.preventDefault();
    const daterecord={initialDate,finalDate};
    fetch('/api/trackdata',{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify(daterecord)
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    })
  }
  return (
    <>
    <section id="tracking">
      <div className="container-fluid">
        <div className="row">
          
            <UserLeft/>
          
          <div className="col-md-9">
            <h2 className='text-center'>Nutrients Tracking</h2>
            <form method="post" onSubmit={(e)=>{handleForm(e)}}>
              <div className="row mt-2" >
                <div className="col-md-4">
                  <label htmlFor="" className='form-label'>Enter the Initial Date</label>
                  <input type="date" name="" id="" className='form-control'
                  value={initialDate.valueOf()}
                  onChange={(e)=>{setInitialDate(e.target.value)}}
                  placeholder='Initial Date'/>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className='form-label'>Enter the Final Date</label>
                  <input type="date" name="" id="" placeholder='Final date' className='form-control' 
                  value={finalDate.valueOf()}
                  onChange={(e)=>{setFinalDate(e.target.value)}}/>
                </div>
                <div className="col-md-4">
                <button type="submit" className='btn btn-success mt-2'>See Result</button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
     </section>
     <Footer/>
    </>
  )
}

export default TrackingActivity