import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../components/Home/HobbyList/index";
import casual from "casual-browserify";
import { addNewHobby, setActiveHobby } from "../action/hobby";
function Home(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const sta = useSelector((state) => state.hobby);
  console.log("state : ", sta);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    const newHobby = {
      id: casual.uuid,
      title: casual.title,
    };
    const actions = addNewHobby(newHobby);
    dispatch(actions);
  };
  const handleHobbyClick = (hobby) => {
    const actions = setActiveHobby(hobby);
    dispatch(actions);
  };
  return (
    <div>
      <h1>One</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbylist={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      ></HobbyList>
    </div>
  );
}

Home.propTypes = {};

export default Home;
