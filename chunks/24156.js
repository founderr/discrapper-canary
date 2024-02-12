"use strict";
n.r(t), n.d(t, {
  useGuildIdsToFetchSoundsFor: function() {
    return u
  },
  getGuildIdsToFetchSoundsFor: function() {
    return d
  }
}), n("222007");
var l = n("884691"),
  a = n("65597"),
  s = n("305961"),
  i = n("299039"),
  r = n("235004");

function o(e, t) {
  let n = i.default.keys(e);
  return n.filter(e => null == t.get(e))
}

function u() {
  let e = (0, a.default)([s.default], () => s.default.getGuilds()),
    t = (0, a.default)([r.default], () => r.default.getSounds());
  return (0, l.useMemo)(() => o(e, t), [e, t])
}

function d() {
  let e = s.default.getGuilds(),
    t = r.default.getSounds();
  return o(e, t)
}