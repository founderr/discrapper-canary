"use strict";
n.d(t, {
  Q: function() {
    return r
  }
});
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(364366);
(i = r || (r = {}))[i.WARNING = 0] = "WARNING", i[i.INFO = 1] = "INFO", i[i.ERROR = 2] = "ERROR", i[i.POSITIVE = 3] = "POSITIVE";
t.Z = function(e) {
  let {
    children: t,
    messageType: n,
    className: i,
    textColor: r = "text-normal",
    textVariant: o = "text-sm/medium"
  } = e, _ = function(e) {
    switch (e) {
      case 0:
        return l.CircleExclamationPointIcon;
      case 1:
        return l.CircleInformationIcon;
      case 2:
        return l.CircleXIcon;
      case 3:
        return l.CheckmarkLargeIcon
    }
  }(n), c = function(e) {
    switch (e) {
      case 0:
        return u.warning;
      case 1:
        return u.info;
      case 2:
        return u.error;
      case 3:
        return u.positive
    }
  }(n);
  return (0, s.jsxs)("div", {
    className: a()(u.container, c, i),
    children: [(0, s.jsx)("div", {
      className: u.iconDiv,
      children: (0, s.jsx)(_, {
        className: u.icon
      })
    }), (0, s.jsx)(l.Text, {
      className: u.text,
      color: r,
      variant: o,
      children: t
    })]
  })
}