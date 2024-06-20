n.d(t, {
  _: function() {
    return T
  }
}), n(47120);
var s, a = n(735250),
  i = n(470079),
  l = n(120356),
  r = n.n(l),
  c = n(692547),
  o = n(477690),
  d = n(624138),
  u = n(162168),
  E = n(937459);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = (0, d.Mg)(o.Z.GRADIENT_PROGRESS_NOTCH_WIDTH),
  T = Object.freeze({
    BLACK: E.black,
    GRAY: E.gray
  });
class I extends(s = i.Component) {
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
    } = this.props, t = Math.max(0, Math.min(100, e)), {
      barWidth: n
    } = this.state, s = Math.abs(this.roundToNearestStep(n * (100 - t) / 100) - n);
    return {
      transform: "translateX(".concat(s, "px)")
    }
  }
  getGradientStyles() {
    let {
      gradientEnd: e,
      gradientStart: t,
      progress: n
    } = this.props, {
      barWidth: s
    } = this.state;
    return {
      width: "".concat(s, "px"),
      background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(t, ", ").concat(e, ")")
    }
  }
  render() {
    let {
      className: e,
      notchBackground: t
    } = this.props, {
      barWidth: n
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
        }), 0 !== n && (0, a.jsx)(u.Z, {
          width: n,
          className: r()(E.notches, t)
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      barWidth: 0
    }), _(this, "sizerRef", i.createRef()), _(this, "computeBars", () => {
      let {
        current: e
      } = this.sizerRef;
      this.setState({
        barWidth: null != e ? this.roundToNearestStep(e.clientWidth) : 0
      })
    })
  }
}
_(I, "defaultProps", {
  gradientStart: c.Z.unsafe_rawColors.YELLOW_260.css,
  gradientEnd: c.Z.unsafe_rawColors.GREEN_360.css
}), t.Z = I