t(47120);
var n, l = t(735250),
  a = t(470079),
  o = t(392711),
  i = t.n(o),
  r = t(55935),
  u = t(689938);

function c(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let d = () => [u.Z.Messages.COUNTDOWN_UNITS_SECONDS, u.Z.Messages.COUNTDOWN_UNITS_MINUTES, u.Z.Messages.COUNTDOWN_UNITS_HOURS, u.Z.Messages.COUNTDOWN_UNITS_DAYS];
class h extends(n = a.PureComponent) {
  componentDidMount() {
    let {
      intervalDuration: e,
      onInterval: s
    } = this.props;
    this._interval = setInterval(() => {
      this.forceUpdate(), null == s || s()
    }, e)
  }
  componentWillUnmount() {
    null != this._interval && clearInterval(this._interval)
  }
  defaultRender(e) {
    let {
      showDays: s,
      showUnits: t,
      className: n
    } = this.props, a = [e.days, e.hours, e.minutes, e.seconds], o = d();
    if (0 === e.days) a.shift();
    else if (!s) {
      let e = a.shift();
      a[0] += 24 * e
    }
    let r = i()(a).map(e => e < 10 ? "0".concat(e) : e).map((e, s) => [s > 0 && !t ? ":" : " ", (0, l.jsxs)("span", {
      children: [e, t ? o[a.length - s - 1] : null]
    }, s)]).flatten().value();
    return (0, l.jsx)("span", {
      className: n,
      children: r
    })
  }
  render() {
    let {
      deadline: e,
      children: s,
      className: t,
      stopAtOneSec: n
    } = this.props;
    if (e === 1 / 0) return (0, l.jsx)("span", {
      className: t,
      "aria-label": u.Z.Messages.MAX_AGE_NEVER,
      children: "∞"
    });
    let a = (0, r.TD)(Date.now(), e, n);
    return null != s ? s(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
  }
  constructor(...e) {
    super(...e), c(this, "_interval", void 0)
  }
}
c(h, "defaultProps", {
  showDays: !0,
  showUnits: !1,
  stopAtOneSec: !1,
  intervalDuration: 1e3
}), s.Z = h