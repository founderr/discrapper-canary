i.d(n, {
  Z: function() {
    return N
  }
}), i(47120);
var t = i(735250);
i(470079);
var s = i(481060),
  o = i(100527),
  l = i(906732),
  a = i(5192),
  r = i(785717),
  d = i(318661),
  c = i(741308),
  u = i(681837),
  I = i(502762),
  f = i(530),
  E = i(544989),
  _ = i(272510),
  Z = i(740021),
  m = i(616140),
  S = i(29530),
  v = i(228168),
  x = i(981631),
  h = i(689938),
  g = i(327570);

function N(e) {
  let {
    user: n,
    currentUser: i,
    guildId: N,
    channelId: p,
    messageId: C,
    roleId: T,
    initialSection: R,
    initialSubsection: A,
    transitionState: M,
    onClose: j,
    sourceAnalyticsLocations: U = []
  } = e, P = N === x.ME ? void 0 : N, L = (0, d.ZP)(n.id, P), {
    analyticsLocations: O
  } = (0, l.ZP)([...U, o.Z.SIMPLIFIED_PROFILE_MODAL]), y = (0, S.Z)(n);
  return (0, t.jsx)(l.Gt, {
    value: O,
    children: (0, t.jsx)(r.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: n.id,
      guildId: P,
      channelId: p,
      messageId: C,
      roleId: T,
      showGuildProfile: !0,
      children: (0, t.jsx)(s.ModalRoot, {
        transitionState: M,
        className: g.root,
        hideShadow: !0,
        "aria-label": h.Z.Messages.USER_PROFILE_MODAL,
        children: (0, t.jsxs)(I.Z, {
          user: n,
          displayProfile: L,
          profileType: v.y0.FULL_SIZE,
          children: [(0, t.jsx)(E.Z, {
            profileType: v.y0.FULL_SIZE,
            children: (0, t.jsx)(_.Z, {
              user: n,
              profileType: v.y0.FULL_SIZE,
              guildId: P
            })
          }), (0, t.jsx)(Z.Z, {
            user: n,
            displayProfile: L,
            guildId: P,
            channelId: p,
            activity: void 0,
            transitionState: M,
            onClose: j
          }), (0, t.jsxs)("div", {
            className: g.body,
            children: [(0, t.jsx)(f.Z, {
              user: n,
              profileType: v.y0.FULL_SIZE,
              nickname: a.ZP.getName(P, p, n),
              pronouns: null == L ? void 0 : L.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, t.jsx)(u.Z, {
                userId: n.id
              }),
              tags: (0, t.jsx)(c.Z, {
                displayProfile: L,
                profileType: v.y0.FULL_SIZE,
                onClose: j
              })
            }), (0, t.jsx)(I.Z.Overlay, {
              className: g.overlay,
              children: (0, t.jsx)(m.Z, {
                user: n,
                currentUser: i,
                displayProfile: L,
                items: y,
                initialSection: R,
                initialSubsection: A,
                onClose: j
              })
            })]
          })]
        })
      })
    })
  })
}