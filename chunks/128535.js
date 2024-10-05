n(653041), n(47120), n(724458);
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    o = n(959078),
    r = n(442837),
    l = n(481060),
    u = n(607070),
    d = n(553795),
    c = n(358085),
    m = n(617136),
    E = n(111382),
    x = n(113434),
    C = n(918701),
    h = n(566078),
    _ = n(667105),
    g = n(689938),
    T = n(727526);
let p = (e) => (0 === e.length ? T.warning : T.danger),
    S = (e, t) => (0 === e.length ? g.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: t }) : g.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: t })),
    j = (e) => {
        let { quest: t, location: n, errors: a, gameTitle: i, consoleHelpArticle: r, expiredCredentialsInteractable: u } = e;
        if (0 === a.length)
            return (0, s.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: g.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: i })
            });
        let E = [];
        (0, C.Nj)({ quest: t }) && E.push((0, c.isWeb)() ? g.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : g.Z.Messages.QUEST_PROGRESS_NO_GAME);
        let x = [
            ...E,
            ...a.map((e) => {
                if (e.type !== o.K.EXPIRED_CREDENTIAL || !u) return e.message;
                let s = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    a = (0, C.C9)(e),
                    i = (0, C._j)(e);
                return a.format({
                    account_name: null == s ? void 0 : s.name,
                    onClick: () => {
                        (0, C.fY)(
                            {
                                quest: t,
                                platformType: i
                            },
                            {
                                content: n,
                                ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                            }
                        );
                    }
                });
            }),
            r
        ];
        return (0, s.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: x.reduce((e, t) => [...e, t, ' '], [])
        });
    };
t.Z = function (e) {
    let t = h.r.build(e.quest.config).application.name,
        n = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
        a = (0, _.k3)(e.quest.id, e.location),
        o = (0, E.n)(),
        d = (0, _.g2)({
            useReducedMotion: n,
            className: T.refreshIcon
        }),
        {
            errorHints: c,
            startingConsoleQuest: C,
            startConsoleQuest: N
        } = (0, x.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                d.startAnimation(),
                    (0, m._3)({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: m.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: d.stopAnimation
        });
    return (0, s.jsxs)('div', {
        className: i()(T.container, { [T.inFlight]: C }),
        children: [
            (0, s.jsxs)('div', {
                className: T.info,
                children: [
                    (0, s.jsxs)('div', {
                        className: T.header,
                        children: [
                            (0, s.jsx)(l.CircleWarningIcon, {
                                className: i()(T.headerIcon, p(c)),
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                children: S(c, t)
                            })
                        ]
                    }),
                    j({
                        quest: e.quest,
                        errors: c,
                        gameTitle: t,
                        location: e.location,
                        consoleHelpArticle: a,
                        expiredCredentialsInteractable: o
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: T.cta,
                children: (0, s.jsx)(l.Button, {
                    color: l.ButtonColors.PRIMARY,
                    onClick: N,
                    disabled: C,
                    children: (0, s.jsxs)('div', {
                        className: T.ctaInner,
                        children: [d.render(), g.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                    })
                })
            })
        ]
    });
};
