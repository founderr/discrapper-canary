"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("620929"),
  d = n("689938"),
  c = n("156610");

function f(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: f,
    sidebarWidth: E,
    windowWidth: h,
    transition: _
  } = e, C = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), m = s.useRef(null), S = s.useMemo(() => (h - E) / 2, [E, h]), [p, I, T] = (0, l.useSpring)(() => ({
    to: [{
      transform: "translateX(-8px)"
    }, {
      transform: "translateX(0px)"
    }],
    loop: !0
  }));
  s.useEffect(() => {
    n && (T(), I({
      to: {
        transform: "translateX(0px)"
      }
    }))
  }, [I, n, T]);
  let g = s.useCallback(() => {
    var e;
    null === (e = m.current) || void 0 === e || e.scrollIntoView({
      behavior: "smooth"
    }), null == f || f(!0)
  }, [f]);
  return (0, a.jsxs)("div", {
    className: c.sidebarContent,
    children: [_((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: c.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: S
      },
      children: (0, a.jsxs)("div", {
        className: c.sidebarLeftDecoration,
        style: {
          width: S
        },
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-xxl/medium",
          children: d.default.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: d.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), _((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: c.sidebarRightDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [-40, 0]).to(e => "translateX(".concat(e, "px)")),
        width: S
      },
      children: (0, a.jsxs)("div", {
        className: c.sidebarRightDecoration,
        children: [(0, a.jsx)(l.animated.div, {
          style: C ? void 0 : p,
          children: (0, a.jsx)(r.Button, {
            className: c.signButton,
            size: r.Button.Sizes.SMALL,
            onClick: g,
            children: d.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: d.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
        })]
      })
    })), (0, a.jsx)(u.default, {
      guildId: t,
      signed: n,
      setSigned: f,
      signRef: m
    })]
  })
}