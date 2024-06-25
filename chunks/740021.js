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
  S = i(78675),
  Z = i(438163),
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
    customStatusActivity: I,
    guildId: C,
    channelId: R,
    transitionState: A,
    viewProfileItem: M,
    onClose: j
  } = e, {
    theme: U
  } = (0, m.z)(), P = (0, E.Z)(n.id, C), {
    avatarSrc: L,
    eventHandlers: O,
    avatarDecorationSrc: y
  } = (0, _.Z)({
    user: n,
    guildId: null == i ? void 0 : i.guildId,
    size: h.EF.SIZE_120
  }), {
    originalFriendingEnabled: b,
    improvedFriendingEnabled: D
  } = (0, f.V)({
    location: "SimplifiedUserProfileModalHeader"
  }), F = (0, s.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), B = (0, s.e7)([d.default], () => d.default.getId() === n.id), [G, w] = (0, s.Wu)([c.Z], () => {
    let e = c.Z.isMobileOnline(n.id);
    return (0, r.W)(n, R) ? [N.Sk.UNKNOWN, e] : (0, a.Z)(o) ? [N.Sk.STREAMING, e] : [c.Z.getStatus(n.id), e]
  });
  return (0, t.jsxs)("header", {
    children: [(0, t.jsx)(S.Z, {
      user: n,
      displayProfile: i,
      profileType: x.y0.FULL_SIZE,
      hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
    }), (0, t.jsxs)("div", {
      className: p.headerInner,
      children: [(0, t.jsx)("div", {
        ...O,
        children: (0, t.jsx)(T, {
          src: L,
          avatarDecoration: y,
          size: h.EF.SIZE_120,
          className: p.avatar,
          status: G,
          statusBackdropColor: (0, l.QF)(U),
          "aria-label": n.username,
          isMobile: w,
          statusTooltip: !0,
          statusTooltipDelay: x.vB
        })
      }), (0, t.jsx)(v.Z, {
        user: n,
        isCurrentUser: B,
        guildId: C,
        canDM: P,
        relationshipType: F,
        originalFriendingEnabled: b,
        improvedFriendingEnabled: D,
        viewProfileItem: M,
        onClose: j
      }), (0, t.jsx)(Z.J, {
        user: n,
        statusActivity: I,
        profileType: x.y0.FULL_SIZE,
        hasEntered: A === g.Dv.ENTERED,
        onClose: j
      })]
    })]
  })
}