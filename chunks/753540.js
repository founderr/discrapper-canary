l.d(n, {
  EH: function() {
    return o
  },
  Mf: function() {
    return r
  },
  t4: function() {
    return d
  }
});
var t = l(442837),
  i = l(9156),
  s = l(724213),
  a = l(689938);

function r(e, n, l) {
  return (0, t.e7)([i.ZP], () => {
    var t, a, r;
    if (n === l) return i.ZP.isChannelOptedIn(e, n, !0);
    return t = e, a = n, r = i.ZP, !!(0, s.hi)(t) || r.isChannelOptedIn(t, a, !0) || null != l && i.ZP.isChannelOptedIn(e, l, !0)
  })
}

function d(e, n, l) {
  return (0, t.e7)([i.ZP], () => n !== l && null != l && i.ZP.isChannelOptedIn(e, l, !0))
}

function o(e, n) {
  return (0, t.e7)([i.ZP], () => {
    if (null != n && i.ZP.isChannelOptedIn(e, n, !0)) return a.Z.Messages.CHANNEL_BROWSER_DISABLED_BY_CATEGORY
  })
}