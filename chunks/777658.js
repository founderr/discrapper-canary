n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(194359),
    u = n(699516),
    d = n(594174),
    s = n(388032);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu',
        { id: n, username: c, bot: f } = e,
        Z = (0, r.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n;
            },
            [n]
        ),
        [g, m] = (0, r.Wu)([u.Z], () => [u.Z.isFriend(n), u.Z.isBlocked(n)], [n]),
        [v, b] = l.useState(!1);
    return f || Z
        ? null
        : g
          ? (0, i.jsx)(o.MenuItem, {
                id: 'remove-friend',
                label: s.intl.string(s.t.cvSt1N),
                action: function () {
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: s.intl.formatToPlainString(s.t.fPLvZW, { name: c }),
                            confirmText: s.intl.string(s.t.cvSt1N),
                            cancelText: s.intl.string(s.t['ETE/oK']),
                            onConfirm: () => {
                                a.Z.removeFriend(n, { location: t }), b(!1);
                            },
                            ...e,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.format(s.t.l5FFq6, { name: c })
                            })
                        })
                    );
                }
            })
          : (0, i.jsx)(o.MenuItem, {
                id: 'add-friend',
                label: v ? s.intl.string(s.t.xMH6vL) : s.intl.string(s.t.w5uwoK),
                action: () => {
                    !v &&
                        (a.Z.addRelationship({
                            userId: n,
                            context: { location: t }
                        }),
                        b(!0));
                },
                disabled: m || (v && !g)
            });
}
