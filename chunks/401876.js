t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(200651),
    i = t(192379),
    a = t(481060),
    r = t(377171),
    o = t(854698),
    s = t(388032),
    c = t(94277);
function d(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
        u = i.useMemo(() => (0, o.zi)(n, t), [t, n]),
        h = (0, o.P8)(n),
        m = (e) => e.toString(),
        x = (0, l.jsxs)('div', {
            className: c.title,
            children: [
                s.intl.string(s.t['59TVxM']),
                (0, l.jsx)(a.TextBadge, {
                    text: s.intl.string(s.t.y2b7CA),
                    color: r.Z.BG_BRAND
                })
            ]
        });
    return (0, l.jsx)(a.FormItem, {
        title: x,
        required: !0,
        children: (0, l.jsx)(a.Select, {
            placeholder: 'gaming',
            options: h,
            select: d,
            serialize: m,
            isSelected: (e) => null != u && m(e) === m(u)
        })
    });
}
