import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Check from './check'


export default class Contents extends React.Component {

    render() {
        let props = this.props.props;
        const cnt = props.val + 1;
        let st = <h1>{cnt} / {props.data.length} </h1>
        let id = <h1>{props.data[cnt].id}</h1>

        let started = " ";
        //let ja = <h1>{props.data[cnt].ja}</h1>;
        let ja = <h1>[ {props.data[cnt].ja} ]</h1>
        let en = <h1>[ {props.data[cnt].en} ]</h1>
        let update = props.storedCompleted === 1 ? <Text></Text> : <TouchableHighlight
            onPress={() => props.update()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Update</Text>
        </TouchableHighlight>

        let prev = <TouchableHighlight
            onPress={() => props.decrease()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Prev</Text>
        </TouchableHighlight>
        let next = <TouchableHighlight
            onPress={() => props.increase()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight>

        return <div>
            <View style={styles.container}>
                <Text>{update}</Text>
            </View>
            <View style={styles.container}>
                <Text>{st}</Text>
            </View>
            <View style={styles.container}>
                {prev}
                {next}
            </View>
            <Check props={props} />
            <View style={styles.container}>
                <Text>{id}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.jaText}>{ja}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.enText}>{en}</Text>
            </View>
        </div>
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
