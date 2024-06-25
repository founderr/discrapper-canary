var t = n(735250);
n(470079);
var a = n(481060),
  l = n(570140);
i.Z = {
  open(e) {
    l.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_OPEN",
      classificationId: e
    }), (0, a.openModalLazy)(async () => {
      let {
        default: i
      } = await n.e("65652").then(n.bind(n, 208265));
      return n => (0, t.jsx)(i, {
        classificationId: e,
        ...n
      })
    })
  },
  close() {
    l.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_CLOSE"
    })
  }
}