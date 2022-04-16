import { CardInterface } from "../interface/CardInterface"

const initialState: any = {
    cities: [],
    listOfCities: []
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
        case 'SET_CITY':
            return {
                ...state,
                listOfCities: [...state.listOfCities, action.payload]
            }
        case 'UNSET_CITY':
            return {
                ...state,
                listOfCities: state.listOfCities.filter((city: string) => city !== action.payload)
            }
        default:
            return state
    }
}