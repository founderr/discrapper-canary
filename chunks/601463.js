"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("63063"),
  d = n("284019"),
  c = n("620929"),
  f = n("981631"),
  h = n("689938"),
  p = n("156610");

function m(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: m,
    sidebarWidth: C,
    windowWidth: g,
    transition: E,
    brandPrimaryColor: S
  } = e, _ = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), I = a.useRef(null), N = a.useMemo(() => (g - C) / 2, [C, g]), [T, A, L] = (0, s.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  }));
  a.useEffect(() => {
    n && (L(), A({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [A, n, L]);
  let v = a.useCallback(() => {
      var e;
      null === (e = I.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth"
      }), null == m || m(!0)
    }, [m]),
    x = () => open(u.default.getArticleURL(f.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES));
  return (0, l.jsxs)("div", {
    className: p.sidebarContent,
    children: [E((e, t) => t && (0, l.jsx)(s.animated.div, {
      className: p.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: N
      },
      children: (0, l.jsxs)("div", {
        className: p.sidebarLeftDecoration,
        style: {
          width: N
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
    })), E((e, t) => t && (0, l.jsx)(s.animated.div, {
      className: p.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: N
      },
      children: (0, l.jsxs)("div", {
        className: p.sidebarRightDecoration,
        children: [(0, l.jsx)(s.animated.div, {
          style: _ ? void 0 : T,
          children: (0, l.jsx)(d.default, {
            className: p.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: v,
            themeColor: S,
            children: h.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_AGREEMENT.format({
            onGuidelinesClick: x
          })
        })]
      })
    })), (0, l.jsx)(c.default, {
      guildId: t,
      signed: n,
      setSigned: m,
      signRef: I
    })]
  })
}