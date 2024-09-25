n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(149765),
    a = n(993365),
    o = n(481060),
    s = n(981631),
    l = n(689938),
    u = n(507119);
let c = 5;
function d(e) {
    let { error: t, selectedGuildId: n, onGuildChange: d, guilds: _, disabled: E = !1 } = e,
        f = _.filter((e) => i.e$(e.permissions, s.Plq.MANAGE_GUILD)).map((e) => ({
            value: e.id,
            label: e.name
        }));
    return (0, r.jsxs)('div', {
        className: u.selectorGroup,
        children: [
            (0, r.jsx)(o.Heading, {
                variant: 'heading-deprecated-12/semibold',
                className: u.sectionLabel,
                children: l.Z.Messages.OAUTH2_ADD_TO_GUILD
            }),
            null != t && '' !== t
                ? (0, r.jsx)(a.x, {
                      variant: 'text-xs/normal',
                      color: 'text-danger',
                      children: t
                  })
                : null,
            (0, r.jsx)(o.SearchableSelect, {
                wrapperClassName: u.select,
                maxVisibleItems: c,
                placeholder: l.Z.Messages.OAUTH2_ADD_TO_GUILD_PLACEHOLDER,
                options: f,
                onChange: d,
                isDisabled: E,
                value: n
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-xs/medium',
                color: 'header-secondary',
                className: u.label,
                children: l.Z.Messages.OAUTH2_ADD_TO_GUILD_DESCRIPTION.format()
            })
        ]
    });
}
