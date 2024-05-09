"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("685626"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("63063"),
  d = n("284019"),
  c = n("620929"),
  f = n("981631"),
  h = n("689938"),
  p = n("590190");
let m = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function C(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: C,
    sidebarWidth: g,
    windowWidth: E,
    transition: S,
    brandPrimaryColor: _
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = a.useRef(null), T = a.useMemo(() => (E - g) / 2, [g, E]), [A, L, v] = (0, s.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  })), x = (0, s.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: m,
    delay: 800,
    immediate: I
  });
  a.useEffect(() => {
    n && (v(), L({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [L, n, v]);
  let R = a.useCallback(() => {
      var e;
      null === (e = N.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth"
      }), null == C || C(!0)
    }, [C]),
    M = () => open(u.default.getArticleURL(f.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES));
  return (0, l.jsxs)("div", {
    className: p.sidebarContent,
    children: [S((e, t) => t && (0, l.jsx)(s.animated.div, {
      className: p.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: T
      },
      children: (0, l.jsxs)("div", {
        className: p.sidebarLeftDecoration,
        style: {
          width: T
        },
        children: [(0, l.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: h.default.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), S((e, t) => t && (0, l.jsx)(s.animated.div, {
      className: p.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: T
      },
      children: (0, l.jsxs)("div", {
        className: p.sidebarRightDecoration,
        children: [(0, l.jsx)(s.animated.div, {
          style: I ? void 0 : A,
          children: (0, l.jsx)(d.default, {
            className: p.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: R,
            themeColor: _,
            children: h.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_AGREEMENT.format({
            onGuidelinesClick: M
          })
        })]
      })
    })), (0, l.jsx)(c.default, {
      guildId: t,
      signed: n,
      setSigned: C,
      signRef: N,
      animatedTextStyle: x
    })]
  })
}