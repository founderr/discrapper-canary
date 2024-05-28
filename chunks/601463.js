"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("63063"),
  d = n("284019"),
  c = n("620929"),
  f = n("981631"),
  E = n("689938"),
  C = n("590190");
let h = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};

function _(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: _,
    sidebarWidth: S,
    windowWidth: m,
    transition: p,
    brandPrimaryColor: I
  } = e, g = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), T = s.useRef(null), A = s.useMemo(() => (m - S) / 2, [S, m]), [N, v, R] = (0, l.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  })), O = (0, l.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: h,
    delay: 800,
    immediate: g
  });
  s.useEffect(() => {
    n && (R(), v({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [v, n, R]);
  let L = s.useCallback(() => {
      var e;
      null === (e = T.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth"
      }), null == _ || _(!0)
    }, [_]),
    P = () => open(u.default.getArticleURL(f.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES));
  return (0, a.jsxs)("div", {
    className: C.sidebarContent,
    children: [p((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: C.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: A
      },
      children: (0, a.jsxs)("div", {
        className: C.sidebarLeftDecoration,
        style: {
          width: A
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
    })), p((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: C.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: A
      },
      children: (0, a.jsxs)("div", {
        className: C.sidebarRightDecoration,
        children: [(0, a.jsx)(l.animated.div, {
          style: g ? void 0 : N,
          children: (0, a.jsx)(d.default, {
            className: C.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: L,
            themeColor: I,
            children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: E.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_AGREEMENT.format({
            onGuidelinesClick: P
          })
        })]
      })
    })), (0, a.jsx)(c.default, {
      guildId: t,
      signed: n,
      setSigned: _,
      signRef: T,
      animatedTextStyle: O
    })]
  })
}