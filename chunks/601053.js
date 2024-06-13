"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("689938"),
  a = n("844330");

function o(e) {
  let {
    title: t,
    children: n,
    onClickViewMore: o
  } = e;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: a.header,
      children: [(0, i.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      }), null != o && (0, i.jsx)(r.Clickable, {
        className: a.viewMore,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "text-brand",
          children: s.default.Messages.APP_LAUNCHER_VIEW_MORE_ROW
        })
      })]
    }), (0, i.jsx)("div", {
      className: a.appGrid,
      children: n
    })]
  })
}