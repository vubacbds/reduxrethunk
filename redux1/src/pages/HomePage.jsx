import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import propTypes from "prop-types";
import HobbyList from "../components/home/hobbylist";
import { AddNewHobby } from "../actions/hobby";
import { getTodo } from "../actions/hobby";

// HomePage.prototype = {};
const randomId = () => {
  return 1000 + Math.trunc(Math.random() * 90000);
};

const HomePage = (props) => {
  console.log(props);
  const { hobby, getListHobby, todo, getListTodo } = props;

  const handleAddHobby = () => {
    const id = randomId();
    const newhobby = {
      id,
      title: `hobby hi ${id}`,
    };
    getListHobby(newhobby);
  };

  useEffect(() => {
    getListTodo();
  }, []);

  return (
    <div className="home-page">
      <h1>Redux - HomePage</h1>
      <button onClick={handleAddHobby}>Add</button>
      {/* <HobbyList hobbyList={hobby.list} /> */}
      <HobbyList hobbyList={todo.list} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hobby: state.hobby, //Phải chấm tới state, vì gộp nhiều reducer,
    todo: state.todo,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    getListHobby: (params) => dispatch(AddNewHobby(params)),
    getListTodo: () => dispatch(getTodo()),
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(HomePage);
