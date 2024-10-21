n.d(t, {
    r: function () {
        return p;
    }
});
var s = n(200651),
    a = n(192379),
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
    _ = n(341907),
    T = n(46140),
    S = n(231338),
    h = n(689938);
function g(e) {
    var t;
    let n = (0, i.e7)([m.Z], () => m.Z.questDeliveryOverride, []),
        u = (0, x.GN)(e.questContent),
        g = (0, x.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
        p = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
        j = (0, x.zK)(e.quest, T.S7.DISMISSAL_SURVEY),
        { handleComplete: N, handleProgress: f, handleResetDismissibilityClick: v, handleResetStatusClick: A, handleOverrideDeliveryClick: M } = (0, E.kJ)(e.quest.id),
        R = a.useCallback(() => {
            (0, x.FE)(e.quest, {
                content: e.questContent,
                ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        I = a.useCallback(() => {
            (0, x.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        q = (e) => (0, l.showToast)((0, l.createToast)(new o.Z(e, e.status).message, l.ToastType.FAILURE));
    return (0, s.jsxs)(l.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': h.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : S.dG,
        children: [
            (0, s.jsxs)(
                l.MenuGroup,
                {
                    children: [
                        !1 === g &&
                            (0, s.jsx)(l.MenuItem, {
                                id: 'play-game',
                                label: h.Z.Messages.QUESTS_GET_THIS_GAME,
                                action: R,
                                icon: l.LinkExternalMediumIcon
                            }),
                        !0 === e.showShareLink &&
                            (0, s.jsx)(l.MenuItem, {
                                id: 'share-link',
                                label: h.Z.Messages.COPY_LINK,
                                action: I,
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
                                        (0, _.navigateToQuestHome)(T.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, s.jsx)(l.MenuItem, {
                                id: 'display-disclosure',
                                label: h.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: () => {
                                    (0, _.openDisclosureModal)(e.quest, {
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
                                        (0, c.gl)(e.quest.id, e.questContent), j && p && (0, _.maybeShowSurveyForQuest)(e.quest);
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
                                action: M
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: v
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: A
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    f(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, s.jsx)(l.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: N
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
                                            action: () => (0, c.CS)(e.quest.id, !0).catch(q)
                                        }),
                                        (0, s.jsx)(l.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: () => (0, c.is)(e.quest.id).catch(q)
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
