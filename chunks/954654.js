"use strict";
n.r(l), n.d(l, {
  default: function() {
    return C
  },
  renderComponents: function() {
    return S
  }
});
var t = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  u = n("911969"),
  i = n("970184"),
  o = n("987106"),
  r = n("927057"),
  d = n("574597"),
  c = n("378975"),
  m = n("413991"),
  p = n("889515"),
  f = n("719599");

function S(e) {
  return e.map((e, l) => (function(e, l) {
    switch (e.type) {
      case u.ComponentType.ACTION_ROW:
        return (0, t.jsx)(p.default, {
          ...e,
          renderComponents: S
        }, l);
      case u.ComponentType.BUTTON:
        return (0, t.jsx)(o.default, {
          ...e
        }, l);
      case u.ComponentType.STRING_SELECT:
        return (0, t.jsx)(c.default, {
          ...e
        }, l);
      case u.ComponentType.CHANNEL_SELECT:
        return (0, t.jsx)(r.default, {
          ...e
        }, l);
      case u.ComponentType.USER_SELECT:
      case u.ComponentType.ROLE_SELECT:
      case u.ComponentType.MENTIONABLE_SELECT:
        return (0, t.jsx)(d.default, {
          ...e
        }, l);
      case u.ComponentType.INPUT_TEXT:
        return (0, t.jsx)(m.default, {
          ...e
        }, l)
    }
  })(e, l.toString()))
}

function C(e) {
  let {
    message: l
  } = e, {
    components: n
  } = l;
  return 0 === n.length ? null : (0, t.jsx)("div", {
    className: s()([f.container, {
      [f.containerUikit]: l.isUIKitComponents()
    }]),
    children: (0, t.jsx)(i.ComponentStateContextProvider, {
      message: l,
      children: S(n)
    })
  })
}