import { CardInterface } from "../interface/CardInterface"

const initialState: any = {
    cities: [],
    listOfCities: [],
    selectedCity: '',
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
        case 'SELECT_CITY':
            return {
                ...state,
                selectedCity: action.payload
            }
        case 'UNSELECT_CITY':
            if(state.selectedCity === action.payload) {
                return {
                    ...state,
                    selectedCity: ''
                }
            }else{
                return {
                    ...state,
                }
            }
        default:
            return state
    }
}