n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250),
    i = n(481060),
    a = n(575016),
    o = n(533043);
function s(e) {
    let { reminder: t, throttledNow: n } = e,
        { dueInText: s, isOverdue: l } = (0, a.A)({
            dueAt: null == t ? void 0 : t.saveData.dueAt,
            now: n,
            type: a.h.SHORT
        });
    if (null == t.saveData.dueAt) return null;
    let u = l ? 'text-danger' : 'text-normal';
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)('div', {
                className: o.icon,
                children: (0, r.jsx)(i.ClockIcon, {
                    size: 'xxs',
                    color: 'text-danger' === u ? i.tokens.colors.TEXT_DANGER : i.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, r.jsx)(i.Heading, {
                variant: 'text-md/semibold',
                color: u,
                children: s
            })
        ]
    });
}
