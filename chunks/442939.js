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
  s = n("446674"),
  a = n("233736"),
  i = n("651057"),
  r = n("299285");

function u(e) {
  let t = l.useRef([]);
  return l.useEffect(() => {
    !(0, a.areArraysShallowEqual)(e, t.current) && (i.default.fetchApplications(e, !1), t.current = e)
  }, [e]), (0, s.useStateFromStoresArray)([r.default], () => e.map(e => r.default.getApplication(e)))
}

function o(e) {
  return u(null != e ? [e] : [])[0]
}