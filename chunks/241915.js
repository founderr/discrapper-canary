n.d(t, {
    _: function () {
        return y;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    u = n(995295),
    c = n(347469),
    d = n(689425),
    f = n(358085),
    _ = n(981631),
    p = n(354459),
    h = n(844233);
function m(e, t, n) {
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
let g = 80,
    E = 132,
    v = 80,
    I = {
        [_.VD2.TOP_RIGHT]: h.resizeHandleTopRight,
        [_.VD2.TOP_LEFT]: h.resizeHandleTopLeft,
        [_.VD2.BOTTOM_LEFT]: h.resizeHandleBottomLeft,
        [_.VD2.BOTTOM_RIGHT]: h.resizeHandleBottomRight
    },
    b = {
        [_.VD2.TOP_RIGHT]: c.y.HORIZONTAL_LEFT,
        [_.VD2.TOP_LEFT]: c.y.HORIZONTAL_RIGHT,
        [_.VD2.BOTTOM_LEFT]: c.y.HORIZONTAL_RIGHT,
        [_.VD2.BOTTOM_RIGHT]: c.y.HORIZONTAL_LEFT
    };
function T(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function S(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, resizeConfig: s, position: l } = e,
        u = (0, c.Z)({
            minDimension: s.minWidth,
            maxDimension: s.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: b[l],
            usePointerEvents: !0
        }),
        d = a.useCallback(
            (e) => {
                e.stopPropagation(), u(e);
            },
            [u]
        );
    return (0, i.jsx)('div', {
        onMouseDown: d,
        className: o()(h.resizeHandle, I[l])
    });
}
class y extends (r = a.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            var t, n;
            let r = null !== (n = null !== (t = this._width) && void 0 !== t ? t : e.width) && void 0 !== n ? n : this.props.width;
            (this._width = this.props.width), null != this._innerDivRef.current && (Math.abs(r - this._width) > 40 && (this._innerDivRef.current.style.transition = 'none'), (this._innerDivRef.current.style.width = ''.concat(this.props.width, 'px')));
        }
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        var e;
        null === (e = this._resizeObserver) || void 0 === e || e.disconnect();
    }
    getPosition(e) {
        let t = (0, u.findDOMNode)(this._innerDivRef.current);
        if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
        }
        let { edgeOffsetTop: n, edgeOffsetLeft: r, edgeOffsetBottom: i, edgeOffsetRight: a, maxX: s, maxY: o, dockedRect: l } = this.props,
            c = Math.round(n),
            d = Math.round(o - i - this._boundHeight),
            p = Math.round(r),
            h = Math.round(s - a - this._boundWidth),
            m = (0, f.getPlatform)() !== f.PlatformTypes.WEB && this.inPopout ? 22 : 0;
        if (null != l) {
            var g, E;
            return {
                y: (null !== (g = null == l ? void 0 : l.y) && void 0 !== g ? g : 0) - m,
                x: null !== (E = null == l ? void 0 : l.x) && void 0 !== E ? E : 0
            };
        }
        switch (e) {
            case _.VD2.TOP_LEFT:
                return {
                    y: c,
                    x: p
                };
            case _.VD2.BOTTOM_LEFT:
                return {
                    y: d,
                    x: p
                };
            case _.VD2.TOP_RIGHT:
                return {
                    y: c,
                    x: h
                };
            default:
                return {
                    y: d,
                    x: h
                };
        }
    }
    setPosition(e) {
        var t;
        let { x: n, y: r } = this.getPosition(e);
        null === (t = this._draggable) || void 0 === t || t.setPosition(n, r);
    }
    animateToPosition(e, t) {
        var n;
        let { x: r, y: i } = this.getPosition(e);
        null === (n = this._draggable) || void 0 === n || n.animateToPosition(r, i, {}, t);
    }
    calculateDecayingPosition(e, t, n, r) {
        return {
            x: e + 200 * n,
            y: t + 200 * r
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case _.VD2.TOP_LEFT:
            case _.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case _.VD2.TOP_LEFT:
            case _.VD2.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null !== (t = null !== (e = this._width) && void 0 !== e ? e : n) && void 0 !== t ? t : p.l8[p.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === _.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: t, dockedRect: n, hidden: r, roundCorners: a, className: s, position: l, resizeConfig: u } = this.props,
            c = this.getWidth(),
            f = {};
        return (
            null != n
                ? (f = {
                      transform: 'translate3d('.concat(n.x, ', ').concat(n.y, ', 0)'),
                      width: n.width,
                      height: n.height
                  })
                : null != u &&
                  (f = {
                      width: c,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, i.jsxs)(d.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: o()(h.pictureInPictureWindow, s, {
                    [h.hidden]: r,
                    [h.borderRadius]: a
                }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)('div', {
                        ref: this.handleSetInnerDivRef,
                        style: f,
                        children: this.props.children
                    }),
                    null != u
                        ? (0, i.jsx)(S, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: u,
                              position: l
                          })
                        : null
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { isResizing: !1 }),
            m(this, '_draggable', void 0),
            m(this, '_innerDivRef', a.createRef()),
            m(this, '_resizeObserver', void 0),
            m(this, '_width', null),
            m(this, '_boundWidth', 0),
            m(this, '_boundHeight', 0),
            m(this, '_velocityX', 0),
            m(this, '_velocityY', 0),
            m(this, '_lastMoveTime', void 0),
            m(this, '_lastMoveX', 0),
            m(this, '_lastMoveY', 0),
            m(this, 'ensureIsInPosition', () => {
                this.setPosition(this.props.position);
            }),
            m(this, 'ensureWidth', () => {
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, resizeConfig: i } = this.props;
                if (null == i) return;
                let a = T(r - (t + n), i);
                this.getWidth() > a && ((this._width = a), null == e || e(a));
            }),
            m(this, 'handleSetInnerDivRef', (e) => {
                this._innerDivRef.current = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    (this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition)), null === (n = this._resizeObserver) || void 0 === n || n.observe(e);
                }
            }),
            m(this, 'handleSetDraggableRef', (e) => {
                this._draggable = e;
            }),
            m(this, 'handleResize', (e) => {
                (this._width = e), !this.state.isResizing && this.setState({ isResizing: !0 });
            }),
            m(this, 'handleResizeEnd', (e) => {
                let { onResize: t, resizeConfig: n } = this.props;
                if (null == n) return;
                let r = T(e, n);
                (this._width = r), null == t || t(r), this.setState({ isResizing: !1 }), this.ensureWidth();
            }),
            m(this, 'handleDragStart', (e, t) => {
                (this._velocityX = 0), (this._velocityY = 0), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = new Date());
            }),
            m(this, 'handleDrag', (e, t) => {
                let n = new Date(),
                    r = Number(n) - Number(this._lastMoveTime);
                0 !== r && ((this._velocityX = (e - this._lastMoveX) / r), (this._velocityY = (t - this._lastMoveY) / r), (this._lastMoveX = e), (this._lastMoveY = t), (this._lastMoveTime = n));
            }),
            m(this, 'handleDragEnd', (e, t) => {
                let n;
                let { maxX: r, maxY: i } = this.props,
                    a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
                    s = !0,
                    o = !0;
                if ((a.x > r / 2 && (o = !1), a.y > i / 2 && (s = !1), (n = s && o ? _.VD2.TOP_LEFT : s && !o ? _.VD2.TOP_RIGHT : !s && o ? _.VD2.BOTTOM_LEFT : _.VD2.BOTTOM_RIGHT), this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position)) {
                    let { id: e, onMove: t } = this.props;
                    null == t || t(e, n);
                }
            });
    }
}
m(y, 'defaultProps', {
    hidden: !1,
    roundCorners: !0
});
t.Z = a.memo((e) => {
    let { selectedPIPWindow: t, pipWindows: n, pipWidth: r, maxX: a, maxY: s, onWindowMove: o, onWindowResize: l, dockedRect: u, pictureInPictureComponents: c, appContext: d, roundCorners: f, resizeConfig: p } = e;
    return (0, i.jsx)('div', {
        className: h.pictureInPicture,
        children: (() => {
            if (null == t) return null;
            let e = n.map((e) => {
                    if (e.id !== t.id && e.component !== _.NYg.EMBED_IFRAME) return null;
                    let n = 'string' == typeof e.component ? c[e.component] : e.component;
                    return (0, i.jsx)(
                        n,
                        {
                            width: r,
                            ...e.props
                        },
                        e.id
                    );
                }),
                h = n.some((e) => e.component === _.NYg.EMBED_IFRAME);
            return (0, i.jsx)(y, {
                appContext: d,
                position: t.position,
                id: t.id,
                hidden: t.hidden,
                onMove: o,
                onResize: l,
                maxX: a,
                maxY: s,
                width: r,
                dockedRect: u,
                edgeOffsetTop: g,
                edgeOffsetBottom: E,
                edgeOffsetLeft: v,
                edgeOffsetRight: g,
                roundCorners: f,
                resizeConfig: h ? void 0 : p,
                children: e
            });
        })()
    });
});
