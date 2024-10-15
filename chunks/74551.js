n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250),
    a = n(481060),
    s = n(575016),
    r = n(533043);
function l(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: l, isOverdue: o } = (0, s.AT)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: s.hQ.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let c = o ? 'text-danger' : 'text-normal';
    return (0, i.jsxs)('div', {
        className: r.container,
        children: [
            (0, i.jsx)('div', {
                className: r.icon,
                children: (0, i.jsx)(a.ClockIcon, {
                    size: 'xxs',
                    color: 'text-danger' === c ? a.tokens.colors.TEXT_DANGER : a.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(a.Heading, {
                variant: 'text-md/semibold',
                color: c,
                children: l
            })
        ]
    });
}
