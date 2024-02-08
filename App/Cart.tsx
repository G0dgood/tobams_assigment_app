import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome6, Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CartItemList from '../components/CartItemList';

const Cart = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<TouchableOpacity style={styles.angleleft} onPress={() => navigation.goBack()}>
					<FontAwesome name="angle-left" size={20} color="black" />
				</TouchableOpacity>
				<Text style={styles.titleContainerText}>Cart</Text>
				<View style={styles.rightText} />
			</View>
			{/* Cart Item List */}

			<CartItemList />
			<View style={styles.checkoutContainer}>
				<View style={styles.checkoutContainerView}>
					<Text style={styles.checkoutsubtext}><Text style={styles.checkoutsub}>Total</Text>  (3 items)</Text>
					<Text style={styles.checkoutAmount}>£90</Text>
				</View>
				<TouchableOpacity style={styles.checkout}>
					<Text style={styles.checkoutText}>Checkout - £90</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Cart


const styles = StyleSheet.create({

	checkoutsubtext: {
		color: "#4A4A4A"
	},

	checkoutsub: {
		fontFamily: 'Poppins_500Medium',
		color: "#151515"
	},

	checkoutAmount: {
		color: "#151515",
		fontFamily: 'Poppins_500Medium',
	},

	checkoutText: {
		color: "#fff",
		fontFamily: 'Poppins_500Medium',
	},

	checkoutContainerView: {
		flexDirection: "row",
		justifyContent: "space-between"
	},

	checkout: {
		height: 48,
		backgroundColor: "#DB3C25",
		width: "100%",
		borderRadius: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

	},

	checkoutContainer: {
		gap: 10,
		position: "absolute",
		bottom: 1,
		paddingHorizontal: 24,
		paddingVertical: 32,
		width: "100%",
	},


	rightText: {
		width: 36,
		height: 36,
	},

	angleleft: {
		width: 36,
		height: 36,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E1E5E9",
		borderRadius: 8,
	},

	titleContainerText: {
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		color: "#151515"
	},

	titleContainer: {
		width: "100%",
		backgroundColor: "#F9F9F9",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderColor: "#E1E5E9",
		paddingTop: 100,
		paddingBottom: 20,
		paddingHorizontal: 24,
	},

	container: {
		flex: 1,
		backgroundColor: "#F9F9F9",
		paddingBottom: 5
	}

})