var o = n(200651),
    s = n(192379),
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
    C = n(497505),
    _ = n(918701),
    g = n(566078),
    f = n(667105),
    h = n(585857),
    E = n(46140),
    S = n(689938),
    T = n(161548);
function v(e) {
    let { children: t, isComplete: n, hasNextStep: s } = e;
    return (0, o.jsxs)('li', {
        className: a()(T.stepWrapper, { [T.stepWrapperComplete]: n }, { [T.stepWrapperWithNextStep]: s }),
        children: [
            (0, o.jsxs)('div', {
                className: T.stepIndicator,
                children: [
                    (0, o.jsx)('div', {
                        className: T.stepIconWrapper,
                        children:
                            n &&
                            (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                                className: T.stepIcon,
                                color: c.tokens.colors.WHITE
                            })
                    }),
                    s && (0, o.jsx)('div', { className: T.stepConnector })
                ]
            }),
            (0, o.jsx)('div', {
                className: T.stepContent,
                children: t
            })
        ]
    });
}
function N(e) {
    return (0, o.jsx)(c.Text, {
        className: T.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function j(e) {
    let { quest: t, useReducedMotion: n } = e,
        r = (0, m.n)(),
        i = (0, f.k3)(t.id, C.jn.QUEST_BAR_V2),
        d = (0, f.g2)({ useReducedMotion: n }),
        {
            errorHints: h,
            startingConsoleQuest: v,
            startConsoleQuest: j
        } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, p._3)({
                    questId: t.id,
                    questContent: C.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: A, renderBody: b } = s.useMemo(() => {
            let e = h.length > 0,
                n = () =>
                    (0, o.jsx)(o.Fragment, {
                        children: h.map((e, n) => {
                            if (e.type === l.K.EXPIRED_CREDENTIAL && r) {
                                let s = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                    r = (0, _.C9)(e),
                                    a = (0, _._j)(e);
                                return (0, o.jsx)(
                                    N,
                                    {
                                        children: r.format({
                                            account_name: null == s ? void 0 : s.name,
                                            onClick: () => {
                                                (0, _.fY)(
                                                    {
                                                        quest: t,
                                                        platformType: a
                                                    },
                                                    {
                                                        content: C.jn.QUEST_BAR,
                                                        ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                                                    }
                                                );
                                            }
                                        })
                                    },
                                    n
                                );
                            }
                            return (0, o.jsx)(N, { children: e.message }, n);
                        })
                    });
            if ((0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST))
                return {
                    header: e ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
                    renderBody: e
                        ? n
                        : () =>
                              (0, o.jsx)(c.Text, {
                                  className: T.microphoneUnitBodyText,
                                  color: 'text-muted',
                                  variant: 'text-xxs/normal',
                                  children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
                              })
                };
            let s = g.r.build(t.config).application.name;
            return {
                header: e ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: s }) : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: s }),
                renderBody: e
                    ? n
                    : () =>
                          (0, o.jsx)(c.Text, {
                              className: T.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: s })
                          })
            };
        }, [t, h, r]);
    return (0, o.jsxs)('div', {
        className: T.microphoneUnit,
        children: [
            (0, o.jsxs)('div', {
                className: T.microphoneUnitHeader,
                children: [
                    (0, o.jsx)(c.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === h.length ? T.warningCircle : T.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: A
                    }),
                    (0, o.jsx)(c.Clickable, {
                        className: a()(T.microphoneUnitRefreshIconWrapper, { [T.disabled]: v }),
                        onClick: () => j(),
                        children: d.render()
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: a()({ [T.opacity_50]: v }),
                children: [b(), 0 === h.length ? null : (0, o.jsx)(N, { children: i })]
            })
        ]
    });
}
function A(e) {
    let { text: t } = e;
    return (0, o.jsx)(c.Text, {
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
        } = s.useMemo(() => {
            var e;
            let s = a.xboxAndPlaystationAccounts.length > 0,
                r = s && (0, _.Bz)(t),
                l = (0, _.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST),
                i = g.r.build(t.config).application.name,
                c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, o.jsx)(h.Q, {
                                ...a,
                                quest: t
                            }),
                        isComplete: s || r || c
                    },
                    {
                        renderContent: () => (0, o.jsx)(A, { text: l ? S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({ gameTitle: i }) }),
                        isComplete: r || c
                    },
                    {
                        renderContent: () => (0, o.jsx)(A, { text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({ numMinutes: n.targetMinutes }) }),
                        isComplete: c
                    }
                ],
                hasConnectedAccounts: s,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: c
            };
        }, [a, t, n]);
    return (0, o.jsxs)('div', {
        className: T.wrapper,
        children: [
            (0, o.jsx)('div', {
                className: T.headingWrapper,
                children: (0, o.jsx)(c.Heading, {
                    className: T.heading,
                    variant: 'text-xs/medium',
                    children: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
                })
            }),
            (0, o.jsxs)('div', {
                className: T.stepsWrapper,
                children: [
                    (0, o.jsx)('ul', {
                        children: l.map((e, t) =>
                            (0, o.jsx)(
                                v,
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
                        (0, o.jsx)(j, {
                            useReducedMotion: r,
                            quest: t
                        })
                ]
            })
        ]
    });
};
