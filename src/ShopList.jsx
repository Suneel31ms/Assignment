import React, { Component } from 'react'
import Card from './Card'
import { Jackets } from './Jackets'
export class ShopList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jacket:Jackets
        }
    }
    
    render() {
        const {jacket} = this.state
        return (
            <div>
                {
                    jacket.map(jacket=>{
                        return(
                            <Card key={jacket.id} 
                            id={jacket.id}
                            name={jacket.jname}
                            rupee={jacket.rs}
                            imgUrl={jacket.urlImage}
                            />
                        )
                      
                    })
                }
            </div>
        )
    }
}

