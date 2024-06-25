n.d(t, {
  GB: function() {
    return C
  },
  JI: function() {
    return O
  },
  UM: function() {
    return R
  },
  V6: function() {
    return D
  },
  WT: function() {
    return A
  },
  X7: function() {
    return Z
  },
  jq: function() {
    return P
  },
  mx: function() {
    return N
  }
}), n(411104);
var s = n(735250),
  i = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(481060),
  o = n(388905),
  c = n(366695),
  u = n(940627),
  d = n(154921),
  _ = n(768581),
  E = n(51144),
  I = n(245335),
  h = n(981631),
  p = n(888592),
  g = n(689938),
  f = n(150092);
let N = 100,
  m = e => {
    var t, n;
    let s = {
      onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
      memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
    };
    return 0 === s.memberCount && 0 === s.memberCount ? null : s
  },
  T = e => e.target_type === I.Iq.STREAM && null != e.target_user,
  A = e => {
    var t;
    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === h.d4z.GROUP_DM
  },
  Z = e => null == e.channel && null == e.guild && null != e.inviter,
  x = e => {
    var t;
    let n = m(e);
    return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > N
  },
  S = e => e.state === h.r2o.ACCEPTED,
  O = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t || !1
  },
  v = e => !O(e) && (!!Z(e) || null != e.inviter && !S(e) && !x(e)),
  C = e => {
    let {
      guild: t,
      user: n,
      application: i
    } = e;
    if (null != i) return (0, s.jsx)(c.Z, {
      className: f.appIcon,
      game: i,
      size: f.appIconSize
    });
    if (null != n) return (0, s.jsx)(o.qE, {
      src: n.getAvatarURL(void 0, 100),
      size: l.AvatarSizes.DEPRECATED_SIZE_100,
      className: f.avatar
    });
    if (null != t) return (0, s.jsx)(o.Vj, {
      guild: t,
      size: o.Vj.Sizes.LARGER,
      className: f.guildIcon,
      animate: !0
    });
    else return null
  };

function D(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: r
  } = e, l = m(n);
  return null == l || v(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ ? null : (0, s.jsx)(o.EJ, {
    className: a()(f.activityCount, r),
    online: l.onlineCount,
    total: l.memberCount,
    textClassName: i,
    flat: !0
  })
}

function P(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, r = i.useMemo(() => n ? null : T(t) && null != t.target_user ? _.ZP.getUserAvatarURL(t.target_user) : v(t) && null != t.inviter ? _.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), a = g.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
  if (A(t)) {
    var c, u;
    a = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? g.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
      username: t.inviter.username
    }) : g.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
  } else T(t) && null != t.target_user ? a = g.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: t.target_user.username
  }) : S(t) ? a = g.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : v(t) && null != t.inviter && (a = g.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
    username: E.ZP.getFormattedName(t.inviter)
  }));
  return (0, s.jsxs)("div", {
    className: f.inviteJoinContainer,
    children: [null != r && (0, s.jsx)("div", {
      className: f.inviterIconWrapper,
      children: (0, s.jsx)(o.qE, {
        src: r,
        size: l.AvatarSizes.SIZE_24
      })
    }), (0, s.jsx)(o.DK, {
      className: f.__invalid_inviteJoinSubTitle,
      children: a
    })]
  })
}

function R(e) {
  let t, n, i, {
    user: r,
    guild: a,
    channel: c,
    application: _,
    showBigUserIcon: I
  } = e;
  if (null != a) I && null == _ && (t = (0, s.jsx)(o.Vj, {
    guild: a,
    size: o.Vj.Sizes.SMALL
  })), n = a.name, null != _ && (n = _.name, i = (0, s.jsxs)("div", {
    className: f.inviteJoinContainer,
    children: [(0, s.jsx)(o.DK, {
      className: f.appIn,
      children: g.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: f.guildContainer,
      children: [(0, s.jsx)(o.Vj, {
        guild: a,
        size: o.Vj.Sizes.SMALL
      }), (0, s.jsx)(d.Z, {
        className: f.appGuildName,
        color: d.Z.Colors.CUSTOM,
        tag: "span",
        size: d.Z.Sizes.SIZE_24,
        children: a.name
      })]
    })]
  }));
  else if (null != c) {
    if (null == r) throw Error("no inviter in group DM invite");
    let e = E.ZP.getFormattedName(r);
    null != c.name && "" !== c.name ? (n = c.name, null != c.icon && (t = (0, s.jsx)(o.MC, {
      channel: c,
      size: l.AvatarSizes.SIZE_32
    }))) : n = e
  } else if (null != r) {
    let e = E.ZP.getFormattedName(r);
    n = g.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), i = (0, s.jsx)(o.DK, {
      className: f.directInviteSubTitle,
      children: g.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.Dx, {
      className: f.title,
      children: [null != a ? (0, s.jsx)(u.Z, {
        guild: a,
        className: f.guildBadge,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}