"use strict";
n.r(t), n.d(t, {
  useLocale: function() {
    return b
  },
  useLocalizedStringFormatter: function() {
    return m
  },
  useDateFormatter: function() {
    return y
  },
  useNumberFormatter: function() {
    return w
  },
  useCollator: function() {
    return k
  },
  useFilter: function() {
    return _
  }
}), n("222007");
var r = n("884691"),
  i = n("46397"),
  o = n("647572"),
  s = n("336468"),
  a = n("290895"),
  c = n("676231");
let u = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
  d = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

function l() {
  let e = "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e])
  } catch (t) {
    e = "en-US"
  }
  return {
    locale: e,
    direction: ! function(e) {
      if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize().script;
        return u.has(t)
      }
      let t = e.split("-")[0];
      return d.has(t)
    }(e) ? "ltr" : "rtl"
  }
}
let f = l(),
  p = new Set;

function h() {
  for (let e of (f = l(), p)) e(f)
}
let g = r.createContext(null);

function b() {
  let e = function() {
    let e = (0, i.useIsSSR)(),
      [t, n] = (0, r.useState)(f);
    return ((0, r.useEffect)(() => (0 === p.size && window.addEventListener("languagechange", h), p.add(n), () => {
      p.delete(n), 0 === p.size && window.removeEventListener("languagechange", h)
    }), []), e) ? {
      locale: "en-US",
      direction: "ltr"
    } : t
  }();
  return (0, r.useContext)(g) || e
}
let v = new WeakMap;

function m(e) {
  let {
    locale: t
  } = b(), n = (0, r.useMemo)(() => {
    var t;
    let n;
    return t = e, !(n = v.get(t)) && (n = new o.LocalizedStringDictionary(t), v.set(t, n)), n
  }, [e]);
  return (0, r.useMemo)(() => new o.LocalizedStringFormatter(t, n), [t, n])
}

function y(e) {
  e = (0, a.useDeepMemo)(e, x);
  let {
    locale: t
  } = b();
  return (0, r.useMemo)(() => new s.DateFormatter(t, e), [t, e])
}

function x(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (t[r] !== e[r]) return !1;
  return !0
}

function w() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    {
      locale: t
    } = b();
  return (0, r.useMemo)(() => new c.NumberFormatter(t, e), [t, e])
}
let S = new Map;

function k(e) {
  let {
    locale: t
  } = b(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  if (S.has(n)) return S.get(n);
  let r = new Intl.Collator(t, e);
  return S.set(n, r), r
}

function _(e) {
  let t = k({
      usage: "search",
      ...e
    }),
    n = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(0, n.length), n)), [t]),
    i = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(-n.length), n)), [t]),
    o = (0, r.useCallback)((e, n) => {
      if (0 === n.length) return !0;
      e = e.normalize("NFC"), n = n.normalize("NFC");
      let r = 0,
        i = n.length;
      for (; r + i <= e.length; r++) {
        let o = e.slice(r, r + i);
        if (0 === t.compare(n, o)) return !0
      }
      return !1
    }, [t]);
  return (0, r.useMemo)(() => ({
    startsWith: n,
    endsWith: i,
    contains: o
  }), [n, i, o])
}