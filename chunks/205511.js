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
    j = n(388032),
    _ = n(161548);
function b(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, o.jsxs)('li', {
        className: a()(_.stepWrapper, { [_.stepWrapperComplete]: n }, { [_.stepWrapperWithNextStep]: r }),
        children: [
            (0, o.jsxs)('div', {
                className: _.stepIndicator,
                children: [
                    (0, o.jsx)('div', {
                        className: _.stepIconWrapper,
                        children:
                            n &&
                            (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                                className: _.stepIcon,
                                color: c.tokens.colors.WHITE
                            })
                    }),
                    r && (0, o.jsx)('div', { className: _.stepConnector })
                ]
            }),
            (0, o.jsx)('div', {
                className: _.stepContent,
                children: t
            })
        ]
    });
}
function E(e) {
    return (0, o.jsx)(c.Text, {
        className: _.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function N(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, m.n)(),
        l = (0, C.k3)(t.id, g.jn.QUEST_BAR_V2),
        d = (0, C.g2)({ useReducedMotion: n }),
        {
            errorHints: v,
            startingConsoleQuest: b,
            startConsoleQuest: N
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
                n = h.r.build(t.config).application.name;
            return {
                header: e ? j.intl.formatToPlainString(j.t['28Ql29'], { gameTitle: n }) : j.intl.formatToPlainString(j.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, o.jsx)(o.Fragment, {
                              children: v.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                                      let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, f.C9)(e),
                                          a = (0, f._j)(e);
                                      return (0, o.jsx)(
                                          E,
                                          {
                                              children: j.intl.format(s, {
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
                                  return (0, o.jsx)(E, { children: e.message }, n);
                              })
                          })
                    : () =>
                          (0, o.jsx)(c.Text, {
                              className: _.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: j.intl.format(j.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [t, v, s]);
    return (0, o.jsxs)('div', {
        className: _.microphoneUnit,
        children: [
            (0, o.jsxs)('div', {
                className: _.microphoneUnitHeader,
                children: [
                    (0, o.jsx)(c.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === v.length ? _.warningCircle : _.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: T
                    }),
                    (0, o.jsx)(c.Clickable, {
                        className: a()(_.microphoneUnitRefreshIconWrapper, { [_.disabled]: b }),
                        onClick: () => N(),
                        children: d.render()
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: a()({ [_.opacity_50]: b }),
                children: [B(), 0 === v.length ? null : (0, o.jsx)(E, { children: l })]
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
                i = h.r.build(t.config).application.name,
                l = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, o.jsx)(v.Q, {
                                ...a,
                                quest: t
                            }),
                        isComplete: r || s || l
                    },
                    {
                        renderContent: () => (0, o.jsx)(T, { text: j.intl.formatToPlainString(j.t['+8JB6e'], { gameTitle: i }) }),
                        isComplete: s || l
                    },
                    {
                        renderContent: () => (0, o.jsx)(T, { text: j.intl.formatToPlainString(j.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: l
                    }
                ],
                hasConnectedAccounts: r,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: l
            };
        }, [a, t, n]);
    return (0, o.jsxs)('div', {
        className: _.wrapper,
        children: [
            (0, o.jsx)('div', {
                className: _.headingWrapper,
                children: (0, o.jsx)(c.Heading, {
                    className: _.heading,
                    variant: 'text-xs/medium',
                    children: j.intl.string(j.t.UPWlJi)
                })
            }),
            (0, o.jsxs)('div', {
                className: _.stepsWrapper,
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
                        (0, o.jsx)(N, {
                            useReducedMotion: s,
                            quest: t
                        })
                ]
            })
        ]
    });
};
