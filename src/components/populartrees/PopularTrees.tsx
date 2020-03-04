import React from "react";
import Tree from "../Tree/Tree";
import "./PopularTrees.css";
import { TreeData } from "../../model";

type Props = {};
type State = {
  trees: Array<TreeData>;
  commonName: string;
  scientificName: string;
  imgUrl: string;
};

class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      {
        name: "White birch",
        imgUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81KuiDsTbzL._AC_SY606_.jpg",
        scientificName: "Betula pendula",
        numLikes: 3
      },
      {
        name: "Weeping willow",
        imgUrl:
          "https://www.naturehills.com/media/catalog/product/cache/35c1080e597d6a74b42d0d88ced836c1/w/e/weeping-willow-full-tree-720x7201.jpg",
        scientificName: "Salix sepulcralis",
        numLikes: 7
      },
      {
        name: "London planetree",
        imgUrl:
          "https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Bloodgood_London_Planetree_450_grande.png?v=1549639204",
        scientificName: "Platanus hybryda",
        numLikes: 5
      }
    ],
    commonName: "",
    scientificName: "",
    imgUrl: ""
  };

  addTree = (): void => {
    const newTrees = [
      ...this.state.trees,
      {
        name: this.state.commonName,
        scientificName: this.state.scientificName,
        imgUrl: this.state.imgUrl,
        numLikes: 0
      }
    ];
    this.setState({ trees: newTrees, commonName: "", scientificName: "" });
  };

  onLike = (i: number): void => {
    const newState = {
      ...this.state,
      trees: this.state.trees.map((tree, index) => {
        if (index === i) {
          return { ...tree, numLikes: tree.numLikes + 1 };
        }
        return tree;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.state.trees
            .sort((a, b) => {
              return b.numLikes - a.numLikes;
            })
            .map((tree, i) => (
              <Tree
                key={i}
                name={tree.name}
                scientificName={tree.scientificName}
                numLikes={tree.numLikes}
                imgUrl={tree.imgUrl}
                onLike={() => this.onLike(i)}
              />
            ))}
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addTree();
          }}
          className="formAddNew"
        >
          <p style={{ margin: ".25rem" }}>
            <label>
              Common name:{" "}
              <input
                type="text"
                value={this.state.commonName}
                onChange={e => this.setState({ commonName: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <label>
              Scientific name:{" "}
              <input
                type="text"
                value={this.state.scientificName}
                onChange={e =>
                  this.setState({ scientificName: e.target.value })
                }
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <label>
              Image URL:{" "}
              <input
                type="text"
                value={this.state.imgUrl}
                onChange={e => this.setState({ imgUrl: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <button type="submit">Add!</button>
          </p>
        </form>
      </div>
    );
  }
}

export default PopularTrees;
