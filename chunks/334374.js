n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120),
    n(571269),
    n(298267);
var i = n(200651),
    l = n(192379),
    r = n(414910),
    s = n(226961),
    a = n(507154);
function o(e) {
    let { currentUserId: t, participant: n } = e,
        o = (0, r.Z)(n.type),
        [c, u] = l.useState(),
        [d, h] = l.useState(),
        [m, p] = l.useState(),
        f = n.id.split(':').at(-1),
        g = t === f,
        C = l.useCallback((e, t, n) => {
            var i, l, r;
            let a = n ? s.ZP.getOutboundStats(t) : s.ZP.getInboundStats(e, t);
            u(null !== (i = null == a ? void 0 : a.codec) && void 0 !== i ? i : 'unknown'), h(void 0 === (l = null == a ? void 0 : a.resolution) || (0 === l.width && 0 === l.height) ? 'unknown' : l.width + ' x ' + l.height), p((null == a ? void 0 : a.bitrateEstimate) !== void 0 ? ((r = a.bitrateEstimate), ''.concat((r / 1000).toFixed(2), ' Kbps')) : 'unknown');
        }, []);
    return (
        l.useEffect(() => {
            let e = () => C(f, o, g);
            e();
            let t = setInterval(e, 1000);
            return () => clearInterval(t);
        }, [g, f, o, C]),
        (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a.streamInfoContainer,
                children: [
                    (0, i.jsx)('div', { children: (0, i.jsx)('strong', { children: 'Stream Info' }) }),
                    (0, i.jsxs)('div', {
                        className: a.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Video Codec: ' }), (0, i.jsx)('strong', { children: c })]
                    }),
                    (0, i.jsxs)('div', {
                        className: a.infoRow,
                        children: [(0, i.jsx)('span', { children: 'Resolution: ' }), (0, i.jsx)('strong', { children: d })]
                    }),
                    g &&
                        (0, i.jsxs)('div', {
                            className: a.infoRow,
                            children: [(0, i.jsx)('span', { children: 'Bitrate Estimate: ' }), (0, i.jsx)('strong', { children: m })]
                        })
                ]
            })
        })
    );
}
