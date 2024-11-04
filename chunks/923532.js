n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(399606),
    o = n(822183),
    c = n(673125),
    d = n(610947),
    u = n(594174),
    h = n(425423);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        s = r.useRef(null),
        o = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (
        l()(null != o, 'user cannot be null'),
        (0, d.Z)(s, o, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: s
        })
    );
}
function f(e) {
    let { guildId: t, channelId: n, streamerId: r } = e,
        { isSharedCanvasEnabled: s } = o.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        l = (0, a.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
    return s && l
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: r
          })
        : null;
}
