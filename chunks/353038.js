n.d(t, {
    B: function () {
        return i;
    },
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(411104);
var i,
    r,
    l,
    o = n(200651),
    a = n(192379),
    s = n(120356),
    u = n.n(s),
    c = n(100621),
    d = n(902704),
    h = n(585483),
    f = n(434529),
    p = n(981631),
    m = n(26437);
function E(e, t, n) {
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
let v = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
((l = i || (i = {})).MOVE = 'MOVE'), (l.RESIZE_NORTH = 'RESIZE_NORTH'), (l.RESIZE_WEST = 'RESIZE_WEST'), (l.RESIZE_EAST = 'RESIZE_EAST'), (l.RESIZE_SOUTH = 'RESIZE_SOUTH'), (l.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (l.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (l.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (l.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let g = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function _(e, t, n) {
    let { width: i, height: r } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === r ? 'auto' : Math.max(n, r)
    };
}
function C(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        null == n && null == r && (n = 0),
        null != n && null != r && (r = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function S(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function I(e, t) {
    let n = 0,
        i = 0;
    return (
        (n = 'auto' === t.width ? (null != e ? e.clientWidth : 0) : t.width),
        {
            width: n,
            height: (i = 'auto' === t.height ? (null != e ? e.clientHeight : 0) : t.height)
        }
    );
}
function Z(e, t) {
    let { top: n, left: i, bottom: r, right: l } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: r,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: r,
                right: l,
                left: void 0,
                top: void 0
            };
        case 'RESIZE_SOUTH_EAST':
            return {
                top: n,
                left: i,
                bottom: void 0,
                right: void 0
            };
        case 'RESIZE_SOUTH':
        case 'RESIZE_SOUTH_WEST':
            return {
                top: n,
                right: l,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
function N(e) {
    let { computedSize: t } = e;
    return t;
}
class x extends (r = a.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(t, this.state) || !(0, d.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, d.Z)(e.anchor, this.props.anchor) || !(0, d.Z)(e.size, this.props.size) || !(0, d.Z)(e.minSize, this.props.minSize) || !(0, d.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(C(this.props.anchor)), this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)), h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == t.operation && (!(0, d.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(C(this.props.anchor)), !(0, d.Z)(this.props.size, e.size) && this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd(), h.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    handleResizeMouseDown(e, t) {
        let { clientX: n, clientY: i } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i);
    }
    handleDragMove(e, t) {
        let {
            ref: { current: n },
            props: {
                id: i,
                container: { maxX: r, maxY: l, minX: o, minY: a },
                onDragStart: s,
                onDrag: u,
                snapOrientation: c = !0
            },
            dragState: { offsetX: d, offsetY: h },
            state: { operationStarted: p }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), o)), (t = Math.max(Math.min(l, t), a));
        let { width: m, height: E } = I(n, this.size),
            v = t - h,
            g = e - d,
            _ = (0, f.ou)(
                (0, f.PY)(
                    {
                        top: v,
                        left: g,
                        bottom: void 0,
                        right: void 0
                    },
                    r,
                    l,
                    m,
                    E
                )
            ),
            C = c ? (0, f.R)(_) : Z('RESIZE_SOUTH_EAST', _);
        this.setDOMPositions(C),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != C.top,
                    anchorLeftOverride: null != C.left
                },
                () => {
                    !p && null != s && s(), null != u && u(i, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: l, minX: o, minY: a },
                    onDragStart: s,
                    onDrag: u,
                    resizeValidation: c = N
                },
                state: { operation: h, operationStarted: p }
            } = this,
            { startX: m, startY: E } = this.dragState,
            v = 0,
            g = 0;
        if (null == h) return;
        switch (((e = Math.max(Math.min(r, e), o)), (t = Math.max(Math.min(l, t), a)), h)) {
            case 'RESIZE_EAST':
            case 'RESIZE_SOUTH_EAST':
            case 'RESIZE_NORTH_EAST':
                v -= m - e;
                break;
            case 'RESIZE_WEST':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_NORTH_WEST':
                v += m - e;
        }
        switch (h) {
            case 'RESIZE_SOUTH':
            case 'RESIZE_SOUTH_WEST':
            case 'RESIZE_SOUTH_EAST':
                g -= E - t;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                g += E - t;
        }
        let _ = c({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + v, i.width),
                    height: Math.max(this.dragState.offsetHeight + g, i.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            C = (0, f.BL)((0, f.ou)((0, f.PY)(this.dragState.dragOrientedCoords, r, l, _.width, _.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(_, !0), !(0, d.Z)(C, this.dragState.dragOrientedCoords) && ((this.dragState.dragOrientedCoords = C), this.setDOMPositions(this.dragState.dragOrientedCoords)), !p && (null != s && s(), this.setState({ operationStarted: !0 })), null != u && u(n, h, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            { current: l } = this.ref;
        if (
            ((this.anchor = {
                top: t,
                left: n,
                bottom: i,
                right: r
            }),
            null != l)
        )
            (l.style.top = S(t)), (l.style.bottom = S(i)), (l.style.left = S(n)), (l.style.right = S(r));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: r } = this.ref;
        if (
            ((t = 'auto' !== this.size.width || i ? t : 'auto'),
            (n = 'auto' !== this.size.height || i ? n : 'auto'),
            (this.size = {
                width: t,
                height: n
            }),
            null != r)
        )
            (r.style.width = S(t)), (r.style.height = S(n));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                e
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeNorth, { [m.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeSouth, { [m.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeEast, { [m.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeWest, { [m.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeNorthWest, { [m.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeNorthEast, { [m.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeSouthWest, { [m.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, o.jsx)('div', {
                                  className: u()(m.resizeSouthEast, { [m.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_EAST')
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    renderExtras() {
        let {
                props: { renderExtras: e, anchor: t },
                setLockExtras: n
            } = this,
            i = null == e ? void 0 : e(n);
        return null != i
            ? (0, o.jsx)('div', {
                  className: u()({
                      [m.extras]: !0,
                      [m.extrasBottomOriented]: null != t.bottom,
                      [m.extrasRightOriented]: null != t.right
                  }),
                  children: i
              })
            : null;
    }
    getInlineStyles() {
        let {
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: r = 2, borderRadius: l = 12 },
            state: { operation: o }
        } = this;
        return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: r,
            padding: i,
            borderRadius: l + r + i,
            zIndex: null != o ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: r },
            size: l,
            anchor: o,
            setLockExtras: a,
            state: { anchorTopOverride: s, anchorLeftOverride: u }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != s ? s : null != o.top,
            anchorLeft: null != u ? u : null != o.left,
            size: l,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: r,
            hidden: t
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n },
            state: { operationStarted: i, lockExtras: r }
        } = this;
        return (0, o.jsxs)(c.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()({
                [m.wrapper]: !0,
                [m.operation]: i,
                [m.unlocked]: !n,
                [m.lockExtras]: r
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        });
    }
    constructor(e) {
        super(e),
            E(this, 'anchor', void 0),
            E(this, 'size', void 0),
            E(this, 'ref', a.createRef()),
            E(this, 'dragState', {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0,
                dragOrientedCoords: {
                    top: 0,
                    left: 0
                }
            }),
            E(this, 'state', {
                lockExtras: !1,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            E(this, 'handleShowUI', (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            E(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === p.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            E(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: l, operationStarted: o }
                    } = this;
                if (!(null == l || (!o && 3 > v(i, r, t, n)))) 'MOVE' === l ? this.handleDragMove(t, n) : g.has(l) && this.handleResizeMove(t, n);
            }),
            E(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: r,
                        active: l,
                        container: { maxX: o, maxY: a }
                    }
                } = this;
                if (null == i || !l) return;
                let { width: s, height: u } = I(i, this.size),
                    c = (0, f.PY)(this.anchor, o, a, s, u);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(c);
                    this.dragState = {
                        ...this.dragState,
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    };
                } else {
                    let i = Z(e, c);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: s,
                            offsetHeight: u,
                            dragOrientedCoords: i
                        });
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1
                    },
                    () => {
                        r.addEventListener('mousemove', this.handleMouseMove), r.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            E(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let r = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, I(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: r } = I(this.ref.current, this.size),
                        l = (0, f.PY)(this.anchor, e, t, n, r),
                        o = (0, f.R)(l);
                    this.setDOMPositions(o),
                        this.setDOMSize({
                            width: n,
                            height: r
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    r
                );
            }),
            E(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = _(e.size, e.minSize.width, e.minSize.height));
    }
}
E(x, 'Operations', i);
