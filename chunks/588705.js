"use strict";
n.r(t), n.d(t, {
  InviteResolvingHeader: function() {
    return N
  }
}), n("411104");
var s = n("735250"),
  a = n("470079"),
  i = n("442837"),
  r = n("481060"),
  l = n("726745"),
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
  S = n("245335"),
  I = n("689938"),
  A = n("493918");
let N = () => (0, s.jsxs)(a.Fragment, {
    children: [(0, s.jsx)(g.Avatar, {
      src: null,
      size: r.AvatarSizes.DEPRECATED_SIZE_100,
      className: A.avatar
    }), (0, s.jsx)(g.SubTitle, {
      children: I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, s.jsx)(g.Title, {
      className: A.inviteResolvingGuildName,
      children: I.default.Messages.LOADING
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
      size: r.AvatarSizes.SIZE_80,
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
    } = (0, i.useStateFromStoresObject)([l.default, f.default], () => ({
      currentUser: f.default.getCurrentUser(),
      multiAccounts: l.default.getUsers()
    }));
  if (null == m) return null;
  let M = null != m.guild ? new d.default(m.guild) : null,
    b = null != m.channel ? (0, u.createChannelRecordFromInvite)(m.channel) : null,
    y = null != m.target_application ? new o.default(m.target_application) : null,
    D = N || null == m.inviter ? null : new c.default(m.inviter),
    U = !(null != m.approximate_member_count && m.approximate_member_count > 100 || null != M && M.hasFeature(p.GuildFeatures.COMMUNITY)) && null != D,
    P = null,
    G = !1;
  if (null != M) P = null == D ? I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: _.default.getFormattedName(D)
  }), m.target_type === S.InviteTargetTypes.STREAM && null != m.target_user && (P = I.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: _.default.getFormattedName(m.target_user)
  })), m.target_type === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != m.target_application && (P = null != D ? I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: _.default.getFormattedName(D)
  }) : I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), U && null == y && (n = (0, s.jsx)(g.GuildIcon, {
    className: A.icon,
    guild: M,
    size: g.GuildIcon.Sizes.SMALL
  })), a = M.name, null != y && (a = y.name, h = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(g.SubTitle, {
      className: A.appIn,
      children: I.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: A.guildContainer,
      children: [(0, s.jsx)(g.GuildIcon, {
        guild: M,
        size: g.GuildIcon.Sizes.SMALL
      }), (0, s.jsx)(r.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: A.appGuildName,
        children: M.name
      })]
    })]
  }));
  else if (null != b) {
    if (null == D) throw Error("no inviter in group DM invite");
    let e = _.default.getFormattedName(D);
    null != b.name && "" !== b.name ? (P = I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), a = b.name, null != b.icon && (n = (0, s.jsx)(g.ChannelIcon, {
      channel: b,
      size: r.AvatarSizes.SIZE_32
    }))) : (P = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
  } else if (null != D) {
    let e = _.default.getFormattedName(D, !0);
    a = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), G = !0, h = null != C ? null : (0, s.jsx)(g.SubTitle, {
      className: A.directInviteSubTitle,
      children: v ? I.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : I.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsx)(R, {
      application: y,
      guild: M,
      user: U ? D : null,
      compact: G
    }), null != C ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.SubTitle, {
        children: I.default.Messages.INVITE_MODAL_ERROR_TITLE
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