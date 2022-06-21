import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./App.css"
import { BiFilter, BiSort } from "react-icons/bi";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';




const Cards=()=> {

    const[fake, setFake]=useState([]);
    const[searchTerm, setSearchTerm] = useState("");
    const[filt, setFilt] = useState("");
    const[sorted, setSorted] = useState("asc");
    
    useEffect(()=>{
        fakestore();
    },[])
    const fakestore = async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    
    const jsonData = await response.json();
    
    setFake(jsonData);
    }
    

    return(
        
    <>   
    <div className="container cardsct">
    <div className="cardft">
        
        <div className="ftstr">   
        <BiSort/>
        <NavDropdown title="Sort By" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={(event)=> {
                // setSorted("asc")
                // console.log(sorted)
                
                }}> Ascending</NavDropdown.Item>
            <NavDropdown.Item onClick={(event)=> {
                // setSorted("dsc")
                // console.log(sorted)
                }}> 
                Descending
                </NavDropdown.Item>
        </NavDropdown>
        <BiFilter/>
        <NavDropdown title="Filter By" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={(event)=> {
                setFilt("men's clothing");
                
              }}>Men's Clothing</NavDropdown.Item>
                <NavDropdown.Item onClick={(event)=> {
                setFilt("women's clothing");
                
                
              }}>
                    Women's Clothing
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(event)=> {
                setFilt("electronics");
                
              }}>
                    Electronics
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(event)=> {
                setFilt("jewelery");
                
              }}>
                    Jewelery
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={(event)=> {
                setFilt("");
                
              }}>
                    Show All
                </NavDropdown.Item>
        </NavDropdown>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=> {
                setSearchTerm(event.target.value);
              }}
            />
        </Form>

        </div>
     </div>
    <div className="cardet">
    
    {fake.filter((values)=>{
         if(searchTerm === "" && filt === ""){
             return values
         } else if (values.title.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm !== ""){
            
            return values
             
         } else if (values.category.toLowerCase() === (filt.toLowerCase()) && filt !== ""){
            
            return values
        //  } else if (sorted == "asc"){
            
        //     return values.sort((a, b) => a.values.id - b.values.id)
         }
         

        
    }).map((values)=>{
        return(
            <>
            <Card className="cards1" border="light" style={{ width: '18rem' }}>
            <p className="catname">{values.category}</p>
    <Card.Img className="inImg" variant="top" src={values.image} />
    <Card.Body>

    <Card.Title className="ctttl">{values.title}</Card.Title>
    <Card.Text className="cttxt">
        
        {values.description} 
        
    </Card.Text>
    <Button variant="primary" type="submit">AED {values.price}</Button>
    
    </Card.Body>
    </Card>
            </>
        )
    })}
    
    

    
    </div>
    </div>
    </>
    )
  
}

export default Cards;





