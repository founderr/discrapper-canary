"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  i = n("458960"),
  o = n("77078"),
  u = n("866893");
let c = {
  friction: 7,
  tension: 60
};
class d extends r.Component {
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
    t.enabled ? this.animateTo(0).start(e) : i.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
  }
  animateTo(e) {
    return i.default.spring(this.animation, {
      ...c,
      toValue: e
    })
  }
  getAnimatedStyle() {
    let {
      reducedMotion: e
    } = this.context;
    return i.default.accelerate({
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
    return (0, s.jsx)(i.default.div, {
      className: a(e, u.slider),
      style: this.getAnimatedStyle(),
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.animation = new i.default.Value(0)
  }
}
d.contextType = o.AccessibilityPreferencesContext;
var f = d