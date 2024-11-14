n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    l = n(399606),
    o = n(822183),
    c = n(673125),
    d = n(610947),
    u = n(594174),
    h = n(425423);
function p(e) {
    let { streamerId: t, channelId: n } = e,
        r = s.useRef(null),
        o = (0, l.e7)([u.default], () => u.default.getCurrentUser());
    return (
        a()(null != o, 'user cannot be null'),
        (0, d.Z)(r, o, t, n),
        (0, i.jsx)('canvas', {
            className: h.canvas,
            ref: r
        })
    );
}
function f(e) {
    let { guildId: t, channelId: n, streamerId: s } = e,
        { isSharedCanvasEnabled: r } = o.Z.useExperiment(
            {
                guildId: t,
                location: 'f0d1b1_1'
            },
            { autoTrackExposure: !0 }
        ),
        a = (0, l.e7)([c.Z], () => c.Z.visibleOverlayCanvas);
    return r && a
        ? (0, i.jsx)(p, {
              guildId: t,
              channelId: n,
              streamerId: s
          })
        : null;
}
