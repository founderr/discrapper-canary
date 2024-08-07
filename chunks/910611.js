n.d(t, {
  TS: function() {
return P;
  },
  ud: function() {
return b;
  },
  v0: function() {
return j;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(835473),
  u = n(385499),
  d = n(933557),
  h = n(471445),
  p = n(266076),
  m = n(565138),
  _ = n(703656),
  f = n(699516),
  E = n(914010),
  g = n(594174),
  C = n(768581),
  I = n(946734),
  x = n(99843),
  T = n(372564),
  N = n(984370),
  v = n(217314),
  S = n(981631),
  Z = n(689938),
  A = n(489919);

function M(e) {
  var t;
  let {
channel: n
  } = e, a = (0, c.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id);
  if (null == a)
return null;
  let s = C.ZP.getApplicationIconURL({
id: a.id,
icon: a.icon,
size: 14
  });
  return (0, i.jsx)(o.Tooltip, {
text: Z.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_TOPIC_TOOLTIP,
children: e => (0, i.jsxs)(o.Text, {
  ...e,
  className: A.linkedLobby,
  variant: 'text-sm/normal',
  color: 'header-primary',
  children: [
    '\u2022',
    (0, i.jsx)('img', {
      alt: '',
      src: s,
      className: A.linkedLobbyApplicationIcon
    }),
    a.name
  ]
})
  });
}

function b(e) {
  let {
channel: t,
channelName: n,
parentChannel: s,
guild: r,
inSidebar: c = !1,
handleClick: u,
handleContextMenu: m,
handleParentClick: _,
handleParentContextMenu: E,
renderFollowButton: C
  } = e, I = (0, h.KS)(t, r), {
prefix: T,
level: b
  } = function(e, t) {
var n, i;
switch (e) {
  case S.d4z.DM:
    return {
      prefix: Z.Z.Messages.DIRECT_MESSAGE,
        level: 1
    };
  case S.d4z.GROUP_DM:
    return {
      prefix: Z.Z.Messages.GROUP_DM,
        level: 1
    };
  case S.d4z.GUILD_DIRECTORY:
    return {
      prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
        level: 1
    };
  case S.d4z.GUILD_ANNOUNCEMENT:
  case S.d4z.GUILD_TEXT:
  case S.d4z.GUILD_FORUM:
  case S.d4z.GUILD_MEDIA:
  case S.d4z.GUILD_STAGE_VOICE:
  case S.d4z.GUILD_VOICE:
    return {
      prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
        level: 1
    };
  case S.d4z.ANNOUNCEMENT_THREAD:
  case S.d4z.PUBLIC_THREAD:
  case S.d4z.PRIVATE_THREAD:
    return {
      prefix: Z.Z.Messages.THREAD,
        level: 2
    };
  default:
    return {
      prefix: null,
        level: 1
    };
}
  }(t.type, r), R = (0, i.jsxs)(i.Fragment, {
children: [
  null != T ? (0, i.jsxs)(o.HiddenVisually, {
    children: [
      T,
      ':'
    ]
  }) : null,
  ' ',
  n
]
  });
  switch (t.type) {
case S.d4z.DM:
  return (0, i.jsx)(v.Z, {
    level: b,
    channel: t,
    handleClick: u,
    handleContextMenu: m
  });
case S.d4z.GROUP_DM:
  if (t.isManaged())
    return R;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      (0, i.jsx)(o.HiddenVisually, {
        children: Z.Z.Messages.GROUP_DM
      }),
      (0, i.jsx)('div', {
        children: (0, i.jsx)(p.Z, {
          'aria-hidden': !0,
          channel: t,
          size: o.AvatarSizes.SIZE_24,
          facepileSizeOverride: o.AvatarSizes.SIZE_32,
          experimentLocation: 'header_bar',
          className: A.avatar
        })
      }),
      (0, i.jsx)(x.Z, {
        channel: t
      }, 'channel-'.concat(t.id))
    ]
  });
case S.d4z.GUILD_ANNOUNCEMENT:
case S.d4z.GUILD_TEXT:
case S.d4z.GUILD_FORUM:
case S.d4z.GUILD_MEDIA:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      L(I, t.type === S.d4z.GUILD_ANNOUNCEMENT ? Z.Z.Messages.NEWS_CHANNEL : Z.Z.Messages.TEXT_CHANNEL),
      (0, i.jsx)(N.Z.Title, {
        level: b,
        onContextMenu: m,
        onClick: u,
        children: R
      }),
      null != t.linkedLobby ? (0, i.jsx)(M, {
        channel: t
      }) : null,
      null != C ? C() : null
    ]
  });
case S.d4z.GUILD_VOICE:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      L(I, Z.Z.Messages.VOICE_CHANNEL),
      (0, i.jsx)(N.Z.Title, {
        level: b,
        onContextMenu: m,
        onClick: u,
        children: R
      })
    ]
  });
case S.d4z.GUILD_STAGE_VOICE:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      L(I, Z.Z.Messages.STAGE_CHANNEL),
      (0, i.jsx)(N.Z.Title, {
        level: b,
        onContextMenu: m,
        onClick: u,
        children: R
      })
    ]
  });
case S.d4z.ANNOUNCEMENT_THREAD:
case S.d4z.PUBLIC_THREAD:
case S.d4z.PRIVATE_THREAD:
  let j = null;
  if (!c && null != s) {
    let e = (0, h.KS)(s, r);
    j = (0, i.jsxs)(a.Fragment, {
      children: [
        L(e, Z.Z.Messages.TEXT_CHANNEL),
        (0, i.jsx)(N.Z.Title, {
          level: b,
          onContextMenu: E,
          onClick: _,
          className: l()(A.parentChannelName, A.cursorPointer),
          children: (0, d.F6)(s, g.default, f.Z)
        }),
        (0, i.jsx)(N.Z.Caret, {})
      ]
    });
  }
  let P = (null == s ? void 0 : s.type) != null && S.TPd.GUILD_THREADS_ONLY.has(s.type);
  return (0, i.jsxs)(a.Fragment, {
    children: [
      j,
      L(P ? null : I, Z.Z.Messages.THREAD),
      (0, i.jsx)(N.Z.Title, {
        level: b,
        onContextMenu: m,
        onClick: u,
        className: l()({
          [A.cursorPointer]: c,
          [A.forumPostTitle]: P
        }),
        children: R
      })
    ]
  });
case S.d4z.GUILD_DIRECTORY:
  let O = (null == r ? void 0 : r.hasFeature(S.oNc.HUB)) ? Z.Z.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
    guildName: n
  }) : n;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      null !== I ? (0, i.jsx)(N.Z.Icon, {
        iconClassName: A.__invalid_icon,
        icon: I,
        'aria-hidden': !0
      }) : null,
      (0, i.jsxs)(N.Z.Title, {
        level: b,
        onContextMenu: m,
        onClick: u,
        children: [
          null != T ? (0, i.jsxs)(o.HiddenVisually, {
            children: [
              T,
              ':'
            ]
          }) : null,
          ' ',
          O
        ]
      })
    ]
  });
default:
  return null;
  }
}
let R = e => {
  let {
channel: t
  } = e, n = (0, r.e7)([g.default], () => g.default.getCurrentUser()), a = (0, r.e7)([g.default], () => g.default.getUser(t.getRecipientId()));
  return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == a ? void 0 : a.isStaff()) ? (0, i.jsx)(u.Z, {
type: u.Z.Types.STAFF_ONLY_DM
  }) : null;
};

function j(e, t) {
  switch (e.type) {
case S.d4z.DM:
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(R, {
        channel: e
      }),
      (0, i.jsx)(I.Z, {
        channel: e
      }, e.id)
    ]
  });
case S.d4z.GUILD_ANNOUNCEMENT:
case S.d4z.GUILD_TEXT:
case S.d4z.GUILD_VOICE:
case S.d4z.GUILD_STAGE_VOICE:
case S.d4z.GROUP_DM:
  return null != t ? (0, i.jsx)(T.Z, {
    channel: e,
    guild: t
  }, e.id) : null;
default:
  return null;
  }
}

function L(e, t) {
  return (0, i.jsxs)(i.Fragment, {
children: [
  null !== e && (0, i.jsx)(N.Z.Icon, {
    iconClassName: A.__invalid_icon,
    icon: e,
    'aria-hidden': !0
  }),
  (0, i.jsx)(o.HiddenVisually, {
    children: t
  })
]
  });
}

function P(e) {
  let {
guild: t,
channel: n,
caretPosition: a = 'left'
  } = e;
  return (0, r.e7)([E.Z], () => E.Z.getGuildId()) !== S.I_8 || null == t ? null : (0, i.jsxs)('div', {
className: A.guildBreadcrumbContainer,
children: [
  'left' === a && (0, i.jsx)(N.Z.Caret, {
    direction: 'left'
  }),
  (0, i.jsx)(m.Z, {
    guild: t,
    size: m.Z.Sizes.SMALLER,
    className: A.guildBreadcrumbIcon,
    active: !0
  }),
  (0, i.jsx)(N.Z.Title, {
    onClick: () => {
      (0, _.XU)(t.id, n.id);
    },
    className: l()(A.parentChannelName, A.cursorPointer),
    children: t.name
  }),
  'right' === a && (0, i.jsx)(N.Z.Caret, {
    direction: 'right'
  })
]
  });
}