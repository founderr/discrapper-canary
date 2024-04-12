"use strict";
a.r(t), a.d(t, {
  NotchBackground: function() {
    return _
  }
}), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("803997"),
  r = a.n(i),
  o = a("692547"),
  u = a("477690"),
  d = a("624138"),
  c = a("162168"),
  f = a("37397");

function E(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let h = (0, d.cssValueToNumber)(u.default.GRADIENT_PROGRESS_NOTCH_WIDTH),
  _ = Object.freeze({
    BLACK: f.black,
    GRAY: f.gray
  });
class C extends(n = l.Component) {
  componentDidMount() {
    this.computeBars(), window.addEventListener("resize", this.computeBars)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.computeBars)
  }
  roundToNearestStep(e) {
    return Math.round(e / h) * h
  }
  getProgressStyles() {
    let {
      progress: e
    } = this.props, {
      barWidth: t
    } = this.state, a = this.roundToNearestStep(t * (100 - Math.max(0, Math.min(100, e))) / 100);
    return {
      transform: "translateX(".concat(Math.abs(a - t), "px)")
    }
  }
  getGradientStyles() {
    let {
      gradientEnd: e,
      gradientStart: t,
      progress: a
    } = this.props, {
      barWidth: n
    } = this.state;
    return {
      width: "".concat(n, "px"),
      background: a <= 0 ? "none" : "linear-gradient(to right, ".concat(t, ", ").concat(e, ")")
    }
  }
  render() {
    let {
      className: e,
      notchBackground: t
    } = this.props, {
      barWidth: a
    } = this.state;
    return (0, s.jsx)("div", {
      className: f.wrapper,
      ref: this.sizerRef,
      children: (0, s.jsxs)("div", {
        className: r()(f.container, e),
        style: this.getGradientStyles(),
        children: [(0, s.jsx)("div", {
          className: f.progress,
          style: this.getProgressStyles()
        }), 0 !== a && (0, s.jsx)(c.default, {
          width: a,
          className: r()(f.notches, t)
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      barWidth: 0
    }), E(this, "sizerRef", l.createRef()), E(this, "computeBars", () => {
      let {
        current: e
      } = this.sizerRef;
      this.setState({
        barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0
      })
    })
  }
}
E(C, "defaultProps", {
  gradientStart: o.default.unsafe_rawColors.YELLOW_260.css,
  gradientEnd: o.default.unsafe_rawColors.GREEN_360.css
}), t.default = C