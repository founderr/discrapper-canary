n.d(t, {
    Q: function () {
        return T;
    }
});
var o = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(54042),
    l = n(179839),
    i = n(481060),
    c = n(230711),
    d = n(231757),
    u = n(617136),
    p = n(497505),
    m = n(796111),
    x = n(46140),
    _ = n(981631),
    C = n(689938),
    g = n(181284);
function f(e) {
    let { quest: t, isConnected: n, consoleType: s } = e;
    return (0, o.jsx)(i.Clickable, {
        className: g.connectConsoleButtonWrapper,
        onClick: () => {
            (0, u._3)({
                questId: t.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.CONNECT_CONSOLE
            }),
                (0, d.Z)({ platformType: s });
        },
        children:
            s === _.ABu.PLAYSTATION
                ? (0, o.jsx)(a.T, {
                      colorClass: r()(g.connectConsoleButton, n ? g.playstationButtonConnected : g.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, o.jsx)(l.M, {
                      colorClass: r()(g.connectConsoleButton, n ? g.xboxButtonConnected : g.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function E(e) {
    let { text: t, quest: n } = e;
    return (0, o.jsx)(i.Clickable, {
        className: g.showConnectionsButton,
        onClick: () => {
            (0, u._3)({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                c.Z.open(_.oAB.CONNECTIONS);
        },
        children: (0, o.jsx)(i.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function h(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: s, xboxAndPlaystationAccounts: a } = e,
        l = a.slice(0, 2),
        c = a.length > 0,
        d = n.length > 0,
        u = s.length > 0;
    return (0, o.jsxs)('div', {
        className: g.inlineConsoleConnectionDetails,
        children: [
            (0, o.jsxs)('div', {
                className: g.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, o.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? C.Z.Messages.QUESTS_CONNECTED : C.Z.Messages.QUESTS_SELECT_TO_START
                    }),
                    (0, o.jsxs)('div', {
                        className: g.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, o.jsx)(f, {
                                consoleType: _.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, o.jsx)('div', { className: g.consoleIconDivider }),
                            (0, o.jsx)(f, {
                                consoleType: _.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, o.jsxs)('div', {
                    className: g.inlineConsoleConnectionDetailsLower,
                    children: [
                        l.map((e, t) =>
                            (0, o.jsxs)(
                                'div',
                                {
                                    className: r()(g.inlineConsoleConnectionDetailsLowerItem, t > 0 ? g.marginTop4px : void 0),
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === _.ABu.XBOX ? C.Z.Messages.QUESTS_XBOX_ID : C.Z.Messages.QUESTS_PSN_ONLINE_ID_V2
                                        }),
                                        (0, o.jsx)(i.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.name
                                        })
                                    ]
                                },
                                t
                            )
                        ),
                        a.length > 2 &&
                            (0, o.jsx)(E, {
                                text: C.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
                                quest: t
                            })
                    ]
                })
        ]
    });
}
function S(e) {
    let { xboxAndPlaystationAccounts: t, quest: n } = e;
    return t.length > 0
        ? (0, o.jsx)(E, {
              text: C.Z.Messages.QUESTS_SHOW_CONNECTIONS,
              quest: n
          })
        : null;
}
function T(e) {
    let t = (0, m.P)({ location: x.dr.QUESTS_BAR });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
            }),
            t ? (0, o.jsx)(h, { ...e }) : (0, o.jsx)(S, { ...e })
        ]
    });
}
