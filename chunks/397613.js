"use strict";
s.r(t), s.d(t, {
  ErrorBoundary: function() {
    return l
  }
}), s("70102"), s("222007");
var r = s("884691");
let n = (0, r.createContext)(null),
  i = {
    didCatch: !1,
    error: null
  };
class l extends r.Component {
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
      for (var t, s, r = arguments.length, n = Array(r), l = 0; l < r; l++) n[l] = arguments[l];
      null === (t = (s = this.props).onReset) || void 0 === t || t.call(s, {
        args: n,
        reason: "imperative-api"
      }), this.setState(i)
    }
  }
  componentDidCatch(e, t) {
    var s, r;
    null === (s = (r = this.props).onError) || void 0 === s || s.call(r, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: s
    } = this.state, {
      resetKeys: r
    } = this.props;
    if (s && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, s) => !Object.is(e, t[s]))
      }(e.resetKeys, r)) {
      var n, l;
      null === (n = (l = this.props).onReset) || void 0 === n || n.call(l, {
        next: r,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(i)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: s,
      fallback: i
    } = this.props, {
      didCatch: l,
      error: a
    } = this.state, u = e;
    if (l) {
      let e = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, r.isValidElement)(i)) u = i;
      else if ("function" == typeof t) u = t(e);
      else if (s) u = (0, r.createElement)(s, e);
      else throw a
    }
    return (0, r.createElement)(n.Provider, {
      value: {
        didCatch: l,
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, u)
  }
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = i
  }
}