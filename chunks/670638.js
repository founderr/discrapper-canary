n.d(t, {
  r: function() {
return h;
  }
});
var s = n(735250),
  o = n(470079),
  i = n(442837),
  a = n(481060),
  r = n(239091),
  l = n(479531),
  u = n(390322),
  c = n(617136),
  d = n(272008),
  C = n(113434),
  E = n(569984),
  m = n(918701),
  p = n(341907),
  x = n(709158),
  T = n(46140),
  _ = n(231338),
  q = n(689938);

function M(e) {
  var t;
  let n = (0, i.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
u = (0, m.GN)(e.questContent),
M = (0, m.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
h = (0, x.Z)(T.dr.QUEST_CONTEXT_MENU),
{
  handleComplete: N,
  handleResetDismissibilityClick: j,
  handleResetStatusClick: I,
  handleOverrideDeliveryClick: S
} = (0, C.kJ)(e.quest.id),
b = o.useCallback(() => {
  (0, m.FE)(e.quest, {
    content: e.questContent,
    ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
f = o.useCallback(() => {
  (0, m.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
g = e => (0, a.showToast)((0, a.createToast)(new l.Z(e, e.status).message, a.ToastType.FAILURE));
  return (0, s.jsxs)(a.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, r.Zy)();
},
navId: 'quests-entry',
'aria-label': q.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : _.dG,
children: [
  (0, s.jsxs)(a.MenuGroup, {
    children: [
      !1 === M && (0, s.jsx)(a.MenuItem, {
        id: 'play-game',
        label: q.Z.Messages.QUESTS_GET_THIS_GAME,
        action: b,
        icon: a.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, s.jsx)(a.MenuItem, {
        id: 'share-link',
        label: q.Z.Messages.COPY_LINK,
        action: f,
        icon: a.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, s.jsxs)(a.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, s.jsx)(a.MenuItem, {
        id: 'learn-more',
        label: q.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, c._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
          }), (0, p.navigateToQuestHome)(T.dr.QUEST_CONTEXT_MENU, e.quest.id);
        }
      }),
      e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: 'display-disclosure',
        label: q.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, p.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      u && (0, s.jsx)(a.MenuItem, {
        id: 'hide-entrypoint',
        label: q.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, c._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
        },
        subtext: h ? q.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME : q.Z.Messages.QUESTS_FIND_QUEST
      })
    ]
  }, 'minor-actions'),
  e.quest.preview && (0, s.jsxs)(a.MenuGroup, {
    label: 'Preview Controls',
    children: [
      (0, s.jsx)(a.MenuCheckboxItem, {
        id: 'delivery',
        label: 'Show in Quest Bar',
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: S
      }),
      (0, s.jsx)(a.MenuItem, {
        id: 'dismiss',
        label: 'Reset Dismissibility',
        action: j
      }),
      (0, s.jsx)(a.MenuItem, {
        id: 'enrollment',
        label: 'Reset Quest',
        action: I
      }),
      (0, s.jsx)(a.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: N
      }),
      (0, m.$J)(e.quest) && (0, s.jsxs)(a.MenuItem, {
        id: 'console',
        label: 'Console Heartbeat',
        children: [
          (0, s.jsx)(a.MenuItem, {
            disabled: !0,
            id: 'status',
            label: 'Status: '.concat((0, m.Bz)(e.quest) ? 'alive' : 'dead')
          }),
          (0, s.jsx)(a.MenuItem, {
            id: 'start',
            label: 'Start heartbeat (cheatmode)',
            action: () => (0, d.CS)(e.quest.id, !0).catch(g)
          }),
          (0, s.jsx)(a.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, d.is)(e.quest.id).catch(g)
          })
        ]
      })
    ]
  }, 'preview-controls')
]
  });
}

function h(e) {
  let {
children: t,
onOpen: n,
onClose: i,
preventIdle: r,
quest: l,
questContent: d,
questContentPosition: C,
...E
  } = e, m = o.useCallback(() => {
(0, c._3)({
  questId: l.id,
  questContent: d,
  questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: C
}), null != n && n();
  }, [
n,
l.id,
d,
C
  ]);
  return (0, s.jsx)(a.Popout, {
onRequestOpen: m,
onRequestClose: i,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return r ? (0, s.jsx)(u.Z, {
    children: (0, s.jsx)(M, {
      ...E,
      quest: l,
      questContent: d,
      questContentPosition: C,
      onClose: t
    })
  }) : (0, s.jsx)(M, {
    ...E,
    quest: l,
    questContent: d,
    questContentPosition: C,
    onClose: t
  });
},
animation: a.Popout.Animation.NONE,
children: e => t(e)
  });
}