import axios from "axios";
import { useState } from "react";

const  loginController = () => {
    const fetchData= async() => {
        try{
            data = await axios.get("")
            .then((res)=>{
                
            })
        } catch(error){
            print("error al obtener los datos: "+ error)
        }
        
    }
};