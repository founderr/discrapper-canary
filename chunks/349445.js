"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return r
  }
});
var s = n("470079");
let i = (0, s.createContext)(null),
  a = {
    didCatch: !1,
    error: null
  };
class r extends s.Component {
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a
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
      for (var t, n, s = arguments.length, i = Array(s), r = 0; r < s; r++) i[r] = arguments[r];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: i,
        reason: "imperative-api"
      }), this.setState(a)
    }
  }
  componentDidCatch(e, t) {
    var n, s;
    null === (n = (s = this.props).onError) || void 0 === n || n.call(s, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: n
    } = this.state, {
      resetKeys: s
    } = this.props;
    if (n && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
      }(e.resetKeys, s)) {
      var i, r;
      null === (i = (r = this.props).onReset) || void 0 === i || i.call(r, {
        next: s,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(a)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: a
    } = this.props, {
      didCatch: r,
      error: l
    } = this.state, u = e;
    if (r) {
      let e = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, s.isValidElement)(a)) u = a;
      else if ("function" == typeof t) u = t(e);
      else if (n) u = (0, s.createElement)(n, e);
      else throw l
    }
    return (0, s.createElement)(i.Provider, {
      value: {
        didCatch: r,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
}