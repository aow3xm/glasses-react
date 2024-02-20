import React, { Component } from 'react'

export default class SelectGlasses extends Component {
  render() {
    let {data, handleChangeGlass} = this.props;
    return (
        <div style={
            {maxWidth: '80%'}
        } className='py-5 my-5 bg-white mx-auto'>
        <div className='' style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        
        }}>
        {data.map((item, index) => (
          <button key={index} style={{
            width: '100px',
            height: '30px',
            overflow: 'hidden',
            margin: '10px',
          
          }} onClick={
            ()=>{
                console.log(item)
                handleChangeGlass(item)
            }
          }>
            <img style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          
          }} key={index} src={item.url}></img>
          </button>
        ))}
        </div>
      </div>
    )
  }
}
