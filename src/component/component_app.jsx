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

export default class App extends React.Component {

    render() {
        ///*
        const cnt = this.props.val + 1;
        let st = <h1>{cnt} / {this.props.data.length} </h1>;
        let id = <h1>{this.props.data[cnt].id}</h1>;
        let ja = <h1>{this.props.data[cnt].ja}</h1>;
        let en = this.props.availableEn == 1 ? <h1>[ {this.props.data[cnt].en} ]</h1> : <h1> [  ] </h1>;
        //*/
        //let load = this.state.loading == 1 ? <Loading /> : <Text></Text>;
        let load = this.props.loading == 1 ? <Text><h1>Loading</h1></Text> : <Text></Text>;

        return <div>
            {load}
            <View style={styles.container}>

                <TouchableHighlight
                    onPress={() => this.props.update()}
                    style={styles.button}
                    underlayColor={'#0A84D0'}
                >
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.props.decrease()}
                    style={styles.button}
                    underlayColor={'#0A84D0'}
                >
                    <Text style={styles.buttonText}>Prev</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => this.props.increase()}
                    style={styles.button}
                    underlayColor={'#0A84D0'}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.container}>
                <Text>{st}</Text>
            </View>
            <View style={styles.container}>
                <Text>{id}</Text>
            </View>
            <View style={styles.container}>
                <Text>{ja}</Text>
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
    enText: {
        color: '#888'
    }
});
