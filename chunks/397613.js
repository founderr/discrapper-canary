"use strict";
n.r(t), n.d(t, {
  ErrorBoundary: function() {
    return r
  }
}), n("70102"), n("222007");
var i = n("884691");
let a = (0, i.createContext)(null),
  l = {
    didCatch: !1,
    error: null
  };
class r extends i.Component {
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
      for (var t, n, i = arguments.length, a = Array(i), r = 0; r < i; r++) a[r] = arguments[r];
      null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
        args: a,
        reason: "imperative-api"
      }), this.setState(l)
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
      var a, r;
      null === (a = (r = this.props).onReset) || void 0 === a || a.call(r, {
        next: i,
        prev: e.resetKeys,
        reason: "keys"
      }), this.setState(l)
    }
  }
  render() {
    let {
      children: e,
      fallbackRender: t,
      FallbackComponent: n,
      fallback: l
    } = this.props, {
      didCatch: r,
      error: u
    } = this.state, s = e;
    if (r) {
      let e = {
        error: u,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if ((0, i.isValidElement)(l)) s = l;
      else if ("function" == typeof t) s = t(e);
      else if (n) s = (0, i.createElement)(n, e);
      else throw u
    }
    return (0, i.createElement)(a.Provider, {
      value: {
        didCatch: r,
        error: u,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, s)
  }
  constructor(e) {
    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = l
  }
}