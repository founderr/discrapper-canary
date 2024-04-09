"use strict";
n.r(e), n("47120");
var i, s = n("735250"),
  r = n("470079"),
  a = n("803997"),
  u = n.n(a),
  o = n("748780"),
  l = n("481060"),
  c = n("932660");

function d(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let p = {
  friction: 7,
  tension: 60
};
class h extends(i = r.Component) {
  componentWillAppear(t) {
    this.animateTo(1).start(t)
  }
  componentWillEnter(t) {
    this.animateTo(1).start(t)
  }
  componentWillLeave(t) {
    let {
      reducedMotion: e
    } = this.context;
    e.enabled ? this.animateTo(0).start(t) : o.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(t)
  }
  animateTo(t) {
    return o.default.spring(this.animation, {
      ...p,
      toValue: t
    })
  }
  getAnimatedStyle() {
    let {
      reducedMotion: t
    } = this.context;
    return o.default.accelerate({
      opacity: this.animation,
      transform: t.enabled ? void 0 : [{
        translateY: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["150%", "0%"]
        })
      }]
    })
  }
  render() {
    let {
      className: t,
      children: e
    } = this.props;
    return (0, s.jsx)(o.default.div, {
      className: u()(t, c.slider),
      style: this.getAnimatedStyle(),
      children: e
    })
  }
  constructor(...t) {
    super(...t), d(this, "animation", new o.default.Value(0))
  }
}
d(h, "contextType", l.AccessibilityPreferencesContext), e.default = h