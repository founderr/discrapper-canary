"use strict";
n.r(t), n.d(t, {
  InviteResolvingHeader: function() {
    return T
  }
}), n("411104");
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("726745"),
  o = n("973616"),
  u = n("131704"),
  d = n("601964"),
  c = n("598077"),
  f = n("594174"),
  h = n("366695"),
  p = n("940627"),
  m = n("819570"),
  C = n("806519"),
  g = n("51144"),
  E = n("981631"),
  _ = n("888592"),
  S = n("245335"),
  I = n("689938"),
  N = n("754613");
let T = () => (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)(m.Avatar, {
      src: null,
      size: i.AvatarSizes.DEPRECATED_SIZE_100,
      className: N.avatar
    }), (0, l.jsx)(m.SubTitle, {
      children: I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, l.jsx)(m.Title, {
      className: N.inviteResolvingGuildName,
      children: I.default.Messages.LOADING
    })]
  }),
  A = e => {
    let {
      guild: t,
      user: n,
      application: a,
      compact: s
    } = e;
    if (null != a) return (0, l.jsx)(h.default, {
      className: N.appIcon,
      game: a,
      size: N.appIconSize
    });
    if (null != n) return (0, l.jsx)(m.Avatar, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: i.AvatarSizes.SIZE_80,
      className: s ? N.compactAvatar : N.avatar
    });
    if (null != t) return (0, l.jsx)(C.default, {
      mask: C.default.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: N.guildIcon,
      children: (0, l.jsx)(m.GuildIcon, {
        guild: t,
        size: m.GuildIcon.Sizes.LARGER,
        animate: !0
      })
    });
    else return null
  };
t.default = e => {
  var t;
  let n, a, h, {
      invite: C,
      disableUser: T = !1,
      error: L,
      flatActivityCount: v = !1,
      isRegister: x = !1
    } = e,
    {
      currentUser: R,
      multiAccounts: M
    } = (0, s.useStateFromStoresObject)([r.default, f.default], () => ({
      currentUser: f.default.getCurrentUser(),
      multiAccounts: r.default.getUsers()
    }));
  if (null == C) return null;
  let y = null != C.guild ? new d.default(C.guild) : null,
    O = null != C.channel ? (0, u.createChannelRecordFromInvite)(C.channel) : null,
    D = null != C.target_application ? new o.default(C.target_application) : null,
    b = T || null == C.inviter ? null : new c.default(C.inviter),
    j = !(null != C.approximate_member_count && C.approximate_member_count > 100 || null != y && y.hasFeature(E.GuildFeatures.COMMUNITY)) && null != b,
    P = null,
    G = !1;
  if (null != y) P = null == b ? I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: g.default.getFormattedName(b)
  }), C.target_type === S.InviteTargetTypes.STREAM && null != C.target_user && (P = I.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: g.default.getFormattedName(C.target_user)
  })), C.target_type === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != C.target_application && (P = null != b ? I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: g.default.getFormattedName(b)
  }) : I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), j && null == D && (n = (0, l.jsx)(m.GuildIcon, {
    className: N.icon,
    guild: y,
    size: m.GuildIcon.Sizes.SMALL
  })), a = y.name, null != D && (a = D.name, h = (0, l.jsxs)("div", {
    children: [(0, l.jsx)(m.SubTitle, {
      className: N.appIn,
      children: I.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, l.jsxs)("div", {
      className: N.guildContainer,
      children: [(0, l.jsx)(m.GuildIcon, {
        guild: y,
        size: m.GuildIcon.Sizes.SMALL
      }), (0, l.jsx)(i.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: N.appGuildName,
        children: y.name
      })]
    })]
  }));
  else if (null != O) {
    if (null == b) throw Error("no inviter in group DM invite");
    let e = g.default.getFormattedName(b);
    null != O.name && "" !== O.name ? (P = I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), a = O.name, null != O.icon && (n = (0, l.jsx)(m.ChannelIcon, {
      channel: O,
      size: i.AvatarSizes.SIZE_32
    }))) : (P = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
  } else if (null != b) {
    let e = g.default.getFormattedName(b, !0);
    a = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), G = !0, h = null != L ? null : (0, l.jsx)(m.SubTitle, {
      className: N.directInviteSubTitle,
      children: x ? I.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : I.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: N.container,
    children: [(0, l.jsx)(A, {
      application: D,
      guild: y,
      user: j ? b : null,
      compact: G
    }), null != L ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(m.SubTitle, {
        children: I.default.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, l.jsx)(m.Title, {
        children: L
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(m.SubTitle, {
        children: P
      }), (0, l.jsxs)(m.Title, {
        className: N.title,
        children: [null != y ? (0, l.jsx)(p.default, {
          guild: y,
          className: N.guildBadge,
          tooltipPosition: "left"
        }) : null, n, a]
      })]
    }), h, null != D || G || (null == C ? void 0 : null === (t = C.guild) || void 0 === t ? void 0 : t.id) === _.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(m.ActivityCount, {
      className: N.activityCount,
      online: C.approximate_presence_count,
      total: C.approximate_member_count,
      flat: v
    }), M.length > 1 ? (0, l.jsx)(m.JoiningAs, {
      user: R
    }) : null]
  })
}