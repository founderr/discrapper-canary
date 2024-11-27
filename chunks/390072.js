n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(725436),
    a = n(997321),
    o = n(217804),
    c = n(765305),
    u = n(295267);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        h = t.entity_type === c.WX.EXTERNAL,
        g = r.useCallback((e) => (0, a.Qt)(t, d)(e), [t, d]),
        m = (0, o.u)(t, n);
    if (null == m) return null;
    let { IconComponent: f, locationName: p } = m,
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                null != f &&
                    (0, i.jsx)(f, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: u.channelIcon
                    }),
                (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: u.locationText,
                    children: (0, l.m)(p, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: u.row,
        children:
            null != g
                ? (0, i.jsx)(s.Clickable, {
                      className: h ? u.externalLocation : u.channelLocation,
                      onClick: g,
                      children: x
                  })
                : x
    });
}
