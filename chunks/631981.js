n.r(t);
var r = n(200651);
n(192379);
var c = n(442837),
    i = n(481060),
    o = n(239091),
    u = n(883385),
    a = n(853856),
    s = n(117984),
    l = n(981631),
    d = n(388032);
t.default = (0, u.Z)(
    function (e) {
        let { onSelect: t } = e,
            n = (0, c.e7)([a.Z], () => a.Z.favoriteServerMuted);
        return (0, r.jsx)(i.Menu, {
            navId: 'favorite-server-context',
            onClose: o.Zy,
            'aria-label': d.intl.string(d.t.liqwPD),
            onSelect: t,
            children: (0, r.jsx)(i.MenuGroup, {
                children: (0, r.jsx)(i.MenuCheckboxItem, {
                    id: 'mute-server',
                    label: d.intl.string(d.t.vRzp7O),
                    action: () => (0, s._Z)(),
                    checked: n
                })
            })
        });
    },
    { object: l.qAy.CONTEXT_MENU }
);
