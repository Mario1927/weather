import { CardInterface } from "../interface/CardInterface"

const initialState: any = {
    cities: []
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'ADD_CITY':
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        case 'REMOVE_CITY':
            return {
                ...state,
                cities: state.cities.filter((city: CardInterface) => city.id !== action.payload)
            }
        default:
            return state
    }
}