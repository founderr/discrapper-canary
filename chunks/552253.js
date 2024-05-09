"use strict";
n.r(t), n("47120");
var i, r = n("735250"),
  a = n("470079"),
  l = n("846519");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends(i = a.Component) {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: !1
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, n = this.state.hovered && e;
    !t && !n && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let n, i, r, a, {
      props: l
    } = this;
    let s = (n = l, i = this.state, !n.disable && !(i.hovered && n.pauseOnHover));
    let o = (r = e, a = t, !r.disable && !(a.hovered && r.pauseOnHover));
    s && !o || e.interval !== l.interval ? this.startTimer() : !s && o && this.stopTimer()
  }
  startTimer() {
    let {
      interval: e,
      onInterval: t,
      disable: n
    } = this.props;
    !n && this.timer.start(e, () => {
      t()
    })
  }
  stopTimer() {
    this.timer.stop()
  }
  render() {
    let {
      children: e,
      className: t,
      disable: n
    } = this.props, i = n ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, r.jsx)("div", {
      ...i,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), s(this, "timer", new l.Interval), s(this, "state", {
      hovered: !1
    }), s(this, "handlePause", () => {
      !this.state.hovered && this.setState({
        hovered: !0
      })
    }), s(this, "handleResume", () => {
      this.setState({
        hovered: !1
      })
    })
  }
}
s(o, "defaultProps", {
  disable: !1,
  pauseOnHover: !1
}), t.default = o