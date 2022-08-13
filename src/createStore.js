export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '__INIT__'});
    const subscribes = [];

    return {
        // action ==={type:''}
        // **action eto object kotoriy yest polya type */
        dispatch(action) {
            console.log('I am dispatch');
            state = rootReducer(state, action);
            subscribes.forEach(sub =>{console.log(sub), sub()});
        },
        subscribe(callback) {
            //console.log(`subscribes.push(callback)`,callback);
            subscribes.push(callback);
        },
        getState() {
            return state;
        }
    }
}
