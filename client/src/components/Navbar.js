import { Component } from "react";
import { NavLink} from "react-router-dom";
import '../styles/styles/navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="Nav">
                <NavLink to ="/"><div className="home">Home</div></NavLink>
                <NavLink to = "/add-goal"><div className="addaGoal">Add A Goal</div></NavLink>
                <NavLink to ="/goals"><div className="Goals">Goals</div></NavLink>
            </div>        
            )
    }
}

export default Navbar