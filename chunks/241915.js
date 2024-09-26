n.d(t, {
    _: function () {
        return y;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711);
var c = n(699581),
    d = n(347469),
    _ = n(689425),
    E = n(358085),
    f = n(981631),
    h = n(354459),
    p = n(844233);
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
let I = 200,
    T = 22,
    g = 40,
    S = 80,
    A = 132,
    v = 80,
    N = {
        [f.VD2.TOP_RIGHT]: p.resizeHandleTopRight,
        [f.VD2.TOP_LEFT]: p.resizeHandleTopLeft,
        [f.VD2.BOTTOM_LEFT]: p.resizeHandleBottomLeft,
        [f.VD2.BOTTOM_RIGHT]: p.resizeHandleBottomRight
    },
    O = {
        [f.VD2.TOP_RIGHT]: d.y.HORIZONTAL_LEFT,
        [f.VD2.TOP_LEFT]: d.y.HORIZONTAL_RIGHT,
        [f.VD2.BOTTOM_LEFT]: d.y.HORIZONTAL_RIGHT,
        [f.VD2.BOTTOM_RIGHT]: d.y.HORIZONTAL_LEFT
    };
function R(e, t) {
    let n = Math.round(e / g) * g;
    return (0, u.clamp)(n, h.Rv[t], h.$i[t]);
}
function C(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r, pipType: i, position: s } = e,
        u = (0, d.Z)({
            minDimension: h.Rv[i],
            maxDimension: h.$i[i] + g / 2,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: O[s],
            usePointerEvents: !0
        }),
        c = o.useCallback(
            (e) => {
                e.stopPropagation(), u(e);
            },
            [u]
        );
    return (0, a.jsx)('div', {
        onMouseDown: c,
        className: l()(p.resizeHandle, N[s])
    });
}
class y extends (r = o.PureComponent) {
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        var e;
        null === (e = this._resizeObserver) || void 0 === e || e.disconnect();
    }
    getPosition(e) {
        let t = (0, c.findDOMNode)(this._innerDivRef.current);
        if (null != t) {
            let e = t.getBoundingClientRect();
            (this._boundWidth = e.width), (this._boundHeight = e.height);
        }
        let { edgeOffsetTop: n, edgeOffsetLeft: r, edgeOffsetBottom: i, edgeOffsetRight: a, maxX: o, maxY: s, dockedRect: l } = this.props,
            u = Math.round(n),
            d = Math.round(s - i - this._boundHeight),
            _ = Math.round(r),
            h = Math.round(o - a - this._boundWidth),
            p = (0, E.getPlatform)() !== E.PlatformTypes.WEB && this.inPopout ? T : 0;
        if (null != l) {
            var m, I;
            return {
                y: (null !== (m = null == l ? void 0 : l.y) && void 0 !== m ? m : 0) - p,
                x: null !== (I = null == l ? void 0 : l.x) && void 0 !== I ? I : 0
            };
        }
        switch (e) {
            case f.VD2.TOP_LEFT:
                return {
                    y: u,
                    x: _
                };
            case f.VD2.BOTTOM_LEFT:
                return {
                    y: d,
                    x: _
                };
            case f.VD2.TOP_RIGHT:
                return {
                    y: u,
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
            x: e + n * I,
            y: t + r * I
        };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case f.VD2.TOP_LEFT:
            case f.VD2.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case f.VD2.TOP_LEFT:
            case f.VD2.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        var e, t;
        let { width: n } = this.props;
        return null !== (t = null !== (e = this._width) && void 0 !== e ? e : n) && void 0 !== t ? t : h.l8[h.cL.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === f.IlC.POPOUT;
    }
    render() {
        let { maxX: e, maxY: t, dockedRect: n, hidden: r, roundCorners: i, className: o, position: s, type: u, isResizable: c = !1 } = this.props,
            d = this.getWidth(),
            E = {};
        return (
            null != n
                ? (E = {
                      transform: 'translate3d('.concat(n.x, ', ').concat(n.y, ', 0)'),
                      width: n.width,
                      height: n.height
                  })
                : c &&
                  (E = {
                      width: d,
                      transition: this.state.isResizing ? 'none' : 'width 0.2s ease-in-out'
                  }),
            (0, a.jsxs)(_.Z, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: l()(p.pictureInPictureWindow, o, {
                    [p.hidden]: r,
                    [p.borderRadius]: i
                }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, a.jsx)('div', {
                        ref: this.handleSetInnerDivRef,
                        style: E,
                        children: this.props.children
                    }),
                    c
                        ? (0, a.jsx)(C, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              pipType: u,
                              position: s
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
            m(this, '_innerDivRef', o.createRef()),
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
                let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: r, type: i, isResizable: a } = this.props;
                if (!a) return;
                let o = R(r - (t + n), i);
                this.getWidth() > o && ((this._width = o), null == e || e(o));
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
                let { onResize: t, type: n } = this.props,
                    r = R(e, n);
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
                    o = !0,
                    s = !0;
                if ((a.x > r / 2 && (s = !1), a.y > i / 2 && (o = !1), (n = o && s ? f.VD2.TOP_LEFT : o && !s ? f.VD2.TOP_RIGHT : !o && s ? f.VD2.BOTTOM_LEFT : f.VD2.BOTTOM_RIGHT), this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position)) {
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
let L = (e) => {
    let { selectedPIPWindow: t, pipWindows: n, pipType: r, pipWidth: i, maxX: o, maxY: s, onWindowMove: l, onWindowResize: u, dockedRect: c, pictureInPictureComponents: d, appContext: _, roundCorners: E } = e,
        h = () => {
            if (null == t) return null;
            let e = n.map((e) => {
                    if (e.id !== t.id && e.component !== f.NYg.EMBED_IFRAME) return null;
                    let n = 'string' == typeof e.component ? d[e.component] : e.component;
                    return (0, a.jsx)(
                        n,
                        {
                            width: i,
                            ...e.props
                        },
                        e.id
                    );
                }),
                h = n.some((e) => e.component === f.NYg.EMBED_IFRAME);
            return (0, a.jsx)(y, {
                appContext: _,
                position: t.position,
                id: t.id,
                type: r,
                hidden: t.hidden,
                onMove: l,
                onResize: u,
                maxX: o,
                maxY: s,
                width: i,
                dockedRect: c,
                edgeOffsetTop: S,
                edgeOffsetBottom: A,
                edgeOffsetLeft: v,
                edgeOffsetRight: S,
                roundCorners: E,
                isResizable: !h,
                children: e
            });
        };
    return (0, a.jsx)('div', {
        className: p.pictureInPicture,
        children: h()
    });
};
t.Z = o.memo(L);
