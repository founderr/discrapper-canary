s.d(i, {
  Z: function() {
    return R
  }
}), s(47120);
var n = s(735250);
s(470079);
var l = s(442837),
  t = s(481060),
  o = s(100527),
  r = s(906732),
  a = s(158776),
  d = s(5192),
  c = s(785717),
  u = s(318661),
  I = s(741308),
  E = s(681837),
  Z = s(502762),
  f = s(530),
  _ = s(544989),
  S = s(272510),
  v = s(740021),
  m = s(616140),
  x = s(29530),
  h = s(228168),
  N = s(981631),
  g = s(689938),
  T = s(327570);

function R(e) {
  let {
    user: i,
    currentUser: s,
    guildId: R,
    channelId: C,
    messageId: A,
    roleId: M,
    initialSection: p,
    initialSubsection: j,
    transitionState: U,
    onClose: L,
    sourceAnalyticsLocations: O = []
  } = e, P = R === N.ME ? void 0 : R, y = (0, u.ZP)(i.id, P), {
    analyticsLocations: D
  } = (0, r.ZP)([...O, o.Z.SIMPLIFIED_PROFILE_MODAL]), F = (0, l.e7)([a.Z], () => a.Z.findActivity(i.id, e => {
    let {
      type: i
    } = e;
    return i === N.IIU.CUSTOM_STATUS
  })), b = (0, x.Z)(i);
  return (0, n.jsx)(r.Gt, {
    value: D,
    children: (0, n.jsx)(c.Mt, {
      layout: "SIMPLIFIED_MODAL",
      userId: i.id,
      guildId: P,
      channelId: C,
      messageId: A,
      roleId: M,
      showGuildProfile: !0,
      children: (0, n.jsx)(t.ModalRoot, {
        transitionState: U,
        className: T.root,
        hideShadow: !0,
        "aria-label": g.Z.Messages.USER_PROFILE_MODAL,
        children: (0, n.jsxs)(Z.Z, {
          user: i,
          displayProfile: y,
          profileType: h.y0.FULL_SIZE,
          children: [(0, n.jsx)(_.Z, {
            profileType: h.y0.FULL_SIZE,
            children: (0, n.jsx)(S.Z, {
              user: i,
              profileType: h.y0.FULL_SIZE,
              guildId: P
            })
          }), (0, n.jsx)(v.Z, {
            user: i,
            displayProfile: y,
            guildId: P,
            channelId: C,
            activity: void 0,
            customStatusActivity: F,
            transitionState: U,
            onClose: L
          }), (0, n.jsxs)("div", {
            className: T.body,
            children: [(0, n.jsx)(f.Z, {
              user: i,
              profileType: h.y0.FULL_SIZE,
              nickname: d.ZP.getName(P, C, i),
              pronouns: null == y ? void 0 : y.pronouns,
              nicknameVariant: "heading-xl/bold",
              nicknameIcons: (0, n.jsx)(E.Z, {
                userId: i.id
              }),
              tags: (0, n.jsx)(I.Z, {
                displayProfile: y,
                profileType: h.y0.FULL_SIZE,
                onClose: L
              })
            }), (0, n.jsx)(Z.Z.Overlay, {
              className: T.overlay,
              children: (0, n.jsx)(m.Z, {
                user: i,
                currentUser: s,
                displayProfile: y,
                items: b,
                initialSection: p,
                initialSubsection: j,
                onClose: L
              })
            })]
          })]
        })
      })
    })
  })
}