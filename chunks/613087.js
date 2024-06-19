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
var s = n(735250),
  a = n(470079),
  i = n(699581),
  l = n(920906),
  r = n(130653),
  o = n(743294);
let c = a.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: a.createRef(),
    collapsedContentRef: a.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: null,
    isExpansionAnimationComplete: !1
  }),
  d = a.forwardRef(function(e, t) {
    let {
      children: n,
      id: o,
      inState: d,
      isTextTransition: u = !1
    } = e, {
      isExpansionAnimationComplete: E,
      recalculateAnimationPositions: _,
      registerComponent: h,
      unregisterComponent: m,
      expansionSpring: T
    } = a.useContext(c), C = a.useRef(null), g = a.useRef(null), p = a.useContext(r.T);
    a.useEffect(() => {
      _()
    }, [_]), a.useEffect(() => {
      let e = C.current;
      return null != e && h(e, o, d), () => {
        null != e && m(o, d)
      }
    }, [o, d, h, m]);
    let N = document.getElementById(p ? "quest-bar-v2-preview-" + o : "quest-bar-v2-" + o),
      I = null;
    return null == N ? I = null : u && null != T ? I = (0, s.jsxs)(s.Fragment, {
      children: ["collapsed" === d && (0, i.createPortal)((0, s.jsx)(l.animated.div, {
        style: {
          position: "absolute",
          opacity: T.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: n(g)
      }), N), "expanded" === d && (0, i.createPortal)((0, s.jsx)(l.animated.div, {
        style: {
          position: "absolute",
          opacity: T.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: n(g)
      }), N)]
    }) : "collapsed" === d && (I = (0, i.createPortal)(n(g), N)), (0, s.jsxs)("div", {
      style: {
        opacity: null == N || E ? 1 : 0
      },
      ref: t,
      children: [n(C), !E && I]
    })
  }),
  u = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: i,
      expansionSpring: l,
      isExpansionAnimationComplete: r
    } = e, [d, u] = a.useState({}), [E, _] = a.useState([]), h = a.useCallback((e, t, n) => {
      u(s => {
        var a;
        let i = null !== (a = s[t]) && void 0 !== a ? a : {
          expanded: null,
          collapsed: null
        };
        return {
          ...s,
          [t]: {
            ...i,
            [n]: e
          }
        }
      })
    }, []), m = a.useCallback((e, t) => {
      u(n => {
        var s;
        let a = null !== (s = n[e]) && void 0 !== s ? s : {
          expanded: null,
          collapsed: null
        };
        return a[t] = null, {
          ...n,
          [e]: a
        }
      })
    }, []), T = a.useCallback(() => {
      let e = [];
      for (let t in d) {
        if (null == d[t] || null == n.current || null == i.current) continue;
        let s = d[t].collapsed,
          a = d[t].expanded;
        if (null == s || null == a) continue;
        let l = a.getBoundingClientRect().top - n.current.getBoundingClientRect().top + o.Li,
          r = s.getBoundingClientRect().top - i.current.getBoundingClientRect().top,
          c = a.getBoundingClientRect().left - n.current.getBoundingClientRect().left + o.Li,
          u = s.getBoundingClientRect().left - i.current.getBoundingClientRect().left,
          E = -a.getBoundingClientRect().right + n.current.getBoundingClientRect().right + o.Li,
          _ = -s.getBoundingClientRect().right + i.current.getBoundingClientRect().right;
        e.push({
          id: t,
          collapsedLeft: u,
          expandedLeft: c,
          collapsedRight: _,
          expandedRight: E,
          collapsedTop: r,
          expandedTop: l
        })
      }
      _(e)
    }, [d, n, i, _]);
    return (0, s.jsx)(c.Provider, {
      value: {
        isExpansionAnimationComplete: r,
        registerComponent: h,
        unregisterComponent: m,
        animatedComponents: d,
        expandedContentRef: n,
        collapsedContentRef: i,
        recalculateAnimationPositions: T,
        animatedComponentProps: E,
        expansionSpring: l
      },
      children: t
    })
  }