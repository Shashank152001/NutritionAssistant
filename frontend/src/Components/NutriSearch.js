import React from 'react'
import Footer from './Footer'
import UserLeft from './UserLeft'
import {LoginContext} from '../LoginContext'
import {useState,useEffect,useContext} from 'react'
import Spinner from './Spinner'

function NutriSearch() {
  const{userLoginName}=useContext(LoginContext)
  const[foodname,setFoodName]=useState('')
  const[food,setFood]=useState('')
  const[message,setMessage]=useState('')
  const[showdata,setShowdata]=useState(false)
  const[nodata,setNodata]=useState(false)
  const[load,setLoad]=useState(false)

  function handleform(e){
    setLoad(true)
    
    e.preventDefault();
    const formData={foodname}
    // console.log(formData);
    fetch('/api/foodsearch',{
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(formData)
    }).then((res)=>{return res.json()}).then((data)=>{
      // console.log(data);
      // setFood(data)
      // setMessage(data.message)
      // console.log(data.message);
      
      if(data._id){
        setLoad(false)
        console.log(data)
        setNodata(false)
        setShowdata(true)
        setMessage('')
        
        setFood(data)
      }else{
        setLoad(false)
        setMessage("Data not found")
        setNodata(true)
        setShowdata(false)
      }
      
    })
  }
  function saveDate(){
    alert('You Serach has been Saved')
    fetch(`/api/diaryData/${userLoginName}`,{
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify(food)
    })
  }
  useEffect(()=>{
    // fetch('/api/foodsearch')
    // .then((res)=>{return res.json()})
    // .then((data)=>{console.log(data)
    //     setFood(data)
    //     console.log(food)
    // })
},[])
  
  return (
    <>
     <section id="nutrisearch">
      <div className="container-fluid">
        <div className="row">
          
            <UserLeft/>
          
          <div className="col-md-9">
            <h2 className='text-center text-secondary mt-2'>Search To know the nurtients</h2>
            
              <div className="row">
                <div className="col-md-4">
                <img src="/images/food1.jpg" className='img-fluid mx-auto d-block w-90 h-100' alt="" />
                </div>
                
                <div className="col-md-5">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor, sed earum perferendis itaque vero ab rem molestiae! Architecto, id ducimus. Consectetur laborum quisquam consequuntur quia possimus sapiente ratione nulla?</p>
                </div>
              </div>
              <br />
                <br />
              <div className="row">
                <div className="col-md-4">
                  {message}
                  <form method="post" onSubmit={(e)=>{handleform(e)}}>
                  <label htmlFor="" className='form-label text-secondary'>Search Nutrients By Name</label>
                  <input type="text" name="" id="" placeholder='Food Name' 
                  value={foodname.toLowerCase()}
                  onChange={(e)=>{setFoodName(e.target.value)}}
                  className='form-control'/>
                  <button className='btn btn-success mt-2 mb-2' type='submit'>Search</button>
                  </form>
                  
                </div>
                <div className="col-md-4">
                  <form method="post">
                  <label htmlFor="" className='text-secondary form-label'>Search Nutrition Using Image</label>
                  <input type="file" name="" id="" className='form-control'/>
                  <button type="submit" className='btn btn-success mt-2 mb-2'>Search</button>
                  </form>
                  
                </div>
              </div>
              <>
              {load&&<Spinner/>}
              {showdata&&<table className='table table-hover mt-2'>
                <thead>
                <tr>
                  <th>Nutritent</th>
                  <th>Value</th>
                </tr>
                </thead>
               <tbody>
               <tr>
                  <th>Foodname</th>
                  <td>{food.foodname}</td>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>{food.protein} g</td>
                </tr>
                <tr>
                  <th>Fat</th>
                  <td>{food.fat} g</td>
                </tr>
                <tr>
                  <th>Carbodydrate</th>
                  <td>{food.carbohydrate} g</td>
                </tr>
                <tr>
                  <th>VitaminA</th>
                  <td>{food.vitaminA} ug</td>
                </tr>
                <tr>
                  <th>VitaminB-12</th>
                  <td>{food.vitaminB12} ug</td>
                </tr>
                <tr>
                  <th>VitaminC</th>
                  <td>{food.vitaminC} ug</td>
                </tr>
                <tr>
                  <th>Calcium</th>
                  <td>{food.calcium} mg</td>
                </tr>
                <tr>
                  <th>Iron</th>
                  <td>{food.iron} mg</td>
                </tr>
                <tr>
                  <th>Fiber</th>
                  <td>{food.fiber} g</td>
                </tr>
                <tr>
                  <th>Energy</th>
                  <td>{food.energy} kJ</td>
                </tr>
                <tr>
                  <th>Action</th>
                  <td><button className='btn btn-success' onClick={saveDate}>Save</button></td>
                </tr>
               </tbody>
                
              </table>}
              {nodata&&<table className='table table-hover'>
                <thead>
                <tr>
                  <th>No Record </th>
                </tr>
                </thead>
                
              </table>}
              
              </>
          </div>

        </div>
      </div>
     </section>
     
     <Footer/>
    </>
  )
}

export default NutriSearch