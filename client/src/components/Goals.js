
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import '../styles/styles/goals.css'

function Goals(props) {

    useEffect(() => {
        props.onAllGoals()
    }, [])

    const handleGoalDelete = (goal) => {
        fetch(`https://sheltered-hamlet-06411.herokuapp.com/api/goals/${goal.id}`, {
            method:'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                props.onAllGoals()
            })
    }

    const goalItems = props.goals.map(goal => {
        return <ul id="goalul">
            
            <li key= {goal.id} >
            <div id="goalss" >
                <h2>MAIN GOAL</h2>
            <div >WHAT I WANT : </div>
            <div id="db">{goal.title}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO GET : </div>
            <div id="db">{goal.tf}</div><br></br>
            <div >WHEN I WILL GET IT : </div>
            <div id="db">{goal.ed}</div><br></br>
            <div>WHAT I WANT(IN DETAIL) : </div>
            <div id="db">{goal.mgd}</div>
            <br></br><br></br>

            <h2>FIRST QUARTER</h2>
            <div>I WILL : </div>
            <div id="db">{goal.sg1title}</div><br></br>
            <div>HOW LONG IT WILL  TAKE TO COMPLETE : </div>
            <div id="db">{goal.sgtf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sged}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sggd}</div><br></br>
        
            <br></br>
            <h2>SECOND QUARTER</h2>
            <div>I WILL : </div>
            <div id="db">{goal.sg2title}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO COMPLETE : </div>
            <div id="db">{goal.sg2tf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sg2ed}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sg2gd}</div><br></br>
            <br></br>

            <h2>THIRD QUARTER</h2>
            <div>I WILL : </div>
            <div id="db">{goal.sg3t}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO COMPLETE : </div>
            <div id="db">{goal.sg3tf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sg3ed}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sg3gd}</div><br></br>
            <br></br>

            <h2>FOURTH QUARTER</h2>
            <div>I WILL : </div>
            <div id="db">{goal.sg4t}</div><br></br>
            <div>HOW LONG IT WILL TAKE TO COMPLETE : </div>
            <div id="db">{goal.sg4tf}</div><br></br>
            <div>COMPLETE BY : </div>
            <div id="db">{goal.sg4ed}</div><br></br>
            <div>WHAT I WILL DO (IN DETAIL) : </div>
            <div id="db">{goal.sg4gd}</div><br></br>
            <br></br>            
            </div>
                        <button onClick = {() => handleGoalDelete(goal)}>Delete</button>

        </li></ul>
    })

    return (
        <div className="GoalsPage">
            <div className="headerGoal">Goals</div>
            <div className="goalsList">{goalItems}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        goals: state.goals
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAllGoals: () => dispatch(actionCreators.fetchGoals())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals)