i.d(n, {
  Z: function() {
    return R
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
  f = i(332390),
  E = i(877485),
  _ = i(505737),
  Z = i(204197),
  m = i(78675),
  S = i(438163),
  v = i(652853),
  x = i(900687),
  h = i(228168),
  g = i(182294),
  N = i(602091),
  p = i(231338),
  C = i(327570);
let T = I.ZP.getEnableHardwareAcceleration() ? o.Xo : o.qE;

function R(e) {
  let {
    user: n,
    displayProfile: i,
    activity: o,
    guildId: I,
    channelId: R,
    transitionState: A,
    viewProfileItem: M,
    onClose: j
  } = e, {
    theme: U
  } = (0, v.z)(), P = (0, _.Z)(n.id, I), {
    avatarSrc: L,
    eventHandlers: O,
    avatarDecorationSrc: y
  } = (0, Z.Z)({
    user: n,
    guildId: null == i ? void 0 : i.guildId,
    size: g.EF.SIZE_120
  }), {
    originalFriendingEnabled: b,
    improvedFriendingEnabled: D
  } = (0, E.V)({
    location: "SimplifiedUserProfileModalHeader"
  }), {
    persistentCallCtaEnabled: F
  } = (0, f.l)({
    location: "SimplifiedUserProfileModalHeader"
  }), B = (0, s.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), G = (0, s.e7)([d.default], () => d.default.getId() === n.id), [w, k] = (0, s.Wu)([c.Z], () => {
    let e = c.Z.isMobileOnline(n.id);
    return (0, r.W)(n, R) ? [p.Sk.UNKNOWN, e] : (0, a.Z)(o) ? [p.Sk.STREAMING, e] : [c.Z.getStatus(n.id), e]
  });
  return (0, t.jsxs)("header", {
    children: [(0, t.jsx)(m.Z, {
      user: n,
      displayProfile: i,
      profileType: h.y0.FULL_SIZE,
      hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
    }), (0, t.jsxs)("div", {
      className: C.headerInner,
      children: [(0, t.jsx)("div", {
        ...O,
        children: (0, t.jsx)(T, {
          src: L,
          avatarDecoration: y,
          size: g.EF.SIZE_120,
          className: C.avatar,
          status: w,
          statusBackdropColor: (0, l.QF)(U),
          "aria-label": n.username,
          isMobile: k,
          statusTooltip: !0,
          statusTooltipDelay: h.vB
        })
      }), (0, t.jsx)(x.Z, {
        user: n,
        isCurrentUser: G,
        guildId: I,
        canDM: P,
        relationshipType: B,
        originalFriendingEnabled: b,
        improvedFriendingEnabled: D,
        persistentCallCtaEnabled: F,
        viewProfileItem: M,
        onClose: j
      }), (0, t.jsx)(S.Z, {
        user: n,
        profileType: h.y0.FULL_SIZE,
        hasEntered: A === N.Dv.ENTERED,
        onClose: j
      })]
    })]
  })
}