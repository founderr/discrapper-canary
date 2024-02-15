"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("891722"),
  r = n("77078"),
  o = n("763225"),
  u = n("789150"),
  d = n("782340"),
  c = n("823494"),
  f = n("865331");

function h(e) {
  let {
    userId: t,
    guildId: n,
    onNavigate: a,
    backPanel: h = u.ModViewPanel.INFO
  } = e, m = (0, o.useProfileThemedPanelBackground)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return (0, l.jsxs)("div", {
    className: s(f.header),
    style: {
      backgroundColor: m
    },
    children: [(0, l.jsx)("div", {
      className: s(f.headerTitle),
      children: (0, l.jsxs)(r.Clickable, {
        className: s(c.backButton),
        onClick: () => null == a ? void 0 : a(h),
        children: [(0, l.jsx)(i.ArrowSmallLeftIcon, {
          className: s(c.backButtonIcon),
          width: 20,
          height: 20
        }), (0, l.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: d.default.Messages.BACK
        })]
      })
    }), (0, l.jsx)("div", {
      className: s(c.options),
      children: (0, l.jsx)(r.KeyCombo, {
        shortcut: "esc",
        keyClassName: c.keyComboInner,
        className: c.keyComboContainer
      })
    })]
  })
}