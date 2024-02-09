"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007"), n("808653");
var l = n("884691"),
  i = n("845962"),
  a = e => {
    let t = i.default.profileEffects,
      [n, a] = l.useState(e),
      [s, r] = l.useState(i.default.getProfileEffectById(e)),
      o = t.reduce((t, n, l) => (n.id === e && (t = l), t), 0),
      [, u] = l.useState(o),
      d = l.useRef(o);
    return l.useEffect(() => {
      a(e), r(i.default.getProfileEffectById(e))
    }, [e, t]), {
      increment: () => {
        let e = (d.current + 1) % t.length;
        d.current = e, u(e), a(t[e].id), r(t[e])
      },
      decrement: () => {
        let e = 0 === d.current ? t.length - 1 : d.current - 1;
        d.current = e, u(e), a(t[e].id), r(t[e])
      },
      id: n,
      preset: s
    }
  }