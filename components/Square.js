import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { addScore } from "../redux";
import { connect } from "react-redux";

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const randomTime = Math.random() * 20000;
  let timerId;

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, 800);
    }, randomTime);

    setTimeout(endGame, 60000);
  }, []);

  const endGame = () => {
    clearInterval(timerId);
    setGameOver(true);
  };

  return (
    <TouchableOpacity onPress={moleActive ? props.addScore : null}>
      <View style={moleActive ? styles.mole : styles.square}>
        {gameOver && <Text>'X'</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "red",
  },

  mole: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    backgroundColor: "blue",
  },
});

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addScore: () => dispatch(addScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
