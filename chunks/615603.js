t(653041);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(607070),
  E = t(158153),
  d = t(760558),
  _ = t(401786),
  T = t(450468),
  S = t(98278),
  u = t(314684),
  I = t(594174),
  N = t(78839),
  A = t(267642),
  C = t(74538),
  O = t(283029),
  m = t(357956),
  h = t(275909),
  g = t(981631),
  R = t(735825),
  M = t(689938),
  x = t(902671);

function D(e) {
  let {
    guildBoostSlot: s,
    isCancellable: t,
    onCancel: a,
    onUncancel: l,
    premiumSubscription: r,
    useReducedMotion: c
  } = e, E = i.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), d = (0, A.tl)(s);
  return (0, n.jsxs)("li", {
    className: x.unappliedGuildBoostSlot,
    children: [(0, n.jsxs)("div", {
      className: x.unappliedGuildBoostSlotContentPrimary,
      children: [(0, n.jsx)(h.Z, {
        className: x.unappliedGuildBoostSlotIcon,
        hasCooldown: s.isOnCooldown(),
        isCanceled: d,
        useReducedMotion: c
      }), d && null != r ? (0, n.jsx)(o.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: r.currentPeriodEnd
        })
      }) : s.isOnCooldown() && null != E ? (0, n.jsx)(m.Z, {
        cooldown: E.getTime()
      }) : (0, n.jsx)(o.Text, {
        className: x.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, n.jsxs)("div", {
      className: x.unappliedGuildBoostSlotContentSecondary,
      children: [t && !d && (0, n.jsx)(o.Button, {
        className: x.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => a(s),
        size: o.Button.Sizes.NONE,
        children: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), d && (0, n.jsx)(o.Button, {
        className: x.unappliedGuildBoostSlotCta,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        onClick: () => l(s),
        size: o.Button.Sizes.NONE,
        children: M.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })]
    })]
  }, s.id)
}

function p(e) {
  (0, o.openModalLazy)(async () => s => (0, n.jsx)(_.default, {
    ...s,
    guildBoostSlot: e
  }))
}

function L(e) {
  (0, o.openModalLazy)(async () => s => (0, n.jsx)(T.default, {
    ...s,
    guildBoostSlotId: e.id
  }))
}
s.Z = function(e) {
  let s, t;
  let {
    guildBoostSlots: a
  } = e, _ = (0, r.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()), T = (null == _ ? void 0 : _.isPausedOrPausePending) === !0, m = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), h = (0, r.e7)([I.default], () => I.default.getCurrentUser()), P = (0, u.Vp)(), {
    appliedGuildBoostSlots: Z,
    unappliedGuildBoostSlots: f,
    numActiveGuildBoostSlots: v,
    hasCooldownBoosts: j
  } = i.useMemo(() => {
    let e = [],
      s = [],
      t = 0,
      n = !1;
    return a.forEach(i => {
      !(0, A.tl)(i) && t++, i.isOnCooldown() && (n = !0), null != i.premiumGuildSubscription ? e.push(i) : s.push(i)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: s,
      numActiveGuildBoostSlots: t,
      hasCooldownBoosts: n
    }
  }, [a]), U = null != _ ? (0, E.G)(_, P) : 0, B = Math.max(0, U - Z.length), b = v > U, G = U === a.length, F = G ? B : 1, V = i.useMemo(() => {
    let e = [];
    for (let s = 0; s < F; s++) e.push((0, n.jsx)(O.Z, {
      className: x.headerBoostGem,
      useReducedMotion: m
    }, s));
    return e
  }, [F, m]), y = null != P, Y = i.useMemo(() => f.find(e => e.isAvailable()), [f]);
  if (0 === f.length) return null;
  let H = f.length;
  return s = G ? 1 === H && y ? M.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H
  }) : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: H
  }), C.ZP.isPremium(h) ? t = G && 1 === H && y ? P.skuId === R.Ft.FREE_GUILD_BOOST_1_MONTH ? M.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : M.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H,
    learnMoreHook: (e, s) => (0, n.jsx)(o.Clickable, {
      className: x.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, S.z)()
      },
      children: e
    }, s)
  }) : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: H
  }), (0, n.jsxs)("div", {
    className: x.wrapper,
    children: [y && (0, n.jsxs)("div", {
      className: x.specialHeader,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: x.pill,
        children: M.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, n.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: M.Z.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, n.jsxs)("div", {
      className: l()(x.content, {
        [x.headerWithBoost]: y,
        [x.headerWithoutSpecialHeader]: !y
      }),
      children: [(0, n.jsxs)("div", {
        className: x.header,
        children: [(0, n.jsxs)("div", {
          className: x.headerContentPrimary,
          children: [(0, n.jsx)("div", {
            className: x.headerBoostGems,
            children: V
          }), (0, n.jsxs)("div", {
            className: x.__invalid_headerCopy,
            children: [(0, n.jsx)(o.Heading, {
              className: x.headerHeading,
              variant: "heading-lg/bold",
              children: s
            }), (0, n.jsx)(o.Text, {
              className: x.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: t
            })]
          })]
        }), (0, n.jsx)("div", {
          className: x.headerContentSecondary,
          children: (0, n.jsx)(o.Tooltip, {
            shouldShow: null == Y || T,
            text: T ? M.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, n.jsx)(o.Button, {
              ...e,
              disabled: null == Y || T,
              onClick: null != Y ? () => {
                var e;
                return e = Y, void(0, o.openModalLazy)(async () => s => (0, n.jsx)(d.default, {
                  ...s,
                  guildBoostSlots: [e],
                  locationSection: g.jXE.SETTINGS_PREMIUM
                }))
              } : void 0,
              children: M.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), (!G || j) && (0, n.jsx)("ul", {
        className: x.unappliedBoostSlots,
        children: f.map(e => (0, n.jsx)(D, {
          guildBoostSlot: e,
          isCancellable: b,
          onCancel: p,
          onUncancel: L,
          premiumSubscription: _,
          useReducedMotion: m
        }, e.id))
      })]
    })]
  })
}