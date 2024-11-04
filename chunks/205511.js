var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(959078),
    l = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    p = n(617136),
    m = n(111382),
    x = n(113434),
    g = n(497505),
    f = n(918701),
    h = n(566078),
    C = n(667105),
    v = n(585857),
    j = n(46140),
    _ = n(388032),
    E = n(161548);
function b(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, o.jsxs)('li', {
        className: a()(E.stepWrapper, { [E.stepWrapperComplete]: n }, { [E.stepWrapperWithNextStep]: r }),
        children: [
            (0, o.jsxs)('div', {
                className: E.stepIndicator,
                children: [
                    (0, o.jsx)('div', {
                        className: E.stepIconWrapper,
                        children:
                            n &&
                            (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                                className: E.stepIcon,
                                color: c.tokens.colors.WHITE
                            })
                    }),
                    r && (0, o.jsx)('div', { className: E.stepConnector })
                ]
            }),
            (0, o.jsx)('div', {
                className: E.stepContent,
                children: t
            })
        ]
    });
}
function N(e) {
    return (0, o.jsx)(c.Text, {
        className: E.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function S(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, m.n)(),
        l = (0, C.k3)(t.id, g.jn.QUEST_BAR_V2),
        d = (0, C.g2)({ useReducedMotion: n }),
        {
            errorHints: v,
            startingConsoleQuest: b,
            startConsoleQuest: S
        } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, p._3)({
                    questId: t.id,
                    questContent: g.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: T, renderBody: B } = r.useMemo(() => {
            let e = v.length > 0,
                n = () =>
                    (0, o.jsx)(o.Fragment, {
                        children: v.map((e, n) => {
                            if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                                let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                    s = (0, f.C9)(e),
                                    a = (0, f._j)(e);
                                return (0, o.jsx)(
                                    N,
                                    {
                                        children: _.intl.format(s, {
                                            account_name: null == r ? void 0 : r.name,
                                            onClick: () => {
                                                (0, f.fY)(
                                                    {
                                                        quest: t,
                                                        platformType: a
                                                    },
                                                    {
                                                        content: g.jn.QUEST_BAR,
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
            if ((0, f.zK)(t, j.S7.IN_HOUSE_CONSOLE_QUEST))
                return {
                    header: e ? _.intl.string(_.t['6cSPND']) : _.intl.string(_.t.YstzGB),
                    renderBody: e
                        ? n
                        : () =>
                              (0, o.jsx)(c.Text, {
                                  className: E.microphoneUnitBodyText,
                                  color: 'text-muted',
                                  variant: 'text-xxs/normal',
                                  children: _.intl.string(_.t.zrLnnJ)
                              })
                };
            let r = h.r.build(t.config).application.name;
            return {
                header: e ? _.intl.formatToPlainString(_.t['28Ql29'], { gameTitle: r }) : _.intl.formatToPlainString(_.t.gX0Qc3, { gameTitle: r }),
                renderBody: e
                    ? n
                    : () =>
                          (0, o.jsx)(c.Text, {
                              className: E.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: _.intl.format(_.t.GXqvCw, { gameTitle: r })
                          })
            };
        }, [t, v, s]);
    return (0, o.jsxs)('div', {
        className: E.microphoneUnit,
        children: [
            (0, o.jsxs)('div', {
                className: E.microphoneUnitHeader,
                children: [
                    (0, o.jsx)(c.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === v.length ? E.warningCircle : E.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: T
                    }),
                    (0, o.jsx)(c.Clickable, {
                        className: a()(E.microphoneUnitRefreshIconWrapper, { [E.disabled]: b }),
                        onClick: () => S(),
                        children: d.render()
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: a()({ [E.opacity_50]: b }),
                children: [B(), 0 === v.length ? null : (0, o.jsx)(N, { children: l })]
            })
        ]
    });
}
function T(e) {
    let { text: t } = e;
    return (0, o.jsx)(c.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
t.Z = function (e) {
    let { quest: t, taskDetails: n } = e,
        s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, x.z6)(),
        {
            steps: i,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m
        } = r.useMemo(() => {
            var e;
            let r = a.xboxAndPlaystationAccounts.length > 0,
                s = r && (0, f.Bz)(t),
                i = (0, f.zK)(t, j.S7.IN_HOUSE_CONSOLE_QUEST),
                l = h.r.build(t.config).application.name,
                c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, o.jsx)(v.Q, {
                                ...a,
                                quest: t
                            }),
                        isComplete: r || s || c
                    },
                    {
                        renderContent: () => (0, o.jsx)(T, { text: i ? _.intl.string(_.t['9rQPys']) : _.intl.formatToPlainString(_.t['+8JB6e'], { gameTitle: l }) }),
                        isComplete: s || c
                    },
                    {
                        renderContent: () => (0, o.jsx)(T, { text: _.intl.formatToPlainString(_.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: c
                    }
                ],
                hasConnectedAccounts: r,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: c
            };
        }, [a, t, n]);
    return (0, o.jsxs)('div', {
        className: E.wrapper,
        children: [
            (0, o.jsx)('div', {
                className: E.headingWrapper,
                children: (0, o.jsx)(c.Heading, {
                    className: E.heading,
                    variant: 'text-xs/medium',
                    children: _.intl.string(_.t.UPWlJi)
                })
            }),
            (0, o.jsxs)('div', {
                className: E.stepsWrapper,
                children: [
                    (0, o.jsx)('ul', {
                        children: i.map((e, t) =>
                            (0, o.jsx)(
                                b,
                                {
                                    isComplete: e.isComplete,
                                    hasNextStep: t < i.length - 1,
                                    children: e.renderContent()
                                },
                                t
                            )
                        )
                    }),
                    u &&
                        !p &&
                        !m &&
                        (0, o.jsx)(S, {
                            useReducedMotion: s,
                            quest: t
                        })
                ]
            })
        ]
    });
};
