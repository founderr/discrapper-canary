n.d(i, {
  Z: function() {
    return C
  }
}), n(47120);
var s = n(735250);
n(470079);
var l = n(442837),
  t = n(481060),
  o = n(100527),
  r = n(906732),
  a = n(158776),
  d = n(5192),
  u = n(785717),
  c = n(318661),
  I = n(741308),
  E = n(681837),
  Z = n(502762),
  _ = n(530),
  f = n(544989),
  S = n(272510),
  v = n(740021),
  m = n(616140),
  x = n(105758),
  N = n(228168),
  h = n(981631),
  g = n(689938),
  T = n(327570);

function C(e) {
  let {
    user: i,
    currentUser: n,
    guildId: C,
    channelId: A,
    messageId: R,
    roleId: M,
    initialSection: U,
    initialSubsection: j,
    transitionState: p,
    onClose: O,
    sourceAnalyticsLocations: P = []
  } = e, L = C === h.ME ? void 0 : C, y = (0, c.ZP)(i.id, L), {
    analyticsLocations: D
  } = (0, r.ZP)([...P, o.Z.SIMPLIFIED_PROFILE_MODAL]), F = (0, l.e7)([a.Z], () => a.Z.findActivity(i.id, e => {
    let {
      type: i
    } = e;
    return i === h.IIU.CUSTOM_STATUS
  })), b = (0, x.Z)(i);
  return (0, s.jsx)(r.Gt, {
    value: D,
    children: (0, s.jsx)(u.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: i.id,
      guildId: L,
      channelId: A,
      messageId: R,
      roleId: M,
      showGuildProfile: !0,
      children: (0, s.jsx)(t.ModalRoot, {
        transitionState: p,
        className: T.root,
        hideShadow: !0,
        "aria-label": g.Z.Messages.USER_PROFILE_MODAL,
        children: (0, s.jsxs)(Z.Z, {
          user: i,
          displayProfile: y,
          profileType: N.y0.FULL_SIZE,
          children: [(0, s.jsx)(f.Z, {
            profileType: N.y0.FULL_SIZE,
            children: (0, s.jsx)(S.Z, {
              user: i,
              profileType: N.y0.FULL_SIZE,
              guildId: L
            })
          }), (0, s.jsx)(v.Z, {
            user: i,
            displayProfile: y,
            guildId: L,
            channelId: A,
            activity: void 0,
            customStatusActivity: F,
            transitionState: p,
            onClose: O
          }), (0, s.jsxs)("div", {
            className: T.body,
            children: [(0, s.jsx)(_.Z, {
              user: i,
              profileType: N.y0.FULL_SIZE,
              nickname: d.ZP.getName(L, A, i),
              pronouns: null == y ? void 0 : y.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, s.jsx)(E.Z, {
                userId: i.id
              }),
              tags: (0, s.jsx)(I.Z, {
                displayProfile: y,
                profileType: N.y0.FULL_SIZE,
                onClose: O
              })
            }), (0, s.jsx)(Z.Z.Overlay, {
              className: T.overlay,
              children: (0, s.jsx)(m.Z, {
                user: i,
                currentUser: n,
                displayProfile: y,
                items: b,
                initialSection: U,
                initialSubsection: j,
                onClose: O
              })
            })]
          })]
        })
      })
    })
  })
}