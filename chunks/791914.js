n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var a = n(399606),
    s = n(524437),
    r = n(481060),
    l = n(494404),
    o = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(2818),
    _ = n(768943),
    E = n(742989),
    I = n(818186),
    m = n(689938),
    T = n(811304);
function f(e) {
    let { tab: t, setTab: n, children: f, badgeState: h, closePopout: N } = e,
        { showReminders: p } = E.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: C, inInbox: g } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: S } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        A = (0, a.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        x = (0, a.e7)([_.Z], () => _.Z.getOverdueMessageReminderCount());
    return (0, i.jsxs)(l.h4, {
        className: T.header,
        children: [
            (0, i.jsxs)('div', {
                className: T.headerTitle,
                children: [
                    (0, i.jsx)(r.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.inboxIcon
                    }),
                    (0, i.jsx)(r.Text, {
                        className: T.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: m.Z.Messages.INBOX
                    }),
                    (0, i.jsxs)('div', {
                        className: T.controls,
                        children: [f, (0, i.jsx)(I.Z, { closePopout: N })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: T.headerTabs,
                children: (0, i.jsxs)(r.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: T.tabBar,
                    children: [
                        (0, i.jsxs)(r.TabBar.Item, {
                            id: s.X.FOR_YOU,
                            'aria-label': m.Z.Messages.FOR_YOU,
                            className: T.tab,
                            children: [
                                m.Z.Messages.FOR_YOU,
                                (null == h ? void 0 : h.badgeForYou)
                                    ? (0, i.jsx)(r.CircleBadge, {
                                          color: o.Z.STATUS_DANGER,
                                          className: T.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(r.TabBar.Item, {
                            id: s.X.UNREADS,
                            className: T.tab,
                            children: m.Z.Messages.UNREADS_TAB_LABEL
                        }),
                        (0, i.jsx)(r.TabBar.Item, {
                            'aria-label': m.Z.Messages.MENTIONS,
                            id: s.X.MENTIONS,
                            className: T.tab,
                            children: m.Z.Messages.MENTIONS
                        }),
                        S
                            ? (0, i.jsxs)(r.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: s.X.GAME_INVITES,
                                  className: T.tab,
                                  children: [
                                      m.Z.Messages.GAME_INVITES,
                                      A > 0
                                          ? (0, i.jsx)(r.CircleBadge, {
                                                color: o.Z.STATUS_DANGER,
                                                className: T.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        C && g
                            ? (0, i.jsx)(r.TabBar.Item, {
                                  'aria-label': m.Z.Messages.FOR_LATER,
                                  id: s.X.BOOKMARKS,
                                  className: T.tab,
                                  children: 0 === x ? m.Z.Messages.FOR_LATER : m.Z.Messages.FOR_LATER_COUNT.format({ count: x })
                              })
                            : null,
                        p && !C
                            ? (0, i.jsx)(r.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: s.X.TODOS,
                                  className: T.tab,
                                  children: 0 === x ? m.Z.Messages.FOR_LATER_TAB_REMINDERS : m.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: x })
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
