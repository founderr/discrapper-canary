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
    u = n(629777);
function m(e) {
    let { guildBoostSlot: t, onClose: m, hasCancelableGuildBoostSlot: g, premiumSubscription: h, onSelect: p, fractionalState: x } = e,
        T = {
            transfer: {
                label: null != t.premiumGuildSubscription ? d.intl.string(d.t['PR0n//']) : d.intl.string(d.t['+fmEYG']),
                subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: d.intl.string(d.t.twFU3d),
                subtext: g ? null : d.intl.string(d.t.oQ9lOj),
                disabled: !g
            },
            uncancel: {
                label: d.intl.string(d.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (h.status) {
        case o.O0b.PAST_DUE:
            (T.cancel.disabled = !0), (T.cancel.subtext = d.intl.string(d.t.WnL6DQ)), (T.uncancel.disabled = !0);
            break;
        case o.O0b.PAUSE_PENDING:
        case o.O0b.PAUSED:
            x === c.a$.NONE && ((T.transfer.disabled = !0), (T.transfer.subtext = d.intl.string(d.t.LiLRRU))), (T.cancel.subtext = d.intl.string(d.t['1ywaWF'])), (T.cancel.disabled = !0), (T.uncancel.disabled = !0);
    }
    x !== c.a$.NONE && ((T.cancel.subtext = d.intl.string(d.t.dq4vq6)), (T.cancel.disabled = !0), (T.uncancel.disabled = !0));
    let S = s.useMemo(
        () =>
            h.isPausedOrPausePending && x === c.a$.NONE
                ? (0, i.jsx)(r.MenuItem, {
                      id: 'manage-subscription',
                      label: d.intl.string(d.t.obRG6e),
                      action: () => l.Z.open(o.oAB.SUBSCRIPTIONS),
                      iconLeft: r.LightbulbIcon,
                      className: u.manageSubscription
                  })
                : null,
        [x, h]
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
                label: T.transfer.label,
                subtext: T.transfer.subtext,
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
                disabled: T.transfer.disabled
            }),
            (0, a.tl)(t)
                ? (0, i.jsx)(r.MenuItem, {
                      id: 'uncancel',
                      label: T.uncancel.label,
                      subtext: T.uncancel.subtext,
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
                      disabled: T.uncancel.disabled
                  })
                : (0, i.jsx)(r.MenuItem, {
                      id: 'cancel',
                      label: T.cancel.label,
                      subtext: T.cancel.subtext,
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
                      disabled: T.cancel.disabled,
                      color: 'danger'
                  }),
            S
        ]
    });
}
