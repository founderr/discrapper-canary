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
    setPage: a,
    onClose: _
  } = e, C = s.useRef(null), m = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    progress: S,
    errors: p,
    submitting: I
  } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getStateForGuild(t)), {
    gameApplicationIds: T,
    playstyle: g,
    interests: A,
    description: N,
    tag: v,
    primetime: R,
    verificationForm: O,
    badgeKind: L,
    badgePrimaryColor: M,
    badgeSecondaryColor: P,
    banner: x,
    brandPrimaryColor: y,
    brandSecondaryColor: D,
    wildcardDescriptors: b
  } = null != S ? S : {}, U = s.useRef(null), j = s.useRef(null), G = s.useRef(null), [w, k] = s.useState(!1), F = async () => {
    try {
      await u.convertGuildToClan(t, {
        gameApplicationIds: T,
        playstyle: g,
        interests: A,
        description: N,
        tag: v,
        primetime: R,
        verificationForm: O,
        badgeKind: L,
        badgePrimaryColor: M,
        badgeSecondaryColor: P,
        banner: x,
        brandPrimaryColor: y,
        brandSecondaryColor: D,
        wildcardDescriptors: b
      })
    } catch (e) {
      return
    }
    _()
  }, H = (0, l.useSpring)({
    ref: U,
    config: l.config.slow,
    from: {
      flex: 1,
      paddingLeft: m ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), B = (0, l.useSpring)({
    ref: j,
    config: l.config.slow,
    from: {
      flex: m ? 1 : 0,
      paddingRight: m ? 120 : 0,
      marginLeft: m ? -32 : 0
    },
    to: {
      flex: 1,
      paddingRight: 120,
      marginLeft: -32
    }
  }), V = (0, l.useSpring)({
    ref: G,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  (0, l.useChain)([U, j, G], [0, 0, 1]);
  let Y = s.useMemo(() => null != p && Object.values(p).some(e => null != e), [p]);
  return (0, n.jsxs)("div", {
    className: h.animationContainer,
    children: [(0, n.jsxs)(l.animated.div, {
      className: h.signTextLeft,
      style: {
        ...H,
        ...V
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
        signed: w,
        setSigned: k,
        signRef: C
      })
    }), (0, n.jsxs)(l.animated.div, {
      className: h.signTextRight,
      style: {
        ...B,
        ...V
      },
      children: [(0, n.jsx)(r.Button, {
        className: h.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          var e;
          null === (e = C.current) || void 0 === e || e.scrollIntoView({
            behavior: "smooth"
          }), k(!0)
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
      onClick: _,
      children: E.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, n.jsx)(r.Button, {
      className: h.previousButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: () => a(f.ClanSetupModalPages.SETUP),
      children: E.default.Messages.PAGINATION_PREVIOUS
    }), (0, n.jsxs)("div", {
      className: h.finishButton,
      children: [Y && (0, n.jsx)(r.Text, {
        color: "status-danger",
        variant: "text-sm/normal",
        children: E.default.Messages.CLAN_SUBMIT_ERROR
      }), (0, n.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        disabled: !w,
        submitting: I,
        onClick: F,
        children: E.default.Messages.FINISH
      })]
    })]
  })
}