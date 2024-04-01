"use strict";
n.r(t), n.d(t, {
  QuestsAsset: function() {
    return d
  },
  QuestsAssetContextProvider: function() {
    return u
  },
  useQuestsAssetsLoadState: function() {
    return c
  }
}), n("411104"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("374470"),
  i = n("960048");
let r = a.createContext({
  registerAsset: () => {},
  unregisterAsset: () => {},
  hasError: !1,
  isLoading: !0
});

function o(e) {
  return (0, l.isElement)(e, HTMLImageElement) ? e.complete : !(0, l.isElement)(e, HTMLVideoElement) || e.readyState >= 2
}

function u(e) {
  let {
    children: t,
    sentrySource: n
  } = e, [u, d] = a.useState(!1), [c, E] = a.useState(new Set), [f, _] = a.useState(!1), T = a.useRef(!1);
  a.useEffect(() => {
    let e = new Set;
    for (let t of c) !o(t) && e.add(t);
    e.size !== c.size && E(e)
  }, [c]);
  let I = a.useCallback((e, t, s) => {
      var a, r, o;
      i.default.captureException(Error("".concat(t, ": ").concat((a = e, (0, l.isElement)(a, HTMLImageElement) ? a.getAttribute("src") : (0, l.isElement)(a, HTMLVideoElement) ? null !== (o = null === (r = a.querySelectorAll("source")[0]) || void 0 === r ? void 0 : r.getAttribute("src")) && void 0 !== o ? o : "video" : a.tagName), ", ").concat(s)), {
        tags: {
          source: n
        }
      }), d(!0)
    }, [n]),
    m = a.useCallback(e => {
      E(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    N = a.useCallback((e, t) => {
      var n;
      if (_(!0), o(e)) return;
      E(t => {
        let n = new Set(t);
        return n.add(e), n
      });
      let s = (n = e, (0, l.isElement)(n, HTMLImageElement) ? "load" : (0, l.isElement)(n, HTMLVideoElement) ? "canplaythrough" : "load");
      e.addEventListener(s, function t() {
        m(e), e.removeEventListener(s, t)
      });
      e.addEventListener("error", function n() {
        m(e), I(e, "Error loading asset", t), e.removeEventListener("error", n)
      })
    }, [I, m]),
    p = a.useMemo(() => c.size > 0 || !f, [f, c]);
  a.useEffect(() => {
    !p && (T.current = !0)
  }, [p]);
  let S = a.useMemo(() => ({
    registerAsset: N,
    unregisterAsset: m,
    hasError: u,
    isLoading: p && !T.current
  }), [N, m, u, p]);
  return (0, s.jsx)(r.Provider, {
    value: S,
    children: t
  })
}

function d(e) {
  let {
    id: t,
    children: n
  } = e, {
    registerAsset: s,
    unregisterAsset: l
  } = a.useContext(r), i = a.useRef(null);
  return a.useEffect(() => {
    let e = i.current;
    return null != e && s(e, t), () => {
      null != e && l(e)
    }
  }, [s, l, t]), n(i)
}

function c() {
  let {
    hasError: e,
    isLoading: t
  } = a.useContext(r);
  return {
    hasError: e,
    isLoading: t
  }
}