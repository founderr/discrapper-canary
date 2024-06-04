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
  c = s("98278"),
  S = s("314684"),
  E = s("594174"),
  T = s("78839"),
  _ = s("267642"),
  f = s("74538"),
  I = s("283029"),
  m = s("357956"),
  N = s("275909"),
  g = s("981631"),
  h = s("735825"),
  C = s("689938"),
  A = s("657390");

function O(e) {
  let {
    guildBoostSlot: t,
    isCancellable: s,
    onCancel: l,
    onUncancel: i,
    premiumSubscription: r,
    useReducedMotion: d
  } = e, u = n.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), c = (0, _.isGuildBoostSlotCanceled)(t);
  return (0, a.jsxs)("li", {
    className: A.unappliedGuildBoostSlot,
    children: [(0, a.jsxs)("div", {
      className: A.unappliedGuildBoostSlotContentPrimary,
      children: [(0, a.jsx)(N.default, {
        className: A.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: c,
        useReducedMotion: d
      }), c && null != r ? (0, a.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: r.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != u ? (0, a.jsx)(m.default, {
        cooldown: u.getTime()
      }) : (0, a.jsx)(o.Text, {
        className: A.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, a.jsxs)("div", {
      className: A.unappliedGuildBoostSlotContentSecondary,
      children: [s && !c && (0, a.jsx)(o.Button, {
        className: A.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => l(t),
        size: o.Button.Sizes.NONE,
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), c && (0, a.jsx)(o.Button, {
        className: A.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => i(t),
        size: o.Button.Sizes.NONE,
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })]
    })]
  }, t.id)
}

function p(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([s.e("99387"), s.e("55224")]).then(s.bind(s, "401786"));
    return s => (0, a.jsx)(t, {
      ...s,
      guildBoostSlot: e
    })
  })
}

function R(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([s.e("99387"), s.e("73049")]).then(s.bind(s, "450468"));
    return s => (0, a.jsx)(t, {
      ...s,
      guildBoostSlotId: e.id
    })
  })
}
t.default = function(e) {
  let t, l;
  let {
    guildBoostSlots: m
  } = e, N = (0, r.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), x = (null == N ? void 0 : N.isPausedOrPausePending) === !0, M = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), D = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), L = (0, S.useFreeBoostTenureRewardEntitlement)(), {
    appliedGuildBoostSlots: v,
    unappliedGuildBoostSlots: P,
    numActiveGuildBoostSlots: b,
    hasCooldownBoosts: U
  } = n.useMemo(() => {
    let e = [],
      t = [],
      s = 0,
      a = !1;
    return m.forEach(n => {
      !(0, _.isGuildBoostSlotCanceled)(n) && s++, n.isOnCooldown() && (a = !0), null != n.premiumGuildSubscription ? e.push(n) : t.push(n)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: t,
      numActiveGuildBoostSlots: s,
      hasCooldownBoosts: a
    }
  }, [m]), j = null != N ? (0, u.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(N, L) : 0, F = Math.max(0, j - v.length), G = b > j, y = j === m.length, B = y ? F : 1, k = n.useMemo(() => {
    let e = [];
    for (let t = 0; t < B; t++) e.push((0, a.jsx)(I.default, {
      className: A.headerBoostGem,
      useReducedMotion: M
    }, t));
    return e
  }, [B, M]), H = null != L, w = n.useMemo(() => P.find(e => e.isAvailable()), [P]);
  if (0 === P.length) return null;
  let V = P.length;
  return t = y ? 1 === V && H ? C.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: V
  }) : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: V
  }), f.default.isPremium(D) ? l = y && 1 === V && H ? L.skuId === h.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? C.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : C.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: V,
    learnMoreHook: (e, t) => (0, a.jsx)(o.Clickable, {
      className: A.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, c.navigateToPremiumMarketingPage)()
      },
      children: e
    }, t)
  }) : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: V
  }), (0, a.jsxs)("div", {
    className: A.wrapper,
    children: [H && (0, a.jsxs)("div", {
      className: A.specialHeader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: A.pill,
        children: C.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, a.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: C.default.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, a.jsxs)("div", {
      className: i()(A.content, {
        [A.headerWithBoost]: H,
        [A.headerWithoutSpecialHeader]: !H
      }),
      children: [(0, a.jsxs)("div", {
        className: A.header,
        children: [(0, a.jsxs)("div", {
          className: A.headerContentPrimary,
          children: [(0, a.jsx)("div", {
            className: A.headerBoostGems,
            children: k
          }), (0, a.jsxs)("div", {
            className: A.__invalid_headerCopy,
            children: [(0, a.jsx)(o.Heading, {
              className: A.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              className: A.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: l
            })]
          })]
        }), (0, a.jsx)("div", {
          className: A.headerContentSecondary,
          children: (0, a.jsx)(o.Tooltip, {
            shouldShow: null == w || x,
            text: x ? C.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, a.jsx)(o.Button, {
              ...e,
              disabled: null == w || x,
              onClick: null != w ? () => {
                var e;
                return e = w, void(0, o.openModalLazy)(async () => {
                  let {
                    default: t
                  } = await Promise.all([s.e("49237"), s.e("99387"), s.e("54167"), s.e("8016"), s.e("22646"), s.e("30419")]).then(s.bind(s, "760558"));
                  return s => (0, a.jsx)(t, {
                    ...s,
                    guildBoostSlots: [e],
                    locationSection: g.AnalyticsSections.SETTINGS_PREMIUM
                  })
                })
              } : void 0,
              children: C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), (!y || U) && (0, a.jsx)("ul", {
        className: A.unappliedBoostSlots,
        children: P.map(e => (0, a.jsx)(O, {
          guildBoostSlot: e,
          isCancellable: G,
          onCancel: p,
          onUncancel: R,
          premiumSubscription: N,
          useReducedMotion: M
        }, e.id))
      })]
    })]
  })
}