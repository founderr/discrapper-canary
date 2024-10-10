n.d(t, {
    r: function () {
        return S;
    }
});
var s = n(735250),
    a = n(470079),
    i = n(442837),
    o = n(481060),
    r = n(239091),
    l = n(479531),
    u = n(390322),
    d = n(617136),
    c = n(272008),
    m = n(113434),
    E = n(569984),
    x = n(497505),
    C = n(918701),
    h = n(341907),
    _ = n(46140),
    T = n(231338),
    g = n(689938);
function p(e) {
    var t;
    let n = (0, i.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
        u = (0, C.GN)(e.questContent),
        p = (0, C.zK)(e.quest, _.S7.IN_HOUSE_CONSOLE_QUEST),
        S = (0, C.KM)(e.quest),
        j = [x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR].includes(e.questContent),
        N = (0, C.zK)(e.quest, _.S7.DISMISSAL_SURVEY),
        { handleComplete: f, handleProgress: v, handleResetDismissibilityClick: M, handleResetStatusClick: I, handleOverrideDeliveryClick: q } = (0, m.kJ)(e.quest.id),
        R = a.useCallback(() => {
            (0, C.FE)(e.quest, {
                content: e.questContent,
                ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        A = a.useCallback(() => {
            (0, C.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        Z = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE));
    return (0, s.jsxs)(o.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': g.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : T.dG,
        children: [
            !1 === S &&
                (0, s.jsxs)(
                    o.MenuGroup,
                    {
                        children: [
                            !1 === p &&
                                (0, s.jsx)(o.MenuItem, {
                                    id: 'play-game',
                                    label: g.Z.Messages.QUESTS_GET_THIS_GAME,
                                    action: R,
                                    icon: o.LinkExternalMediumIcon
                                }),
                            !0 === e.showShareLink &&
                                (0, s.jsx)(o.MenuItem, {
                                    id: 'share-link',
                                    label: g.Z.Messages.COPY_LINK,
                                    action: A,
                                    icon: o.CopyIcon
                                })
                        ]
                    },
                    'major-actions'
                ),
            (0, s.jsxs)(
                o.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(o.MenuItem, {
                                id: 'learn-more',
                                label: g.Z.Messages.QUESTS_LEARN_MORE_V2,
                                action: () => {
                                    (0, d._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, h.navigateToQuestHome)(_.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, s.jsx)(o.MenuItem, {
                                id: 'display-disclosure',
                                label: g.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: () => {
                                    (0, h.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                                    });
                                }
                            }),
                        u &&
                            (0, s.jsx)(o.MenuItem, {
                                id: 'hide-entrypoint',
                                label: g.Z.Messages.QUESTS_HIDE_THIS,
                                action: () => {
                                    if (
                                        ((0, d._3)({
                                            questId: e.quest.id,
                                            questContent: e.questContent,
                                            questContentPosition: e.questContentPosition,
                                            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
                                        }),
                                        !!(0, C.GN)(e.questContent))
                                    )
                                        (0, c.gl)(e.quest.id, e.questContent), N && j && (0, h.maybeShowSurveyForQuest)(e.quest);
                                },
                                subtext: g.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    o.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            (0, s.jsx)(o.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: q
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: M
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: I
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    v(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: f
                            }),
                            (0, C.$J)(e.quest) &&
                                (0, s.jsxs)(o.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, s.jsx)(o.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, C.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, s.jsx)(o.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, c.CS)(e.quest.id, !0).catch(Z)
                                        }),
                                        (0, s.jsx)(o.MenuItem, {
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
function S(e) {
    let { children: t, onOpen: n, onClose: i, preventIdle: r, quest: l, questContent: c, questContentPosition: m, ...E } = e,
        x = a.useCallback(() => {
            (0, d._3)({
                questId: l.id,
                questContent: c,
                questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, l.id, c, m]);
    return (0, s.jsx)(o.Popout, {
        onRequestOpen: x,
        onRequestClose: i,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
                ? (0, s.jsx)(u.Z, {
                      children: (0, s.jsx)(p, {
                          ...E,
                          quest: l,
                          questContent: c,
                          questContentPosition: m,
                          onClose: t
                      })
                  })
                : (0, s.jsx)(p, {
                      ...E,
                      quest: l,
                      questContent: c,
                      questContentPosition: m,
                      onClose: t
                  });
        },
        animation: o.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
