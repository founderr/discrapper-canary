n.d(t, {
    z: function () {
        return c;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(833592),
    o = n(388032);
let s = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, i.jsx)(l.Menu, {
            navId: 'notification-actions',
            onClose: n,
            onSelect: n,
            'aria-label': o.intl.string(o.t.ljs3OT),
            children: (0, i.jsx)(l.MenuItem, {
                id: 'delete',
                label: o.intl.string(o.t.oyYWHB),
                icon: l.TrashIcon,
                action: async () => {
                    await (0, a.g3)(t);
                }
            })
        });
    },
    c = r.memo(function (e) {
        let { item: t } = e;
        return (0, i.jsx)(l.Popout, {
            renderPopout: (e) =>
                (0, i.jsx)(s, {
                    ...e,
                    item: t
                }),
            position: 'bottom',
            align: 'right',
            animation: l.Popout.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(l.CircleIconButton, {
                    tooltip: o.intl.string(o.t.UKOtz8),
                    color: l.CircleIconButtonColors.TERTIARY,
                    icon: (0, i.jsx)(l.MoreHorizontalIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: (e) => {
                        e.stopPropagation(), t(e);
                    },
                    'aria-haspopup': 'menu'
                });
            }
        });
    });
