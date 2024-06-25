var s = n(570140),
  i = n(211644);
t.Z = {
  init() {
    s.Z.subscribe("CONNECTION_OPEN", () => {
      (0, i.mc)()
    }), s.Z.subscribe("LOGOUT", () => {
      (0, i.mc)()
    })
  }
}