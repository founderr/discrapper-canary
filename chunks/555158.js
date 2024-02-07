"use strict";
n.r(t), n.d(t, {
  HelpMessageTypes: function() {
    return r
  },
  default: function() {
    return p
  }
});
var i, r, l = n("37983");
n("884691");
var s = n("414456"),
  a = n.n(s),
  o = n("77078"),
  u = n("36694"),
  c = n("381546"),
  d = n("68238"),
  f = n("423487"),
  h = n("557296");
(i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
var p = function(e) {
  let {
    children: t,
    messageType: n,
    className: i,
    textColor: r = "text-normal",
    textVariant: s = "text-sm/medium"
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
  }(n), C = function(e) {
    switch (e) {
      case 0:
        return h.warning;
      case 1:
        return h.info;
      case 2:
        return h.error;
      case 3:
        return h.positive
    }
  }(n);
  return (0, l.jsxs)("div", {
    className: a(h.container, C, i),
    children: [(0, l.jsx)("div", {
      className: h.iconDiv,
      children: (0, l.jsx)(p, {
        className: h.icon
      })
    }), (0, l.jsx)(o.Text, {
      className: h.text,
      color: r,
      variant: s,
      children: t
    })]
  })
}