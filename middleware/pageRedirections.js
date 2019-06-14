export default function ({ redirect, route}) {
  if (route.path === "/path1") return redirect("/path2")
}