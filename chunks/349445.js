"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return s
  }
});
var r = n("470079");
let i = (0, r.createContext)(null),
  a = {
    didCatch: !1,
    error: null
  };
class s extends r.Component {
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
      for (var t, n, r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: i,
        reason: "imperative-api"
      }), this.setState(a)
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
      var i, s;
      null === (i = (s = this.props).onReset) || void 0 === i || i.call(s, {
        next: r,
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
      didCatch: s,
      error: l
    } = this.state, u = e;
    if (s) {
      let e = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, r.isValidElement)(a)) u = a;
      else if ("function" == typeof t) u = t(e);
      else if (n) u = (0, r.createElement)(n, e);
      else throw l
    }
    return (0, r.createElement)(i.Provider, {
      value: {
        didCatch: s,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
}