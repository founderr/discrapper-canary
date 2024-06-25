n.d(t, {
  B$: function() {
    return c
  },
  l7: function() {
    return d
  },
  p: function() {
    return u
  }
}), n(47120), n(653041);
var o = n(735250),
  s = n(470079),
  r = n(699581),
  a = n(920906),
  i = n(130653),
  l = n(743294);
let c = s.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: s.createRef(),
    collapsedContentRef: s.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: null,
    isExpansionAnimationComplete: !1
  }),
  d = s.forwardRef(function(e, t) {
    let {
      children: n,
      id: l,
      inState: d,
      isTextTransition: u = !1
    } = e, {
      isExpansionAnimationComplete: p,
      recalculateAnimationPositions: m,
      registerComponent: x,
      unregisterComponent: g,
      expansionSpring: f
    } = s.useContext(c), C = s.useRef(null), h = s.useRef(null), _ = s.useContext(i.T);
    s.useEffect(() => {
      m()
    }, [m]), s.useEffect(() => {
      let e = C.current;
      return null != e && x(e, l, d), () => {
        null != e && g(l, d)
      }
    }, [l, d, x, g]);
    let E = document.getElementById(_ ? "quest-bar-v2-preview-" + l : "quest-bar-v2-" + l),
      S = null;
    return null == E ? S = null : u && null != f ? S = (0, o.jsxs)(o.Fragment, {
      children: ["collapsed" === d && (0, r.createPortal)((0, o.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: f.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: n(h)
      }), E), "expanded" === d && (0, r.createPortal)((0, o.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: f.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: n(h)
      }), E)]
    }) : "collapsed" === d && (S = (0, r.createPortal)(n(h), E)), (0, o.jsxs)("div", {
      style: {
        opacity: null == E || p ? 1 : 0
      },
      ref: t,
      children: [n(C), !p && S]
    })
  }),
  u = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: r,
      expansionSpring: a,
      isExpansionAnimationComplete: i
    } = e, [d, u] = s.useState({}), [p, m] = s.useState([]), x = s.useCallback((e, t, n) => {
      u(o => {
        var s;
        let r = null !== (s = o[t]) && void 0 !== s ? s : {
          expanded: null,
          collapsed: null
        };
        return {
          ...o,
          [t]: {
            ...r,
            [n]: e
          }
        }
      })
    }, []), g = s.useCallback((e, t) => {
      u(n => {
        var o;
        let s = null !== (o = n[e]) && void 0 !== o ? o : {
          expanded: null,
          collapsed: null
        };
        return s[t] = null, {
          ...n,
          [e]: s
        }
      })
    }, []), f = s.useCallback(() => {
      let e = [];
      for (let t in d) {
        if (null == d[t] || null == n.current || null == r.current) continue;
        let o = d[t].collapsed,
          s = d[t].expanded;
        if (null == o || null == s) continue;
        let a = s.getBoundingClientRect().top - n.current.getBoundingClientRect().top + l.Li,
          i = o.getBoundingClientRect().top - r.current.getBoundingClientRect().top,
          c = s.getBoundingClientRect().left - n.current.getBoundingClientRect().left + l.Li,
          u = o.getBoundingClientRect().left - r.current.getBoundingClientRect().left,
          p = -s.getBoundingClientRect().right + n.current.getBoundingClientRect().right + l.Li,
          m = -o.getBoundingClientRect().right + r.current.getBoundingClientRect().right;
        e.push({
          id: t,
          collapsedLeft: u,
          expandedLeft: c,
          collapsedRight: m,
          expandedRight: p,
          collapsedTop: i,
          expandedTop: a
        })
      }
      m(e)
    }, [d, n, r, m]);
    return (0, o.jsx)(c.Provider, {
      value: {
        isExpansionAnimationComplete: i,
        registerComponent: x,
        unregisterComponent: g,
        animatedComponents: d,
        expandedContentRef: n,
        collapsedContentRef: r,
        recalculateAnimationPositions: f,
        animatedComponentProps: p,
        expansionSpring: a
      },
      children: t
    })
  }