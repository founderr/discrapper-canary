n.d(t, {
    Z: function () {
        return E;
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
    _ = n(689938);
function E(e) {
    let { user: t, color: n, onBlock: E, onUnblock: f, location: h = 'ContextMenu' } = e,
        { id: p } = t,
        I = (0, i.e7)(
            [c.default],
            () => {
                var e;
                return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === p;
            },
            [p]
        ),
        m = (0, i.e7)([u.Z], () => u.Z.isBlocked(p), [p]);
    return I
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'block',
              color: n,
              label: m ? _.Z.Messages.UNBLOCK : _.Z.Messages.BLOCK,
              action: m
                  ? () => {
                        null == f || f(), s.Z.unblockUser(p, { location: h });
                    }
                  : () => {
                        (0, a.openModal)((e) =>
                            (0, r.jsx)(a.ConfirmModal, {
                                header: _.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({ name: t.username }),
                                confirmText: _.Z.Messages.BLOCK,
                                cancelText: _.Z.Messages.CANCEL,
                                onConfirm: () => {
                                    null == E || E(),
                                        s.Z.addRelationship({
                                            userId: p,
                                            context: { location: h },
                                            type: d.OGo.BLOCKED
                                        });
                                },
                                ...e,
                                children: (0, o.c)({ location: 'confirm_block_modal' })
                                    ? (0, r.jsx)(l.Z, {})
                                    : (0, r.jsx)(a.Text, {
                                          variant: 'text-md/normal',
                                          children: _.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({ name: t.username })
                                      })
                            })
                        );
                    }
          });
}
