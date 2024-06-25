s.d(t, {
  _: function() {
    return I
  }
}), s(47120);
var n, a = s(735250),
  i = s(470079),
  r = s(120356),
  l = s.n(r),
  o = s(692547),
  c = s(477690),
  E = s(624138),
  _ = s(162168),
  u = s(937459);

function d(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let T = (0, E.Mg)(c.Z.GRADIENT_PROGRESS_NOTCH_WIDTH),
  I = Object.freeze({
    BLACK: u.black,
    GRAY: u.gray
  });
class R extends(n = i.Component) {
  componentDidMount() {
    this.computeBars(), window.addEventListener("resize", this.computeBars)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.computeBars)
  }
  roundToNearestStep(e) {
    return Math.round(e / T) * T
  }
  getProgressStyles() {
    let {
      progress: e
    } = this.props, t = Math.max(0, Math.min(100, e)), {
      barWidth: s
    } = this.state, n = Math.abs(this.roundToNearestStep(s * (100 - t) / 100) - s);
    return {
      transform: "translateX(".concat(n, "px)")
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
      className: u.wrapper,
      ref: this.sizerRef,
      children: (0, a.jsxs)("div", {
        className: l()(u.container, e),
        style: this.getGradientStyles(),
        children: [(0, a.jsx)("div", {
          className: u.progress,
          style: this.getProgressStyles()
        }), 0 !== s && (0, a.jsx)(_.Z, {
          width: s,
          className: l()(u.notches, t)
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      barWidth: 0
    }), d(this, "sizerRef", i.createRef()), d(this, "computeBars", () => {
      let {
        current: e
      } = this.sizerRef;
      this.setState({
        barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0
      })
    })
  }
}
d(R, "defaultProps", {
  gradientStart: o.Z.unsafe_rawColors.YELLOW_260.css,
  gradientEnd: o.Z.unsafe_rawColors.GREEN_360.css
}), t.Z = R