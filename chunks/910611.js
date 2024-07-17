n.d(t, {
  TS: function() {
return R;
  },
  ud: function() {
return Z;
  },
  v0: function() {
return M;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(385499),
  d = n(933557),
  u = n(471445),
  h = n(266076),
  p = n(565138),
  m = n(703656),
  _ = n(699516),
  f = n(914010),
  E = n(594174),
  C = n(946734),
  g = n(99843),
  I = n(372564),
  x = n(984370),
  T = n(217314),
  v = n(981631),
  N = n(689938),
  S = n(489919);

function Z(e) {
  let {
channel: t,
channelName: n,
parentChannel: s,
guild: r,
inSidebar: c = !1,
handleClick: p,
handleContextMenu: m,
handleParentClick: f,
handleParentContextMenu: C,
renderFollowButton: I
  } = e, Z = (0, u.KS)(t, r), {
prefix: A,
level: M
  } = function(e, t) {
var n, i;
switch (e) {
  case v.d4z.DM:
    return {
      prefix: N.Z.Messages.DIRECT_MESSAGE,
        level: 1
    };
  case v.d4z.GROUP_DM:
    return {
      prefix: N.Z.Messages.GROUP_DM,
        level: 1
    };
  case v.d4z.GUILD_DIRECTORY:
    return {
      prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
        level: 1
    };
  case v.d4z.GUILD_ANNOUNCEMENT:
  case v.d4z.GUILD_TEXT:
  case v.d4z.GUILD_FORUM:
  case v.d4z.GUILD_MEDIA:
  case v.d4z.GUILD_STAGE_VOICE:
  case v.d4z.GUILD_VOICE:
    return {
      prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
        level: 1
    };
  case v.d4z.ANNOUNCEMENT_THREAD:
  case v.d4z.PUBLIC_THREAD:
  case v.d4z.PRIVATE_THREAD:
    return {
      prefix: N.Z.Messages.THREAD,
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
  null != A ? (0, i.jsxs)(o.HiddenVisually, {
    children: [
      A,
      ':'
    ]
  }) : null,
  ' ',
  n
]
  });
  switch (t.type) {
case v.d4z.DM:
  return (0, i.jsx)(T.Z, {
    level: M,
    channel: t,
    handleClick: p,
    handleContextMenu: m
  });
case v.d4z.GROUP_DM:
  if (t.isManaged())
    return R;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      (0, i.jsx)(o.HiddenVisually, {
        children: N.Z.Messages.GROUP_DM
      }),
      (0, i.jsx)('div', {
        children: (0, i.jsx)(h.Z, {
          'aria-hidden': !0,
          channel: t,
          size: o.AvatarSizes.SIZE_24,
          facepileSizeOverride: o.AvatarSizes.SIZE_32,
          experimentLocation: 'header_bar',
          className: S.avatar
        })
      }),
      (0, i.jsx)(g.Z, {
        channel: t
      }, 'channel-'.concat(t.id))
    ]
  });
case v.d4z.GUILD_ANNOUNCEMENT:
case v.d4z.GUILD_TEXT:
case v.d4z.GUILD_FORUM:
case v.d4z.GUILD_MEDIA:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      b(Z, t.type === v.d4z.GUILD_ANNOUNCEMENT ? N.Z.Messages.NEWS_CHANNEL : N.Z.Messages.TEXT_CHANNEL),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: R
      }),
      null != I ? I() : null
    ]
  });
case v.d4z.GUILD_VOICE:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      b(Z, N.Z.Messages.VOICE_CHANNEL),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: R
      })
    ]
  });
case v.d4z.GUILD_STAGE_VOICE:
  return (0, i.jsxs)(a.Fragment, {
    children: [
      b(Z, N.Z.Messages.STAGE_CHANNEL),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: R
      })
    ]
  });
case v.d4z.ANNOUNCEMENT_THREAD:
case v.d4z.PUBLIC_THREAD:
case v.d4z.PRIVATE_THREAD:
  let j = null;
  if (!c && null != s) {
    let e = (0, u.KS)(s, r);
    j = (0, i.jsxs)(a.Fragment, {
      children: [
        b(e, N.Z.Messages.TEXT_CHANNEL),
        (0, i.jsx)(x.Z.Title, {
          level: M,
          onContextMenu: C,
          onClick: f,
          className: l()(S.parentChannelName, S.cursorPointer),
          children: (0, d.F6)(s, E.default, _.Z)
        }),
        (0, i.jsx)(x.Z.Caret, {})
      ]
    });
  }
  let L = (null == s ? void 0 : s.type) != null && v.TPd.GUILD_THREADS_ONLY.has(s.type);
  return (0, i.jsxs)(a.Fragment, {
    children: [
      j,
      b(L ? null : Z, N.Z.Messages.THREAD),
      (0, i.jsx)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        className: l()({
          [S.cursorPointer]: c,
          [S.forumPostTitle]: L
        }),
        children: R
      })
    ]
  });
case v.d4z.GUILD_DIRECTORY:
  let P = (null == r ? void 0 : r.hasFeature(v.oNc.HUB)) ? N.Z.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({
    guildName: n
  }) : n;
  return (0, i.jsxs)(a.Fragment, {
    children: [
      null !== Z ? (0, i.jsx)(x.Z.Icon, {
        iconClassName: S.__invalid_icon,
        icon: Z,
        'aria-hidden': !0
      }) : null,
      (0, i.jsxs)(x.Z.Title, {
        level: M,
        onContextMenu: m,
        onClick: p,
        children: [
          null != A ? (0, i.jsxs)(o.HiddenVisually, {
            children: [
              A,
              ':'
            ]
          }) : null,
          ' ',
          P
        ]
      })
    ]
  });
default:
  return null;
  }
}
let A = e => {
  let {
channel: t
  } = e, n = (0, r.e7)([E.default], () => E.default.getCurrentUser()), a = (0, r.e7)([E.default], () => E.default.getUser(t.getRecipientId()));
  return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == a ? void 0 : a.isStaff()) ? (0, i.jsx)(c.Z, {
type: c.Z.Types.STAFF_ONLY_DM
  }) : null;
};

function M(e, t) {
  switch (e.type) {
case v.d4z.DM:
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(A, {
        channel: e
      }),
      (0, i.jsx)(C.Z, {
        channel: e
      }, e.id)
    ]
  });
case v.d4z.GUILD_ANNOUNCEMENT:
case v.d4z.GUILD_TEXT:
case v.d4z.GUILD_VOICE:
case v.d4z.GUILD_STAGE_VOICE:
case v.d4z.GROUP_DM:
  return null != t ? (0, i.jsx)(I.Z, {
    channel: e,
    guild: t
  }, e.id) : null;
default:
  return null;
  }
}

function b(e, t) {
  return (0, i.jsxs)(i.Fragment, {
children: [
  null !== e && (0, i.jsx)(x.Z.Icon, {
    iconClassName: S.__invalid_icon,
    icon: e,
    'aria-hidden': !0
  }),
  (0, i.jsx)(o.HiddenVisually, {
    children: t
  })
]
  });
}

function R(e) {
  let {
guild: t,
channel: n,
caretPosition: a = 'left'
  } = e;
  return (0, r.e7)([f.Z], () => f.Z.getGuildId()) !== v.I_8 || null == t ? null : (0, i.jsxs)('div', {
className: S.guildBreadcrumbContainer,
children: [
  'left' === a && (0, i.jsx)(x.Z.Caret, {
    direction: 'left'
  }),
  (0, i.jsx)(p.Z, {
    guild: t,
    size: p.Z.Sizes.SMALLER,
    className: S.guildBreadcrumbIcon,
    active: !0
  }),
  (0, i.jsx)(x.Z.Title, {
    onClick: () => {
      (0, m.XU)(t.id, n.id);
    },
    className: l()(S.parentChannelName, S.cursorPointer),
    children: t.name
  }),
  'right' === a && (0, i.jsx)(x.Z.Caret, {
    direction: 'right'
  })
]
  });
}