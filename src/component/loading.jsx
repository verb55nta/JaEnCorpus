import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Modal from 'react-modal'

export default class Loading extends React.Component {

    render() {
        let props = this.props.props

        ///*
        let modal_button = props.updateFailed === 1 ? <div>
            <h1>Loading Failed</h1>
            <TouchableHighlight
                onPress={() => props.deleteModal()}
                style={styles.button}
                underlayColor={'#0A84D0'}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
        </div> : <Text> <h1>Loading...</h1> </Text>
        //*/
        ///*
        let modal_update_already = <div>
            <h1>You have already updated</h1>
            <TouchableHighlight
                onPress={() => props.deleteModal()}
                style={styles.button}
                underlayColor={'#0A84D0'}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
        </div>
        //*/

        ///*
        let load = <Modal
            isOpen={Boolean(props.modal)}
            style={customStyles}
            contentLabel="Loading-overlay"
        >
            <View style={styles.container}>
                {modal_button}
            </View>
        </Modal>
        //*/
        ///*
        let update_already = <Modal
            isOpen={Boolean(props.modal)}
            style={customStyles}
            contentLabel="Loading-overlay"
        >
            <View style={styles.container}>
                {modal_update_already}
            </View>
        </Modal>
        //*/

        let update_check = props.storedCompleted === 1 ? update_already : load;
        //let update_check = load;

        return update_check;

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