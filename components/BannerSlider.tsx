import React from 'react'
import { StyleSheet, View } from 'react-native'
import CarouselCards from '../components/CarouselCards'

const Banner = () => {

    return (
        <View style={styles.container}>
            <CarouselCards />
        </View>
    );
}

export default Banner
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
});