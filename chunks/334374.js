n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(571269),
    n(298267);
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
        _ = n.id.split(':').at(-1),
        f = t === _,
        E = a.useCallback((e, t, n) => {
            var i, a, s;
            let r = n ? l.ZP.getOutboundStats(t) : l.ZP.getInboundStats(e, t);
            u(null !== (i = null == r ? void 0 : r.codec) && void 0 !== i ? i : 'unknown'), h(void 0 === (a = null == r ? void 0 : r.resolution) || (0 === a.width && 0 === a.height) ? 'unknown' : a.width + ' x ' + a.height), m((null == r ? void 0 : r.bitrateEstimate) !== void 0 ? ((s = r.bitrateEstimate), ''.concat((s / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        a.useEffect(() => {
            let e = () => E(_, o, f);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [f, _, o, E]),
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
                    f &&
                        (0, i.jsxs)('div', {
                            className: r.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, i.jsx)('strong', { children: p })]
                        })
                ]
            })
        })
    );
}
