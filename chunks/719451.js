"use strict";
n.r(t), n.d(t, {
  InviteResolvingHeader: function() {
    return S
  },
  default: function() {
    return C
  }
}), n("70102");
var s = n("37983"),
  a = n("884691"),
  r = n("446674"),
  i = n("77078"),
  l = n("770032"),
  o = n("653047"),
  u = n("233069"),
  d = n("813006"),
  c = n("766274"),
  f = n("697218"),
  E = n("953109"),
  h = n("580357"),
  g = n("124969"),
  _ = n("587974"),
  m = n("158998"),
  p = n("49111"),
  T = n("238055"),
  I = n("91366"),
  N = n("782340"),
  A = n("985551");
let S = () => (0, s.jsxs)(a.Fragment, {
    children: [(0, s.jsx)(g.Avatar, {
      src: null,
      size: i.AvatarSizes.DEPRECATED_SIZE_100,
      className: A.avatar
    }), (0, s.jsx)(g.SubTitle, {
      children: N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, s.jsx)(g.Title, {
      className: A.inviteResolvingGuildName,
      children: N.default.Messages.LOADING
    })]
  }),
  R = e => {
    let {
      guild: t,
      user: n,
      application: a,
      compact: r
    } = e;
    if (null != a) return (0, s.jsx)(E.default, {
      className: A.appIcon,
      game: a,
      size: A.appIconSize
    });
    if (null != n) return (0, s.jsx)(g.Avatar, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: i.AvatarSizes.SIZE_80,
      className: r ? A.compactAvatar : A.avatar
    });
    if (null != t) return (0, s.jsx)(_.default, {
      mask: _.default.Masks.SQUIRCLE,
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
var C = e => {
  var t;
  let n, a, E, {
      invite: _,
      disableUser: S = !1,
      error: C,
      flatActivityCount: O = !1,
      isRegister: v = !1
    } = e,
    {
      currentUser: L,
      multiAccounts: M
    } = (0, r.useStateFromStoresObject)([l.default, f.default], () => ({
      currentUser: f.default.getCurrentUser(),
      multiAccounts: l.default.getUsers()
    }));
  if (null == _) return null;
  let x = null != _.guild ? new d.default(_.guild) : null,
    y = null != _.channel ? (0, u.createChannelRecordFromInvite)(_.channel) : null,
    b = null != _.target_application ? new o.default(_.target_application) : null,
    D = S || null == _.inviter ? null : new c.default(_.inviter),
    U = null != _.approximate_member_count && _.approximate_member_count > 100 || null != x && x.hasFeature(p.GuildFeatures.COMMUNITY),
    P = !U && null != D,
    G = null,
    F = !1;
  if (null != x) G = null == D ? N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: m.default.getFormattedName(D)
  }), _.target_type === I.InviteTargetTypes.STREAM && null != _.target_user && (G = N.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: m.default.getFormattedName(_.target_user)
  })), _.target_type === I.InviteTargetTypes.EMBEDDED_APPLICATION && null != _.target_application && (G = null != D ? N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: m.default.getFormattedName(D)
  }) : N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), P && null == b && (n = (0, s.jsx)(g.GuildIcon, {
    className: A.icon,
    guild: x,
    size: g.GuildIcon.Sizes.SMALL
  })), a = x.name, null != b && (a = b.name, E = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(g.SubTitle, {
      className: A.appIn,
      children: N.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: A.guildContainer,
      children: [(0, s.jsx)(g.GuildIcon, {
        guild: x,
        size: g.GuildIcon.Sizes.SMALL
      }), (0, s.jsx)(i.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: A.appGuildName,
        children: x.name
      })]
    })]
  }));
  else if (null != y) {
    if (null == D) throw Error("no inviter in group DM invite");
    let e = m.default.getFormattedName(D);
    null != y.name && "" !== y.name ? (G = N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), a = y.name, null != y.icon && (n = (0, s.jsx)(g.ChannelIcon, {
      channel: y,
      size: i.AvatarSizes.SIZE_32
    }))) : (G = N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
  } else if (null != D) {
    let e = m.default.getFormattedName(D, !0);
    a = N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), F = !0, E = null != C ? null : (0, s.jsx)(g.SubTitle, {
      className: A.directInviteSubTitle,
      children: v ? N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: A.container,
    children: [(0, s.jsx)(R, {
      application: b,
      guild: x,
      user: P ? D : null,
      compact: F
    }), null != C ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.SubTitle, {
        children: N.default.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(g.Title, {
        children: C
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.SubTitle, {
        children: G
      }), (0, s.jsxs)(g.Title, {
        className: A.title,
        children: [null != x ? (0, s.jsx)(h.default, {
          guild: x,
          className: A.guildBadge,
          tooltipPosition: "left"
        }) : null, n, a]
      })]
    }), E, null != b || F || (null == _ ? void 0 : null === (t = _.guild) || void 0 === t ? void 0 : t.id) === T.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(g.ActivityCount, {
      className: A.activityCount,
      online: _.approximate_presence_count,
      total: _.approximate_member_count,
      flat: O
    }), M.length > 1 ? (0, s.jsx)(g.JoiningAs, {
      user: L
    }) : null]
  })
}