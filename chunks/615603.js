"use strict";
s.r(t), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("607070"),
  u = s("158153"),
  c = s("760558"),
  S = s("401786"),
  E = s("450468"),
  T = s("98278"),
  _ = s("314684"),
  I = s("594174"),
  N = s("78839"),
  f = s("267642"),
  g = s("74538"),
  m = s("283029"),
  C = s("357956"),
  A = s("275909"),
  h = s("981631"),
  O = s("735825"),
  p = s("689938"),
  R = s("657390");

function x(e) {
  let {
    guildBoostSlot: t,
    isCancellable: s,
    onCancel: l,
    onUncancel: i,
    premiumSubscription: r,
    useReducedMotion: d
  } = e, u = n.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), c = (0, f.isGuildBoostSlotCanceled)(t);
  return (0, a.jsxs)("li", {
    className: R.unappliedGuildBoostSlot,
    children: [(0, a.jsxs)("div", {
      className: R.unappliedGuildBoostSlotContentPrimary,
      children: [(0, a.jsx)(A.default, {
        className: R.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: c,
        useReducedMotion: d
      }), c && null != r ? (0, a.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: r.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != u ? (0, a.jsx)(C.default, {
        cooldown: u.getTime()
      }) : (0, a.jsx)(o.Text, {
        className: R.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, a.jsxs)("div", {
      className: R.unappliedGuildBoostSlotContentSecondary,
      children: [s && !c && (0, a.jsx)(o.Button, {
        className: R.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => l(t),
        size: o.Button.Sizes.NONE,
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), c && (0, a.jsx)(o.Button, {
        className: R.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => i(t),
        size: o.Button.Sizes.NONE,
        children: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })]
    })]
  }, t.id)
}

function M(e) {
  (0, o.openModalLazy)(async () => t => (0, a.jsx)(S.default, {
    ...t,
    guildBoostSlot: e
  }))
}

function D(e) {
  (0, o.openModalLazy)(async () => t => (0, a.jsx)(E.default, {
    ...t,
    guildBoostSlotId: e.id
  }))
}
t.default = function(e) {
  let t, s;
  let {
    guildBoostSlots: l
  } = e, S = (0, r.useStateFromStores)([N.default], () => N.default.getPremiumTypeSubscription()), E = (null == S ? void 0 : S.isPausedOrPausePending) === !0, C = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), A = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), L = (0, _.useFreeBoostTenureRewardEntitlement)(), {
    appliedGuildBoostSlots: P,
    unappliedGuildBoostSlots: b,
    numActiveGuildBoostSlots: v,
    hasCooldownBoosts: U
  } = n.useMemo(() => {
    let e = [],
      t = [],
      s = 0,
      a = !1;
    return l.forEach(n => {
      !(0, f.isGuildBoostSlotCanceled)(n) && s++, n.isOnCooldown() && (a = !0), null != n.premiumGuildSubscription ? e.push(n) : t.push(n)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: t,
      numActiveGuildBoostSlots: s,
      hasCooldownBoosts: a
    }
  }, [l]), j = null != S ? (0, u.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(S, L) : 0, G = Math.max(0, j - P.length), F = v > j, B = j === l.length, y = B ? G : 1, V = n.useMemo(() => {
    let e = [];
    for (let t = 0; t < y; t++) e.push((0, a.jsx)(m.default, {
      className: R.headerBoostGem,
      useReducedMotion: C
    }, t));
    return e
  }, [y, C]), H = null != L, k = n.useMemo(() => b.find(e => e.isAvailable()), [b]);
  if (0 === b.length) return null;
  let Y = b.length;
  return t = B ? 1 === Y && H ? p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: Y
  }) : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: Y
  }), g.default.isPremium(A) ? s = B && 1 === Y && H ? L.skuId === O.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : p.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: Y,
    learnMoreHook: (e, t) => (0, a.jsx)(o.Clickable, {
      className: R.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, T.navigateToPremiumMarketingPage)()
      },
      children: e
    }, t)
  }) : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: Y
  }), (0, a.jsxs)("div", {
    className: R.wrapper,
    children: [H && (0, a.jsxs)("div", {
      className: R.specialHeader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: R.pill,
        children: p.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, a.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: p.default.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, a.jsxs)("div", {
      className: i()(R.content, {
        [R.headerWithBoost]: H,
        [R.headerWithoutSpecialHeader]: !H
      }),
      children: [(0, a.jsxs)("div", {
        className: R.header,
        children: [(0, a.jsxs)("div", {
          className: R.headerContentPrimary,
          children: [(0, a.jsx)("div", {
            className: R.headerBoostGems,
            children: V
          }), (0, a.jsxs)("div", {
            className: R.__invalid_headerCopy,
            children: [(0, a.jsx)(o.Heading, {
              className: R.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              className: R.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: s
            })]
          })]
        }), (0, a.jsx)("div", {
          className: R.headerContentSecondary,
          children: (0, a.jsx)(o.Tooltip, {
            shouldShow: null == k || E,
            text: E ? p.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, a.jsx)(o.Button, {
              ...e,
              disabled: null == k || E,
              onClick: null != k ? () => {
                var e;
                return e = k, void(0, o.openModalLazy)(async () => t => (0, a.jsx)(c.default, {
                  ...t,
                  guildBoostSlots: [e],
                  locationSection: h.AnalyticsSections.SETTINGS_PREMIUM
                }))
              } : void 0,
              children: p.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), (!B || U) && (0, a.jsx)("ul", {
        className: R.unappliedBoostSlots,
        children: b.map(e => (0, a.jsx)(x, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: M,
          onUncancel: D,
          premiumSubscription: S,
          useReducedMotion: C
        }, e.id))
      })]
    })]
  })
}