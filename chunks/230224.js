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
    return Z
  },
  X7: function() {
    return A
  },
  jq: function() {
    return P
  },
  mx: function() {
    return m
  }
}), n(411104);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  l = n.n(i),
  a = n(481060),
  o = n(388905),
  c = n(366695),
  u = n(940627),
  d = n(154921),
  E = n(768581),
  _ = n(51144),
  h = n(245335),
  I = n(981631),
  p = n(888592),
  N = n(689938),
  g = n(150092);
let m = 100,
  T = e => {
    var t, n;
    let s = {
      onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
      memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
    };
    return 0 === s.memberCount && 0 === s.memberCount ? null : s
  },
  f = e => e.target_type === h.Iq.STREAM && null != e.target_user,
  Z = e => {
    var t;
    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === I.d4z.GROUP_DM
  },
  A = e => null == e.channel && null == e.guild && null != e.inviter,
  x = e => {
    var t;
    let n = T(e);
    return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > m
  },
  v = e => e.state === I.r2o.ACCEPTED,
  O = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t || !1
  },
  S = e => !O(e) && (!!A(e) || null != e.inviter && !v(e) && !x(e)),
  C = e => {
    let {
      guild: t,
      user: n,
      application: r
    } = e;
    if (null != r) return (0, s.jsx)(c.Z, {
      className: g.appIcon,
      game: r,
      size: g.appIconSize
    });
    if (null != n) return (0, s.jsx)(o.qE, {
      src: n.getAvatarURL(void 0, 100),
      size: a.AvatarSizes.DEPRECATED_SIZE_100,
      className: g.avatar
    });
    if (null != t) return (0, s.jsx)(o.Vj, {
      guild: t,
      size: o.Vj.Sizes.LARGER,
      className: g.guildIcon,
      animate: !0
    });
    else return null
  };

function D(e) {
  var t;
  let {
    invite: n,
    textClassName: r,
    className: i
  } = e, a = T(n);
  return null == a || S(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.fQ ? null : (0, s.jsx)(o.EJ, {
    className: l()(g.activityCount, i),
    online: a.onlineCount,
    total: a.memberCount,
    textClassName: r,
    flat: !0
  })
}

function P(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, i = r.useMemo(() => n ? null : f(t) && null != t.target_user ? E.ZP.getUserAvatarURL(t.target_user) : S(t) && null != t.inviter ? E.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), l = N.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
  if (Z(t)) {
    var c, u;
    l = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? N.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
      username: t.inviter.username
    }) : N.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
  } else f(t) && null != t.target_user ? l = N.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: t.target_user.username
  }) : v(t) ? l = N.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : S(t) && null != t.inviter && (l = N.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
    username: _.ZP.getFormattedName(t.inviter)
  }));
  return (0, s.jsxs)("div", {
    className: g.inviteJoinContainer,
    children: [null != i && (0, s.jsx)("div", {
      className: g.inviterIconWrapper,
      children: (0, s.jsx)(o.qE, {
        src: i,
        size: a.AvatarSizes.SIZE_24
      })
    }), (0, s.jsx)(o.DK, {
      className: g.__invalid_inviteJoinSubTitle,
      children: l
    })]
  })
}

function R(e) {
  let t, n, r, {
    user: i,
    guild: l,
    channel: c,
    application: E,
    showBigUserIcon: h
  } = e;
  if (null != l) h && null == E && (t = (0, s.jsx)(o.Vj, {
    guild: l,
    size: o.Vj.Sizes.SMALL
  })), n = l.name, null != E && (n = E.name, r = (0, s.jsxs)("div", {
    className: g.inviteJoinContainer,
    children: [(0, s.jsx)(o.DK, {
      className: g.appIn,
      children: N.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: g.guildContainer,
      children: [(0, s.jsx)(o.Vj, {
        guild: l,
        size: o.Vj.Sizes.SMALL
      }), (0, s.jsx)(d.Z, {
        className: g.appGuildName,
        color: d.Z.Colors.CUSTOM,
        tag: "span",
        size: d.Z.Sizes.SIZE_24,
        children: l.name
      })]
    })]
  }));
  else if (null != c) {
    if (null == i) throw Error("no inviter in group DM invite");
    let e = _.ZP.getFormattedName(i);
    null != c.name && "" !== c.name ? (n = c.name, null != c.icon && (t = (0, s.jsx)(o.MC, {
      channel: c,
      size: a.AvatarSizes.SIZE_32
    }))) : n = e
  } else if (null != i) {
    let e = _.ZP.getFormattedName(i);
    n = N.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), r = (0, s.jsx)(o.DK, {
      className: g.directInviteSubTitle,
      children: N.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.Dx, {
      className: g.title,
      children: [null != l ? (0, s.jsx)(u.Z, {
        guild: l,
        className: g.guildBadge,
        tooltipPosition: "left"
      }) : null, t, n]
    }), r]
  })
}