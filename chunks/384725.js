"use strict";
a.r(t);
var i = a("735250");
a("470079");
var n = a("481060"),
  l = a("570140");
t.default = {
  open(e) {
    l.default.dispatch({
      type: "SAFETY_HUB_APPEAL_OPEN",
      classificationId: e
    }), (0, n.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("65652")]).then(a.bind(a, "208265"));
      return a => (0, i.jsx)(t, {
        classificationId: e,
        ...a
      })
    })
  },
  close() {
    l.default.dispatch({
      type: "SAFETY_HUB_APPEAL_CLOSE"
    })
  }
}