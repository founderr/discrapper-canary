"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  useGetOrFetchApplication: function() {
    return c
  }
});
var i = n("470079"),
  r = n("392711"),
  s = n.n(r),
  a = n("442837"),
  o = n("902704"),
  l = n("823379"),
  u = n("728345"),
  d = n("812206");

function _(e) {
  let t = i.useRef([]);
  return i.useEffect(() => {
    !(0, o.areArraysShallowEqual)(e, t.current) && (u.default.fetchApplications(s()(e).filter(l.isNotNullish).uniq().value(), !1), t.current = e)
  }, [e]), (0, a.useStateFromStoresArray)([d.default], () => e.map(e => null != e ? d.default.getApplication(e) : void 0))
}

function c(e) {
  return _(null != e ? [e] : [])[0]
}