n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(692547),
    a = n(481060),
    l = n(40851),
    r = n(881824),
    o = n(688641),
    c = n(689938);
function u(e) {
    let { className: t, channel: n, highlight: u } = e,
        d = (0, l.bp)();
    return (0, i.jsx)(o.Z, {
        highlight: null != u && u,
        className: t,
        icon: (0, i.jsx)(a.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: s.Z.unsafe_rawColors.GREEN_360.css,
        title: c.Z.Messages.STAGE_CHANNEL_START_TITLE,
        description: c.Z.Messages.STAGE_CHANNEL_START_SUBTITLE,
        onClick: function () {
            (0, r.T)(n, d);
        }
    });
}
