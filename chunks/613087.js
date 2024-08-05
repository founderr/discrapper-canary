n.d(t, {
  B$: function() {
return i;
  },
  l7: function() {
return c;
  },
  p: function() {
return d;
  }
}), n(47120), n(653041);
var s = n(735250),
  o = n(470079),
  a = n(699581),
  r = n(338545),
  l = n(743294);
let i = o.createContext({
registerComponent: () => {},
unregisterComponent: () => {},
animatedComponents: {},
expandedContentRef: o.createRef(),
collapsedContentRef: o.createRef(),
recalculateAnimationPositions: () => {},
animatedComponentProps: [],
expansionSpring: null,
mountPoints: new Map()
  }),
  c = o.forwardRef(function(e, t) {
var n;
let {
  children: l,
  id: c,
  inState: d,
  isTextTransition: u = !1
} = e, {
  recalculateAnimationPositions: p,
  registerComponent: m,
  unregisterComponent: x,
  expansionSpring: g,
  mountPoints: f
} = o.useContext(i), C = o.useRef(null), _ = o.useRef(null);
o.useEffect(() => {
  p();
}, [p]), o.useEffect(() => {
  let e = C.current;
  return null != e && m(e, c, d), () => {
    null != e && x(c, d);
  };
}, [
  c,
  d,
  m,
  x
]);
let h = null === (n = f.get(c)) || void 0 === n ? void 0 : n.current,
  E = null;
return null == h ? E = null : u && null != g ? E = (0, s.jsxs)(s.Fragment, {
  children: [
    'collapsed' === d && (0, a.createPortal)((0, s.jsx)(r.animated.div, {
      style: {
        position: 'absolute',
        opacity: g.to({
          range: [
            0,
            1
          ],
          output: [
            1,
            0
          ]
        })
      },
      children: l(_)
    }), h),
    'expanded' === d && (0, a.createPortal)((0, s.jsx)(r.animated.div, {
      style: {
        position: 'absolute',
        opacity: g.to({
          range: [
            0,
            1
          ],
          output: [
            0,
            1
          ]
        })
      },
      children: l(_)
    }), h)
  ]
}) : 'collapsed' === d && (E = (0, a.createPortal)(l(_), h)), (0, s.jsxs)('div', {
  style: {
    opacity: null == E && 'collapsed' === d || null == h ? 1 : 0
  },
  ref: t,
  children: [
    l(C),
    E
  ]
});
  }),
  d = e => {
let {
  children: t,
  expandedContentRef: n,
  collapsedContentRef: a,
  expansionSpring: r
} = e, [c, d] = o.useState({}), [u, p] = o.useState([]), [m, x] = o.useState(() => new Map()), g = o.useCallback((e, t, n) => {
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
    };
  }), x(e => {
    let n = new Map(e);
    return n.set(t, o.createRef()), n;
  });
}, []), f = o.useCallback((e, t) => {
  let n = !1;
  d(s => {
    var o;
    let a = null !== (o = s[e]) && void 0 !== o ? o : {
      expanded: null,
      collapsed: null
    };
    return a[t] = null, n = null == a.expanded && null == a.collapsed, {
      ...s,
      [e]: a
    };
  }), n && x(t => {
    let n = new Map(t);
    return n.delete(e), n;
  });
}, []), C = o.useCallback(() => {
  let e = [];
  for (let t in c) {
    if (null == c[t] || null == n.current || null == a.current)
      continue;
    let s = c[t].collapsed,
      o = c[t].expanded;
    if (null == s || null == o)
      continue;
    let r = o.getBoundingClientRect(),
      i = n.current.getBoundingClientRect(),
      d = s.getBoundingClientRect(),
      u = a.current.getBoundingClientRect(),
      p = r.top - i.top + l.Li,
      m = d.top - u.top,
      x = r.left - i.left + l.Li,
      g = d.left - u.left,
      f = -r.right + i.right + l.Li,
      C = -d.right + u.right;
    e.push({
      id: t,
      collapsedLeft: g,
      expandedLeft: x,
      collapsedRight: C,
      expandedRight: f,
      collapsedTop: m,
      expandedTop: p,
      width: r.width
    });
  }
  p(e);
}, [
  c,
  n,
  a,
  p
]);
return (0, s.jsx)(i.Provider, {
  value: {
    registerComponent: g,
    unregisterComponent: f,
    animatedComponents: c,
    expandedContentRef: n,
    collapsedContentRef: a,
    recalculateAnimationPositions: C,
    animatedComponentProps: u,
    expansionSpring: r,
    mountPoints: m
  },
  children: t
});
  };