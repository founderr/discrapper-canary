t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(200651),
    r = t(481060),
    a = t(870745),
    o = t(388032);
function l(e) {
    let { onClose: n, onSelect: t, application: l, channelId: c } = e,
        d = (0, a.Z)(l, c);
    return (0, i.jsx)(r.Menu, {
        navId: 'activity-popout-overflow-popout',
        onClose: n,
        onSelect: t,
        'aria-label': o.intl.string(o.t.SS9Y6O),
        children: d
    });
}
