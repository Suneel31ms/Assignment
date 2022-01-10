import React, { Component } from 'react';
import { ShopList } from './ShopList';
type Homeprops = {
    props:any
}
type Homestate = {
    jname:string
}
 class Home extends Component<Homeprops, Homestate> {
     state = {
              jname:'MENS/WOMENS JACKETS'
     }
     
    render() {
        const {jname} = this.state
        return (
            <div className='tc green'>
               <h1> {jname}</h1>
                <ShopList/>
                
            </div>
        )
    }
}

export default Home
