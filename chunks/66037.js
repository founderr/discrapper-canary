n(411104), n(47120);
var a = n(735250),
  l = n(470079),
  i = n(539528),
  s = n(786876),
  r = n(333032);
class o extends l.Component {
  render() {
    let {
      to: e,
      from: t,
      isNavLink: n,
      children: l,
      tabIndex: i = 0,
      role: r,
      className: o
    } = this.props;
    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof e ? e : e.pathname,
      d = "string" == typeof e ? "" : e.hash,
      u = "string" == typeof e ? "" : e.search;
    return n ? (0, a.jsx)(s.OL, {
      className: o,
      tabIndex: i,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: t
        }
      },
      role: r,
      children: l
    }) : (0, a.jsx)(s.rU, {
      className: o,
      tabIndex: i,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: t
        }
      },
      role: r,
      children: l
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "handleOnClick", a = () => {
      let {
        to: e,
        avoidRouter: t,
        onClick: n,
        history: a
      } = this.props;
      if (null != n) n();
      else if (t) {
        let t = "string" == typeof e ? (0, i.ob)(e, null, void 0, a.location) : e,
          n = a.createHref(t);
        window.location = n
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}
t.Z = (0, r.EN)(o)