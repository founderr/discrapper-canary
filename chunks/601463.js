"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("481060"),
  r = n("532490"),
  o = n("620929"),
  u = n("689938"),
  d = n("590190");

function c(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: c,
    sidebarWidth: f,
    windowWidth: E,
    transition: h,
    brandPrimaryColor: _
  } = e, C = s.useMemo(() => (E - f) / 2, [f, E]);
  return (0, a.jsxs)("div", {
    className: d.sidebarContent,
    children: [h((e, t) => t && (0, a.jsx)(l.animated.div, {
      className: d.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: C
      },
      children: (0, a.jsxs)("div", {
        className: d.sidebarLeftDecoration,
        style: {
          width: C
        },
        children: [(0, a.jsx)(i.Heading, {
          variant: "heading-xxl/medium",
          children: u.default.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: u.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), (0, a.jsx)("div", {
      className: d.charterScrollContainer,
      children: (0, a.jsx)(o.default, {
        guildId: t,
        canSignCharter: null != c,
        onSignCharter: () => null == c ? void 0 : c(!n),
        signHintPosition: r.SignHintPosition.RIGHT,
        primaryColor: _,
        className: d.charterScroll,
        fullHeight: !0
      })
    })]
  })
}