"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("714617"),
  a = n.n(s),
  o = n("917351"),
  l = n.n(o);
let u = r.createContext([]);

function c(e) {
  let {
    children: t,
    currentContext: n
  } = e;
  return (0, i.jsx)(u.Provider, {
    value: n,
    children: t
  })
}

function d(e, t) {
  if (0 === t.length) return e;
  let n = l.flatten(t);
  return [...e, ...n]
}

function p() {
  for (var e, t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
  let [o, l] = r.useState(n), p = r.useContext(u), h = r.useMemo(() => d(p, o), [o, p]), f = r.useMemo(() => d(p, o.slice(0, o.length - 1)), [o, p]);
  r.useEffect(() => {
    !a(n, o) && l(n)
  }, [n]);
  let E = r.useCallback(e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)(c, {
      currentContext: h,
      children: t
    })
  }, [h]);
  return {
    AnalyticsLocationProvider: E,
    analyticsLocations: h,
    sourceAnalyticsLocations: f,
    newestAnalyticsLocation: null !== (e = h[h.length - 1]) && void 0 !== e ? e : null
  }
}