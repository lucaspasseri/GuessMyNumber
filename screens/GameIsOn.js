import {
	View,
	Text,
	Button,
	TextInput,
	FlatList,
	StyleSheet,
} from "react-native";
import { useState } from "react";

const GameIsOn = ({ playGame, guesses, restartGame }) => {
	const [inputValue, setInputValue] = useState("");

	const onChangeNumber = text => {
		setInputValue(text);
	};

	const playGameHandler = () => {
		if (inputValue.length > 0) {
			playGame(inputValue);
			setInputValue("");
		}
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
				onPress={playGameHandler}
				title="Play!"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			<Button
				onPress={restartGame}
				title="Quit!"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
			<FlatList
				data={guesses}
				renderItem={data => (
					<View>
						<Text>{data.item.value}</Text>
					</View>
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

export default GameIsOn;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#BBB",
		height: 300,
	},
});
