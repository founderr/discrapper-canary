n.d(t, {
  Z: function() {
    return A
  }
});
var l = n(735250),
  i = n(470079),
  s = n(597312),
  a = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  u = n(680295),
  d = n(5192),
  h = n(785717),
  m = n(318661),
  p = n(741308),
  E = n(588822),
  g = n(900927),
  f = n(678738),
  C = n(502762),
  _ = n(530),
  I = n(171368),
  x = n(308829),
  T = n(354810),
  N = n(228168),
  Z = n(689938),
  S = n(20256),
  v = n(77540);

function A(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: A
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), M = (0, m.ZP)(t.id), R = (0, r.ZP)(), j = i.useRef(null), L = (0, a.Z)(j), O = e => {
    (0, I.openUserProfileModal)({
      sourceAnalyticsLocations: A,
      userId: t.id,
      channelId: n.id,
      ...e
    })
  };
  return (0, l.jsx)(c.Gt, {
    value: A,
    children: (0, l.jsx)(h.Mt, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, l.jsxs)(C.Z, {
        ref: j,
        user: t,
        displayProfile: M,
        profileType: N.y0.PANEL,
        themeOverride: R,
        className: S.container,
        children: [(0, l.jsxs)(s.u2, {
          children: [(0, l.jsx)(T.Z, {
            user: t,
            displayProfile: M,
            channel: n,
            isHovering: L,
            onOpenProfile: O
          }), (0, l.jsxs)("div", {
            className: v.body,
            children: [(0, l.jsx)(_.Z, {
              user: t,
              profileType: N.y0.PANEL,
              nickname: d.ZP.getName(null, n.id, t),
              pronouns: null == M ? void 0 : M.pronouns,
              onOpenProfile: O,
              tags: (0, l.jsx)(p.Z, {
                displayProfile: M,
                profileType: N.y0.PANEL
              })
            }), (0, l.jsxs)(C.Z.Overlay, {
              className: v.overlay,
              children: [(0, l.jsx)(f.Z, {
                title: Z.Z.Messages.USER_POPOUT_ABOUT_ME,
                headingColor: "header-primary",
                children: (0, l.jsx)(E.Z, {
                  userId: t.id,
                  animateOnHover: !0,
                  isHovering: L
                })
              }), (0, l.jsx)(f.Z, {
                title: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                headingColor: "header-primary",
                children: (0, l.jsx)(g.Z, {
                  userId: t.id
                })
              })]
            })]
          })]
        }), (0, l.jsx)(x.Z, {
          user: t,
          channelId: n.id
        }), (null == M ? void 0 : M.profileEffectId) != null && (0, l.jsx)(u.Z, {
          profileEffectId: null == M ? void 0 : M.profileEffectId,
          isHovering: L
        })]
      })
    })
  })
}