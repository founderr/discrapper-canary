"use strict";
n.r(t), n.d(t, {
  InviteResolvingHeader: function() {
    return N
  }
}), n("411104");
var s = n("735250"),
  a = n("470079"),
  i = n("442837"),
  l = n("481060"),
  r = n("726745"),
  o = n("973616"),
  u = n("131704"),
  d = n("601964"),
  c = n("598077"),
  f = n("594174"),
  h = n("366695"),
  E = n("940627"),
  g = n("819570"),
  m = n("806519"),
  _ = n("51144"),
  p = n("981631"),
  T = n("888592"),
  I = n("245335"),
  S = n("689938"),
  A = n("493918");
let N = () => (0, s.jsxs)(a.Fragment, {
    children: [(0, s.jsx)(g.Avatar, {
      src: null,
      size: l.AvatarSizes.DEPRECATED_SIZE_100,
      className: A.avatar
    }), (0, s.jsx)(g.SubTitle, {
      children: S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, s.jsx)(g.Title, {
      className: A.inviteResolvingGuildName,
      children: S.default.Messages.LOADING
    })]
  }),
  R = e => {
    let {
      guild: t,
      user: n,
      application: a,
      compact: i
    } = e;
    if (null != a) return (0, s.jsx)(h.default, {
      className: A.appIcon,
      game: a,
      size: A.appIconSize
    });
    if (null != n) return (0, s.jsx)(g.Avatar, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: l.AvatarSizes.SIZE_80,
      className: i ? A.compactAvatar : A.avatar
    });
    if (null != t) return (0, s.jsx)(m.default, {
      mask: m.default.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: A.guildIcon,
      children: (0, s.jsx)(g.GuildIcon, {
        guild: t,
        size: g.GuildIcon.Sizes.LARGER,
        animate: !0
      })
    });
    else return null
  };
t.default = e => {
  var t;
  let n, a, h, {
      invite: m,
      disableUser: N = !1,
      error: C,
      flatActivityCount: O = !1,
      isRegister: v = !1
    } = e,
    {
      currentUser: L,
      multiAccounts: x
    } = (0, i.useStateFromStoresObject)([r.default, f.default], () => ({
      currentUser: f.default.getCurrentUser(),
      multiAccounts: r.default.getUsers()
    }));
  if (null == m) return null;
  let M = null != m.guild ? new d.default(m.guild) : null,
    b = null != m.channel ? (0, u.createChannelRecordFromInvite)(m.channel) : null,
    y = null != m.target_application ? new o.default(m.target_application) : null,
    U = N || null == m.inviter ? null : new c.default(m.inviter),
    D = !(null != m.approximate_member_count && m.approximate_member_count > 100 || null != M && M.hasFeature(p.GuildFeatures.COMMUNITY)) && null != U,
    P = null,
    G = !1;
  if (null != M) P = null == U ? S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: _.default.getFormattedName(U)
  }), m.target_type === I.InviteTargetTypes.STREAM && null != m.target_user && (P = S.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: _.default.getFormattedName(m.target_user)
  })), m.target_type === I.InviteTargetTypes.EMBEDDED_APPLICATION && null != m.target_application && (P = null != U ? S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: _.default.getFormattedName(U)
  }) : S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), D && null == y && (n = (0, s.jsx)(g.GuildIcon, {
    className: A.icon,
    guild: M,
    size: g.GuildIcon.Sizes.SMALL
  })), a = M.name, null != y && (a = y.name, h = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(g.SubTitle, {
      className: A.appIn,
      children: S.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: A.guildContainer,
      children: [(0, s.jsx)(g.GuildIcon, {
        guild: M,
        size: g.GuildIcon.Sizes.SMALL
      }), (0, s.jsx)(l.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: A.appGuildName,
        children: M.name
      })]
    })]
  }));
  else if (null != b) {
    if (null == U) throw Error("no inviter in group DM invite");
    let e = _.default.getFormattedName(U);
    null != b.name && "" !== b.name ? (P = S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), a = b.name, null != b.icon && (n = (0, s.jsx)(g.ChannelIcon, {
      channel: b,
      size: l.AvatarSizes.SIZE_32
    }))) : (P = S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
  } else if (null != U) {
    let e = _.default.getFormattedName(U, !0);
    a = S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), G = !0, h = null != C ? null : (0, s.jsx)(g.SubTitle, {
      className: A.directInviteSubTitle,
      children: v ? S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsx)(R, {
      application: y,
      guild: M,
      user: D ? U : null,
      compact: G
    }), null != C ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.SubTitle, {
        children: S.default.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(g.Title, {
        children: C
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.SubTitle, {
        children: P
      }), (0, s.jsxs)(g.Title, {
        className: A.title,
        children: [null != M ? (0, s.jsx)(E.default, {
          guild: M,
          className: A.guildBadge,
          tooltipPosition: "left"
        }) : null, n, a]
      })]
    }), h, null != y || G || (null == m ? void 0 : null === (t = m.guild) || void 0 === t ? void 0 : t.id) === T.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(g.ActivityCount, {
      className: A.activityCount,
      online: m.approximate_presence_count,
      total: m.approximate_member_count,
      flat: O
    }), x.length > 1 ? (0, s.jsx)(g.JoiningAs, {
      user: L
    }) : null]
  })
}