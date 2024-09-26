n.d(t, {
    a: function () {
        return x;
    }
});
var r,
    i,
    a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(96355);
var d = n(47759),
    _ = n.n(d),
    E = n(526629),
    f = n(772848),
    h = n(722770),
    p = n(846519),
    m = n(215569),
    I = n(225772);
function T(e, t, n) {
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
let g = 10800000,
    S = 18000000,
    A = 16,
    v = 24,
    N = 4,
    O = 48,
    R = 2,
    C = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    y = {
        duration: 150,
        friction: 3
    },
    L = {
        friction: 30,
        tension: 900,
        mass: 1
    },
    b = {
        duration: 150,
        friction: 10,
        tension: 100,
        mass: 1
    },
    D = 'M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z',
    M = 'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z',
    P = (null === (r = window.SVGPathElement) || void 0 === r ? void 0 : r.prototype.getTotalLength) != null ? (0, c.interpolate)(M, D, { maxSegmentLength: 1.5 }) : (e) => ''.concat(e);
class U extends s.Component {
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
        return (0, o.jsx)(E.animated.div, {
            className: t,
            style: n,
            children: e
        });
    }
    constructor(...e) {
        super(...e), T(this, 'timeoutId', void 0);
    }
}
function w(e) {
    let { selected: t, upperBadge: n, lowerBadge: r, highlight: i } = e;
    return t || null != n || null != r || !!i;
}
class x extends (i = s.Component) {
    static getDerivedStateFromProps(e, t) {
        let { hasRenderedBadge: n, upperBadgeMask: r, lowerBadgeMask: i, borderRadiusMask: a, renderComplex: o } = t,
            { upperBadge: s, lowerBadge: l } = e,
            u = !1;
        return (
            ((null != s && null == r) || (null != l && null == i)) && ((u = !0), (n = !0), (r = new E.Controller({ spring: 0 })), (i = new E.Controller({ spring: 0 }))),
            w(e) && null == a && ((u = !0), (a = new E.Controller({ spring: 0 }))),
            !o && w(e) && ((u = !0), (o = !0)),
            u
                ? {
                      hasRenderedBadge: n,
                      lowerBadgeMask: i,
                      upperBadgeMask: r,
                      borderRadiusMask: a,
                      renderComplex: o
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
            { borderRadiusMask: i, lowerBadgeMask: a, upperBadgeMask: o, renderComplex: s } = this.state;
        t && !e.selected
            ? null == i ||
              i
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: C
                  })
                  .start()
            : !t &&
              e.selected &&
              (null == i ||
                  i
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: y
                      })
                      .start()),
            null != n && null == e.lowerBadge
                ? null == a ||
                  a
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: L
                      })
                      .start()
                : null == n &&
                  null != e.lowerBadge &&
                  (null == a ||
                      a
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: b
                          })
                          .start()),
            null != r && null == e.upperBadge
                ? null == o ||
                  o
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: L
                      })
                      .start()
                : null == r &&
                  null != e.upperBadge &&
                  (null == o ||
                      o
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: b
                          })
                          .start()),
            !s || w(this.props) || this.timeout.isStarted() ? w(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(_()(g, S), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A + N;
        if (null == e) return;
        let { spring: r } = e.springs;
        return r.to([0, 1], [n, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * t, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: t } = this.props;
        if (null == e) return;
        let { spring: n } = e.springs,
            r = (null == t ? void 0 : t.width) != null ? t.width : A,
            i = (null == t ? void 0 : t.height) != null ? t.height : A;
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
        return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(P);
    }
    render() {
        let { children: e, className: t, innerClassName: n, lowerBadge: r, lowerBadgeSize: i, style: a, upperBadge: l, highlight: c } = this.props,
            { maskId: d, lowerBadgeMask: _, upperBadgeMask: f, focused: p, hasRenderedBadge: T, renderComplex: g } = this.state;
        if (!g)
            return (0, o.jsx)(
                'div',
                {
                    className: u()(t, {
                        [I.wrapperSimple]: !0,
                        [I.simpleFocused]: p
                    }),
                    style: a,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, o.jsx)(
                        'svg',
                        {
                            width: O,
                            height: O,
                            viewBox: '0 0 '.concat(O, ' ').concat(O),
                            className: I.svg,
                            overflow: 'visible',
                            children: (0, o.jsx)(
                                'foreignObject',
                                {
                                    x: 0,
                                    y: 0,
                                    className: n,
                                    width: O,
                                    height: O,
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
        let S = ''.concat(d, '-upper_badge_masks'),
            C = ''.concat(d, '-lower_badge_masks'),
            y = ''.concat(d, '-blob_mask'),
            L = ''.concat(d, '-stroke_mask'),
            b = ''.concat(d, '-highlight_mask'),
            D = (null == i ? void 0 : i.width) != null ? i.width : A,
            M = (null == i ? void 0 : i.height) != null ? i.height : A;
        return (0, o.jsxs)(
            'div',
            {
                className: u()(t, I.wrapper),
                style: a,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, o.jsxs)(
                        'svg',
                        {
                            width: O,
                            height: O,
                            viewBox: '0 0 '.concat(O, ' ').concat(O),
                            className: u()(I.svg, { [I.noContain]: c }),
                            overflow: 'visible',
                            children: [
                                (0, o.jsxs)('defs', {
                                    children: [
                                        c &&
                                            (0, o.jsx)(E.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: b
                                            }),
                                        (0, o.jsx)(E.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: y
                                        }),
                                        T
                                            ? (0, o.jsx)(E.animated.rect, {
                                                  id: S,
                                                  x: O - v + N,
                                                  y: -N,
                                                  width: v,
                                                  height: v,
                                                  rx: v / 2,
                                                  ry: v / 2,
                                                  transform: this.getBadgePositionInterpolation(f, -1)
                                              })
                                            : null,
                                        T
                                            ? (0, o.jsx)(E.animated.rect, {
                                                  id: C,
                                                  x: O - (D + 2 * N) + N,
                                                  y: O - (M + 2 * N) + N,
                                                  width: D + 2 * N,
                                                  height: M + 2 * N,
                                                  rx: v / 2,
                                                  ry: v / 2,
                                                  transform: this.getBadgePositionInterpolation(_, 1, D + N)
                                              })
                                            : null
                                    ]
                                }),
                                (0, o.jsxs)('mask', {
                                    id: d,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: O,
                                    height: O,
                                    children: [
                                        c &&
                                            (0, o.jsx)('use', {
                                                href: '#'.concat(b),
                                                fill: 'black'
                                            }),
                                        (0, o.jsx)('use', {
                                            href: '#'.concat(y),
                                            fill: 'white',
                                            className: u()({ [I.isHighlighted]: c })
                                        }),
                                        T
                                            ? (0, o.jsxs)(o.Fragment, {
                                                  children: [
                                                      (0, o.jsx)('use', {
                                                          href: '#'.concat(S),
                                                          fill: 'black'
                                                      }),
                                                      (0, o.jsx)('use', {
                                                          href: '#'.concat(C),
                                                          fill: 'black'
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                                T
                                    ? (0, o.jsxs)('mask', {
                                          id: L,
                                          children: [
                                              (0, o.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, o.jsx)('use', {
                                                  href: '#'.concat(S),
                                                  fill: 'black'
                                              }),
                                              (0, o.jsx)('use', {
                                                  href: '#'.concat(C),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                p
                                    ? (0, o.jsxs)(s.Fragment, {
                                          children: [
                                              (0, o.jsx)('g', {
                                                  className: I.focusStroke,
                                                  mask: 'url(#'.concat(L, ')'),
                                                  children: (0, o.jsx)('use', { href: '#'.concat(y) })
                                              }),
                                              (0, o.jsxs)('g', {
                                                  className: I.focusFill,
                                                  children: [null != l ? (0, o.jsx)('use', { href: '#'.concat(S) }) : null, null != r ? (0, o.jsx)('use', { href: '#'.concat(C) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                c &&
                                    (0, o.jsx)(E.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: h.Z.BRAND_500,
                                        'stroke-width': R,
                                        className: I.highlight,
                                        mask: 'url(#'.concat(L, ')')
                                    }),
                                (0, o.jsx)(
                                    'foreignObject',
                                    {
                                        mask: 'url(#'.concat(d, ')'),
                                        x: 0,
                                        y: 0,
                                        className: n,
                                        width: O,
                                        height: O,
                                        children: e
                                    },
                                    'foreign-object'
                                )
                            ]
                        },
                        'svg'
                    ),
                    (0, o.jsxs)(m.W, {
                        component: s.Fragment,
                        children: [
                            null != r
                                ? (0, o.jsx)(
                                      U,
                                      {
                                          className: I.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: r
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != l
                                ? (0, o.jsx)(
                                      U,
                                      {
                                          className: I.upperBadge,
                                          animatedStyle: this.getUpperBadgeStyles(),
                                          children: l
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
            T(this, 'timeout', new p.V7()),
            T(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, f.Z)(),
                focused: !1
            }),
            T(this, 'handleTimeout', () => {
                this.timeout.stop(), this.setState({ renderComplex: !1 });
            }),
            T(this, 'handleFocus', () => {
                this.setState({ focused: !0 });
            }),
            T(this, 'handleBlur', () => {
                this.setState({ focused: !1 });
            });
    }
}
T(x, 'defaultProps', {
    selected: !1,
    lowerBadgeSize: {
        width: A,
        height: A
    },
    highlight: !1
});
