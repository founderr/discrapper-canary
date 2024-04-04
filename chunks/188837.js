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
  h = n("653196");
t.default = e => {
  let {
    guildId: t,
    setPage: n,
    onClose: _
  } = e, C = s.useRef(null), S = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    selectedGames: m,
    playstyle: I,
    interests: p,
    description: T,
    tag: g,
    primetime: A
  } = (0, i.useStateFromStoresObject)([d.default], () => {
    var e;
    return null !== (e = d.default.getState(t)) && void 0 !== e ? e : {}
  }), N = s.useRef(null), R = s.useRef(null), O = s.useRef(null), [v, L] = s.useState(!1), M = (0, l.useSpring)({
    ref: N,
    config: l.config.slow,
    from: {
      flex: 1,
      paddingLeft: S ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), P = (0, l.useSpring)({
    ref: R,
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
  }), y = (0, l.useSpring)({
    ref: O,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  return (0, l.useChain)([N, R, O], [0, 0, 1]), (0, a.jsxs)("div", {
    className: h.animationContainer,
    children: [(0, a.jsxs)(l.animated.div, {
      className: h.signTextLeft,
      style: {
        ...M,
        ...y
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
        signed: v,
        setSigned: L,
        signRef: C
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: h.signTextRight,
      style: {
        ...P,
        ...y
      },
      children: [(0, a.jsx)(r.Button, {
        className: h.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          var e;
          null === (e = C.current) || void 0 === e || e.scrollIntoView({
            behavior: "smooth"
          }), L(!0)
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
      size: r.Button.Sizes.SMALL,
      color: r.Button.Colors.PRIMARY,
      onClick: _,
      children: E.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsx)(r.Button, {
      className: h.previousButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: () => n(f.ClanSetupModalPages.SETUP),
      children: E.default.Messages.PAGINATION_PREVIOUS
    }), (0, a.jsx)(r.Button, {
      className: h.finishButton,
      look: r.Button.Looks.FILLED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.BRAND,
      disabled: !v,
      onClick: () => {
        u.convertGuildToClan(t, {
          selectedGames: m,
          playstyle: I,
          interests: p,
          description: T,
          tag: g,
          primetime: A
        }), _()
      },
      children: E.default.Messages.FINISH
    })]
  })
}