import { View, Text, StyleSheet } from 'react-native'
import React from 'react'





const Home = () => {


	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleContainerText}>Home</Text>
			</View>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({


	titleContainerText: {
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		color: "#151515"
	},

	titleContainer: {
		width: "100%",
		backgroundColor: "#F9F9F9",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
		borderColor: "#E1E5E9",
		paddingTop: 100,
		paddingBottom: 20,

	},

	container: {
		flex: 1,
		backgroundColor: "#F9F9F9",
		paddingBottom: 5
	}
})



