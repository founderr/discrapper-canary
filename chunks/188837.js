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
  _ = n("653196");
t.default = e => {
  let {
    guildId: t,
    setPage: n,
    onClose: h
  } = e, C = s.useRef(null), m = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    progress: S,
    errors: I,
    submitting: T
  } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getStateForGuild(t)), {
    selectedGames: p,
    playstyle: g,
    interests: N,
    description: A,
    tag: R,
    primetime: O,
    verificationForm: v
  } = null != S ? S : {}, L = s.useRef(null), P = s.useRef(null), M = s.useRef(null), [y, D] = s.useState(!1), x = async () => {
    try {
      await u.convertGuildToClan(t, {
        selectedGames: p,
        playstyle: g,
        interests: N,
        description: A,
        tag: R,
        primetime: O,
        verificationForm: v
      })
    } catch (e) {
      return
    }
    h()
  }, b = (0, l.useSpring)({
    ref: L,
    config: l.config.slow,
    from: {
      flex: 1,
      paddingLeft: m ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), U = (0, l.useSpring)({
    ref: P,
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
  }), j = (0, l.useSpring)({
    ref: M,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  (0, l.useChain)([L, P, M], [0, 0, 1]);
  let G = s.useMemo(() => null != I && Object.values(I).some(e => null != e), [I]);
  return (0, a.jsxs)("div", {
    className: _.animationContainer,
    children: [(0, a.jsxs)(l.animated.div, {
      className: _.signTextLeft,
      style: {
        ...b,
        ...j
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
      className: _.scrollContainer,
      children: (0, a.jsx)(c.default, {
        guildId: t,
        signed: y,
        setSigned: D,
        signRef: C
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: _.signTextRight,
      style: {
        ...U,
        ...j
      },
      children: [(0, a.jsx)(r.Button, {
        className: _.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          var e;
          null === (e = C.current) || void 0 === e || e.scrollIntoView({
            behavior: "smooth"
          }), D(!0)
        },
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
      })]
    }), (0, a.jsx)(r.Button, {
      className: _.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: h,
      children: E.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsx)(r.Button, {
      className: _.previousButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: () => n(f.ClanSetupModalPages.SETUP),
      children: E.default.Messages.PAGINATION_PREVIOUS
    }), (0, a.jsxs)("div", {
      className: _.finishButton,
      children: [G && (0, a.jsx)(r.Text, {
        color: "status-danger",
        variant: "text-sm/normal",
        children: E.default.Messages.CLAN_SUBMIT_ERROR
      }), (0, a.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        disabled: !y,
        submitting: T,
        onClick: x,
        children: E.default.Messages.FINISH
      })]
    })]
  })
}