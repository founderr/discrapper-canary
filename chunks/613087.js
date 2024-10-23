n.d(t, {
    B$: function () {
        return c;
    },
    l7: function () {
        return d;
    },
    p: function () {
        return u;
    }
}),
    n(47120),
    n(653041);
var o = n(200651),
    s = n(192379),
    r = n(995295),
    a = n(100621),
    l = n(393238),
    i = n(743294);
let c = s.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: s.createRef(),
        collapsedContentRef: s.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: null,
        mountPoints: new Map()
    }),
    d = s.forwardRef(function (e, t) {
        var n;
        let { children: i, id: d, inState: u, isTextTransition: p = !1 } = e,
            { recalculateAnimationPositions: m, registerComponent: x, unregisterComponent: C, expansionSpring: g, mountPoints: _ } = s.useContext(c),
            f = s.useRef(null),
            h = s.useRef(null),
            E = s.useRef();
        s.useEffect(() => {
            m();
        }, [m]),
            s.useLayoutEffect(() => {
                let e = f.current;
                return (
                    null != e && x(e, d, u),
                    () => {
                        null != e && C(d, u);
                    }
                );
            }, [d, u, x, C]);
        let S = s.useCallback(
            (e) => {
                let { height: t } = e;
                E.current !== t && (m(), (E.current = t));
            },
            [m]
        );
        (0, l.P)(f, S);
        let T = null === (n = _.get(d)) || void 0 === n ? void 0 : n.current,
            v = null;
        return (
            null == T
                ? (v = null)
                : p && null != g
                  ? (v = (0, o.jsxs)(o.Fragment, {
                        children: [
                            'collapsed' === u &&
                                (0, r.createPortal)(
                                    (0, o.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            })
                                        },
                                        children: i(h)
                                    }),
                                    T
                                ),
                            'expanded' === u &&
                                (0, r.createPortal)(
                                    (0, o.jsx)(a.animated.div, {
                                        style: {
                                            position: 'absolute',
                                            opacity: g.to({
                                                range: [0, 1],
                                                output: [0, 1]
                                            })
                                        },
                                        children: i(h)
                                    }),
                                    T
                                )
                        ]
                    }))
                  : 'collapsed' === u && (v = (0, r.createPortal)(i(h), T)),
            (0, o.jsxs)('div', {
                style: { opacity: (null == v && 'collapsed' === u) || null == T ? 1 : 0 },
                ref: t,
                children: [i(f), v]
            })
        );
    }),
    u = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: r, expansionSpring: a } = e,
            [l, d] = s.useState({}),
            [u, p] = s.useState([]),
            [m, x] = s.useState(() => new Map()),
            C = s.useCallback((e, t, n) => {
                d((o) => {
                    var s;
                    let r =
                        null !== (s = o[t]) && void 0 !== s
                            ? s
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return {
                        ...o,
                        [t]: {
                            ...r,
                            [n]: e
                        }
                    };
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            g = s.useCallback((e, t) => {
                let n = !1;
                d((o) => {
                    var s;
                    let r =
                        null !== (s = o[e]) && void 0 !== s
                            ? s
                            : {
                                  expanded: null,
                                  collapsed: null
                              };
                    return (
                        (r[t] = null),
                        (n = null == r.expanded && null == r.collapsed),
                        {
                            ...o,
                            [e]: r
                        }
                    );
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            _ = s.useCallback(() => {
                let e = [];
                for (let t in l) {
                    if (null == l[t] || null == n.current || null == r.current) continue;
                    let o = l[t].collapsed,
                        s = l[t].expanded;
                    if (null == o || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        c = n.current.getBoundingClientRect(),
                        d = o.getBoundingClientRect(),
                        u = r.current.getBoundingClientRect(),
                        p = a.top - c.top + i.Li,
                        m = d.top - u.top,
                        x = a.left - c.left + i.Li,
                        C = d.left - u.left,
                        g = -a.right + c.right + i.Li,
                        _ = -d.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: C,
                        expandedLeft: x,
                        collapsedRight: _,
                        expandedRight: g,
                        collapsedTop: m,
                        expandedTop: p,
                        width: a.width
                    });
                }
                p(e);
            }, [l, n, r, p]);
        return (0, o.jsx)(c.Provider, {
            value: {
                registerComponent: C,
                unregisterComponent: g,
                animatedComponents: l,
                expandedContentRef: n,
                collapsedContentRef: r,
                recalculateAnimationPositions: _,
                animatedComponentProps: u,
                expansionSpring: a,
                mountPoints: m
            },
            children: t
        });
    };
