n.r(t), n.d(t, {
  default: function() {
return x;
  }
});
var o = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(600164),
  i = n(63063),
  l = n(113434),
  d = n(497505),
  c = n(918701),
  u = n(471985),
  m = n(46140),
  _ = n(981631),
  S = n(689938),
  E = n(552461),
  T = n(708901);

function x(e) {
  var t;
  let {
transitionState: n,
onClose: x,
questContent: f,
quest: g
  } = e, j = (0, c.zK)(g, m.S7.IN_HOUSE_CONSOLE_QUEST), C = (0, c.Mi)(g, d.jn.GIFT_INVENTORY_FOR_YOU), U = (0, l.tP)(g), h = (null === (t = g.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, I = f === d.jn.QUEST_BAR || f === d.jn.QUEST_BAR_V2 || C && !U && !h, R = (0, u.Z)(m.dr.QUEST_DISCLOSURE_MODAL), p = s.useMemo(() => (0, c.Fs)({
isTargetedDisclosure: I,
gamePublisher: g.config.messages.gamePublisher,
gameTitle: g.config.messages.gameTitle,
isInHouseQuest: j,
hasQuestHomeExperiment: R
  }), [
g,
j,
R,
I
  ]);
  return (0, o.jsxs)(a.ModalRoot, {
transitionState: n,
size: a.ModalSize.DYNAMIC,
className: E.modalRoot,
children: [
  (0, o.jsxs)(a.ModalHeader, {
    direction: r.Z.Direction.VERTICAL,
    separator: !1,
    className: E.modalHeader,
    children: [
      (0, o.jsxs)('div', {
        className: E.modalTop,
        children: [
          (0, o.jsx)('div', {
            className: E.iconFrame,
            children: (0, o.jsx)('img', {
              className: E.icon,
              alt: '',
              src: T
            })
          }),
          (0, o.jsx)(a.ModalCloseButton, {
            className: E.closeBtn,
            onClick: x
          })
        ]
      }),
      (0, o.jsx)(a.Heading, {
        variant: 'heading-xl/bold',
        children: S.Z.Messages.QUESTS_DISCLOSURE_LABEL
      })
    ]
  }),
  (0, o.jsxs)(a.ModalContent, {
    className: E.modalContent,
    children: [
      (0, o.jsx)(a.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        className: E.upperBodyText,
        children: p
      }),
      (0, o.jsx)(b, {
        quest: g,
        questContent: f
      }),
      (0, o.jsx)(a.Text, {
        variant: 'text-xs/medium',
        color: 'text-muted',
        children: S.Z.Messages.QUESTS_DISCLOSURE_LEARN_MORE.format({
          privacySettingsUrl: i.Z.getArticleURL(_.BhN.QUESTS_PRIVACY_CONTROLS)
        })
      })
    ]
  }),
  (0, o.jsx)(a.ModalFooter, {
    className: E.footer,
    children: (0, o.jsx)(a.Button, {
      onClick: x,
      children: S.Z.Messages.CLOSE
    })
  })
]
  });
}

function f(e) {
  let {
location: t,
age: n,
activity: s
  } = e;
  return (0, o.jsxs)('ul', {
className: E.targetList,
children: [
  t && (0, o.jsx)(g, {
    icon: a.GlobeEarthIcon,
    children: S.Z.Messages.QUESTS_DISCLOSURE_LOCATION
  }),
  n && (0, o.jsx)(g, {
    icon: a.UserIcon,
    children: S.Z.Messages.QUESTS_DISCLOSURE_AGE
  }),
  s && (0, o.jsx)(g, {
    icon: a.GameControllerIcon,
    children: S.Z.Messages.QUESTS_DISCLOSURE_ACTIVITY
  })
]
  });
}

function b(e) {
  var t;
  let {
questContent: n,
quest: s
  } = e, a = (0, c.Mi)(s, d.jn.GIFT_INVENTORY_FOR_YOU), r = (0, l.tP)(s), i = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null;
  return n !== d.jn.QUEST_BAR && n !== d.jn.QUEST_BAR_V2 && (n !== d.jn.QUEST_HOME_DESKTOP || !a || r || i) ? n === d.jn.ACTIVITY_PANEL || n === d.jn.QUESTS_EMBED || n === d.jn.QUEST_LIVE_STREAM ? (0, o.jsx)(f, {
activity: !0
  }) : null : (0, o.jsx)(f, {
location: !0,
age: !0,
activity: !0
  });
}

function g(e) {
  let {
icon: t,
children: n
  } = e;
  return (0, o.jsxs)(a.Text, {
variant: 'text-sm/medium',
tag: 'li',
className: E.targetItem,
children: [
  (0, o.jsx)(t, {
    size: 'xs',
    color: 'currentColor'
  }),
  n
]
  });
}