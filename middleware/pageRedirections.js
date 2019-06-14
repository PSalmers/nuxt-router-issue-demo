export default function ({ redirect, route, store}) {
  if (store.state.goToPath2 && route.path === "/path1") return redirect("/path2")
}