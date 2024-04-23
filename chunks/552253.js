"use strict";
n.r(t), n("47120");
var s, l = n("735250"),
  a = n("470079"),
  i = n("846519");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends(s = a.Component) {
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
    let n, s, l, a, {
      props: i
    } = this;
    let r = (n = i, s = this.state, !n.disable && !(s.hovered && n.pauseOnHover));
    let o = (l = e, a = t, !l.disable && !(a.hovered && l.pauseOnHover));
    r && !o || e.interval !== i.interval ? this.startTimer() : !r && o && this.stopTimer()
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
    } = this.props, s = n ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, l.jsx)("div", {
      ...s,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), r(this, "timer", new i.Interval), r(this, "state", {
      hovered: !1
    }), r(this, "handlePause", () => {
      !this.state.hovered && this.setState({
        hovered: !0
      })
    }), r(this, "handleResume", () => {
      this.setState({
        hovered: !1
      })
    })
  }
}
r(o, "defaultProps", {
  disable: !1,
  pauseOnHover: !1
}), t.default = o