i.d(n, {
  Z: function() {
    return R
  }
}), i(47120);
var l = i(735250);
i(470079);
var s = i(442837),
  t = i(974674),
  o = i(696826),
  a = i(420660),
  r = i(233440),
  d = i(314897),
  u = i(158776),
  c = i(699516),
  I = i(998502),
  E = i(877485),
  f = i(505737),
  Z = i(204197),
  _ = i(78675),
  S = i(438163),
  m = i(652853),
  v = i(900687),
  N = i(228168),
  x = i(182294),
  h = i(602091),
  g = i(231338),
  C = i(586940);
let T = I.ZP.getEnableHardwareAcceleration() ? t.Xo : t.qE;

function R(e) {
  let {
    user: n,
    displayProfile: i,
    activity: t,
    customStatusActivity: I,
    guildId: R,
    channelId: A,
    transitionState: M,
    viewProfileItem: j,
    onClose: p
  } = e, {
    theme: U
  } = (0, m.z)(), O = (0, f.Z)(n.id, R), {
    avatarSrc: P,
    eventHandlers: L,
    avatarDecorationSrc: D
  } = (0, Z.Z)({
    user: n,
    guildId: null == i ? void 0 : i.guildId,
    size: x.EF.SIZE_120
  }), {
    originalFriendingEnabled: y,
    improvedFriendingEnabled: F
  } = (0, E.V)({
    location: "SimplifiedUserProfileModalHeader"
  }), b = (0, s.e7)([c.Z], () => c.Z.getRelationshipType(n.id)), G = (0, s.e7)([d.default], () => d.default.getId() === n.id), [B, k] = (0, s.Wu)([u.Z], () => {
    let e = u.Z.isMobileOnline(n.id);
    return (0, r.W)(n, A) ? [g.Sk.UNKNOWN, e] : (0, a.Z)(t) ? [g.Sk.STREAMING, e] : [u.Z.getStatus(n.id), e]
  });
  return (0, l.jsxs)("header", {
    children: [(0, l.jsx)(_.Z, {
      user: n,
      displayProfile: i,
      profileType: N.y0.FULL_SIZE,
      hasProfileEffect: (null == i ? void 0 : i.profileEffectId) != null
    }), (0, l.jsxs)("div", {
      className: C.inner,
      children: [(0, l.jsx)("div", {
        ...L,
        children: (0, l.jsx)(T, {
          src: P,
          avatarDecoration: D,
          size: x.EF.SIZE_120,
          className: C.avatar,
          status: B,
          statusBackdropColor: (0, o.QF)(U),
          "aria-label": n.username,
          isMobile: k,
          statusTooltip: !0,
          statusTooltipDelay: N.vB
        })
      }), (0, l.jsx)(v.Z, {
        user: n,
        isCurrentUser: G,
        guildId: R,
        canDM: O,
        relationshipType: b,
        originalFriendingEnabled: y,
        improvedFriendingEnabled: F,
        viewProfileItem: j,
        onClose: p
      }), (0, l.jsx)(S.J, {
        statusActivity: I,
        profileType: N.y0.FULL_SIZE,
        hasEntered: M === h.Dv.ENTERED
      })]
    })]
  })
}