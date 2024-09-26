var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(959078),
    i = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    p = n(617136),
    m = n(111382),
    x = n(113434),
    _ = n(497505),
    C = n(918701),
    g = n(566078),
    f = n(667105),
    E = n(585857),
    h = n(46140),
    S = n(689938),
    T = n(161548);
function N(e) {
    let { children: t, isComplete: n, hasNextStep: o } = e;
    return (0, s.jsxs)('li', {
        className: a()(T.stepWrapper, { [T.stepWrapperComplete]: n }, { [T.stepWrapperWithNextStep]: o }),
        children: [
            (0, s.jsxs)('div', {
                className: T.stepIndicator,
                children: [
                    (0, s.jsx)('div', {
                        className: T.stepIconWrapper,
                        children:
                            n &&
                            (0, s.jsx)(c.CheckmarkLargeBoldIcon, {
                                className: T.stepIcon,
                                color: c.tokens.colors.WHITE
                            })
                    }),
                    o && (0, s.jsx)('div', { className: T.stepConnector })
                ]
            }),
            (0, s.jsx)('div', {
                className: T.stepContent,
                children: t
            })
        ]
    });
}
function v(e) {
    return (0, s.jsx)(c.Text, {
        className: T.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function j(e) {
    let { quest: t, useReducedMotion: n } = e,
        r = (0, m.n)(),
        i = (0, f.k3)(t.id, _.jn.QUEST_BAR_V2),
        d = (0, f.g2)({ useReducedMotion: n }),
        {
            errorHints: E,
            startingConsoleQuest: N,
            startConsoleQuest: j
        } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, p._3)({
                    questId: t.id,
                    questContent: _.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: A, renderBody: R } = o.useMemo(() => {
            let e = E.length > 0,
                n = () =>
                    (0, s.jsx)(s.Fragment, {
                        children: E.map((e, n) => {
                            if (e.type === l.K.EXPIRED_CREDENTIAL && r) {
                                let o = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                    r = (0, C.C9)(e),
                                    a = (0, C._j)(e);
                                return (0, s.jsx)(
                                    v,
                                    {
                                        children: r.format({
                                            account_name: null == o ? void 0 : o.name,
                                            onClick: () => {
                                                (0, C.fY)(
                                                    {
                                                        quest: t,
                                                        platformType: a
                                                    },
                                                    {
                                                        content: _.jn.QUEST_BAR,
                                                        ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                                                    }
                                                );
                                            }
                                        })
                                    },
                                    n
                                );
                            }
                            return (0, s.jsx)(v, { children: e.message }, n);
                        })
                    });
            if ((0, C.zK)(t, h.S7.IN_HOUSE_CONSOLE_QUEST))
                return {
                    header: e ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
                    renderBody: e
                        ? n
                        : () =>
                              (0, s.jsx)(c.Text, {
                                  className: T.microphoneUnitBodyText,
                                  color: 'text-muted',
                                  variant: 'text-xxs/normal',
                                  children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
                              })
                };
            let o = g.r.build(t.config).application.name;
            return {
                header: e ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: o }) : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: o }),
                renderBody: e
                    ? n
                    : () =>
                          (0, s.jsx)(c.Text, {
                              className: T.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: o })
                          })
            };
        }, [t, E, r]);
    return (0, s.jsxs)('div', {
        className: T.microphoneUnit,
        children: [
            (0, s.jsxs)('div', {
                className: T.microphoneUnitHeader,
                children: [
                    (0, s.jsx)(c.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === E.length ? T.warningCircle : T.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: A
                    }),
                    (0, s.jsx)(c.Clickable, {
                        className: a()(T.microphoneUnitRefreshIconWrapper, { [T.disabled]: N }),
                        onClick: () => j(),
                        children: d.render()
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: a()({ [T.opacity_50]: N }),
                children: [R(), 0 === E.length ? null : (0, s.jsx)(v, { children: i })]
            })
        ]
    });
}
function A(e) {
    let { text: t } = e;
    return (0, s.jsx)(c.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
t.Z = function (e) {
    let { quest: t, taskDetails: n } = e,
        r = (0, i.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, x.z6)(),
        {
            steps: l,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m
        } = o.useMemo(() => {
            var e;
            let o = a.xboxAndPlaystationAccounts.length > 0,
                r = o && (0, C.Bz)(t),
                l = (0, C.zK)(t, h.S7.IN_HOUSE_CONSOLE_QUEST),
                i = g.r.build(t.config).application.name,
                c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, s.jsx)(E.Q, {
                                ...a,
                                quest: t
                            }),
                        isComplete: o || r || c
                    },
                    {
                        renderContent: () => (0, s.jsx)(A, { text: l ? S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({ gameTitle: i }) }),
                        isComplete: r || c
                    },
                    {
                        renderContent: () => (0, s.jsx)(A, { text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({ numMinutes: n.targetMinutes }) }),
                        isComplete: c
                    }
                ],
                hasConnectedAccounts: o,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: c
            };
        }, [a, t, n]);
    return (0, s.jsxs)('div', {
        className: T.wrapper,
        children: [
            (0, s.jsx)('div', {
                className: T.headingWrapper,
                children: (0, s.jsx)(c.Heading, {
                    className: T.heading,
                    variant: 'text-xs/medium',
                    children: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
                })
            }),
            (0, s.jsxs)('div', {
                className: T.stepsWrapper,
                children: [
                    (0, s.jsx)('ul', {
                        children: l.map((e, t) =>
                            (0, s.jsx)(
                                N,
                                {
                                    isComplete: e.isComplete,
                                    hasNextStep: t < l.length - 1,
                                    children: e.renderContent()
                                },
                                t
                            )
                        )
                    }),
                    u &&
                        !p &&
                        !m &&
                        (0, s.jsx)(j, {
                            useReducedMotion: r,
                            quest: t
                        })
                ]
            })
        ]
    });
};
