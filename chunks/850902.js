t.r(e),
    t.d(e, {
        default: function () {
            return c;
        }
    });
var i = t(200651);
t(192379);
var r = t(481060),
    o = t(239091),
    l = t(388032);
function c(n) {
    let { roleId: e, onLeaveRole: t, onSelect: c } = n;
    return (0, i.jsx)(
        r.Menu,
        {
            navId: 'guild-role-connections-context',
            'aria-label': l.intl.string(l.t.vytvJC),
            onClose: o.Zy,
            onSelect: c,
            children: (0, i.jsx)(r.MenuGroup, {
                children: (0, i.jsx)(
                    r.MenuItem,
                    {
                        id: 'guild-role-connections-leave-role',
                        label: l.intl.string(l.t.vytvJC),
                        action: t,
                        color: 'danger'
                    },
                    e
                )
            })
        },
        e
    );
}
