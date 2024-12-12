r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(665443),
    o = r.n(s),
    l = r(39383),
    u = r.n(l),
    c = r(992774),
    d = r(672784),
    f = r(369711),
    _ = r(649754);
function h(e) {
    var n, r, i, a;
    let s = null === (a = window) || void 0 === a ? void 0 : null === (i = a.DiscordNative) || void 0 === i ? void 0 : null === (r = i.app) || void 0 === r ? void 0 : null === (n = r.getReleaseChannel) || void 0 === n ? void 0 : n.call(r);
    return 'canary' === s || 'development' === s ? (0, f.m)(e) : (0, d.y)(e);
}
function p(e) {
    let { streamId: n, paused: r, onReady: s, onResize: l, className: d, ...f } = e,
        p = a.useRef(null),
        { current: m } = a.useRef(u()('media-engine-video-'));
    return (
        a.useEffect(() => {
            let e = p.current;
            if (!r && null != e) {
                let r = !1,
                    i = (n, i) => {
                        !r && (null == s || s(), (r = !0)),
                            (e.width !== n || e.height !== i) &&
                                ((e.width = n),
                                (e.height = i),
                                null == l ||
                                    l({
                                        width: n,
                                        height: i
                                    }));
                    },
                    a = (0, c.zS)();
                if (null != a.addVideoOutputSink)
                    return (
                        a.addVideoOutputSink(m, n, i),
                        () => {
                            a.removeVideoOutputSink(m, n);
                        }
                    );
                {
                    let r = h(e);
                    if (null == r) return;
                    return (
                        _.Z.addSink(n, p, (e) => {
                            i(e.width, e.height), r.render(e);
                        }),
                        () => {
                            _.Z.removeSink(n, p);
                        }
                    );
                }
            }
        }, [n, r, l, s, m]),
        (0, i.jsx)('canvas', {
            id: m,
            className: o()('media-engine-video', d),
            ref: p,
            ...f
        })
    );
}
p.defaultProps = { paused: !1 };
