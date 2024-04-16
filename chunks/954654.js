"use strict";
n.r(l), n.d(l, {
  default: function() {
    return f
  },
  renderComponents: function() {
    return p
  }
});
var t = n("735250");
n("470079");
var a = n("911969"),
  s = n("970184"),
  u = n("987106"),
  i = n("927057"),
  o = n("574597"),
  r = n("378975"),
  d = n("413991"),
  c = n("889515"),
  m = n("719599");

function p(e) {
  return e.map((e, l) => (function(e, l) {
    switch (e.type) {
      case a.ComponentType.ACTION_ROW:
        return (0, t.jsx)(c.default, {
          ...e,
          renderComponents: p
        }, l);
      case a.ComponentType.BUTTON:
        return (0, t.jsx)(u.default, {
          ...e
        }, l);
      case a.ComponentType.STRING_SELECT:
        return (0, t.jsx)(r.default, {
          ...e
        }, l);
      case a.ComponentType.CHANNEL_SELECT:
        return (0, t.jsx)(i.default, {
          ...e
        }, l);
      case a.ComponentType.USER_SELECT:
      case a.ComponentType.ROLE_SELECT:
      case a.ComponentType.MENTIONABLE_SELECT:
        return (0, t.jsx)(o.default, {
          ...e
        }, l);
      case a.ComponentType.INPUT_TEXT:
        return (0, t.jsx)(d.default, {
          ...e
        }, l)
    }
  })(e, l.toString()))
}

function f(e) {
  let {
    message: l
  } = e, {
    components: n
  } = l;
  return 0 === n.length ? null : (0, t.jsx)("div", {
    className: m.container,
    children: (0, t.jsx)(s.ComponentStateContextProvider, {
      message: l,
      children: p(n)
    })
  })
}