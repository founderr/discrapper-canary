t.d(n, {
  Z: function() {
    return C
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  o = t(442837),
  u = t(481060),
  s = t(666188),
  a = t(623624),
  c = t(290034),
  d = t(271383),
  f = t(594174),
  E = t(940627),
  _ = t(705600),
  I = t(267642),
  S = t(981631),
  g = t(689938),
  p = t(556903);

function T(e) {
  let {
    guild: n,
    isBannerVisible: t,
    disableBoostClick: i
  } = e, l = (0, o.e7)([f.default, d.ZP], () => {
    let e = f.default.getCurrentUser();
    return d.ZP.isMember(n.id, null == e ? void 0 : e.id)
  }), {
    premiumTier: s,
    premiumSubscriberCount: E
  } = n;
  if (0 === E && s === S.Eu4.NONE) return null;
  let _ = e => {
      e.stopPropagation(), e.preventDefault(), l && !i && (0, a.f)({
        guildId: n.id,
        location: {
          section: S.jXE.GUILD_HEADER,
          object: S.qAy.BOOST_GEM_ICON
        }
      })
    },
    T = s === S.Eu4.NONE ? g.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.nW(s),
    h = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: p.tierTooltipTitle,
        children: T
      }), (0, r.jsx)("div", {
        children: g.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
          subscriberCount: E
        })
      })]
    });
  return (0, r.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, r.jsx)(u.Tooltip, {
      text: h,
      position: "bottom",
      "aria-label": null != T ? T : "",
      children: e => (0, r.jsx)(u.Clickable, {
        ...e,
        className: p.__invalid_premiumGuildIcon,
        onClick: _,
        children: (0, r.jsx)(c.Z, {
          premiumTier: s,
          iconBackgroundClassName: t ? p.boostedGuildTierIconBackgroundWithVisibleBanner : null,
          iconClassName: t && s !== S.Eu4.TIER_3 ? p.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function h(e) {
  let {
    guild: n,
    disableColor: t,
    disableBoostClick: i
  } = e;
  return (0, s.Z)(n) ? (0, r.jsx)("div", {
    className: p.guildIconV2Container,
    children: (0, r.jsx)(_.Z, {
      guild: n,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: t
      }),
      disableBoostClick: i
    })
  }) : (0, r.jsx)("div", {
    className: p.guildIconContainer,
    children: (0, r.jsx)(E.Z, {
      guild: n,
      tooltipPosition: "bottom",
      tooltipColor: u.Tooltip.Colors.PRIMARY,
      className: l()(p.guildBadge, {
        [p.disableColor]: t
      })
    })
  })
}

function C(e) {
  let {
    guild: n,
    isBannerVisible: t,
    disableBoostClick: i
  } = e;
  return (0, s.Z)(n) ? (0, r.jsx)(h, {
    guild: n,
    disableColor: !1,
    disableBoostClick: i
  }) : n.hasFeature(S.oNc.VERIFIED) || n.hasFeature(S.oNc.PARTNERED) ? (0, r.jsx)(h, {
    guild: n,
    disableColor: !t
  }) : (0, r.jsx)(T, {
    guild: n,
    isBannerVisible: t,
    disableBoostClick: i
  })
}