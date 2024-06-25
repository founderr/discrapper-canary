"use strict";
n(653041);
var i = n(269054),
  r = n(217209),
  s = n.n(r),
  o = n(78650),
  a = n.n(o),
  l = n(505444),
  u = n.n(l);

function _(e) {
  let t = Object.keys(e)[0];
  return "".concat(t, "(").concat(e[t], ")")
}
let c = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;

function d(e) {
  let t = e.match(c);
  return null != t && (e = "rgba(".concat(0 | t[1], ", ").concat(0 | t[2], ", ").concat(0 | t[3], ", ").concat(t[4], ")")), e
}
i.inject.ApplyAnimatedValues(function(e, t, n) {
  if (e.setNativeProps) e.setNativeProps(t);
  else {
    if (!e.nodeType || void 0 === e.setAttribute) return !1;
    var i;
    u().setValueForStyles(e, ((i = t.style) && (i.transform && (i.transform = i.WebkitTransform = i.MozTransform = i.transform.map(_).join(" ")), i.color && (i.color = d(i.color)), i.backgroundColor && (i.backgroundColor = d(i.backgroundColor))), i), n._reactInternalInstance)
  }
}, e => e);

function E(e, t, n) {
  return void 0 !== t && void 0 != n ? a()(t, n) : e
}
t.Z = {
  ...i,
  Easing: s(),
  accelerate: function(e) {
    return e.transform = e.transform || [], e.transform.push({
      translateZ: 0
    }), e
  },
  animate: function e(t, n) {
    let r;
    let {
      toValueMin: s,
      toValueMax: o,
      tension: a = 0,
      friction: l = 0,
      loop: u,
      reverse: _,
      invert: c,
      callback: d,
      type: I = "spring",
      shouldLoop: T,
      durationMin: h,
      durationMax: f,
      ...S
    } = n, A = t._value, N = E(n.duration, h, f), m = E(n.toValue, s, o), O = i[I](t, {
      ...S,
      toValue: m,
      tension: a,
      friction: l,
      duration: N
    }), p = O;
    if (_ || c) {
      let e = E(n.duration, h, f);
      r = i[I](t, {
        ...S,
        toValue: _ ? A : -m,
        tension: a,
        friction: l,
        duration: e
      }), p = i.sequence([O, r])
    }
    u ? p.start(() => {
      (!T || T && T()) && (d ? d(e.bind(null, t, n)) : e(t, n))
    }) : p.start(d)
  },
  interpolate: function(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return e.interpolate({
      inputRange: [0, 1],
      outputRange: n
    })
  },
  Extrapolate: {
    CLAMP: "clamp"
  },
  div: i.createAnimatedComponent("div"),
  span: i.createAnimatedComponent("span"),
  img: i.createAnimatedComponent("img"),
  a: i.createAnimatedComponent("a"),
  form: i.createAnimatedComponent("form"),
  ul: i.createAnimatedComponent("ul"),
  li: i.createAnimatedComponent("li"),
  g: i.createAnimatedComponent("g"),
  use: i.createAnimatedComponent("use"),
  path: i.createAnimatedComponent("path"),
  section: i.createAnimatedComponent("section"),
  video: i.createAnimatedComponent("video")
}