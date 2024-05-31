"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  },
  renderComponents: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var a = n("120356"),
  u = n.n(a),
  i = n("911969"),
  o = n("970184"),
  s = n("987106"),
  r = n("927057"),
  d = n("574597"),
  c = n("378975"),
  p = n("413991"),
  m = n("12067"),
  f = n("676149"),
  S = n("861529"),
  C = n("889515"),
  v = n("72920");

function E(e) {
  return e.map((e, t) => (function(e, t) {
    switch (e.type) {
      case i.ComponentType.ACTION_ROW:
        return (0, l.jsx)(C.default, {
          ...e,
          renderComponents: E
        }, t);
      case i.ComponentType.BUTTON:
        return (0, l.jsx)(s.default, {
          ...e
        }, t);
      case i.ComponentType.STRING_SELECT:
        return (0, l.jsx)(c.default, {
          ...e
        }, t);
      case i.ComponentType.CHANNEL_SELECT:
        return (0, l.jsx)(r.default, {
          ...e
        }, t);
      case i.ComponentType.USER_SELECT:
      case i.ComponentType.ROLE_SELECT:
      case i.ComponentType.MENTIONABLE_SELECT:
        return (0, l.jsx)(d.default, {
          ...e
        }, t);
      case i.ComponentType.INPUT_TEXT:
        return (0, l.jsx)(p.default, {
          ...e
        }, t);
      case i.ComponentType.TEXT:
        return (0, l.jsx)(S.default, {
          ...e
        }, t);
      case i.ComponentType.MEDIA_GALLERY:
        return (0, l.jsx)(m.default, {
          ...e
        }, t);
      case i.ComponentType.SEPARATOR:
        return (0, l.jsx)(f.default, {
          ...e
        }, t)
    }
  })(e, t.toString()))
}

function h(e) {
  let {
    message: t
  } = e, {
    components: n
  } = t;
  return 0 === n.length ? null : (0, l.jsx)("div", {
    className: u()([v.container, {
      [v.containerUikit]: t.isUIKitComponents()
    }]),
    children: (0, l.jsx)(o.ComponentStateContextProvider, {
      message: t,
      children: E(n)
    })
  })
}