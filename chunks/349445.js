"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return a
  }
});
var r = n("470079");
let i = (0, r.createContext)(null),
  s = {
    didCatch: !1,
    error: null
  };
class a extends r.Component {
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
      for (var t, n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: i,
        reason: "imperative-api"
      }), this.setState(s)
    }
  }
  componentDidCatch(e, t) {
    var n, r;
    null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: n
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (n && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
      }(e.resetKeys, r)) {
      var i, a;
      null === (i = (a = this.props).onReset) || void 0 === i || i.call(a, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(s)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: s
    } = this.props, {
      didCatch: a,
      error: l
    } = this.state, u = e;
    if (a) {
      let e = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, r.isValidElement)(s)) u = s;
      else if ("function" == typeof t) u = t(e);
      else if (n) u = (0, r.createElement)(n, e);
      else throw l
    }
    return (0, r.createElement)(i.Provider, {
      value: {
        didCatch: a,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
}