n.d(t, {
    r: function () {
        return p;
    }
});
var s = n(735250),
    a = n(470079),
    i = n(442837),
    l = n(481060),
    r = n(239091),
    o = n(479531),
    u = n(390322),
    d = n(617136),
    c = n(272008),
    E = n(113434),
    m = n(569984),
    C = n(497505),
    x = n(918701),
    S = n(341907),
    T = n(46140),
    _ = n(231338),
    h = n(689938);
function g(e) {
    var t;
    let n = (0, i.e7)([m.Z], () => m.Z.questDeliveryOverride, []),
        u = (0, x.GN)(e.questContent),
        g = (0, x.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
        p = (0, x.KM)(e.quest),
        j = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
        N = (0, x.zK)(e.quest, T.S7.DISMISSAL_SURVEY),
        { handleComplete: f, handleProgress: v, handleResetDismissibilityClick: A, handleResetStatusClick: M, handleOverrideDeliveryClick: R } = (0, E.kJ)(e.quest.id),
        I = a.useCallback(() => {
            (0, x.FE)(e.quest, {
                content: e.questContent,
                ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        q = a.useCallback(() => {
            (0, x.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        Z = (e) => (0, l.showToast)((0, l.createToast)(new o.Z(e, e.status).message, l.ToastType.FAILURE));
    return (0, s.jsxs)(l.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': h.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : _.dG,
        children: [
            !1 === p &&
                (0, s.jsxs)(
                    l.MenuGroup,
                    {
                        children: [
                            !1 === g &&
                                (0, s.jsx)(l.MenuItem, {
                                    id: 'play-game',
                                    label: h.Z.Messages.QUESTS_GET_THIS_GAME,
                                    action: I,
                                    icon: l.LinkExternalMediumIcon
                                }),
                            !0 === e.showShareLink &&
                                (0, s.jsx)(l.MenuItem, {
                                    id: 'share-link',
                                    label: h.Z.Messages.COPY_LINK,
                                    action: q,
                                    icon: l.CopyIcon
                                })
                        ]
                    },
                    'major-actions'
                ),
            (0, s.jsxs)(
                l.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(l.MenuItem, {
                                id: 'learn-more',
                                label: h.Z.Messages.QUESTS_LEARN_MORE_V2,
                                action: () => {
                                    (0, d._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, S.navigateToQuestHome)(T.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, s.jsx)(l.MenuItem, {
                                id: 'display-disclosure',
                                label: h.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: () => {
                                    (0, S.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                                    });
                                }
                            }),
                        u &&
                            (0, s.jsx)(l.MenuItem, {
                                id: 'hide-entrypoint',
                                label: h.Z.Messages.QUESTS_HIDE_THIS,
                                action: () => {
                                    if (
                                        ((0, d._3)({
                                            questId: e.quest.id,
                                            questContent: e.questContent,
                                            questContentPosition: e.questContentPosition,
                                            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
                                        }),
                                        !!(0, x.GN)(e.questContent))
                                    )
                                        (0, c.gl)(e.quest.id, e.questContent), N && j && (0, S.maybeShowSurveyForQuest)(e.quest);
                                },
                                subtext: h.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    l.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            (0, s.jsx)(l.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: R
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: A
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: M
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    v(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: f
                            }),
                            (0, x.$J)(e.quest) &&
                                (0, s.jsxs)(l.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, s.jsx)(l.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, x.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, s.jsx)(l.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, c.CS)(e.quest.id, !0).catch(Z)
                                        }),
                                        (0, s.jsx)(l.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: () => (0, c.is)(e.quest.id).catch(Z)
                                        })
                                    ]
                                })
                        ]
                    },
                    'preview-controls'
                )
        ]
    });
}
function p(e) {
    let { children: t, onOpen: n, onClose: i, preventIdle: r, quest: o, questContent: c, questContentPosition: E, ...m } = e,
        C = a.useCallback(() => {
            (0, d._3)({
                questId: o.id,
                questContent: c,
                questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: E
            }),
                null != n && n();
        }, [n, o.id, c, E]);
    return (0, s.jsx)(l.Popout, {
        onRequestOpen: C,
        onRequestClose: i,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
                ? (0, s.jsx)(u.Z, {
                      children: (0, s.jsx)(g, {
                          ...m,
                          quest: o,
                          questContent: c,
                          questContentPosition: E,
                          onClose: t
                      })
                  })
                : (0, s.jsx)(g, {
                      ...m,
                      quest: o,
                      questContent: c,
                      questContentPosition: E,
                      onClose: t
                  });
        },
        animation: l.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
