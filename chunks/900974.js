var i = n(735250);
n(470079);
var s = n(481060),
  l = n(570140);
let a = !1,
  r = null;
t.Z = {
  init() {
    l.Z.subscribe("CONNECTION_OPEN", e => {
      let {
        pendingPayments: t
      } = e;
      if (null != t && t.length > 0) {
        var l;
        if (r === t[0] || null == (r = t[0])) return;
        l = r, a || (a = !0, (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("62903")]).then(n.bind(n, 645586));
          return t => {
            let {
              transitionState: n,
              onClose: s
            } = t;
            return (0, i.jsx)(e, {
              pendingPayment: l,
              transitionState: n,
              onClose: () => (a = !1, s())
            })
          }
        }))
      }
    })
  }
}