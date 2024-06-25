n(47120);
var s, i = n(735250),
  l = n(470079),
  a = n(392711),
  r = n.n(a),
  o = n(302221),
  c = n(513734);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends(s = l.PureComponent) {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: s,
      animate: i
    } = this.props, l = null == e || e.data !== t.data && !r().isEqual(e.data, t.data);
    if (l && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...s)), l || null == e || !e.animate && i || e.color !== this.props.color) {
      let e = o.oo(this.props.color);
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
    return (0, i.jsx)("div", {
      className: e,
      children: (0, i.jsx)("canvas", {
        ref: this.canvas,
        className: c.canvas,
        width: t,
        height: n
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "dataChangedAt", void 0), u(this, "fillColor", void 0), u(this, "maxValue", void 0), u(this, "canvas", l.createRef()), u(this, "animationFrameRequestId", void 0), u(this, "updateAnimation", e => {
      let t, n;
      let s = this.canvas.current;
      if (null == s) return;
      let {
        data: i,
        updateInterval: l,
        color: a,
        numUpdatesToShow: r,
        lineWidth: c,
        animate: u,
        gradientStopColor: d
      } = this.props;
      if (i.length < 2) return;
      let E = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
        h = s.getContext("2d"),
        _ = this.maxValue;
      h.strokeStyle = a, h.lineWidth = c;
      let I = s.height - h.lineWidth,
        m = h.createLinearGradient(0, 0, 0, I);
      if (null != d) m.addColorStop(0, d);
      else {
        let {
          r: e,
          g: t,
          b: n
        } = o.oo(a);
        m.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"))
      }
      m.addColorStop(1, this.fillColor), h.fillStyle = m;
      let T = i.length >= r ? r : i.length;
      h.setTransform(1, 0, 0, -1, 0, s.height), h.clearRect(0, 0, s.width, s.height), h.translate(0, .5 * h.lineWidth);
      let g = Math.floor(s.width / (T - 3)),
        p = .5 * g;
      h.translate(g - g * E, 0), h.beginPath();
      let N = -g;
      i.forEach((e, s) => {
        t = {
          x: N,
          y: I * e / _
        }, 0 === s ? h.moveTo(t.x, t.y) : h.bezierCurveTo(n.x + p, n.y, t.x - p, t.y, t.x, t.y), n = t, N += g
      }), h.stroke(), h.lineTo(N - g, 0), h.lineTo(0, 0), h.fill(), u && E < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    })
  }
}
u(d, "defaultProps", {
  animate: !0
}), t.Z = d