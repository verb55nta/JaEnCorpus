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

import Modal from 'react-modal'

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
        ///*
        const cnt = this.props.val + 1;
        let st = this.props.started == 1 ? <h1>{cnt} / {this.props.data.length} </h1> : "/";
        let id = this.props.started == 1 ? <h1>{this.props.data[cnt].id}</h1> : <Text></Text>;

        let started = this.props.started === 1 ? " " : "Press start";
        //let ja = <h1>{this.props.data[cnt].ja}</h1>;
        let ja = this.props.started == 1 ? <h1>[ {this.props.data[cnt].ja} ]</h1> : <h1> [ {started} ] </h1>;
        let en = this.props.availableEn == 1 ? <h1>[ {this.props.data[cnt].en} ]</h1> : <h1> [ {started} ] </h1>;

        let modal_button = this.props.updateFailed == 1 ? <div>
            <h1>Loading Failed</h1>
            <TouchableHighlight
                onPress={() => this.props.deletemodal()}
                style={styles.button}
                underlayColor={'#0A84D0'}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
        </div> : <Text> <h1>Loading...</h1> </Text>
        let modal_update_already = <div>
            <h1>You have already updated</h1>
            <TouchableHighlight
                onPress={() => this.props.deletemodal()}
                style={styles.button}
                underlayColor={'#0A84D0'}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
        </div>

        let load = <Modal
            isOpen={Boolean(this.props.loading)}
            style={customStyles}
            contentLabel="Loading-overlay"
        >
            {modal_button}
        </Modal>

        let update_already = <Modal
            isOpen={Boolean(this.props.loading)}
            style={customStyles}
            contentLabel="Loading-overlay"
        >
            {modal_update_already}
        </Modal>

        let update_check = this.props.stored_complete == 1 ? update_already : load;

        //*/
        //let load = this.state.loading == 1 ? <Loading /> : <Text></Text>;
        //let load = this.props.loading == 1 ? <Text><h1>Loading</h1></Text> : <Text></Text>;

        let start = <TouchableHighlight
            onPress={() => this.props.start()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Start</Text>
        </TouchableHighlight>
        let update = <TouchableHighlight
            onPress={() => this.props.update()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Update</Text>
        </TouchableHighlight>

        let prev = this.props.started === 1 ? <TouchableHighlight
            onPress={() => this.props.decrease()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Prev</Text>
        </TouchableHighlight> : <Text></Text>;
        let next = this.props.started === 1 ? <TouchableHighlight
            onPress={() => this.props.increase()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Next</Text>
        </TouchableHighlight> : <Text></Text>;

        return <div>
            {update_check}
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

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};