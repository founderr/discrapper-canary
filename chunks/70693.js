n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(414910),
    l = n(226961),
    r = n(716634);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        [s, l] = a.useState(null),
        o = a.useCallback((e) => {
            let t = e.currentTarget.getBoundingClientRect(),
                n = e.clientX - t.left,
                i = e.clientY - t.top;
            n > 0 && n < t.width && i > 0 && i < t.height ? l(new DOMPoint(n, i)) : l(null);
        }, []),
        u = a.useCallback((e) => {
            l(null);
        }, []);
    return (0, i.jsx)('div', {
        className: r.streamInfoRegion,
        onMouseMove: o,
        onMouseLeave: u,
        children:
            null !== s &&
            (0, i.jsx)(c, {
                currentUserId: t,
                participant: n,
                avInfoPosition: s
            })
    });
}
function c(e) {
    let { currentUserId: t, participant: n, avInfoPosition: o } = e,
        c = (0, s.Z)(n.type),
        [u, d] = a.useState(),
        [h, p] = a.useState(),
        [m, _] = a.useState(),
        f = n.id.endsWith(t);
    return (
        a.useEffect(() => {
            function e(e, t) {
                var n;
                let i = f ? l.ZP.getOutboundStats(t) : l.ZP.getInboundStats(e.id, t);
                d((null == i ? void 0 : i.codec) !== void 0 ? i.codec : 'unknown'), p((null == i ? void 0 : i.resolution) !== void 0 ? i.resolution.width + 'x' + i.resolution.height : 'unknown'), _((null == i ? void 0 : i.bitrateEstimate) !== void 0 ? ((n = null == i ? void 0 : i.bitrateEstimate), ''.concat((n / 1000).toFixed(2), ' Kbps')) : 'unknown');
            }
            let t = setInterval(() => {
                e(n, c);
            }, 1000);
            return e(n, c), () => clearInterval(t);
        }, [f, n, c]),
        (0, i.jsx)(i.Fragment, {
            children:
                null !== o &&
                (0, i.jsxs)('div', {
                    className: r.streamInfoContainer,
                    style: {
                        left: o.x,
                        top: o.y
                    },
                    children: [
                        (0, i.jsx)('div', { children: (0, i.jsx)('strong', { children: 'Stream Info' }) }),
                        (0, i.jsxs)('div', {
                            className: r.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Video Codec: ' }), (0, i.jsx)('strong', { children: u })]
                        }),
                        (0, i.jsxs)('div', {
                            className: r.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Resolution: ' }), (0, i.jsx)('strong', { children: h })]
                        }),
                        f &&
                            (0, i.jsxs)('div', {
                                className: r.infoRow,
                                children: [(0, i.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, i.jsx)('strong', { children: m })]
                            })
                    ]
                })
        })
    );
}
