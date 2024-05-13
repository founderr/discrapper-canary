"use strict";
l.r(t), l("47120");
var i, a = l("735250"),
  n = l("470079"),
  s = l("846519");

function r(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
class o extends(i = n.Component) {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: !1
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, l = this.state.hovered && e;
    !t && !l && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let l, i, a, n, {
      props: s
    } = this;
    let r = (l = s, i = this.state, !l.disable && !(i.hovered && l.pauseOnHover));
    let o = (a = e, n = t, !a.disable && !(n.hovered && a.pauseOnHover));
    r && !o || e.interval !== s.interval ? this.startTimer() : !r && o && this.stopTimer()
  }
  startTimer() {
    let {
      interval: e,
      onInterval: t,
      disable: l
    } = this.props;
    !l && this.timer.start(e, () => {
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
      disable: l
    } = this.props, i = l ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, a.jsx)("div", {
      ...i,
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