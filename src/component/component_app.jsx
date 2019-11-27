import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Loading from './loading'
import Contents from './contents'


export default class App extends React.Component {

    constructor(props) {
        super(props);
        window.onkeydown = (e) => {
            if (e.keyCode === 37) {
                if (this.props.started === 1) props.decrease();
            }
            else if (e.keyCode === 39) {
                if (this.props.started === 1) props.increase();
            }
        }
    }


    render() {
        let props = this.props;
        ///*

        //let st = props.started == 1 ? <h1>{cnt} / {props.data.length} </h1> : <h1>/ {props.data.length} </h1>;


        let init = <TouchableHighlight
            onPress={() => props.init()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Init</Text>
        </TouchableHighlight>

        let start = <TouchableHighlight
            onPress={() => props.start()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Start</Text>
        </TouchableHighlight>


        let contents = props.started == 1 ? <Contents props={props} /> : <Text></Text>;

        return <div>
            <Loading props={props} />
            <View style={styles.container}>
                {start}
            </View>
            {contents}

        </div>



    }
}


//            <Check props={props} />

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

