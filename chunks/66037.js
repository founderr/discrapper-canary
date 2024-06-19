n(411104), n(47120);
var l = n(735250),
  a = n(470079),
  i = n(539528),
  r = n(786876),
  s = n(333032);
class o extends a.Component {
  render() {
    let {
      to: e,
      from: t,
      isNavLink: n,
      children: a,
      tabIndex: i = 0,
      role: s,
      className: o
    } = this.props;
    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof e ? e : e.pathname,
      u = "string" == typeof e ? "" : e.hash,
      d = "string" == typeof e ? "" : e.search;
    return n ? (0, l.jsx)(r.OL, {
      className: o,
      tabIndex: i,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: u,
        search: d,
        state: {
          previousLinkLocation: t
        }
      },
      role: s,
      children: a
    }) : (0, l.jsx)(r.rU, {
      className: o,
      tabIndex: i,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: u,
        search: d,
        state: {
          previousLinkLocation: t
        }
      },
      role: s,
      children: a
    })
  }
  constructor(...e) {
    var t, n, l;
    super(...e), t = this, n = "handleOnClick", l = () => {
      let {
        to: e,
        avoidRouter: t,
        onClick: n,
        history: l
      } = this.props;
      if (null != n) n();
      else if (t) {
        let t = "string" == typeof e ? (0, i.ob)(e, null, void 0, l.location) : e,
          n = l.createHref(t);
        window.location = n
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = l
  }
}
t.Z = (0, s.EN)(o)