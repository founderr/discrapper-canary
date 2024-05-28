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
  m = s("283029"),
  I = s("357956"),
  g = s("275909"),
  N = s("981631"),
  h = s("735825"),
  C = s("689938"),
  O = s("657390");

function A(e) {
  let {
    guildBoostSlot: t,
    isCancellable: s,
    onCancel: l,
    onUncancel: i,
    premiumSubscription: r,
    useReducedMotion: d
  } = e, u = n.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), c = (0, _.isGuildBoostSlotCanceled)(t);
  return (0, a.jsxs)("li", {
    className: O.unappliedGuildBoostSlot,
    children: [(0, a.jsxs)("div", {
      className: O.unappliedGuildBoostSlotContentPrimary,
      children: [(0, a.jsx)(g.default, {
        className: O.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: c,
        useReducedMotion: d
      }), c && null != r ? (0, a.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: r.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != u ? (0, a.jsx)(I.default, {
        cooldown: u.getTime()
      }) : (0, a.jsx)(o.Text, {
        className: O.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, a.jsxs)("div", {
      className: O.unappliedGuildBoostSlotContentSecondary,
      children: [s && !c && (0, a.jsx)(o.Button, {
        className: O.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => l(t),
        size: o.Button.Sizes.NONE,
        children: C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), c && (0, a.jsx)(o.Button, {
        className: O.unappliedGuildBoostSlotCta,
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
    guildBoostSlots: I
  } = e, g = (0, r.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), x = (null == g ? void 0 : g.isPausedOrPausePending) === !0, M = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), D = (0, S.useFreeBoostTenureRewardEntitlement)(), {
    appliedGuildBoostSlots: P,
    unappliedGuildBoostSlots: v,
    numActiveGuildBoostSlots: b,
    hasCooldownBoosts: j
  } = n.useMemo(() => {
    let e = [],
      t = [],
      s = 0,
      a = !1;
    return I.forEach(n => {
      !(0, _.isGuildBoostSlotCanceled)(n) && s++, n.isOnCooldown() && (a = !0), null != n.premiumGuildSubscription ? e.push(n) : t.push(n)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: t,
      numActiveGuildBoostSlots: s,
      hasCooldownBoosts: a
    }
  }, [I]), U = null != g ? (0, u.getNumIncludedAndTenureRewardPremiumGuildSubscriptionSlots)(g, D) : 0, G = Math.max(0, U - P.length), F = b > U, B = U === I.length, y = B ? G : 1, k = n.useMemo(() => {
    let e = [];
    for (let t = 0; t < y; t++) e.push((0, a.jsx)(m.default, {
      className: O.headerBoostGem,
      useReducedMotion: M
    }, t));
    return e
  }, [y, M]), V = null != D, H = n.useMemo(() => v.find(e => e.isAvailable()), [v]);
  if (0 === v.length) return null;
  let w = v.length;
  return t = B ? 1 === w && V ? C.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: w
  }) : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: w
  }), f.default.isPremium(L) ? l = B && 1 === w && V ? D.skuId === h.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? C.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : C.default.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: w,
    learnMoreHook: (e, t) => (0, a.jsx)(o.Clickable, {
      className: O.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, c.navigateToPremiumMarketingPage)()
      },
      children: e
    }, t)
  }) : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: w
  }), (0, a.jsxs)("div", {
    className: O.wrapper,
    children: [V && (0, a.jsxs)("div", {
      className: O.specialHeader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: O.pill,
        children: C.default.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, a.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: C.default.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, a.jsxs)("div", {
      className: i()(O.content, {
        [O.headerWithBoost]: V,
        [O.headerWithoutSpecialHeader]: !V
      }),
      children: [(0, a.jsxs)("div", {
        className: O.header,
        children: [(0, a.jsxs)("div", {
          className: O.headerContentPrimary,
          children: [(0, a.jsx)("div", {
            className: O.headerBoostGems,
            children: k
          }), (0, a.jsxs)("div", {
            className: O.__invalid_headerCopy,
            children: [(0, a.jsx)(o.Heading, {
              className: O.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, a.jsx)(o.Text, {
              className: O.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: l
            })]
          })]
        }), (0, a.jsx)("div", {
          className: O.headerContentSecondary,
          children: (0, a.jsx)(o.Tooltip, {
            shouldShow: null == H || x,
            text: x ? C.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, a.jsx)(o.Button, {
              ...e,
              disabled: null == H || x,
              onClick: null != H ? () => {
                var e;
                return e = H, void(0, o.openModalLazy)(async () => {
                  let {
                    default: t
                  } = await Promise.all([s.e("49237"), s.e("99387"), s.e("62511"), s.e("8016"), s.e("22646"), s.e("68451")]).then(s.bind(s, "760558"));
                  return s => (0, a.jsx)(t, {
                    ...s,
                    guildBoostSlots: [e],
                    locationSection: N.AnalyticsSections.SETTINGS_PREMIUM
                  })
                })
              } : void 0,
              children: C.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), (!B || j) && (0, a.jsx)("ul", {
        className: O.unappliedBoostSlots,
        children: v.map(e => (0, a.jsx)(A, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: p,
          onUncancel: R,
          premiumSubscription: g,
          useReducedMotion: M
        }, e.id))
      })]
    })]
  })
}