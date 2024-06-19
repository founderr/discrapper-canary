n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250),
  s = n(470079),
  l = n(920906),
  a = n(481060),
  r = n(532490),
  o = n(620929),
  c = n(689938),
  u = n(414868);

function d(e) {
  let {
    guildId: t,
    signed: n,
    setSigned: d,
    sidebarWidth: E,
    windowWidth: h,
    transition: _,
    brandPrimaryColor: I
  } = e, m = s.useMemo(() => (h - E) / 2, [E, h]);
  return (0, i.jsxs)("div", {
    className: u.sidebarContent,
    children: [_((e, t) => t && (0, i.jsx)(l.animated.div, {
      className: u.sidebarLeftDecorationContainer,
      style: {
        opacity: e.opacity,
        transform: e.opacity.to([0, 1], [40, 0]).to(e => "translateY(".concat(e, "px)")),
        width: m
      },
      children: (0, i.jsxs)("div", {
        className: u.sidebarLeftDecoration,
        style: {
          width: m
        },
        children: [(0, i.jsx)(a.Heading, {
          variant: "heading-xxl/medium",
          children: c.Z.Messages.CLAN_SETUP_SIGN_TITLE
        }), (0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: c.Z.Messages.CLAN_SETUP_SIGN_SUBTITLE
        })]
      })
    })), (0, i.jsx)("div", {
      className: u.charterScrollContainer,
      children: (0, i.jsx)(o.Z, {
        guildId: t,
        canSignCharter: null != d,
        onSignCharter: () => null == d ? void 0 : d(!n),
        signHintPosition: r.p.RIGHT,
        primaryColor: I,
        className: u.charterScroll,
        fullHeight: !0
      })
    })]
  })
}