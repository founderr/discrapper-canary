n.d(t, {
  P: function() {
return D;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(512722),
  o = n.n(l),
  c = n(91192),
  u = n(873011),
  d = n(442837),
  _ = n(524437),
  E = n(481060),
  I = n(724757),
  m = n(294218),
  T = n(373662),
  h = n(240126),
  N = n(703656),
  C = n(695346),
  f = n(675478),
  p = n(581883),
  g = n(592125),
  S = n(768943),
  A = n(43690),
  R = n(962796),
  O = n(767893),
  x = n(981631),
  M = n(689938),
  v = n(144754);
let L = {
offset: {
  left: 4,
  right: -12
}
  },
  Z = e => {
f.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, f.fy.FREQUENT_USER_ACTION);
  };

function P(e) {
  let {
closePopout: t
  } = e, n = (0, d.e7)([p.Z], () => {
var e, t;
return null !== (t = null === (e = p.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : _.Pr.ALL;
  }), a = (0, d.Wu)([
S.Z,
p.Z
  ], () => {
var e, t;
let n = S.Z.getMessageReminders(),
  i = S.Z.getMessageBookmarks(),
  s = null !== (t = null === (e = p.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : _.Pr.ALL;
return s === _.Pr.ALL ? [
  ...n,
  ...i
] : s === _.Pr.BOOKMARKS ? i : n;
  }), r = (0, d.e7)([S.Z], () => S.Z.getOverdueMessageReminderCount());
  return s.useEffect(() => () => {
(0, R.Mf)();
  }, []), (0, i.jsx)(E.Dialog, {
'aria-label': M.Z.Messages.FOR_LATER,
children: (0, i.jsxs)('div', {
  className: v.popoutContainer,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsxs)('div', {
          className: v.headerTitle,
          children: [
            (0, i.jsx)(E.TagIcon, {
              size: 'md',
              color: 'currentColor',
              className: v.headerTitleIcon
            }),
            (0, i.jsx)(E.Heading, {
              variant: 'heading-lg/semibold',
              children: M.Z.Messages.FOR_LATER
            })
          ]
        }),
        (0, i.jsx)('div', {
          children: (0, i.jsxs)(E.TabBar, {
            type: 'top',
            look: 'brand',
            selectedItem: n,
            onItemSelect: Z,
            className: v.tabBar,
            children: [
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.ALL,
                className: v.tabBarItem,
                children: M.Z.Messages.FOR_LATER_TAB_ALL
              }),
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.BOOKMARKS,
                className: v.tabBarItem,
                children: M.Z.Messages.MESSAGE_BOOKMARKS_HEADER
              }),
              (0, i.jsx)(E.TabBar.Item, {
                id: _.Pr.REMINDERS,
                className: v.tabBarItem,
                children: M.Z.Messages.FOR_LATER_TAB_REMINDERS.format({
                  count: r
                })
              })
            ]
          })
        })
      ]
    }),
    (0, i.jsx)(b, {
      savedMessages: a,
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
children: a,
popoutPosition: r,
popoutAlign: l
  } = e, [o, c] = s.useState(!1), u = s.useCallback(() => {
c(!1), o && (null == n || n());
  }, [
n,
o
  ]), d = s.useCallback(() => {
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
  return (0, i.jsx)(P, {
    closePopout: u
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return a(d, n, e);
}
  });
}

function b(e) {
  let {
savedMessages: t,
closePopout: n
  } = e, a = s.useRef(null), r = (0, I.Z)('for-later', a);
  return 0 === t.length ? (0, i.jsx)(y, {}) : (0, i.jsx)(c.bG, {
navigator: r,
children: (0, i.jsx)(c.SJ, {
  children: e => {
    let {
      ref: s,
      ...r
    } = e;
    return (0, i.jsx)(E.AdvancedScrollerThin, {
      ref: e => {
        var t;
        a.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      className: v.messagesScroller,
      ...r,
      children: t.map(e => (0, i.jsx)(j, {
        savedMessage: e,
        closePopout: n
      }, ''.concat(e.saveData.messageId, '-').concat(e.saveData.type)))
    });
  }
})
  });
}

function j(e) {
  let {
savedMessage: t,
closePopout: n
  } = e, a = (0, d.e7)([g.Z], () => g.Z.getChannel(t.saveData.channelId)), l = s.useCallback(e => {
!e.shiftKey && n(), (0, N.uL)(x.Z5c.CHANNEL(null == a ? void 0 : a.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  }, [
n,
t,
a
  ]);
  return null == a || null == t.message ? (0, i.jsx)('div', {
children: 'The message isn\'t accessible. We will deal with this later.'
  }) : (0, i.jsxs)('div', {
className: v.messageContainer,
children: [
  (0, i.jsx)(O.Z, {
    channel: a,
    jumpToMessage: l
  }),
  (0, i.jsx)(m.Z, {
    message: t.message,
    channel: a,
    className: r()(v.message, t.complete ? v.disabledMessage : null),
    compact: C.jU.getSetting(),
    animateAvatar: !1,
    focusProps: L,
    trackAnnouncementViews: !0
  }, t.message.id),
  (0, i.jsx)(T.Z, {
    className: v.hoverBar,
    children: (0, i.jsx)(U, {
      savedMessage: t,
      channel: a,
      jumpToMessage: l
    })
  })
]
  });
}

function U(e) {
  let {
savedMessage: t,
channel: n,
jumpToMessage: s
  } = e;
  return (o()(null != t.message, 'Saved message is undefined'), t.saveData.type === u.J.REMINDER) ? (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(T.s, {
    channel: n,
    label: M.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
    message: t.message,
    onClick: () => (0, R.Y_)(t.saveData.messageId, !t.complete),
    children: (0, i.jsx)(E.Checkbox, {
      type: E.Checkbox.Types.INVERTED,
      value: t.complete,
      size: 20
    })
  }, 'mark-complete'),
  (0, i.jsx)(T.s, {
    channel: n,
    label: M.Z.Messages.MESSAGE_REMINDERS_EDIT,
    icon: E.ClockIcon,
    message: t.message,
    onClick: () => null
  }, 'edit-reminder'),
  (0, i.jsx)(T.s, {
    channel: n,
    label: M.Z.Messages.JUMP_TO_MESSAGE,
    icon: E.ArrowLargeRightIcon,
    message: t.message,
    onClick: (e, t, n) => s(n)
  }, 'jump-to-message')
]
  }) : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(T.s, {
    channel: n,
    label: M.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: E.ClockIcon,
    message: t.message,
    onClick: () => null
  }, 'add-reminder'),
  (0, i.jsx)(T.s, {
    channel: n,
    label: M.Z.Messages.JUMP_TO_MESSAGE,
    icon: E.ArrowLargeRightIcon,
    message: t.message,
    onClick: (e, t, n) => s(n)
  }, 'jump-to-message'),
  (0, i.jsx)(T.s, {
    channel: n,
    label: M.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
    icon: E.TrashIcon,
    message: t.message,
    dangerous: !0,
    onClick: () => (0, A.h)(t.saveData)
  }, 'delete-bookmark')
]
  });
}

function y() {
  return (0, i.jsx)(h.Z, {
Icon: E.DoubleCheckmarkLargeIcon,
header: M.Z.Messages.FOR_LATER_EMPTY,
tip: M.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}