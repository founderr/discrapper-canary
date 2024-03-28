"use strict";
n.r(t), n.d(t, {
  ClanSetupIntro: function() {
    return _
  },
  ClanSetupIntroAnimation: function() {
    return C
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("425493"),
  u = n("607070"),
  d = n("430824"),
  c = n("620929"),
  f = n("308083"),
  E = n("689938"),
  h = n("653196");
let _ = e => {
    let {
      onClose: t,
      setPage: n
    } = e, s = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion);
    return (0, a.jsxs)("div", {
      className: h.introContainer,
      children: [(0, a.jsx)(o.default, {
        closeAction: t,
        keybind: "ESC",
        className: h.closeIconButton,
        variant: o.default.Variants.SOLID
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-xxl/semibold",
        className: h.header,
        children: E.default.Messages.CLAN_SETUP_INTRO_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        className: h.header,
        children: E.default.Messages.CLAN_SETUP_INTRO_INFO
      }), (0, a.jsx)(r.Button, {
        onClick: () => n(s ? f.ClanSetupModalPages.SETUP : f.ClanSetupModalPages.ANIMATE),
        children: E.default.Messages.CLAN_SETUP_INTRO_CTA
      })]
    })
  },
  C = e => {
    let {
      guildId: t,
      setPage: n
    } = e, r = s.useRef(null), o = s.useRef(null), u = s.useRef(null), E = s.useRef(null), _ = (0, i.useStateFromStores)([d.default], () => {
      var e, n;
      return null !== (n = null === (e = d.default.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
    });
    s.useEffect(() => {
      setTimeout(() => {
        n(f.ClanSetupModalPages.SETUP)
      }, 3e3)
    });
    let C = (0, l.useSpring)({
        ref: r,
        config: l.config.default,
        from: {
          top: "100%"
        },
        to: {
          top: "0%"
        }
      }),
      m = (0, l.useSpring)({
        ref: o,
        config: l.config.default,
        from: {
          height: "20%"
        },
        to: {
          height: "100%"
        }
      }),
      S = (0, l.useSpring)({
        ref: u,
        config: l.config.default,
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      }),
      I = (0, l.useSpring)({
        ref: E,
        config: l.config.molasses,
        from: {
          width: "0%"
        },
        to: {
          width: "100%"
        }
      });
    return (0, l.useChain)([r, o, u, E], [0, .2, .5, .8], 3e3), (0, a.jsxs)("div", {
      className: h.animationContainer,
      children: [(0, a.jsx)(l.animated.div, {
        style: I
      }), (0, a.jsx)(l.animated.div, {
        className: h.scrollContainer,
        style: {
          ...C,
          ...m
        },
        children: (0, a.jsx)(c.default, {
          guildName: _,
          animatedTextStyle: S
        })
      })]
    })
  }