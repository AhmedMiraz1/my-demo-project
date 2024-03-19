
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';



const Phones = () => {

    const [Phones, setPhones]=useState([])

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
             const phoneData = data.data.data
             const phoneWithFakeData = phoneData.map(phone => {
                const obj ={
                    name: phone.phone_name,
                    price:parseInt(phone.slug.split("-")[1])
                }
                return obj
             })
             setPhones(phoneWithFakeData)
        })
    }
    ,[])
    return (
        <div className="mt-24">
            <h1 className="text-3xl mb-11">Phones: {Phones.length}</h1>
            <BarChart width={1450} height={840} data={Phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <CartesianGrid></CartesianGrid>
          <Cell></Cell>
        </BarChart>
        </div>
    );
};

export default Phones;