n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(843931),
    u = n(1596),
    c = n(922611),
    d = n(699516),
    f = n(594174),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { user: t, color: n, onBlock: h, onUnblock: m, location: g = 'ContextMenu' } = e,
        { id: E } = t,
        v = (0, a.e7)(
            [f.default],
            () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === E;
            },
            [E]
        ),
        I = (0, a.e7)([d.Z], () => d.Z.isBlocked(E), [E]),
        b = (0, c.Do)({ location: 'use-block-user-item-web' }),
        S = (0, i.EQ)({
            isStealthRemediationEnabled: b,
            isBlocked: I
        })
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () => 'default'
            )
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () => 'danger'
            )
            .otherwise(() => n);
    return v
        ? null
        : (0, r.jsx)(s.MenuItem, {
              id: 'block',
              color: null != S ? S : 'default',
              label: I ? p.intl.string(p.t.XyHpKC) : p.intl.string(p.t.l4EmaW),
              action: I
                  ? () => {
                        null == m || m(), o.Z.unblockUser(E, { location: g });
                    }
                  : () => {
                        (0, s.openModal)((e) =>
                            (0, r.jsx)(s.ConfirmModal, {
                                header: p.intl.formatToPlainString(p.t.x5pOn5, { name: t.username }),
                                confirmText: p.intl.string(p.t.l4EmaW),
                                cancelText: p.intl.string(p.t['ETE/oK']),
                                onConfirm: () => {
                                    null == h || h(),
                                        o.Z.addRelationship({
                                            userId: E,
                                            context: { location: g },
                                            type: _.OGo.BLOCKED
                                        });
                                },
                                ...e,
                                children: (0, l.c)({ location: 'confirm_block_modal' })
                                    ? (0, r.jsx)(u.Z, {})
                                    : (0, r.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          children: p.intl.format(p.t.pegItL, { name: t.username })
                                      })
                            })
                        );
                    }
          });
}
