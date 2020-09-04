import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),
            data: []
        }
    }

    handleChange = date => {
        const { userDetails } = this.props
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec']
        let selectedMonth = months[date.getMonth()]
        let selectedDay = date.getDate()
        let selectedYear = date.getFullYear()
        let selectedDate = selectedMonth + ' ' + selectedDay + ' ' + selectedYear

        const currData = userDetails && userDetails.activity_periods.filter(e => e.start_time.includes(selectedDate))
        this.setState({
            startDate: date,
            data: currData
        });
    };

    componentDidMount = () => {
        let currentDate = new Date()
        this.handleChange(currentDate)
    }

    render() {
        const { userDetails } = this.props
        const { data, startDate } = this.state        
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <iframe src="https://giphy.com/embed/3oz8xKaR836UJOYeOc" width="200" height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-12'>
                                <h6>Name of the user : {userDetails.real_name}</h6>
                                <hr />
                                <div>Select a date :
                                <DatePicker
                                        className='ml-3'
                                        selected={startDate}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
                                {
                                    data && data.length !== 0 ?
                                        data.map(time => (
                                            <div className="card text-white bg-dark p-1 my-3" key={uuidv4()}>
                                                <div className="card-body">
                                                    <p className="card-text">Start time : {time.start_time}</p>
                                                    <p className="card-text">End time : {time.end_time}</p>
                                                </div>
                                            </div>
                                        ))
                                        :
                                        <div className='mt-3'>Sorry no data available for selected day, Please select some other day from calendar</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
