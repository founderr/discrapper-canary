t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    l = t(442837),
    a = t(481060),
    o = t(194359),
    u = t(699516),
    d = t(594174),
    r = t(689938);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu',
        { id: t, username: c, bot: E } = e,
        Z = (0, l.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t;
            },
            [t]
        ),
        [M, _] = (0, l.Wu)([u.Z], () => [u.Z.isFriend(t), u.Z.isBlocked(t)], [t]),
        [f, g] = i.useState(!1);
    return E || Z
        ? null
        : M
          ? (0, s.jsx)(a.MenuItem, {
                id: 'remove-friend',
                label: r.Z.Messages.REMOVE_FRIEND,
                action: function () {
                    (0, a.openModal)((e) =>
                        (0, s.jsx)(a.ConfirmModal, {
                            header: r.Z.Messages.REMOVE_FRIEND_TITLE.format({ name: c }),
                            confirmText: r.Z.Messages.REMOVE_FRIEND,
                            cancelText: r.Z.Messages.CANCEL,
                            onConfirm: () => {
                                o.Z.removeFriend(t, { location: n }), g(!1);
                            },
                            ...e,
                            children: (0, s.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: r.Z.Messages.REMOVE_FRIEND_BODY.format({ name: c })
                            })
                        })
                    );
                }
            })
          : (0, s.jsx)(a.MenuItem, {
                id: 'add-friend',
                label: f ? r.Z.Messages.ADD_FRIEND_BUTTON_AFTER : r.Z.Messages.ADD_FRIEND,
                action: () => {
                    !f &&
                        (o.Z.addRelationship({
                            userId: t,
                            context: { location: n }
                        }),
                        g(!0));
                },
                disabled: _ || (f && !M)
            });
}
