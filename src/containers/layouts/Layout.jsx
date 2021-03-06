import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import LoadingSpinner from "components/LoadingSpinner";

const Layout = props => {
  const { loading } = props;
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: 'blue',
        }}
      ></div>
      {loading && (
        <div className="loading">
          <LoadingSpinner />
        </div>
      )}
      <Header />
      <div className="main-app">{props.children}</div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loadingReducer.loadState
  };
};
export default connect(mapStateToProps)(Layout);
