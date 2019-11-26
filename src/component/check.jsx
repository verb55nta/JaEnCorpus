import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

export default class Check extends React.Component {

    render() {
        let props = this.props.props;
        let check = <TouchableHighlight
            onPress={() => props.check()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Check</Text>
        </TouchableHighlight>;
        let uncheck = <TouchableHighlight
            onPress={() => props.uncheck()}
            style={styles.button2}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Uncheck</Text>
        </TouchableHighlight>;

        let clearCheck = <TouchableHighlight
            onPress={() => props.clearCheck()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Clear All Check</Text>
        </TouchableHighlight>

        let judge = props.checked === true ? uncheck : check

        return <View style={styles.container}>
            {judge}
            {clearCheck}
        </View>

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        borderRadius: 3,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#1B95E0',
    },
    button2: {
        borderRadius: 3,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: '#FF3530',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    jaText: {
        fontSize: 10,
        color: '#000'
    },
    enText: {
        fontSize: 8,
        color: '#888'
    }
});