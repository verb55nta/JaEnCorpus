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

        let description = <Text>
            <p>これはSCoREコーパス（https://www.score-corpus.org/）にある日本語と英語の例文を表示するものです．</p>
            <p>描画にはReact Nativeを使用しております．</p>
            <p>日本語例文を表示した３秒後に英語例文が出力されます．</p>
            <p>最初は英語例文が100個程度しか表示されず，フル機能が使えないので，Updateを押して全ての英語例文を取得してください．（取得に数十秒~数分かかります）</p>
            <strong>使い方</strong>
            <ul>
                <li>Init...webページを初期化します．一度キャッシュされた英語例文が全てクリアされます．</li>
                <li>Start...例文の描画を開始します．</li>
                <li>Next...次の例文を描画します．</li>
                <li>Prev...前の例文を描画します．</li>
                <li>Update...SCoREの全ての例文を取得します．</li>
            </ul>
            <strong>Updateした後</strong>
            <ul>
                <li>Check...例文をチェックします．</li>
                <li>Uncheck...例文のチェックを外します．</li>
                <li>Clear All Checks...例文のチェックを全て外します．</li>
                <li>Generate From Checked...チェックした例文のみのリストを表示します．</li>
            </ul>

        </Text>

        return <div>
            <Loading props={props} />
            <View style={styles.container}>
                {init}
                {start}
            </View>
            {contents}
            <View style={styles.container}>
                {description}
            </View>
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

