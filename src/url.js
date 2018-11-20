const development = true
const BASE_URL = development
  ? 'http://localhost:4040'
  : 'https://boiling-ridge-20676.herokuapp.com'

exports.ML_URL = `${BASE_URL}/ml`
exports.WEATHER_URL = `${BASE_URL}/weather`
exports.PANIC_URL = `${BASE_URL}/panic`
