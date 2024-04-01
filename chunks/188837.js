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
  } = e, C = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    selectedGames: S,
    playstyle: m,
    interests: I,
    description: p,
    tag: T,
    primetime: g
  } = (0, i.useStateFromStoresObject)([d.default], () => {
    var e;
    return null !== (e = d.default.getState(t)) && void 0 !== e ? e : {}
  }), A = s.useRef(null), N = s.useRef(null), R = s.useRef(null), [O, v] = s.useState(!1), L = (0, l.useSpring)({
    ref: A,
    config: l.config.molasses,
    from: {
      flex: 1,
      paddingLeft: C ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), P = (0, l.useSpring)({
    ref: N,
    config: l.config.molasses,
    from: {
      flex: C ? 1 : 0,
      paddingRight: C ? 120 : 0,
      marginLeft: C ? -32 : 0
    },
    to: {
      flex: 1,
      paddingRight: 120,
      marginLeft: -32
    }
  }), M = (0, l.useSpring)({
    ref: R,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  return (0, l.useChain)([A, N, R], [0, 0, 1]), (0, a.jsxs)("div", {
    className: _.animationContainer,
    children: [(0, a.jsxs)(l.animated.div, {
      className: _.signTextLeft,
      style: {
        ...L,
        ...M
      },
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: E.default.Messages.CLAN_SETUP_SIGN_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: _.scrollContainer,
      children: (0, a.jsx)(c.default, {
        guildId: t,
        signed: O,
        setSigned: v
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: _.signTextRight,
      style: {
        ...P,
        ...M
      },
      children: [(0, a.jsx)(r.Button, {
        className: _.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => v(!0),
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
      })]
    }), (0, a.jsx)("div", {
      style: {
        position: "absolute",
        bottom: "24px",
        left: "24px"
      },
      children: (0, a.jsx)(r.Button, {
        look: r.Button.Looks.OUTLINED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.PRIMARY,
        onClick: () => n(f.ClanSetupModalPages.SETUP),
        children: E.default.Messages.PAGINATION_PREVIOUS
      })
    }), (0, a.jsx)("div", {
      style: {
        position: "absolute",
        bottom: "24px",
        right: "24px"
      },
      children: (0, a.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        disabled: !O,
        onClick: () => {
          u.convertGuildToClan(t, {
            selectedGames: S,
            playstyle: m,
            interests: I,
            description: p,
            tag: T,
            primetime: g
          }), h()
        },
        children: E.default.Messages.FINISH
      })
    })]
  })
}