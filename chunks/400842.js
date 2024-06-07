"use strict";
t.r(i), t.d(i, {
  ChecklistItem: function() {
    return u
  }
});
var l = t("735250");
t("470079");
var n = t("120356"),
  s = t.n(n),
  r = t("692547"),
  a = t("481060");
t("651711");
var o = t("696202"),
  c = t("551556");
t("689938");
var d = t("859888");
t("347157"), t("177266");
let u = e => {
  let {
    name: i,
    description: t,
    checked: n,
    actionLabel: u,
    actionHandler: f
  } = e, h = null;
  return h = n ? (0, l.jsx)(c.default, {
    width: 20,
    height: 20
  }) : (0, l.jsx)(o.default, {
    color: r.default.unsafe_rawColors.RED_400.css,
    width: 20,
    height: 20
  }), (0, l.jsxs)("div", {
    className: d.checklistItem,
    children: [(0, l.jsx)("div", {
      className: d.checklistIcon,
      children: h
    }), (0, l.jsxs)("div", {
      className: s()(d.__invalid_checklistText, n && d.ineligibleRow),
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        className: d.checklistItemName,
        children: i
      }), (0, l.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t
      })]
    }), null != u && (0, l.jsx)("div", {
      className: d.eligibilityActionContainer,
      children: (0, l.jsx)(a.Button, {
        className: d.eligibilityActionButton,
        look: a.ButtonLooks.OUTLINED,
        color: a.ButtonColors.PRIMARY,
        onClick: f,
        grow: !0,
        children: u
      })
    })]
  })
}