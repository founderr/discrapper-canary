n.d(t, {
  Z: function() {
return C;
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
  g = n(215105),
  S = n(652853),
  A = n(228168),
  N = n(981631),
  v = n(474936),
  O = n(905936);
let R = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function C(e) {
  let {
user: t,
displayProfile: n,
guildId: a,
channelId: p,
profileType: C,
animateOnHover: y,
onOpenProfile: D,
isReplySource: L,
onReply: b,
showReplyPopout: M = !1
  } = e, {
theme: P
  } = (0, S.z)(), {
analyticsLocations: U
  } = (0, d.ZP)(c.Z.AVATAR), {
trackUserProfileAction: w
  } = (0, m.KZ)(), x = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.p9.TIER_2), G = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [
t,
p
  ]), [k, B] = i.useState(!1), F = () => {
B(!0);
  }, V = () => {
B(!1);
  }, {
status: H,
isMobileOnline: Z
  } = (0, o.cj)([
E.Z,
f.Z
  ], () => {
let e = null != E.Z.getAnyStreamForUser(t.id),
  n = f.Z.findActivity(t.id, t => {
    let {
      type: n
    } = t;
    return e ? n === N.IIU.PLAYING : n !== N.IIU.CUSTOM_STATUS;
  });
return {
  status: (0, u.Z)(n) ? N.Skl.STREAMING : f.Z.getStatus(t.id),
  isMobileOnline: f.Z.isMobileOnline(t.id)
};
  }), Y = C === A.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80, j = s()(O.avatar, {
[O.hoisted]: L,
[O.biteSize]: C === A.y0.BITE_SIZE,
[O.fullSize]: C === A.y0.FULL_SIZE,
[O.panel]: C === A.y0.PANEL
  }), {
avatarDecorationSrc: W,
avatarSrc: K,
eventHandlers: z
  } = (0, I.Z)({
user: t,
guildId: a,
size: Y,
animateOnHover: y
  }), q = (0, r.jsx)(R, {
src: K,
avatarDecoration: W,
size: Y,
'aria-label': t.username,
imageClassName: null != D ? O.overlay : void 0,
status: G ? N.Skl.UNKNOWN : H,
statusBackdropColor: x && !G ? (0, l.getStatusBackdropColor)(P) : void 0,
isMobile: Z,
statusTooltip: !0,
statusTooltipDelay: A.vB
  }), Q = () => null == D ? (0, r.jsx)('div', {
...z,
children: q
  }) : (0, r.jsx)(l.Clickable, {
...z,
onClick: () => {
  w({
    action: 'PRESS_VIEW_PROFILE',
    analyticsLocations: U
  }), null == D || D();
},
className: O.clickable,
children: q
  });
  return (0, r.jsxs)('div', {
className: j,
onFocus: F,
onBlur: V,
onMouseOver: F,
onMouseLeave: V,
children: [
  (0, r.jsx)(l.Popout, {
    renderPopout: e => {
      let {
        setPopoutRef: n
      } = e;
      return (0, r.jsx)(g.Z, {
        user: t,
        guildId: a,
        channelId: p,
        profileType: C,
        sourceType: A.N9.AVATAR,
        setPopoutRef: n,
        onReply: b
      });
    },
    animationPosition: 'top',
    position: 'bottom',
    align: 'center',
    shouldShow: M,
    children: () => Q()
  }),
  (0, r.jsx)(T.Z, {
    user: t,
    sourceType: A.N9.AVATAR,
    isVisible: k,
    isExpandable: !1,
    onReply: b
  })
]
  });
}