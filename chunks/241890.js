let l, i;
var s = n(735250);
n(470079);
var r = n(481060),
  a = n(570140),
  o = n(341382),
  u = n(981631);
let c = null;

function d(e) {
  null != l && e ? l() : null != i && i(), l = null, i = null
}
t.Z = {
  init() {
    a.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
      if (d(!1), c = e.context, l = e.resolve, i = e.reject, u.e3s === e.context) {
        let e;
        e = !1, (0, r.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("39305")]).then(n.bind(n, 134817));
          return n => {
            let {
              onClose: l,
              ...i
            } = n;
            return (0, s.jsx)(t, {
              ...i,
              onClose: t => {
                e = t, l()
              }
            })
          }
        }, {
          onCloseCallback: () => {
            (0, o.M)(e)
          }
        })
      }
    }), a.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
      let {
        shouldContinue: t
      } = e;
      c = null, d(t)
    }), a.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
      let {
        locked: t
      } = e;
      t && null != c && (c = null, d(!1))
    })
  }
}