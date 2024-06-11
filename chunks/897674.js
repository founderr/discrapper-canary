"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  matchesFilters: function() {
    return u
  }
}), n("47120");
var i = n("470079"),
  a = n("442837"),
  s = n("146282"),
  r = n("327220"),
  l = n("959580");

function u(e, t) {
  let {
    types: n
  } = e;
  return !!(null == n || n.has(t.content_type)) || !1
}

function o(e) {
  let {
    feed: t,
    filters: n
  } = (0, a.useStateFromStoresObject)([s.default], () => ({
    feed: s.default.getFeed(e),
    filters: s.default.getFilters()
  })), o = i.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != n ? null == e ? void 0 : e.filter(e => u(n, e)) : e
  }, [t, n]);
  return o = (0, r.default)(o), o = (0, l.default)(o)
}