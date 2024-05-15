'use client'
import React, { useEffect, useState } from "react";
import './page.css'
import Navbar from "../navbar/page";
import Issiq from "../issiq/page";
import { db } from "../config";
import {getDocs, doc, collection, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";


const Goryache = ( ) => {
    const router = useRouter()
  const [products, setProducts] = useState([])
  const bludo = collection(db, 'ovqat')
  useEffect(() => {
    const getOvqat = async () => {
      const data = await getDocs(bludo)
      setProducts(() => {
        const aray = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return aray.filter(product => {
          return product.card?product.card:false
        })
        
      })
    };
    getOvqat();
  }, [])
    return(
        <>
        <div className="car">
            <Navbar/>
         {products.map(val => (
          <Issiq key={val.id}
          val={val}
          />
         ))}
        </div>
        <button className="knopka-3" onClick={() => router.push('./oplata')}>oplata</button>
        </>
    )
}

export default Goryache;