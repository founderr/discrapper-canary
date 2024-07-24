n.d(t, {
  Z: function() {
return A;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(442837),
  l = n(524437),
  o = n(481060),
  c = n(294218),
  d = n(703656),
  u = n(768943),
  _ = n(43690),
  E = n(695346),
  m = n(592125),
  I = n(655354),
  T = n(324081),
  h = n(240126),
  N = n(791914),
  f = n(981631),
  p = n(689938),
  C = n(166311),
  g = n(699723);
let S = {
  offset: {
left: 4,
right: -12
  }
};

function A(e) {
  let {
setTab: t,
closePopout: n
  } = e, a = (0, r.e7)([u.Z], () => u.Z.getMessageBookmarks());
  return (0, i.jsxs)('div', {
className: C.container,
children: [
  (0, i.jsx)(N.Z, {
    tab: l.X.BOOKMARKS,
    setTab: t,
    closePopout: n
  }),
  0 === a.length ? (0, i.jsx)(x, {}) : (0, i.jsx)(o.AdvancedScrollerThin, {
    children: a.map(e => (0, i.jsx)(R, {
      savedMessage: e
    }, e.saveData.messageId))
  })
]
  });
}

function R(e) {
  let {
savedMessage: t
  } = e, n = (0, r.e7)([m.Z], () => m.Z.getChannel(t.saveData.channelId)), a = () => {
(0, d.uL)(f.Z5c.CHANNEL(null == n ? void 0 : n.getGuildId(), t.saveData.channelId, t.saveData.messageId));
  };
  return (0, i.jsx)('div', {
className: g.container,
children: null != n && null != t.message ? (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(T.Z, {
      channel: n,
      gotoChannel: a,
      children: (0, i.jsx)(o.CircleIconButton, {
        className: g.closeButton,
        tooltip: p.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK,
        color: o.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(o.CloseSmallIcon, {
          size: 'xs',
          color: 'currentColor'
        }),
        onClick: () => (0, _.h)(t.saveData)
      })
    }),
    (0, i.jsxs)('div', {
      className: s()(g.messageContainer, C.unloadedMessage),
      children: [
        (0, i.jsx)(I.Z, {
          className: g.jumpMessageButton,
          onJump: a
        }),
        (0, i.jsx)(c.Z, {
          message: t.message,
          channel: n,
          className: g.message,
          compact: E.jU.getSetting(),
          animateAvatar: !1,
          focusProps: S,
          trackAnnouncementViews: !0
        }, t.message.id)
      ]
    })
  ]
}) : (0, i.jsx)('div', {
  children: 'The message isn\'t accessible. We will deal with this later.'
})
  });
}

function x() {
  return (0, i.jsx)(h.Z, {
Icon: o.DoubleCheckmarkLargeIcon,
header: p.Z.Messages.MESSAGE_BOOKMARKS_EMPTY,
tip: p.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
  });
}