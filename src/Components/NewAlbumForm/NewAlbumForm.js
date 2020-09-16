import React from "react";
import config from "../../config";


export default class NewAlbumForm extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  state = {
    album: "",
    error: null,
  };

  redirectToDashboard = () => {
  
    const { history } = this.props;
    const destination = "/dashboard";
    history.push(destination);
    
  };
  updateAlbumName = (name) => {
    this.setState({ album: name });
  };
  submitNewAlbum = (ev) => {
    ev.preventDefault();
    //make api request here
    fetch(`${config.API_ENDPOINT}/api/album`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        album: this.state.album,
      }),
    })
      .then(() => {
        //success
        this.redirectToDashboard()
      })
      
      .catch((e) => {
        console.error(e)
        window.alert(e)
      });
  };

  render() {
    return (
      <section>
        <form onSubmit={(ev) => this.submitNewAlbum(ev)}>
          <label htmlFor="album-name">Album Name:</label>
          <input
            id="album-name"
            name="album-name"
            value={this.state.album}
            onChange={(e) => this.updateAlbumName(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </section>
    );
  }
}