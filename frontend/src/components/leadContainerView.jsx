import React, { Component } from "react";
import axios from "axios";
import LeadView from "./leadView";

class LeadContainerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leads: [],
    };
  }

  async componentDidMount() {
    axios
      .get("/api/leads/")
      .then((res) => {
        this.setState({ leads: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { leads } = this.state;
    return <LeadView leads={leads} />;
  }
}

export default LeadContainerView;
