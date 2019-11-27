import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'

import Modal from 'react-modal'

export default class generateFromChecked extends React.Component {



    render() {
        let props = this.props.props;
        let generate = props.storedCompleted === 1 ? <TouchableHighlight
            onPress={() => props.generateFromChecked()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Generate From Checked</Text>
        </TouchableHighlight> : <Text></Text>;

        let original = <TouchableHighlight
            onPress={() => props.start()}
            style={styles.button}
            underlayColor={'#0A84D0'}
        >
            <Text style={styles.buttonText}>Return Original</Text>
        </TouchableHighlight>;

        let judge = props.generatedFromCheck == 1 ? original : generate;

        let modal_generate_nochecked = <div>
            <h1>No Checked Item</h1>
            <TouchableHighlight
                onPress={() => props.deleteModalChecked()}
                style={styles.button}
                underlayColor={'#0A84D0'}
            >
                <Text style={styles.buttonText}>OK</Text>
            </TouchableHighlight>
        </div>

        let noChecked = <Modal
            isOpen={Boolean(props.modalChecked)}
            style={customStyles}
            contentLabel="Loading-overlay"
        >
            <View style={styles.container}>
                {modal_generate_nochecked}
            </View>
        </Modal>

        return <View style={styles.container}>
            {noChecked}
            {judge}
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