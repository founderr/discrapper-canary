t.d(n, {
  Z: function() {
    return T
  }
});
var i = t(735250);
t(470079);
var r = t(120356),
  l = t.n(r),
  o = t(442837),
  u = t(481060),
  s = t(666188),
  a = t(623624),
  c = t(290034),
  d = t(271383),
  _ = t(594174),
  f = t(940627),
  E = t(705600),
  I = t(267642),
  g = t(981631),
  S = t(689938),
  p = t(556903);

function m(e) {
  let {
    guild: n,
    isBannerVisible: t,
    disableBoostClick: r
  } = e, l = (0, o.e7)([_.default, d.ZP], () => {
    let e = _.default.getCurrentUser();
    return d.ZP.isMember(n.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: s,
    premiumSubscriberCount: f
  } = n;
  if (0 === f && s === g.Eu4.NONE) return null;
  let E = e => {
      e.stopPropagation(), e.preventDefault(), l && !r && (0, a.f)({
        guildId: n.id,
        location: {
          section: g.jXE.GUILD_HEADER,
          object: g.qAy.BOOST_GEM_ICON
        }
      })
    },
    m = s === g.Eu4.NONE ? S.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.nW(s),
    C = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: p.tierTooltipTitle,
        children: m
      }), (0, i.jsx)("div", {
        children: S.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: f
        })
      })]
    });
  return (0, i.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, i.jsx)(u.Tooltip, {
      text: C,
      position: "bottom",
      "aria-label": null != m ? m : "",
      children: e => (0, i.jsx)(u.Clickable, {
        ...e,
        className: p.__invalid_premiumGuildIcon,
        onClick: E,
        children: (0, i.jsx)(c.Z, {
          premiumTier: s,
          iconBackgroundClassName: t ? p.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: t && s !== g.Eu4.TIER_3 ? p.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function C(e) {
  let {
    guild: n,
    disableColor: t,
    disableBoostClick: r
  } = e;
  return (0, s.Z)(n) ? (0, i.jsx)("div", {
    className: p.guildIconV2Container,
    children: (0, i.jsx)(E.Z, {
      guild: n,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: t
      }),
      disableBoostClick: r
    })
  }) : (0, i.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, i.jsx)(f.Z, {
      guild: n,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: t
      })
    })
  })
}

function T(e) {
  let {
    guild: n,
    isBannerVisible: t,
    disableBoostClick: r
  } = e;
  return (0, s.Z)(n) ? (0, i.jsx)(C, {
    guild: n,
    disableColor: !1,
    disableBoostClick: r
  }) : n.hasFeature(g.oNc.VERIFIED) || n.hasFeature(g.oNc.PARTNERED) ? (0, i.jsx)(C, {
    guild: n,
    disableColor: !t
  }) : (0, i.jsx)(m, {
    guild: n,
    isBannerVisible: t,
    disableBoostClick: r
  })
}