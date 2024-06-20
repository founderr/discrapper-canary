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
  r = n(699581),
  a = n(920906),
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
      N = null;
    return null == f ? N = null : d && null != C ? N = (0, s.jsxs)(s.Fragment, {
      children: ["collapsed" === u && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: C.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: n(S)
      }), f), "expanded" === u && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: C.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: n(S)
      }), f)]
    }) : "collapsed" === u && (N = (0, r.createPortal)(n(S), f)), (0, s.jsxs)("div", {
      style: {
        opacity: null == f || p ? 1 : 0
      },
      ref: t,
      children: [n(h), !p && N]
    })
  }),
  d = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: r,
      expansionSpring: a,
      isExpansionAnimationComplete: l
    } = e, [u, d] = o.useState({}), [p, x] = o.useState([]), m = o.useCallback((e, t, n) => {
      d(s => {
        var o;
        let r = null !== (o = s[t]) && void 0 !== o ? o : {
          expanded: null,
          collapsed: null
        };
        return {
          ...s,
          [t]: {
            ...r,
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
        if (null == u[t] || null == n.current || null == r.current) continue;
        let s = u[t].collapsed,
          o = u[t].expanded;
        if (null == s || null == o) continue;
        let a = o.getBoundingClientRect().top - n.current.getBoundingClientRect().top + i.Li,
          l = s.getBoundingClientRect().top - r.current.getBoundingClientRect().top,
          c = o.getBoundingClientRect().left - n.current.getBoundingClientRect().left + i.Li,
          d = s.getBoundingClientRect().left - r.current.getBoundingClientRect().left,
          p = -o.getBoundingClientRect().right + n.current.getBoundingClientRect().right + i.Li,
          x = -s.getBoundingClientRect().right + r.current.getBoundingClientRect().right;
        e.push({
          id: t,
          collapsedLeft: d,
          expandedLeft: c,
          collapsedRight: x,
          expandedRight: p,
          collapsedTop: l,
          expandedTop: a
        })
      }
      x(e)
    }, [u, n, r, x]);
    return (0, s.jsx)(c.Provider, {
      value: {
        isExpansionAnimationComplete: l,
        registerComponent: m,
        unregisterComponent: g,
        animatedComponents: u,
        expandedContentRef: n,
        collapsedContentRef: r,
        recalculateAnimationPositions: C,
        animatedComponentProps: p,
        expansionSpring: a
      },
      children: t
    })
  }