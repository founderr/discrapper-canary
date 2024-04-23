"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("718017"),
  i = a("442837"),
  r = a("481060"),
  o = a("607070"),
  u = a("931240"),
  d = a("650461"),
  c = a("620929"),
  f = a("308083"),
  E = a("689938"),
  h = a("653196");
t.default = e => {
  let {
    guildId: t,
    setPage: _,
    onClose: C
  } = e, m = s.useRef(null), S = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    progress: I,
    errors: p,
    submitting: T
  } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getStateForGuild(t)), {
    gameApplicationIds: g,
    playstyle: A,
    interests: N,
    description: v,
    tag: R,
    primetime: O,
    verificationForm: L,
    badgeKind: P,
    badgePrimaryColor: M,
    badgeSecondaryColor: x,
    banner: y,
    brandPrimaryColor: D,
    brandSecondaryColor: b,
    wildcardDescriptors: U,
    badgeImage: j
  } = null != I ? I : {}, G = s.useRef(null), w = s.useRef(null), k = s.useRef(null), [F, B] = s.useState(!1), H = async () => {
    try {
      await u.convertGuildToClan(t, {
        gameApplicationIds: g,
        playstyle: A,
        interests: N,
        description: v,
        tag: R,
        primetime: O,
        verificationForm: L,
        badgeKind: P,
        badgePrimaryColor: M,
        badgeSecondaryColor: x,
        banner: y,
        brandPrimaryColor: D,
        brandSecondaryColor: b,
        wildcardDescriptors: U,
        badgeImage: j
      })
    } catch (e) {
      return
    }
    C(), (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("63636")]).then(a.bind(a, "511385"));
      return a => (0, n.jsx)(e, {
        guildId: t,
        tag: R,
        brandPrimaryColor: D,
        ...a
      })
    })
  }, V = (0, l.useSpring)({
    ref: G,
    config: l.config.slow,
    from: {
      flex: 1,
      paddingLeft: S ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), Y = (0, l.useSpring)({
    ref: w,
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
  }), W = (0, l.useSpring)({
    ref: k,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  (0, l.useChain)([G, w, k], [0, 0, 1]);
  let K = s.useMemo(() => null != p && Object.values(p).some(e => null != e), [p]);
  return (0, n.jsxs)("div", {
    className: h.animationContainer,
    children: [(0, n.jsxs)(l.animated.div, {
      className: h.signTextLeft,
      style: {
        ...V,
        ...W
      },
      children: [(0, n.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: E.default.Messages.CLAN_SETUP_SIGN_TITLE
      }), (0, n.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
      })]
    }), (0, n.jsx)("div", {
      className: h.scrollContainer,
      children: (0, n.jsx)(c.default, {
        guildId: t,
        signed: F,
        setSigned: B,
        signRef: m
      })
    }), (0, n.jsxs)(l.animated.div, {
      className: h.signTextRight,
      style: {
        ...Y,
        ...W
      },
      children: [(0, n.jsx)(r.Button, {
        className: h.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          var e;
          null === (e = m.current) || void 0 === e || e.scrollIntoView({
            behavior: "smooth"
          }), B(!0)
        },
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
      })]
    }), (0, n.jsx)(r.Button, {
      className: h.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: C,
      children: E.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsx)(r.Button, {
      className: h.previousButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: () => _(f.ClanSetupModalPages.SETUP),
      children: E.default.Messages.PAGINATION_PREVIOUS
    }), (0, n.jsxs)("div", {
      className: h.finishButton,
      children: [K && (0, n.jsx)(r.Text, {
        color: "status-danger",
        variant: "text-sm/normal",
        children: E.default.Messages.CLAN_SUBMIT_ERROR
      }), (0, n.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        disabled: !F,
        submitting: T,
        onClick: H,
        children: E.default.Messages.FINISH
      })]
    })]
  })
}