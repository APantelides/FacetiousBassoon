import React from 'react';
import { Link, browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
var moment = require('moment');


const style = {
  paper: {
    height: '70px',
    width: '500px',
    margin: '90px 0px 50px 400px',

  },

  // text: {
  //   margin: '0 0 20px 500px'
  // },

  h3: {
    display: 'flex',
    // textAlign: 'center',
    // verticalAlign: 'middle',
    margin: '0px 0px 0px 120px'

  },

  create: {
    display: 'flex',
    margin: '0px 0px 0px 160px'
  }


  // h4: {
  //   // display: 'inline-block',
  //   width: 400,
  //   margin: '0 0 0 0'

  // },

  // button: {
  //   float: 'right',
  //   height: 30,
  //   width: 80
  // },
  // tableCNT: {
  //   // textAlign: 'center'
  // },
  // tableRGT: {
  //   margin: '0px 90px 0px 0px'
  // }
};


// const style = {
  // height: '200px',
  // width: '600px',
  // margin: '100px 20px 20px 340px',
  // textAlign: 'center',
  // display: 'center'
// };

export default function (props) {

  if (props.challenges.length > 0) {

    return (

      <div>
      <Paper style={style.paper} zDepth={1}>
        <h3 style={style.h3}>Your current challenges</h3>
      </Paper>

        <table className="table">
          <tbody>
            <tr className="thead-inverse">
                <th>Challenge ID</th>
                <th>Challenge Goal</th>
                <th>Current Stats</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Challenge Status</th>
                <th></th>
            </tr>

          {props.challenges.map((challenge, index) => {
            // console.log(index);
            return (
                    <tr key={index}>
                      <td style={style.tableCNT}>{challenge.id}</td>
                      <td className=''>{challenge.challengeGoal + ' ' + challenge.challengeType}</td>
                      <td className=''>{challenge.challengeCurrent + ' ' + challenge.challengeType}</td>
                      <td className=''>{moment(challenge.creationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
                      <td className=''>{moment(challenge.expirationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
                      <td className=''>{challenge.status}</td>
                      <td onClick={()=> props.deleteChallenge(index)} key={index} style={style.button} href="#" className="btn btn-xs btn-danger"><span className="glyphicon glyphicon-remove-sign" ></span> Delete</td>
                    </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <Paper style={style.paper}zDepth={1}>
          <h3 style={style.h3}>Create a challenge!</h3>
          <button style={style.create} className="btn btn-success" onClick={()=> browserHistory.push('/newChallenge')}>Create Challenge</button>
        </Paper>
      </div>
      );
  }

}


      // <Paper style={style.paper} zDepth={1}>
      //   <span><h4 style={style.h4}>Walk 10,000 steps in one day</h4></span>
      //   <span style={style.button}href="#" className="btn btn-primary btn-warning"><span className="glyphicon glyphicon-flash"></span> GO!</span>
      // </Paper>