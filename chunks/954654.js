"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  },
  renderComponents: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  s = n.n(a),
  o = n("911969"),
  u = n("970184"),
  r = n("987106"),
  i = n("927057"),
  d = n("574597"),
  c = n("378975"),
  m = n("413991"),
  p = n("12067"),
  f = n("861529"),
  C = n("889515"),
  S = n("72920");

function E(e) {
  return e.map((e, t) => (function(e, t) {
    switch (e.type) {
      case o.ComponentType.ACTION_ROW:
        return (0, l.jsx)(C.default, {
          ...e,
          renderComponents: E
        }, t);
      case o.ComponentType.BUTTON:
        return (0, l.jsx)(r.default, {
          ...e
        }, t);
      case o.ComponentType.STRING_SELECT:
        return (0, l.jsx)(c.default, {
          ...e
        }, t);
      case o.ComponentType.CHANNEL_SELECT:
        return (0, l.jsx)(i.default, {
          ...e
        }, t);
      case o.ComponentType.USER_SELECT:
      case o.ComponentType.ROLE_SELECT:
      case o.ComponentType.MENTIONABLE_SELECT:
        return (0, l.jsx)(d.default, {
          ...e
        }, t);
      case o.ComponentType.INPUT_TEXT:
        return (0, l.jsx)(m.default, {
          ...e
        }, t);
      case o.ComponentType.TEXT:
        return (0, l.jsx)(f.default, {
          ...e
        }, t);
      case o.ComponentType.MEDIA_GALLERY:
        return (0, l.jsx)(p.default, {
          ...e
        }, t)
    }
  })(e, t.toString()))
}

function v(e) {
  let {
    message: t
  } = e, {
    components: n
  } = t;
  return 0 === n.length ? null : (0, l.jsx)("div", {
    className: s()([S.container, {
      [S.containerUikit]: t.isUIKitComponents()
    }]),
    children: (0, l.jsx)(u.ComponentStateContextProvider, {
      message: t,
      children: E(n)
    })
  })
}