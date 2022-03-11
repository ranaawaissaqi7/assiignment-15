import React from 'react';
import { useState } from 'react';

export default function Form() {

    // view buttun
  const [viewName, setViewName] = useState("")
  const [viewFName, setViewFName] = useState("")
  const [viewEmail, setViewEmail] = useState("")
  const [viewIndex, setViewIndex] = useState()

    //state of static data employe

    const [empolyeesData, setemployeesData] = useState([
        {
            fname: "Awais",
            lname: "Ilyas",
            email: "awaisilyas333@gmail.com",
        },

        {
            fname: "Azam",
            lname: "Nazim",
            email: "azamnazim222@gmail.com",
        },

        {
            fname: "Adress",
            lname: "Mujeeb",
            email: "adreesmujeeb111@gmail.com",
        }
    ])

    //use State View data danamacaliy

    const [employecard, setEmployeCard] = useState("")

    const [employeID, setEmployeID] = useState()

    const [employeFName, setEmployeFName] = useState("")

    const [employeLName, setEmployeLName] = useState("")

    const [employeEmail, setEmployeEmail] = useState("")

    //use state danamicaly data from user

    const [firstName, setFirstName] = useState("")

    const [lastName, setLastName] = useState("")

    const [Email, setEmail] = useState("")

    //set flage

   // const [flag, setflag] = useState(false)


    //setupdate index

    const [updateIndex, setUpdateIndex] = useState()

    //add employe Handler Function

    const addEmployeHandler=()=>{

        if (firstName!=="" && lastName!=="" && Email!=="" ) {
            
        
        let newEmployeesAddData={
            fname:firstName,
            lname:lastName,
            email:Email
        }
        console.log( "new emplo",newEmployeesAddData)
        setemployeesData([...empolyeesData,newEmployeesAddData])

        setFirstName("");
        setLastName("");
        setEmail("");
        
        
    }
    else{
        alert("Please Enter Data All Fieald!")
    };

    }

    //employe update handler function

    const updateHandler=(employe,index)=>{
            setUpdateIndex(index)
            setFirstName(employe.fname);
            setLastName(employe.lname);
            setEmail(employe.email);
           // setflag(true)
       
    }

    //dele employe function

    const deleteHandler=(index)=>{
       let deleteData= empolyeesData.filter((employe,i)=>{
            if (i!==index) {
                return employe
            };

        })
        setemployeesData([...deleteData])
    }

    //cta update handler
    const ctaUpdateHandler=()=>{
        if (firstName!=="" && lastName!=="" && Email!=="" ){
        let newEmployeesAddData={
            fname:firstName,
            lname:lastName,
            email:Email,
        }
        let updateEmployeData=empolyeesData.map((em,index)=>{
            if(updateIndex===index){
                return newEmployeesAddData;
            }
            else{
                return em;
            }
        })

       
        
        setemployeesData([...updateEmployeData])
        setFirstName("")
        setLastName("")
        setEmail("")
       // setflag(true)
    }

    else{
        alert("Please Enter Data All Fields! ")
    }

   }

   //employe view function

   const viewHandler=(employe,index)=>{
       setViewIndex(index+1)
       setViewName(employe.fname)
       setViewFName(employe.lname)
       setViewEmail(employe.email)
       
       setEmployeCard("Employe ID Card")
       setEmployeID("ID")
       setEmployeFName("First Name")
       setEmployeLName("Last Name")
       setEmployeEmail("Email")
   }

   // delete ID Card Buttun

   function deleteIDHandler(){
    setViewIndex("")
    setViewName("")
    setViewFName("")
    setViewEmail("")                           
                                    
    setEmployeCard("")
    setEmployeID("")
    setEmployeFName("")
    setEmployeLName("")
    setEmployeEmail("")
   }





    return (
        <div className="container-fluid bg-dark text-white ">
            <div className="container-fluid">

                <div className="row ">
                    <div className="col-md-12  text-center text-black">
                        <h1 className="text-danger"> Add Empolyees</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-4 ">


                        <div className="col">
                            <input  type="text" value={firstName} className="form-control"  placeholder="First name" aria-label="First name" onChange={(e)=>setFirstName(e.target.value)} />
                            
                        </div>

                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <div className="col-md-4 ">


                        <div className="col">
                            <input type="text" value={lastName} className="form-control" placeholder="last name" aria-label="First name" onChange={(e)=>setLastName(e.target.value)} />
                        </div>

                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <div className="col-md-4 ">


                        <div className="col">
                            <input type="email" value={Email} className="form-control" placeholder="Email" aria-label="First name" onChange={(e)=>setEmail(e.target.value)} />
                        </div>

                    </div>
                </div>

                <div className="row justify-content-center mt-3">
                    <div className="col-md-4 ">


                        <div className="col">

                                
                                <button className="btn btn-outline-secondary text-white" onClick={addEmployeHandler}>Add Empolye</button>

                                 <button className=" ms-2 btn btn-outline-info ms-2" onClick={ctaUpdateHandler}>Update</button>                            
                        </div>

                    </div>
                </div>


            </div>

            <div className="container mt-3 ">
                <div className="row justify-content-center ">
                    <div className="col-12 text-center">
                    <h1 className="text-success">Empolyees List</h1>    
                    </div>
                    <div className="col-md-12 mt-3 text-white">
                        
                        <table class="table table-striped table-hover text-center text-white d">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                           {
                               empolyeesData.map((employe,index)=>{
                                   return(

                                   
                                   <tr>
                                       <th className="text-white">{index+1}</th>
                                       <td className="text-white">{employe.fname}</td>
                                       <td className="text-white">{employe.lname}</td>
                                       <td className="text-white">{employe.email}</td>
                                       <td><button className="btn btn-outline-danger  " onClick={()=>deleteHandler(index)}>Delete</button></td>
                                       <td><button className="btn btn-outline-info" onClick={()=>updateHandler(employe,index)}>Update</button></td>
                                       <td><button className="btn btn-outline-success" onClick={()=>viewHandler(employe,index)}>View</button></td>
                                       
                                   </tr>
                                   )
                               })
                           }
                            </tbody>
                         </table>

                         

                    </div>
                </div>
            </div>

            <div className="container mt-5">
            <div className="row ">
    
            <div className="col-md-6 offset-md-3 col-12">
                <h4 className="text-center">{employecard}</h4>
            <table className="table">
                            <thead>
                            </thead>
                            <tbody className="text-white">
                           
                            
                            <tr>
                                <th>{employeID}</th>
                                <td>{viewIndex}</td>
                            </tr>

                            <tr>
                                <th>{employeFName}</th>
                                <td>{viewName}</td>
                            </tr>
                            
                            <tr>
                                <th>{employeLName}</th>
                                <td>{viewFName}</td>
                            </tr>

                            <tr>
                                <th>{employeEmail}</th>
                                <td>{viewEmail}</td>
                            </tr>


                            
                           
                            </tbody>
                         </table>

            </div>
            <div className="col-md-3 col-4 offset-4 offset-md-5  mt-2">
            <button className="btn btn-outline-danger" onClick={deleteIDHandler}>Delete ID</button>    
            </div>

            </div>    
            </div> <br/>
            <div class="btn-group-vertical">

</div>

        </div>
    )
}
