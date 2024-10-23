n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(512722),
    l = n.n(a),
    r = n(399606),
    o = n(618158),
    c = n(594174),
    u = n(822183),
    d = n(364125),
    h = n(610947),
    m = n(74629);
function p(e) {
    let { focused: t, channelId: n, streamerId: a, stream: u } = e,
        p = s.useRef(null),
        _ = (0, r.e7)([c.default], () => c.default.getCurrentUser());
    l()(null != _, 'user cannot be null'), (0, h.Z)(p, _, a, n);
    let {
        handleClick: f,
        handleMouseDown: E,
        handleMouseEnter: g,
        handleMouseMove: C,
        handleMouseUp: I
    } = (0, d.Z)({
        user: _,
        channelId: n,
        streamerId: a,
        stream: u,
        focused: t,
        canvas: p.current
    });
    return (0, i.jsx)(o.Z, {
        children: (0, i.jsx)('canvas', {
            ref: p,
            onClick: f,
            onMouseDown: E,
            onMouseEnter: g,
            onMouseMove: C,
            onMouseUp: I,
            className: m.sharedCanvas
        })
    });
}
function _(e) {
    let { isSharedCanvasEnabled: t } = u.Z.useExperiment(
        {
            guildId: e.guildId,
            location: 'd0de1c_1'
        },
        { autoTrackExposure: !0 }
    );
    return !t || e.hasScreenMessage ? null : (0, i.jsx)(p, { ...e });
}
