n.d(t, {
    Z: function () {
        return C;
    }
});
var r,
    i = n(47120);
var a = n(411104);
var o = n(733860);
var s = n(653041);
var l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(699581),
    E = n(374470),
    f = n(442837),
    h = n(249458),
    p = n(134432),
    m = n(695346),
    I = n(237997),
    T = n(768581),
    g = n(176354),
    S = n(506071),
    A = n(149203);
function v(e, t, n) {
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
function N(e) {
    if (null == window.IntersectionObserver)
        return function (t) {
            return (0, l.jsx)(e, {
                ...t,
                shouldAnimate: t.animated
            });
        };
    let t = 100,
        n = 0.7,
        r = [],
        i = [],
        a = new window.IntersectionObserver(
            (e) => {
                e.forEach((e) => {
                    let a = i.find((t) => {
                        let [n] = t;
                        return n === e.target;
                    });
                    if (null == a) return;
                    let o = a[1];
                    if (e.intersectionRatio >= n) {
                        var s, l;
                        if (-1 !== r.indexOf(o)) return;
                        let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (l = e.rootBounds) || void 0 === l ? void 0 : l.top));
                        n ? r.unshift(o) : r.push(o), o.forceUpdate(), n && r.length > t && r[t].forceUpdate();
                    } else {
                        let e = r.indexOf(o);
                        -1 !== e && (r.splice(e, 1), o.forceUpdate(), e < t && r.length >= t && r[t - 1].forceUpdate());
                    }
                });
            },
            { threshold: n }
        );
    function o(e) {
        let t = _.findDOMNode(e);
        if (!!(0, E.k)(t)) i.push([t, e]), a.observe(t);
    }
    function s(e) {
        let n = _.findDOMNode(e);
        a.unobserve(n);
        let o = i.findIndex((t) => {
            let [n, r] = t;
            return r === e;
        });
        if (-1 !== o) i.splice(o, 1), -1 !== (o = r.indexOf(e)) && (r.splice(o, 1), o < t && r.length >= t && r[t - 1].forceUpdate());
    }
    return class extends u.Component {
        shouldAutoplay(e) {
            return e.animated && e.autoplay;
        }
        componentDidMount() {
            this.shouldAutoplay(this.props) && o(this);
        }
        componentDidUpdate(e) {
            let t = this.shouldAutoplay(e),
                n = this.shouldAutoplay(this.props);
            n !== t && (n ? o(this) : s(this));
        }
        componentWillUnmount() {
            this.shouldAutoplay(this.props) && s(this);
        }
        render() {
            let n = r.indexOf(this),
                { autoplay: i, allowAnimatedEmoji: a, ...o } = this.props;
            return (0, l.jsx)(h.G.Consumer, {
                children: (r) =>
                    (0, l.jsx)(e, {
                        ...o,
                        autoplay: i || !1,
                        shouldAnimate: -1 !== n && n < t && !r.disableAnimations && a
                    })
            });
        }
    };
}
class O extends (r = u.PureComponent) {
    componentWillUnmount() {
        var e, t;
        null === (e = (t = this).cancelLoadImage) || void 0 === e || e.call(t);
    }
    getSrc() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { src: t, emojiId: n, emojiName: r, animated: i, shouldAnimate: a, isFocused: o, isInteracting: s, size: l = 'default' } = e,
            { hover: u } = this.state;
        if (null != t) return t;
        if (null != n) {
            let e = A.kV[l];
            return T.ZP.getEmojiURL({
                id: n,
                animated: o && !0 === i && (!0 === a || u || !0 === s),
                size: e
            });
        }
        if (null != r) return g.ZP.getURL(r);
    }
    render() {
        var e, t;
        let n, r;
        let { emojiName: i, animated: a, className: o, size: s = 'default', alt: u, canSelect: c = !0, shouldAnimate: _, isFocused: E, emojiId: f, autoplay: h, isInteracting: p, ...m } = this.props,
            I = this.getSrc();
        if (null == I || '' === I)
            return (0, l.jsx)('span', {
                className: d()('emoji', 'emoji-text'),
                children: i
            });
        a &&
            (n = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }),
            (r = null != f && '' !== f ? { 'data-id': f } : { 'data-name': i });
        let T = {
            ...m,
            key: this.key,
            className: d()('emoji', o, { jumboable: 'jumbo' === s }),
            onError: this.onError,
            ...n,
            'data-type': 'emoji',
            ...r
        };
        return c
            ? (0, l.jsx)('img', {
                  ...T,
                  src: I,
                  alt: null !== (e = null != u ? u : i) && void 0 !== e ? e : void 0,
                  draggable: !1
              })
            : (0, l.jsx)('div', {
                  ...T,
                  role: 'img',
                  'aria-label': null !== (t = null != u ? u : i) && void 0 !== t ? t : void 0,
                  style: {
                      backgroundImage: 'url('.concat(I, ')'),
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                  }
              });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', { hover: !1 }),
            v(this, 'key', void 0),
            v(this, 'cancelLoadImage', void 0),
            v(this, 'onError', () => {
                let e = this.getSrc();
                null != e &&
                    (this.cancelLoadImage = (0, p.po)(e, (e) => {
                        !e && ((this.key = Date.now()), this.forceUpdate());
                    }));
            }),
            v(this, 'onMouseEnter', (e) => {
                this.setState({ hover: !0 });
                let { onMouseEnter: t } = this.props;
                null != t && t(e);
            }),
            v(this, 'onMouseLeave', (e) => {
                this.setState({ hover: !1 });
                let { onMouseLeave: t } = this.props;
                null != t && t(e);
            });
    }
}
v(O, 'defaultProps', { isInteracting: !1 });
let R = N(O);
function C(e) {
    let t = m.Yk.useSetting(),
        n = {
            autoplay: null == e.autoplay ? t : e.autoplay,
            allowAnimatedEmoji: t
        },
        r = __OVERLAY__ ? (0, f.e7)([I.Z], () => I.Z.isInstanceFocused()) : (0, S.n)();
    return (0, l.jsx)(R, {
        ...e,
        ...n,
        isFocused: r
    });
}
