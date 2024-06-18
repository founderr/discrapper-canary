"use strict";
n.d(t, {
  KT: function() {
    return f
  },
  ZP: function() {
    return h
  },
  nX: function() {
    return E
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(25441),
  r = n(536895),
  i = n(260866);
let o = "data-grid-item-id",
  c = "data-grid-section",
  d = "data-grid-prev-section-boundary",
  u = new Set([r.R8.UP, r.R8.DOWN, r.R8.LEFT, r.R8.RIGHT]);

function m(e) {
  let {
    section: t,
    column: n,
    row: s
  } = e, l = "[".concat(c, '="').concat(t, '"]'), a = "[".concat("aria-colindex", '="').concat(n, '"]'), r = "[".concat("aria-rowindex", '="').concat(s, '"]');
  return "".concat(l).concat(a).concat(r)
}

function h(e) {
  let {
    id: t,
    isEnabled: n,
    setFocus: s
  } = e, c = l.useRef(null), h = l.useRef(!1), g = l.useRef(null), x = l.useRef(n);
  l.useLayoutEffect(() => {
    x.current = n
  }, [n]);
  let _ = l.useCallback(e => {
      var t;
      return (null !== (t = g.current) && void 0 !== t ? t : document).querySelector(e)
    }, []),
    E = l.useCallback((e, t) => {
      x.current && s(e, t)
    }, [s]),
    f = l.useCallback(e => {
      if (x.current) {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus()
      }
    }, []),
    C = l.useCallback(e => {
      c.current = e;
      let n = (0, i.P1)(e, o),
        s = (0, i.x3)(e);
      E(n, s), (0, a.h)(t, s, !0)
    }, [t, E]),
    [T, N] = l.useState(!1),
    I = l.useRef(T);
  l.useLayoutEffect(() => {
    I.current = T
  }, [T]), l.useLayoutEffect(() => {
    let e = g.current;
    if (null != e) return e.addEventListener("focusin", n), e.addEventListener("focusout", s), e.addEventListener("focus", l), e.addEventListener("scroll", a, {
      passive: !0
    }), () => {
      e.removeEventListener("focusin", n), e.removeEventListener("focusout", s), e.removeEventListener("focus", l), e.removeEventListener("scroll", a)
    };

    function n() {
      N(!0)
    }

    function s(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) N(!1), requestAnimationFrame(() => {
        let e = c.current;
        null !== e && null == _((0, i.P1)(e, o)) && f((0, i.P1)(t, "data-grid-id"))
      })
    }

    function l() {
      let e = g.current;
      if (I.current || null == e) return
    }

    function a() {
      h.current = !0
    }
  }, [t, E, f, C, _]);
  let S = l.useCallback(e => {
      var t, n;
      if (!x.current) return;
      let s = c.current,
        l = g.current;
      if (null == s) return;
      let a = (0, i.P1)(s, o),
        h = null == l ? void 0 : l.querySelector(a);
      if (null == h) return;
      let E = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
        f = parseInt(h.getAttribute("aria-rowindex")),
        T = parseInt(h.getAttribute("aria-colindex"));
      switch (u.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
        case r.R8.RIGHT: {
          let e = _(m({
            section: E,
            row: f,
            column: T + 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && C(t)
          }
          return
        }
        case r.R8.LEFT: {
          let e = _(m({
            section: E,
            row: f,
            column: T - 1
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && C(t)
          }
          return
        }
        case r.R8.DOWN: {
          let e = _(m({
            section: E,
            row: f + 1,
            column: T
          }));
          if (null == e && (e = _(m({
              section: E + 1,
              row: 0,
              column: T
            }))), null != e) {
            let t = e.getAttribute(o);
            null != t && C(t)
          }
          return
        }
        case r.R8.UP: {
          let e;
          if (0 === f) {
            let t = parseInt(h.getAttribute(d));
            null == (e = _(m({
              section: E - 1,
              row: t,
              column: T
            }))) && (e = _(m({
              section: E - 1,
              row: t - 1,
              column: T
            })))
          } else e = _(m({
            section: E,
            row: f - 1,
            column: T
          }));
          if (null != e) {
            let t = e.getAttribute(o);
            null != t && C(t)
          }
          return
        }
        case r.R8.SPACE:
        case r.R8.ENTER: {
          if (e.repeat) return;
          let t = c.current;
          if (null != t) {
            let s = _((0, i.P1)(t, o)),
              l = null !== (n = null == s ? void 0 : s.ownerDocument) && void 0 !== n ? n : document,
              a = s === l.activeElement;
            null != s && a && (e.preventDefault(), e.stopPropagation(), null == s || s.click())
          }
        }
      }
    }, [_, C]),
    p = l.useCallback(e => {
      let n = null != e ? (0, i.jb)(t, e) : null;
      c.current = n
    }, [t]);
  return l.useMemo(() => ({
    id: t,
    containerProps: {
      onKeyDown: S,
      ref: g
    },
    setFocus: p
  }), [t, S, p])
}
let g = {
    id: "NO_LIST",
    onKeyDown() {},
    ref: l.createRef()
  },
  x = l.createContext({
    id: "NO_LIST",
    setFocus() {}
  }),
  _ = l.createContext(g);

function E(e) {
  let {
    id: t,
    section: n,
    row: s,
    column: r,
    boundaries: u
  } = e, [m, h] = l.useState(0 === s && 0 === r ? 0 : -1), {
    id: g,
    setFocus: _
  } = l.useContext(x), E = l.useCallback(() => _(t), [t, _]);
  return l.useLayoutEffect(() => (0, a.N)(g, e => {
    h(e === t ? 0 : -1)
  }), [t, g]), {
    [o]: (0, i.jb)(g, t),
    [c]: n,
    [d]: u[n],
    role: "gridcell",
    "aria-rowindex": s,
    "aria-colindex": r,
    tabIndex: m,
    onFocus: E
  }
}

function f(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: a,
    setFocus: r,
    containerProps: {
      onKeyDown: i,
      ref: o
    }
  } = n, c = l.useMemo(() => ({
    id: a,
    setFocus: r
  }), [a, r]), d = l.useMemo(() => ({
    onKeyDown: i,
    ref: o,
    id: a
  }), [i, o, a]);
  return (0, s.jsx)(_.Provider, {
    value: d,
    children: (0, s.jsx)(x.Provider, {
      value: c,
      children: t
    })
  })
}