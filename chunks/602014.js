"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("513715"),
  i = a("620929"),
  r = a("308083"),
  o = a("590190");
t.default = e => {
  let {
    guildId: t,
    setPage: a
  } = e, u = s.useRef(null), d = s.useRef(null), c = s.useRef(null), f = s.useRef(null);
  s.useEffect(() => {
    setTimeout(() => {
      a(r.ClanSetupModalPages.SETUP)
    }, 2e3)
  });
  let E = (0, l.useSpring)({
      ref: u,
      config: l.config.default,
      from: {
        top: "100%"
      },
      to: {
        top: "0%"
      }
    }),
    h = (0, l.useSpring)({
      ref: d,
      config: l.config.default,
      from: {
        height: "20%"
      },
      to: {
        height: "100%"
      }
    }),
    _ = (0, l.useSpring)({
      ref: c,
      config: l.config.default,
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }),
    C = (0, l.useSpring)({
      ref: f,
      config: l.config.default,
      from: {
        flex: 0
      },
      to: {
        flex: 1
      }
    });
  return (0, l.useChain)([u, d, c, f], [0, 0, .7, 1], 1200), (0, n.jsxs)("div", {
    className: o.animationContainer,
    children: [(0, n.jsx)(l.animated.div, {
      style: C
    }), (0, n.jsx)(l.animated.div, {
      className: o.scrollContainer,
      style: {
        ...E,
        ...h
      },
      children: (0, n.jsx)(i.default, {
        guildId: t,
        animatedTextStyle: _
      })
    })]
  })
}