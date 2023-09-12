import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Square from "./Square";
import { connect } from "react-redux";

const GameBoard = (props) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!timeLeft) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Text>Xhoni's Whack-a-mole App!</Text>
      <Text>{timeLeft}</Text>
      <Text>{props.score}</Text>
      <View style={styles.gameContainer}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 300,
  },

  gameContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    paddingTop: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(GameBoard);
