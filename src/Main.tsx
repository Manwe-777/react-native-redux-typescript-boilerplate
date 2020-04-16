import React, { useCallback } from "react";
import { Text, View, Button, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./redux/store";
import counterSlice from "./redux/slices/counterSlice";
import styles from "./MainStyles";

export default function Main(): JSX.Element {
  const count = useSelector((state: AppState) => state.counter.count);
  const dispatch = useDispatch();

  const doAdd = useCallback(() => {
    dispatch(counterSlice.actions.increment());
  }, [dispatch]);

  const doRemove = useCallback(() => {
    dispatch(counterSlice.actions.decrement());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#308fb8" barStyle={'dark-content'} />
      <Text>Clicked {count} times!</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Add one" onPress={doAdd}>
          Add
        </Button>
        <Button title="Remove one" onPress={doRemove}>
          Remove
        </Button>
      </View>
    </View>
  );
}
