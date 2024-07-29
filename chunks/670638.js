n.d(t, {
  r: function() {
return N;
  }
});
var s = n(735250),
  a = n(470079),
  o = n(442837),
  i = n(481060),
  r = n(239091),
  u = n(230711),
  l = n(479531),
  c = n(390322),
  d = n(617136),
  _ = n(272008),
  T = n(113434),
  E = n(569984),
  m = n(918701),
  I = n(341907),
  R = n(46140),
  g = n(981631),
  C = n(231338),
  f = n(689938);

function S(e) {
  var t;
  let n = (0, o.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
c = (0, m.GN)(e.questContent),
S = (0, m.zK)(e.quest, R.S7.IN_HOUSE_CONSOLE_QUEST),
{
  handleComplete: N,
  handleResetDismissibilityClick: M,
  handleResetStatusClick: p,
  handleOverrideDeliveryClick: q
} = (0, T.kJ)(e.quest.id),
x = a.useCallback(() => {
  (0, m.FE)(e.quest, {
    content: e.questContent,
    ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
A = a.useCallback(() => {
  (0, m.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
O = e => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE));
  return (0, s.jsxs)(i.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, r.Zy)();
},
navId: 'quests-entry',
'aria-label': f.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : C.dG,
children: [
  (0, s.jsxs)(i.MenuGroup, {
    children: [
      !1 === S && (0, s.jsx)(i.MenuItem, {
        id: 'play-game',
        label: f.Z.Messages.QUESTS_GET_THIS_GAME,
        action: x,
        icon: i.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, s.jsx)(i.MenuItem, {
        id: 'share-link',
        label: f.Z.Messages.COPY_LINK,
        action: A,
        icon: i.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, s.jsxs)(i.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, s.jsx)(i.MenuItem, {
        id: 'learn-more',
        label: f.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
          }), u.Z.open(g.oAB.INVENTORY);
        }
      }),
      e.shouldShowDisclosure && (0, s.jsx)(i.MenuItem, {
        id: 'display-disclosure',
        label: f.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, I.az)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      c && (0, s.jsx)(i.MenuItem, {
        id: 'hide-entrypoint',
        label: f.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.GN)(e.questContent) && (0, _.gl)(e.quest.id, e.questContent);
        },
        subtext: f.Z.Messages.QUESTS_FIND_QUEST
      })
    ]
  }, 'minor-actions'),
  e.quest.preview && (0, s.jsxs)(i.MenuGroup, {
    label: 'Preview Controls',
    children: [
      (0, s.jsx)(i.MenuCheckboxItem, {
        id: 'delivery',
        label: 'Show in Quest Bar',
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: q
      }),
      (0, s.jsx)(i.MenuItem, {
        id: 'dismiss',
        label: 'Reset Dismissibility',
        action: M
      }),
      (0, s.jsx)(i.MenuItem, {
        id: 'enrollment',
        label: 'Reset Quest',
        action: p
      }),
      (0, s.jsx)(i.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: N
      }),
      (0, m.$J)(e.quest) && (0, s.jsxs)(i.MenuItem, {
        id: 'console',
        label: 'Console Heartbeat',
        children: [
          (0, s.jsx)(i.MenuItem, {
            disabled: !0,
            id: 'status',
            label: 'Status: '.concat((0, m.Bz)(e.quest) ? 'alive' : 'dead')
          }),
          (0, s.jsx)(i.MenuItem, {
            id: 'start',
            label: 'Start heartbeat (cheatmode)',
            action: () => (0, _.CS)(e.quest.id, !0).catch(O)
          }),
          (0, s.jsx)(i.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, _.is)(e.quest.id).catch(O)
          })
        ]
      })
    ]
  }, 'preview-controls')
]
  });
}

function N(e) {
  let {
children: t,
onOpen: n,
onClose: o,
preventIdle: r,
quest: u,
questContent: l,
questContentPosition: _,
...T
  } = e, E = a.useCallback(() => {
(0, d._3)({
  questId: u.id,
  questContent: l,
  questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: _
}), null != n && n();
  }, [
n,
u.id,
l,
_
  ]);
  return (0, s.jsx)(i.Popout, {
onRequestOpen: E,
onRequestClose: o,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return r ? (0, s.jsx)(c.Z, {
    children: (0, s.jsx)(S, {
      ...T,
      quest: u,
      questContent: l,
      questContentPosition: _,
      onClose: t
    })
  }) : (0, s.jsx)(S, {
    ...T,
    quest: u,
    questContent: l,
    questContentPosition: _,
    onClose: t
  });
},
animation: i.Popout.Animation.NONE,
children: e => t(e)
  });
}