r.d(n, {
    Z: function () {
        return b;
    }
});
var i,
    a,
    s,
    o = r(411104);
var l = r(47120);
var u = r(200651),
    c = r(192379),
    d = r(981631);
function f(e, n, r) {
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
let _ = (e, n) => {
        let { x: r, y: i } = e,
            { x: a, y: s } = n;
        return Math.pow(r - a, 2) + Math.pow(i - s, 2);
    },
    h = Math.pow(3, 2);
function p(e, n, r, i, a) {
    let { top: s, bottom: o, left: l, right: u } = e;
    if ((null == s && null == o ? ((s = 0), (o = r - a)) : null == s && null != o ? (s = r - (o + a)) : null != s && (o = r - (s + a)), null == l && null == u ? ((l = 0), (u = n - i)) : null == l && null != u ? (l = n - (u + i)) : null == u && null != l && (u = n - (l + i)), null == s || null == o || null == l || null == u)) throw Error('Logically this can never happen based on our if/else statements');
    return {
        top: s,
        left: l,
        bottom: o,
        right: u
    };
}
function m(e) {
    let { top: n, left: r } = e;
    return {
        x: r,
        y: n
    };
}
function g(e) {
    return [null == e.bottom ? 'TOP' : 'BOTTOM', null == e.right ? 'LEFT' : 'RIGHT'];
}
function E(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        0 === n || n <= i ? (i = null) : (n = null),
        0 === r || r <= a ? (a = null) : (r = null),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function v(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        null == r && null == a && (r = 0),
        null != r && null != a && (a = null),
        null == n && null == i && (n = 0),
        null != n && null != i && (i = null),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function I(e) {
    let { top: n, left: r, bottom: i, right: a } = e;
    return (
        i < 0 && ((n += i), (i = 0)),
        n < 0 && ((i += n), (n = 0)),
        a < 0 && ((r += a), (a = 0)),
        r < 0 && ((a += r), (r = 0)),
        {
            top: n,
            left: r,
            bottom: i,
            right: a
        }
    );
}
function T(e) {
    return null != e ? ''.concat(e, 'px') : 'auto';
}
!(function (e) {
    (e[(e.DISABLED = 0)] = 'DISABLED'), (e[(e.DEFAULT = 1)] = 'DEFAULT'), (e[(e.OFFSET = 2)] = 'OFFSET');
})(i || (i = {})),
    !(function (e) {
        (e.TOP = 'TOP'), (e.BOTTOM = 'BOTTOM'), (e.RIGHT = 'RIGHT'), (e.LEFT = 'LEFT');
    })(a || (a = {}));
class b extends (s = c.PureComponent) {
    componentDidMount() {
        this.checkBounds(), this.setDOMPositions(this.position);
    }
    componentDidUpdate(e, n) {
        let {
            state: { verticalOrientation: r, horizontalOrientation: i, atTopEdge: a },
            props: { maxX: s, maxY: o, onRelocated: l, snapOrientation: u }
        } = this;
        (e.maxX !== s || e.maxY !== o || e.onRelocated !== l || e.snapOrientation !== u || n.verticalOrientation !== r || n.horizontalOrientation !== i || n.atTopEdge !== a) && this.checkBounds();
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove), window.removeEventListener('mouseup', this.handleMouseUp);
    }
    setDOMPositions(e) {
        let { top: n, left: r, bottom: i, right: a } = e,
            {
                draggableRef: { current: s }
            } = this;
        if (
            ((this.position = {
                top: n,
                left: r,
                bottom: i,
                right: a
            }),
            null != s)
        )
            (s.style.top = T(n)), (s.style.bottom = T(i)), (s.style.left = T(r)), (s.style.right = T(a));
    }
    render() {
        let { children: e, className: n } = this.props,
            { dragging: r, verticalOrientation: i, horizontalOrientation: a, atTopEdge: s } = this.state,
            { top: o, left: l, right: d, bottom: f } = this.position,
            _ = {
                pointerEvents: r ? 'none' : 'auto',
                position: 'absolute',
                top: o,
                left: l,
                bottom: f,
                right: d
            };
        return (0, u.jsx)('div', {
            ref: this.draggableRef,
            className: n,
            onMouseDown: this.handleMouseDown,
            style: _,
            children: c.cloneElement(c.Children.only(e), {
                flipped: 'RIGHT' === a,
                verticalFlipped: 'BOTTOM' === i,
                checkBounds: this.checkBounds,
                atTopEdge: s
            })
        });
    }
    constructor(e) {
        super(e),
            f(this, 'draggableRef', c.createRef()),
            f(this, '_dragStart', {
                x: 0,
                y: 0
            }),
            f(this, '_offsetX', void 0),
            f(this, '_offsetY', void 0),
            f(this, 'position', void 0),
            f(this, 'handleMouseDown', (e) => {
                let { top: n, left: r, bottom: i, right: a } = this.position,
                    { dragAnywhere: s, selector: o, maxX: l, maxY: u } = this.props,
                    { target: c } = e,
                    { current: f } = this.draggableRef;
                if (null != f && e.button === d.AeJ.PRIMARY && (s || (null != c && null != o && '' !== o && null != c.closest(o)))) {
                    let { x: s, y: o } = m(
                        p(
                            {
                                top: n,
                                left: r,
                                bottom: i,
                                right: a
                            },
                            l,
                            u,
                            f.clientWidth,
                            f.clientHeight
                        )
                    );
                    (this._dragStart = {
                        x: e.clientX,
                        y: e.clientY
                    }),
                        (this._offsetX = e.clientX - s),
                        (this._offsetY = e.clientY - o),
                        window.addEventListener('mousemove', this.handleMouseMove),
                        window.addEventListener('mouseup', this.handleMouseUp);
                }
            }),
            f(this, 'handleMouseMove', (e) => {
                e.preventDefault();
                let { clientX: n, clientY: r } = e,
                    { current: i } = this.draggableRef,
                    { maxX: a, maxY: s, flipVertical: o, flipHorizontal: l, onDragStart: u, onDrag: c, onFlip: d, snapOrientation: f } = this.props,
                    { dragging: m, dragging: v, verticalOrientation: T, horizontalOrientation: b } = this.state,
                    y = !1;
                if (
                    null == i ||
                    (!m &&
                        _(this._dragStart, {
                            x: n,
                            y: r
                        }) < h)
                )
                    return;
                m = !0;
                let { clientWidth: S, clientHeight: A } = i,
                    N = r - this._offsetY,
                    C = I(
                        p(
                            {
                                top: N,
                                left: n - this._offsetX
                            },
                            a,
                            s,
                            S,
                            A
                        )
                    );
                if (f) {
                    let e = g((C = E(C)));
                    (T = e[0]), (b = e[1]);
                } else
                    C = {
                        top: C.top,
                        left: C.left
                    };
                2 === l && b !== this.state.horizontalOrientation && ((this._offsetX = S - this._offsetX), (y = !0)),
                    2 === o && T !== this.state.verticalOrientation && ((this._offsetY = A - this._offsetY), (y = !0)),
                    this.setDOMPositions(C),
                    !v && (null == u || u(C, i)),
                    null == c || c(C, i),
                    y && (null == d || d([T, b])),
                    this.setState({
                        dragging: m,
                        verticalOrientation: T,
                        horizontalOrientation: b,
                        atTopEdge: 0 === C.top
                    });
            }),
            f(this, 'handleMouseUp', () => {
                window.removeEventListener('mousemove', this.handleMouseMove),
                    window.removeEventListener('mouseup', this.handleMouseUp),
                    this.state.dragging &&
                        this.setState({ dragging: !1 }, () => {
                            let { onDragEnd: e } = this.props,
                                { current: n } = this.draggableRef;
                            null != n && null != e && e(this.position, n);
                        });
            }),
            f(this, '_checkBoundsRAF', null),
            f(this, 'checkBounds', () => {
                null != this._checkBoundsRAF && cancelAnimationFrame(this._checkBoundsRAF), (this._checkBoundsRAF = requestAnimationFrame(this._performCheckBounds));
            }),
            f(this, '_performCheckBounds', () => {
                let e;
                let {
                        position: n,
                        state: r,
                        draggableRef: { current: i },
                        props: { maxX: a, maxY: s, onRelocated: o, snapOrientation: l }
                    } = this,
                    { verticalOrientation: u, horizontalOrientation: c } = this.state;
                if (null == i) return;
                let { clientHeight: d, clientWidth: f } = i,
                    _ = p(n, a, s, f, d);
                if (((_ = I(_)), l)) {
                    let n = g((e = E(_)));
                    (u = n[0]), (c = n[1]);
                } else
                    e = {
                        top: _.top,
                        left: _.left,
                        right: null,
                        bottom: null
                    };
                if (n.left === e.left && n.right === e.right && n.top === e.top && n.bottom === e.bottom) return;
                null == o || o(e, i), this.setDOMPositions(e);
                let h = 0 === e.top;
                (u !== r.verticalOrientation || c !== r.horizontalOrientation || h !== r.atTopEdge) &&
                    this.setState({
                        verticalOrientation: u,
                        horizontalOrientation: c,
                        atTopEdge: h
                    });
            });
        let [n, r] = g(e.initialPosition);
        (this.position = v(e.initialPosition)),
            (this.state = {
                dragging: !1,
                verticalOrientation: n,
                horizontalOrientation: r,
                atTopEdge: 0 === this.position.top
            });
    }
}
f(b, 'FlipTypes', i),
    f(b, 'defaultProps', {
        snapOrientation: !1,
        maxX: 0,
        maxY: 0,
        flipVertical: 0,
        flipHorizontal: 0,
        dragAnywhere: !1
    });
