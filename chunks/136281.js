"use strict";
n.r(t), n.d(t, {
  USER_MOD_ICON_SIZE_PX: function() {
    return u
  },
  UserModInfoItem: function() {
    return d
  },
  UserModInfoItemContainer: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("426383"),
  r = n("77078"),
  o = n("499559");
let u = 16;

function d(e) {
  let {
    description: t,
    name: n,
    icon: a,
    onNavigate: d,
    className: c,
    missingNavIcon: f
  } = e;
  return (0, l.jsxs)(r.Clickable, {
    onClick: d,
    className: s(o.modInfoItem, null != d && o.modInfoAction, c),
    children: [null != a && (0, l.jsx)("div", {
      className: s(o.modInfoItemIcon),
      children: a
    }), null != n && (0, l.jsx)("div", {
      className: s(o.modInfoItemName),
      children: n
    }), (0, l.jsx)("div", {
      className: s(o.modInfoItemDescription),
      children: t
    }), null != d && (0, l.jsx)("div", {
      className: s(o.modInfoItemActionIcon),
      children: (0, l.jsx)(i.ChevronLargeRightIcon, {
        width: u,
        height: u
      })
    }), null == d && null != f && (0, l.jsx)("div", {
      className: s(o.modInfoItemActionIcon),
      children: f
    })]
  })
}

function c(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: s(o.modInfoItemContainer),
    children: t
  })
}