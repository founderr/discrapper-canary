n.d(t, {
  SV: function() {
return a;
  }
});
var r = n(470079);
let i = (0, r.createContext)(null),
  o = {
didCatch: !1,
error: null
  };
class a extends r.Component {
  constructor(e) {
super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = o;
  }
  static getDerivedStateFromError(e) {
return {
  didCatch: !0,
  error: e
};
  }
  resetErrorBoundary() {
let {
  error: e
} = this.state;
if (null !== e) {
  for (var t, n, r = arguments.length, i = Array(r), a = 0; a < r; a++)
    i[a] = arguments[a];
  null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
    args: i,
    reason: 'imperative-api'
  }), this.setState(o);
}
  }
  componentDidCatch(e, t) {
var n, r;
null === (n = (r = this.props).onError) || void 0 === n || n.call(r, e, t);
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
    return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
  }(e.resetKeys, r)) {
  var i, a;
  null === (i = (a = this.props).onReset) || void 0 === i || i.call(a, {
    next: r,
    prev: e.resetKeys,
    reason: 'keys'
  }), this.setState(o);
}
  }
  render() {
let {
  children: e,
  fallbackRender: t,
  FallbackComponent: n,
  fallback: o
} = this.props, {
  didCatch: a,
  error: s
} = this.state, c = e;
if (a) {
  let e = {
    error: s,
    resetErrorBoundary: this.resetErrorBoundary
  };
  if ((0, r.isValidElement)(o))
    c = o;
  else if ('function' == typeof t)
    c = t(e);
  else if (n)
    c = (0, r.createElement)(n, e);
  else
    throw s;
}
return (0, r.createElement)(i.Provider, {
  value: {
    didCatch: a,
    error: s,
    resetErrorBoundary: this.resetErrorBoundary
  }
}, c);
  }
}