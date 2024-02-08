"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  useGetOrFetchApplication: function() {
    return o
  }
});
var l = n("884691"),
  i = n("446674"),
  r = n("233736"),
  a = n("651057"),
  s = n("299285");

function u(e) {
  let t = l.useRef([]);
  return l.useEffect(() => {
    !(0, r.areArraysShallowEqual)(e, t.current) && (a.default.fetchApplications(e, !1), t.current = e)
  }, [e]), (0, i.useStateFromStoresArray)([s.default], () => e.map(e => s.default.getApplication(e)))
}

function o(e) {
  return u(null != e ? [e] : [])[0]
}