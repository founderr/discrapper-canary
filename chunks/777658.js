t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    a = t(442837),
    s = t(481060),
    o = t(194359),
    u = t(699516),
    d = t(594174),
    r = t(689938);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu',
        { id: t, username: c, bot: Z } = e,
        E = (0, a.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t;
            },
            [t]
        ),
        [M, f] = (0, a.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [t]),
        [_, I] = i.useState(!1);
    return Z || E
        ? null
        : M
          ? (0, l.jsx)(s.MenuItem, {
                id: 'remove-friend',
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                    (0, s.openModal)((e) =>
                        (0, l.jsx)(s.ConfirmModal, {
                            header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({ name: c }),
                            confirmText: r.Z.Messages.REMOVE_FRIEND,
                            cancelText: r.Z.Messages.CANCEL,
                            onConfirm: () => {
                                o.Z.removeFriend(t, { location: n }), I(!1);
                            },
                            ...e,
                            children: (0, l.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: r.Z.Messages.REMOVE_FRIEND_BODY.format({ name: c })
                            })
                        })
                    );
                }
            })
          : (0, l.jsx)(s.MenuItem, {
                id: 'add-friend',
                label: _ ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER : r.Z.Messages.ADD_FRIEND,
                action: () => {
                    !_ &&
                        (o.Z.addRelationship({
                            userId: t,
                            context: { location: n }
                        }),
                        I(!0));
                },
                disabled: f || (_ && !M)
            });
}
