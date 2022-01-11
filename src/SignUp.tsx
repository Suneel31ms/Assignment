import React, { Component } from 'react'
 class SignUp extends Component {
     state = {
            username:'',
            email:'',
            phone:'',
            age:'',
            city:'',
            npass:'',
            cpass:''

         }
         changeHandle = (event:any)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
         }
         handleSubmit =(event:any)=>{
            if (this.state.npass===this.state.cpass) {
                alert(`${this.state.username} you are successfully Register`);
            } else{
                alert("Please fill Correctly");
            }
            event.preventDefault();
         }
    render() {
        return (
            <div className='tc bg-green w-40  ba br4 mt5 ml5 pa3'>
                <h2>SIGN UP PAGE</h2>
            <form onSubmit={this.handleSubmit} className='pa2'>
           <div className='ma3 flex justify-between'>
           <label>Name</label>
              <input type="text" name='username'  onChange={this.changeHandle} required  className='pa2 w-60 br3 ba'/>
           </div>
              
              <div className='ma3 flex justify-between'>
              <label>Email Id</label>
              <input type="email" name='email' onChange={this.changeHandle} required className='pa2 w-60 br3 ba'/>
              </div>
             
             <div className='ma3 flex justify-between'>
             <label>Phone</label>
              <input type="text" name='phone' onChange={this.changeHandle} required className='pa2 w-60 br3 ba'/>
             </div>
             
             <div className='ma3 flex justify-between'>
             <label>Age</label>
              <input type="number" name='age' onChange={this.changeHandle} 
              className='w3' min={18} max={60} required />
             </div>
            
             <div className='ma3 flex justify-between'>
             <label>City</label>
              <input type="text" name='city' onChange={this.changeHandle} required className='pa2 w-60 br3 ba'/>
             </div>

              <div className='ma3 flex justify-between'>
              <label>New Password</label>
              <input type="text" name='npass' onChange={this.changeHandle} required className='pa2 w-60 br3 ba'/>
              </div>
              
             <div className='ma3 flex justify-between'>
             <label>Confirm Password</label>
              <input type="text" name='cpass' onChange={this.changeHandle} required className='pa2 w-60 br3 ba'/>
             </div>
              <button type='submit' className='pa2 w-30 br3 ba b bg-gray'>Submit</button>
            </form>
            </div>
        )
    }
}

export default SignUp
