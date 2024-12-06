t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(377171),
    s = t(854698),
    o = t(388032),
    c = t(195197);
function d(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
        u = i.useMemo(() => (0, s.zi)(n, t), [t, n]),
        m = (0, s.P8)(n),
        x = (e) => e.toString(),
        h = (0, l.jsxs)('div', {
            className: c.title,
            children: [
                o.intl.string(o.t['59TVxM']),
                (0, l.jsx)(r.TextBadge, {
                    text: o.intl.string(o.t.y2b7CA),
                    color: a.Z.BG_BRAND
                })
            ]
        });
    return (0, l.jsx)(r.FormItem, {
        title: h,
        required: !0,
        children: (0, l.jsx)(r.Select, {
            placeholder: 'gaming',
            options: m,
            select: d,
            serialize: x,
            isSelected: (e) => null != u && x(e) === x(u)
        })
    });
}
