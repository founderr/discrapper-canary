n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(524437),
    a = n(481060),
    o = n(494404),
    s = n(377171),
    c = n(317632),
    d = n(602478),
    u = n(2818),
    m = n(768943),
    h = n(742989),
    f = n(818186),
    p = n(388032),
    _ = n(76334);
function g(e) {
    let { tab: t, setTab: n, children: g, badgeState: E, closePopout: C } = e,
        { showReminders: I } = h.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: x, inInbox: v } = u.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: N } = d.Z.useExperiment({ location: 'RecentsHeader' }),
        T = (0, r.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        S = (0, r.e7)([m.Z], () => m.Z.getOverdueMessageReminderCount());
    return (0, i.jsxs)(o.h4, {
        className: _.header,
        children: [
            (0, i.jsxs)('div', {
                className: _.headerTitle,
                children: [
                    (0, i.jsx)(a.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.inboxIcon
                    }),
                    (0, i.jsx)(a.Text, {
                        className: _.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: p.intl.string(p.t.GSmTKC)
                    }),
                    (0, i.jsxs)('div', {
                        className: _.controls,
                        children: [g, (0, i.jsx)(f.Z, { closePopout: C })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: _.headerTabs,
                children: (0, i.jsxs)(a.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: _.tabBar,
                    children: [
                        (0, i.jsxs)(a.TabBar.Item, {
                            id: l.X.FOR_YOU,
                            'aria-label': p.intl.string(p.t['En+D+v']),
                            className: _.tab,
                            children: [
                                p.intl.string(p.t['En+D+v']),
                                (null == E ? void 0 : E.badgeForYou)
                                    ? (0, i.jsx)(a.CircleBadge, {
                                          color: s.Z.STATUS_DANGER,
                                          className: _.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(a.TabBar.Item, {
                            id: l.X.UNREADS,
                            className: _.tab,
                            children: p.intl.string(p.t.sRUdBw)
                        }),
                        (0, i.jsx)(a.TabBar.Item, {
                            'aria-label': p.intl.string(p.t['GRZF9/']),
                            id: l.X.MENTIONS,
                            className: _.tab,
                            children: p.intl.string(p.t['GRZF9/'])
                        }),
                        N
                            ? (0, i.jsxs)(a.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: l.X.GAME_INVITES,
                                  className: _.tab,
                                  children: [
                                      p.intl.string(p.t.apq3cX),
                                      T > 0
                                          ? (0, i.jsx)(a.CircleBadge, {
                                                color: s.Z.STATUS_DANGER,
                                                className: _.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        x && v
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': p.intl.string(p.t['2pAkDA']),
                                  id: l.X.BOOKMARKS,
                                  className: _.tab,
                                  children: 0 === S ? p.intl.string(p.t['2pAkDA']) : p.intl.formatToPlainString(p.t.I4fryM, { count: S })
                              })
                            : null,
                        I && !x
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: l.X.TODOS,
                                  className: _.tab,
                                  children: 0 === S ? p.intl.string(p.t.aUXxzc) : p.intl.formatToPlainString(p.t['5en8yc'], { count: S })
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
