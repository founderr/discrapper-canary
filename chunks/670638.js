n.d(t, {
    r: function () {
        return g;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(479531),
    u = n(390322),
    c = n(617136),
    d = n(272008),
    _ = n(113434),
    E = n(569984),
    f = n(918701),
    h = n(341907),
    p = n(46140),
    m = n(231338),
    I = n(689938);
function T(e) {
    var t;
    let n = (0, a.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
        u = (0, f.GN)(e.questContent),
        T = (0, f.zK)(e.quest, p.S7.IN_HOUSE_CONSOLE_QUEST),
        g = (0, f.KM)(e.quest),
        { handleComplete: S, handleProgress: A, handleResetDismissibilityClick: v, handleResetStatusClick: N, handleOverrideDeliveryClick: O } = (0, _.kJ)(e.quest.id),
        R = () => {
            A(0.9 * Math.random() + 0.03);
        },
        C = i.useCallback(() => {
            (0, f.FE)(e.quest, {
                content: e.questContent,
                ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        y = i.useCallback(() => {
            (0, f.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        L = () => {
            (0, h.openDisclosureModal)(e.quest, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
            });
        },
        b = () => {
            (0, c._3)({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
            }),
                (0, h.navigateToQuestHome)(p.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
        },
        D = () => {
            null != e.onSelect ? e.onSelect() : (0, s.Zy)();
        },
        M = () => {
            (0, c._3)({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
            }),
                (0, f.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
        },
        P = (e) => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE)),
        U = () => (0, d.CS)(e.quest.id, !0).catch(P),
        w = () => (0, d.is)(e.quest.id).catch(P);
    return (0, r.jsxs)(o.Menu, {
        variant: 'fixed',
        onSelect: D,
        navId: 'quests-entry',
        'aria-label': I.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : m.dG,
        children: [
            !1 === g &&
                (0, r.jsxs)(
                    o.MenuGroup,
                    {
                        children: [
                            !1 === T &&
                                (0, r.jsx)(o.MenuItem, {
                                    id: 'play-game',
                                    label: I.Z.Messages.QUESTS_GET_THIS_GAME,
                                    action: C,
                                    icon: o.LinkExternalMediumIcon
                                }),
                            !0 === e.showShareLink &&
                                (0, r.jsx)(o.MenuItem, {
                                    id: 'share-link',
                                    label: I.Z.Messages.COPY_LINK,
                                    action: y,
                                    icon: o.CopyIcon
                                })
                        ]
                    },
                    'major-actions'
                ),
            (0, r.jsxs)(
                o.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'learn-more',
                                label: I.Z.Messages.QUESTS_LEARN_MORE_V2,
                                action: b
                            }),
                        e.shouldShowDisclosure &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'display-disclosure',
                                label: I.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: L
                            }),
                        u &&
                            (0, r.jsx)(o.MenuItem, {
                                id: 'hide-entrypoint',
                                label: I.Z.Messages.QUESTS_HIDE_THIS,
                                action: M,
                                subtext: I.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, r.jsxs)(
                    o.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            (0, r.jsx)(o.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: O
                            }),
                            (0, r.jsx)(o.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: v
                            }),
                            (0, r.jsx)(o.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: N
                            }),
                            (0, r.jsx)(o.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: R
                            }),
                            (0, r.jsx)(o.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, f.$J)(e.quest) &&
                                (0, r.jsxs)(o.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, r.jsx)(o.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, f.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, r.jsx)(o.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: U
                                        }),
                                        (0, r.jsx)(o.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: w
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
function g(e) {
    let { children: t, onOpen: n, onClose: a, preventIdle: s, quest: l, questContent: d, questContentPosition: _, ...E } = e,
        f = i.useCallback(() => {
            (0, c._3)({
                questId: l.id,
                questContent: d,
                questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: _
            }),
                null != n && n();
        }, [n, l.id, d, _]);
    return (0, r.jsx)(o.Popout, {
        onRequestOpen: f,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return s
                ? (0, r.jsx)(u.Z, {
                      children: (0, r.jsx)(T, {
                          ...E,
                          quest: l,
                          questContent: d,
                          questContentPosition: _,
                          onClose: t
                      })
                  })
                : (0, r.jsx)(T, {
                      ...E,
                      quest: l,
                      questContent: d,
                      questContentPosition: _,
                      onClose: t
                  });
        },
        animation: o.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
