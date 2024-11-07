n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(230711),
    l = n(267642),
    a = n(981631),
    o = n(388032),
    c = n(148282);
function d(e) {
    let { guildBoostSlot: t, onClose: d, hasCancelableGuildBoostSlot: u, premiumSubscription: m, onSelect: h } = e,
        g = {
            transfer: {
                label: null != t.premiumGuildSubscription ? o.intl.string(o.t['PR0n//']) : o.intl.string(o.t['+fmEYG']),
                subtext: t.isOnCooldown() ? o.intl.string(o.t.XnB8Mz) : null,
                disabled: t.isOnCooldown()
            },
            cancel: {
                label: o.intl.string(o.t.twFU3d),
                subtext: u ? null : o.intl.string(o.t.oQ9lOj),
                disabled: !u
            },
            uncancel: {
                label: o.intl.string(o.t['2glQNj']),
                subtext: null,
                disabled: !1
            }
        };
    switch (m.status) {
        case a.O0b.PAST_DUE:
            (g.cancel.disabled = !0), (g.cancel.subtext = o.intl.string(o.t.WnL6DQ)), (g.uncancel.disabled = !0);
            break;
        case a.O0b.PAUSE_PENDING:
        case a.O0b.PAUSED:
            (g.transfer.disabled = !0), (g.transfer.subtext = o.intl.string(o.t.LiLRRU)), (g.cancel.disabled = !0), (g.cancel.subtext = o.intl.string(o.t['1ywaWF'])), (g.uncancel.disabled = !0);
    }
    return (0, i.jsxs)(s.Menu, {
        onSelect: h,
        navId: 'subscription-context',
        variant: 'fixed',
        'aria-label': o.intl.string(o.t.ogxXGh),
        onClose: d,
        children: [
            (0, i.jsx)(s.MenuItem, {
                id: 'apply',
                label: g.transfer.label,
                subtext: g.transfer.subtext,
                action: function () {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 760558));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildBoostSlots: [t],
                                locationSection: a.jXE.SETTINGS_PREMIUM
                            });
                    });
                },
                disabled: g.transfer.disabled
            }),
            (0, l.tl)(t)
                ? (0, i.jsx)(s.MenuItem, {
                      id: 'uncancel',
                      label: g.uncancel.label,
                      subtext: g.uncancel.subtext,
                      action: function () {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 450468));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlotId: t.id
                                  });
                          });
                      },
                      disabled: g.uncancel.disabled
                  })
                : (0, i.jsx)(s.MenuItem, {
                      id: 'cancel',
                      label: g.cancel.label,
                      subtext: g.cancel.subtext,
                      action: function () {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 401786));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      guildBoostSlot: t
                                  });
                          });
                      },
                      disabled: g.cancel.disabled,
                      color: 'danger'
                  }),
            m.isPausedOrPausePending
                ? (0, i.jsx)(s.MenuItem, {
                      id: 'manage-subscription',
                      label: o.intl.string(o.t.obRG6e),
                      action: () => r.Z.open(a.oAB.SUBSCRIPTIONS),
                      iconLeft: s.LightbulbIcon,
                      className: c.manageSubscription
                  })
                : null
        ]
    });
}
