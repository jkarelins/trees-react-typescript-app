// src/components/Tree.tsx
import React from "react";
import "./Tree.css";
import { TreeProps } from "../../model";

type Props = TreeProps;

class Tree extends React.Component<Props> {
  render() {
    return (
      <div className="card">
        <img src={this.props.imgUrl} alt={this.props.name} />
        <h5>Name: {this.props.name}</h5>
        <h6>
          <i>{this.props.scientificName}</i>
        </h6>
        Likes: {this.props.numLikes}
        <button onClick={this.props.onLike}>Like</button>
      </div>
    );
  }
}

export default Tree;
