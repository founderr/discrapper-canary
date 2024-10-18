n.d(t, {
    B: function () {
        return i;
    }
}),
    n(47120),
    n(411104);
var i,
    s,
    r,
    a = n(735250),
    o = n(470079),
    l = n(120356),
    c = n.n(l),
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
let _ = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
((r = i || (i = {})).MOVE = 'MOVE'), (r.RESIZE_NORTH = 'RESIZE_NORTH'), (r.RESIZE_WEST = 'RESIZE_WEST'), (r.RESIZE_EAST = 'RESIZE_EAST'), (r.RESIZE_SOUTH = 'RESIZE_SOUTH'), (r.RESIZE_NORTH_WEST = 'RESIZE_NORTH_WEST'), (r.RESIZE_NORTH_EAST = 'RESIZE_NORTH_EAST'), (r.RESIZE_SOUTH_WEST = 'RESIZE_SOUTH_WEST'), (r.RESIZE_SOUTH_EAST = 'RESIZE_SOUTH_EAST');
let E = new Set(['RESIZE_NORTH', 'RESIZE_WEST', 'RESIZE_EAST', 'RESIZE_SOUTH', 'RESIZE_NORTH_WEST', 'RESIZE_NORTH_EAST', 'RESIZE_SOUTH_WEST', 'RESIZE_SOUTH_EAST']);
function g(e, t, n) {
    let { width: i, height: s } = e;
    return {
        width: 'auto' === i ? 'auto' : Math.max(t, i),
        height: 'auto' === s ? 'auto' : Math.max(n, s)
    };
}
function m(e) {
    let { top: t, left: n, bottom: i, right: s } = e;
    return (
        null == n && null == s && (n = 0),
        null != n && null != s && (s = null),
        null == t && null == i && (t = 0),
        null != t && null != i && (i = null),
        {
            top: t,
            left: n,
            bottom: i,
            right: s
        }
    );
}
function I(e) {
    return 'auto' === e || null == e ? 'auto' : ''.concat(e, 'px');
}
function Z(e, t) {
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
function v(e, t) {
    let { top: n, left: i, bottom: s, right: r } = t;
    switch (e) {
        case 'RESIZE_EAST':
        case 'RESIZE_NORTH_EAST':
        case 'RESIZE_NORTH':
            return {
                bottom: s,
                left: i,
                right: null,
                top: null
            };
        case 'RESIZE_WEST':
        case 'RESIZE_NORTH_WEST':
            return {
                bottom: s,
                right: r,
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
                right: r,
                bottom: null,
                left: null
            };
        default:
            throw Error('getOrientedCoords: Invalid orientation: '.concat(e));
    }
}
class C extends (s = o.Component) {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(t, this.state) || !(0, d.Z)(e, this.props, ['anchor', 'size', 'minSize', 'container']) || !(0, d.Z)(e.anchor, this.props.anchor) || !(0, d.Z)(e.size, this.props.size) || !(0, d.Z)(e.minSize, this.props.minSize) || !(0, d.Z)(e.container, this.props.container);
    }
    componentDidUpdate(e, t) {
        null == t.operation && (!(0, d.Z)(this.props.anchor, e.anchor) && this.setDOMPositions(m(this.props.anchor)), !(0, d.Z)(this.props.size, e.size) && this.setDOMSize(g(this.props.size, this.props.minSize.width, this.props.minSize.height)));
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
                container: { maxX: s, maxY: r, minX: a, minY: o },
                onDragStart: l,
                onDrag: c,
                snapOrientation: d
            },
            dragState: { offsetX: h, offsetY: p },
            state: { operationStarted: f }
        } = this;
        if (null == n) return null;
        (e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(r, t), o));
        let { width: _, height: E } = Z(n, this.size),
            g = t - p,
            m = e - h,
            I = (0, u.ou)(
                (0, u.PY)(
                    {
                        top: g,
                        left: m,
                        bottom: null,
                        right: null
                    },
                    s,
                    r,
                    _,
                    E
                )
            ),
            C = d ? (0, u.R)(I) : v('RESIZE_SOUTH_EAST', I);
        this.setDOMPositions(C), !f && (null != l && l(), this.setState({ operationStarted: !0 })), null != c && c(i, 'MOVE', this.anchor, this.size);
    }
    handleResizeMove(e, t) {
        let {
                props: {
                    id: n,
                    minSize: i,
                    container: { maxX: s, maxY: r, minX: a, minY: o },
                    onDragStart: l,
                    onDrag: c
                },
                state: { operation: d, operationStarted: u }
            } = this,
            { startX: h, startY: p, offsetWidth: f, offsetHeight: _ } = this.dragState,
            E = 0,
            g = 0;
        if (null != d) {
            switch (((e = Math.max(Math.min(s, e), a)), (t = Math.max(Math.min(r, t), o)), d)) {
                case 'RESIZE_EAST':
                case 'RESIZE_SOUTH_EAST':
                case 'RESIZE_NORTH_EAST':
                    E -= h - e;
                    break;
                case 'RESIZE_WEST':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_NORTH_WEST':
                    E += h - e;
            }
            switch (d) {
                case 'RESIZE_SOUTH':
                case 'RESIZE_SOUTH_WEST':
                case 'RESIZE_SOUTH_EAST':
                    g -= p - t;
                    break;
                case 'RESIZE_NORTH':
                case 'RESIZE_NORTH_WEST':
                case 'RESIZE_NORTH_EAST':
                    g += p - t;
            }
            (f = Math.max(f + E, i.width)),
                (_ = Math.max(_ + g, i.height)),
                this.setDOMSize({
                    width: f,
                    height: _
                }),
                !u && (null != l && l(), this.setState({ operationStarted: !0 })),
                null != c && c(n, d, this.anchor, this.size);
        }
    }
    setDOMPositions(e) {
        let { top: t, left: n, bottom: i, right: s } = e,
            { current: r } = this.ref;
        if (
            ((this.anchor = {
                top: t,
                left: n,
                bottom: i,
                right: s
            }),
            null != r)
        )
            (r.style.top = I(t)), (r.style.bottom = I(i)), (r.style.left = I(n)), (r.style.right = I(s));
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
            (i.style.width = I(t)), (i.style.height = I(n));
    }
    renderResizeHandles() {
        let { resizeY: e, resizeX: t, active: n } = this.props;
        return (0, a.jsxs)(o.Fragment, {
            children: [
                e
                    ? (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeNorth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH')
                              }),
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeSouth, { [p.resizeNSCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH')
                              })
                          ]
                      })
                    : null,
                t
                    ? (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeEast, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_EAST')
                              }),
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeWest, { [p.resizeEWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_WEST')
                              })
                          ]
                      })
                    : null,
                t && e
                    ? (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeNorthWest, { [p.resizeNWSECursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_WEST')
                              }),
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeNorthEast, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_NORTH_EAST')
                              }),
                              (0, a.jsx)('div', {
                                  className: c()(p.resizeSouthWest, { [p.resizeNESWCursor]: n }),
                                  onMouseDown: (e) => this.handleResizeMouseDown(e, 'RESIZE_SOUTH_WEST')
                              }),
                              (0, a.jsx)('div', {
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
            props: { children: e, hidden: t, onClick: n, id: i, style: s },
            size: r,
            anchor: o,
            state: { operation: l, operationStarted: d }
        } = this;
        return (0, a.jsxs)('div', {
            ref: this.ref,
            style: {
                ...o,
                ...r,
                ...s,
                ...(null != l ? { zIndex: 1000 } : void 0),
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
            f(this, 'ref', o.createRef()),
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
                        dragState: { startX: i, startY: s },
                        state: { operation: r, operationStarted: a }
                    } = this;
                if (!(null == r || (!a && 3 > _(i, s, t, n)))) 'MOVE' === r ? this.handleDragMove(t, n) : E.has(r) && this.handleResizeMove(t, n);
            }),
            f(this, 'handleOperationStart', (e, t, n) => {
                let {
                    ref: { current: i },
                    props: {
                        active: s,
                        container: { maxX: r, maxY: a }
                    }
                } = this;
                if (null == i || !s) return;
                let { width: o, height: l } = Z(i, this.size),
                    c = (0, u.PY)(this.anchor, r, a, o, l);
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
                    let i = v(e, c);
                    this.setDOMPositions(i),
                        (this.dragState = {
                            ...this.dragState,
                            startX: t,
                            startY: n,
                            offsetWidth: o,
                            offsetHeight: l
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
                          t(e, n, this.anchor, this.size, Z(this.ref.current, this.size));
                      }
                    : void 0;
                if (t) {
                    let { maxX: e, maxY: t } = this.props.container,
                        { width: i, height: s } = Z(this.ref.current, this.size),
                        r = (0, u.PY)(this.anchor, e, t, i, s),
                        a = (0, u.R)(r);
                    this.setDOMPositions(a),
                        this.setDOMSize({
                            width: i,
                            height: s
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
            (this.anchor = m(e.anchor)),
            (this.size = g(e.size, e.minSize.width, e.minSize.height));
    }
}
f(C, 'Operations', i),
    f(C, 'defaultProps', {
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
    (t.Z = C);
