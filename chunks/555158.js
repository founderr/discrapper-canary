"use strict";
n.r(t), n.d(t, {
  HelpMessageTypes: function() {
    return r
  },
  default: function() {
    return E
  }
});
var i, r, s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  u = n("77078"),
  o = n("36694"),
  c = n("381546"),
  d = n("68238"),
  f = n("423487"),
  h = n("950038");
(i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
var E = function(e) {
  let {
    children: t,
    messageType: n,
    className: i,
    textColor: r = "text-normal",
    textVariant: l = "text-sm/medium"
  } = e, E = function(e) {
    switch (e) {
      case 0:
        return f.default;
      case 1:
        return d.default;
      case 2:
        return c.default;
      case 3:
        return o.default
    }
  }(n), p = function(e) {
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
  return (0, s.jsxs)("div", {
    className: a(h.container, p, i),
    children: [(0, s.jsx)("div", {
      className: h.iconDiv,
      children: (0, s.jsx)(E, {
        className: h.icon
      })
    }), (0, s.jsx)(u.Text, {
      className: h.text,
      color: r,
      variant: l,
      children: t
    })]
  })
}