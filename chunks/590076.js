n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(399606),
    o = n(618158),
    c = n(594174),
    u = n(822183),
    d = n(364125),
    h = n(610947),
    m = n(74629);
function p(e) {
    let { focused: t, channelId: n, streamerId: r, stream: u } = e,
        p = l.useRef(null),
        f = (0, s.e7)([c.default], () => c.default.getCurrentUser());
    a()(null != f, 'user cannot be null'), (0, h.Z)(p, f, r, n);
    let {
        handleClick: g,
        handleMouseDown: C,
        handleMouseEnter: x,
        handleMouseMove: v,
        handleMouseUp: _
    } = (0, d.Z)({
        user: f,
        channelId: n,
        streamerId: r,
        stream: u,
        focused: t,
        canvas: p.current
    });
    return (0, i.jsx)(o.Z, {
        children: (0, i.jsx)('canvas', {
            ref: p,
            onClick: g,
            onMouseDown: C,
            onMouseEnter: x,
            onMouseMove: v,
            onMouseUp: _,
            className: m.sharedCanvas
        })
    });
}
function f(e) {
    let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
        {
            guildId: e.guildId,
            location: 'd0de1c_1'
        },
        { autoTrackExposure: !0 }
    );
    return !t || e.hasScreenMessage ? null : (0, i.jsx)(p, { ...e });
}
