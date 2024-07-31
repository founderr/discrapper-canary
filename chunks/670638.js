n.d(t, {
  r: function() {
return C;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(442837),
  o = n(481060),
  i = n(239091),
  u = n(479531),
  l = n(390322),
  c = n(617136),
  d = n(272008),
  _ = n(113434),
  m = n(569984),
  T = n(918701),
  E = n(341907),
  g = n(46140),
  I = n(231338),
  f = n(689938);

function R(e) {
  var t;
  let n = (0, a.e7)([m.Z], () => m.Z.questDeliveryOverride, []),
l = (0, T.GN)(e.questContent),
R = (0, T.zK)(e.quest, g.S7.IN_HOUSE_CONSOLE_QUEST),
{
  handleComplete: C,
  handleResetDismissibilityClick: S,
  handleResetStatusClick: N,
  handleOverrideDeliveryClick: M
} = (0, _.kJ)(e.quest.id),
p = r.useCallback(() => {
  (0, T.FE)(e.quest, {
    content: e.questContent,
    ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
q = r.useCallback(() => {
  (0, T.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
A = e => (0, o.showToast)((0, o.createToast)(new u.Z(e, e.status).message, o.ToastType.FAILURE));
  return (0, s.jsxs)(o.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, i.Zy)();
},
navId: 'quests-entry',
'aria-label': f.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : I.dG,
children: [
  (0, s.jsxs)(o.MenuGroup, {
    children: [
      !1 === R && (0, s.jsx)(o.MenuItem, {
        id: 'play-game',
        label: f.Z.Messages.QUESTS_GET_THIS_GAME,
        action: p,
        icon: o.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: 'share-link',
        label: f.Z.Messages.COPY_LINK,
        action: q,
        icon: o.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, s.jsxs)(o.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: 'learn-more',
        label: f.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, c._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
          }), (0, E.navigateToQuestHome)(g.dr.QUEST_CONTEXT_MENU, e.quest.id);
        }
      }),
      e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: 'display-disclosure',
        label: f.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, E.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      l && (0, s.jsx)(o.MenuItem, {
        id: 'hide-entrypoint',
        label: f.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, c._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, T.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
        },
        subtext: f.Z.Messages.QUESTS_FIND_QUEST
      })
    ]
  }, 'minor-actions'),
  e.quest.preview && (0, s.jsxs)(o.MenuGroup, {
    label: 'Preview Controls',
    children: [
      (0, s.jsx)(o.MenuCheckboxItem, {
        id: 'delivery',
        label: 'Show in Quest Bar',
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: M
      }),
      (0, s.jsx)(o.MenuItem, {
        id: 'dismiss',
        label: 'Reset Dismissibility',
        action: S
      }),
      (0, s.jsx)(o.MenuItem, {
        id: 'enrollment',
        label: 'Reset Quest',
        action: N
      }),
      (0, s.jsx)(o.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: C
      }),
      (0, T.$J)(e.quest) && (0, s.jsxs)(o.MenuItem, {
        id: 'console',
        label: 'Console Heartbeat',
        children: [
          (0, s.jsx)(o.MenuItem, {
            disabled: !0,
            id: 'status',
            label: 'Status: '.concat((0, T.Bz)(e.quest) ? 'alive' : 'dead')
          }),
          (0, s.jsx)(o.MenuItem, {
            id: 'start',
            label: 'Start heartbeat (cheatmode)',
            action: () => (0, d.CS)(e.quest.id, !0).catch(A)
          }),
          (0, s.jsx)(o.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, d.is)(e.quest.id).catch(A)
          })
        ]
      })
    ]
  }, 'preview-controls')
]
  });
}

function C(e) {
  let {
children: t,
onOpen: n,
onClose: a,
preventIdle: i,
quest: u,
questContent: d,
questContentPosition: _,
...m
  } = e, T = r.useCallback(() => {
(0, c._3)({
  questId: u.id,
  questContent: d,
  questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: _
}), null != n && n();
  }, [
n,
u.id,
d,
_
  ]);
  return (0, s.jsx)(o.Popout, {
onRequestOpen: T,
onRequestClose: a,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return i ? (0, s.jsx)(l.Z, {
    children: (0, s.jsx)(R, {
      ...m,
      quest: u,
      questContent: d,
      questContentPosition: _,
      onClose: t
    })
  }) : (0, s.jsx)(R, {
    ...m,
    quest: u,
    questContent: d,
    questContentPosition: _,
    onClose: t
  });
},
animation: o.Popout.Animation.NONE,
children: e => t(e)
  });
}