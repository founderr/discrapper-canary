n.d(i, {
  Z: function() {
    return A
  }
}), n(47120);
var s = n(735250);
n(470079);
var l = n(442837),
  t = n(974674),
  o = n(696826),
  r = n(420660),
  a = n(233440),
  d = n(314897),
  u = n(158776),
  c = n(699516),
  I = n(998502),
  E = n(877485),
  Z = n(505737),
  _ = n(204197),
  f = n(78675),
  S = n(438163),
  v = n(652853),
  m = n(900687),
  x = n(228168),
  N = n(182294),
  h = n(602091),
  g = n(231338),
  T = n(327570);
let C = I.ZP.getEnableHardwareAcceleration() ? t.Xo : t.qE;

function A(e) {
  let {
    user: i,
    displayProfile: n,
    activity: t,
    customStatusActivity: I,
    guildId: A,
    channelId: R,
    transitionState: M,
    viewProfileItem: U,
    onClose: j
  } = e, {
    theme: p
  } = (0, v.z)(), O = (0, Z.Z)(i.id, A), {
    avatarSrc: P,
    eventHandlers: L,
    avatarDecorationSrc: y
  } = (0, _.Z)({
    user: i,
    guildId: null == n ? void 0 : n.guildId,
    size: N.EF.SIZE_120
  }), {
    originalFriendingEnabled: D,
    improvedFriendingEnabled: F
  } = (0, E.V)({
    location: "SimplifiedUserProfileModalHeader"
  }), b = (0, l.e7)([c.Z], () => c.Z.getRelationshipType(i.id)), G = (0, l.e7)([d.default], () => d.default.getId() === i.id), [B, w] = (0, l.Wu)([u.Z], () => {
    let e = u.Z.isMobileOnline(i.id);
    return (0, a.W)(i, R) ? [g.Sk.UNKNOWN, e] : (0, r.Z)(t) ? [g.Sk.STREAMING, e] : [u.Z.getStatus(i.id), e]
  });
  return (0, s.jsxs)("header", {
    children: [(0, s.jsx)(f.Z, {
      user: i,
      displayProfile: n,
      profileType: x.y0.FULL_SIZE,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (0, s.jsxs)("div", {
      className: T.headerInner,
      children: [(0, s.jsx)("div", {
        ...L,
        children: (0, s.jsx)(C, {
          src: P,
          avatarDecoration: y,
          size: N.EF.SIZE_120,
          className: T.avatar,
          status: B,
          statusBackdropColor: (0, o.QF)(p),
          "aria-label": i.username,
          isMobile: w,
          statusTooltip: !0,
          statusTooltipDelay: x.vB
        })
      }), (0, s.jsx)(m.Z, {
        user: i,
        isCurrentUser: G,
        guildId: A,
        canDM: O,
        relationshipType: b,
        originalFriendingEnabled: D,
        improvedFriendingEnabled: F,
        viewProfileItem: U,
        onClose: j
      }), (0, s.jsx)(S.J, {
        statusActivity: I,
        profileType: x.y0.FULL_SIZE,
        hasEntered: M === h.Dv.ENTERED
      })]
    })]
  })
}