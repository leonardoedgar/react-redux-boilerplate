import React from 'react';
import {connect} from "react-redux";
import {updateContent} from './actions';
const App = ({updateContent, content}) => {
  return (
    <div>
      <h3>This is an App</h3>
      <form>
        <label>
          Name:
          <input type="number" name="name" onChange={(event) => updateContent(event.target.value)} value={content}/>
        </label>
        <br/>
        <label>
          Address:
          <input type="number" name="address" onChange={(event) => updateContent(event.target.value)} value={content}/>
        </label>
        <br/>
        <label>
          Phone Number:
          <input type="number" name="phoneNumber" onChange={(event) => updateContent(event.target.value)} value={content}/>
        </label>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    content: state.content
  }
};

export default connect(mapStateToProps, {updateContent})(App);
