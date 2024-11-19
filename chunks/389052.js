n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(990547),
    s = n(442837),
    o = n(481060),
    l = n(194359),
    u = n(843931),
    c = n(1596),
    d = n(922611),
    f = n(699516),
    _ = n(594174),
    p = n(626135),
    h = n(981631),
    m = n(388032);
function g(e) {
    let { user: t, color: n, onBlock: g, onUnblock: E, location: v = 'ContextMenu' } = e,
        { id: b } = t,
        I = (0, s.e7)(
            [_.default],
            () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === b;
            },
            [b]
        ),
        T = (0, s.e7)([f.Z], () => f.Z.isBlocked(b), [b]),
        S = (0, d.Do)({ location: 'use-block-user-item-web' }),
        y = (0, i.EQ)({
            isStealthRemediationEnabled: S,
            isBlocked: T
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
    return I
        ? null
        : (0, r.jsx)(o.MenuItem, {
              id: 'block',
              color: null != y ? y : 'default',
              label: T ? m.intl.string(m.t.XyHpKC) : m.intl.string(m.t.l4EmaW),
              action: T
                  ? () => {
                        null == E || E(), l.Z.unblockUser(b, { location: v });
                    }
                  : () => {
                        (0, o.openModal)((e) =>
                            (0, r.jsx)(o.ConfirmModal, {
                                header: m.intl.formatToPlainString(m.t.x5pOn5, { name: t.username }),
                                confirmText: m.intl.string(m.t.l4EmaW),
                                cancelText: m.intl.string(m.t['ETE/oK']),
                                onConfirm: () => {
                                    null == g || g(),
                                        l.Z.addRelationship({
                                            userId: b,
                                            context: { location: v },
                                            type: h.OGo.BLOCKED
                                        }),
                                        p.default.track(h.rMx.BLOCK_USER_CONFIRMED);
                                },
                                impression: { impressionName: a.ImpressionNames.BLOCK_USER_CONFIRMATION },
                                ...e,
                                children: (0, u.cC)({ location: 'confirm_block_modal' })
                                    ? (0, r.jsx)(c.Z, {})
                                    : (0, r.jsx)(o.Text, {
                                          variant: 'text-md/normal',
                                          children: m.intl.format(m.t.pegItL, { name: t.username })
                                      })
                            })
                        );
                    }
          });
}
