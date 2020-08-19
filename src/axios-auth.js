import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

//instance.defaults.headers.common['SOMETHING'] = 'something'
instance.defaults.headers.common['Access-Control-Allow-Origin'] = true
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
isntance.defaults.options.emulateJSON = true

export default instance