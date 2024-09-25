n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(399606),
    a = n(524437),
    o = n(481060),
    s = n(494404),
    l = n(377171),
    u = n(317632),
    c = n(602478),
    d = n(2818),
    _ = n(768943),
    E = n(742989),
    f = n(818186),
    h = n(689938),
    p = n(811304);
function m(e) {
    let { tab: t, setTab: n, children: m, badgeState: I, closePopout: T } = e,
        { showReminders: g } = E.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: S, inInbox: A } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: v } = c.Z.useExperiment({ location: 'RecentsHeader' }),
        N = (0, i.e7)([u.Z], () => u.Z.getUnseenInviteCount()),
        O = (0, i.e7)([_.Z], () => _.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(s.h4, {
        className: p.header,
        children: [
            (0, r.jsxs)('div', {
                className: p.headerTitle,
                children: [
                    (0, r.jsx)(o.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: p.inboxIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        className: p.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: h.Z.Messages.INBOX
                    }),
                    (0, r.jsxs)('div', {
                        className: p.controls,
                        children: [m, (0, r.jsx)(f.Z, { closePopout: T })]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: p.headerTabs,
                children: (0, r.jsxs)(o.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: p.tabBar,
                    children: [
                        (0, r.jsxs)(o.TabBar.Item, {
                            id: a.X.FOR_YOU,
                            'aria-label': h.Z.Messages.FOR_YOU,
                            className: p.tab,
                            children: [
                                h.Z.Messages.FOR_YOU,
                                (null == I ? void 0 : I.badgeForYou)
                                    ? (0, r.jsx)(o.CircleBadge, {
                                          color: l.Z.STATUS_DANGER,
                                          className: p.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.TabBar.Item, {
                            id: a.X.UNREADS,
                            className: p.tab,
                            children: h.Z.Messages.UNREADS_TAB_LABEL
                        }),
                        (0, r.jsx)(o.TabBar.Item, {
                            'aria-label': h.Z.Messages.MENTIONS,
                            id: a.X.MENTIONS,
                            className: p.tab,
                            children: h.Z.Messages.MENTIONS
                        }),
                        v
                            ? (0, r.jsxs)(o.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: a.X.GAME_INVITES,
                                  className: p.tab,
                                  children: [
                                      h.Z.Messages.GAME_INVITES,
                                      N > 0
                                          ? (0, r.jsx)(o.CircleBadge, {
                                                color: l.Z.STATUS_DANGER,
                                                className: p.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        S && A
                            ? (0, r.jsx)(o.TabBar.Item, {
                                  'aria-label': h.Z.Messages.FOR_LATER,
                                  id: a.X.BOOKMARKS,
                                  className: p.tab,
                                  children: 0 === O ? h.Z.Messages.FOR_LATER : h.Z.Messages.FOR_LATER_COUNT.format({ count: O })
                              })
                            : null,
                        g && !S
                            ? (0, r.jsx)(o.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: a.X.TODOS,
                                  className: p.tab,
                                  children: 0 === O ? h.Z.Messages.FOR_LATER_TAB_REMINDERS : h.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: O })
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
