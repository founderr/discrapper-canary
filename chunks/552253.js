"use strict";
i.r(t), i("47120");
var l, a = i("735250"),
  n = i("470079"),
  s = i("846519");

function r(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}
class o extends(l = n.Component) {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: !1
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, i = this.state.hovered && e;
    !t && !i && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let i, l, a, n, {
      props: s
    } = this;
    let r = (i = s, l = this.state, !i.disable && !(l.hovered && i.pauseOnHover));
    let o = (a = e, n = t, !a.disable && !(n.hovered && a.pauseOnHover));
    r && !o || e.interval !== s.interval ? this.startTimer() : !r && o && this.stopTimer()
  }
  startTimer() {
    let {
      interval: e,
      onInterval: t,
      disable: i
    } = this.props;
    !i && this.timer.start(e, () => {
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
      disable: i
    } = this.props, l = i ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, a.jsx)("div", {
      ...l,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), r(this, "timer", new s.Interval), r(this, "state", {
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