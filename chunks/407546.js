n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(149765),
    a = n(260034),
    o = n(993365),
    s = n(481060),
    l = n(981631),
    u = n(689938),
    c = n(507119);
let d = 5;
function _(e) {
    let { error: t, selectedGuildId: n, onGuildChange: _, guilds: E, disabled: f = !1 } = e,
        h = E.filter((e) => i.e$(e.permissions, l.Plq.MANAGE_GUILD)).map((e) => ({
            value: e.id,
            label: e.name
        }));
    return (0, r.jsxs)('div', {
        className: c.selectorGroup,
        children: [
            (0, r.jsx)(a.X, {
                variant: 'heading-deprecated-12/semibold',
                className: c.sectionLabel,
                children: u.Z.Messages.OAUTH2_ADD_TO_GUILD
            }),
            null != t && '' !== t
                ? (0, r.jsx)(o.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, r.jsx)(s.SearchableSelect, {
                wrapperClassName: c.select,
                maxVisibleItems: d,
                placeholder: u.Z.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                options: h,
                onChange: _,
                isDisabled: f,
                value: n
            }),
            (0, r.jsx)(o.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: c.label,
                children: u.Z.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
            })
        ]
    });
}
