"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  matchesFilters: function() {
    return T
  }
}), n("47120");
var r = n("470079"),
  s = n("442837"),
  a = n("146282"),
  E = n("327220"),
  u = n("959580");

function T(e, t) {
  let {
    types: n
  } = e;
  return !!(null == n || n.has(t.content_type)) || !1
}

function _(e) {
  let {
    feed: t,
    filters: n
  } = (0, s.useStateFromStoresObject)([a.default], () => ({
    feed: a.default.getFeed(e),
    filters: a.default.getFilters()
  })), _ = r.useMemo(() => {
    let e = null == t ? void 0 : t.entries.map(e => e.content);
    return null != n ? null == e ? void 0 : e.filter(e => T(n, e)) : e
  }, [t, n]);
  return _ = (0, E.default)(_), _ = (0, u.default)(_)
}