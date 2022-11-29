import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import StartGame from "./screens/StartGame";
import GameIsOn from "./screens/GameIsOn";
import GameIsOver from "./screens/GameIsOver";

export default function App() {
	const [haveStarted, setHaveStarted] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [secretNumber, setSecretNumber] = useState();
	const [guesses, setGuesses] = useState([]);

	const startGame = number => {
		const randomNumber = Math.floor(101 * Math.random());
		console.log({ try: number, secret: randomNumber });
		if (number === randomNumber) setIsGameOver(true);

		setGuesses(guesses => [...guesses, { id: Date.now(), value: number }]);
		setSecretNumber(randomNumber);
		setHaveStarted(true);
	};

	const playGame = number => {
		console.log({ try: number, secret: secretNumber });
		if (Number(number) === secretNumber) setIsGameOver(true);

		setGuesses(guesses => [...guesses, { id: Date.now(), value: number }]);
	};

	const restartGame = () => {
		setHaveStarted(false);
		setIsGameOver(false);
		setSecretNumber(null);
		setGuesses([]);
	};

	return (
		<View style={styles.container}>
			<Text>Guess My Number</Text>
			{!haveStarted ? (
				<StartGame startGame={startGame} />
			) : isGameOver ? (
				<GameIsOver restartGame={restartGame} />
			) : (
				<GameIsOn
					playGame={playGame}
					guesses={guesses}
					restartGame={restartGame}
				/>
			)}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
