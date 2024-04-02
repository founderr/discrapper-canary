"use strict";
n.r(t), n.d(t, {
  ClanSetupIntro: function() {
    return h
  },
  ClanSetupIntroAnimation: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("425493"),
  u = n("607070"),
  d = n("620929"),
  c = n("308083"),
  f = n("689938"),
  E = n("653196");
let h = e => {
    let {
      onClose: t,
      setPage: n
    } = e, s = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion);
    return (0, a.jsxs)("div", {
      className: E.introContainer,
      children: [(0, a.jsx)(o.default, {
        closeAction: t,
        keybind: "ESC",
        className: E.closeIconButton,
        variant: o.default.Variants.SOLID
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/bold",
        color: "text-warning",
        className: E.capitalize,
        children: f.default.Messages.CLAN_UPSELL_INVITE
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        className: E.header,
        children: f.default.Messages.CLAN_SETUP_INTRO_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        className: E.header,
        children: f.default.Messages.CLAN_SETUP_INTRO_INFO
      }), (0, a.jsx)(r.Button, {
        onClick: () => n(s ? c.ClanSetupModalPages.SETUP : c.ClanSetupModalPages.ANIMATE),
        children: f.default.Messages.CLAN_SETUP_INTRO_CTA
      })]
    })
  },
  _ = e => {
    let {
      guildId: t,
      setPage: n
    } = e, i = s.useRef(null), r = s.useRef(null), o = s.useRef(null), u = s.useRef(null);
    s.useEffect(() => {
      setTimeout(() => {
        n(c.ClanSetupModalPages.SETUP)
      }, 2e3)
    });
    let f = (0, l.useSpring)({
        ref: i,
        config: l.config.default,
        from: {
          top: "100%"
        },
        to: {
          top: "0%"
        }
      }),
      h = (0, l.useSpring)({
        ref: r,
        config: l.config.default,
        from: {
          height: "20%"
        },
        to: {
          height: "100%"
        }
      }),
      _ = (0, l.useSpring)({
        ref: o,
        config: l.config.default,
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      }),
      C = (0, l.useSpring)({
        ref: u,
        config: l.config.default,
        from: {
          flex: 0
        },
        to: {
          flex: 1
        }
      });
    return (0, l.useChain)([i, r, o, u], [0, 0, .7, 1], 1200), (0, a.jsxs)("div", {
      className: E.animationContainer,
      children: [(0, a.jsx)(l.animated.div, {
        style: C
      }), (0, a.jsx)(l.animated.div, {
        className: E.scrollContainer,
        style: {
          ...f,
          ...h
        },
        children: (0, a.jsx)(d.default, {
          guildId: t,
          animatedTextStyle: _
        })
      })]
    })
  }