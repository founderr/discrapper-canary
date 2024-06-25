n.d(t, {
  B$: function() {
    return c
  },
  l7: function() {
    return u
  },
  p: function() {
    return d
  }
}), n(47120), n(653041);
var s = n(735250),
  o = n(470079),
  a = n(699581),
  r = n(920906),
  l = n(130653),
  i = n(743294);
let c = o.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: o.createRef(),
    collapsedContentRef: o.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: null,
    isExpansionAnimationComplete: !1
  }),
  u = o.forwardRef(function(e, t) {
    let {
      children: n,
      id: i,
      inState: u,
      isTextTransition: d = !1
    } = e, {
      isExpansionAnimationComplete: p,
      recalculateAnimationPositions: x,
      registerComponent: m,
      unregisterComponent: g,
      expansionSpring: C
    } = o.useContext(c), h = o.useRef(null), S = o.useRef(null), E = o.useContext(l.T);
    o.useEffect(() => {
      x()
    }, [x]), o.useEffect(() => {
      let e = h.current;
      return null != e && m(e, i, u), () => {
        null != e && g(i, u)
      }
    }, [i, u, m, g]);
    let f = document.getElementById(E ? "quest-bar-v2-preview-" + i : "quest-bar-v2-" + i),
      v = null;
    return null == f ? v = null : d && null != C ? v = (0, s.jsxs)(s.Fragment, {
      children: ["collapsed" === u && (0, a.createPortal)((0, s.jsx)(r.animated.div, {
        style: {
          position: "absolute",
          opacity: C.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: n(S)
      }), f), "expanded" === u && (0, a.createPortal)((0, s.jsx)(r.animated.div, {
        style: {
          position: "absolute",
          opacity: C.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: n(S)
      }), f)]
    }) : "collapsed" === u && (v = (0, a.createPortal)(n(S), f)), (0, s.jsxs)("div", {
      style: {
        opacity: null == f || p ? 1 : 0
      },
      ref: t,
      children: [n(h), !p && v]
    })
  }),
  d = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: a,
      expansionSpring: r,
      isExpansionAnimationComplete: l
    } = e, [u, d] = o.useState({}), [p, x] = o.useState([]), m = o.useCallback((e, t, n) => {
      d(s => {
        var o;
        let a = null !== (o = s[t]) && void 0 !== o ? o : {
          expanded: null,
          collapsed: null
        };
        return {
          ...s,
          [t]: {
            ...a,
            [n]: e
          }
        }
      })
    }, []), g = o.useCallback((e, t) => {
      d(n => {
        var s;
        let o = null !== (s = n[e]) && void 0 !== s ? s : {
          expanded: null,
          collapsed: null
        };
        return o[t] = null, {
          ...n,
          [e]: o
        }
      })
    }, []), C = o.useCallback(() => {
      let e = [];
      for (let t in u) {
        if (null == u[t] || null == n.current || null == a.current) continue;
        let s = u[t].collapsed,
          o = u[t].expanded;
        if (null == s || null == o) continue;
        let r = o.getBoundingClientRect().top - n.current.getBoundingClientRect().top + i.Li,
          l = s.getBoundingClientRect().top - a.current.getBoundingClientRect().top,
          c = o.getBoundingClientRect().left - n.current.getBoundingClientRect().left + i.Li,
          d = s.getBoundingClientRect().left - a.current.getBoundingClientRect().left,
          p = -o.getBoundingClientRect().right + n.current.getBoundingClientRect().right + i.Li,
          x = -s.getBoundingClientRect().right + a.current.getBoundingClientRect().right;
        e.push({
          id: t,
          collapsedLeft: d,
          expandedLeft: c,
          collapsedRight: x,
          expandedRight: p,
          collapsedTop: l,
          expandedTop: r
        })
      }
      x(e)
    }, [u, n, a, x]);
    return (0, s.jsx)(c.Provider, {
      value: {
        isExpansionAnimationComplete: l,
        registerComponent: m,
        unregisterComponent: g,
        animatedComponents: u,
        expandedContentRef: n,
        collapsedContentRef: a,
        recalculateAnimationPositions: C,
        animatedComponentProps: p,
        expansionSpring: r
      },
      children: t
    })
  }