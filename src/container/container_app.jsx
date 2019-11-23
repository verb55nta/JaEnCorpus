import React from 'react'
import { connect } from 'react-redux'

import App from '../component/component_app'
import Actions from '../action/action_app'

import axios from 'axios';



function mapStateToProps(state) {
    return state
}

function clearTime(dispatch) {
    var id = setTimeout(() => {
        dispatch(Actions['onEn']());
    }, 3000);
    dispatch(Actions['clearEn'](id));
}

function mapDispatchToProps(dispatch) {
    //console.log(Actions);
    //console.log(Actions['incre']());
    return {
        increase: () => {
            //dispatch({ type: 'INCREMENT' });
            dispatch(Actions['incre']());
            clearTime(dispatch);
        },
        decrease: () => {
            //dispatch({ type: 'DECREMENT' });
            dispatch(Actions['decre']());
            clearTime(dispatch);
        },
        update: async () => {
            var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=1000";
            //var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=all";

            var res = null;
            dispatch(Actions['deleteTimer']());
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
            //dispatch(Actions['loadEnd']());
            clearTime(dispatch);
            dispatch(Actions['init']());
            dispatch(Actions['update'](d));
            //dispatch(Actions['initVal']());
            //dispatch(Actions['clearStart']());
            //dispatch(Actions['clearEn']());
        },
        start: () => {
            clearTime(dispatch);
            dispatch(Actions['start']());
        }

    }
}



//export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
