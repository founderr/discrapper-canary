"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(499033),
  o = n(689938),
  a = n(235109);

function l() {
  return (0, i.jsxs)("div", {
    className: a.container,
    children: [(0, i.jsxs)("div", {
      className: a.iconContainer,
      children: [(0, i.jsx)("div", {
        className: a.icon,
        children: (0, i.jsx)(r.TopicsIcon, {
          size: "custom",
          color: "currentColor",
          className: a.iconOffset,
          width: 28,
          height: 28
        })
      }), (0, i.jsx)(s.Z, {
        className: a.stars
      })]
    }), (0, i.jsx)(r.Heading, {
      className: a.header,
      variant: "heading-xl/semibold",
      children: o.Z.Messages.SUMMARY_EMPTY_STATE_TITLE
    }), (0, i.jsx)(r.Text, {
      className: a.text,
      color: "header-secondary",
      variant: "text-md/normal",
      children: o.Z.Messages.SUMMARY_EMPTY_STATE_TEXT
    })]
  })
}