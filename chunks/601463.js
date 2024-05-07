"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("63063"),
  d = n("620929"),
  c = n("981631"),
  f = n("689938"),
  E = n("156610");

function h(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: h,
    sidebarWidth: _,
    windowWidth: C,
    transition: m
  } = e, S = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = s.useRef(null), I = s.useMemo(() => (C - _) / 2, [_, C]), [g, T, A] = (0, l.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  }));
  s.useEffect(() => {
    n && (A(), T({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [T, n, A]);
  let N = s.useCallback(() => {
      var e;
      null === (e = p.current) || void 0 === e || e.scrollIntoView({
        behavior: "smooth"
      }), null == h || h(!0)
    }, [h]),
    v = () => open(u.default.getArticleURL(c.HelpdeskArticles.SERVER_DISCOVERY_GUIDELINES));
  return (0, a.jsxs)("div", {
    className: E.sidebarContent,
    children: [m((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: E.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: I
      },
      children: (0, a.jsxs)("div", {
        className: E.sidebarLeftDecoration,
        style: {
          width: I
        },
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: f.default.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: f.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), m((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: E.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: I
      },
      children: (0, a.jsxs)("div", {
        className: E.sidebarRightDecoration,
        children: [(0, a.jsx)(l.animated.div, {
          style: S ? void 0 : g,
          children: (0, a.jsx)(r.Button, {
            className: E.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: N,
            children: f.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: f.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_AGREEMENT.format({
            onGuidelinesClick: v
          })
        })]
      })
    })), (0, a.jsx)(d.default, {
      guildId: t,
      signed: n,
      setSigned: h,
      signRef: p
    })]
  })
}