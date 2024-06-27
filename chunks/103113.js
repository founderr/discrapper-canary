"use strict";
n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(727637),
  a = n(100527),
  l = n(906732),
  u = n(680295),
  _ = n(5192),
  c = n(785717),
  d = n(318661),
  E = n(78675),
  I = n(741308),
  T = n(588822),
  h = n(502762),
  f = n(530),
  S = n(513099),
  A = n(228168),
  N = n(472375);

function m(e) {
  let {
    user: t,
    guildId: n,
    channelId: m,
    messageId: O,
    roleId: R,
    setPopoutRef: p,
    closePopout: g,
    newAnalyticsLocations: C = []
  } = e, v = (0, d.ZP)(t.id, n), {
    analyticsLocations: L
  } = (0, l.ZP)([...C, a.Z.BITE_SIZE_PROFILE_POPOUT]), D = r.useRef(null), M = (0, o.Z)(D);
  return r.useEffect(() => {
    null == p || p(null == D ? void 0 : D.current)
  }, [D, p]), (0, i.jsx)(l.Gt, {
    value: L,
    children: (0, i.jsx)(c.Mt, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: n,
      channelId: m,
      messageId: O,
      roleId: R,
      children: (0, i.jsxs)(s.Dialog, {
        ref: D,
        "aria-label": t.username,
        children: [(0, i.jsxs)(h.Z, {
          user: t,
          displayProfile: v,
          profileType: A.y0.BITE_SIZE,
          children: [(0, i.jsxs)("header", {
            className: N.header,
            children: [(0, i.jsx)(E.Z, {
              user: t,
              displayProfile: v,
              guildId: n,
              profileType: A.y0.BITE_SIZE,
              hasProfileEffect: (null == v ? void 0 : v.profileEffectId) != null
            }), (0, i.jsx)(S.Z, {
              user: t,
              displayProfile: v,
              guildId: n,
              channelId: m
            })]
          }), (0, i.jsxs)("div", {
            className: N.body,
            children: [(0, i.jsx)(f.Z, {
              user: t,
              profileType: A.y0.BITE_SIZE,
              nickname: _.ZP.getName(n, m, t),
              tags: (0, i.jsx)(I.Z, {
                displayProfile: v,
                profileType: A.y0.BITE_SIZE,
                onClose: g
              })
            }), (0, i.jsx)(T.Z, {
              userId: t.id,
              userBio: null == v ? void 0 : v.bio,
              setLineClamp: !1,
              textColor: "header-primary"
            })]
          }), (0, i.jsx)("footer", {
            className: N.footer
          })]
        }), (null == v ? void 0 : v.profileEffectId) != null && (0, i.jsx)(u.Z, {
          profileEffectId: null == v ? void 0 : v.profileEffectId,
          isHovering: M
        })]
      })
    })
  })
}