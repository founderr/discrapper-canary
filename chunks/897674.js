"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  },
  matchesFilters: function() {
    return l
  }
}), n("47120");
var r = n("470079"),
  i = n("442837"),
  u = n("146282"),
  o = n("327220"),
  a = n("959580");

function l(t, e) {
  let {
    types: n
  } = t;
  return !!(null == n || n.has(e.content_type)) || !1
}

function s(t) {
  let {
    feed: e,
    filters: n
  } = (0, i.useStateFromStoresObject)([u.default], () => ({
    feed: u.default.getFeed(t),
    filters: u.default.getFilters()
  })), s = r.useMemo(() => {
    let t = null == e ? void 0 : e.entries.map(t => t.content);
    return null != n ? null == t ? void 0 : t.filter(t => l(n, t)) : t
  }, [e, n]);
  return s = (0, o.default)(s), s = (0, a.default)(s)
}