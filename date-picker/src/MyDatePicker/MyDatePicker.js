import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import './MyDatePicker.css';

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

export default class MyDatePicker extends Component {
    state = {
        getMonthDetails: []
    }

    componentDidMount() {
        window.addEventListener('click', this.addBackdrop);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.addBackdrop);
    }

    addBackdrop = (e) => {
        if(this.state.showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target)) {
            this.showDatePicker(false);
        }
    }

    showDatePicker = (this.showDatePicker = true) => {
        this.ListeningStateChangedEvent({ showDatePicker})
    }

    render() {
        return (
            <>
                <div className="MyDatePicker" />
                <div className='mdp-input' onClick={() => this.showDatePicker(true)}></div>
            </>
        )
    }
}