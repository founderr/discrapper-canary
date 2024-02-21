"use strict";
r.r(t), r.d(t, {
  ErrorBoundary: function() {
    return l
  }
}), r("70102"), r("222007");
var s = r("884691");
let n = (0, s.createContext)(null),
  i = {
    didCatch: !1,
    error: null
  };
class l extends s.Component {
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
      for (var t, r, s = arguments.length, n = Array(s), l = 0; l < s; l++) n[l] = arguments[l];
      null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
        args: n,
        reason: "imperative-api"
      }), this.setState(i)
    }
  }
  componentDidCatch(e, t) {
    var r, s;
    null === (r = (s = this.props).onError) || void 0 === r || r.call(s, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: r
    } = this.state, {
      resetKeys: s
    } = this.props;
    if (r && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
      }(e.resetKeys, s)) {
      var n, l;
      null === (n = (l = this.props).onReset) || void 0 === n || n.call(l, {
        next: s,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(i)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: r,
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
      if ((0, s.isValidElement)(i)) u = i;
      else if ("function" == typeof t) u = t(e);
      else if (r) u = (0, s.createElement)(r, e);
      else throw a
    }
    return (0, s.createElement)(n.Provider, {
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