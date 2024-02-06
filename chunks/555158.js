"use strict";
n.r(t), n.d(t, {
  HelpMessageTypes: function() {
    return l
  },
  default: function() {
    return p
  }
});
var i, l, r = n("37983");
n("884691");
var o = n("414456"),
  a = n.n(o),
  s = n("77078"),
  u = n("36694"),
  c = n("381546"),
  d = n("68238"),
  f = n("423487"),
  E = n("557296");
(i = l || (l = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
var p = function(e) {
  let {
    children: t,
    messageType: n,
    className: i,
    textColor: l = "text-normal",
    textVariant: o = "text-sm/medium"
  } = e, p = function(e) {
    switch (e) {
      case 0:
        return f.default;
      case 1:
        return d.default;
      case 2:
        return c.default;
      case 3:
        return u.default
    }
  }(n), h = function(e) {
    switch (e) {
      case 0:
        return E.warning;
      case 1:
        return E.info;
      case 2:
        return E.error;
      case 3:
        return E.positive
    }
  }(n);
  return (0, r.jsxs)("div", {
    className: a(E.container, h, i),
    children: [(0, r.jsx)("div", {
      className: E.iconDiv,
      children: (0, r.jsx)(p, {
        className: E.icon
      })
    }), (0, r.jsx)(s.Text, {
      className: E.text,
      color: l,
      variant: o,
      children: t
    })]
  })
}