t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651),
    r = t(481060),
    a = t(870745),
    l = t(388032);
function o(e) {
    let { onClose: n, onSelect: t, application: o, channelId: d } = e,
        c = (0, a.Z)(o, d);
    return (0, i.jsx)(r.Menu, {
        navId: 'activity-popout-overflow-popout',
        onClose: n,
        onSelect: t,
        'aria-label': l.intl.string(l.t.SS9Y6O),
        children: c
    });
}
