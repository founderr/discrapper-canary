n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(200651);
n(192379);
var s = n(27457),
    a = n(131951),
    l = n(464820);
function r(e) {
    let { aspectRatio: t, blocked: n, channel: r, className: o, focused: c, children: u, inCall: d, inPopout: h, noBorder: p, onClick: m, onContextMenu: _, onDoubleClick: f, onVideoResize: E, paused: g, pulseSpeakingIndicator: C, participant: I, width: T, ...x } = e,
        S = a.Z.getVideoComponent();
    return (0, i.jsx)('div', {
        style: { width: T },
        className: l.spaceBetweenTiles,
        children: (0, i.jsxs)('div', {
            className: l.tileSizer,
            style: { aspectRatio: t },
            children: [
                (0, i.jsx)(s.ZP, {
                    blocked: n,
                    channel: r,
                    className: o,
                    focused: c,
                    inCall: d,
                    inPopout: h,
                    noBorder: p,
                    onClick: m,
                    onContextMenu: _,
                    onDoubleClick: f,
                    onVideoResize: E,
                    participant: I,
                    paused: g,
                    pulseSpeakingIndicator: C,
                    videoComponent: S,
                    width: T,
                    ...x
                }),
                u
            ]
        })
    });
}
