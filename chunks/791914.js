n.d(t, {
    Z: function () {
        return _;
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
    u = n(602478),
    d = n(2818),
    m = n(768943),
    h = n(742989),
    f = n(818186),
    p = n(388032),
    g = n(811304);
function _(e) {
    let { tab: t, setTab: n, children: _, badgeState: E, closePopout: C } = e,
        { showReminders: I } = h.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: x, inInbox: N } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: v } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        T = (0, r.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        S = (0, r.e7)([m.Z], () => m.Z.getOverdueMessageReminderCount());
    return (0, i.jsxs)(o.h4, {
        className: g.header,
        children: [
            (0, i.jsxs)('div', {
                className: g.headerTitle,
                children: [
                    (0, i.jsx)(a.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.inboxIcon
                    }),
                    (0, i.jsx)(a.Text, {
                        className: g.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: p.intl.string(p.t.GSmTKC)
                    }),
                    (0, i.jsxs)('div', {
                        className: g.controls,
                        children: [_, (0, i.jsx)(f.Z, { closePopout: C })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: g.headerTabs,
                children: (0, i.jsxs)(a.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: g.tabBar,
                    children: [
                        (0, i.jsxs)(a.TabBar.Item, {
                            id: l.X.FOR_YOU,
                            'aria-label': p.intl.string(p.t['En+D+v']),
                            className: g.tab,
                            children: [
                                p.intl.string(p.t['En+D+v']),
                                (null == E ? void 0 : E.badgeForYou)
                                    ? (0, i.jsx)(a.CircleBadge, {
                                          color: s.Z.STATUS_DANGER,
                                          className: g.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(a.TabBar.Item, {
                            id: l.X.UNREADS,
                            className: g.tab,
                            children: p.intl.string(p.t.sRUdBw)
                        }),
                        (0, i.jsx)(a.TabBar.Item, {
                            'aria-label': p.intl.string(p.t['GRZF9/']),
                            id: l.X.MENTIONS,
                            className: g.tab,
                            children: p.intl.string(p.t['GRZF9/'])
                        }),
                        v
                            ? (0, i.jsxs)(a.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: l.X.GAME_INVITES,
                                  className: g.tab,
                                  children: [
                                      p.intl.string(p.t.apq3cX),
                                      T > 0
                                          ? (0, i.jsx)(a.CircleBadge, {
                                                color: s.Z.STATUS_DANGER,
                                                className: g.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        x && N
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': p.intl.string(p.t['2pAkDA']),
                                  id: l.X.BOOKMARKS,
                                  className: g.tab,
                                  children: 0 === S ? p.intl.string(p.t['2pAkDA']) : p.intl.formatToPlainString(p.t.I4fryM, { count: S })
                              })
                            : null,
                        I && !x
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: l.X.TODOS,
                                  className: g.tab,
                                  children: 0 === S ? p.intl.string(p.t.aUXxzc) : p.intl.formatToPlainString(p.t['5en8yc'], { count: S })
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
