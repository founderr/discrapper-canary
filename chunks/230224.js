n.d(t, {
  GB: function() {
    return D
  },
  JI: function() {
    return S
  },
  UM: function() {
    return R
  },
  V6: function() {
    return P
  },
  WT: function() {
    return A
  },
  X7: function() {
    return f
  },
  jq: function() {
    return C
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
  I = n(245335),
  h = n(981631),
  N = n(888592),
  p = n(689938),
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
  Z = e => e.target_type === I.Iq.STREAM && null != e.target_user,
  A = e => {
    var t;
    return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === h.d4z.GROUP_DM
  },
  f = e => null == e.channel && null == e.guild && null != e.inviter,
  x = e => {
    var t;
    let n = T(e);
    return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > m
  },
  O = e => e.state === h.r2o.ACCEPTED,
  S = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t || !1
  },
  v = e => !S(e) && (!!f(e) || null != e.inviter && !O(e) && !x(e)),
  D = e => {
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

function P(e) {
  var t;
  let {
    invite: n,
    textClassName: r,
    className: i
  } = e, a = T(n);
  return null == a || v(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === N.fQ ? null : (0, s.jsx)(o.EJ, {
    className: l()(g.activityCount, i),
    online: a.onlineCount,
    total: a.memberCount,
    textClassName: r,
    flat: !0
  })
}

function C(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, i = r.useMemo(() => n ? null : Z(t) && null != t.target_user ? E.ZP.getUserAvatarURL(t.target_user) : v(t) && null != t.inviter ? E.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), l = p.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
  if (A(t)) {
    var c, u;
    l = (null === (c = t.channel) || void 0 === c ? void 0 : c.name) != null && (null === (u = t.inviter) || void 0 === u ? void 0 : u.username) != null ? p.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
      username: t.inviter.username
    }) : p.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
  } else Z(t) && null != t.target_user ? l = p.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: t.target_user.username
  }) : O(t) ? l = p.Z.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : v(t) && null != t.inviter && (l = p.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
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
    showBigUserIcon: I
  } = e;
  if (null != l) I && null == E && (t = (0, s.jsx)(o.Vj, {
    guild: l,
    size: o.Vj.Sizes.SMALL
  })), n = l.name, null != E && (n = E.name, r = (0, s.jsxs)("div", {
    className: g.inviteJoinContainer,
    children: [(0, s.jsx)(o.DK, {
      className: g.appIn,
      children: p.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
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
    n = p.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), r = (0, s.jsx)(o.DK, {
      className: g.directInviteSubTitle,
      children: p.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
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