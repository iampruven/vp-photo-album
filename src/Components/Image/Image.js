import React from "react";
import "./Image.css";
import config from "../../config";
import format from "date-fns/format";


export default class Image extends React.Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const res = await fetch(`${config.API_ENDPOINT}/api/images`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    const userInfo = data.map((image) =>
    //eventually need to fix so that no need to have request for the same user's post
      fetch(image.user).then(r => r.json())
    );
    // Promise<Reponse> -> map -> Promise<object>
    const responses = await Promise.all(userInfo);

    this.setState({ 
      posts: data.map((x, i) => {
        return {
          ...x,
          user: responses[i]
        }
      })
    });
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
              <p>
                Date Posted:{" "}
                {format(new Date(post.date_posted), "MMMM dd, yyyy")}
              </p>
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
