var r = n(653041);
var i = n(47120);
var a = n(724458);
var o = n(735250);
n(470079);
var s = n(120356),
    l = n.n(s),
    u = n(959078),
    c = n(442837),
    d = n(481060),
    _ = n(607070),
    E = n(553795),
    f = n(358085),
    h = n(617136),
    p = n(111382),
    m = n(113434),
    I = n(918701),
    T = n(566078),
    g = n(667105),
    S = n(689938),
    A = n(727526);
let v = 16;
function N(e) {
    let t = T.r.build(e.quest.config).application.name,
        n = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
        r = (0, g.k3)(e.quest.id, e.location),
        i = (0, p.n)(),
        a = (0, g.g2)({
            useReducedMotion: n,
            className: A.refreshIcon
        }),
        {
            errorHints: s,
            startingConsoleQuest: u,
            startConsoleQuest: E
        } = (0, m.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                a.startAnimation(),
                    (0, h._3)({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: h.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: a.stopAnimation
        });
    return (0, o.jsxs)('div', {
        className: l()(A.container, { [A.inFlight]: u }),
        children: [
            (0, o.jsxs)('div', {
                className: A.info,
                children: [
                    (0, o.jsxs)('div', {
                        className: A.header,
                        children: [
                            (0, o.jsx)(d.CircleWarningIcon, {
                                className: l()(A.headerIcon, O(s)),
                                size: 'custom',
                                color: 'currentColor',
                                width: v,
                                height: v
                            }),
                            (0, o.jsx)(d.Text, {
                                variant: 'text-sm/semibold',
                                children: R(s, t)
                            })
                        ]
                    }),
                    C({
                        quest: e.quest,
                        errors: s,
                        gameTitle: t,
                        location: e.location,
                        consoleHelpArticle: r,
                        expiredCredentialsInteractable: i
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: A.cta,
                children: (0, o.jsx)(d.Button, {
                    color: d.ButtonColors.PRIMARY,
                    onClick: E,
                    disabled: u,
                    children: (0, o.jsxs)('div', {
                        className: A.ctaInner,
                        children: [a.render(), S.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                    })
                })
            })
        ]
    });
}
let O = (e) => (0 === e.length ? A.warning : A.danger),
    R = (e, t) => (0 === e.length ? S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: t }) : S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: t })),
    C = (e) => {
        let { quest: t, location: n, errors: r, gameTitle: i, consoleHelpArticle: a, expiredCredentialsInteractable: s } = e;
        if (0 === r.length)
            return (0, o.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: i })
            });
        let l = [],
            c = [a];
        (0, I.Nj)({ quest: t }) && l.push((0, f.isWeb)() ? S.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : S.Z.Messages.QUEST_PROGRESS_NO_GAME);
        let _ = [
            ...l,
            ...r.map((e) => {
                if (e.type !== u.K.EXPIRED_CREDENTIAL || !s) return e.message;
                let r = E.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    i = (0, I.C9)(e),
                    a = (0, I._j)(e);
                return i.format({
                    account_name: null == r ? void 0 : r.name,
                    onClick: () => {
                        (0, I.fY)(
                            {
                                quest: t,
                                platformType: a
                            },
                            {
                                content: n,
                                ctaContent: h.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                            }
                        );
                    }
                });
            }),
            ...c
        ];
        return (0, o.jsx)(d.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: _.reduce((e, t) => [...e, t, ' '], [])
        });
    };
t.Z = N;
