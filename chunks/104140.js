n.d(t, {
    a: function () {
        return M;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(96355),
    c = n(47759),
    d = n.n(c),
    f = n(752877),
    _ = n(772848),
    p = n(722770),
    h = n(846519),
    m = n(215569),
    g = n(540059),
    E = n(11868);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let I = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    T = {
        duration: 150,
        friction: 3
    },
    b = {
        friction: 30,
        tension: 900,
        mass: 1
    },
    S = {
        duration: 150,
        friction: 10,
        tension: 100,
        mass: 1
    },
    y = (e, t) => (e ? (t ? 52 : 44) : 48),
    A = (e) => (e ? 20 : 24),
    N = (e) => (e ? 2 : 4),
    C = (e, t) => (e ? (t ? 'M0 26.5C0 15.1986 0 9.54789 2.93063 5.65518C3.6851 4.65301 4.56522 3.75597 5.54847 2.98698C9.36774 0 14.9118 0 26 0C37.0882 0 42.6323 0 46.4515 2.98698C47.4348 3.75597 48.3149 4.65301 49.0694 5.65518C52 9.54789 52 15.1986 52 26.5C52 37.8014 52 43.4521 49.0694 47.3448C48.3149 48.347 47.4348 49.244 46.4515 50.013C42.6323 53 37.0882 53 26 53C14.9118 53 9.36774 53 5.54847 50.013C4.56522 49.244 3.6851 48.347 2.93063 47.3448C0 43.4521 0 37.8014 0 26.5Z' : 'M0 22C0 12.6177 0 7.92655 2.47976 4.69486C3.11817 3.86288 3.86288 3.11817 4.69486 2.47976C7.92655 0 12.6177 0 22 0C31.3823 0 36.0735 0 39.3051 2.47976C40.1371 3.11817 40.8818 3.86288 41.5202 4.69486C44 7.92655 44 12.6177 44 22C44 31.3823 44 36.0735 41.5202 39.3051C40.8818 40.1371 40.1371 40.8818 39.3051 41.5202C36.0735 44 31.3823 44 22 44C12.6177 44 7.92655 44 4.69486 41.5202C3.86288 40.8818 3.11817 40.1371 2.47976 39.3051C0 36.0735 0 31.3823 0 22Z') : 'M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z'),
    R = (e) => (e ? 'M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z' : 'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z'),
    O = (null === (r = window.SVGPathElement) || void 0 === r ? void 0 : r.prototype.getTotalLength) != null,
    D = (e, t) => ''.concat(e, '-').concat(t),
    L = new Map();
function x(e) {
    return e.toString();
}
class w extends s.Component {
    componentDidMount() {
        this.forceUpdate();
    }
    componentWillAppear(e) {
        e();
    }
    componentWillEnter(e) {
        e();
    }
    componentWillLeave(e) {
        this.timeoutId = setTimeout(e, 300);
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }
    render() {
        let { children: e, className: t, animatedStyle: n } = this.props;
        return (0, a.jsx)(f.animated.div, {
            className: t,
            style: n,
            children: e
        });
    }
    constructor(...e) {
        super(...e), v(this, 'timeoutId', void 0);
    }
}
function P(e) {
    let { selected: t, upperBadge: n, lowerBadge: r, highlight: i } = e;
    return t || null != n || null != r || !!i;
}
function M(e) {
    let t = (0, g.Q)('BlobMask');
    return (0, a.jsx)(k, {
        ...e,
        isVisualRefreshEnabled: t
    });
}
M.defaultProps = {
    selected: !1,
    lowerBadgeSize: {
        width: 16,
        height: 16
    },
    highlight: !1
};
class k extends (i = s.Component) {
    static getDerivedStateFromProps(e, t) {
        let { hasRenderedBadge: n, upperBadgeMask: r, lowerBadgeMask: i, borderRadiusMask: a, renderComplex: s } = t,
            { upperBadge: o, lowerBadge: l } = e,
            u = !1;
        return (
            ((null != o && null == r) || (null != l && null == i)) && ((u = !0), (n = !0), (r = new f.Controller({ spring: 0 })), (i = new f.Controller({ spring: 0 }))),
            P(e) && null == a && ((u = !0), (a = new f.Controller({ spring: 0 }))),
            !s && P(e) && ((u = !0), (s = !0)),
            u
                ? {
                      hasRenderedBadge: n,
                      lowerBadgeMask: i,
                      upperBadgeMask: r,
                      borderRadiusMask: a,
                      renderComplex: s
                  }
                : null
        );
    }
    componentDidMount() {
        let { selected: e, lowerBadge: t, upperBadge: n } = this.props,
            { borderRadiusMask: r, lowerBadgeMask: i, upperBadgeMask: a } = this.state;
        null == r ||
            r
                .update({
                    spring: e ? 1 : 0,
                    immediate: !0
                })
                .start(),
            null == i ||
                i
                    .update({
                        spring: null != t ? 1 : 0,
                        immediate: !0
                    })
                    .start(),
            null == a ||
                a
                    .update({
                        spring: null != n ? 1 : 0,
                        immediate: !0
                    })
                    .start();
    }
    componentWillUnmount() {
        let { borderRadiusMask: e, lowerBadgeMask: t, upperBadgeMask: n } = this.state;
        this.timeout.stop(), null == e || e.dispose(), null == t || t.dispose(), null == n || n.dispose();
    }
    componentDidUpdate(e) {
        let { selected: t, lowerBadge: n, upperBadge: r } = this.props,
            { borderRadiusMask: i, lowerBadgeMask: a, upperBadgeMask: s, renderComplex: o } = this.state;
        t && !e.selected
            ? null == i ||
              i
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: I
                  })
                  .start()
            : !t &&
              e.selected &&
              (null == i ||
                  i
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: T
                      })
                      .start()),
            null != n && null == e.lowerBadge
                ? null == a ||
                  a
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: b
                      })
                      .start()
                : null == n &&
                  null != e.lowerBadge &&
                  (null == a ||
                      a
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: S
                          })
                          .start()),
            null != r && null == e.upperBadge
                ? null == s ||
                  s
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: b
                      })
                      .start()
                : null == r &&
                  null != e.upperBadge &&
                  (null == s ||
                      s
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: S
                          })
                          .start()),
            !o || P(this.props) || this.timeout.isStarted() ? P(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(d()(10800000, 18000000), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16 + N(this.props.isVisualRefreshEnabled);
        if (null == e) return;
        let { spring: r } = e.springs;
        return r.to([0, 1], [n, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * t, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: t } = this.props;
        if (null == e) return;
        let { spring: n } = e.springs,
            r = (null == t ? void 0 : t.width) != null ? t.width : 16,
            i = (null == t ? void 0 : t.height) != null ? t.height : 16;
        return {
            opacity: n.to([0, 0.5, 1], [0, 0, 1]),
            transform: n.to((e) => 'translate('.concat(r - e * r, 'px, ').concat(i - e * i, 'px)'))
        };
    }
    getUpperBadgeStyles() {
        let { upperBadgeMask: e } = this.state;
        if (null == e) return;
        let { spring: t } = e.springs;
        return {
            opacity: t.to([0, 0.5, 1], [0, 0, 1]),
            transform: t.to((e) => 'translate('.concat(16 - 16 * e, 'px, ').concat(-1 * (16 - 16 * e), 'px)'))
        };
    }
    getPathInterpolation() {
        var e;
        return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(this.interpolator);
    }
    render() {
        let { children: e, className: t, innerClassName: n, lowerBadge: r, lowerBadgeSize: i, style: o, upperBadge: u, highlight: c } = this.props,
            { maskId: d, lowerBadgeMask: _, upperBadgeMask: h, focused: g, hasRenderedBadge: v, renderComplex: I } = this.state,
            T = y(this.props.isVisualRefreshEnabled, !!this.props.isFolder),
            b = A(this.props.isVisualRefreshEnabled),
            S = N(this.props.isVisualRefreshEnabled);
        if (!I)
            return (0, a.jsx)(
                'div',
                {
                    className: l()(t, {
                        [E.wrapperSimple]: !0,
                        [E.simpleFocused]: g
                    }),
                    style: o,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, a.jsx)(
                        'svg',
                        {
                            width: T,
                            height: T,
                            viewBox: '0 0 '.concat(T, ' ').concat(T),
                            className: E.svg,
                            overflow: 'visible',
                            children: (0, a.jsx)(
                                'foreignObject',
                                {
                                    x: 0,
                                    y: 0,
                                    className: n,
                                    width: T,
                                    height: T,
                                    children: e
                                },
                                'foreign-object'
                            )
                        },
                        'svg'
                    )
                },
                'wrapper'
            );
        let C = ''.concat(d, '-upper_badge_masks'),
            R = ''.concat(d, '-lower_badge_masks'),
            O = ''.concat(d, '-blob_mask'),
            D = ''.concat(d, '-stroke_mask'),
            L = ''.concat(d, '-highlight_mask'),
            x = (null == i ? void 0 : i.width) != null ? i.width : 16,
            P = (null == i ? void 0 : i.height) != null ? i.height : 16;
        return (0, a.jsxs)(
            'div',
            {
                className: l()(t, E.wrapper),
                style: o,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, a.jsxs)(
                        'svg',
                        {
                            width: T,
                            height: T,
                            viewBox: '0 0 '.concat(T, ' ').concat(T),
                            className: l()(E.svg, { [E.noContain]: c }),
                            overflow: 'visible',
                            children: [
                                (0, a.jsxs)('defs', {
                                    children: [
                                        c &&
                                            (0, a.jsx)(f.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: L
                                            }),
                                        (0, a.jsx)(f.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: O
                                        }),
                                        v
                                            ? (0, a.jsx)(f.animated.rect, {
                                                  id: C,
                                                  x: T - b + S,
                                                  y: -S,
                                                  width: b,
                                                  height: b,
                                                  rx: b / 2,
                                                  ry: b / 2,
                                                  transform: this.getBadgePositionInterpolation(h, -1)
                                              })
                                            : null,
                                        v
                                            ? (0, a.jsx)(f.animated.rect, {
                                                  id: R,
                                                  x: T - (x + 2 * S) + S,
                                                  y: T - (P + 2 * S) + S,
                                                  width: x + 2 * S,
                                                  height: P + 2 * S,
                                                  rx: b / 2,
                                                  ry: b / 2,
                                                  transform: this.getBadgePositionInterpolation(_, 1, x + S)
                                              })
                                            : null
                                    ]
                                }),
                                (0, a.jsxs)('mask', {
                                    id: d,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: T,
                                    height: T,
                                    children: [
                                        c &&
                                            (0, a.jsx)('use', {
                                                href: '#'.concat(L),
                                                fill: 'black'
                                            }),
                                        (0, a.jsx)('use', {
                                            href: '#'.concat(O),
                                            fill: 'white',
                                            className: l()({ [E.isHighlighted]: c })
                                        }),
                                        v
                                            ? (0, a.jsxs)(a.Fragment, {
                                                  children: [
                                                      (0, a.jsx)('use', {
                                                          href: '#'.concat(C),
                                                          fill: 'black'
                                                      }),
                                                      (0, a.jsx)('use', {
                                                          href: '#'.concat(R),
                                                          fill: 'black'
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                                v
                                    ? (0, a.jsxs)('mask', {
                                          id: D,
                                          children: [
                                              (0, a.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, a.jsx)('use', {
                                                  href: '#'.concat(C),
                                                  fill: 'black'
                                              }),
                                              (0, a.jsx)('use', {
                                                  href: '#'.concat(R),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                g
                                    ? (0, a.jsxs)(s.Fragment, {
                                          children: [
                                              (0, a.jsx)('g', {
                                                  className: E.focusStroke,
                                                  mask: 'url(#'.concat(D, ')'),
                                                  children: (0, a.jsx)('use', { href: '#'.concat(O) })
                                              }),
                                              (0, a.jsxs)('g', {
                                                  className: E.focusFill,
                                                  children: [null != u ? (0, a.jsx)('use', { href: '#'.concat(C) }) : null, null != r ? (0, a.jsx)('use', { href: '#'.concat(R) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                c &&
                                    (0, a.jsx)(f.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: p.Z.BRAND_500,
                                        'stroke-width': 2,
                                        className: E.highlight,
                                        mask: 'url(#'.concat(D, ')')
                                    }),
                                (0, a.jsx)(
                                    'foreignObject',
                                    {
                                        mask: 'url(#'.concat(d, ')'),
                                        x: 0,
                                        y: 0,
                                        className: n,
                                        width: T,
                                        height: T,
                                        children: e
                                    },
                                    'foreign-object'
                                )
                            ]
                        },
                        'svg'
                    ),
                    (0, a.jsxs)(m.W, {
                        component: s.Fragment,
                        children: [
                            null != r
                                ? (0, a.jsx)(
                                      w,
                                      {
                                          className: E.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: r
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != u
                                ? (0, a.jsx)(
                                      w,
                                      {
                                          className: E.upperBadge,
                                          animatedStyle: this.getUpperBadgeStyles(),
                                          children: u
                                      },
                                      'upper-badge'
                                  )
                                : null
                        ]
                    })
                ]
            },
            'wrapper'
        );
    }
    constructor(...e) {
        super(...e),
            v(this, 'timeout', new h.V7()),
            v(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, _.Z)(),
                focused: !1
            }),
            v(
                this,
                'interpolator',
                (function (e, t) {
                    if (L.has(D(e, t))) return L.get(D(e, t));
                    let n = (function (e, t) {
                        return O ? (0, u.interpolate)(R(e), C(e, t), { maxSegmentLength: 1.5 }) : x;
                    })(e, t);
                    return L.set(D(e, t), n), n;
                })(!!this.props.isVisualRefreshEnabled, !!this.props.isFolder)
            ),
            v(this, 'handleTimeout', () => {
                this.timeout.stop(), this.setState({ renderComplex: !1 });
            }),
            v(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            v(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            });
    }
}
v(k, 'defaultProps', M.defaultProps);
