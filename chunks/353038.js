n.d(t, {
    B: function () {
        return i;
    },
    Z: function () {
        return O;
    }
}),
    n(47120),
    n(411104);
var i,
    l,
    o,
    r = n(200651),
    s = n(192379),
    a = n(120356),
    u = n.n(a),
    d = n(752877),
    c = n(902704),
    h = n(585483),
    f = n(434529),
    p = n(981631),
    m = n(706446);
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
let v = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
((o = i || (i = {})).MOVE = 'MOVE'), (o.RESIZE_NORTH = 'RESIZE_NORTH'), (o.RESIZE_WEST = 'RESIZE_WEST'), (o.RESIZE_EAST = 'RESIZE_EAST'), (o.RESIZE_SOUTH = 'RESIZE_SOUTH'), (o.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (o.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (o.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (o.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let E = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function Z(e, t, n) {
    let { width: i, height: l } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === l ? 'auto' : Math.max(n, l)
    };
}
function C(e) {
    let { top: t, left: n, bottom: i, right: l } = e;
    return (
        null == n && null == l && (n = 0),
        null != n && null != l && (l = void 0),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = void 0),
        {
            top: t,
            left: n,
            bottom: i,
            right: l
        }
    );
}
function x(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function S(e, t) {
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
function I(e, t) {
    let { top: n, left: i, bottom: l, right: o } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: l,
                left: i,
                right: void 0,
                top: void 0
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: l,
                right: o,
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
                right: o,
                bottom: void 0,
                left: void 0
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
function _(e) {
    let { computedSize: t } = e;
    return t;
}
class O extends (l = s.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container);
    }
    componentDidMount() {
        this.setDOMPositions(C(this.props.anchor)), this.setDOMSize(Z(this.props.size, this.props.minSize.width, this.props.minSize.height)), h.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI);
    }
    componentDidUpdate(e, t) {
        null == t.operation && (!(0, c.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(C(this.props.anchor)), !(0, c.Z)(this.props.size, e.size) && this.setDOMSize(Z(this.props.size, this.props.minSize.width, this.props.minSize.height)));
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
                container: { maxX: l, maxY: o, minX: r, minY: s },
                onDragStart: a,
                onDrag: u,
                snapOrientation: d = !0
            },
            dragState: { offsetX: c, offsetY: h },
            state: { operationStarted: p }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(l, e), r)), (t = Math.max(Math.min(o, t), s));
        let { width: m, height: g } = S(n, this.size),
            v = t - h,
            E = e - c,
            Z = (0, f.ou)(
                (0, f.PY)(
                    {
                        top: v,
                        left: E,
                        bottom: void 0,
                        right: void 0
                    },
                    l,
                    o,
                    m,
                    g
                )
            ),
            C = d ? (0, f.R)(Z) : I('RESIZE_SOUTH_EAST', Z);
        this.setDOMPositions(C),
            this.setState(
                {
                    operationStarted: !0,
                    anchorTopOverride: null != C.top,
                    anchorLeftOverride: null != C.left
                },
                () => {
                    !p && null != a && a(), null != u && u(i, 'MOVE', this.anchor, this.size);
                }
            );
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: l, maxY: o, minX: r, minY: s },
                    onDragStart: a,
                    onDrag: u,
                    resizeValidation: d = _
                },
                state: { operation: h, operationStarted: p }
            } = this,
            { startX: m, startY: g } = this.dragState,
            v = 0,
            E = 0;
        if (null == h) return;
        switch (((e = Math.max(Math.min(l, e), r)), (t = Math.max(Math.min(o, t), s)), h)) {
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
                E -= g - t;
                break;
            case 'RESIZE_NORTH':
            case 'RESIZE_NORTH_WEST':
            case 'RESIZE_NORTH_EAST':
                E += g - t;
        }
        let Z = d({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + v, i.width),
                    height: Math.max(this.dragState.offsetHeight + E, i.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            C = (0, f.BL)((0, f.ou)((0, f.PY)(this.dragState.dragOrientedCoords, l, o, Z.width, Z.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize(Z, !0), !(0, c.Z)(C, this.dragState.dragOrientedCoords) && ((this.dragState.dragOrientedCoords = C), this.setDOMPositions(this.dragState.dragOrientedCoords)), !p && (null != a && a(), this.setState({ operationStarted: !0 })), null != u && u(n, h, this.anchor, this.size);
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: l } = e,
            { current: o } = this.ref;
        if (
            ((this.anchor = {
                top: t,
                left: n,
                bottom: i,
                right: l
            }),
            null != o)
        )
            (o.style.top = x(t)), (o.style.bottom = x(i)), (o.style.left = x(n)), (o.style.right = x(l));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { current: l } = this.ref;
        if (
            ((t = 'auto' !== this.size.width || i ? t : 'auto'),
            (n = 'auto' !== this.size.height || i ? n : 'auto'),
            (this.size = {
                width: t,
                height: n
            }),
            null != l)
        )
            (l.style.width = x(t)), (l.style.height = x(n));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                e
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeNorth, { [m.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeSouth, { [m.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeEast, { [m.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeWest, { [m.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeNorthWest, { [m.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeNorthEast, { [m.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, r.jsx)('div', {
                                  className: u()(m.resizeSouthWest, { [m.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, r.jsx)('div', {
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
            ? (0, r.jsx)('div', {
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
            props: { hidden: e, style: t, minSize: n, padding: i = 8, borderWidth: l = 2, borderRadius: o = 12 },
            state: { operation: r }
        } = this;
        return {
            ...t,
            minWidth: n.width,
            minHeight: n.height,
            borderWidth: l,
            padding: i,
            borderRadius: o + l + i,
            zIndex: null != r ? 1000 : void 0,
            visibility: e ? 'hidden' : void 0
        };
    }
    renderChildren() {
        let {
            props: { children: e, hidden: t, padding: n = 8, borderWidth: i = 2, locked: l },
            size: o,
            anchor: r,
            setLockExtras: s,
            state: { anchorTopOverride: a, anchorLeftOverride: u }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != a ? a : null != r.top,
            anchorLeft: null != u ? u : null != r.left,
            size: o,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: l,
            hidden: t
        });
    }
    render() {
        let {
            props: { onClick: e, id: t, locked: n, className: i },
            state: { operationStarted: l, lockExtras: o }
        } = this;
        return (0, r.jsxs)(d.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: u()(
                {
                    [m.wrapper]: !0,
                    [m.operation]: l,
                    [m.unlocked]: !n,
                    [m.lockExtras]: o
                },
                i
            ),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        });
    }
    constructor(e) {
        super(e),
            g(this, 'anchor', void 0),
            g(this, 'size', void 0),
            g(this, 'ref', s.createRef()),
            g(this, 'dragState', {
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
            g(this, 'state', {
                lockExtras: !1,
                operation: null,
                operationStarted: !1,
                anchorTopOverride: void 0,
                anchorLeftOverride: void 0
            }),
            g(this, 'handleShowUI', (e) => {
                let { show: t } = e;
                this.setLockExtras(t);
            }),
            g(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === p.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            g(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: l },
                        state: { operation: o, operationStarted: r }
                    } = this;
                if (!(null == o || (!r && 3 > v(i, l, t, n)))) 'MOVE' === o ? this.handleDragMove(t, n) : E.has(o) && this.handleResizeMove(t, n);
            }),
            g(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        targetWindow: l,
                        active: o,
                        container: { maxX: r, maxY: s }
                    }
                } = this;
                if (null == i || !o) return;
                let { width: a, height: u } = S(i, this.size),
                    d = (0, f.PY)(this.anchor, r, s, a, u);
                if ('MOVE' === e) {
                    let { x: e, y: i } = (function (e) {
                        let { top: t, left: n } = e;
                        return {
                            x: n,
                            y: t
                        };
                    })(d);
                    this.dragState = {
                        ...this.dragState,
                        startX: t,
                        startY: n,
                        offsetX: t - e,
                        offsetY: n - i
                    };
                } else {
                    let i = I(e, d);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: a,
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
                        l.addEventListener('mousemove', this.handleMouseMove), l.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            g(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { targetWindow: n, onDragEnd: i } = this.props;
                n.removeEventListener('mousemove', this.handleMouseMove), n.removeEventListener('mouseup', this.handleOperationEnd);
                let l = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, S(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: n, height: l } = S(this.ref.current, this.size),
                        o = (0, f.PY)(this.anchor, e, t, n, l),
                        r = (0, f.R)(o);
                    this.setDOMPositions(r),
                        this.setDOMSize({
                            width: n,
                            height: l
                        }),
                        null != i && i();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    l
                );
            }),
            g(this, 'setLockExtras', (e) => {
                this.setState({ lockExtras: e });
            }),
            (this.anchor = C(e.anchor)),
            (this.size = Z(e.size, e.minSize.width, e.minSize.height));
    }
}
g(O, 'Operations', i);
