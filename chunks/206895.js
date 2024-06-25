s.d(t, {
  n: function() {
    return a
  }
});
var n, a, i = s(735250),
  r = s(470079),
  l = s(120356),
  o = s.n(l),
  c = s(748780),
  E = s(215569),
  _ = s(763863);
(n = a || (a = {}))[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT";
let u = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class d extends r.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), c.Z.spring(this._animated, {
      toValue: 0,
      ...this.props.springSettings
    }).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    c.Z.spring(this._animated, {
      toValue: this.props.direction,
      ...this.props.springSettings
    }).start(e)
  }
  getStyle() {
    let e = c.Z.accelerate({
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
    return (0, i.jsx)(c.Z.div, {
      style: this.getStyle(),
      className: _.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var t, s, n;
    super(e), t = this, n = void 0, (s = "_animated") in t ? Object.defineProperty(t, s, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = n, this._animated = new c.Z.Value(-1 * e.direction)
  }
}
t.Z = e => {
  let {
    children: t,
    step: s,
    direction: n,
    className: a,
    springSettings: r = u,
    fadeInOut: l = !1
  } = e;
  return (0, i.jsx)(E.W, {
    component: "div",
    className: o()(_.animator, a),
    children: (0, i.jsx)(d, {
      direction: n,
      springSettings: r,
      fadeInOut: l,
      children: t
    }, s)
  })
}