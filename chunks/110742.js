"use strict";
n.r(e), n.d(e, {
  useHasActiveEntitlement: function() {
    return l
  }
}), n("47120");
var i = n("442837"),
  r = n("580130");

function l(t) {
  return (0, i.useStateFromStores)([r.default], () => {
    let e = r.default.getForSku(t);
    if (null == e) return !1;
    let n = 0;
    for (let t of e) {
      var i, l;
      let e = null !== (l = null === (i = t.endsAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== l ? l : 1 / 0;
      e >= n && (n = e)
    }
    return n > new Date().getTime()
  }, [t])
}