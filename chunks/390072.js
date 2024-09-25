n.d(t, {
    Z: function () {
        return d;
    }
});
var s = n(735250),
    r = n(470079),
    i = n(481060),
    a = n(725436),
    o = n(11868),
    l = n(217804),
    c = n(765305),
    u = n(448144);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        _ = t.entity_type === c.WX.EXTERNAL,
        h = r.useCallback((e) => (0, o.Qt)(t, d)(e), [t, d]),
        E = (0, l.u)(t, n);
    if (null == E) return null;
    let { IconComponent: p, locationName: g } = E,
        m = (0, s.jsxs)(s.Fragment, {
            children: [
                null != p &&
                    (0, s.jsx)(p, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: u.channelIcon
                    }),
                (0, s.jsx)(i.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: u.locationText,
                    children: (0, a.m)(g, !0)
                })
            ]
        });
    return (0, s.jsx)('div', {
        className: u.row,
        children:
            null != h
                ? (0, s.jsx)(i.Clickable, {
                      className: _ ? u.externalLocation : u.channelLocation,
                      onClick: h,
                      children: m
                  })
                : m
    });
}
