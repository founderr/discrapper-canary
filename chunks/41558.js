"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(689938),
  a = n(365155);

function l(e) {
  let {
    title: t,
    onClickViewMore: n
  } = e;
  return (0, i.jsxs)("div", {
    className: a.header,
    children: [(0, i.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: t
    }), null != n && (0, i.jsx)(s.Clickable, {
      className: a.viewMore,
      onClick: n,
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "text-brand",
        children: o.Z.Messages.APP_LAUNCHER_VIEW_MORE_ROW
      })
    })]
  })
}
l.Loading = function() {
  let e = r.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return (0, i.jsx)("div", {
    className: a.loadingHeader,
    style: e,
    children: (0, i.jsx)(s.Text, {
      className: a.hidden,
      variant: "text-md/medium",
      color: "header-primary",
      children: "_"
    })
  })
}