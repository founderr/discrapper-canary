n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(230711),
    a = n(267642),
    o = n(981631),
    c = n(474936),
    d = n(388032),
    u = n(802261);
function m(e) {
    let { guildBoostSlot: t, onClose: m, hasCancelableGuildBoostSlot: h, premiumSubscription: g, onSelect: p, fractionalState: x } = e,
        S = {
            transfer: {
                label: null != t.premiumGuildSubscription ? d.intl.string(d.t['PR0n//']) : d.intl.string(d.t['+fmEYG']),
                subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: d.intl.string(d.t.twFU3d),
                subtext: h ? null : d.intl.string(d.t.oQ9lOj),
                disabled: !h
            },
            uncancel: {
                label: d.intl.string(d.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (g.status) {
        case o.O0b.PAST_DUE:
            (S.cancel.disabled = !0), (S.cancel.subtext = d.intl.string(d.t.WnL6DQ)), (S.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            x === c.a$.FP_SUB ? (S.cancel.subtext = d.intl.string(d.t['07lzz8'])) : ((S.transfer.disabled = !0), (S.transfer.subtext = d.intl.string(d.t.LiLRRU)), (S.cancel.subtext = d.intl.string(d.t['1ywaWF']))), (S.cancel.disabled = !0), (S.uncancel.disabled = !0);
    }
    let T = s.useMemo(
        () =>
            g.isPausedOrPausePending && x === c.a$.NONE
                ? (0, i.jsx)(r.MenuItem, {
                      id: 'manage-subscription',
                      label: d.intl.string(d.t.obRG6e),
                      action: () => l.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: r.LightbulbIcon,
                      className: u.manageSubscription
                  })
                : null,
        [x, g]
    );
    return (0, i.jsxs)(r.Menu, {
        onSelect: p,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': d.intl.string(d.t.ogxXGh),
        onClose: m,
        children: [
            (0, i.jsx)(r.MenuItem, {
                id: 'apply',
                label: S.transfer.label,
                subtext: S.transfer.subtext,
                action: function () {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildBoostSlots: [t],
                                locationSection: o.jXE.SETTINGS_PREMIUM
                            });
                    });
                },
                disabled: S.transfer.disabled
            }),
            (0, a.tl)(t)
                ? (0, i.jsx)(r.MenuItem, {
                      id: 'uncancel',
                      label: S.uncancel.label,
                      subtext: S.uncancel.subtext,
                      action: function () {
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlotId: t.id
                                  });
                          });
                      },
                      disabled: S.uncancel.disabled
                  })
                : (0, i.jsx)(r.MenuItem, {
                      id: 'cancel',
                      label: S.cancel.label,
                      subtext: S.cancel.subtext,
                      action: function () {
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlot: t
                                  });
                          });
                      },
                      disabled: S.cancel.disabled,
                      color: 'danger'
                  }),
            T
        ]
    });
}
