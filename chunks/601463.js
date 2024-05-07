"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("63063"),
  d = n("284019"),
  c = n("620929"),
  f = n("981631"),
  E = n("689938"),
  h = n("156610");

function _(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: _,
    sidebarWidth: C,
    windowWidth: m,
    transition: S,
    brandPrimaryColor: p
  } = e, I = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), g = s.useRef(null), T = s.useMemo(() => (m - C) / 2, [C, m]), [A, N, v] = (0, l.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  }));
  s.useEffect(() => {
    n && (v(), N({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [N, n, v]);
  let R = s.useCallback(() => {
      var e;
      null === (e = g.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth"
      }), null == _ || _(!0)
    }, [_]),
    L = () => open(u.default.getArticleURL(f.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES));
  return (0, a.jsxs)("div", {
    className: h.sidebarContent,
    children: [S((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: h.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: T
      },
      children: (0, a.jsxs)("div", {
        className: h.sidebarLeftDecoration,
        style: {
          width: T
        },
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: E.default.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), S((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: h.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: T
      },
      children: (0, a.jsxs)("div", {
        className: h.sidebarRightDecoration,
        children: [(0, a.jsx)(l.animated.div, {
          style: I ? void 0 : A,
          children: (0, a.jsx)(d.default, {
            className: h.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: R,
            themeColor: p,
            children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_AGREEMENT.format({
            onGuidelinesClick: L
          })
        })]
      })
    })), (0, a.jsx)(c.default, {
      guildId: t,
      signed: n,
      setSigned: _,
      signRef: g
    })]
  })
}