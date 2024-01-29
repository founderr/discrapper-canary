"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  s = n("414456"),
  r = n.n(s),
  o = n("458960"),
  a = n("77078"),
  u = n("866893");
let d = {
  friction: 7,
  tension: 60
};
class c extends i.Component {
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
      ...d,
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
    return (0, l.jsx)(o.default.div, {
      className: r(e, u.slider),
      style: this.getAnimatedStyle(),
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.animation = new o.default.Value(0)
  }
}
c.contextType = a.AccessibilityPreferencesContext;
var f = c