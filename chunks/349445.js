i.d(t, {
  SV: function() {
    return o
  }
});
var n = i(470079);
let r = (0, n.createContext)(null),
  s = {
    didCatch: !1,
    error: null
  };
class o extends n.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = s
  }
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0,
      error: e
    }
  }
  resetErrorBoundary() {
    let {
      error: e
    } = this.state;
    if (null !== e) {
      for (var t, i, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
      null === (t = (i = this.props).onReset) || void 0 === t || t.call(i, {
        args: r,
        reason: "imperative-api"
      }), this.setState(s)
    }
  }
  componentDidCatch(e, t) {
    var i, n;
    null === (i = (n = this.props).onError) || void 0 === i || i.call(n, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: i
    } = this.state, {
      resetKeys: n
    } = this.props;
    if (i && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, i) => !Object.is(e, t[i]))
      }(e.resetKeys, n)) {
      var r, o;
      null === (r = (o = this.props).onReset) || void 0 === r || r.call(o, {
        next: n,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(s)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: i,
      fallback: s
    } = this.props, {
      didCatch: o,
      error: l
    } = this.state, a = e;
    if (o) {
      let e = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, n.isValidElement)(s)) a = s;
      else if ("function" == typeof t) a = t(e);
      else if (i) a = (0, n.createElement)(i, e);
      else throw l
    }
    return (0, n.createElement)(r.Provider, {
      value: {
        didCatch: o,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a)
  }
}