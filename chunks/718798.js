n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(665443),
    s = n.n(a),
    o = n(39383),
    l = n.n(o),
    u = n(992774),
    c = n(672784),
    d = n(369711),
    f = n(649754);
function _(e) {
    let { streamId: t, paused: n, onReady: a, onResize: o, className: _, ...p } = e,
        h = i.useRef(null),
        { current: m } = i.useRef(l()('media-engine-video-'));
    return (
        i.useEffect(() => {
            let e = h.current;
            if (!n && null != e) {
                let n = !1,
                    r = (t, r) => {
                        !n && (null == a || a(), (n = !0)),
                            (e.width !== t || e.height !== r) &&
                                ((e.width = t),
                                (e.height = r),
                                null == o ||
                                    o({
                                        width: t,
                                        height: r
                                    }));
                    },
                    i = (0, u.zS)();
                if (null != i.addVideoOutputSink)
                    return (
                        i.addVideoOutputSink(m, t, r),
                        () => {
                            i.removeVideoOutputSink(m, t);
                        }
                    );
                {
                    let n = (function (e) {
                        var t, n, r, i;
                        let a = null === (i = window) || void 0 === i ? void 0 : null === (r = i.DiscordNative) || void 0 === r ? void 0 : null === (n = r.app) || void 0 === n ? void 0 : null === (t = n.getReleaseChannel) || void 0 === t ? void 0 : t.call(n);
                        return 'canary' === a || 'development' === a ? (0, d.m)(e) : (0, c.y)(e);
                    })(e);
                    if (null == n) return;
                    return (
                        f.Z.addSink(t, h, (e) => {
                            r(e.width, e.height), n.render(e);
                        }),
                        () => {
                            f.Z.removeSink(t, h);
                        }
                    );
                }
            }
        }, [t, n, o, a, m]),
        (0, r.jsx)('canvas', {
            id: m,
            className: s()('media-engine-video', _),
            ref: h,
            ...p
        })
    );
}
_.defaultProps = { paused: !1 };
