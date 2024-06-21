n(47120);
var i, s = n(735250),
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
class d extends(i = l.PureComponent) {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: i,
      animate: s
    } = this.props, l = null == e || e.data !== t.data && !r().isEqual(e.data, t.data);
    if (l && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...i)), l || null == e || !e.animate && s || e.color !== this.props.color) {
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
    return (0, s.jsx)("div", {
      className: e,
      children: (0, s.jsx)("canvas", {
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
      let i = this.canvas.current;
      if (null == i) return;
      let {
        data: s,
        updateInterval: l,
        color: a,
        numUpdatesToShow: r,
        lineWidth: c,
        animate: u,
        gradientStopColor: d
      } = this.props;
      if (s.length < 2) return;
      let E = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
        h = i.getContext("2d"),
        _ = this.maxValue;
      h.strokeStyle = a, h.lineWidth = c;
      let I = i.height - h.lineWidth,
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
      let g = s.length >= r ? r : s.length;
      h.setTransform(1, 0, 0, -1, 0, i.height), h.clearRect(0, 0, i.width, i.height), h.translate(0, .5 * h.lineWidth);
      let p = Math.floor(i.width / (g - 3)),
        N = .5 * p;
      h.translate(p - p * E, 0), h.beginPath();
      let T = -p;
      s.forEach((e, i) => {
        t = {
          x: T,
          y: I * e / _
        }, 0 === i ? h.moveTo(t.x, t.y) : h.bezierCurveTo(n.x + N, n.y, t.x - N, t.y, t.x, t.y), n = t, T += p
      }), h.stroke(), h.lineTo(T - p, 0), h.lineTo(0, 0), h.fill(), u && E < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    })
  }
}
u(d, "defaultProps", {
  animate: !0
}), t.Z = d