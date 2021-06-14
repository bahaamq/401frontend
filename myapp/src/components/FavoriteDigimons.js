import React, { Component } from 'react'
import axios from 'axios';
import ShowFav from './ShowFav';
class FavoriteDigimons extends Component {

    constructor(props)
    {
        super(props)
        this.state={
showdata:false,
results:[],
showupdateform:false,
name:'',
img:'',
level:'',
index2:0
        }
    }

    componentDidMount= async ()=>{
        const getData= await(axios.get(`http://localhost:3002/getfavdata`))
     
        this.setState ({
            showdata:true,
            results:getData.data
        })
        
    
        
        
        
            }

            removehandler= async(index)=>{
const id=this.state.results[index]._id

const getData=await (axios.delete(`http://localhost:3002/deletefav/${id}`))

this.setState ({
    showdata:true,
    results:getData.data
})


            }



            updatehandler=async(index)=>{
                const id=this.state.results[index]._id
const newitem = this.state.results[index]

this.setState({
    showupdateform:true,
    name:this.state.results[index].name,
    img:this.state.results[index].img,
    level:this.state.results[index].level,
    index2:id,
    item:newitem

})
            }



            updatename=(event)=>{
let getname =event.target.value



this.setState({
    name:getname,

})
            }


            
updateimg=(event)=>{
    let getimg =event.target.value
    
    
    
    this.setState({
        img:getimg,
    
    })

            }


            
updatelevel=(event)=>{
    let getlevel =event.target.value
    
    
    
    this.setState({
        level:getlevel,
    
    })

            }


            updatedata= async(e)=>
            {
e.preventDefault()
const id=this.state.index2
const result =this.state.newitem
const updateres= await axios.put(`http://localhost:3002/updatefav/${id}`,result)

this.setState({
   results:updateres.data,
   showdata:true,

})
            }


    render() {

        return (
            <div>
        {
            this.state.showupdateform &&
        <form>
        <h1>Hello</h1>
        <p>Enter name:</p>
        <input
          type="text" value={this.state.name}
          onChange={this.updatename}

          />

<p>Enter img:</p>
          <input
          type="text" 
          value={this.state.img}
          onChange={this.updateimg}

        />

<p>Enter level:</p>
          <input
          type="text"
          value={this.state.level}

          onChange={this.updatelevel}
        />
        <input
        type='submit' 

        onClick={e=> this.updatedata(e)}
      />
      </form>
               

               }
        {


this.state.showdata &&
this.state.results.map((item,idx)=>{
    return(
    <ShowFav 
    index={idx}
    dig={item}
    name={item.name}
    img={item.img}
    level={item.level}
    addtofav={this.addtofavfunc}
    removehandler={this.removehandler}
    updatehandler={this.updatehandler}
    />

   
  )  })
}


            </div>
        )
    
}}

export default FavoriteDigimons;
