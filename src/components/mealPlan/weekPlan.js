import React from 'react'
import DragDropBox from "./DragDropBox";
export default class WeekPlan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div>
                <div>
                    <table className="mealplan">
                        <thead>
                        <tr className="plan-header">
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}