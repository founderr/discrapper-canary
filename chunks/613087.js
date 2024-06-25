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
      expansionSpring: h
    } = o.useContext(c), C = o.useRef(null), f = o.useRef(null), E = o.useContext(l.T);
    o.useEffect(() => {
      x()
    }, [x]), o.useEffect(() => {
      let e = C.current;
      return null != e && m(e, i, u), () => {
        null != e && g(i, u)
      }
    }, [i, u, m, g]);
    let S = document.getElementById(E ? "quest-bar-v2-preview-" + i : "quest-bar-v2-" + i),
      v = null;
    return null == S ? v = null : d && null != h ? v = (0, s.jsxs)(s.Fragment, {
      children: ["collapsed" === u && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: n(f)
      }), S), "expanded" === u && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: n(f)
      }), S)]
    }) : "collapsed" === u && (v = (0, r.createPortal)(n(f), S)), (0, s.jsxs)("div", {
      style: {
        opacity: null == S || p ? 1 : 0
      },
      ref: t,
      children: [n(C), !p && v]
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
    }, []), h = o.useCallback(() => {
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
        recalculateAnimationPositions: h,
        animatedComponentProps: p,
        expansionSpring: a
      },
      children: t
    })
  }