import React, { Component } from 'react'

export default class ModelCard extends Component {
    render() {
    let {Image, GlassImage, Name,  Desc} = this.props;
    return (
      <div style={
        {
          position: 'relative',
          width: '300px',
          height: '100%',
        }
      }>
          <div style={
  {
    backgroundColor: 'rgba(255, 165, 0, 0.4)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '30%',
    overflow:'auto'
  }
}>
  <h3 style={
    {color: 'blue', fontSize: '20px'}
  }>{Name}</h3>
  <p style={{color:'white', fontSize:'14px'}} >{Desc}</p>
</div>
        
        
        <img style={
            {
                width: '60%',
                objectFit: 'contain',
                position: 'absolute',
                top: '25%',
                left: '20%',
                zIndex: 1,
                opacity: 0.8
            }
        } src={GlassImage}></img>
        <img style={
            {
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        } src={Image}></img>
      </div>
    )
  }
}
