i.d(n, {
  Z: function() {
    return C
  }
}), i(47120);
var t = i(735250);
i(470079);
var s = i(442837),
  o = i(974674),
  l = i(696826),
  a = i(420660),
  r = i(233440),
  d = i(314897),
  c = i(158776),
  u = i(699516),
  I = i(998502),
  f = i(877485),
  E = i(505737),
  _ = i(204197),
  Z = i(78675),
  S = i(438163),
  m = i(652853),
  v = i(900687),
  x = i(228168),
  h = i(182294),
  g = i(602091),
  N = i(231338),
  p = i(327570);
let T = I.ZP.getEnableHardwareAcceleration() ? o.Xo : o.qE;

function C(e) {
  let {
    user: n,
    displayProfile: i,
    activity: o,
    guildId: I,
    channelId: C,
    transitionState: R,
    viewProfileItem: A,
    onClose: j
  } = e, {
    theme: M
  } = (0, m.z)(), U = (0, E.Z)(n.id, I), {
    avatarSrc: P,
    eventHandlers: L,
    avatarDecorationSrc: O
  } = (0, _.Z)({
    user: n,
    guildId: null == i ? void 0 : i.guildId,
    size: h.EF.SIZE_120
  }), {
    originalFriendingEnabled: y,
    improvedFriendingEnabled: b
  } = (0, f.V)({
    location: "SimplifiedUserProfileModalHeader"
  }), D = (0, s.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), F = (0, s.e7)([d.default], () => d.default.getId() === n.id), [B, G] = (0, s.Wu)([c.Z], () => {
    let e = c.Z.isMobileOnline(n.id);
    return (0, r.W)(n, C) ? [N.Sk.UNKNOWN, e] : (0, a.Z)(o) ? [N.Sk.STREAMING, e] : [c.Z.getStatus(n.id), e]
  });
  return (0, t.jsxs)("header", {
    children: [(0, t.jsx)(Z.Z, {
      user: n,
      displayProfile: i,
      profileType: x.y0.FULL_SIZE,
      hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
    }), (0, t.jsxs)("div", {
      className: p.headerInner,
      children: [(0, t.jsx)("div", {
        ...L,
        children: (0, t.jsx)(T, {
          src: P,
          avatarDecoration: O,
          size: h.EF.SIZE_120,
          className: p.avatar,
          status: B,
          statusBackdropColor: (0, l.QF)(M),
          "aria-label": n.username,
          isMobile: G,
          statusTooltip: !0,
          statusTooltipDelay: x.vB
        })
      }), (0, t.jsx)(v.Z, {
        user: n,
        isCurrentUser: F,
        guildId: I,
        canDM: U,
        relationshipType: D,
        originalFriendingEnabled: y,
        improvedFriendingEnabled: b,
        viewProfileItem: A,
        onClose: j
      }), (0, t.jsx)(S.Z, {
        user: n,
        profileType: x.y0.FULL_SIZE,
        hasEntered: R === g.Dv.ENTERED,
        onClose: j
      })]
    })]
  })
}