n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250),
  a = n(470079),
  l = n(597312),
  s = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  u = n(680295),
  d = n(5192),
  h = n(785717),
  p = n(318661),
  m = n(741308),
  _ = n(588822),
  f = n(900927),
  E = n(678738),
  g = n(502762),
  C = n(530),
  I = n(171368),
  x = n(308829),
  T = n(354810),
  N = n(228168),
  v = n(689938),
  S = n(20256),
  Z = n(77540);

function A(e) {
  let {
    user: t,
    channel: n
  } = e, {
    analyticsLocations: A
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), M = (0, p.ZP)(t.id), b = (0, r.ZP)(), R = a.useRef(null), j = (0, s.Z)(R), L = e => {
    (0, I.openUserProfileModal)({
      sourceAnalyticsLocations: A,
      userId: t.id,
      channelId: n.id,
      ...e
    })
  };
  return (0, i.jsx)(c.Gt, {
    value: A,
    children: (0, i.jsx)(h.Mt, {
      layout: "SIMPLIFIED_DM_PANEL",
      userId: t.id,
      channelId: n.id,
      children: (0, i.jsxs)(g.Z, {
        ref: R,
        user: t,
        displayProfile: M,
        profileType: N.y0.PANEL,
        themeOverride: b,
        className: S.container,
        children: [(0, i.jsxs)(l.u2, {
          children: [(0, i.jsx)(T.Z, {
            user: t,
            displayProfile: M,
            channel: n,
            isHovering: j,
            onOpenProfile: L
          }), (0, i.jsxs)("div", {
            className: Z.body,
            children: [(0, i.jsx)(C.Z, {
              user: t,
              profileType: N.y0.PANEL,
              nickname: d.ZP.getName(null, n.id, t),
              pronouns: null == M ? void 0 : M.pronouns,
              onOpenProfile: L,
              tags: (0, i.jsx)(m.Z, {
                displayProfile: M,
                profileType: N.y0.PANEL
              })
            }), (0, i.jsxs)(g.Z.Overlay, {
              className: Z.overlay,
              children: [(0, i.jsx)(E.Z, {
                title: v.Z.Messages.USER_POPOUT_ABOUT_ME,
                headingColor: "header-primary",
                children: (0, i.jsx)(_.Z, {
                  userId: t.id,
                  animateOnHover: !0,
                  isHovering: j
                })
              }), (0, i.jsx)(E.Z, {
                title: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                headingColor: "header-primary",
                children: (0, i.jsx)(f.Z, {
                  userId: t.id
                })
              })]
            })]
          })]
        }), (0, i.jsx)(x.Z, {
          user: t,
          channelId: n.id
        }), (null == M ? void 0 : M.profileEffectId) != null && (0, i.jsx)(u.Z, {
          profileEffectId: null == M ? void 0 : M.profileEffectId,
          isHovering: j
        })]
      })
    })
  })
}