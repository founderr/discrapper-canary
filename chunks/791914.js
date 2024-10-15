n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
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
function h(e) {
    let { tab: t, setTab: n, children: h, badgeState: N, closePopout: f } = e,
        { showReminders: C } = E.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: p, inInbox: g } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: A } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        S = (0, a.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        R = (0, a.e7)([_.Z], () => _.Z.getOverdueMessageReminderCount());
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
                        children: [h, (0, i.jsx)(I.Z, { closePopout: f })]
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
                                (null == N ? void 0 : N.badgeForYou)
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
                        A
                            ? (0, i.jsxs)(r.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: s.X.GAME_INVITES,
                                  className: T.tab,
                                  children: [
                                      m.Z.Messages.GAME_INVITES,
                                      S > 0
                                          ? (0, i.jsx)(r.CircleBadge, {
                                                color: o.Z.STATUS_DANGER,
                                                className: T.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        p && g
                            ? (0, i.jsx)(r.TabBar.Item, {
                                  'aria-label': m.Z.Messages.FOR_LATER,
                                  id: s.X.BOOKMARKS,
                                  className: T.tab,
                                  children: 0 === R ? m.Z.Messages.FOR_LATER : m.Z.Messages.FOR_LATER_COUNT.format({ count: R })
                              })
                            : null,
                        C && !p
                            ? (0, i.jsx)(r.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: s.X.TODOS,
                                  className: T.tab,
                                  children: 0 === R ? m.Z.Messages.FOR_LATER_TAB_REMINDERS : m.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: R })
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
