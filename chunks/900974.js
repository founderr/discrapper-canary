"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140");
let i = !1,
  r = null;
t.default = {
  init() {
    l.default.subscribe("CONNECTION_OPEN", e => {
      let {
        pendingPayments: t
      } = e;
      if (null != t && t.length > 0) {
        var l;
        if (r === t[0] || null == (r = t[0])) return;
        l = r, i || (i = !0, (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("62903")]).then(a.bind(a, "645586"));
          return t => {
            let {
              transitionState: a,
              onClose: s
            } = t;
            return (0, n.jsx)(e, {
              pendingPayment: l,
              transitionState: a,
              onClose: () => (i = !1, s())
            })
          }
        }))
      }
    })
  }
}