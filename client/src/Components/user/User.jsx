import React, { Component } from 'react'
import Modal from '../modal/Modal'

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
                        <React.Fragment key={user.id}>
                            <div className='card my-3 bg-warning' data-toggle="modal" data-target={`#${user.id}`} style={{ width: '30%' }}>
                                <div className="media">
                                    <img src="/profilepic.png" className="align-self-start mr-3 p-2" alt="..." style={{ height: "70px", width: "70px" }} />
                                    <div className="media-body">
                                        <h5 className="mt-2 font-weight-bold" style={{ fontSize: '1.5vw' }}>Name : {user.real_name}</h5>
                                        <div className='d-flex'>
                                            <div className="text-muted mr-auto font-italic" style={{ fontSize: '1vw' }}>Userid : {user.id}</div>
                                            <div className="text-muted ml-auto mr-2 font-italic" style={{ fontSize: '1vw' }}>{user.tz}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id={user.id} tabIndex="-1" role="dialog" aria-labelledby={user.real_name} aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={user.real_name}>All time ranges during which user was active.</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <Modal userDetails={user}/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        )
    }
}
