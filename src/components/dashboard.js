import React, { Component } from 'react';
import '../css/dashboard.css';
import tugetherLogo from '../images/tugether_logo.png';
import tugetherText from '../images/tugether_logo.svg';
import tugetherCircle from '../images/circle_logo.svg';
import tugetherRectangle from '../images/rectangle_logo.svg';

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'Mujida',
      recentPartners: [
        {id:1, userName: 'Rosales', curriculum: 'React.js'},
        {id:2, userName: 'Freddy', curriculum: 'JavaScript'},
        {id:3, userName: 'Pedro', curriculum: 'HTML & CSS'},
      ]
    };
  }

  PopulateRecentPartners(id, user, curriculum) {
    const rand = Math.floor(Math.random() * 1000);
    const newID = `${id}-${rand}`;
    return (
      <div key={newID} className='m-t-1'>
        <b>{user}</b> {curriculum}</div>
    );
  }

  render() {
    const {recentPartners} = this.state;
    return (
      <div id='DashBoard'>
        <header>
          <nav className='container'>
            <div className='logo'>
              <img className='logoTugether' src={tugetherText} alt='Tugether Logo'/>
              <img className='logoSymbol' src={tugetherLogo} alt= 'Tugether Logo'/>
              {/* <div className='logoContainer'>
                <img className='logoCircle' src={tugetherCircle} alt= 'Tugether Logo'/>
                <img className='logoRectangle' src={tugetherRectangle} alt= 'Tugether Logo'/>
              </div> */}
            </div>
            <div className='menu'>
              <a href='#Home'>Dashboard</a>
              <a href='#Home'>Support</a>
              <a href='#Home'>Logout</a>
            </div>
          </nav>
        </header>
        <main>
          <div className='container m-t'>
            <div className='flex-row'>
              <div className='flex-col'>
                <div className='text-purple text-align-left'>
                  <div className='font-large'>Welcome, <b>{this.state.userName}</b></div>
                  <div>What would you like to do today?</div>
                </div>
                <div className='text-align-left m-t'>
                  <div className='btn-purple'>Request a partner</div>
                  <div className='btn-purple m-t-1'>See the curriculum</div>
                  <div className='btn-purple m-t-1'>Leave a review</div>
                </div>
              </div>
              <div className='flex-col justify-center'>
                <div className='purpleBox'>
                  <div>Recent Partners</div>
                  <div id='RecentPartners'>
                    {recentPartners.map(user => this.PopulateRecentPartners(user.id, user.userName, user.curriculum))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default DashBoard;