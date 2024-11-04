n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var l = n(692547),
    r = n(481060),
    s = n(40851),
    a = n(881824),
    o = n(688641),
    c = n(388032);
function u(e) {
    let { className: t, channel: n, highlight: u } = e,
        d = (0, s.bp)();
    return (0, i.jsx)(o.Z, {
        highlight: null != u && u,
        className: t,
        icon: (0, i.jsx)(r.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: l.Z.unsafe_rawColors.GREEN_360.css,
        title: c.intl.string(c.t.OYbHfn),
        description: c.intl.string(c.t.yXwLMT),
        onClick: function () {
            (0, a.T)(n, d);
        }
    });
}
