"use strict";
n.r(t), n.d(t, {
  InviteResolvingHeader: function() {
    return T
  },
  default: function() {
    return L
  }
}), n("70102");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("770032"),
  o = n("653047"),
  u = n("233069"),
  d = n("813006"),
  c = n("766274"),
  f = n("697218"),
  h = n("953109"),
  C = n("580357"),
  p = n("124969"),
  m = n("587974"),
  E = n("158998"),
  g = n("49111"),
  I = n("238055"),
  S = n("91366"),
  _ = n("782340"),
  N = n("310042");
let T = () => (0, l.jsxs)(a.Fragment, {
    children: [(0, l.jsx)(p.Avatar, {
      src: null,
      size: i.AvatarSizes.DEPRECATED_SIZE_100,
      className: N.avatar
    }), (0, l.jsx)(p.SubTitle, {
      children: _.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, l.jsx)(p.Title, {
      className: N.inviteResolvingGuildName,
      children: _.default.Messages.LOADING
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
    if (null != n) return (0, l.jsx)(p.Avatar, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: i.AvatarSizes.SIZE_80,
      className: s ? N.compactAvatar : N.avatar
    });
    if (null != t) return (0, l.jsx)(m.default, {
      mask: m.default.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: N.guildIcon,
      children: (0, l.jsx)(p.GuildIcon, {
        guild: t,
        size: p.GuildIcon.Sizes.LARGER,
        animate: !0
      })
    });
    else return null
  };
var L = e => {
  var t;
  let n, a, h, {
      invite: m,
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
  if (null == m) return null;
  let O = null != m.guild ? new d.default(m.guild) : null,
    y = null != m.channel ? (0, u.createChannelRecordFromInvite)(m.channel) : null,
    D = null != m.target_application ? new o.default(m.target_application) : null,
    b = T || null == m.inviter ? null : new c.default(m.inviter),
    j = null != m.approximate_member_count && m.approximate_member_count > 100 || null != O && O.hasFeature(g.GuildFeatures.COMMUNITY),
    G = !j && null != b,
    U = null,
    P = !1;
  if (null != O) U = null == b ? _.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : _.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: E.default.getFormattedName(b)
  }), m.target_type === S.InviteTargetTypes.STREAM && null != m.target_user && (U = _.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: E.default.getFormattedName(m.target_user)
  })), m.target_type === S.InviteTargetTypes.EMBEDDED_APPLICATION && null != m.target_application && (U = null != b ? _.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: E.default.getFormattedName(b)
  }) : _.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), G && null == D && (n = (0, l.jsx)(p.GuildIcon, {
    className: N.icon,
    guild: O,
    size: p.GuildIcon.Sizes.SMALL
  })), a = O.name, null != D && (a = D.name, h = (0, l.jsxs)("div", {
    children: [(0, l.jsx)(p.SubTitle, {
      className: N.appIn,
      children: _.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, l.jsxs)("div", {
      className: N.guildContainer,
      children: [(0, l.jsx)(p.GuildIcon, {
        guild: O,
        size: p.GuildIcon.Sizes.SMALL
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
    let e = E.default.getFormattedName(b);
    null != y.name && "" !== y.name ? (U = _.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), a = y.name, null != y.icon && (n = (0, l.jsx)(p.ChannelIcon, {
      channel: y,
      size: i.AvatarSizes.SIZE_32
    }))) : (U = _.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
  } else if (null != b) {
    let e = E.default.getFormattedName(b, !0);
    a = _.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), P = !0, h = null != L ? null : (0, l.jsx)(p.SubTitle, {
      className: N.directInviteSubTitle,
      children: x ? _.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : _.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: N.container,
    children: [(0, l.jsx)(A, {
      application: D,
      guild: O,
      user: G ? b : null,
      compact: P
    }), null != L ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(p.SubTitle, {
        children: _.default.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, l.jsx)(p.Title, {
        children: L
      })]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(p.SubTitle, {
        children: U
      }), (0, l.jsxs)(p.Title, {
        className: N.title,
        children: [null != O ? (0, l.jsx)(C.default, {
          guild: O,
          className: N.guildBadge,
          tooltipPosition: "left"
        }) : null, n, a]
      })]
    }), h, null != D || P || (null == m ? void 0 : null === (t = m.guild) || void 0 === t ? void 0 : t.id) === I.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(p.ActivityCount, {
      className: N.activityCount,
      online: m.approximate_presence_count,
      total: m.approximate_member_count,
      flat: v
    }), M.length > 1 ? (0, l.jsx)(p.JoiningAs, {
      user: R
    }) : null]
  })
}