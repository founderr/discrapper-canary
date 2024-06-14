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
  d = e => {
    let {
      children: t,
      id: s,
      inState: o,
      isTextTransition: d = !1
    } = e, {
      isExpansionAnimationComplete: c,
      recalculateAnimationPositions: E,
      registerComponent: _,
      unregisterComponent: f,
      expansionSpring: h
    } = a.useContext(u), C = a.useRef(null), m = a.useRef(null), T = a.useContext(r.QuestBarPreviewContext);
    a.useEffect(() => {
      E()
    }, [E]), a.useEffect(() => {
      let e = C.current;
      return null != e && _(e, s, o), () => {
        null != e && f(s, o)
      }
    }, [s, o, _, f]);
    let g = document.getElementById(T ? "quest-bar-v2-preview-" + s : "quest-bar-v2-" + s),
      A = null;
    return null == g ? A = null : d && null != h ? A = (0, n.jsxs)(n.Fragment, {
      children: ["collapsed" === o && (0, l.createPortal)((0, n.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: t(m)
      }), g), "expanded" === o && (0, l.createPortal)((0, n.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: t(m)
      }), g)]
    }) : "collapsed" === o && (A = (0, l.createPortal)(t(m), g)), (0, n.jsxs)("div", {
      style: {
        opacity: null == g || c ? 1 : 0
      },
      children: [t(C), !c && A]
    })
  },
  c = e => {
    let {
      children: t,
      expandedContentRef: s,
      collapsedContentRef: l,
      expansionSpring: i,
      isExpansionAnimationComplete: r
    } = e, [d, c] = a.useState({}), [E, _] = a.useState([]), f = a.useCallback((e, t, s) => {
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
    }, []), C = a.useCallback(() => {
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
          _ = -n.getBoundingClientRect().right + l.current.getBoundingClientRect().right;
        e.push({
          id: t,
          collapsedLeft: c,
          expandedLeft: u,
          collapsedRight: _,
          expandedRight: E,
          collapsedTop: r,
          expandedTop: i
        })
      }
      _(e)
    }, [d, s, l, _]);
    return (0, n.jsx)(u.Provider, {
      value: {
        isExpansionAnimationComplete: r,
        registerComponent: f,
        unregisterComponent: h,
        animatedComponents: d,
        expandedContentRef: s,
        collapsedContentRef: l,
        recalculateAnimationPositions: C,
        animatedComponentProps: E,
        expansionSpring: i
      },
      children: t
    })
  }