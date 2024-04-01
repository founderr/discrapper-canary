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
  l = n("470079"),
  a = n("374470"),
  i = n("960048");
let r = l.createContext({
  registerAsset: () => {},
  unregisterAsset: () => {},
  hasError: !1,
  isLoading: !0
});

function o(e) {
  return (0, a.isElement)(e, HTMLImageElement) ? e.complete : !(0, a.isElement)(e, HTMLVideoElement) || e.readyState >= 2
}

function u(e) {
  let {
    children: t,
    sentrySource: n
  } = e, [u, d] = l.useState(!1), [c, E] = l.useState(new Set), [f, _] = l.useState(!1), T = l.useRef(!1);
  l.useEffect(() => {
    let e = new Set;
    for (let t of c) !o(t) && e.add(t);
    e.size !== c.size && E(e)
  }, [c]);
  let I = l.useCallback((e, t, s) => {
      var l, r, o;
      i.default.captureException(Error("".concat(t, ": ").concat((l = e, (0, a.isElement)(l, HTMLImageElement) ? l.getAttribute("src") : (0, a.isElement)(l, HTMLVideoElement) ? null !== (o = null === (r = l.querySelectorAll("source")[0]) || void 0 === r ? void 0 : r.getAttribute("src")) && void 0 !== o ? o : "video" : l.tagName), ", ").concat(s)), {
        tags: {
          source: n
        }
      }), d(!0)
    }, [n]),
    m = l.useCallback(e => {
      E(t => {
        let n = new Set(t);
        return n.delete(e), n
      })
    }, []),
    N = l.useCallback((e, t) => {
      var n;
      if (_(!0), o(e)) return;
      E(t => {
        let n = new Set(t);
        return n.add(e), n
      });
      let s = (n = e, (0, a.isElement)(n, HTMLImageElement) ? "load" : (0, a.isElement)(n, HTMLVideoElement) ? "canplaythrough" : "load");
      e.addEventListener(s, function t() {
        m(e), e.removeEventListener(s, t)
      });
      e.addEventListener("error", function n() {
        m(e), I(e, "Error loading asset", t), e.removeEventListener("error", n)
      })
    }, [I, m]),
    p = l.useMemo(() => c.size > 0 || !f, [f, c]);
  l.useEffect(() => {
    !p && (T.current = !0)
  }, [p]);
  let S = l.useMemo(() => ({
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
    unregisterAsset: a
  } = l.useContext(r), i = l.useRef(null);
  return l.useEffect(() => {
    let e = i.current;
    return null != e && s(e, t), () => {
      null != e && a(e)
    }
  }, [s, a, t]), n(i)
}

function c() {
  let {
    hasError: e,
    isLoading: t
  } = l.useContext(r);
  return {
    hasError: e,
    isLoading: t
  }
}