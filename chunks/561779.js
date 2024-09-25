n.d(t, {
    i: function () {
        return A;
    }
});
var r,
    i,
    a = n(724458);
var o = n(411104);
var s = n(735250),
    l = n(470079),
    u = n(120356),
    c = n.n(u),
    d = n(392711),
    _ = n.n(d),
    E = n(374470),
    f = n(84735),
    h = n(981729),
    p = n(607070),
    m = n(752325);
function I(e, t, n) {
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
function T(e, t) {
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
function g(e) {
    let { markers: t, initialValue: n, minValue: r, maxValue: i, equidistant: a } = e,
        o = [],
        s = [];
    if (null == t)
        return {
            min: r,
            max: i,
            range: i - r,
            sortedMarkers: o,
            markerPositions: s
        };
    let l = T(n, (o = t.sort((e, t) => e - t))),
        u = o[0],
        c = o[o.length - 1],
        d = c - u;
    if (a) {
        let e = 100 / (o.length - 1);
        s = o.map((t, n) => n * e);
    } else {
        let e = (e) => (100 * (e - u)) / d;
        s = o.map((t) => e(t));
    }
    return {
        min: u,
        max: c,
        range: d,
        sortedMarkers: o,
        markerPositions: s,
        closestMarkerIndex: l
    };
}
function S(e) {
    return {
        value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
        initialValueProp: e.initialValue,
        newClosestIndex: null,
        ...g(e)
    };
}
!(function (e) {
    (e[(e.ABOVE = 0)] = 'ABOVE'), (e[(e.BELOW = 1)] = 'BELOW');
})(r || (r = {}));
class A extends (i = l.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.initialValue !== t.initialValueProp
            ? {
                  ...S(e),
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
        let { value: t, active: n, focused: r, sortedMarkers: i, markerPositions: a, closestMarkerIndex: o, newClosestIndex: l, min: u, max: d } = this.state,
            { disabled: _, stickToMarkers: E, className: I, children: T, barStyles: g, fillStyles: S, mini: A, hideBubble: v, defaultValue: N, orientation: O, onValueRender: R, renderMarker: C, getAriaValueText: y, barClassName: b, grabberClassName: L, grabberStyles: D = {}, markerPosition: M = 0, 'aria-hidden': P, 'aria-label': U, 'aria-labelledby': w, 'aria-describedby': x } = this.props,
            G = 0;
        E ? null != a && (null != l ? (G = a[l]) : null != o && (G = a[o])) : (G = this.scaleValue(t));
        let k = ''.concat(G, '%'),
            B =
                null != a && null != i
                    ? a.map((e, t) => {
                          let n = i[t],
                              r = null != N && N === n,
                              a = this.renderMark(n);
                          return (0, s.jsx)(
                              'div',
                              {
                                  className: c()(m.mark, {
                                      [m.defaultValue]: r,
                                      [m.markAbove]: 0 === M,
                                      [m.markBelow]: 1 === M
                                  }),
                                  style: { left: ''.concat(e, '%') },
                                  children:
                                      null != C
                                          ? C(n)
                                          : (0, s.jsxs)(s.Fragment, {
                                                children: [
                                                    (0, s.jsx)('div', {
                                                        className: m.markValue,
                                                        children: a
                                                    }),
                                                    (0, s.jsx)('div', { className: m['markDash'.concat(null == a ? 'simple' : '')] })
                                                ]
                                            })
                              },
                              t
                          );
                      })
                    : null,
            F = null != R ? R(t) : ''.concat(G.toFixed(0), '%'),
            Z = null !== (e = null == y ? void 0 : y(t)) && void 0 !== e ? e : void 0;
        return (0, s.jsx)(f.t, {
            focusTarget: this.containerRef,
            ringTarget: this.grabberRef,
            children: (0, s.jsxs)('div', {
                className: c()(m.slider, I, {
                    [m.disabled]: _,
                    [m.mini]: A
                }),
                'aria-valuemin': u,
                'aria-valuemax': d,
                'aria-valuenow': t,
                'aria-disabled': _,
                'aria-orientation': O,
                'aria-hidden': P,
                'aria-label': U,
                'aria-labelledby': w,
                'aria-describedby': x,
                'aria-valuetext': Z,
                role: 'slider',
                tabIndex: 0,
                onKeyDown: this.handleKeyDown,
                onMouseDown: this.handleContainerMouseDown,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                ref: this.containerRef,
                children: [
                    (0, s.jsx)('div', {
                        className: m.track,
                        children: B
                    }),
                    (0, s.jsx)('div', {
                        className: c()(m.bar, b),
                        style: g,
                        children: (0, s.jsx)('div', {
                            className: m.barFill,
                            style: {
                                ...S,
                                width: k
                            }
                        })
                    }),
                    T,
                    (0, s.jsx)('div', {
                        className: m.track,
                        children: (0, s.jsx)(h.u, {
                            color: h.u.Colors.GREY,
                            hideOnClick: !1,
                            text: v || E ? null : F,
                            forceOpen: n || (r && p.Z.keyboardModeEnabled),
                            children: (e) =>
                                (0, s.jsx)('div', {
                                    ...e,
                                    className: c()(m.grabber, L),
                                    style: {
                                        ...D,
                                        left: k
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
        let { boundingRect: n, x: r = 0, closestMarkerIndex: i, markerPositions: a, sortedMarkers: o } = this.state,
            { asValueChanges: s } = this.props;
        if (null == n) return;
        let { left: l, right: u } = n;
        if (e.clientX <= l || e.clientX >= u) return;
        let c = u - l,
            d = (e.clientX - r) / c,
            _ = a[i] + 100 * d;
        null != (t = this.props.equidistant ? T(_, a) : T(this.unscaleValue(_), o)) && (null == s || s(o[t])), this.setState({ newClosestIndex: t });
    }
    constructor(e) {
        super(e),
            I(this, 'containerRef', l.createRef()),
            I(this, 'grabberRef', l.createRef()),
            I(this, 'moveGrabber', (e) => {
                let { sortedMarkers: t, value: n, min: r, max: i } = this.state,
                    { asValueChanges: a, onValueChange: o, stickToMarkers: s } = this.props,
                    l = {};
                if (s) {
                    let r = t.indexOf(n);
                    if (r < 0) return;
                    let i = r + e,
                        a = t[i];
                    if (null == a) return;
                    (l.value = a), (l.closestMarkerIndex = i), (l.newClosestIndex = i);
                } else l.value = _().clamp(n + e, r, i);
                this.setState(l), l.value !== this.state.value && (null == a || a(l.value), null == o || o(l.value));
            }),
            I(this, 'handleContainerMouseDown', (e) => {
                let t;
                let { disabled: n, maxValue: r, minValue: i, asValueChanges: a, onValueChange: o, stickToMarkers: s } = this.props,
                    { sortedMarkers: l, markerPositions: u } = this.state;
                if (n) return;
                let { clientX: c, currentTarget: d } = e;
                if (!(0, E.k)(d)) return;
                let { left: _, width: f } = d.getBoundingClientRect(),
                    h = (c - _) / f;
                if (s) {
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
                } else {
                    let n = r - i;
                    (t = i + n * h), this.setState({ value: t }), this.handleMouseDown(e);
                }
                null != o && o(t), null != a && a(t);
            }),
            I(this, 'handleKeyDown', (e) => {
                let { disabled: t, orientation: n, keyboardStep: r = 1 } = this.props;
                if (t) return;
                let { key: i } = e,
                    a = [],
                    o = [];
                switch (n) {
                    case 'horizontal':
                        (a = ['ArrowRight']), (o = ['ArrowLeft']);
                        break;
                    case 'vertical':
                        (a = ['ArrowUp']), (o = ['ArrowDown']);
                        break;
                    default:
                        (a = ['ArrowRight', 'ArrowUp']), (o = ['ArrowLeft', 'ArrowDown']);
                }
                o.includes(i) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r)) : a.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r));
            }),
            I(this, 'handleMouseDown', (e) => {
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
            I(this, 'handleMouseUp', (e) => {
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
            I(this, 'handleMouseMove', (e) => {
                e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e);
            }),
            I(this, 'onFocus', () => {
                this.setState({ focused: !0 });
            }),
            I(this, 'onBlur', () => {
                this.setState({ focused: !1 });
            }),
            I(this, 'moveSmoothly', (e) => {
                let { minValue: t, maxValue: n, asValueChanges: r } = this.props,
                    { boundingRect: i } = this.state;
                if (null == i) return;
                let { left: a, right: o } = i,
                    s = n - t,
                    l = o - a,
                    u = Math.min(Math.max(t + ((e.clientX - a) / l) * s, t), n);
                null == r || r(u), this.setState({ value: u });
            }),
            (this.state = {
                active: !1,
                focused: !1,
                ...S(e)
            });
    }
}
I(A, 'defaultProps', {
    initialValue: 10,
    minValue: 0,
    maxValue: 100,
    keyboardStep: 1,
    handleSize: 10,
    disabled: !1,
    stickToMarkers: !1,
    fillStyles: {}
});
