"use strict";
t.r(A), t("47120");
var a, l = t("735250"),
  s = t("470079"),
  n = t("120356"),
  r = t.n(n),
  o = t("748780"),
  i = t("481060"),
  d = t("453816");

function u(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[A] = t, e
}
let c = {
  friction: 7,
  tension: 60
};
class C extends(a = s.Component) {
  componentWillAppear(e) {
    this.animateTo(1).start(e)
  }
  componentWillEnter(e) {
    this.animateTo(1).start(e)
  }
  componentWillLeave(e) {
    let {
      reducedMotion: A
    } = this.context;
    A.enabled ? this.animateTo(0).start(e) : o.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
  }
  animateTo(e) {
    return o.default.spring(this.animation, {
      ...c,
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
      children: A
    } = this.props;
    return (0, l.jsx)(o.default.div, {
      className: r()(e, d.slider),
      style: this.getAnimatedStyle(),
      children: A
    })
  }
  constructor(...e) {
    super(...e), u(this, "animation", new o.default.Value(0))
  }
}
u(C, "contextType", i.AccessibilityPreferencesContext), A.default = C