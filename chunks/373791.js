"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  i = s("470079"),
  E = s("392711"),
  l = s.n(E),
  _ = s("55935"),
  r = s("689938");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let o = () => [r.default.Messages.COUNTDOWN_UNITS_SECONDS, r.default.Messages.COUNTDOWN_UNITS_MINUTES, r.default.Messages.COUNTDOWN_UNITS_HOURS, r.default.Messages.COUNTDOWN_UNITS_DAYS];
class T extends(a = i.PureComponent) {
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
      className: a
    } = this.props, i = [e.days, e.hours, e.minutes, e.seconds], E = o();
    if (0 === e.days) i.shift();
    else if (!t) {
      let e = i.shift();
      i[0] += 24 * e
    }
    let _ = l()(i).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !s ? ":" : " ", (0, n.jsxs)("span", {
      children: [e, s ? E[i.length - t - 1] : null]
    }, t)]).flatten().value();
    return (0, n.jsx)("span", {
      className: a,
      children: _
    })
  }
  render() {
    let {
      deadline: e,
      children: t,
      className: s,
      stopAtOneSec: a
    } = this.props;
    if (e === 1 / 0) return (0, n.jsx)("span", {
      className: s,
      "aria-label": r.default.Messages.MAX_AGE_NEVER,
      children: "∞"
    });
    let i = (0, _.diffAsUnits)(Date.now(), e, a);
    return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i)
  }
  constructor(...e) {
    super(...e), u(this, "_interval", void 0)
  }
}
u(T, "defaultProps", {
  showDays: !0,
  showUnits: !1,
  stopAtOneSec: !1,
  intervalDuration: 1e3
}), t.default = T