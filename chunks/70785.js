n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(100527),
  l = n(906732),
  u = n(271383),
  c = n(785717),
  d = n(318661),
  _ = n(502762),
  E = n(475413),
  f = n(228168),
  h = n(895793),
  p = n(223223);

function m(e) {
  let {
user: t,
guildId: n,
setPopoutRef: m,
channelId: I,
messageId: T,
roleId: g,
onViewBlockedProfileClick: S,
newAnalyticsLocations: A = []
  } = e, {
analyticsLocations: N
  } = (0, l.ZP)([
...A,
o.Z.BLOCKED_PROFILE_POPOUT
  ]), v = (0, c.Q1)({
layout: 'BLOCKED_PROFILE_POPOUT',
userId: t.id,
guildId: n,
channelId: I,
messageId: T,
roleId: g
  }), O = i.useRef(null), R = (0, d.ZP)(t.id, n), C = (0, a.e7)([u.ZP], () => null != n ? u.ZP.getMember(n, t.id) : null);
  return i.useEffect(() => {
null == m || m(null == O ? void 0 : O.current);
  }, [
O,
m
  ]), (0, r.jsx)(l.Gt, {
value: N,
children: (0, r.jsx)(c.Mt, {
  layout: 'POPOUT',
  userId: t.id,
  guildId: n,
  channelId: I,
  messageId: T,
  roleId: g,
  shouldTrackViewOnMount: null == C || null != C.fullProfileLoadedTimestamp,
  children: (0, r.jsx)(s.Dialog, {
    ref: O,
    'aria-label': t.username,
    children: (0, r.jsx)(_.Z, {
      user: t,
      displayProfile: R,
      profileType: f.y0.BITE_SIZE,
      children: (0, r.jsxs)('div', {
        className: h.container,
        children: [
          (0, r.jsx)('img', {
            src: p,
            alt: ' ',
            className: h.previewForCollected,
            'aria-hidden': !0
          }),
          (0, r.jsx)(E.tG, {
            className: h.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: 'View Profile',
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == S || S(), v({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: N
              });
            }
          })
        ]
      })
    })
  })
})
  });
}