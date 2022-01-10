import React, { Component } from 'react'
type LogInprops ={
    fname:string
    pass:string|number|symbol
}
export class LogIn extends Component<LogInprops> {
    state = {
             fname:'',
             pass:''
        }
    changeInput = (e:any) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit = (e:any) =>{
        if(this.state.pass=== 'sonu@123'){
            alert(` ${this.state.fname} You are Successfully LogIn`);
        }else{
            alert("Sorry Invalid User or Password");
        }
       
        e.preventDefault()
    }
    render() {
      const {fname,pass} = this.state
        return (
            <div className='tc bg-green w-40 h5 ba br4 mt5 ml5'>
                <h1>LogIn Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className=''>UserName</label>
                <input className='pa2 mb2 ml1 br2'
                type="text" name='fname' value={fname} onChange={this.changeInput} 
                /><br/>
                <label>Password </label>
                <input className='pa2 mb2 ml1 br2'
                type="password" name='pass' value={pass} onChange={this.changeInput} /><br/>
                <button className='pa2 ph4 mb2 ml1 br2'
                type='submit'>LogIn</button>
                </form>
            </div>
        )
    }
}

export default LogIn
