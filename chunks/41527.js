i.d(n, {
  Z: function() {
    return T
  }
}), i(47120);
var t = i(735250);
i(470079);
var s = i(442837),
  o = i(481060),
  l = i(100527),
  a = i(906732),
  r = i(158776),
  d = i(5192),
  c = i(785717),
  u = i(318661),
  I = i(741308),
  f = i(681837),
  E = i(502762),
  _ = i(530),
  S = i(544989),
  Z = i(272510),
  m = i(740021),
  v = i(616140),
  x = i(29530),
  h = i(228168),
  g = i(981631),
  N = i(689938),
  p = i(327570);

function T(e) {
  let {
    user: n,
    currentUser: i,
    guildId: T,
    channelId: C,
    messageId: R,
    roleId: A,
    initialSection: M,
    initialSubsection: j,
    transitionState: U,
    onClose: P,
    sourceAnalyticsLocations: L = []
  } = e, O = T === g.ME ? void 0 : T, y = (0, u.ZP)(n.id, O), {
    analyticsLocations: b
  } = (0, a.ZP)([...L, l.Z.SIMPLIFIED_PROFILE_MODAL]), D = (0, s.e7)([r.Z], () => r.Z.findActivity(n.id, e => {
    let {
      type: n
    } = e;
    return n === g.IIU.CUSTOM_STATUS
  })), F = (0, x.Z)(n);
  return (0, t.jsx)(a.Gt, {
    value: b,
    children: (0, t.jsx)(c.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: n.id,
      guildId: O,
      channelId: C,
      messageId: R,
      roleId: A,
      showGuildProfile: !0,
      children: (0, t.jsx)(o.ModalRoot, {
        transitionState: U,
        className: p.root,
        hideShadow: !0,
        "aria-label": N.Z.Messages.USER_PROFILE_MODAL,
        children: (0, t.jsxs)(E.Z, {
          user: n,
          displayProfile: y,
          profileType: h.y0.FULL_SIZE,
          children: [(0, t.jsx)(S.Z, {
            profileType: h.y0.FULL_SIZE,
            children: (0, t.jsx)(Z.Z, {
              user: n,
              profileType: h.y0.FULL_SIZE,
              guildId: O
            })
          }), (0, t.jsx)(m.Z, {
            user: n,
            displayProfile: y,
            guildId: O,
            channelId: C,
            activity: void 0,
            customStatusActivity: D,
            transitionState: U,
            onClose: P
          }), (0, t.jsxs)("div", {
            className: p.body,
            children: [(0, t.jsx)(_.Z, {
              user: n,
              profileType: h.y0.FULL_SIZE,
              nickname: d.ZP.getName(O, C, n),
              pronouns: null == y ? void 0 : y.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, t.jsx)(f.Z, {
                userId: n.id
              }),
              tags: (0, t.jsx)(I.Z, {
                displayProfile: y,
                profileType: h.y0.FULL_SIZE,
                onClose: P
              })
            }), (0, t.jsx)(E.Z.Overlay, {
              className: p.overlay,
              children: (0, t.jsx)(v.Z, {
                user: n,
                currentUser: i,
                displayProfile: y,
                items: F,
                initialSection: M,
                initialSubsection: j,
                onClose: P
              })
            })]
          })]
        })
      })
    })
  })
}