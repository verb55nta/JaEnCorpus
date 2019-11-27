//import React from 'react'
import { connect } from 'react-redux'

import App from '../component/component_app'
import Actions from '../action/action_app'

import axios from 'axios';

import { md5hex } from '../reducer'


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
        init: () => {
            dispatch(Actions['init']());
        },
        increase: () => {
            //dispatch({ type: 'INCREMENT' });
            dispatch(Actions['incre']());
            clearTime(dispatch);
            dispatch(Actions['checkJudge']())
        },
        decrease: () => {
            //dispatch({ type: 'DECREMENT' });
            dispatch(Actions['decre']());
            clearTime(dispatch);
            dispatch(Actions['checkJudge']())
        },
        update: async () => {
            dispatch(Actions['updateStart']());
            dispatch(Actions['createModal']());
            var ldata = localStorage.getItem('all');
            if (ldata != null && (md5hex(JSON.stringify(ldata)) === "7ed676711475ac290adafd8368dd573f")) {
                console.debug("You have already updated");
                dispatch(Actions['updateCompleted']());
                //dispatch(Actions['deleteModal']());
            }
            else {

                //var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=test_1000";
                //var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=1000";
                var server = "https://kwffjv54ke.execute-api.us-east-1.amazonaws.com/Prod/helloworld?data=test_all";

                var res = null;
                dispatch(Actions['deleteTimer']());



                await axios.get(server, { params: {} })
                    .then((re) => {
                        console.debug("get");
                        res = re;
                    }, () => { }
                    ).catch(() => {

                    });

                let d = JSON.parse(res.data.body);
                console.debug(md5hex(JSON.stringify(d)));

                //if (md5hex(JSON.stringify(d)) !== "7ed676711475ac290adafd8368dd573f") {
                if (md5hex(JSON.stringify(d)) !== "ad4477322882172392f8b21676d385d9") {
                    //console.log("no data")
                    dispatch(Actions["updateFailed"]())
                }
                else {

                    clearTime(dispatch);
                    dispatch(Actions['init']());
                    dispatch(Actions['update'](d));
                    dispatch(Actions['updateCompleted']());
                }
            }


        },
        start: () => {
            clearTime(dispatch);
            dispatch(Actions['start']());
            dispatch(Actions['checkJudge']())
        },
        deleteModal: () => {
            dispatch(Actions['deleteModal']())
        },
        check: () => {
            dispatch(Actions['check']())
            dispatch(Actions['checkJudge']())
        },
        uncheck: () => {
            dispatch(Actions['uncheck']())
            dispatch(Actions['checkJudge']())
        },
        generateFromChecked: () => {
            dispatch(Actions['generateFromChecked']())
            dispatch(Actions['checkJudge']())
            clearTime(dispatch);
        },
        clearCheck: () => {
            dispatch(Actions['clearCheck']())
            dispatch(Actions['checkJudge']())
            //dispatch(Actions['start']())
        },
        createModalChecked: () => {
            dispatch(Actions['createModalChecked']())
        },
        deleteModalChecked: () => {
            dispatch(Actions['deleteModalChecked']())
        },
    }
}



//export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
