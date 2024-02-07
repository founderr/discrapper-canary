"use strict";
i.r(t), i.d(t, {
  getMinCounterWidth: function() {
    return T
  },
  default: function() {
    return o
  }
});
var a, n, l, o, s = i("37983"),
  r = i("884691"),
  u = i("917351"),
  d = i.n(u),
  c = i("458960"),
  h = i("471671");

function p(e, t) {
  return {
    toValue: e,
    duration: null != t ? t : 300,
    easing: c.default.Easing.inOut(c.default.Easing.back())
  }
}

function T(e, t, i) {
  if (null != t) {
    let a = Math.ceil(Math.log10(e + 1));
    return null != i && i > 0 ? Math.min(a, i) * t : a * t
  }
}(a = l || (l = {}))[a.ABOVE = 0] = "ABOVE", a[a.VISIBLE = 1] = "VISIBLE", a[a.BELOW = 2] = "BELOW", (n = class extends r.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      prevValue: i,
      currValue: a,
      nextValue: n
    } = t;
    return null == i && a !== e.value ? {
      prevValue: h.default.isFocused() ? a : null,
      currValue: e.value
    } : null != n && n !== e.value ? {
      nextValue: e.value
    } : null
  }
  componentDidUpdate(e, t) {
    let {
      prevValue: i,
      currValue: a
    } = this.state;
    i !== t.prevValue && null != i && this.animateBetween(i, a)
  }
  animateBetween(e, t) {
    let i;
    let {
      forcePosition: a,
      animationSpeed: n
    } = this.props;
    this.prevAnimate.setValue(1), null != a ? 0 === a ? (this.currAnimate.setValue(0), i = 2) : 2 === a && (this.currAnimate.setValue(2), i = 0) : e > t ? (this.currAnimate.setValue(0), i = 2) : (this.currAnimate.setValue(2), i = 0), c.default.parallel([c.default.timing(this.prevAnimate, p(i, n)), c.default.timing(this.currAnimate, p(1, n))]).start(this.animateNext)
  }
  getAnimatedStyle(e) {
    let {
      animationColor: t
    } = this.props;
    return {
      transform: [{
        translateY: e.interpolate({
          inputRange: [0, 1, 2],
          outputRange: ["-100%", "0%", "100%"]
        })
      }],
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...null != t && {
        color: t
      }
    }
  }
  getMinWidth(e) {
    let {
      digitWidth: t,
      padStartLength: i
    } = this.props;
    return T(e, t, i)
  }
  padValue(e) {
    let {
      padStartLength: t
    } = this.props;
    return null != t ? String(e).padStart(t, "0") : e
  }
  render() {
    let {
      prevValue: e,
      currValue: t
    } = this.state, {
      color: i,
      formatString: a
    } = this.props, n = d.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
    if (null == e) return (0, s.jsx)("div", {
      ...n,
      style: {
        color: i,
        minWidth: this.getMinWidth(t)
      },
      children: null != a ? a(this.padValue(t)) : this.padValue(t)
    });
    let l = Math.max(e, t);
    return (0, s.jsxs)("div", {
      ...n,
      style: {
        color: i,
        position: "relative",
        overflow: "hidden"
      },
      children: [(0, s.jsx)("div", {
        style: {
          visibility: "hidden",
          minWidth: this.getMinWidth(l)
        },
        children: this.padValue(l)
      }), (0, s.jsx)(c.default.div, {
        style: {
          color: i,
          ...this.getAnimatedStyle(this.prevAnimate)
        },
        children: null != a ? a(this.padValue(e)) : this.padValue(e)
      }), (0, s.jsx)(c.default.div, {
        style: {
          color: i,
          ...this.getAnimatedStyle(this.currAnimate)
        },
        children: null != a ? a(this.padValue(t)) : this.padValue(t)
      })]
    })
  }
  constructor(e) {
    super(e), this.animateNext = () => {
      let {
        currValue: e,
        nextValue: t
      } = this.state;
      null != t ? this.setState({
        prevValue: h.default.isFocused() ? e : null,
        currValue: t,
        nextValue: null
      }) : this.setState({
        prevValue: null
      })
    }, this.state = {
      prevValue: null,
      currValue: e.value,
      nextValue: null
    }, this.prevAnimate = new c.default.Value(0), this.currAnimate = new c.default.Value(1)
  }
}).Positions = l, o = n