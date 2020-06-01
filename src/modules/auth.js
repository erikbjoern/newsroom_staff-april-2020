import JtockAuth from 'j-tockauth'

const auth = new JtockAuth({
  host: "https://dailynewssense-api.herokuapp.com",
  prefixUrl: "/api",
  debug: false
})

export default auth 