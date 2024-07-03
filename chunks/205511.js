var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), l = n(442837), i = n(481060), c = n(607070), d = n(706454), u = n(63063), p = n(617136), x = n(113434), m = n(497505), g = n(918701), C = n(566078), f = n(667105), _ = n(585857), h = n(693900), E = n(46140), S = n(981631), T = n(689938), N = n(778239);
function v(e) {
    let {
        children: t,
        isComplete: n,
        hasNextStep: o
    } = e;
    return (0, s.jsxs)('li', {
        className: a()(N.stepWrapper, { [N.stepWrapperComplete]: n }, { [N.stepWrapperWithNextStep]: o }),
        children: [
            (0, s.jsxs)('div', {
                className: N.stepIndicator,
                children: [
                    (0, s.jsx)('div', {
                        className: N.stepIconWrapper,
                        children: n && (0, s.jsx)(i.CheckmarkBoldIcon, {
                            className: N.stepIcon,
                            color: i.tokens.colors.WHITE
                        })
                    }),
                    o && (0, s.jsx)('div', { className: N.stepConnector })
                ]
            }),
            (0, s.jsx)('div', {
                className: N.stepContent,
                children: t
            })
        ]
    });
}
function A(e) {
    let {
            quest: t,
            useReducedMotion: n,
            connectedAccounts: r
        } = e, c = (0, l.e7)([d.default], () => d.default.locale), _ = (0, f.g2)({ useReducedMotion: n }), {
            errorHints: h,
            startingConsoleQuest: v,
            startConsoleQuest: A
        } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, p._3)({
                    questId: t.id,
                    questContent: m.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }), _.startAnimation();
            },
            afterRequest: _.stopAnimation
        }), {
            header: j,
            renderBody: B
        } = o.useMemo(() => {
            let e = h.length > 0, n = () => (0, s.jsx)('div', {
                    children: h.map((e, t) => (0, s.jsx)(i.Text, {
                        className: N.microphoneUnitBodyText,
                        color: 'text-muted',
                        variant: 'text-xxs/normal',
                        children: e
                    }, t))
                });
            if ((0, g.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST))
                return {
                    header: e ? T.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : T.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
                    renderBody: e ? n : () => (0, s.jsx)(i.Text, {
                        className: N.microphoneUnitBodyText,
                        color: 'text-muted',
                        variant: 'text-xxs/normal',
                        children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
                    })
                };
            let o = C.r.build(t.config).application.name;
            return {
                header: e ? T.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: o }) : T.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: o }),
                renderBody: e ? n : () => (0, s.jsx)(i.Text, {
                    className: N.microphoneUnitBodyText,
                    color: 'text-muted',
                    variant: 'text-xxs/normal',
                    children: T.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: o })
                })
            };
        }, [
            t,
            h
        ]);
    return (0, s.jsxs)('div', {
        className: N.microphoneUnit,
        children: [
            (0, s.jsxs)('div', {
                className: N.microphoneUnitHeader,
                children: [
                    (0, s.jsx)(i.CircleExclamationPointIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === h.length ? N.warningCircle : N.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-xs/medium',
                        children: j
                    }),
                    (0, s.jsx)(i.Clickable, {
                        className: a()(N.microphoneUnitRefreshIconWrapper, { [N.disabled]: v }),
                        onClick: () => A(),
                        children: _.render()
                    })
                ]
            }),
            B(),
            0 === h.length ? null : (0, s.jsx)(i.Text, {
                className: N.microphoneUnitBodyText,
                color: 'text-muted',
                variant: 'text-xxs/normal',
                children: function () {
                    let e = r.playstationAccounts.length > 0, t = r.xboxAccounts.length > 0;
                    return e && !t || !e && t ? 'en-US' === c ? T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_SINGLE.format({ helpdeskArticle: u.Z.getArticleURL(e ? S.BhN.QUEST_HOW_TO_PLAYSTATION : S.BhN.QUEST_HOW_TO_XBOX) }) : T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_SINGLE_CONSOLE.format({ helpdeskArticle: u.Z.getArticleURL(e ? S.BhN.PS_CONNECTION : S.BhN.XBOX_CONNECTION) }) : 'en-US' === c ? T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_HELP_ARTICLE_MULTI.format({
                        psHelpdeskArticle: u.Z.getArticleURL(S.BhN.QUEST_HOW_TO_PLAYSTATION),
                        xboxHelpdeskArticle: u.Z.getArticleURL(S.BhN.QUEST_HOW_TO_XBOX)
                    }) : T.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_PLAYSTATION_OR_XBOX.format({
                        psHelpdeskArticle: u.Z.getArticleURL(S.BhN.PS_CONNECTION),
                        xboxHelpdeskArticle: u.Z.getArticleURL(S.BhN.XBOX_CONNECTION)
                    });
                }()
            })
        ]
    });
}
function j(e) {
    let {text: t} = e;
    return (0, s.jsx)(i.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
t.Z = function (e) {
    let {quest: t} = e, n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), r = (0, x.Rf)(t), a = (0, x.z6)(), {
            steps: d,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m
        } = o.useMemo(() => {
            var e;
            let n = a.xboxAndPlaystationAccounts.length > 0, o = n && (0, g.Bz)(t), l = (0, g.zK)(t, E.S7.IN_HOUSE_CONSOLE_QUEST), i = C.r.build(t.config).application.name, c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(_.Q, {
                            ...a,
                            quest: t
                        }),
                        isComplete: n || o || c
                    },
                    {
                        renderContent: () => (0, s.jsx)(j, { text: l ? T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({ gameTitle: i }) }),
                        isComplete: o || c
                    },
                    {
                        renderContent: () => (0, s.jsx)(j, { text: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({ numMinutes: r.targetMinutes }) }),
                        isComplete: c
                    }
                ],
                hasConnectedAccounts: n,
                isProgressingQuestForLaunchedGame: o,
                isQuestComplete: c
            };
        }, [
            a,
            t,
            r
        ]);
    return (0, s.jsxs)('div', {
        className: N.wrapper,
        children: [
            (0, s.jsx)('div', {
                className: N.headingWrapper,
                children: (0, s.jsx)(i.Heading, {
                    className: N.heading,
                    variant: 'text-xs/medium',
                    children: T.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
                })
            }),
            (0, s.jsx)(h.n, {
                children: (0, s.jsxs)('div', {
                    className: N.stepsWrapper,
                    children: [
                        (0, s.jsx)('ul', {
                            children: d.map((e, t) => (0, s.jsx)(v, {
                                isComplete: e.isComplete,
                                hasNextStep: t < d.length - 1,
                                children: e.renderContent()
                            }, t))
                        }),
                        u && !p && !m && (0, s.jsx)(A, {
                            connectedAccounts: a,
                            useReducedMotion: n,
                            quest: t
                        })
                    ]
                })
            })
        ]
    });
};
