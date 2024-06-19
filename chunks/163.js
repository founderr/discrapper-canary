l.d(n, {
  Z: function() {
    return m
  }
}), l(47120);
var t = l(470079),
  i = l(442837),
  s = l(570140),
  a = l(211739),
  r = l(680089),
  d = l(9156),
  o = l(152376),
  c = l(724213),
  u = l(981631);

function h(e) {
  s.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function m(e) {
  let n = (0, i.e7)([d.ZP], () => d.ZP.getPendingChannelUpdates(e));
  return t.useEffect(() => (h(e), () => h(e)), [e]), t.useEffect(() => {
    null != n && (0, o.C1)(e, n)
  }, [e, n]), {
    onChannelClick: t.useCallback((e, n, l) => {
      let t = d.ZP.isChannelOptedIn(e, n),
        i = n === l;
      !t && r.Z.isCollapsed(l) && null != l && (0, a.mJ)(l), (0, c.hi)(e) ? i ? (0, c.rz)(e, {
        include: new Set([n])
      }) : (0, c.rz)(e, {
        exclude: new Set([n])
      }) : (0, o.k$)(e, n, !t, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}