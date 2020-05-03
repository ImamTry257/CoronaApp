export const setDataCorona = (run, dataCorona) => {
    if(run == true){
        return {
            type : 'SET_DATA_CORONA',
            data : dataCorona
        };
    }
}

export const setLoading = (run, setLoad) => {
    if(run == true){
        return {
            type : 'SET_LOADING',
            data : setLoad
        };
    }
}