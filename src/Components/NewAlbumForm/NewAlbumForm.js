import React from "react";

export default class NewAlbumForm extends React.Component {
  state = {
    album: "",
  };

  updateAlbumName = (name) => {
    this.setState({ album: name });
  };
  submitNewAlbum = (ev) => {
    ev.preventDefault();
    //make api request here
  };

  render() {
    return (
      <section>
        <form onSubmit={ev=>this.submitNewAlbum(ev)}>
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
