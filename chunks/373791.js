"use strict";
s.r(t), s("47120");
var E, _ = s("735250"),
  a = s("470079"),
  n = s("392711"),
  T = s.n(n),
  i = s("55935"),
  u = s("689938");

function A(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let l = () => [u.default.Messages.COUNTDOWN_UNITS_SECONDS, u.default.Messages.COUNTDOWN_UNITS_MINUTES, u.default.Messages.COUNTDOWN_UNITS_HOURS, u.default.Messages.COUNTDOWN_UNITS_DAYS];
class I extends(E = a.PureComponent) {
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
      showUnits: s,
      className: E
    } = this.props, a = [e.days, e.hours, e.minutes, e.seconds], n = l();
    if (0 === e.days) a.shift();
    else if (!t) {
      let e = a.shift();
      a[0] += 24 * e
    }
    let i = T()(a).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !s ? ":" : " ", (0, _.jsxs)("span", {
      children: [e, s ? n[a.length - t - 1] : null]
    }, t)]).flatten().value();
    return (0, _.jsx)("span", {
      className: E,
      children: i
    })
  }
  render() {
    let {
      deadline: e,
      children: t,
      className: s,
      stopAtOneSec: E
    } = this.props;
    if (e === 1 / 0) return (0, _.jsx)("span", {
      className: s,
      "aria-label": u.default.Messages.MAX_AGE_NEVER,
      children: "∞"
    });
    let a = (0, i.diffAsUnits)(Date.now(), e, E);
    return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
  }
  constructor(...e) {
    super(...e), A(this, "_interval", void 0)
  }
}
A(I, "defaultProps", {
  showDays: !0,
  showUnits: !1,
  stopAtOneSec: !1,
  intervalDuration: 1e3
}), t.default = I