n.d(t, {
  Mn: function() {
    return o
  },
  WM: function() {
    return u
  },
  _2: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(130081);
let o = 16;

function c(e) {
  let {
    description: t,
    name: n,
    icon: i,
    onNavigate: c,
    className: u,
    missingNavIcon: d
  } = e;
  return (0, l.jsxs)(a.Clickable, {
    onClick: c,
    className: s()(r.modInfoItem, null != c && r.modInfoAction, u),
    children: [null != i && (0, l.jsx)("div", {
      className: s()(r.modInfoItemIcon),
      children: i
    }), null != n && (0, l.jsx)("div", {
      className: s()(r.modInfoItemName),
      children: n
    }), (0, l.jsx)("div", {
      className: s()(r.modInfoItemDescription),
      children: t
    }), null != c && (0, l.jsx)("div", {
      className: s()(r.modInfoItemActionIcon),
      children: (0, l.jsx)(a.ChevronLargeRightIcon, {
        size: "custom",
        width: o,
        height: o
      })
    }), null == c && null != d && (0, l.jsx)("div", {
      className: s()(r.modInfoItemActionIcon),
      children: d
    })]
  })
}

function u(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: s()(r.modInfoItemContainer),
    children: t
  })
}