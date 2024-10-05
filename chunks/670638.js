n.d(t, {
    r: function () {
        return p;
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
    x = n(918701),
    C = n(341907),
    h = n(46140),
    _ = n(231338),
    g = n(689938);
function T(e) {
    var t;
    let n = (0, i.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
        u = (0, x.GN)(e.questContent),
        T = (0, x.zK)(e.quest, h.S7.IN_HOUSE_CONSOLE_QUEST),
        p = (0, x.KM)(e.quest),
        { handleComplete: S, handleProgress: j, handleResetDismissibilityClick: N, handleResetStatusClick: f, handleOverrideDeliveryClick: v } = (0, m.kJ)(e.quest.id),
        M = a.useCallback(() => {
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
        q = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE));
    return (0, s.jsxs)(o.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': g.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : _.dG,
        children: [
            !1 === p &&
                (0, s.jsxs)(
                    o.MenuGroup,
                    {
                        children: [
                            !1 === T &&
                                (0, s.jsx)(o.MenuItem, {
                                    id: 'play-game',
                                    label: g.Z.Messages.QUESTS_GET_THIS_GAME,
                                    action: M,
                                    icon: o.LinkExternalMediumIcon
                                }),
                            !0 === e.showShareLink &&
                                (0, s.jsx)(o.MenuItem, {
                                    id: 'share-link',
                                    label: g.Z.Messages.COPY_LINK,
                                    action: I,
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
                                        (0, C.navigateToQuestHome)(h.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, s.jsx)(o.MenuItem, {
                                id: 'display-disclosure',
                                label: g.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: () => {
                                    (0, C.openDisclosureModal)(e.quest, {
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
                                    (0, d._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, x.GN)(e.questContent) && (0, c.gl)(e.quest.id, e.questContent);
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
                                action: v
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: N
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: f
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    j(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, s.jsx)(o.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, x.$J)(e.quest) &&
                                (0, s.jsxs)(o.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, s.jsx)(o.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, x.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, s.jsx)(o.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, c.CS)(e.quest.id, !0).catch(q)
                                        }),
                                        (0, s.jsx)(o.MenuItem, {
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
                      children: (0, s.jsx)(T, {
                          ...E,
                          quest: l,
                          questContent: c,
                          questContentPosition: m,
                          onClose: t
                      })
                  })
                : (0, s.jsx)(T, {
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
