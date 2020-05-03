import { combineReducers } from "redux";

const initialHome = {
    titlePage: '#DirumahAja',
    titleSearch: 'Cari Data Korona untuk Provinsi',
    form:{
        keyword: '',
    },
    dataCoronaHome: {
        positif: '',
        sembuh: '',
        meninggal: '',
    },
    isLoading: true,
    runChangeButtonColor: false,
}

const HomeReducer = (state = initialHome, action) => {
    if(action.type == 'SET_DATA_CORONA'){
        return {
            ...state,
            dataCoronaHome : action.data
        }

    }

    if(action.type == 'SET_LOADING'){
        return {
            ...state,
            isLoading: action.data
        }
    }

    if(action.type == 'SET_KEYWORD'){
        return {
            ...state,
            form: {
                ...state.form,
                keyword: action.data
            }
        }
    }
    return state
}

const initialDetail = {
    titlePage: '#WorkFromHome',
    titleSearch: 'Data Corona di Provinsi ',
    dataCoronaDetail: {
        Provinsi: 'Jakarta',
        positif: '',
        sembuh: '',
        meninggal: '',
    },
    descNoted: 'Sering-seringlah mencuci tangan, jangan meninggalkan daerah yang terinfeksi dan tidak mengunjungi daerah yang terinfeksi'
}

const DetailReducer = (state = initialDetail, action) => {
    return state
}


// combine reducer
const reducer = combineReducers({
    HomeReducer,
    DetailReducer
})

export default reducer;
