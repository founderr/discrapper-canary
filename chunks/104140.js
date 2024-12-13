r.d(n, {
    a: function () {
        return j;
    }
});
var i,
    a,
    s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(96355);
var f = r(47759),
    _ = r.n(f),
    h = r(752877),
    p = r(772848),
    m = r(722770),
    g = r(846519),
    E = r(215569),
    v = r(540059),
    I = r(11868);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = 10800000,
    y = 18000000,
    S = 16,
    A = 2,
    N = {
        friction: 13,
        tension: 240,
        duration: 150
    },
    C = {
        duration: 150,
        friction: 3
    },
    R = {
        friction: 30,
        tension: 900,
        mass: 1
    },
    O = {
        duration: 150,
        friction: 10,
        tension: 100,
        mass: 1
    },
    D = (e, n) => (e ? (n ? 52 : 44) : 48),
    L = (e) => (e ? 20 : 24),
    x = (e) => (e ? 2 : 4),
    w = (e, n) => (e ? (n ? 'M0 25.6C0 16.6392 0 12.1587 1.7439 8.73615C3.27787 5.72556 5.72556 3.27787 8.73615 1.7439C12.1587 0 16.6392 0 25.6 0H26.4C35.3608 0 39.8413 0 43.2638 1.7439C46.2744 3.27787 48.7221 5.72556 50.2561 8.73615C52 12.1587 52 16.6392 52 25.6V26.4C52 35.3608 52 39.8413 50.2561 43.2638C48.7221 46.2744 46.2744 48.7221 43.2638 50.2561C39.8413 52 35.3608 52 26.4 52H25.6C16.6392 52 12.1587 52 8.73615 50.2561C5.72556 48.7221 3.27787 46.2744 1.7439 43.2638C0 39.8413 0 35.3608 0 26.4V25.6Z' : 'M0 19.2C0 12.4794 0 9.11906 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11906 0 12.4794 0 19.2 0H24.8C31.5206 0 34.8809 0 37.4479 1.30792C39.7058 2.4584 41.5416 4.29417 42.6921 6.55211C44 9.11906 44 12.4794 44 19.2V24.8C44 31.5206 44 34.8809 42.6921 37.4479C41.5416 39.7058 39.7058 41.5416 37.4479 42.6921C34.8809 44 31.5206 44 24.8 44H19.2C12.4794 44 9.11906 44 6.55211 42.6921C4.29417 41.5416 2.4584 39.7058 1.30792 37.4479C0 34.8809 0 31.5206 0 24.8V19.2Z') : 'M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z'),
    P = (e) => (e ? 'M44 22C44 34.1502 34.1502 44 22 44C9.84978 44 0 34.1502 0 22C0 9.84978 9.84978 0 22 0C34.1502 0 44 9.84978 44 22Z' : 'M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z'),
    M = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null,
    k = (e, n) => ''.concat(e, '-').concat(n),
    U = new Map();
function B(e, n) {
    if (U.has(k(e, n))) return U.get(k(e, n));
    let r = G(e, n);
    return U.set(k(e, n), r), r;
}
function G(e, n) {
    return M ? (0, d.interpolate)(P(e), w(e, n), { maxSegmentLength: 1.5 }) : Z;
}
function Z(e) {
    return e.toString();
}
class F extends l.Component {
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
        let { children: e, className: n, animatedStyle: r } = this.props;
        return (0, o.jsx)(h.animated.div, {
            className: n,
            style: r,
            children: e
        });
    }
    constructor(...e) {
        super(...e), T(this, 'timeoutId', void 0);
    }
}
function V(e) {
    let { selected: n, upperBadge: r, lowerBadge: i, highlight: a } = e;
    return n || null != r || null != i || !!a;
}
function j(e) {
    let n = (0, v.Q3)('BlobMask');
    return (0, o.jsx)(H, {
        ...e,
        isVisualRefreshEnabled: n
    });
}
j.defaultProps = {
    selected: !1,
    lowerBadgeSize: {
        width: S,
        height: S
    },
    highlight: !1
};
class H extends (a = l.Component) {
    static getDerivedStateFromProps(e, n) {
        let { hasRenderedBadge: r, upperBadgeMask: i, lowerBadgeMask: a, borderRadiusMask: s, renderComplex: o } = n,
            { upperBadge: l, lowerBadge: u } = e,
            c = !1;
        return (
            ((null != l && null == i) || (null != u && null == a)) && ((c = !0), (r = !0), (i = new h.Controller({ spring: 0 })), (a = new h.Controller({ spring: 0 }))),
            V(e) && null == s && ((c = !0), (s = new h.Controller({ spring: 0 }))),
            !o && V(e) && ((c = !0), (o = !0)),
            c
                ? {
                      hasRenderedBadge: r,
                      lowerBadgeMask: a,
                      upperBadgeMask: i,
                      borderRadiusMask: s,
                      renderComplex: o
                  }
                : null
        );
    }
    componentDidMount() {
        let { selected: e, lowerBadge: n, upperBadge: r } = this.props,
            { borderRadiusMask: i, lowerBadgeMask: a, upperBadgeMask: s } = this.state;
        null == i ||
            i
                .update({
                    spring: e ? 1 : 0,
                    immediate: !0
                })
                .start(),
            null == a ||
                a
                    .update({
                        spring: null != n ? 1 : 0,
                        immediate: !0
                    })
                    .start(),
            null == s ||
                s
                    .update({
                        spring: null != r ? 1 : 0,
                        immediate: !0
                    })
                    .start();
    }
    componentWillUnmount() {
        let { borderRadiusMask: e, lowerBadgeMask: n, upperBadgeMask: r } = this.state;
        this.timeout.stop(), null == e || e.dispose(), null == n || n.dispose(), null == r || r.dispose();
    }
    componentDidUpdate(e) {
        let { selected: n, lowerBadge: r, upperBadge: i } = this.props,
            { borderRadiusMask: a, lowerBadgeMask: s, upperBadgeMask: o, renderComplex: l } = this.state;
        n && !e.selected
            ? null == a ||
              a
                  .update({
                      spring: 1,
                      immediate: !1,
                      config: N
                  })
                  .start()
            : !n &&
              e.selected &&
              (null == a ||
                  a
                      .update({
                          spring: 0,
                          immediate: !1,
                          config: C
                      })
                      .start()),
            null != r && null == e.lowerBadge
                ? null == s ||
                  s
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: R
                      })
                      .start()
                : null == r &&
                  null != e.lowerBadge &&
                  (null == s ||
                      s
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: O
                          })
                          .start()),
            null != i && null == e.upperBadge
                ? null == o ||
                  o
                      .update({
                          spring: 1,
                          immediate: !document.hasFocus(),
                          config: R
                      })
                      .start()
                : null == i &&
                  null != e.upperBadge &&
                  (null == o ||
                      o
                          .update({
                              spring: 0,
                              immediate: !document.hasFocus(),
                              config: O
                          })
                          .start()),
            !l || V(this.props) || this.timeout.isStarted() ? V(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(_()(b, y), this.handleTimeout);
    }
    getBadgePositionInterpolation(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S + x(this.props.isVisualRefreshEnabled);
        if (null == e) return;
        let { spring: i } = e.springs;
        return i.to([0, 1], [r, 0]).to((e) => 'translate('.concat(e, ' ').concat(e * n, ')'));
    }
    getLowerBadgeStyles() {
        let { lowerBadgeMask: e } = this.state,
            { lowerBadgeSize: n } = this.props;
        if (null == e) return;
        let { spring: r } = e.springs,
            i = (null == n ? void 0 : n.width) != null ? n.width : S,
            a = (null == n ? void 0 : n.height) != null ? n.height : S;
        return {
            opacity: r.to([0, 0.5, 1], [0, 0, 1]),
            transform: r.to((e) => 'translate('.concat(i - e * i, 'px, ').concat(a - e * a, 'px)'))
        };
    }
    getUpperBadgeStyles() {
        let { upperBadgeMask: e } = this.state;
        if (null == e) return;
        let { spring: n } = e.springs;
        return {
            opacity: n.to([0, 0.5, 1], [0, 0, 1]),
            transform: n.to((e) => 'translate('.concat(16 - 16 * e, 'px, ').concat(-1 * (16 - 16 * e), 'px)'))
        };
    }
    getPathInterpolation() {
        var e;
        return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(this.interpolator);
    }
    render() {
        let { children: e, className: n, innerClassName: r, lowerBadge: i, lowerBadgeSize: a, style: s, upperBadge: u, highlight: d } = this.props,
            { maskId: f, lowerBadgeMask: _, upperBadgeMask: p, focused: g, hasRenderedBadge: v, renderComplex: T } = this.state,
            b = D(this.props.isVisualRefreshEnabled, !!this.props.isFolder),
            y = L(this.props.isVisualRefreshEnabled),
            N = x(this.props.isVisualRefreshEnabled);
        if (!T)
            return (0, o.jsx)(
                'div',
                {
                    className: c()(n, {
                        [I.wrapperSimple]: !0,
                        [I.simpleFocused]: g
                    }),
                    style: s,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    children: (0, o.jsx)(
                        'svg',
                        {
                            width: b,
                            height: b,
                            viewBox: '0 0 '.concat(b, ' ').concat(b),
                            className: I.svg,
                            overflow: 'visible',
                            children: (0, o.jsx)(
                                'foreignObject',
                                {
                                    x: 0,
                                    y: 0,
                                    className: r,
                                    width: b,
                                    height: b,
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
        let C = ''.concat(f, '-upper_badge_masks'),
            R = ''.concat(f, '-lower_badge_masks'),
            O = ''.concat(f, '-blob_mask'),
            w = ''.concat(f, '-stroke_mask'),
            P = ''.concat(f, '-highlight_mask'),
            M = (null == a ? void 0 : a.width) != null ? a.width : S,
            k = (null == a ? void 0 : a.height) != null ? a.height : S;
        return (0, o.jsxs)(
            'div',
            {
                className: c()(n, I.wrapper),
                style: s,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [
                    (0, o.jsxs)(
                        'svg',
                        {
                            width: b,
                            height: b,
                            viewBox: '0 0 '.concat(b, ' ').concat(b),
                            className: c()(I.svg, { [I.noContain]: d }),
                            overflow: 'visible',
                            children: [
                                (0, o.jsxs)('defs', {
                                    children: [
                                        d &&
                                            (0, o.jsx)(h.animated.path, {
                                                d: this.getPathInterpolation(),
                                                id: P
                                            }),
                                        (0, o.jsx)(h.animated.path, {
                                            d: this.getPathInterpolation(),
                                            id: O
                                        }),
                                        v
                                            ? (0, o.jsx)(h.animated.rect, {
                                                  id: C,
                                                  x: b - y + N,
                                                  y: -N,
                                                  width: y,
                                                  height: y,
                                                  rx: y / 2,
                                                  ry: y / 2,
                                                  transform: this.getBadgePositionInterpolation(p, -1)
                                              })
                                            : null,
                                        v
                                            ? (0, o.jsx)(h.animated.rect, {
                                                  id: R,
                                                  x: b - (M + 2 * N) + N,
                                                  y: b - (k + 2 * N) + N,
                                                  width: M + 2 * N,
                                                  height: k + 2 * N,
                                                  rx: y / 2,
                                                  ry: y / 2,
                                                  transform: this.getBadgePositionInterpolation(_, 1, M + N)
                                              })
                                            : null
                                    ]
                                }),
                                (0, o.jsxs)('mask', {
                                    id: f,
                                    fill: 'black',
                                    x: 0,
                                    y: 0,
                                    width: b,
                                    height: b,
                                    children: [
                                        d &&
                                            (0, o.jsx)('use', {
                                                href: '#'.concat(P),
                                                fill: 'black'
                                            }),
                                        (0, o.jsx)('use', {
                                            href: '#'.concat(O),
                                            fill: 'white',
                                            className: c()({ [I.isHighlighted]: d })
                                        }),
                                        v
                                            ? (0, o.jsxs)(o.Fragment, {
                                                  children: [
                                                      (0, o.jsx)('use', {
                                                          href: '#'.concat(C),
                                                          fill: 'black'
                                                      }),
                                                      (0, o.jsx)('use', {
                                                          href: '#'.concat(R),
                                                          fill: 'black'
                                                      })
                                                  ]
                                              })
                                            : null
                                    ]
                                }),
                                v
                                    ? (0, o.jsxs)('mask', {
                                          id: w,
                                          children: [
                                              (0, o.jsx)('rect', {
                                                  width: '150%',
                                                  height: '150%',
                                                  x: '-25%',
                                                  y: '-25%',
                                                  fill: 'white'
                                              }),
                                              (0, o.jsx)('use', {
                                                  href: '#'.concat(C),
                                                  fill: 'black'
                                              }),
                                              (0, o.jsx)('use', {
                                                  href: '#'.concat(R),
                                                  fill: 'black'
                                              })
                                          ]
                                      })
                                    : null,
                                g
                                    ? (0, o.jsxs)(l.Fragment, {
                                          children: [
                                              (0, o.jsx)('g', {
                                                  className: I.focusStroke,
                                                  mask: 'url(#'.concat(w, ')'),
                                                  children: (0, o.jsx)('use', { href: '#'.concat(O) })
                                              }),
                                              (0, o.jsxs)('g', {
                                                  className: I.focusFill,
                                                  children: [null != u ? (0, o.jsx)('use', { href: '#'.concat(C) }) : null, null != i ? (0, o.jsx)('use', { href: '#'.concat(R) }) : null]
                                              })
                                          ]
                                      })
                                    : null,
                                d &&
                                    (0, o.jsx)(h.animated.path, {
                                        d: this.getPathInterpolation(),
                                        stroke: m.Z.BRAND_500,
                                        'stroke-width': A,
                                        className: I.highlight,
                                        mask: 'url(#'.concat(w, ')')
                                    }),
                                (0, o.jsx)(
                                    'foreignObject',
                                    {
                                        mask: 'url(#'.concat(f, ')'),
                                        x: 0,
                                        y: 0,
                                        className: r,
                                        width: b,
                                        height: b,
                                        children: e
                                    },
                                    'foreign-object'
                                )
                            ]
                        },
                        'svg'
                    ),
                    (0, o.jsxs)(E.W, {
                        component: l.Fragment,
                        children: [
                            null != i
                                ? (0, o.jsx)(
                                      F,
                                      {
                                          className: I.lowerBadge,
                                          animatedStyle: this.getLowerBadgeStyles(),
                                          children: i
                                      },
                                      'lower-badge'
                                  )
                                : null,
                            null != u
                                ? (0, o.jsx)(
                                      F,
                                      {
                                          className: I.upperBadge,
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
            T(this, 'timeout', new g.V7()),
            T(this, 'state', {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, p.Z)(),
                focused: !1
            }),
            T(this, 'interpolator', B(!!this.props.isVisualRefreshEnabled, !!this.props.isFolder)),
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
T(H, 'defaultProps', j.defaultProps);
