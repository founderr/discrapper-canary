t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651),
    o = t(481060),
    a = t(870745),
    r = t(388032);
function c(e) {
    let { onClose: n, onSelect: t, application: c, channelId: l } = e,
        d = (0, a.Z)(c, l);
    return (0, i.jsx)(o.Menu, {
        navId: 'activity-popout-overflow-popout',
        onClose: n,
        onSelect: t,
        'aria-label': r.intl.string(r.t.SS9Y6O),
        children: d
    });
}
