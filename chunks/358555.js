t.d(n, {
  Z: function() {
return m;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(442837),
  u = t(481060),
  a = t(666188),
  s = t(623624),
  c = t(290034),
  d = t(271383),
  _ = t(594174),
  f = t(940627),
  E = t(705600),
  I = t(267642),
  g = t(981631),
  p = t(689938),
  S = t(621908);

function C(e) {
  let {
guild: n,
isBannerVisible: t,
disableBoostClick: i
  } = e, o = (0, l.e7)([
_.default,
d.ZP
  ], () => {
let e = _.default.getCurrentUser();
return d.ZP.isMember(n.id, null == e ? void 0 : e.id);
  }), {
premiumTier: a,
premiumSubscriberCount: f
  } = n;
  if (0 === f && a === g.Eu4.NONE)
return null;
  let E = e => {
  e.stopPropagation(), e.preventDefault(), o && !i && (0, s.f)({
    guildId: n.id,
    location: {
      section: g.jXE.GUILD_HEADER,
      object: g.qAy.BOOST_GEM_ICON
    }
  });
},
C = a === g.Eu4.NONE ? p.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.nW(a),
T = (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: S.tierTooltipTitle,
      children: C
    }),
    (0, r.jsx)('div', {
      children: p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
        subscriberCount: f
      })
    })
  ]
});
  return (0, r.jsx)('div', {
className: S.guildIconContainer,
children: (0, r.jsx)(u.Tooltip, {
  text: T,
  position: 'bottom',
  'aria-label': null != C ? C : '',
  children: e => (0, r.jsx)(u.Clickable, {
    ...e,
    className: S.__invalid_premiumGuildIcon,
    onClick: E,
    children: (0, r.jsx)(c.Z, {
      premiumTier: a,
      iconBackgroundClassName: t ? S.boostedGuildTierIconBackgroundWithVisibleBanner : null,
      iconClassName: t && a !== g.Eu4.TIER_3 ? S.boostedGuildTierMutedIconWithVisibleBanner : null
    })
  })
})
  });
}

function T(e) {
  let {
guild: n,
disableColor: t,
disableBoostClick: i
  } = e;
  return (0, a.Z)(n) ? (0, r.jsx)('div', {
className: S.guildIconV2Container,
children: (0, r.jsx)(E.Z, {
  guild: n,
  tooltipPosition: 'bottom',
  tooltipColor: u.Tooltip.Colors.PRIMARY,
  className: o()(S.guildBadge, {
    [S.disableColor]: t
  }),
  disableBoostClick: i
})
  }) : (0, r.jsx)('div', {
className: S.guildIconContainer,
children: (0, r.jsx)(f.Z, {
  guild: n,
  tooltipPosition: 'bottom',
  tooltipColor: u.Tooltip.Colors.PRIMARY,
  className: o()(S.guildBadge, {
    [S.disableColor]: t
  })
})
  });
}

function m(e) {
  let {
guild: n,
isBannerVisible: t,
disableBoostClick: i
  } = e;
  return (0, a.Z)(n) ? (0, r.jsx)(T, {
guild: n,
disableColor: !1,
disableBoostClick: i
  }) : n.hasFeature(g.oNc.VERIFIED) || n.hasFeature(g.oNc.PARTNERED) ? (0, r.jsx)(T, {
guild: n,
disableColor: !t
  }) : (0, r.jsx)(C, {
guild: n,
isBannerVisible: t,
disableBoostClick: i
  });
}