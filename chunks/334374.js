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
    r = n(987500);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, s.Z)(n.type),
        [c, u] = a.useState(),
        [d, h] = a.useState(),
        [p, m] = a.useState(),
        _ = n.id.endsWith(t);
    return (
        a.useEffect(() => {
            function e(e, t) {
                var n;
                let i = _ ? l.ZP.getOutboundStats(t) : l.ZP.getInboundStats(e.id, t);
                u((null == i ? void 0 : i.codec) !== void 0 ? i.codec : 'unknown'), h((null == i ? void 0 : i.resolution) !== void 0 ? i.resolution.width + 'x' + i.resolution.height : 'unknown'), m((null == i ? void 0 : i.bitrateEstimate) !== void 0 ? ((n = null == i ? void 0 : i.bitrateEstimate), ''.concat((n / 1000).toFixed(2), ' Kbps')) : 'unknown');
            }
            let t = setInterval(() => {
                e(n, o);
            }, 1000);
            return e(n, o), () => clearInterval(t);
        }, [_, n, o]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: r.streamInfoContainer,
                children: [
                    (0, i.jsx)('div', { children: (0, i.jsx)('strong', { children: 'Stream Info' }) }),
                    (0, i.jsxs)('div', {
                        className: r.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Video Codec: ' }), (0, i.jsx)('strong', { children: c })]
                    }),
                    (0, i.jsxs)('div', {
                        className: r.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Resolution: ' }), (0, i.jsx)('strong', { children: d })]
                    }),
                    _ &&
                        (0, i.jsxs)('div', {
                            className: r.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, i.jsx)('strong', { children: p })]
                        })
                ]
            })
        })
    );
}
