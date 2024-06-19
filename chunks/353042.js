n(653041), n(47120);
var l, i = n(470079),
  s = n(846519);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a extends(l = i.Component) {
  componentDidMount() {
    this.update(), this._interval.start(this.props.updateInterval, this.update)
  }
  componentWillUnmount() {
    this._interval.stop()
  }
  calculateInitialDeltaBytes(e) {
    let {
      numUpdatesToShow: t,
      updateInterval: n,
      pointsToSmooth: l
    } = this.props, i = Date.now(), s = 0, r = 0, a = [], o = null != e[0] ? e[0].bytes : 0;
    for (; s < t + l; s++) {
      let t;
      let l = i - (s + 1) * n;
      for (; r < e.length;)
        if ((t = e[r]).timestamp > l) r++;
        else break;
      if (r === e.length) break;
      null != t && (a.push(o - t.bytes), o = t.bytes)
    }
    for (; s < t + l; s++) a.push(0);
    return a.reverse(), a
  }
  smoothDeltaBytes(e) {
    let {
      pointsToSmooth: t
    } = this.props, n = [];
    for (let l = 0; l < e.length - t; l++) {
      let i = 0;
      for (let n = 0; n < t; n++) i += e[l + n];
      n.push(i / t)
    }
    return n
  }
  render() {
    let {
      numUpdatesToShow: e,
      updateInterval: t,
      children: n
    } = this.props;
    return n(this.state.smoothedDeltaBytes, t, e)
  }
  constructor(e) {
    super(e), r(this, "_interval", new s.Xp), r(this, "update", () => {
      let {
        onUpdate: e,
        numUpdatesToShow: t,
        pointsToSmooth: n,
        updateInterval: l
      } = this.props, i = this.props.getHistoricalTotalBytes(), s = null != i[0] ? i[0].bytes : 0, r = [...this.state.deltaBytes.slice(1, t + n), s - this.state.lastTotalBytes];
      this.setState({
        deltaBytes: r,
        smoothedDeltaBytes: this.smoothDeltaBytes(r),
        lastTotalBytes: s
      }, () => null != e && e(l))
    });
    let t = this.props.getHistoricalTotalBytes(),
      n = this.calculateInitialDeltaBytes(t);
    this.state = {
      deltaBytes: n,
      smoothedDeltaBytes: this.smoothDeltaBytes(n),
      lastTotalBytes: null != t[0] ? t[0].bytes : 0
    }
  }
}
r(a, "defaultProps", {
  numUpdatesToShow: 30,
  updateInterval: 500,
  pointsToSmooth: 10
}), t.Z = a