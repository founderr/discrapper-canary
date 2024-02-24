"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return s
  }
}), n("70102"), n("222007");
var i = n("884691");
let r = (0, i.createContext)(null),
  a = {
    didCatch: !1,
    error: null
  };
class s extends i.Component {
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
      for (var t, n, i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: r,
        reason: "imperative-api"
      }), this.setState(a)
    }
  }
  componentDidCatch(e, t) {
    var n, i;
    null === (n = (i = this.props).onError) || void 0 === n || n.call(i, e, t)
  }
  componentDidUpdate(e, t) {
    let {
      didCatch: n
    } = this.state, {
      resetKeys: i
    } = this.props;
    if (n && null !== t.error && function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
      }(e.resetKeys, i)) {
      var r, s;
      null === (r = (s = this.props).onReset) || void 0 === r || r.call(s, {
        next: i,
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
    } = this.state, o = e;
    if (s) {
      let e = {
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, i.isValidElement)(a)) o = a;
      else if ("function" == typeof t) o = t(e);
      else if (n) o = (0, i.createElement)(n, e);
      else throw l
    }
    return (0, i.createElement)(r.Provider, {
      value: {
        didCatch: s,
        error: l,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, o)
  }
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a
  }
}