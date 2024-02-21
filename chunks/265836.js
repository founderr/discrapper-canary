"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("862337");
class l extends i.Component {
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
    var n, s, i, r;
    let {
      props: l
    } = this;
    let a = (n = l, s = this.state, !n.disable && !(s.hovered && n.pauseOnHover));
    let u = (i = e, r = t, !i.disable && !(r.hovered && i.pauseOnHover));
    a && !u || e.interval !== l.interval ? this.startTimer() : !a && u && this.stopTimer()
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
    return (0, s.jsx)("div", {
      ...i,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), this.timer = new r.Interval, this.state = {
      hovered: !1
    }, this.handlePause = () => {
      !this.state.hovered && this.setState({
        hovered: !0
      })
    }, this.handleResume = () => {
      this.setState({
        hovered: !1
      })
    }
  }
}
l.defaultProps = {
  disable: !1,
  pauseOnHover: !1
};
var a = l