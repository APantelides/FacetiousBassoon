
import React, {Component} from 'react';
import { Link, browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
var moment = require('moment');

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';


import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import {pinkA200, transparent} from 'material-ui/styles/colors';

import Subheader from 'material-ui/Subheader';

import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


const style = {

  chip: {
    margin: 4,
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  paper: {
    height: '70px',
    width: '500px',
    margin: '90px 0px 50px 400px',

  },

  h3: {
    display: 'flex',
    // textAlign: 'center',
    // verticalAlign: 'middle',
    margin: '0px 0px 0px 120px'

  },

  create: {
    display: 'flex',
    margin: '0px 0px 0px 160px'
  },

  list: {
    flex: 1,
    width: '450'

  }

};





const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Join</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);








class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleChallengeRequest = this.handleChallengeRequest.bind(this);

  }


  handleChallengeRequest() {
    console.log('You clicked the challenge button.');


  }









  render () {

    return (
      <div>
      <Paper style={style.paper} zDepth={1}>
        <h3 style={style.h3}>See Your Friends Challenges</h3>
      </Paper>

      {this.props.friendsChallenges.map((challenge, index) => {
        return (
        <div>

         <List style={style.list}>
            <Subheader>{challenge.status}</Subheader>
            <ListItem
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              rightIconButton={rightIconMenu}
              primaryText={challenge.challengeGoal + ' ' + challenge.challengeType}
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>{'Starts: ' + moment(challenge.creationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span><br />
                  {'Ends: ' + moment(challenge.expirationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </List>
        </div>
      );
      })}


      </div>

    );

  }
}

const mapStateToProps = function(store) {
  return {
    store

  };
};
// users are now props on UserListContainer
export default connect(mapStateToProps)(Profile);











// <table className="table">
//           <tbody>
//             <tr className="thead-inverse">
//                 <th>Challenge ID</th>
//                 <th>Challenge Goal</th>
//                 <th>Current Stats</th>
//                 <th>Start Date</th>
//                 <th>End Date</th>
//                 <th>Challenge Status</th>
//                 <th></th>
//             </tr>

//           {this.props.friendsChallenges.map((challenge, index) => {
//             var joinChip;
//             if (challenge.status === 'active') {
//               joinChip =
//                 <Chip
//                   onRequestDelete={this.handleChallengeRequest}
//                   style={style.chip}
//                   >
//                   <Avatar color="#444" icon={<SvgIconFace />} />
//                   Join Challenge!
//                 </Chip>;
//             }

//             return (
//               <tr key={index}>
//                 <td className=''>{challenge.id}</td>
//                 <td className=''>{challenge.challengeGoal + ' ' + challenge.challengeType}</td>
//                 <td className=''>{challenge.challengeCurrent + ' ' + challenge.challengeType}</td>
//                 <td className=''>{moment(challenge.creationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
//                 <td className=''>{moment(challenge.expirationDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
//                 <td className=''>{challenge.status}</td>
//                 {joinChip}
//               </tr>
//             );
//           })}
//           </tbody>
//         </table>