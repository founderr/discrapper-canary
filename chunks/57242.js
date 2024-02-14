"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("913144"),
  l = {
    open(e) {
      r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_OPEN",
        classificationId: e
      }), (0, a.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("574811").then(n.bind(n, "574811"));
        return n => (0, i.jsx)(t, {
          classificationId: e,
          ...n
        })
      })
    },
    close() {
      r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_CLOSE"
      })
    }
  }