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
  } = e, [u, d] = a.useState(!1), [c, f] = a.useState(new Set), [E, _] = a.useState(!1), T = a.useRef(!1);
  a.useEffect(() => {
    let e = new Set;
    for (let t of c) !o(t) && e.add(t);
    e.size !== c.size && f(e)
  }, [c]);
  let m = a.useCallback(e => {
      var t, s, a;
      let {
        assetNode: r,
        nodeId: o,
        errorPrefix: u,
        errorMessage: c
      } = e;
      i.default.captureException(Error("".concat(u, ": ").concat(null != c ? "".concat(c, ", ") : "").concat((t = r, (0, l.isElement)(t, HTMLImageElement) ? t.getAttribute("src") : (0, l.isElement)(t, HTMLVideoElement) ? null !== (a = null === (s = t.querySelectorAll("source")[0]) || void 0 === s ? void 0 : s.getAttribute("src")) && void 0 !== a ? a : "video" : t.tagName), ", ").concat(o)), {
        tags: {
          source: n
        }
      }), d(!0)
    }, [n]),
    I = a.useCallback(e => {
      f(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    p = a.useCallback((e, t) => {
      var n;
      if (_(!0), o(e)) return;
      f(t => {
        let n = new Set(t);
        return n.add(e), n
      });
      let s = (n = e, (0, l.isElement)(n, HTMLImageElement) ? "load" : (0, l.isElement)(n, HTMLVideoElement) ? "canplaythrough" : "load");
      e.addEventListener(s, function t() {
        I(e), e.removeEventListener(s, t)
      });
      e.addEventListener("error", function n(s) {
        I(e), m({
          assetNode: e,
          nodeId: t,
          errorPrefix: "Error loading asset",
          errorMessage: "message" in s ? s.message : null
        }), e.removeEventListener("error", n)
      })
    }, [m, I]),
    h = a.useMemo(() => c.size > 0 || !E, [E, c]);
  a.useEffect(() => {
    !h && (T.current = !0)
  }, [h]);
  let N = a.useMemo(() => ({
    registerAsset: p,
    unregisterAsset: I,
    hasError: u,
    isLoading: h && !T.current
  }), [p, I, u, h]);
  return (0, s.jsx)(r.Provider, {
    value: N,
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