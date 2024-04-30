"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  },
  renderComponents: function() {
    return v
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  r = n.n(a),
  s = n("911969"),
  u = n("970184"),
  o = n("987106"),
  i = n("927057"),
  d = n("574597"),
  c = n("378975"),
  m = n("413991"),
  p = n("12067"),
  f = n("676149"),
  C = n("861529"),
  S = n("889515"),
  E = n("27170");

function v(e) {
  return e.map((e, t) => (function(e, t) {
    switch (e.type) {
      case s.ComponentType.ACTION_ROW:
        return (0, l.jsx)(S.default, {
          ...e,
          renderComponents: v
        }, t);
      case s.ComponentType.BUTTON:
        return (0, l.jsx)(o.default, {
          ...e
        }, t);
      case s.ComponentType.STRING_SELECT:
        return (0, l.jsx)(c.default, {
          ...e
        }, t);
      case s.ComponentType.CHANNEL_SELECT:
        return (0, l.jsx)(i.default, {
          ...e
        }, t);
      case s.ComponentType.USER_SELECT:
      case s.ComponentType.ROLE_SELECT:
      case s.ComponentType.MENTIONABLE_SELECT:
        return (0, l.jsx)(d.default, {
          ...e
        }, t);
      case s.ComponentType.INPUT_TEXT:
        return (0, l.jsx)(m.default, {
          ...e
        }, t);
      case s.ComponentType.TEXT:
        return (0, l.jsx)(C.default, {
          ...e
        }, t);
      case s.ComponentType.MEDIA_GALLERY:
        return (0, l.jsx)(p.default, {
          ...e
        }, t);
      case s.ComponentType.SEPARATOR:
        return (0, l.jsx)(f.default, {
          ...e
        }, t)
    }
  })(e, t.toString()))
}

function N(e) {
  let {
    message: t
  } = e, {
    components: n
  } = t;
  return 0 === n.length ? null : (0, l.jsx)("div", {
    className: r()([E.container, {
      [E.containerUikit]: t.isUIKitComponents()
    }]),
    children: (0, l.jsx)(u.ComponentStateContextProvider, {
      message: t,
      children: v(n)
    })
  })
}