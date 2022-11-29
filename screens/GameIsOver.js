import { Button, View, StyleSheet, Text } from "react-native";

const GameIsOver = ({ restartGame }) => {
	return (
		<View style={styles.container}>
			<Text>The Game is Over!</Text>
			<Button
				onPress={restartGame}
				title="Restart Game"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	);
};

export default GameIsOver;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#BBB",
		height: 300,
	},
});
