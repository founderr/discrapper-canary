"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("570140");
let l = !1,
  r = null;
t.default = {
  init() {
    i.default.subscribe("CONNECTION_OPEN", e => {
      let {
        pendingPayments: t
      } = e;
      if (null != t && t.length > 0) {
        var i;
        if (r === t[0] || null == (r = t[0])) return;
        i = r, l || (l = !0, (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("62903")]).then(n.bind(n, "645586"));
          return t => {
            let {
              transitionState: n,
              onClose: s
            } = t;
            return (0, a.jsx)(e, {
              pendingPayment: i,
              transitionState: n,
              onClose: () => (l = !1, s())
            })
          }
        }))
      }
    })
  }
}