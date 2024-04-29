"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("931240"),
  d = n("650461"),
  c = n("620929"),
  f = n("308083"),
  E = n("689938"),
  h = n("156610");
t.default = e => {
  let {
    guildId: t,
    setPage: _,
    onClose: C
  } = e, m = s.useRef(null), S = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    progress: p,
    errors: I,
    submitting: T
  } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getStateForGuild(t)), {
    gameApplicationIds: g,
    playstyle: A,
    interests: N,
    description: v,
    tag: R,
    verificationForm: L,
    badgeKind: O,
    badgePrimaryColor: M,
    badgeSecondaryColor: P,
    banner: x,
    brandPrimaryColor: y,
    brandSecondaryColor: D,
    wildcardDescriptors: b,
    badgeImage: U
  } = null != p ? p : {}, j = s.useRef(null), G = s.useRef(null), w = s.useRef(null), [k, F] = s.useState(!1), B = async () => {
    try {
      await u.convertGuildToClan(t, {
        gameApplicationIds: g,
        playstyle: A,
        interests: N,
        description: v,
        tag: R,
        verificationForm: L,
        badgeKind: O,
        badgePrimaryColor: M,
        badgeSecondaryColor: P,
        banner: x,
        brandPrimaryColor: y,
        brandSecondaryColor: D,
        wildcardDescriptors: b,
        badgeImage: U
      })
    } catch (e) {
      return
    }
    C(), (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("63636")]).then(n.bind(n, "511385"));
      return n => (0, a.jsx)(e, {
        guildId: t,
        tag: R,
        brandPrimaryColor: y,
        ...n
      })
    })
  }, H = (0, l.useSpring)({
    ref: j,
    config: l.config.slow,
    from: {
      flex: 1,
      paddingLeft: S ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), V = (0, l.useSpring)({
    ref: G,
    config: l.config.slow,
    from: {
      flex: S ? 1 : 0,
      paddingRight: S ? 120 : 0,
      marginLeft: S ? -32 : 0
    },
    to: {
      flex: 1,
      paddingRight: 120,
      marginLeft: -32
    }
  }), Y = (0, l.useSpring)({
    ref: w,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  (0, l.useChain)([j, G, w], [0, 0, 1]);
  let W = s.useMemo(() => null != I && Object.values(I).some(e => null != e), [I]);
  return (0, a.jsxs)("div", {
    className: h.animationContainer,
    children: [(0, a.jsxs)(l.animated.div, {
      className: h.signTextLeft,
      style: {
        ...H,
        ...Y
      },
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: E.default.Messages.CLAN_SETUP_SIGN_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: h.scrollContainer,
      children: (0, a.jsx)(c.default, {
        guildId: t,
        signed: k,
        setSigned: F,
        signRef: m
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: h.signTextRight,
      style: {
        ...V,
        ...Y
      },
      children: [(0, a.jsx)(r.Button, {
        className: h.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          var e;
          null === (e = m.current) || void 0 === e || e.scrollIntoView({
            behavior: "smooth"
          }), F(!0)
        },
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
      })]
    }), (0, a.jsx)(r.Button, {
      className: h.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: C,
      children: E.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsx)(r.Button, {
      className: h.previousButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: () => _(f.ClanSetupModalPages.SETUP),
      children: E.default.Messages.PAGINATION_PREVIOUS
    }), (0, a.jsxs)("div", {
      className: h.finishButton,
      children: [W && (0, a.jsx)(r.Text, {
        color: "status-danger",
        variant: "text-sm/normal",
        children: E.default.Messages.CLAN_SUBMIT_ERROR
      }), (0, a.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        disabled: !k,
        submitting: T,
        onClick: B,
        children: E.default.Messages.FINISH
      })]
    })]
  })
}