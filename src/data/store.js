import { 
    reactive, 
    ref 
} from 'vue';

export const store = reactive({
    countries: [],
    dailyConfirmed: 0,
    dailyDeaths: 0,
    dailyRecovered: 0,
    byCountry: {
        countryName: '',
        newConfirmed: 0,
        newDeaths: 0,
        totalConfirmed: 0,
        totalDeaths: 0
    }
});

export const fetchInitialData = () => {

    const api = 'https://api.covid19api.com/summary';

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const data = ref(null);

    return (
        fetch(api, requestOptions)
        .then(response => response.json())
        .then(result => {
            data.value = result.Global
            const {
                NewConfirmed,
                NewDeaths,
                NewRecovered
            } = data.value;
            store.dailyConfirmed = NewConfirmed;
            store.dailyDeaths = NewDeaths;
            store.dailyRecovered = NewRecovered;
            console.log(data.value)
        })
        .catch(err => {
            throw(err);
        })
    )
}