n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(149765),
    a = n(993365),
    s = n(481060),
    o = n(981631),
    l = n(388032),
    u = n(111686);
function c(e) {
    let { error: t, selectedGuildId: n, onGuildChange: c, guilds: d, disabled: f = !1 } = e,
        _ = d
            .filter((e) => i.e$(e.permissions, o.Plq.MANAGE_GUILD))
            .map((e) => ({
                value: e.id,
                label: e.name
            }));
    return (0, r.jsxs)('div', {
        className: u.selectorGroup,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-deprecated-12/semibold',
                className: u.sectionLabel,
                children: l.intl.string(l.t['1DXFFR'])
            }),
            null != t && '' !== t
                ? (0, r.jsx)(a.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, r.jsx)(s.SearchableSelect, {
                wrapperClassName: u.select,
                maxVisibleItems: 5,
                placeholder: l.intl.string(l.t.oM4E1N),
                options: _,
                onChange: c,
                isDisabled: f,
                value: n
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: u.label,
                children: l.intl.format(l.t.t9Jm9v, {})
            })
        ]
    });
}
