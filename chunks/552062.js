n.d(t, {
    B: function () {
        return i;
    }
}),
    n(47120),
    n(411104);
var i,
    r,
    s,
    l = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(902704),
    u = n(434529),
    h = n(981631),
    p = n(242319);
function f(e, t, n) {
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
let m = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
((s = i || (i = {})).MOVE = 'MOVE'), (s.RESIZE_NORTH = 'RESIZE_NORTH'), (s.RESIZE_WEST = 'RESIZE_WEST'), (s.RESIZE_EAST = 'RESIZE_EAST'), (s.RESIZE_SOUTH = 'RESIZE_SOUTH'), (s.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (s.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (s.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (s.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let g = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function v(e, t, n) {
    let { width: i, height: r } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === r ? 'auto' : Math.max(n, r)
    };
}
function _(e) {
    let { top: t, left: n, bottom: i, right: r } = e;
    return (
        null == n && null == r && (n = 0),
        null != n && null != r && (r = null),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = null),
        {
            top: t,
            left: n,
            bottom: i,
            right: r
        }
    );
}
function E(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function x(e, t) {
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
    let { top: n, left: i, bottom: r, right: s } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: r,
                left: i,
                right: null,
                top: null
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: r,
                right: s,
                left: null,
                top: null
            };
        case 'RESIZE_SOUTH_EAST':
            return {
                top: n,
                left: i,
                bottom: null,
                right: null
            };
        case 'RESIZE_SOUTH':
        case 'RESIZE_SOUTH_WEST':
            return {
                top: n,
                right: s,
                bottom: null,
                left: null
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
class Z extends (r = a.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(t, this.state) || !(0, d.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, d.Z)(e.anchor, this.props.anchor) || !(0, d.Z)(e.size, this.props.size) || !(0, d.Z)(e.minSize, this.props.minSize) || !(0, d.Z)(e.container, this.props.container);
    }
    componentDidUpdate(e, t) {
        null == t.operation && (!(0, d.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(_(this.props.anchor)), !(0, d.Z)(this.props.size, e.size) && this.setDOMSize(v(this.props.size, this.props.minSize.width, this.props.minSize.height)));
    }
    componentWillUnmount() {
        this.handleOperationEnd();
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
                container: { maxX: r, maxY: s, minX: l, minY: a },
                onDragStart: o,
                onDrag: c,
                snapOrientation: d
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(s, t), a));
        let { width: m, height: g } = x(n, this.size),
            v = t - p,
            _ = e - h,
            E = (0, u.ou)(
                (0, u.PY)(
                    {
                        top: v,
                        left: _,
                        bottom: null,
                        right: null
                    },
                    r,
                    s,
                    m,
                    g
                )
            ),
            Z = d ? (0, u.R)(E) : I('RESIZE_SOUTH_EAST', E);
        this.setDOMPositions(Z), !f && (null != o && o(), this.setState({ operationStarted: !0 })), null != c && c(i, 'MOVE', this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: r, maxY: s, minX: l, minY: a },
                    onDragStart: o,
                    onDrag: c
                },
                state: { operation: d, operationStarted: u }
            } = this,
            { startX: h, startY: p, offsetWidth: f, offsetHeight: m } = this.dragState,
            g = 0,
            v = 0;
        if (null != d) {
            switch (((e = Math.max(Math.min(r, e), l)), (t = Math.max(Math.min(s, t), a)), d)) {
                case 'RESIZE_EAST':
                case 'RESIZE_SOUTH_EAST':
                case 'RESIZE_NORTH_EAST':
                    g -= h - e;
                    break;
                case 'RESIZE_WEST':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_NORTH_WEST':
                    g += h - e;
            }
            switch (d) {
                case 'RESIZE_SOUTH':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_SOUTH_EAST':
                    v -= p - t;
                    break;
                case 'RESIZE_NORTH':
                case 'RESIZE_NORTH_WEST':
                case 'RESIZE_NORTH_EAST':
                    v += p - t;
            }
            (f = Math.max(f + g, i.width)),
                (m = Math.max(m + v, i.height)),
                this.setDOMSize({
                    width: f,
                    height: m
                }),
                !u && (null != o && o(), this.setState({ operationStarted: !0 })),
                null != c && c(n, d, this.anchor, this.size);
        }
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: r } = e,
            { current: s } = this.ref;
        if (
            ((this.anchor = {
                top: t,
                left: n,
                bottom: i,
                right: r
            }),
            null != s)
        )
            (s.style.top = E(t)), (s.style.bottom = E(i)), (s.style.left = E(n)), (s.style.right = E(r));
    }
    setDOMSize(e) {
        let { width: t, height: n } = e,
            { current: i } = this.ref;
        if (
            ((t = 'auto' === this.size.width ? 'auto' : t),
            (n = 'auto' === this.size.height ? 'auto' : n),
            (this.size = {
                width: t,
                height: n
            }),
            null != i)
        )
            (i.style.width = E(t)), (i.style.height = E(n));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, l.jsxs)(a.Fragment, {
            children: [
                e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeNorth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeSouth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeEast, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeWest, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeNorthWest, { [p.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeNorthEast, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeSouthWest, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, l.jsx)('div', {
                                  className: c()(p.resizeSouthEast, { [p.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_EAST')
                              })
                          ]
                      })
                    : null
            ]
        });
    }
    render() {
        let {
            props: { children: e, hidden: t, onClick: n, id: i, style: r },
            size: s,
            anchor: a,
            state: { operation: o, operationStarted: d }
        } = this;
        return (0, l.jsxs)('div', {
            ref: this.ref,
            style: {
                ...a,
                ...s,
                ...r,
                ...(null != o ? { zIndex: 1000 } : void 0),
                ...(t ? { visibility: 'hidden' } : void 0)
            },
            className: c()({
                [p.wrapper]: !0,
                [p.operation]: d
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != n ? () => n(i) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()]
        });
    }
    constructor(e) {
        super(e),
            f(this, 'anchor', void 0),
            f(this, 'size', void 0),
            f(this, 'ref', a.createRef()),
            f(this, 'dragState', {
                startX: 0,
                startY: 0,
                offsetX: 0,
                offsetY: 0,
                offsetWidth: 0,
                offsetHeight: 0
            }),
            f(this, 'state', {
                operation: null,
                operationStarted: !1
            }),
            f(this, 'handleMouseDown', (e) => {
                e.stopPropagation();
                let { dragAnywhere: t } = this.props,
                    { current: n } = this.ref;
                null != n && e.button === h.AeJ.PRIMARY && t && this.handleOperationStart('MOVE', e.clientX, e.clientY);
            }),
            f(this, 'handleMouseMove', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { clientX: t, clientY: n } = e,
                    {
                        dragState: { startX: i, startY: r },
                        state: { operation: s, operationStarted: l }
                    } = this;
                if (!(null == s || (!l && 3 > m(i, r, t, n)))) 'MOVE' === s ? this.handleDragMove(t, n) : g.has(s) && this.handleResizeMove(t, n);
            }),
            f(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        active: r,
                        container: { maxX: s, maxY: l }
                    }
                } = this;
                if (null == i || !r) return;
                let { width: a, height: o } = x(i, this.size),
                    c = (0, u.PY)(this.anchor, s, l, a, o);
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
                    let i = I(e, c);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: a,
                            offsetHeight: o
                        });
                }
                this.setState(
                    {
                        operation: e,
                        operationStarted: !1
                    },
                    () => {
                        window.addEventListener('mousemove', this.handleMouseMove), window.addEventListener('mouseup', this.handleOperationEnd);
                    }
                );
            }),
            f(this, 'handleOperationEnd', () => {
                let { operation: e, operationStarted: t } = this.state,
                    { onDragEnd: n } = this.props;
                window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleOperationEnd);
                let i = t
                    ? () => {
                          let { onUpdate: t, id: n } = this.props;
                          t(e, n, this.anchor, this.size, x(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: i, height: r } = x(this.ref.current, this.size),
                        s = (0, u.PY)(this.anchor, e, t, i, r),
                        l = (0, u.R)(s);
                    this.setDOMPositions(l),
                        this.setDOMSize({
                            width: i,
                            height: r
                        }),
                        null != n && n();
                }
                this.setState(
                    {
                        operation: null,
                        operationStarted: !1
                    },
                    i
                );
            }),
            (this.anchor = _(e.anchor)),
            (this.size = v(e.size, e.minSize.width, e.minSize.height));
    }
}
f(Z, 'Operations', i),
    f(Z, 'defaultProps', {
        snapOrientation: !0,
        minSize: {
            width: 0,
            height: 0
        },
        container: {
            minX: 0,
            minY: 0,
            maxX: 1 / 0,
            maxY: 1 / 0
        },
        resizeX: !0,
        resizeY: !0,
        hidden: !1,
        dragAnywhere: !0,
        active: !0
    }),
    (t.Z = Z);
