r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(665443),
    o = r.n(s),
    l = r(970838),
    u = r(376398);
function c(e) {
    let { streamId: n, paused: r, onReady: s, onResize: c, className: d, ...f } = e,
        _ = a.useRef(null),
        h = a.useRef({
            width: 0,
            height: 0
        });
    a.useLayoutEffect(() => {
        let e = _.current;
        if (null != e)
            return (
                (0, l.rY)(n),
                (e.srcObject = (0, u.aG)(n)),
                () => {
                    (0, l.Bw)(n), (e.srcObject = null), e.load();
                }
            );
    }, [n]),
        a.useEffect(() => {
            var e, i;
            return (
                r ? (null === (e = _.current) || void 0 === e || e.pause(), (0, l.Bw)(n)) : null === (i = _.current) || void 0 === i || i.play().catch(() => {}),
                () => {
                    r && (0, l.rY)(n);
                }
            );
        }, [r]);
    let p = a.useCallback(() => {
        var e, n, r, i;
        let { width: a, height: s } = h.current,
            o = null !== (r = null === (e = _.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== r ? r : 0,
            l = null !== (i = null === (n = _.current) || void 0 === n ? void 0 : n.videoHeight) && void 0 !== i ? i : 0;
        if (a !== o || s !== l) {
            let e = {
                width: o,
                height: l
            };
            null == c || c(e), (h.current = e);
        }
    }, [c]);
    a.useLayoutEffect(() => {
        let e = _.current;
        if (null != e) return e.addEventListener('resize', p), () => e.removeEventListener('resize', p);
    }, [p]);
    let m = a.useCallback(() => {
            null == s || s();
        }, [s]),
        g = a.useCallback(
            (e) => {
                !r && e.currentTarget.play();
            },
            [r]
        );
    return (0, i.jsx)('video', {
        className: o()('media-engine-video', d),
        ref: _,
        autoPlay: !0,
        onPause: g,
        onCanPlayThrough: m,
        muted: !0,
        ...f
    });
}
c.defaultProps = { paused: !1 };
