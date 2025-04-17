import React from 'react';
import { connect } from 'dva';

function Users(props) {
  return (
    <div>
      <h1>Users Page</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.users
  };
}
export default connect(mapStateToProps)((Users));