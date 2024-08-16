n.d(t, {
    r: function () {
        return p;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(442837),
    r = n(481060),
    l = n(239091),
    o = n(479531),
    c = n(390322),
    u = n(617136),
    d = n(272008),
    _ = n(113434),
    E = n(569984),
    I = n(918701),
    m = n(471985),
    T = n(341907),
    h = n(46140),
    N = n(231338),
    f = n(689938);
function C(e) {
    var t;
    let n = (0, a.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
        c = (0, I.GN)(e.questContent),
        C = (0, I.zK)(e.quest, h.S7.IN_HOUSE_CONSOLE_QUEST),
        p = (0, I.KM)(e.quest),
        g = (0, m.Z)(h.dr.QUEST_CONTEXT_MENU),
        { handleComplete: S, handleResetDismissibilityClick: A, handleResetStatusClick: R, handleOverrideDeliveryClick: x } = (0, _.kJ)(e.quest.id),
        O = s.useCallback(() => {
            (0, I.FE)(e.quest, {
                content: e.questContent,
                ctaContent: u.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        M = s.useCallback(() => {
            (0, I.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: u.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        v = (e) => (0, r.showToast)((0, r.createToast)(new o.Z(e, e.status).message, r.ToastType.FAILURE));
    return (0, i.jsxs)(r.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, l.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': f.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : N.dG,
        children: [
            !1 === p &&
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        children: [
                            !1 === C &&
                                (0, i.jsx)(r.MenuItem, {
                                    id: 'play-game',
                                    label: f.Z.Messages.QUESTS_GET_THIS_GAME,
                                    action: O,
                                    icon: r.LinkExternalMediumIcon
                                }),
                            !0 === e.showShareLink &&
                                (0, i.jsx)(r.MenuItem, {
                                    id: 'share-link',
                                    label: f.Z.Messages.COPY_LINK,
                                    action: M,
                                    icon: r.CopyIcon
                                })
                        ]
                    },
                    'major-actions'
                ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'learn-more',
                                label: f.Z.Messages.QUESTS_LEARN_MORE_V2,
                                action: () => {
                                    (0, u._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, T.navigateToQuestHome)(h.dr.QUEST_CONTEXT_MENU, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'display-disclosure',
                                label: f.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: () => {
                                    (0, T.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: u.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                                    });
                                }
                            }),
                        c &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'hide-entrypoint',
                                label: f.Z.Messages.QUESTS_HIDE_THIS,
                                action: () => {
                                    (0, u._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: u.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, I.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
                                },
                                subtext: g ? f.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME : f.Z.Messages.QUESTS_FIND_QUEST
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            (0, i.jsx)(r.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: x
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: A
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: R
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, I.$J)(e.quest) &&
                                (0, i.jsxs)(r.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, i.jsx)(r.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, I.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, d.CS)(e.quest.id, !0).catch(v)
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: () => (0, d.is)(e.quest.id).catch(v)
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
    let { children: t, onOpen: n, onClose: a, preventIdle: l, quest: o, questContent: d, questContentPosition: _, ...E } = e,
        I = s.useCallback(() => {
            (0, u._3)({
                questId: o.id,
                questContent: d,
                questContentCTA: u.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: _
            }),
                null != n && n();
        }, [n, o.id, d, _]);
    return (0, i.jsx)(r.Popout, {
        onRequestOpen: I,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return l
                ? (0, i.jsx)(c.Z, {
                      children: (0, i.jsx)(C, {
                          ...E,
                          quest: o,
                          questContent: d,
                          questContentPosition: _,
                          onClose: t
                      })
                  })
                : (0, i.jsx)(C, {
                      ...E,
                      quest: o,
                      questContent: d,
                      questContentPosition: _,
                      onClose: t
                  });
        },
        animation: r.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
