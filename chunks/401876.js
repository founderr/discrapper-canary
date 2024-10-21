t.d(n, {
    Z: function () {
        return d;
    }
});
var a = t(200651),
    l = t(192379),
    s = t(481060),
    i = t(377171),
    r = t(854698),
    o = t(689938),
    c = t(94277);
function d(e) {
    let { startDate: n, recurrenceRule: t, onRecurrenceChange: d } = e,
        u = l.useMemo(() => (0, r.zi)(n, t), [t, n]),
        _ = (0, r.P8)(n),
        E = (e) => e.toString(),
        h = (0, a.jsxs)('div', {
            className: c.title,
            children: [
                o.Z.Messages.CREATE_EVENT_RECUR_LABEL,
                (0, a.jsx)(s.TextBadge, {
                    text: o.Z.Messages.NEW,
                    color: i.Z.BG_BRAND
                })
            ]
        });
    return (0, a.jsx)(s.FormItem, {
        title: h,
        required: !0,
        children: (0, a.jsx)(s.Select, {
            placeholder: 'gaming',
            options: _,
            select: d,
            serialize: E,
            isSelected: (e) => null != u && E(e) === E(u)
        })
    });
}
