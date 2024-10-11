n.d(t, {
    i: function () {
        return N;
    }
}),
    n(724458),
    n(411104),
    n(47120);
var r,
    i,
    a,
    s = n(735250),
    o = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(212433),
    E = n(374470),
    f = n(143450),
    h = n(84735),
    p = n(981729),
    I = n(607070),
    m = n(540059),
    T = n(752325);
function S(e, t, n) {
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
function g(e, t) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
        let i = t[r];
        if (e === i) return r;
        if (e < i) {
            if (0 === n || i - e < n) return r;
            return r - 1;
        }
        n = e - i;
    }
    return null;
}
((a = r || (r = {}))[(a.ABOVE = 0)] = 'ABOVE'), (a[(a.BELOW = 1)] = 'BELOW');
function A(e) {
    return {
        value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
        initialValueProp: e.initialValue,
        newClosestIndex: null,
        ...(function (e) {
            let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: a } = e,
                s = [],
                o = [];
            if (null == t)
                return {
                    min: r,
                    max: i,
                    range: i - r,
                    sortedMarkers: s,
                    markerPositions: o
                };
            let l = g(n, (s = t.sort((e, t) => e - t))),
                u = s[0],
                c = s[s.length - 1],
                d = c - u;
            if (a) {
                let e = 100 / (s.length - 1);
                o = s.map((t, n) => n * e);
            } else {
                let e = (e) => (100 * (e - u)) / d;
                o = s.map((t) => e(t));
            }
            return {
                min: u,
                max: c,
                range: d,
                sortedMarkers: s,
                markerPositions: o,
                closestMarkerIndex: l
            };
        })(e)
    };
}
class N extends (i = o.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.initialValue !== t.initialValueProp
            ? {
                  ...A(e),
                  active: t.active
              }
            : null;
    }
    componentWillUnmount() {
        this.reset();
    }
    renderMark(e) {
        let { onMarkerRender: t } = this.props;
        return null != t ? t(e) : e;
    }
    render() {
        var e;
        let { value: t, active: n, focused: r, sortedMarkers: i, markerPositions: a, closestMarkerIndex: o, newClosestIndex: l, min: c, max: d } = this.state,
            { disabled: E, stickToMarkers: f, className: m, children: S, barStyles: g, fillStyles: A, mini: N, hideBubble: O, defaultValue: v, orientation: C, onValueRender: L, renderMarker: y, getAriaValueText: D, barClassName: b, grabberClassName: M, grabberStyles: P = {}, markerPosition: U = 0, 'aria-hidden': w, 'aria-label': x, 'aria-labelledby': G, 'aria-describedby': k } = this.props,
            B = 0;
        f ? null != a && (null != l ? (B = a[l]) : null != o && (B = a[o])) : (B = this.scaleValue(t));
        let F = ''.concat(B, '%'),
            V =
                null != a && null != i
                    ? a.map((e, t) => {
                          let n = i[t],
                              r = null != v && v === n,
                              a = this.renderMark(n);
                          return (0, s.jsx)(
                              'div',
                              {
                                  className: u()(T.mark, {
                                      [T.defaultValue]: r,
                                      [T.markAbove]: 0 === U,
                                      [T.markBelow]: 1 === U
                                  }),
                                  style: { left: ''.concat(e, '%') },
                                  children:
                                      null != y
                                          ? y(n)
                                          : (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)('div', {
                                                        className: T.markValue,
                                                        children: a
                                                    }),
                                                    (0, s.jsx)('div', { className: T['markDash'.concat(null == a ? 'simple' : '')] })
                                                ]
                                            })
                              },
                              t
                          );
                      })
                    : null,
            H = null != L ? L(t) : ''.concat(B.toFixed(0), '%'),
            Z = null !== (e = null == D ? void 0 : D(t)) && void 0 !== e ? e : void 0;
        return (0, s.jsx)(R, {
            active: n,
            keyboardFocused: r && I.Z.keyboardModeEnabled,
            children: (e) => {
                var i;
                return (0, s.jsx)(h.t, {
                    focusTarget: this.containerRef,
                    ringTarget: this.grabberRef,
                    children: (0, s.jsxs)(_.animated.div, {
                        className: u()(T.slider, m, {
                            [T.hasMarks]: (null !== (i = null == V ? void 0 : V.length) && void 0 !== i ? i : 0) > 0,
                            [T.disabled]: E,
                            [T.mini]: N
                        }),
                        style: null == e ? void 0 : e.sliderStyles,
                        'aria-valuemin': c,
                        'aria-valuemax': d,
                        'aria-valuenow': t,
                        'aria-disabled': E,
                        'aria-orientation': C,
                        'aria-hidden': w,
                        'aria-label': x,
                        'aria-labelledby': G,
                        'aria-describedby': k,
                        'aria-valuetext': Z,
                        role: 'slider',
                        tabIndex: 0,
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleContainerMouseDown,
                        onFocus: () => {
                            this.onFocus();
                        },
                        onBlur: () => {
                            this.onBlur();
                        },
                        onMouseEnter: () => (null == e ? void 0 : e.setHovered(!0)),
                        onMouseLeave: () => (null == e ? void 0 : e.setHovered(!1)),
                        ref: this.containerRef,
                        children: [
                            (0, s.jsx)('div', {
                                className: T.track,
                                children: V
                            }),
                            (0, s.jsx)('div', {
                                className: u()(T.bar, b),
                                style: g,
                                children: (0, s.jsx)('div', {
                                    className: T.barFill,
                                    style: {
                                        ...A,
                                        width: F
                                    }
                                })
                            }),
                            S,
                            (0, s.jsx)('div', {
                                className: T.track,
                                children: (0, s.jsx)(p.u, {
                                    color: p.u.Colors.GREY,
                                    hideOnClick: !1,
                                    text: O || f ? null : H,
                                    forceOpen: n || (r && I.Z.keyboardModeEnabled),
                                    children: (e) =>
                                        (0, s.jsx)('div', {
                                            ...e,
                                            className: u()(T.grabber, M),
                                            style: {
                                                ...P,
                                                left: F
                                            },
                                            onMouseDown: this.handleMouseDown,
                                            ref: this.grabberRef
                                        })
                                })
                            })
                        ]
                    })
                });
            }
        });
    }
    reset() {
        var e, t, n, r;
        null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener('mousemove', this.handleMouseMove, !0), null === (r = this.containerRef.current) || void 0 === r || null === (n = r.ownerDocument) || void 0 === n || n.removeEventListener('mouseup', this.handleMouseUp, !0);
    }
    scaleValue(e) {
        return (100 * (e - this.state.min)) / this.state.range;
    }
    unscaleValue(e) {
        return (e * this.state.range) / 100 + this.state.min;
    }
    focus() {
        var e;
        null === (e = this.containerRef.current) || void 0 === e || e.focus();
    }
    blur() {
        var e;
        null === (e = this.containerRef.current) || void 0 === e || e.blur();
    }
    moveStaggered(e) {
        let t;
        let { boundingRect: n, x: r = 0, closestMarkerIndex: i, markerPositions: a, sortedMarkers: s } = this.state,
            { asValueChanges: o } = this.props;
        if (null == n) return;
        let { left: l, right: u } = n;
        if (e.clientX <= l || e.clientX >= u) return;
        let c = e.clientX - r,
            d = a[i] + (c / (u - l)) * 100;
        null != (t = this.props.equidistant ? g(d, a) : g(this.unscaleValue(d), s)) && (null == o || o(s[t])), this.setState({ newClosestIndex: t });
    }
    constructor(e) {
        super(e),
            S(this, 'containerRef', o.createRef()),
            S(this, 'grabberRef', o.createRef()),
            S(this, 'moveGrabber', (e) => {
                let { sortedMarkers: t, value: n, min: r, max: i } = this.state,
                    { asValueChanges: a, onValueChange: s, stickToMarkers: o } = this.props,
                    l = {};
                if (o) {
                    let r = t.indexOf(n);
                    if (r < 0) return;
                    let i = r + e,
                        a = t[i];
                    if (null == a) return;
                    (l.value = a), (l.closestMarkerIndex = i), (l.newClosestIndex = i);
                } else l.value = d().clamp(n + e, r, i);
                this.setState(l), l.value !== this.state.value && (null == a || a(l.value), null == s || s(l.value));
            }),
            S(this, 'handleContainerMouseDown', (e) => {
                let t;
                let { disabled: n, maxValue: r, minValue: i, asValueChanges: a, onValueChange: s, stickToMarkers: o } = this.props,
                    { sortedMarkers: l, markerPositions: u } = this.state;
                if (n) return;
                let { clientX: c, currentTarget: d } = e;
                if (!(0, E.k)(d)) return;
                let { left: _, width: f } = d.getBoundingClientRect(),
                    h = (c - _) / f;
                if (o) {
                    let { nextClosestMarkerIndex: e } = u.reduce(
                        (e, t, n) => {
                            let r = Math.abs(t / 100 - h);
                            return r <= e.smallestDelta
                                ? {
                                      smallestDelta: r,
                                      nextClosestMarkerIndex: n
                                  }
                                : e;
                        },
                        {
                            smallestDelta: 1,
                            nextClosestMarkerIndex: -1
                        }
                    );
                    if (-1 === e) return;
                    this.setState({ closestMarkerIndex: e }), (t = l[e]);
                } else (t = i + (r - i) * h), this.setState({ value: t }), this.handleMouseDown(e);
                null != s && s(t), null != a && a(t);
            }),
            S(this, 'handleKeyDown', (e) => {
                let { disabled: t, orientation: n, keyboardStep: r = 1 } = this.props;
                if (t) return;
                let { key: i } = e,
                    a = [],
                    s = [];
                switch (n) {
                    case 'horizontal':
                        (a = ['ArrowRight']), (s = ['ArrowLeft']);
                        break;
                    case 'vertical':
                        (a = ['ArrowUp']), (s = ['ArrowDown']);
                        break;
                    default:
                        (a = ['ArrowRight', 'ArrowUp']), (s = ['ArrowLeft', 'ArrowDown']);
                }
                s.includes(i) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r)) : a.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
            }),
            S(this, 'handleMouseDown', (e) => {
                var t, n;
                if (this.props.disabled) return;
                e.stopPropagation();
                let { current: r } = this.containerRef;
                if ((null == r || null === (t = r.ownerDocument) || void 0 === t || t.addEventListener('mousemove', this.handleMouseMove, !0), null == r || null === (n = r.ownerDocument) || void 0 === n || n.addEventListener('mouseup', this.handleMouseUp, !0), !(0, E.k)(r))) throw Error('[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element');
                this.setState({
                    x: e.clientX,
                    active: !0,
                    boundingRect: r.getBoundingClientRect(),
                    newClosestIndex: this.state.closestMarkerIndex
                });
            }),
            S(this, 'handleMouseUp', (e) => {
                e.stopPropagation(), this.reset();
                let { onValueChange: t, stickToMarkers: n } = this.props,
                    { newClosestIndex: r } = this.state;
                n && null != r
                    ? (null == t || t(this.state.sortedMarkers[r]),
                      this.setState({
                          newClosestIndex: null,
                          closestMarkerIndex: r
                      }))
                    : null == t || t(this.state.value),
                    this.setState({ active: !1 });
            }),
            S(this, 'handleMouseMove', (e) => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
            }),
            S(this, 'onFocus', () => {
                this.setState({ focused: !0 });
            }),
            S(this, 'onBlur', () => {
                this.setState({ focused: !1 });
            }),
            S(this, 'moveSmoothly', (e) => {
                let { minValue: t, maxValue: n, asValueChanges: r } = this.props,
                    { boundingRect: i } = this.state;
                if (null == i) return;
                let { left: a, right: s } = i,
                    o = n - t,
                    l = Math.min(Math.max(t + ((e.clientX - a) / (s - a)) * o, t), n);
                null == r || r(l), this.setState({ value: l });
            }),
            (this.state = {
                active: !1,
                focused: !1,
                ...A(e)
            });
    }
}
function R(e) {
    let { active: t, keyboardFocused: n, children: r } = e,
        i = (0, m.Q)('Slider'),
        [a, s] = o.useState(!1),
        l = (0, f.q)({
            '--grabber-size': n || t || a ? '20px' : '16px',
            '--bar-size': n || t || a ? '6px' : '4px',
            config: {
                ..._.config.stiff,
                duration: 100
            }
        });
    return i
        ? r({
              sliderStyles: l,
              setHovered: s
          })
        : r();
}
S(N, 'defaultProps', {
    initialValue: 10,
    minValue: 0,
    maxValue: 100,
    keyboardStep: 1,
    handleSize: 10,
    disabled: !1,
    stickToMarkers: !1,
    fillStyles: {}
});
