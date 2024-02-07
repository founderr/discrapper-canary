"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983"),
  r = n("884691"),
  i = n("917351"),
  a = n.n(i),
  l = n("888400"),
  o = n("782340");
let u = () => [o.default.Messages.COUNTDOWN_UNITS_SECONDS, o.default.Messages.COUNTDOWN_UNITS_MINUTES, o.default.Messages.COUNTDOWN_UNITS_HOURS, o.default.Messages.COUNTDOWN_UNITS_DAYS];
class d extends r.PureComponent {
  componentDidMount() {
    let {
      intervalDuration: e,
      onInterval: t
    } = this.props;
    this._interval = setInterval(() => {
      this.forceUpdate(), null == t || t()
    }, e)
  }
  componentWillUnmount() {
    null != this._interval && clearInterval(this._interval)
  }
  defaultRender(e) {
    let {
      showDays: t,
      showUnits: n,
      className: r
    } = this.props, i = [e.days, e.hours, e.minutes, e.seconds], l = u();
    if (0 === e.days) i.shift();
    else if (!t) {
      let e = i.shift();
      i[0] += 24 * e
    }
    let o = a(i).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, s.jsxs)("span", {
      children: [e, n ? l[i.length - t - 1] : null]
    }, t)]).flatten().value();
    return (0, s.jsx)("span", {
      className: r,
      children: o
    })
  }
  render() {
    let {
      deadline: e,
      children: t,
      className: n,
      stopAtOneSec: r
    } = this.props;
    if (e === 1 / 0) return (0, s.jsx)("span", {
      className: n,
      "aria-label": o.default.Messages.MAX_AGE_NEVER,
      children: "∞"
    });
    let i = (0, l.diffAsUnits)(Date.now(), e, r);
    return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i)
  }
}
d.defaultProps = {
  showDays: !0,
  showUnits: !1,
  stopAtOneSec: !1,
  intervalDuration: 1e3
};
var c = d