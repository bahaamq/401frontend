import React, { Component } from 'react'
import axios from 'axios';
import ShowFav from './ShowFav';
class Main extends Component {

    constructor(props)
    {
        super(props)
        this.state={
showdata:false,
results:[]
        }
    }

    componentDidMount= async ()=>{
const getData= await(axios.get(`http://localhost:3002/getdata`))

this.setstate=({
    showdata:true,
    results:getData.data
})

console.log(getData.data)
this.setState ({
    showdata:true,
    results:getData.data
})



    }

    addtofavfunc= async(dig)=>{
        console.log('test'+dig.name)
     const digitem={
name:dig.name,
img:dig.img,
level:dig.level
     }

     await (axios.post(`http://localhost:3002/savedata`,digitem))

   

        //  const saveData= await axios.post()
            }
    render() {

        return (
            <div>
        
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
                        />

                       
                      )  })
                }
            </div>
        )
    }
}

export default Main
