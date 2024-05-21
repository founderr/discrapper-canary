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
  m = n("940627"),
  C = n("819570"),
  p = n("806519"),
  g = n("51144"),
  E = n("981631"),
  _ = n("888592"),
  S = n("245335"),
  I = n("689938"),
  N = n("493918");
let T = () => (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)(C.Avatar, {
      src: null,
      size: i.AvatarSizes.DEPRECATED_SIZE_100,
      className: N.avatar
    }), (0, l.jsx)(C.SubTitle, {
      children: I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, l.jsx)(C.Title, {
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
    if (null != n) return (0, l.jsx)(C.Avatar, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: i.AvatarSizes.SIZE_80,
      className: s ? N.compactAvatar : N.avatar
    });
    if (null != t) return (0, l.jsx)(p.default, {
      mask: p.default.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: N.guildIcon,
      children: (0, l.jsx)(C.GuildIcon, {
        guild: t,
        size: C.GuildIcon.Sizes.LARGER,
        animate: !0
      })
    });
    else return null
  };
t.default = e => {
  var t;
  let n, a, h, {
      invite: p,
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
  if (null == p) return null;
  let O = null != p.guild ? new d.default(p.guild) : null,
    y = null != p.channel ? (0, u.createChannelRecordFromInvite)(p.channel) : null,
    D = null != p.target_application ? new o.default(p.target_application) : null,
    b = T || null == p.inviter ? null : new c.default(p.inviter),
    j = !(null != p.approximate_member_count && p.approximate_member_count > 100 || null != O && O.hasFeature(E.GuildFeatures.COMMUNITY)) && null != b,
    P = null,
    G = !1;
  if (null != O) P = null == b ? I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: g.default.getFormattedName(b)
  }), p.target_type === S.InviteTargetTypes.STREAM && null != p.target_user && (P = I.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: g.default.getFormattedName(p.target_user)
  })), p.target_type === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != p.target_application && (P = null != b ? I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: g.default.getFormattedName(b)
  }) : I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), j && null == D && (n = (0, l.jsx)(C.GuildIcon, {
    className: N.icon,
    guild: O,
    size: C.GuildIcon.Sizes.SMALL
  })), a = O.name, null != D && (a = D.name, h = (0, l.jsxs)("div", {
    children: [(0, l.jsx)(C.SubTitle, {
      className: N.appIn,
      children: I.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, l.jsxs)("div", {
      className: N.guildContainer,
      children: [(0, l.jsx)(C.GuildIcon, {
        guild: O,
        size: C.GuildIcon.Sizes.SMALL
      }), (0, l.jsx)(i.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: N.appGuildName,
        children: O.name
      })]
    })]
  }));
  else if (null != y) {
    if (null == b) throw Error("no inviter in group DM invite");
    let e = g.default.getFormattedName(b);
    null != y.name && "" !== y.name ? (P = I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), a = y.name, null != y.icon && (n = (0, l.jsx)(C.ChannelIcon, {
      channel: y,
      size: i.AvatarSizes.SIZE_32
    }))) : (P = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
  } else if (null != b) {
    let e = g.default.getFormattedName(b, !0);
    a = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), G = !0, h = null != L ? null : (0, l.jsx)(C.SubTitle, {
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
      guild: O,
      user: j ? b : null,
      compact: G
    }), null != L ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(C.SubTitle, {
        children: I.default.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, l.jsx)(C.Title, {
        children: L
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(C.SubTitle, {
        children: P
      }), (0, l.jsxs)(C.Title, {
        className: N.title,
        children: [null != O ? (0, l.jsx)(m.default, {
          guild: O,
          className: N.guildBadge,
          tooltipPosition: "left"
        }) : null, n, a]
      })]
    }), h, null != D || G || (null == p ? void 0 : null === (t = p.guild) || void 0 === t ? void 0 : t.id) === _.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(C.ActivityCount, {
      className: N.activityCount,
      online: p.approximate_presence_count,
      total: p.approximate_member_count,
      flat: v
    }), M.length > 1 ? (0, l.jsx)(C.JoiningAs, {
      user: R
    }) : null]
  })
}