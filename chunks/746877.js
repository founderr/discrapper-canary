"use strict";
n.d(t, {
  S: function() {
    return d
  }
}), n(47120);
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(941028),
  a = n(509848),
  l = n(849522),
  u = n(439170);
let _ = "@here";

function c(e) {
  return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
}

function d(e, t, n) {
  let r = (0, l.Z)(),
    [d, E] = i.useState(!1),
    I = i.useMemo(() => s().debounce(e => {
      var i, s, l, d;
      if (i = e, s = r, l = t, d = n, c(u.ZP.getProps(l, d).groups) || !(i.length < _.length) && !(i.length > s) && -1 !== i.indexOf(_) && ((0, o.b8)(l, d, a.KV), 1)) E(!0)
    }, 200, {
      maxWait: 500
    }), [r, t, n]);
  i.useEffect(() => {
    let i = u.ZP.getProps(t, n).groups;
    if (null != t && !c(i) && !d) return e.addListener("text-changed", I), () => {
      e.removeListener("text-changed", I), I.cancel()
    }
  }, [d, I, e, t, n])
}