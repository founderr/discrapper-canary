n.d(t, {
  Z: function() {
return T;
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
  d = n(221292),
  _ = n(318661),
  E = n(502762),
  f = n(475413),
  h = n(228168),
  p = n(689938),
  m = n(895793),
  I = n(609440);

function T(e) {
  let {
user: t,
guildId: n,
setPopoutRef: T,
channelId: g,
messageId: S,
roleId: A,
onViewBlockedProfileClick: N,
newAnalyticsLocations: v = []
  } = e, {
analyticsLocations: O
  } = (0, l.ZP)([
...v,
o.Z.BLOCKED_PROFILE_POPOUT
  ]), R = (0, c.ZB)({
layout: 'BLOCKED_PROFILE_POPOUT',
userId: t.id,
guildId: n,
channelId: g,
messageId: S,
roleId: A
  }), C = i.useRef(null), y = (0, _.ZP)(t.id, n), D = (0, a.e7)([u.ZP], () => null != n ? u.ZP.getMember(n, t.id) : null);
  return i.useEffect(() => {
null == T || T(null == C ? void 0 : C.current);
  }, [
C,
T
  ]), (0, r.jsx)(l.Gt, {
value: O,
children: (0, r.jsx)(c.Mt, {
  value: R,
  shouldTrackViewOnMount: null == D || null != D.fullProfileLoadedTimestamp,
  children: (0, r.jsx)(s.Dialog, {
    ref: C,
    'aria-label': t.username,
    children: (0, r.jsx)(E.Z, {
      user: t,
      displayProfile: y,
      profileType: h.y0.BITE_SIZE,
      children: (0, r.jsxs)('div', {
        className: m.container,
        children: [
          (0, r.jsx)('img', {
            alt: '',
            src: I,
            className: m.previewForCollected,
            'aria-hidden': !0
          }),
          (0, r.jsx)(f.tG, {
            className: m.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: p.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == N || N(), (0, d.pQ)({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: O,
                ...R
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