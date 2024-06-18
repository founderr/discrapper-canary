"use strict";
n.d(t, {
  Z: function() {
    return c
  },
  q: function() {
    return d
  }
});
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(902704),
  l = n(823379),
  u = n(728345),
  _ = n(812206);

function c(e) {
  let t = i.useRef([]);
  return i.useEffect(() => {
    !(0, a.E)(e, t.current) && (u.Z.fetchApplications(s()(e).filter(l.lm).uniq().value(), !1), t.current = e)
  }, [e]), (0, o.Wu)([_.Z], () => e.map(e => null != e ? _.Z.getApplication(e) : void 0))
}

function d(e) {
  return c(null != e ? [e] : [])[0]
}