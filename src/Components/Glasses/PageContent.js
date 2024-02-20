import React, { Component } from "react";
import ModelCard from "./ModelCard";
import Image from "./glassesImage/model.jpg";
import SelectGlasses from "./SelectGlasses";

export default class PageContent extends Component {
  handleChangeGlass = (glass) => {
    this.setState({
      glass,
    });
  };
  state = {
    glass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  render() {
    let { data } = this.props;
    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-evenly my-5">
          <ModelCard
            GlassImage={this.state.glass.url}
            Image={Image}
            Name={this.state.glass.name}
            Desc={this.state.glass.desc}
          ></ModelCard>
          <ModelCard Image={Image} GlassImage={this.state.glass.url}></ModelCard>
        </div>
        <SelectGlasses data={data} handleChangeGlass={this.handleChangeGlass} />
      </div>
    );
  }
}
