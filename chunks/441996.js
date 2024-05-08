"use strict";
n.r(t), n("47120");
var a, s = n("735250"),
  i = n("470079"),
  l = n("392711"),
  r = n.n(l),
  o = n("302221"),
  u = n("489374");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends(a = i.PureComponent) {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: a,
      animate: s
    } = this.props, i = null == e || e.data !== t.data && !r().isEqual(e.data, t.data);
    if (i && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...a)), i || null == e || !e.animate && s || e.color !== this.props.color) {
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
      pixelHeight: n
    } = this.props;
    return (0, s.jsx)("div", {
      className: e,
      children: (0, s.jsx)("canvas", {
        ref: this.canvas,
        className: u.canvas,
        width: t,
        height: n
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "dataChangedAt", void 0), d(this, "fillColor", void 0), d(this, "maxValue", void 0), d(this, "canvas", i.createRef()), d(this, "animationFrameRequestId", void 0), d(this, "updateAnimation", e => {
      let t, n;
      let a = this.canvas.current;
      if (null == a) return;
      let {
        data: s,
        updateInterval: i,
        color: l,
        numUpdatesToShow: r,
        lineWidth: u,
        animate: d,
        gradientStopColor: c
      } = this.props;
      if (s.length < 2) return;
      let f = Math.max(Math.min((e - this.dataChangedAt) / i, 1), 0),
        E = a.getContext("2d"),
        h = this.maxValue;
      E.strokeStyle = l, E.lineWidth = u;
      let _ = a.height - E.lineWidth,
        C = E.createLinearGradient(0, 0, 0, _);
      if (null != c) C.addColorStop(0, c);
      else {
        let {
          r: e,
          g: t,
          b: n
        } = o.hexToRgb(l);
        C.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"))
      }
      C.addColorStop(1, this.fillColor), E.fillStyle = C;
      let m = s.length >= r ? r : s.length;
      E.setTransform(1, 0, 0, -1, 0, a.height), E.clearRect(0, 0, a.width, a.height), E.translate(0, .5 * E.lineWidth);
      let S = Math.floor(a.width / (m - 3)),
        p = .5 * S;
      E.translate(S - S * f, 0), E.beginPath();
      let I = -S;
      s.forEach((e, a) => {
        t = {
          x: I,
          y: _ * e / h
        }, 0 === a ? E.moveTo(t.x, t.y) : E.bezierCurveTo(n.x + p, n.y, t.x - p, t.y, t.x, t.y), n = t, I += S
      }), E.stroke(), E.lineTo(I - S, 0), E.lineTo(0, 0), E.fill(), d && f < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    })
  }
}
d(c, "defaultProps", {
  animate: !0
}), t.default = c