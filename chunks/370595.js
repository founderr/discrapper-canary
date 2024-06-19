n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(991570),
  o = n(50493),
  c = n(689938),
  u = n(638649),
  d = n(332513);

function h(e) {
  let {
    userId: t,
    guildId: n,
    onNavigate: i,
    backPanel: h = o.k.INFO
  } = e, m = (0, r.f)(t, n, .8, a.tokens.colors.BACKGROUND_SECONDARY);
  return (0, l.jsxs)("div", {
    className: s()(d.header),
    style: {
      backgroundColor: m
    },
    children: [(0, l.jsx)("div", {
      className: s()(d.headerTitle),
      children: (0, l.jsxs)(a.Clickable, {
        className: s()(u.backButton),
        onClick: () => null == i ? void 0 : i(h),
        children: [(0, l.jsx)(a.ArrowSmallLeftIcon, {
          size: "custom",
          className: s()(u.__invalid_backButtonIcon),
          width: 20,
          height: 20
        }), (0, l.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: c.Z.Messages.BACK
        })]
      })
    }), (0, l.jsx)("div", {
      className: s()(u.__invalid_options),
      children: (0, l.jsx)(a.KeyCombo, {
        shortcut: "esc",
        keyClassName: u.keyComboInner,
        className: u.keyComboContainer
      })
    })]
  })
}