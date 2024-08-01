n.d(t, {
  r: function() {
return C;
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
  m = n(341907),
  T = n(46140),
  h = n(231338),
  N = n(689938);

function f(e) {
  var t;
  let n = (0, a.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
c = (0, I.GN)(e.questContent),
f = (0, I.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
{
  handleComplete: C,
  handleResetDismissibilityClick: p,
  handleResetStatusClick: g,
  handleOverrideDeliveryClick: S
} = (0, _.kJ)(e.quest.id),
A = s.useCallback(() => {
  (0, I.FE)(e.quest, {
    content: e.questContent,
    ctaContent: u.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
M = s.useCallback(() => {
  (0, I.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: u.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
R = e => (0, r.showToast)((0, r.createToast)(new o.Z(e, e.status).message, r.ToastType.FAILURE));
  return (0, i.jsxs)(r.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, l.Zy)();
},
navId: 'quests-entry',
'aria-label': N.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : h.dG,
children: [
  (0, i.jsxs)(r.MenuGroup, {
    children: [
      !1 === f && (0, i.jsx)(r.MenuItem, {
        id: 'play-game',
        label: N.Z.Messages.QUESTS_GET_THIS_GAME,
        action: A,
        icon: r.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, i.jsx)(r.MenuItem, {
        id: 'share-link',
        label: N.Z.Messages.COPY_LINK,
        action: M,
        icon: r.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, i.jsxs)(r.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, i.jsx)(r.MenuItem, {
        id: 'learn-more',
        label: N.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, u._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: u.jZ.CONTEXT_MENU_LEARN_MORE
          }), (0, m.navigateToQuestHome)(T.dr.QUEST_CONTEXT_MENU, e.quest.id);
        }
      }),
      e.shouldShowDisclosure && (0, i.jsx)(r.MenuItem, {
        id: 'display-disclosure',
        label: N.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, m.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: u.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      c && (0, i.jsx)(r.MenuItem, {
        id: 'hide-entrypoint',
        label: N.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, u._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: u.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, I.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
        },
        subtext: N.Z.Messages.QUESTS_FIND_QUEST
      })
    ]
  }, 'minor-actions'),
  e.quest.preview && (0, i.jsxs)(r.MenuGroup, {
    label: 'Preview Controls',
    children: [
      (0, i.jsx)(r.MenuCheckboxItem, {
        id: 'delivery',
        label: 'Show in Quest Bar',
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: S
      }),
      (0, i.jsx)(r.MenuItem, {
        id: 'dismiss',
        label: 'Reset Dismissibility',
        action: p
      }),
      (0, i.jsx)(r.MenuItem, {
        id: 'enrollment',
        label: 'Reset Quest',
        action: g
      }),
      (0, i.jsx)(r.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: C
      }),
      (0, I.$J)(e.quest) && (0, i.jsxs)(r.MenuItem, {
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
            action: () => (0, d.CS)(e.quest.id, !0).catch(R)
          }),
          (0, i.jsx)(r.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, d.is)(e.quest.id).catch(R)
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
preventIdle: l,
quest: o,
questContent: d,
questContentPosition: _,
...E
  } = e, I = s.useCallback(() => {
(0, u._3)({
  questId: o.id,
  questContent: d,
  questContentCTA: u.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: _
}), null != n && n();
  }, [
n,
o.id,
d,
_
  ]);
  return (0, i.jsx)(r.Popout, {
onRequestOpen: I,
onRequestClose: a,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return l ? (0, i.jsx)(c.Z, {
    children: (0, i.jsx)(f, {
      ...E,
      quest: o,
      questContent: d,
      questContentPosition: _,
      onClose: t
    })
  }) : (0, i.jsx)(f, {
    ...E,
    quest: o,
    questContent: d,
    questContentPosition: _,
    onClose: t
  });
},
animation: r.Popout.Animation.NONE,
children: e => t(e)
  });
}