import React from 'react'
import './ovqat.css'
import { db } from '../config'
import {doc, setDoc} from "firebase/firestore"

const Issiq = ({val}) => {
  return (
    <div>
        
         <div className="card-3">
                    <img className="card-photo" src={val?.image} alt="" />
                    <p className="p0">
                        {val?.name}
                    </p>
                    <div className="card-2">
                    <p className="p6">
                    <strong>{val?.price}</strong>
                  </p>
                  <a href="/korzina" onClick={async() => {
                    const cityRef = doc(db, 'ovqat', product.id)
                    await setDoc(cityRef, {...product, card: true}, )
                  }}>
                  <img className="card-foto" src="/icon4.svg" alt="" />
                  </a>
                    </div>
                </div>
    </div>
  )
}

export default Issiq