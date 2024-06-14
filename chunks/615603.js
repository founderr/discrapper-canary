"use strict";
s.r(t), s("653041");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
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
  g = s("267642"),
  f = s("74538"),
  m = s("283029"),
  A = s("357956"),
  C = s("275909"),
  O = s("981631"),
  h = s("735825"),
  R = s("689938"),
  p = s("657390");

function M(e) {
  let {
    guildBoostSlot: t,
    isCancellable: s,
    onCancel: i,
    onUncancel: l,
    premiumSubscription: r,
    useReducedMotion: d
  } = e, u = n.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), c = (0, g.isGuildBoostSlotCanceled)(t);
  return (0, a.jsxs)("li", {
    className: p.unappliedGuildBoostSlot,
    children: [(0, a.jsxs)("div", {
      className: p.unappliedGuildBoostSlotContentPrimary,
      children: [(0, a.jsx)(C.default, {
        className: p.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: c,
        useReducedMotion: d
      }), c && null != r ? (0, a.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: r.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != u ? (0, a.jsx)(A.default, {
        cooldown: u.getTime()
      }) : (0, a.jsx)(o.Text, {
        className: p.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, a.jsxs)("div", {
      className: p.unappliedGuildBoostSlotContentSecondary,
      children: [s && !c && (0, a.jsx)(o.Button, {
        className: p.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => i(t),
        size: o.Button.Sizes.NONE,
        children: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), c && (0, a.jsx)(o.Button, {
        className: p.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => l(t),
        size: o.Button.Sizes.NONE,
        children: R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })]
    })]
  }, t.id)
}

function D(e) {
  (0, o.openModalLazy)(async () => t => (0, a.jsx)(S.default, {
    ...t,
    guildBoostSlot: e
  }))
}

function x(e) {
  (0, o.openModalLazy)(async () => t => (0, a.jsx)(E.default, {
    ...t,
    guildBoostSlotId: e.id
  }))
}
t.default = function(e) {
  let t, s;
  let {
    guildBoostSlots: i
  } = e, S = (0, r.useStateFromStores)([N.default], () => N.default.getPremiumTypeSubscription()), E = (null == S ? void 0 : S.isPausedOrPausePending) === !0, A = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), C = (0, r.useStateFromStores)([I.default], () => I.default.getCurrentUser()), L = (0, _.useFreeBoostTenureRewardEntitlement)(), {
    appliedGuildBoostSlots: P,
    unappliedGuildBoostSlots: b,
    numActiveGuildBoostSlots: v,
    hasCooldownBoosts: U
  } = n.useMemo(() => {
    let e = [],
      t = [],
      s = 0,
      a = !1;
    return i.forEach(n => {
      !(0, g.isGuildBoostSlotCanceled)(n) && s++, n.isOnCooldown() && (a = !0), null != n.premiumGuildSubscription ? e.push(n) : t.push(n)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: t,
      numActiveGuildBoostSlots: s,
      hasCooldownBoosts: a
    }
  }, [i]), j = null != S ? (0, u.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(S, L) : 0, G = Math.max(0, j - P.length), F = v > j, B = j === i.length, y = B ? G : 1, V = n.useMemo(() => {
    let e = [];
    for (let t = 0; t < y; t++) e.push((0, a.jsx)(m.default, {
      className: p.headerBoostGem,
      useReducedMotion: A
    }, t));
    return e
  }, [y, A]), Y = null != L, H = n.useMemo(() => b.find(e => e.isAvailable()), [b]);
  if (0 === b.length) return null;
  let k = b.length;
  return t = B ? 1 === k && Y ? R.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: k
  }) : R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: k
  }), f.default.isPremium(C) ? s = B && 1 === k && Y ? L.skuId === h.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? R.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : R.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: k,
    learnMoreHook: (e, t) => (0, a.jsx)(o.Clickable, {
      className: p.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, T.navigateToPremiumMarketingPage)()
      },
      children: e
    }, t)
  }) : R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: k
  }), (0, a.jsxs)("div", {
    className: p.wrapper,
    children: [Y && (0, a.jsxs)("div", {
      className: p.specialHeader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: p.pill,
        children: R.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, a.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: R.default.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, a.jsxs)("div", {
      className: l()(p.content, {
        [p.headerWithBoost]: Y,
        [p.headerWithoutSpecialHeader]: !Y
      }),
      children: [(0, a.jsxs)("div", {
        className: p.header,
        children: [(0, a.jsxs)("div", {
          className: p.headerContentPrimary,
          children: [(0, a.jsx)("div", {
            className: p.headerBoostGems,
            children: V
          }), (0, a.jsxs)("div", {
            className: p.__invalid_headerCopy,
            children: [(0, a.jsx)(o.Heading, {
              className: p.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              className: p.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: s
            })]
          })]
        }), (0, a.jsx)("div", {
          className: p.headerContentSecondary,
          children: (0, a.jsx)(o.Tooltip, {
            shouldShow: null == H || E,
            text: E ? R.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, a.jsx)(o.Button, {
              ...e,
              disabled: null == H || E,
              onClick: null != H ? () => {
                var e;
                return e = H, void(0, o.openModalLazy)(async () => t => (0, a.jsx)(c.default, {
                  ...t,
                  guildBoostSlots: [e],
                  locationSection: O.AnalyticsSections.SETTINGS_PREMIUM
                }))
              } : void 0,
              children: R.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), (!B || U) && (0, a.jsx)("ul", {
        className: p.unappliedBoostSlots,
        children: b.map(e => (0, a.jsx)(M, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: D,
          onUncancel: x,
          premiumSubscription: S,
          useReducedMotion: A
        }, e.id))
      })]
    })]
  })
}