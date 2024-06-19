t.d(n, {
  d: function() {
    return d
  }
});
var i = t(735250);
t(470079);
var o = t(120356),
  a = t.n(o),
  r = t(692547),
  l = t(481060);
t(651711);
var s = t(551556);
t(689938);
var c = t(442243);
t(347157), t(177266);
let d = e => {
  let {
    name: n,
    description: t,
    checked: o,
    actionLabel: d,
    actionHandler: u
  } = e, E = null;
  return E = o ? (0, i.jsx)(s.Z, {
    width: 20,
    height: 20
  }) : (0, i.jsx)(l.CircleXIcon, {
    size: "custom",
    color: r.Z.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), (0, i.jsxs)("div", {
    className: c.checklistItem,
    children: [(0, i.jsx)("div", {
      className: c.checklistIcon,
      children: E
    }), (0, i.jsxs)("div", {
      className: a()(c.__invalid_checklistText, o && c.ineligibleRow),
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        className: c.checklistItemName,
        children: n
      }), (0, i.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t
      })]
    }), null != d && (0, i.jsx)("div", {
      className: c.eligibilityActionContainer,
      children: (0, i.jsx)(l.Button, {
        className: c.eligibilityActionButton,
        look: l.ButtonLooks.OUTLINED,
        color: l.ButtonColors.PRIMARY,
        onClick: u,
        grow: !0,
        children: d
      })
    })]
  })
}