import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { users } = this.props
        return (
            <div className='d-flex align-items-center flex-column'>
                {
                    users && users.map(user => (
                        <div className='card my-3 bg-warning' style={{ width: '30%' }}>
                            <div key={user.id} className="media">
                                <img src="/profilepic.png" className="align-self-start mr-3 p-2" alt="..." style={{ height: "70px", width: "70px" }} />
                                <div className="media-body">
                                    <h5 className="mt-2 font-weight-bold" style={{fontSize:'1.5vw'}}>User Name : {user.real_name}</h5>
                                    <small className="text-muted font-italic" style={{fontSize:'1vw'}}>User Id : {user.id}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
