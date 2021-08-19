import { useMemo } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import reducer from '../redux/reducers'

const persistConfig = {
    key: '@MyNextApp',
    storage,
    whitelist: ['auth', 'theme'], // place to select which state you want to persist
    timeout: null,
}
const persistedReducer = persistReducer(persistConfig, reducer)


let store

function makeStore(initialState) {
    return createStore(
        persistedReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? makeStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState, disableMemo = false) {
    if (disableMemo) {
        const store = initializeStore(initialState)
        return store
    }
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}