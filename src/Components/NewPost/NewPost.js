import React from "react";
import config from '../../config';
export default class NewPost extends React.Component {
  state = {
    description: "",
    img_url:''
  };

  updateImgURL=(value)=>{
    this.setState({img_url:value})
  }
  updateDescription = (value) => {
    this.setState({ description: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/api/post`)
  };
  render() {
    return (
      <form onSubmit={(e) => this.handleFormSubmit(e)}>
        <label htmlFor="description">Description:</label>
        <textarea id='description' placeholder='Provide details here'
          value={this.state.description}
          onChange={e=>this.updateDescription(e.target.value)}
          maxLength='250'
        />
        <label htmlFor='img-url'>Image Url:</label>
        <input type="text" value={this.state.img_url} onChange={e=>this.updateImgURL(e.target.value)}/>
        <label htmlFor='group-name'>Select Album</label>
        <select id='group-name' name='album'>
          <option value='memories with friends'>memories with friends</option>
        </select>

        <button>Submit</button>
      </form>
    );
  }
}
