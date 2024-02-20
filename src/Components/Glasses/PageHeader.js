import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h3 className='text-center py-5 text-white' style={
          {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }
        }>TRY GLASSES APP ONLINE</h3>
      </div>
    )
  }
}
