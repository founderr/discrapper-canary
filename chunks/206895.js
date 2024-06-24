t.d(s, {
  n: function() {
    return a
  }
});
var n, a, r = t(735250),
  i = t(470079),
  l = t(120356),
  o = t.n(l),
  _ = t(748780),
  c = t(215569),
  E = t(763863);
(n = a || (a = {}))[n.RIGHT = -1] = "RIGHT", n[n.LEFT = 1] = "LEFT";
let u = {
  friction: 7,
  tension: 40,
  clamp: !0
};
class R extends i.PureComponent {
  componentWillEnter(e) {
    this._animated.setValue(-this.props.direction), _.Z.spring(this._animated, {
      toValue: 0,
      ...this.props.springSettings
    }).start(e)
  }
  componentDidAppear() {
    this._animated.setValue(0)
  }
  componentWillLeave(e) {
    _.Z.spring(this._animated, {
      toValue: this.props.direction,
      ...this.props.springSettings
    }).start(e)
  }
  getStyle() {
    let e = _.Z.accelerate({
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
    return (0, r.jsx)(_.Z.div, {
      style: this.getStyle(),
      className: E.item,
      children: this.props.children
    })
  }
  constructor(e) {
    var s, t, n;
    super(e), s = this, n = void 0, (t = "_animated") in s ? Object.defineProperty(s, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : s[t] = n, this._animated = new _.Z.Value(-1 * e.direction)
  }
}
s.Z = e => {
  let {
    children: s,
    step: t,
    direction: n,
    className: a,
    springSettings: i = u,
    fadeInOut: l = !1
  } = e;
  return (0, r.jsx)(c.W, {
    component: "div",
    className: o()(E.animator, a),
    children: (0, r.jsx)(R, {
      direction: n,
      springSettings: i,
      fadeInOut: l,
      children: s
    }, t)
  })
}