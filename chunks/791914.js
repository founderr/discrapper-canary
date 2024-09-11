n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var s = n(399606),
    a = n(524437),
    r = n(481060),
    l = n(494404),
    o = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(768943),
    _ = n(742989),
    E = n(818186),
    I = n(689938),
    m = n(811304);
function T(e) {
    let { tab: t, setTab: n, children: T, badgeState: h, closePopout: N } = e,
        { showReminders: C } = _.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: f } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        p = (0, s.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        g = (0, s.e7)([d.Z], () => d.Z.getMessageReminders()).length;
    return (0, i.jsxs)(l.h4, {
        className: m.header,
        children: [
            (0, i.jsxs)('div', {
                className: m.headerTitle,
                children: [
                    (0, i.jsx)(r.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: m.inboxIcon
                    }),
                    (0, i.jsx)(r.Text, {
                        className: m.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: I.Z.Messages.INBOX
                    }),
                    (0, i.jsxs)('div', {
                        className: m.controls,
                        children: [T, (0, i.jsx)(E.Z, { closePopout: N })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: m.headerTabs,
                children: (0, i.jsxs)(r.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: m.tabBar,
                    children: [
                        (0, i.jsxs)(r.TabBar.Item, {
                            id: a.X.FOR_YOU,
                            'aria-label': I.Z.Messages.FOR_YOU,
                            className: m.tab,
                            children: [
                                I.Z.Messages.FOR_YOU,
                                (null == h ? void 0 : h.badgeForYou)
                                    ? (0, i.jsx)(r.CircleBadge, {
                                          color: o.Z.STATUS_DANGER,
                                          className: m.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(r.TabBar.Item, {
                            id: a.X.UNREADS,
                            className: m.tab,
                            children: I.Z.Messages.UNREADS_TAB_LABEL
                        }),
                        (0, i.jsx)(r.TabBar.Item, {
                            'aria-label': I.Z.Messages.MENTIONS,
                            id: a.X.MENTIONS,
                            className: m.tab,
                            children: I.Z.Messages.MENTIONS
                        }),
                        f
                            ? (0, i.jsxs)(r.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: a.X.GAME_INVITES,
                                  className: m.tab,
                                  children: [
                                      I.Z.Messages.GAME_INVITES,
                                      p > 0
                                          ? (0, i.jsx)(r.CircleBadge, {
                                                color: o.Z.STATUS_DANGER,
                                                className: m.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        C
                            ? (0, i.jsxs)(r.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: a.X.TODOS,
                                  className: m.tab,
                                  children: [
                                      I.Z.Messages.MESSAGE_REMINDERS_HEADER,
                                      g > 0
                                          ? (0, i.jsx)(r.CircleBadge, {
                                                color: o.Z.STATUS_DANGER,
                                                className: m.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
