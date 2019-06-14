export default function ({ app, $axios }) {
  $axios.onRequest(config => {
    app.router.push("/path1")
  })
}