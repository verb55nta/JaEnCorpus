import React from 'react'
import { connect } from 'react-redux'

import App from '../component/component_app'
import Actions from '../action/action_app'

import axios from 'axios';

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    //console.log(Actions);
    //console.log(Actions['incre']());
    return {
        increase: () => {
            //dispatch({ type: 'INCREMENT' });
            dispatch(Actions['incre']());
        },
        decrease: () => {
            //dispatch({ type: 'DECREMENT' });
            dispatch(Actions['decre']());
        },
        update: async () => {
            var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=1000";
            //var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=all";
            console.log(server);

            var res = null;
            dispatch(Actions['loadStart']());

            await axios.get(server, { params: {} })
                .then((re) => {
                    console.log("get");
                    res = re;
                }, () => { }
                ).catch(() => {

                });

            //this.data = JSON.parse(res.data.body);
            var d = JSON.parse(res.data.body);
            dispatch(Actions['loadEnd']());
            dispatch(Actions['update'](d))
        }
    }
}

//export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
