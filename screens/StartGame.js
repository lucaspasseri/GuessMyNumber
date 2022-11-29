import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const StartGame = ({ startGame }) => {
	const [inputValue, setInputValue] = useState("");

	const onChangeNumber = text => {
		setInputValue(text);
	};

	const chooseNumber = () => {
		if (inputValue.length > 0) startGame(inputValue);
	};

	return (
		<View style={styles.container}>
			<TextInput
				onChangeText={onChangeNumber}
				value={inputValue}
				placeholder="Guess a Number (0-100)"
				keyboardType="numeric"
			/>
			<Button
				onPress={chooseNumber}
				title="Start Game"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

export default StartGame;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#BBB",
		height: 300,
	},
});
