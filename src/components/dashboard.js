import React, { Component } from 'react';
import '../styles/dashboard.css';

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
      <tr key={newID} className='m-t-1'>
        <td><b>{user}</b></td> <td className='p-l-1'>{curriculum}</td></tr>
    );
  }

  render() {
    const {recentPartners} = this.state;
    return (
      <div id='DashBoard'>
        <main>
          <div className='container m-t m-b-1'>
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
              <div className='flex-col justify-center m-t-1'>
                <div className='purpleBox'>
                  <h3 className ='h3'>Recent Partners</h3>
                  <div className='bottom-ruler m-b-1'></div>
                  <table id='RecentPartners'>
                    {recentPartners.map(user => this.PopulateRecentPartners(user.id, user.userName, user.curriculum))}
                  </table>
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