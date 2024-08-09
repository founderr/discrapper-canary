n.d(t, {
  P: function() {
return D;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(512722),
  o = n.n(l),
  c = n(91192),
  u = n(873011),
  d = n(442837),
  _ = n(524437),
  E = n(481060),
  I = n(239091),
  m = n(724757),
  T = n(294218),
  h = n(373662),
  N = n(240126),
  f = n(703656),
  C = n(695346),
  p = n(675478),
  g = n(581883),
  S = n(592125),
  A = n(768943),
  R = n(43690),
  x = n(962796),
  O = n(767893),
  M = n(981631),
  v = n(689938),
  L = n(144754);
let Z = {
offset: {
  left: 4,
  right: -12
}
  },
  P = e => {
p.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, p.fy.FREQUENT_USER_ACTION);
  };

function b(e) {
  let {
closePopout: t
  } = e, n = (0, d.e7)([g.Z], () => {
var e, t;
return null !== (t = null === (e = g.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : _.Pr.ALL;
  }), s = (0, d.Wu)([
A.Z,
g.Z
  ], () => {
var e, t;
let n = A.Z.getMessageReminders(),
  i = A.Z.getMessageBookmarks(),
  a = null !== (t = null === (e = g.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : _.Pr.ALL;
return a === _.Pr.ALL ? [
  ...n,
  ...i
] : a === _.Pr.BOOKMARKS ? i : n;
  }), r = (0, d.e7)([A.Z], () => A.Z.getOverdueMessageReminderCount());
  return a.useEffect(() => () => {
(0, x.Mf)();
  }, []), (0, i.jsx)(E.Dialog, {
'aria-label': v.Z.Messages.FOR_LATER,
children: (0, i.jsxs)('div', {
  className: L.popoutContainer,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsxs)('div', {
          className: L.headerTitle,
          children: [
            (0, i.jsx)(E.BookmarkIcon, {
              size: 'md',
              color: 'currentColor',
              className: L.headerTitleIcon
            }),
            (0, i.jsx)(E.Heading, {
              variant: 'heading-lg/semibold',
              children: v.Z.Messages.FOR_LATER
            })
          ]
        }),
        (0, i.jsx)('div', {
          children: (0, i.jsxs)(E.TabBar, {
            type: 'top',
            look: 'brand',
            selectedItem: n,
            onItemSelect: P,
            className: L.tabBar,
            children: [
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.ALL,
                className: L.tabBarItem,
                children: v.Z.Messages.FOR_LATER_TAB_ALL
              }),
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.BOOKMARKS,
                className: L.tabBarItem,
                children: v.Z.Messages.FOR_LATER_TAB_SAVED
              }),
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.REMINDERS,
                className: L.tabBarItem,
                children: 0 === r ? v.Z.Messages.FOR_LATER_TAB_REMINDERS : v.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({
                  count: r
                })
              })
            ]
          })
        })
      ]
    }),
    (0, i.jsx)(j, {
      savedMessages: s,
      closePopout: t
    })
  ]
})
  });
}

function D(e) {
  let {
onOpen: t,
onClose: n,
children: s,
popoutPosition: r,
popoutAlign: l
  } = e, [o, c] = a.useState(!1), u = a.useCallback(() => {
c(!1), o && (null == n || n());
  }, [
n,
o
  ]), d = a.useCallback(() => {
c(!o), o ? null == n || n() : null == t || t();
  }, [
n,
t,
o
  ]);
  return (0, i.jsx)(E.Popout, {
animation: E.Popout.Animation.NONE,
position: r,
align: l,
autoInvert: !1,
shouldShow: o,
onRequestClose: u,
renderPopout: function() {
  return (0, i.jsx)(b, {
    closePopout: u
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return s(d, n, e);
}
  });
}

function j(e) {
  let {
savedMessages: t,
closePopout: n
  } = e, s = a.useRef(null), r = (0, m.Z)('for-later', s);
  return 0 === t.length ? (0, i.jsx)(B, {}) : (0, i.jsx)(c.bG, {
navigator: r,
children: (0, i.jsx)(c.SJ, {
  children: e => {
    let {
      ref: a,
      ...r
    } = e;
    return (0, i.jsx)(E.AdvancedScrollerThin, {
      ref: e => {
        var t;
        s.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      className: L.messagesScroller,
      ...r,
      children: t.map(e => (0, i.jsx)(U, {
        savedMessage: e,
        closePopout: n
      }, ''.concat(e.saveData.messageId, '-').concat(e.saveData.type)))
    });
  }
})
  });
}

function U(e) {
  let {
savedMessage: t,
closePopout: n
  } = e, s = (0, d.e7)([S.Z], () => S.Z.getChannel(t.saveData.channelId)), l = a.useCallback(e => {
!e.shiftKey && n(), (0, f.uL)(M.Z5c.CHANNEL(null == s ? void 0 : s.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  }, [
n,
t,
s
  ]);
  return null == s || null == t.message ? (0, i.jsxs)('div', {
className: r()(L.messageContainer, L.deletedMessage),
children: [
  (0, i.jsx)('div', {
    className: L.deleteIcon,
    children: (0, i.jsx)(E.CircleWarningIcon, {
      size: 'xxs',
      color: E.tokens.colors.INTERACTIVE_ACTIVE
    })
  }),
  (0, i.jsx)(E.Heading, {
    variant: 'text-md/semibold',
    color: 'header-secondary',
    children: v.Z.Messages.FOR_LATER_MESSAGE_DELETED
  }),
  (0, i.jsx)(h.Z, {
    className: L.hoverBar,
    children: (0, i.jsx)(h.s, {
      label: v.Z.Messages.FOR_LATER_REMOVE,
      icon: E.TrashIcon,
      dangerous: !0,
      onClick: () => t.saveData.type === u.J.REMINDER ? (0, x.bn)(t.saveData) : (0, R.h)(t.saveData)
    }, 'delete')
  })
]
  }) : (0, i.jsxs)('div', {
className: L.messageContainer,
children: [
  (0, i.jsx)(O.Z, {
    channel: s,
    jumpToMessage: l
  }),
  (0, i.jsx)(T.Z, {
    message: t.message,
    channel: s,
    className: r()(L.message, t.complete ? L.disabledMessage : null),
    compact: C.jU.getSetting(),
    animateAvatar: !1,
    focusProps: Z,
    trackAnnouncementViews: !0
  }, t.message.id),
  (0, i.jsx)(h.Z, {
    className: L.hoverBar,
    children: (0, i.jsx)(y, {
      savedMessage: t,
      jumpToMessage: l
    })
  })
]
  });
}

function y(e) {
  let {
savedMessage: t,
jumpToMessage: a
  } = e;
  return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), t.saveData.type === u.J.REMINDER) ? (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(h.s, {
    label: v.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
    onClick: () => (0, x.Y_)(t.saveData.messageId, !t.complete),
    children: (0, i.jsx)(E.Checkbox, {
      type: E.Checkbox.Types.INVERTED,
      value: t.complete,
      size: 20
    })
  }, 'mark-complete'),
  (0, i.jsx)(h.s, {
    label: v.Z.Messages.MESSAGE_REMINDERS_EDIT,
    icon: E.ClockIcon,
    onClick: () => null
  }, 'edit-reminder'),
  (0, i.jsx)(h.s, {
    label: v.Z.Messages.JUMP_TO_MESSAGE,
    icon: E.ArrowLargeRightIcon,
    onClick: e => a(e)
  }, 'jump-to-message')
]
  }) : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(h.s, {
    label: v.Z.Messages.MESSAGE_REMINDERS_CREATE,
    icon: E.ClockIcon,
    onClick: e => (0, I.jW)(e, async () => {
      let {
        MessageReminderCreateMenu: e
      } = await n.e('69818').then(n.bind(n, 898150));
      return n => (0, i.jsx)(e, {
        ...n,
        message: t.message
      });
    })
  }, 'create-reminder'),
  (0, i.jsx)(h.s, {
    label: v.Z.Messages.JUMP_TO_MESSAGE,
    icon: E.ArrowLargeRightIcon,
    onClick: e => a(e)
  }, 'jump-to-message'),
  (0, i.jsx)(h.s, {
    label: v.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
    icon: E.TrashIcon,
    dangerous: !0,
    onClick: () => (0, R.h)(t.saveData)
  }, 'remove-bookmark')
]
  });
}

function B() {
  return (0, i.jsx)(N.Z, {
Icon: E.DoubleCheckmarkIcon,
header: v.Z.Messages.FOR_LATER_EMPTY,
tip: v.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}