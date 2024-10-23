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
    C = n(981631),
    g = n(689938),
    _ = n(181284);
function f(e) {
    let { quest: t, isConnected: n, consoleType: s } = e;
    return (0, o.jsx)(i.Clickable, {
        className: _.connectConsoleButtonWrapper,
        onClick: () => {
            (0, u._3)({
                questId: t.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.CONNECT_CONSOLE
            }),
                (0, d.Z)({ platformType: s });
        },
        children:
            s === C.ABu.PLAYSTATION
                ? (0, o.jsx)(a.T, {
                      colorClass: r()(_.connectConsoleButton, n ? _.playstationButtonConnected : _.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
                : (0, o.jsx)(l.M, {
                      colorClass: r()(_.connectConsoleButton, n ? _.xboxButtonConnected : _.connectConsoleButtonUnconnected),
                      size: 'sm'
                  })
    });
}
function h(e) {
    let { text: t, quest: n } = e;
    return (0, o.jsx)(i.Clickable, {
        className: _.showConnectionsButton,
        onClick: () => {
            (0, u._3)({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }),
                c.Z.open(C.oAB.CONNECTIONS);
        },
        children: (0, o.jsx)(i.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function E(e) {
    let { quest: t, xboxAccounts: n, playstationAccounts: s, xboxAndPlaystationAccounts: a } = e,
        l = a.slice(0, 2),
        c = a.length > 0,
        d = n.length > 0,
        u = s.length > 0;
    return (0, o.jsxs)('div', {
        className: _.inlineConsoleConnectionDetails,
        children: [
            (0, o.jsxs)('div', {
                className: _.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, o.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? g.Z.Messages.QUESTS_CONNECTED : g.Z.Messages.QUESTS_SELECT_TO_START
                    }),
                    (0, o.jsxs)('div', {
                        className: _.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, o.jsx)(f, {
                                consoleType: C.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, o.jsx)('div', { className: _.consoleIconDivider }),
                            (0, o.jsx)(f, {
                                consoleType: C.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c &&
                (0, o.jsxs)('div', {
                    className: _.inlineConsoleConnectionDetailsLower,
                    children: [
                        l.map((e, t) =>
                            (0, o.jsxs)(
                                'div',
                                {
                                    className: r()(_.inlineConsoleConnectionDetailsLowerItem, t > 0 ? _.marginTop4px : void 0),
                                    children: [
                                        (0, o.jsx)(i.Text, {
                                            color: 'header-secondary',
                                            variant: 'text-xxs/normal',
                                            children: e.type === C.ABu.XBOX ? g.Z.Messages.QUESTS_XBOX_ID : g.Z.Messages.QUESTS_PSN_ONLINE_ID_V2
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
                            (0, o.jsx)(h, {
                                text: g.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
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
        ? (0, o.jsx)(h, {
              text: g.Z.Messages.QUESTS_SHOW_CONNECTIONS,
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
                children: g.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
            }),
            t ? (0, o.jsx)(E, { ...e }) : (0, o.jsx)(S, { ...e })
        ]
    });
}
