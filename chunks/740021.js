s.d(i, {
  Z: function() {
    return R
  }
}), s(47120);
var n = s(735250);
s(470079);
var l = s(442837),
  t = s(974674),
  o = s(696826),
  r = s(420660),
  a = s(233440),
  d = s(314897),
  c = s(158776),
  u = s(699516),
  I = s(998502),
  E = s(877485),
  Z = s(505737),
  f = s(204197),
  _ = s(78675),
  S = s(438163),
  v = s(652853),
  m = s(900687),
  x = s(228168),
  h = s(182294),
  N = s(602091),
  g = s(231338),
  T = s(327570);
let C = I.ZP.getEnableHardwareAcceleration() ? t.Xo : t.qE;

function R(e) {
  let {
    user: i,
    displayProfile: s,
    activity: t,
    customStatusActivity: I,
    guildId: R,
    channelId: A,
    transitionState: M,
    viewProfileItem: p,
    onClose: j
  } = e, {
    theme: U
  } = (0, v.z)(), L = (0, Z.Z)(i.id, R), {
    avatarSrc: O,
    eventHandlers: P,
    avatarDecorationSrc: y
  } = (0, f.Z)({
    user: i,
    guildId: null == s ? void 0 : s.guildId,
    size: h.EF.SIZE_120
  }), {
    originalFriendingEnabled: D,
    improvedFriendingEnabled: F
  } = (0, E.V)({
    location: "SimplifiedUserProfileModalHeader"
  }), b = (0, l.e7)([u.Z], () => u.Z.getRelationshipType(i.id)), B = (0, l.e7)([d.default], () => d.default.getId() === i.id), [G, k] = (0, l.Wu)([c.Z], () => {
    let e = c.Z.isMobileOnline(i.id);
    return (0, a.W)(i, A) ? [g.Sk.UNKNOWN, e] : (0, r.Z)(t) ? [g.Sk.STREAMING, e] : [c.Z.getStatus(i.id), e]
  });
  return (0, n.jsxs)("header", {
    children: [(0, n.jsx)(_.Z, {
      user: i,
      displayProfile: s,
      profileType: x.y0.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, n.jsxs)("div", {
      className: T.headerInner,
      children: [(0, n.jsx)("div", {
        ...P,
        children: (0, n.jsx)(C, {
          src: O,
          avatarDecoration: y,
          size: h.EF.SIZE_120,
          className: T.avatar,
          status: G,
          statusBackdropColor: (0, o.QF)(U),
          "aria-label": i.username,
          isMobile: k,
          statusTooltip: !0,
          statusTooltipDelay: x.vB
        })
      }), (0, n.jsx)(m.Z, {
        user: i,
        isCurrentUser: B,
        guildId: R,
        canDM: L,
        relationshipType: b,
        originalFriendingEnabled: D,
        improvedFriendingEnabled: F,
        viewProfileItem: p,
        onClose: j
      }), (0, n.jsx)(S.J, {
        user: i,
        statusActivity: I,
        profileType: x.y0.FULL_SIZE,
        hasEntered: M === N.Dv.ENTERED,
        onClose: j
      })]
    })]
  })
}