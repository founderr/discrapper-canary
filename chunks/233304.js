"use strict";
s.r(t), s.d(t, {
  NotchBackground: function() {
    return h
  }
}), s("47120");
var n, a = s("735250"),
  l = s("470079"),
  i = s("120356"),
  r = s.n(i),
  o = s("692547"),
  u = s("477690"),
  d = s("624138"),
  c = s("162168"),
  E = s("314721");

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let _ = (0, d.cssValueToNumber)(u.default.GRADIENT_PROGRESS_NOTCH_WIDTH),
  h = Object.freeze({
    BLACK: E.black,
    GRAY: E.gray
  });
class C extends(n = l.Component) {
  componentDidMount() {
    this.computeBars(), window.addEventListener("resize", this.computeBars)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.computeBars)
  }
  roundToNearestStep(e) {
    return Math.round(e / _) * _
  }
  getProgressStyles() {
    let {
      progress: e
    } = this.props, {
      barWidth: t
    } = this.state, s = this.roundToNearestStep(t * (100 - Math.max(0, Math.min(100, e))) / 100);
    return {
      transform: "translateX(".concat(Math.abs(s - t), "px)")
    }
  }
  getGradientStyles() {
    let {
      gradientEnd: e,
      gradientStart: t,
      progress: s
    } = this.props, {
      barWidth: n
    } = this.state;
    return {
      width: "".concat(n, "px"),
      background: s <= 0 ? "none" : "linear-gradient(to right, ".concat(t, ", ").concat(e, ")")
    }
  }
  render() {
    let {
      className: e,
      notchBackground: t
    } = this.props, {
      barWidth: s
    } = this.state;
    return (0, a.jsx)("div", {
      className: E.wrapper,
      ref: this.sizerRef,
      children: (0, a.jsxs)("div", {
        className: r()(E.container, e),
        style: this.getGradientStyles(),
        children: [(0, a.jsx)("div", {
          className: E.progress,
          style: this.getProgressStyles()
        }), 0 !== s && (0, a.jsx)(c.default, {
          width: s,
          className: r()(E.notches, t)
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      barWidth: 0
    }), f(this, "sizerRef", l.createRef()), f(this, "computeBars", () => {
      let {
        current: e
      } = this.sizerRef;
      this.setState({
        barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0
      })
    })
  }
}
f(C, "defaultProps", {
  gradientStart: o.default.unsafe_rawColors.YELLOW_260.css,
  gradientEnd: o.default.unsafe_rawColors.GREEN_360.css
}), t.default = C