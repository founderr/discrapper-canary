n.d(t, {
  r: function() {
return N;
  }
});
var s = n(735250),
  r = n(470079),
  a = n(442837),
  o = n(481060),
  i = n(239091),
  u = n(230711),
  l = n(479531),
  c = n(390322),
  d = n(617136),
  m = n(272008),
  _ = n(113434),
  T = n(569984),
  E = n(918701),
  I = n(341907),
  f = n(46140),
  g = n(981631),
  R = n(231338),
  C = n(689938);

function S(e) {
  var t;
  let n = (0, a.e7)([T.Z], () => T.Z.questDeliveryOverride, []),
c = (0, E.GN)(e.questContent),
S = (0, E.zK)(e.quest, f.S7.IN_HOUSE_CONSOLE_QUEST),
{
  handleComplete: N,
  handleResetDismissibilityClick: M,
  handleResetStatusClick: p,
  handleOverrideDeliveryClick: q
} = (0, _.kJ)(e.quest.id),
A = r.useCallback(() => {
  (0, E.FE)(e.quest, {
    content: e.questContent,
    ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
  });
}, [
  e.quest,
  e.questContent
]),
h = r.useCallback(() => {
  (0, E.f2)(e.quest.id, {
    content: e.questContent,
    position: e.questContentPosition,
    ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
  });
}, [
  e.quest,
  e.questContent,
  e.questContentPosition
]),
x = e => (0, o.showToast)((0, o.createToast)(new l.Z(e, e.status).message, o.ToastType.FAILURE));
  return (0, s.jsxs)(o.Menu, {
variant: 'fixed',
onSelect: () => {
  null != e.onSelect ? e.onSelect() : (0, i.Zy)();
},
navId: 'quests-entry',
'aria-label': C.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : R.dG,
children: [
  (0, s.jsxs)(o.MenuGroup, {
    children: [
      !1 === S && (0, s.jsx)(o.MenuItem, {
        id: 'play-game',
        label: C.Z.Messages.QUESTS_GET_THIS_GAME,
        action: A,
        icon: o.LinkExternalMediumIcon
      }),
      !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: 'share-link',
        label: C.Z.Messages.COPY_LINK,
        action: h,
        icon: o.CopyIcon
      })
    ]
  }, 'major-actions'),
  (0, s.jsxs)(o.MenuGroup, {
    children: [
      !e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: 'learn-more',
        label: C.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
          }), u.Z.open(g.oAB.INVENTORY);
        }
      }),
      e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: 'display-disclosure',
        label: C.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, I.az)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          });
        }
      }),
      c && (0, s.jsx)(o.MenuItem, {
        id: 'hide-entrypoint',
        label: C.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, E.GN)(e.questContent) && (0, m.gl)(e.quest.id, e.questContent);
        },
        subtext: C.Z.Messages.QUESTS_FIND_QUEST
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
        action: p
      }),
      (0, s.jsx)(o.MenuItem, {
        id: 'complete',
        label: 'Complete Quest',
        action: N
      }),
      (0, E.$J)(e.quest) && (0, s.jsxs)(o.MenuItem, {
        id: 'console',
        label: 'Console Heartbeat',
        children: [
          (0, s.jsx)(o.MenuItem, {
            disabled: !0,
            id: 'status',
            label: 'Status: '.concat((0, E.Bz)(e.quest) ? 'alive' : 'dead')
          }),
          (0, s.jsx)(o.MenuItem, {
            id: 'start',
            label: 'Start heartbeat (cheatmode)',
            action: () => (0, m.CS)(e.quest.id, !0).catch(x)
          }),
          (0, s.jsx)(o.MenuItem, {
            id: 'stop',
            label: 'Stop heartbeat',
            action: () => (0, m.is)(e.quest.id).catch(x)
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
onClose: a,
preventIdle: i,
quest: u,
questContent: l,
questContentPosition: m,
..._
  } = e, T = r.useCallback(() => {
(0, d._3)({
  questId: u.id,
  questContent: l,
  questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
  questContentPosition: m
}), null != n && n();
  }, [
n,
u.id,
l,
m
  ]);
  return (0, s.jsx)(o.Popout, {
onRequestOpen: T,
onRequestClose: a,
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return i ? (0, s.jsx)(c.Z, {
    children: (0, s.jsx)(S, {
      ..._,
      quest: u,
      questContent: l,
      questContentPosition: m,
      onClose: t
    })
  }) : (0, s.jsx)(S, {
    ..._,
    quest: u,
    questContent: l,
    questContentPosition: m,
    onClose: t
  });
},
animation: o.Popout.Animation.NONE,
children: e => t(e)
  });
}