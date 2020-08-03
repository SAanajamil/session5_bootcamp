const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREAMENT':
            return state + 1
    }
}

export default CounterReducer