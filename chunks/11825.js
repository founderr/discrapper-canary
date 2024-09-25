n.d(t, {
    z: function () {
        return u;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(833592),
    s = n(689938);
let l = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, r.jsx)(a.Menu, {
            navId: 'notification-actions',
            onClose: n,
            onSelect: n,
            'aria-label': s.Z.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
            children: (0, r.jsx)(a.MenuItem, {
                id: 'delete',
                label: s.Z.Messages.DELETE,
                icon: a.TrashIcon,
                action: async () => {
                    await (0, o.g3)(t);
                }
            })
        });
    },
    u = i.memo(function (e) {
        let { item: t } = e,
            n = (e) =>
                (0, r.jsx)(l, {
                    ...e,
                    item: t
                });
        return (0, r.jsx)(a.Popout, {
            renderPopout: n,
            position: 'bottom',
            align: 'right',
            animation: a.Popout.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(a.CircleIconButton, {
                    tooltip: s.Z.Messages.MORE,
                    color: a.CircleIconButtonColors.TERTIARY,
                    icon: (0, r.jsx)(a.MoreHorizontalIcon, {
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
