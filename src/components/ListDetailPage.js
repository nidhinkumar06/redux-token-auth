import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthorization from '../hoc/withAuthorization';
import Constants from '../config/Constants';

class ListDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoPreviousPage = () => {
    this.props.history.goBack();
  }

  render() {
    let selectedDataId = parseInt(this.props.match.params.id);
    Constants.ListData.map((data) => {
      if (data.id === selectedDataId) {
        this.selectedData = data;
      }
    });
    return (
      <div>
        <button onClick={this.gotoPreviousPage.bind(this)}>Go Back</button>
        <h2>{this.selectedData.id}</h2>
        <h2>{this.selectedData.name}</h2>
        <h2>{this.selectedData.address}</h2>
      </div>
    );
  }

}

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(null)
)(ListDetailPage);
