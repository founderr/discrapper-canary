n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(843931),
    l = n(1596),
    u = n(699516),
    c = n(594174),
    d = n(981631),
    f = n(388032);
function _(e) {
    let { user: t, color: n, onBlock: _, onUnblock: h, location: p = 'ContextMenu' } = e,
        { id: m } = t,
        g = (0, i.e7)(
            [c.default],
            () => {
                var e;
                return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === m;
            },
            [m]
        ),
        E = (0, i.e7)([u.Z], () => u.Z.isBlocked(m), [m]);
    return g
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'block',
              color: n,
              label: E ? f.intl.string(f.t.XyHpKC) : f.intl.string(f.t.l4EmaW),
              action: E
                  ? () => {
                        null == h || h(), s.Z.unblockUser(m, { location: p });
                    }
                  : () => {
                        (0, a.openModal)((e) =>
                            (0, r.jsx)(a.ConfirmModal, {
                                header: f.intl.formatToPlainString(f.t.x5pOn5, { name: t.username }),
                                confirmText: f.intl.string(f.t.l4EmaW),
                                cancelText: f.intl.string(f.t['ETE/oK']),
                                onConfirm: () => {
                                    null == _ || _(),
                                        s.Z.addRelationship({
                                            userId: m,
                                            context: { location: p },
                                            type: d.OGo.BLOCKED
                                        });
                                },
                                ...e,
                                children: (0, o.c)({ location: 'confirm_block_modal' })
                                    ? (0, r.jsx)(l.Z, {})
                                    : (0, r.jsx)(a.Text, {
                                          variant: 'text-md/normal',
                                          children: f.intl.format(f.t.pegItL, { name: t.username })
                                      })
                            })
                        );
                    }
          });
}
