import React, { Component } from "react";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Mujida",
      recentPartners: [
        { id: 1, userName: "Rosales", curriculum: "React.js" },
        { id: 2, userName: "Freddy", curriculum: "JavaScript" },
        { id: 3, userName: "Pedro", curriculum: "HTML & CSS" }
      ]
    };
  }

  PopulateRecentPartners(id, user, curriculum) {
    const newID = uuidv4();
    return (
      <tr key={newID} className="mt-4">
        <td>
          <b>{user}</b>
        </td>
        <td className="pl-4">{curriculum}</td>
      </tr>
    );
  }

  render() {
    const { recentPartners } = this.state;
    return (
      <div id="DashBoard">
        <main>
          <div className="container m-t mb-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-end">
                <div className="text-purple text-align-left">
                  <div className="font-large">
                    Welcome, <b>{this.state.userName}</b>
                  </div>
                  <div>What would you like to do today?</div>
                </div>
                <div className="text-align-left m-t">
                  <Link to="/request_partner">
                    <div className="btn-purple">Request a partner</div>
                  </Link>
                  <div className="btn-purple mt-4">See the curriculum</div>
                  <div className="btn-purple mt-4">Leave a review</div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-8">
                <div className="purpleBox">
                  <h3 className="h3">Recent Partners</h3>
                  <div className="bottom-ruler mb-4"></div>
                  <table id="RecentPartners">
                    <tbody>
                    {recentPartners.map(user =>
                      this.PopulateRecentPartners(
                        user.id,
                        user.userName,
                        user.curriculum
                      )
                    )}
                    </tbody>
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