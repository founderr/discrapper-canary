"use strict";
s.r(t), s.d(t, {
  QuestBarV2AnimationComponent: function() {
    return d
  },
  QuestBarV2AnimationContext: function() {
    return u
  },
  QuestBarV2AnimationContextProvider: function() {
    return c
  }
}), s("47120"), s("653041");
var n = s("735250"),
  a = s("470079"),
  l = s("699581"),
  i = s("920906"),
  r = s("130653"),
  o = s("743294");
let u = a.createContext({
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
      children: s,
      id: o,
      inState: d,
      isTextTransition: c = !1
    } = e, {
      isExpansionAnimationComplete: E,
      recalculateAnimationPositions: f,
      registerComponent: _,
      unregisterComponent: h,
      expansionSpring: m
    } = a.useContext(u), C = a.useRef(null), T = a.useRef(null), g = a.useContext(r.QuestBarPreviewContext);
    a.useEffect(() => {
      f()
    }, [f]), a.useEffect(() => {
      let e = C.current;
      return null != e && _(e, o, d), () => {
        null != e && h(o, d)
      }
    }, [o, d, _, h]);
    let p = document.getElementById(g ? "quest-bar-v2-preview-" + o : "quest-bar-v2-" + o),
      A = null;
    return null == p ? A = null : c && null != m ? A = (0, n.jsxs)(n.Fragment, {
      children: ["collapsed" === d && (0, l.createPortal)((0, n.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: m.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: s(T)
      }), p), "expanded" === d && (0, l.createPortal)((0, n.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: m.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: s(T)
      }), p)]
    }) : "collapsed" === d && (A = (0, l.createPortal)(s(T), p)), (0, n.jsxs)("div", {
      style: {
        opacity: null == p || E ? 1 : 0
      },
      ref: t,
      children: [s(C), !E && A]
    })
  }),
  c = e => {
    let {
      children: t,
      expandedContentRef: s,
      collapsedContentRef: l,
      expansionSpring: i,
      isExpansionAnimationComplete: r
    } = e, [d, c] = a.useState({}), [E, f] = a.useState([]), _ = a.useCallback((e, t, s) => {
      c(n => {
        var a;
        let l = null !== (a = n[t]) && void 0 !== a ? a : {
          expanded: null,
          collapsed: null
        };
        return {
          ...n,
          [t]: {
            ...l,
            [s]: e
          }
        }
      })
    }, []), h = a.useCallback((e, t) => {
      c(s => {
        var n;
        let a = null !== (n = s[e]) && void 0 !== n ? n : {
          expanded: null,
          collapsed: null
        };
        return a[t] = null, {
          ...s,
          [e]: a
        }
      })
    }, []), m = a.useCallback(() => {
      let e = [];
      for (let t in d) {
        if (null == d[t] || null == s.current || null == l.current) continue;
        let n = d[t].collapsed,
          a = d[t].expanded;
        if (null == n || null == a) continue;
        let i = a.getBoundingClientRect().top - s.current.getBoundingClientRect().top + o.QUEST_BAR_V2_MARGIN,
          r = n.getBoundingClientRect().top - l.current.getBoundingClientRect().top,
          u = a.getBoundingClientRect().left - s.current.getBoundingClientRect().left + o.QUEST_BAR_V2_MARGIN,
          c = n.getBoundingClientRect().left - l.current.getBoundingClientRect().left,
          E = -a.getBoundingClientRect().right + s.current.getBoundingClientRect().right + o.QUEST_BAR_V2_MARGIN,
          f = -n.getBoundingClientRect().right + l.current.getBoundingClientRect().right;
        e.push({
          id: t,
          collapsedLeft: c,
          expandedLeft: u,
          collapsedRight: f,
          expandedRight: E,
          collapsedTop: r,
          expandedTop: i
        })
      }
      f(e)
    }, [d, s, l, f]);
    return (0, n.jsx)(u.Provider, {
      value: {
        isExpansionAnimationComplete: r,
        registerComponent: _,
        unregisterComponent: h,
        animatedComponents: d,
        expandedContentRef: s,
        collapsedContentRef: l,
        recalculateAnimationPositions: m,
        animatedComponentProps: E,
        expansionSpring: i
      },
      children: t
    })
  }