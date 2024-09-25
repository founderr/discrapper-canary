n.d(t, {
    j: function () {
        return D;
    },
    t: function () {
        return A;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(735250),
    s = n(470079),
    l = n(120356),
    u = n.n(l),
    c = n(512722),
    d = n.n(c),
    _ = n(84735),
    E = n(801787),
    f = n(663002),
    h = n(585483),
    p = n(872801),
    m = n(302901),
    I = n(981631),
    T = n(136753);
function g(e, t, n) {
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
let S = new WeakMap();
function A(e, t) {
    if (e.contains(t)) return !0;
    let n = (0, p.Z)(t, T.layer);
    for (; null != n; ) {
        let t = S.get(n);
        if (null == t) break;
        if (e.contains(t)) return !0;
        n = (0, p.Z)(t, T.layer);
    }
    return !1;
}
let v = 12;
function N(e) {
    let { positionKey: t, position: n, align: r } = e;
    return null != t ? t : ''.concat(n, ':').concat(r);
}
function O(e, t, n, r) {
    switch (e) {
        case 'top':
            return d()(null != t.bottom, 'Missing bottom'), r.offsetHeight - (t.bottom + n.offsetHeight);
        case 'bottom':
            return d()(null != t.top, 'Missing top'), r.offsetHeight - (t.top + n.offsetHeight);
        case 'left':
            return d()(null != t.right, 'Missing right'), r.offsetWidth - (t.right + n.offsetWidth);
        case 'right':
            return d()(null != t.left, 'Missing left'), r.offsetWidth - (t.left + n.offsetWidth);
        case 'center':
        case 'window_center':
            return d()(null != t.left, 'Missing left'), r.offsetWidth - (t.left + n.offsetWidth / 2);
        default:
            throw Error('Unexpected position: '.concat(e));
    }
}
function R(e, t, n) {
    return {
        top: e.top - n,
        left: e.left - t,
        bottom: e.bottom - n,
        right: e.right - t,
        width: e.width,
        height: e.height
    };
}
function C(e) {
    switch (e) {
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'center':
            return 'center';
        case 'window_center':
            return 'window_center';
        default:
            throw Error();
    }
}
function y(e, t, n) {
    if (null != e && e < 0 && ('top' === n.position || 'bottom' === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
        let t = 'top' === n.position ? 'bottom' : 'top',
            r = n.style[t];
        return {
            ...n,
            style: {
                ...n.style,
                [t]: (null == r ? 0 : r) + e
            }
        };
    }
    return n;
}
function b(e) {
    let { targetRef: t, overrideTargetRect: n } = e;
    return null != n ? n : (d()(null != t.current, 'Invalid ref'), t.current.getBoundingClientRect());
}
function L(e, t) {
    let n = b(e),
        r = b(t);
    return n.top === r.top && n.left === r.left;
}
class D extends (r = s.Component) {
    formatDimension(e) {
        return this.props.useRawTargetDimensions ? e : Math.ceil(e);
    }
    nudgeLeftAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        let i = n.offsetWidth,
            a = e + t.offsetWidth - i + v;
        return a > 0 ? Math.max(v, e - a) : e;
    }
    getHorizontalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'left': {
                let i = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                    a = this.formatDimension(e.left) - i;
                return {
                    style: {
                        ...r,
                        left: i
                    },
                    nudge: a
                };
            }
            case 'right': {
                let t = this.formatDimension(n.offsetWidth - e.right);
                return {
                    style: {
                        ...r,
                        right: t
                    },
                    nudge: 0
                };
            }
            case 'center': {
                let i = e.left + (e.width - t.offsetWidth) / 2,
                    a = this.formatDimension(this.nudgeLeftAlignment(i, t, n)),
                    o = this.formatDimension(i) - a;
                return {
                    style: {
                        ...r,
                        left: a
                    },
                    nudge: o
                };
            }
            default:
                throw Error('Unsupported align: '.concat(i));
        }
    }
    nudgeTopAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props;
        if (!r) return e;
        if (e < 0) return 0;
        let i = t.getBoundingClientRect().height,
            a = n.offsetHeight,
            o = e + i - a + v;
        return o > 0 ? Math.max(v, e - o) : e;
    }
    nudgeBottomAlignment(e, t, n) {
        let { nudgeAlignIntoViewport: r } = this.props,
            i = n.offsetHeight,
            a = i - e;
        if (!r) return a;
        let o = a + t.offsetHeight - i + v;
        return o > 0 ? Math.max(v, a - o) : a;
    }
    getVerticalAlignmentStyle(e, t, n, r) {
        let { align: i } = this.props;
        switch (i) {
            case 'top': {
                let i = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                    a = this.formatDimension(e.top) - i;
                return {
                    style: {
                        ...r,
                        top: i
                    },
                    nudge: a
                };
            }
            case 'bottom': {
                let i = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                    a = this.formatDimension(e.bottom) - i;
                return {
                    style: {
                        ...r,
                        bottom: i
                    },
                    nudge: a
                };
            }
            case 'center': {
                let i = e.top + (e.height - t.offsetHeight) / 2,
                    a = this.formatDimension(this.nudgeTopAlignment(i, t, n)),
                    o = this.formatDimension(i) - a;
                return {
                    style: {
                        ...r,
                        top: a
                    },
                    nudge: o
                };
            }
            default:
                throw Error('Unsupported align: '.concat(i));
        }
    }
    calculatePositionStyle(e, t, n) {
        let { spacing: r = 0 } = this.props,
            i = b(this.props),
            a = n.getBoundingClientRect(),
            o = R(i, a.left, a.top);
        switch (e) {
            case 'top':
                return this.getHorizontalAlignmentStyle(o, t, n, { bottom: n.offsetHeight - o.top + r });
            case 'bottom':
                return this.getHorizontalAlignmentStyle(o, t, n, { top: o.bottom + r });
            case 'left':
                return this.getVerticalAlignmentStyle(o, t, n, { right: n.offsetWidth - o.left + r });
            case 'right':
                return this.getVerticalAlignmentStyle(o, t, n, { left: o.right + r });
            case 'center':
                return this.getVerticalAlignmentStyle(o, t, n, { left: o.left + o.width / 2 - t.offsetWidth / 2 + r });
            case 'window_center':
                return this.getVerticalAlignmentStyle(o, t, n, { left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0) });
            default:
                throw Error('Unexpected position: '.concat(e));
        }
    }
    calculateState() {
        let { position: e, autoInvert: t } = this.props,
            n = this.elementRef.current;
        d()(null != n, 'Unexpected null element');
        let r = (0, m.wL)(n),
            { style: i, nudge: a } = this.calculatePositionStyle(e, n, r),
            o = null,
            s = null;
        if (t && (o = O(e, i, n, r)) < 0) {
            let t = C(e),
                { style: i, nudge: a } = this.calculatePositionStyle(t, n, r);
            if ((s = O(t, i, n, r)) > o)
                return y(s, n, {
                    position: t,
                    nudge: a,
                    style: i
                });
        }
        return y(o, n, {
            position: e,
            nudge: a,
            style: i
        });
    }
    componentDidMount() {
        var e, t;
        let { targetRef: n, onMount: r } = this.props;
        this.setState({
            isPositioned: !0,
            ...this.calculateState()
        });
        let i = this.elementRef.current;
        d()(null != i, 'Missing elementRef'), null != n.current && S.set(i, n.current), h.S.subscribe(I.CkL.LAYER_POP_START, this.handleLayerPopStart), h.S.subscribe(I.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null === (t = i.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener('resize', this.handleLayerPopComplete), null == r || r();
    }
    componentDidUpdate(e, t) {
        if (((N(e) !== N(this.props) || !L(e, this.props)) && this.updatePosition(), t.position !== this.state.position)) {
            var n, r;
            null === (n = (r = this.props).onPositionChange) || void 0 === n || n.call(r, this.state.position);
        }
    }
    componentWillUnmount() {
        var e, t, n, r;
        let i = this.elementRef.current;
        d()(null != i, 'Missing elementRef'), S.delete(i), h.S.unsubscribe(I.CkL.LAYER_POP_START, this.handleLayerPopStart), h.S.unsubscribe(I.CkL.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null === (t = i.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener('resize', this.handleLayerPopComplete), null === (n = (r = this.props).onUnmount) || void 0 === n || n.call(r);
    }
    render() {
        let { id: e, className: t, children: n, fixed: r, disablePointerEvents: i } = this.props,
            { position: a, isPositioned: s, isSettingsLayerTransitioning: l, nudge: c } = this.state;
        return (0, o.jsx)(E.C1, {
            children: (d) => {
                let { theme: E } = d;
                return (0, o.jsx)('div', {
                    id: e,
                    className: u()(t, (0, f.Qe)(E), T.layer, {
                        [T.emptyError]: !1,
                        [T.layerHidden]: l,
                        [T.disabledPointerEvents]: i
                    }),
                    style: {
                        position: r ? 'fixed' : 'absolute',
                        ...this.state.style
                    },
                    ref: this.elementRef,
                    children: (0, o.jsx)(_.J, {
                        containerRef: this.elementRef,
                        children: n(
                            {
                                position: a,
                                nudge: c,
                                isPositioned: s
                            },
                            this.updatePosition
                        )
                    })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'elementRef', s.createRef()),
            g(this, 'state', {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1
            }),
            g(this, 'handleLayerPopStart', () => {
                this.setState({ isSettingsLayerTransitioning: !0 });
            }),
            g(this, 'handleLayerPopComplete', () => {
                let e = this.calculateState();
                this.setState({
                    ...e,
                    isSettingsLayerTransitioning: !1
                });
            }),
            g(this, 'updatePosition', () => {
                this.setState(this.calculateState());
            });
    }
}
g(D, 'defaultProps', {
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    autoInvert: !1,
    disablePointerEvents: !1
});
