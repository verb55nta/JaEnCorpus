import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableHighlight,
    Animated,
    Easing,
} from 'react-native';

import Loading from './loading'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        window.onkeydown = (e) => {
            if (e.keyCode == 37) {
                if (this.props.started == 1) props.decrease();
            }
            else if (e.keyCode == 39) {
                if (this.props.started == 1) props.increase();
            }
        }
    }


    render() {
        let props = this.props;
        ///*
        const cnt = props.val + 1;
        let st = props.started == 1 ? <h1>{cnt} / {props.data.length} </h1> : <h1>/ {props.data.length} </h1>;
        let id = props.started == 1 ? <h1>{props.data[cnt].id}</h1> : <Text></Text>;

        let started = props.started === 1 ? " " : "Press start";
        //let ja = <h1>{props.data[cnt].ja}</h1>;
        let ja = props.started == 1 ? <h1>[ {props.data[cnt].ja} ]</h1> : <h1> [ {started} ] </h1>;
        let en = props.availableEn == 1 ? <h1>[ {props.data[cnt].en} ]</h1> : <h1> [ {started} ] </h1>;

        //*/
        //let load = this.state.loading == 1 ? <Loading /> : <Text></Text>;
        //let load = props.loading == 1 ? <Text><h1>Loading</h1></Text> : <Text></Text>;

        let start = <TouchableHighlight
            onPress={() => props.start()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Start</Text>
        </TouchableHighlight>
        let update = props.started == 1 ? <TouchableHighlight
            onPress={() => props.update()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Update</Text>
        </TouchableHighlight> : <Text></Text>

        let prev = props.started === 1 ? <TouchableHighlight
            onPress={() => props.decrease()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Prev</Text>
        </TouchableHighlight> : <Text></Text>;
        let next = props.started === 1 ? <TouchableHighlight
            onPress={() => props.increase()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight> : <Text></Text>;

        return <div>
            <Loading props={props} />
            <View style={styles.container}>
                {start}
                {update}
            </View>

            <View style={styles.container}>
                <Text>{st}</Text>
            </View>
            <View style={styles.container}>
                {prev}
                {next}
            </View>
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

