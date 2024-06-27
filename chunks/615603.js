t(653041);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(607070),
  d = t(158153),
  _ = t(760558),
  E = t(401786),
  u = t(450468),
  T = t(98278),
  S = t(314684),
  I = t(594174),
  N = t(78839),
  C = t(267642),
  m = t(74538),
  A = t(283029),
  g = t(357956),
  O = t(275909),
  h = t(981631),
  p = t(735825),
  R = t(689938),
  x = t(902671);

function M(e) {
  let {
    guildBoostSlot: s,
    isCancellable: t,
    onCancel: i,
    onUncancel: r,
    premiumSubscription: o,
    useReducedMotion: c
  } = e, d = a.useMemo(() => null != s.cooldownEndsAt ? new Date(s.cooldownEndsAt) : null, [s]), _ = (0, C.tl)(s);
  return (0, n.jsxs)("li", {
    className: x.unappliedGuildBoostSlot,
    children: [(0, n.jsxs)("div", {
      className: x.unappliedGuildBoostSlotContentPrimary,
      children: [(0, n.jsx)(O.Z, {
        className: x.unappliedGuildBoostSlotIcon,
        hasCooldown: s.isOnCooldown(),
        isCanceled: _,
        useReducedMotion: c
      }), _ && null != o ? (0, n.jsx)(l.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PENDING_CANCELATION.format({
          date: o.currentPeriodEnd
        })
      }) : s.isOnCooldown() && null != d ? (0, n.jsx)(g.Z, {
        cooldown: d.getTime()
      }) : (0, n.jsx)(l.Text, {
        className: x.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_UNAPPLIED_GUILD_BOOST_DESCRIPTION
      })]
    }), (0, n.jsxs)("div", {
      className: x.unappliedGuildBoostSlotContentSecondary,
      children: [t && !_ && (0, n.jsx)(l.Button, {
        className: x.unappliedGuildBoostSlotCta,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        onClick: () => i(s),
        size: l.Button.Sizes.NONE,
        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON
      }), _ && (0, n.jsx)(l.Button, {
        className: x.unappliedGuildBoostSlotCta,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        onClick: () => r(s),
        size: l.Button.Sizes.NONE,
        children: R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON
      })]
    })]
  }, s.id)
}

function D(e) {
  (0, l.openModalLazy)(async () => s => (0, n.jsx)(E.default, {
    ...s,
    guildBoostSlot: e
  }))
}

function f(e) {
  (0, l.openModalLazy)(async () => s => (0, n.jsx)(u.default, {
    ...s,
    guildBoostSlotId: e.id
  }))
}
s.Z = function(e) {
  let s, t;
  let {
    guildBoostSlots: i
  } = e, E = (0, o.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()), u = (null == E ? void 0 : E.isPausedOrPausePending) === !0, g = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), O = (0, o.e7)([I.default], () => I.default.getCurrentUser()), L = (0, S.Vp)(), {
    appliedGuildBoostSlots: P,
    unappliedGuildBoostSlots: Z,
    numActiveGuildBoostSlots: v,
    hasCooldownBoosts: b
  } = a.useMemo(() => {
    let e = [],
      s = [],
      t = 0,
      n = !1;
    return i.forEach(a => {
      !(0, C.tl)(a) && t++, a.isOnCooldown() && (n = !0), null != a.premiumGuildSubscription ? e.push(a) : s.push(a)
    }), {
      appliedGuildBoostSlots: e,
      unappliedGuildBoostSlots: s,
      numActiveGuildBoostSlots: t,
      hasCooldownBoosts: n
    }
  }, [i]), j = null != E ? (0, d.G)(E, L) : 0, B = Math.max(0, j - P.length), U = v > j, G = j === i.length, F = G ? B : 1, V = a.useMemo(() => {
    let e = [];
    for (let s = 0; s < F; s++) e.push((0, n.jsx)(A.Z, {
      className: x.headerBoostGem,
      useReducedMotion: g
    }, s));
    return e
  }, [F, g]), y = null != L, Y = a.useMemo(() => Z.find(e => e.isAvailable()), [Z]);
  if (0 === Z.length) return null;
  let H = Z.length;
  return s = G ? 1 === H && y ? R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_TITLE : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_INCLUDED_WITH_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H
  }) : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_HEADING_V2.format({
    numUnappliedGuildBoostSlots: H
  }), m.ZP.isPremium(O) ? t = G && 1 === H && y ? L.skuId === p.Ft.FREE_GUILD_BOOST_1_MONTH ? R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_1_MONTH_VARIANT : R.Z.Messages.SINGLE_UNUSED_GUILD_BOOST_NITRO_REWARD_SUBTITLE_3_MONTHS_VARIANT : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING_WITH_PREMIUM_SUBSCRIPTION.format({
    numUnappliedGuildBoostSlots: H,
    learnMoreHook: (e, s) => (0, n.jsx)(l.Clickable, {
      className: x.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, T.z)()
      },
      children: e
    }, s)
  }) : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_HEADING_UNAPPLIED_GUILD_BOOST_SUBHEADING.format({
    numUnappliedGuildBoostSlots: H
  }), (0, n.jsxs)("div", {
    className: x.wrapper,
    children: [y && (0, n.jsxs)("div", {
      className: x.specialHeader,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-xs/semibold",
        className: x.pill,
        children: R.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE.toLocaleUpperCase()
      }), (0, n.jsx)(l.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: R.Z.Messages.GUILD_BOOST_NITRO_REWARD_BANNER
      })]
    }), (0, n.jsxs)("div", {
      className: r()(x.content, {
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
            children: [(0, n.jsx)(l.Heading, {
              className: x.headerHeading,
              variant: "heading-lg/bold",
              children: s
            }), (0, n.jsx)(l.Text, {
              className: x.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: t
            })]
          })]
        }), (0, n.jsx)("div", {
          className: x.headerContentSecondary,
          children: (0, n.jsx)(l.Tooltip, {
            shouldShow: null == Y || u,
            text: u ? R.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION : R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_AVAILABLE_GUILD_BOOST_SLOTS,
            children: e => (0, n.jsx)(l.Button, {
              ...e,
              disabled: null == Y || u,
              onClick: null != Y ? () => {
                var e;
                return e = Y, void(0, l.openModalLazy)(async () => s => (0, n.jsx)(_.default, {
                  ...s,
                  guildBoostSlots: [e],
                  locationSection: h.jXE.SETTINGS_PREMIUM
                }))
              } : void 0,
              children: R.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_SERVER
            })
          })
        })]
      }), (!G || b) && (0, n.jsx)("ul", {
        className: x.unappliedBoostSlots,
        children: Z.map(e => (0, n.jsx)(M, {
          guildBoostSlot: e,
          isCancellable: U,
          onCancel: D,
          onUncancel: f,
          premiumSubscription: E,
          useReducedMotion: g
        }, e.id))
      })]
    })]
  })
}