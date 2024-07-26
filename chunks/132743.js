n.d(t, {
  P: function() {
return m;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(524437),
  l = n(481060),
  o = n(768943),
  c = n(675478),
  u = n(581883),
  d = n(689938),
  _ = n(73131);
let E = e => {
  c.hW.updateAsync('forLater', t => {
if (t.currentTab === e)
  return !1;
t.currentTab = e;
  }, c.fy.FREQUENT_USER_ACTION);
};

function I(e) {
  let {
closePopout: t
  } = e, n = (0, s.e7)([u.Z], () => {
var e, t;
return null !== (t = null === (e = u.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.Pr.ALL;
  }), c = (0, s.Wu)([o.Z], () => o.Z.getMessageReminders());
  return a.useCallback(e => {
!e.shiftKey && t();
  }, [t]), (0, i.jsx)(l.Dialog, {
'aria-label': d.Z.Messages.FOR_LATER,
children: (0, i.jsx)('div', {
  className: _.popoutContainer,
  children: (0, i.jsxs)('div', {
    children: [
      (0, i.jsxs)('div', {
        className: _.headerTitle,
        children: [
          (0, i.jsx)(l.TagIcon, {
            size: 'md',
            color: 'currentColor',
            className: _.headerTitleIcon
          }),
          (0, i.jsx)(l.Heading, {
            variant: 'heading-lg/semibold',
            children: d.Z.Messages.FOR_LATER
          })
        ]
      }),
      (0, i.jsx)('div', {
        children: (0, i.jsxs)(l.TabBar, {
          type: 'top',
          look: 'brand',
          selectedItem: n,
          onItemSelect: E,
          className: _.tabBar,
          children: [
            (0, i.jsx)(l.TabBar.Item, {
              id: r.Pr.ALL,
              className: _.tabBarItem,
              children: d.Z.Messages.FOR_LATER_TAB_ALL
            }),
            (0, i.jsx)(l.TabBar.Item, {
              id: r.Pr.BOOKMARKS,
              className: _.tabBarItem,
              children: d.Z.Messages.MESSAGE_BOOKMARKS_HEADER
            }),
            (0, i.jsx)(l.TabBar.Item, {
              id: r.Pr.REMINDERS,
              className: _.tabBarItem,
              children: d.Z.Messages.FOR_LATER_TAB_REMINDERS.format({
                count: c.length
              })
            })
          ]
        })
      })
    ]
  })
})
  });
}

function m(e) {
  let {
onOpen: t,
onClose: n,
children: s,
popoutPosition: r,
popoutAlign: o
  } = e, [c, u] = a.useState(!1), d = a.useCallback(() => {
u(!1), c && (null == n || n());
  }, [
n,
c
  ]), _ = a.useCallback(() => {
u(!c), c ? null == n || n() : null == t || t();
  }, [
n,
t,
c
  ]);
  return (0, i.jsx)(l.Popout, {
animation: l.Popout.Animation.NONE,
position: r,
align: o,
autoInvert: !1,
shouldShow: c,
onRequestClose: d,
renderPopout: function() {
  return (0, i.jsx)(I, {
    closePopout: d
  });
},
ignoreModalClicks: !0,
children: (e, t) => {
  let {
    isShown: n
  } = t;
  return s(_, n, e);
}
  });
}