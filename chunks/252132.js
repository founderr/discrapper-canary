n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(27457),
    r = n(131951),
    s = n(464820);
function a(e) {
    let { aspectRatio: t, blocked: n, channel: a, className: o, focused: c, children: u, inCall: d, inPopout: h, noBorder: m, onClick: p, onContextMenu: f, onDoubleClick: g, onVideoResize: C, paused: x, pulseSpeakingIndicator: v, participant: _, width: I, ...E } = e,
        b = r.Z.getVideoComponent();
    return (0, i.jsx)('div', {
        style: { width: I },
        className: s.spaceBetweenTiles,
        children: (0, i.jsxs)('div', {
            className: s.tileSizer,
            style: { aspectRatio: t },
            children: [
                (0, i.jsx)(l.ZP, {
                    blocked: n,
                    channel: a,
                    className: o,
                    focused: c,
                    inCall: d,
                    inPopout: h,
                    noBorder: m,
                    onClick: p,
                    onContextMenu: f,
                    onDoubleClick: g,
                    onVideoResize: C,
                    participant: _,
                    paused: x,
                    pulseSpeakingIndicator: v,
                    videoComponent: b,
                    width: I,
                    ...E
                }),
                u
            ]
        })
    });
}
