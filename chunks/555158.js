"use strict";
n.r(t), n.d(t, {
  HelpMessageTypes: function() {
    return a
  },
  default: function() {
    return M
  }
});
var u, a, r = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("77078"),
  c = n("36694"),
  d = n("381546"),
  o = n("68238"),
  f = n("423487"),
  h = n("950038");
(u = a || (a = {}))[u.WARNING = 0] = "WARNING", u[u.INFO = 1] = "INFO", u[u.ERROR = 2] = "ERROR", u[u.POSITIVE = 3] = "POSITIVE";
var M = function(e) {
  let {
    children: t,
    messageType: n,
    className: u,
    textColor: a = "text-normal",
    textVariant: s = "text-sm/medium"
  } = e, M = function(e) {
    switch (e) {
      case 0:
        return f.default;
      case 1:
        return o.default;
      case 2:
        return d.default;
      case 3:
        return c.default
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
  return (0, r.jsxs)("div", {
    className: l(h.container, p, u),
    children: [(0, r.jsx)("div", {
      className: h.iconDiv,
      children: (0, r.jsx)(M, {
        className: h.icon
      })
    }), (0, r.jsx)(i.Text, {
      className: h.text,
      color: a,
      variant: s,
      children: t
    })]
  })
}