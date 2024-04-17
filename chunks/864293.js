"use strict";
s.r(t), s("47120");
var n, a = s("735250"),
  l = s("470079"),
  i = s("120356"),
  r = s.n(i),
  o = s("748780"),
  d = s("481060"),
  c = s("932660");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let S = {
  friction: 7,
  tension: 60
};
class T extends(n = l.Component) {
  componentWillAppear(e) {
    this.animateTo(1).start(e)
  }
  componentWillEnter(e) {
    this.animateTo(1).start(e)
  }
  componentWillLeave(e) {
    let {
      reducedMotion: t
    } = this.context;
    t.enabled ? this.animateTo(0).start(e) : o.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
  }
  animateTo(e) {
    return o.default.spring(this.animation, {
      ...S,
      toValue: e
    })
  }
  getAnimatedStyle() {
    let {
      reducedMotion: e
    } = this.context;
    return o.default.accelerate({
      opacity: this.animation,
      transform: e.enabled ? void 0 : [{
        translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["150%", "0%"]
        })
      }]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, a.jsx)(o.default.div, {
      className: r()(e, c.slider),
      style: this.getAnimatedStyle(),
      children: t
    })
  }
  constructor(...e) {
    super(...e), u(this, "animation", new o.default.Value(0))
  }
}
u(T, "contextType", d.AccessibilityPreferencesContext), t.default = T