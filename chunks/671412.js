n.d(t, {
  Z: function() {
return R;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(420660),
  c = n(100527),
  d = n(906732),
  _ = n(233440),
  E = n(199902),
  f = n(158776),
  h = n(74538),
  p = n(998502),
  m = n(785717),
  I = n(204197),
  T = n(825801),
  g = n(652853),
  S = n(228168),
  A = n(981631),
  N = n(474936),
  v = n(234328);
let O = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function R(e) {
  let {
user: t,
displayProfile: n,
guildId: a,
channelId: p,
profileType: R,
animateOnHover: C,
onOpenProfile: y
  } = e, {
theme: D
  } = (0, g.z)(), {
analyticsLocations: L
  } = (0, d.ZP)(c.Z.AVATAR), {
trackUserProfileAction: b
  } = (0, m.KZ)(), M = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, N.p9.TIER_2), P = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [
t,
p
  ]), [U, w] = i.useState(!1), x = () => {
w(!0);
  }, G = () => {
w(!1);
  }, {
status: k,
isMobileOnline: B
  } = (0, o.cj)([
E.Z,
f.Z
  ], () => {
let e = null != E.Z.getAnyStreamForUser(t.id),
  n = f.Z.findActivity(t.id, t => {
    let {
      type: n
    } = t;
    return e ? n === A.IIU.PLAYING : n !== A.IIU.CUSTOM_STATUS;
  });
return {
  status: (0, u.Z)(n) ? A.Skl.STREAMING : f.Z.getStatus(t.id),
  isMobileOnline: f.Z.isMobileOnline(t.id)
};
  }), F = R === S.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80, V = s()(v.avatar, {
[v.biteSize]: R === S.y0.BITE_SIZE,
[v.fullSize]: R === S.y0.FULL_SIZE,
[v.panel]: R === S.y0.PANEL
  }), {
avatarDecorationSrc: H,
avatarSrc: Z,
eventHandlers: Y
  } = (0, I.Z)({
user: t,
guildId: a,
size: F,
animateOnHover: C
  }), j = (0, r.jsx)(O, {
src: Z,
avatarDecoration: H,
size: F,
'aria-label': t.username,
imageClassName: null != y ? v.overlay : void 0,
status: P ? A.Skl.UNKNOWN : k,
statusBackdropColor: M && !P ? (0, l.getStatusBackdropColor)(D) : void 0,
isMobile: B,
statusTooltip: !0,
statusTooltipDelay: S.vB
  }), W = null == y ? (0, r.jsx)('div', {
...Y,
children: j
  }) : (0, r.jsx)(l.Clickable, {
...Y,
onClick: () => {
  b({
    action: 'PRESS_VIEW_PROFILE',
    analyticsLocations: L
  }), null == y || y();
},
className: v.clickable,
children: j
  });
  return (0, r.jsxs)('div', {
className: V,
onFocus: x,
onBlur: G,
onMouseOver: x,
onMouseLeave: G,
children: [
  W,
  (0, r.jsx)(T.Z, {
    user: t,
    sourceType: S.N9.AVATAR,
    isVisible: U,
    isExpandable: !1
  })
]
  });
}