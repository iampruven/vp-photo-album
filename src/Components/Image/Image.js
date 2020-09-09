import React from "react";
import "./Image.css";
import config from "../../config";
import format from "date-fns/format";

export default class Image extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/images`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ posts: data });
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  }

  render() {
    const posting = this.state.posts.map((post, index) => {
      return (
        <div className="card" key={index}>
          <div>
            <div>
              <img src={post.img_url} alt={post.description} />
            </div>
            <div className="container">
              <h4>
                <b>Jane Doe</b>
              </h4>
              <p>{post.description}</p>
              <p>Date Posted: {format(new Date(post.date_posted), "MMMM dd, yyyy")}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="rowing">
        <ul>{posting}</ul>
      </section>
    );
  }
}
