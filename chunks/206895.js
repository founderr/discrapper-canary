"use strict";
s.r(t), s.d(t, {
  SlideDirection: function() {
    return r
  }
});
var a, r, i = s("735250"),
  n = s("470079"),
  l = s("120356"),
  o = s.n(l),
  u = s("748780"),
  c = s("215569"),
  d = s("721034");
(a = r || (r = {}))[a.RIGHT = -1] = "RIGHT", a[a.LEFT = 1] = "LEFT";
let _ = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class E extends n.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), u.default.spring(this._animated, {
      toValue: 0,
      ...this.props.springSettings
    }).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    u.default.spring(this._animated, {
      toValue: this.props.direction,
      ...this.props.springSettings
    }).start(e)
  }
  getStyle() {
    let e = u.default.accelerate({
      transform: [{
        translateX: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: ["0%", "-100%"]
        })
      }]
    });
    return this.props.fadeInOut && (e.opacity = this._animated.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    })), e
  }
  render() {
    return (0, i.jsx)(u.default.div, {
      style: this.getStyle(),
      className: d.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var t, s, a;
    super(e), t = this, a = void 0, (s = "_animated") in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a, this._animated = new u.default.Value(-1 * e.direction)
  }
}
t.default = e => {
  let {
    children: t,
    step: s,
    direction: a,
    className: r,
    springSettings: n = _,
    fadeInOut: l = !1
  } = e;
  return (0, i.jsx)(c.TransitionGroup, {
    component: "div",
    className: o()(d.animator, r),
    children: (0, i.jsx)(E, {
      direction: a,
      springSettings: n,
      fadeInOut: l,
      children: t
    }, s)
  })
}