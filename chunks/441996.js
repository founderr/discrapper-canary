"use strict";
a.r(t), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("392711"),
  r = a.n(i),
  o = a("302221"),
  u = a("489374");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class c extends(n = l.PureComponent) {
  onDataUpdate(e, t) {
    let {
      maxValue: a,
      data: n,
      animate: s
    } = this.props, l = null == e || e.data !== t.data && !r().isEqual(e.data, t.data);
    if (l && (this.dataChangedAt = performance.now(), this.maxValue = null != a ? a : Math.max(...n)), l || null == e || !e.animate && s || e.color !== this.props.color) {
      let e = o.hexToRgb(this.props.color);
      this.fillColor = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", 0.5)"), window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)
    }
  }
  componentDidMount() {
    this.animationFrameRequestId = 0, this.onDataUpdate(null, this.props)
  }
  componentDidUpdate(e) {
    this.onDataUpdate(e, this.props)
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = 0
  }
  render() {
    let {
      className: e,
      pixelWidth: t,
      pixelHeight: a
    } = this.props;
    return (0, s.jsx)("div", {
      className: e,
      children: (0, s.jsx)("canvas", {
        ref: this.canvas,
        className: u.canvas,
        width: t,
        height: a
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "dataChangedAt", void 0), d(this, "fillColor", void 0), d(this, "maxValue", void 0), d(this, "canvas", l.createRef()), d(this, "animationFrameRequestId", void 0), d(this, "updateAnimation", e => {
      let t, a;
      let n = this.canvas.current;
      if (null == n) return;
      let {
        data: s,
        updateInterval: l,
        color: i,
        numUpdatesToShow: r,
        lineWidth: u,
        animate: d,
        gradientStopColor: c
      } = this.props;
      if (s.length < 2) return;
      let f = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
        E = n.getContext("2d"),
        h = this.maxValue;
      E.strokeStyle = i, E.lineWidth = u;
      let _ = n.height - E.lineWidth,
        C = E.createLinearGradient(0, 0, 0, _);
      if (null != c) C.addColorStop(0, c);
      else {
        let {
          r: e,
          g: t,
          b: a
        } = o.hexToRgb(i);
        C.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(a, ", 0)"))
      }
      C.addColorStop(1, this.fillColor), E.fillStyle = C;
      let m = s.length >= r ? r : s.length;
      E.setTransform(1, 0, 0, -1, 0, n.height), E.clearRect(0, 0, n.width, n.height), E.translate(0, .5 * E.lineWidth);
      let S = Math.floor(n.width / (m - 3)),
        p = .5 * S;
      E.translate(S - S * f, 0), E.beginPath();
      let I = -S;
      s.forEach((e, n) => {
        t = {
          x: I,
          y: _ * e / h
        }, 0 === n ? E.moveTo(t.x, t.y) : E.bezierCurveTo(a.x + p, a.y, t.x - p, t.y, t.x, t.y), a = t, I += S
      }), E.stroke(), E.lineTo(I - S, 0), E.lineTo(0, 0), E.fill(), d && f < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    })
  }
}
d(c, "defaultProps", {
  animate: !0
}), t.default = c