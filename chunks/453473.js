n.d(t, {
  P: function() {
return A;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(91192),
  r = n(948789),
  l = n(442837),
  o = n(524437),
  c = n(481060),
  u = n(724757),
  d = n(294218),
  _ = n(240126),
  E = n(695346),
  I = n(675478),
  m = n(581883),
  T = n(592125),
  h = n(768943),
  N = n(981631),
  C = n(689938),
  f = n(144754);
let p = {
offset: {
  left: 4,
  right: -12
}
  },
  g = e => {
I.hW.updateAsync('forLater', t => {
  if (t.currentTab === e)
    return !1;
  t.currentTab = e;
}, I.fy.FREQUENT_USER_ACTION);
  };

function S(e) {
  let {
closePopout: t
  } = e, n = (0, l.e7)([m.Z], () => {
var e, t;
return null !== (t = null === (e = m.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : o.Pr.ALL;
  }), s = (0, l.Wu)([
h.Z,
m.Z
  ], () => {
var e, t;
let n = h.Z.getMessageReminders(),
  i = h.Z.getMessageBookmarks(),
  s = null !== (t = null === (e = m.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : o.Pr.ALL;
return s === o.Pr.ALL ? [
  ...n,
  ...i
] : s === o.Pr.BOOKMARKS ? i : n;
  }), a = (0, l.e7)([h.Z], () => h.Z.getOverdueMessageReminderCount());
  return (0, i.jsx)(c.Dialog, {
'aria-label': C.Z.Messages.FOR_LATER,
children: (0, i.jsxs)('div', {
  className: f.popoutContainer,
  children: [
    (0, i.jsxs)('div', {
      children: [
        (0, i.jsxs)('div', {
          className: f.headerTitle,
          children: [
            (0, i.jsx)(c.TagIcon, {
              size: 'md',
              color: 'currentColor',
              className: f.headerTitleIcon
            }),
            (0, i.jsx)(c.Heading, {
              variant: 'heading-lg/semibold',
              children: C.Z.Messages.FOR_LATER
            })
          ]
        }),
        (0, i.jsx)('div', {
          children: (0, i.jsxs)(c.TabBar, {
            type: 'top',
            look: 'brand',
            selectedItem: n,
            onItemSelect: g,
            className: f.tabBar,
            children: [
              (0, i.jsx)(c.TabBar.Item, {
                id: o.Pr.ALL,
                className: f.tabBarItem,
                children: C.Z.Messages.FOR_LATER_TAB_ALL
              }),
              (0, i.jsx)(c.TabBar.Item, {
                id: o.Pr.BOOKMARKS,
                className: f.tabBarItem,
                children: C.Z.Messages.MESSAGE_BOOKMARKS_HEADER
              }),
              (0, i.jsx)(c.TabBar.Item, {
                id: o.Pr.REMINDERS,
                className: f.tabBarItem,
                children: C.Z.Messages.FOR_LATER_TAB_REMINDERS.format({
                  count: a
                })
              })
            ]
          })
        })
      ]
    }),
    (0, i.jsx)(R, {
      savedMessages: s,
      closePopout: t
    })
  ]
})
  });
}

function A(e) {
  let {
onOpen: t,
onClose: n,
children: a,
popoutPosition: r,
popoutAlign: l
  } = e, [o, u] = s.useState(!1), d = s.useCallback(() => {
u(!1), o && (null == n || n());
  }, [
n,
o
  ]), _ = s.useCallback(() => {
u(!o), o ? null == n || n() : null == t || t();
  }, [
n,
t,
o
  ]);
  return (0, i.jsx)(c.Popout, {
animation: c.Popout.Animation.NONE,
position: r,
align: l,
autoInvert: !1,
shouldShow: o,
onRequestClose: d,
renderPopout: function() {
  return (0, i.jsx)(S, {
    closePopout: d
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return a(_, n, e);
}
  });
}

function R(e) {
  let {
savedMessages: t,
closePopout: n
  } = e, r = s.useRef(null), l = (0, u.Z)('for-later', r);
  return 0 === t.length ? (0, i.jsx)(x, {}) : (0, i.jsx)(a.bG, {
navigator: l,
children: (0, i.jsx)(a.SJ, {
  children: e => {
    let {
      ref: s,
      ...a
    } = e;
    return (0, i.jsx)(c.AdvancedScrollerThin, {
      ref: e => {
        var t;
        r.current = e, s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
      },
      ...a,
      children: t.map(e => (0, i.jsx)(O, {
        savedMessage: e,
        closePopout: n
      }, ''.concat(e.saveData.messageId, '-').concat(e.saveData.type)))
    });
  }
})
  });
}

function O(e) {
  let {
savedMessage: t,
closePopout: n
  } = e, a = (0, l.e7)([T.Z], () => T.Z.getChannel(t.saveData.channelId));
  return (s.useCallback(e => {
!e.shiftKey && n(), (0, r.uL)(N.Z5c.CHANNEL(null == a ? void 0 : a.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  }, [
n,
t,
a
  ]), null == a || null == t.message) ? (0, i.jsx)('div', {
children: 'The message isn\'t accessible. We will deal with this later.'
  }) : (0, i.jsx)('div', {
className: f.messageContainer,
children: (0, i.jsx)(d.Z, {
  message: t.message,
  channel: a,
  className: f.message,
  compact: E.jU.getSetting(),
  animateAvatar: !1,
  focusProps: p,
  trackAnnouncementViews: !0
}, t.message.id)
  });
}

function x() {
  return (0, i.jsx)(_.Z, {
Icon: c.DoubleCheckmarkLargeIcon,
header: C.Z.Messages.FOR_LATER_EMPTY,
tip: C.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}