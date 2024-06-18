"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(689938),
  o = n(255610);

function a(e) {
  let {
    title: t,
    onClickViewMore: n
  } = e;
  return (0, i.jsxs)("div", {
    className: o.header,
    children: [(0, i.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: t
    }), null != n && (0, i.jsx)(r.Clickable, {
      className: o.viewMore,
      onClick: n,
      children: (0, i.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "text-brand",
        children: s.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW
      })
    })]
  })
}