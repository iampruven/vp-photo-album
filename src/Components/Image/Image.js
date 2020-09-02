import React from "react";
import "./Image.css";

export default class Image extends React.Component {
  render() {
    return (
      <section className="rowing">
        <div className="card">
          <div>
            <div>
              <img src="img/img_avatar1.png" alt="avatar" />
            </div>
            <div className="container">
              <h4>
                <b>Jane Doe</b>
              </h4>
              <p>Architect & Engineer</p>
              <p>Uploaded by: Dixie</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <div>
              <img src="img/img_avatar1.png" alt="avatar" />
            </div>
            <div className="container">
              <h4>
                <b>Jane Doe</b>
              </h4>
              <p>Architect & Engineer</p>
              <p>Uploaded by:Vendy</p>
            </div>
          </div>
        </div>
        
      </section>
    );
  }
}
