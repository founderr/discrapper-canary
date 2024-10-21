n(653041), n(47120), n(724458);
var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    l = n(959078),
    r = n(442837),
    o = n(481060),
    u = n(607070),
    d = n(553795),
    c = n(358085),
    E = n(617136),
    m = n(111382),
    C = n(113434),
    x = n(918701),
    _ = n(566078),
    T = n(667105),
    S = n(689938),
    h = n(727526);
let g = (e) => (0 === e.length ? h.warning : h.danger),
    p = (e, t) => (0 === e.length ? S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: t }) : S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: t })),
    j = (e) => {
        let { quest: t, location: n, errors: a, gameTitle: i, consoleHelpArticle: r, expiredCredentialsInteractable: u } = e;
        if (0 === a.length)
            return (0, s.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: i })
            });
        let m = [];
        (0, x.Nj)({ quest: t }) && m.push((0, c.isWeb)() ? S.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : S.Z.Messages.QUEST_PROGRESS_NO_GAME);
        let C = [
            ...m,
            ...a.map((e) => {
                if (e.type !== l.K.EXPIRED_CREDENTIAL || !u) return e.message;
                let s = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    a = (0, x.C9)(e),
                    i = (0, x._j)(e);
                return a.format({
                    account_name: null == s ? void 0 : s.name,
                    onClick: () => {
                        (0, x.fY)(
                            {
                                quest: t,
                                platformType: i
                            },
                            {
                                content: n,
                                ctaContent: E.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                            }
                        );
                    }
                });
            }),
            r
        ];
        return (0, s.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: C.reduce((e, t) => [...e, t, ' '], [])
        });
    };
t.Z = function (e) {
    let t = _.r.build(e.quest.config).application.name,
        n = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
        a = (0, T.k3)(e.quest.id, e.location),
        l = (0, m.n)(),
        d = (0, T.g2)({
            useReducedMotion: n,
            className: h.refreshIcon
        }),
        {
            errorHints: c,
            startingConsoleQuest: x,
            startConsoleQuest: N
        } = (0, C.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                d.startAnimation(),
                    (0, E._3)({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: E.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: d.stopAnimation
        });
    return (0, s.jsxs)('div', {
        className: i()(h.container, { [h.inFlight]: x }),
        children: [
            (0, s.jsxs)('div', {
                className: h.info,
                children: [
                    (0, s.jsxs)('div', {
                        className: h.header,
                        children: [
                            (0, s.jsx)(o.CircleWarningIcon, {
                                className: i()(h.headerIcon, g(c)),
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: p(c, t)
                            })
                        ]
                    }),
                    j({
                        quest: e.quest,
                        errors: c,
                        gameTitle: t,
                        location: e.location,
                        consoleHelpArticle: a,
                        expiredCredentialsInteractable: l
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: h.cta,
                children: (0, s.jsx)(o.Button, {
                    color: o.ButtonColors.PRIMARY,
                    onClick: N,
                    disabled: x,
                    children: (0, s.jsxs)('div', {
                        className: h.ctaInner,
                        children: [d.render(), S.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                    })
                })
            })
        ]
    });
};
