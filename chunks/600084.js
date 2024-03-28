"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("570140"),
  o = n("933557"),
  u = n("605436"),
  d = n("736052"),
  c = n("878857"),
  f = n("621853"),
  h = n("484459"),
  m = n("131704"),
  p = n("984933"),
  E = n("496675"),
  C = n("594174"),
  g = n("51144"),
  S = n("7782"),
  _ = n("967128"),
  T = n("320781"),
  I = n("753898"),
  A = n("734386"),
  v = n("184279"),
  N = n("438306"),
  x = n("544142"),
  M = n("128557"),
  R = n("981631"),
  L = n("689938"),
  y = n("794711");

function O(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, l = t && (0, u.isPrivateGuildChannel)(n), i = (0, s.useStateFromStores)([p.default], () => null != n.guild_id && n === p.default.getDefaultChannel(n.guild_id), [n]);
  if ((0, d.default)(n.id)) return null;
  if (n.isForumPost()) return (0, a.jsx)(T.default, {
    channel: n
  });
  if (m.THREAD_CHANNEL_TYPES.has(n.type)) return (0, a.jsx)(x.default, {
    channel: n
  });
  else if (i) return (0, a.jsx)(M.default, {
    channel: n
  });
  else if (l) return (0, a.jsx)(A.default, {
    channel: n
  });
  return (0, a.jsx)(N.default, {
    channel: n
  })
}

function j(e) {
  var t;
  let {
    channel: n,
    showingBanner: u
  } = e, d = (0, o.default)(n), {
    type: m
  } = n, p = (0, s.useStateFromStores)([C.default], () => n.isPrivate() ? C.default.getUser(n.getRecipientId()) : null), T = g.default.useUserTag(p), {
    canManageRoles: A,
    canReadMessageHistory: N
  } = (0, s.useStateFromStoresObject)([E.default], () => ({
    canManageRoles: E.default.can(R.Permissions.MANAGE_ROLES, n),
    canReadMessageHistory: E.default.can(R.Permissions.READ_MESSAGE_HISTORY, n)
  })), x = (0, s.useStateFromStores)([f.default], () => m === R.ChannelTypes.DM ? f.default.getMutualGuilds(n.getRecipientId()) : null, [n, m]), {
    systemDMRedesignEnabled: M
  } = c.default.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t
  });
  if (l.useEffect(() => {
      m === R.ChannelTypes.DM && null == x && null != p && r.default.wait(() => (0, h.default)(n.getRecipientId(), p.getAvatarURL(null, 80), {
        withMutualGuilds: !0
      }))
    }, [x, m, n, p]), n.isSystemDM()) return M ? (0, a.jsx)(v.default, {
    channel: n
  }) : (0, a.jsx)(I.default, {
    channel: n,
    children: L.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
  });
  if (m === R.ChannelTypes.DM) return (0, a.jsxs)(I.default, {
    channel: n,
    user: p,
    children: [null != p && (0, a.jsx)(i.Heading, {
      variant: "heading-xl/medium",
      className: y.marginBottom20,
      children: T
    }), L.default.Messages.BEGINNING_DM.format({
      username: d
    }), (0, a.jsx)(S.default, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: u
    })]
  });
  if (n.isMultiUserDM()) return n.isManaged() ? (0, a.jsxs)(_.default, {
    channelId: n.id,
    children: [(0, a.jsx)(_.EmptyMessageHeader, {
      children: L.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: d
      })
    }), (0, a.jsx)(_.EmptyMessageBody, {
      children: L.default.Messages.BEGINNING_GROUP_DM_MANAGED
    })]
  }) : (0, a.jsx)(I.default, {
    channel: n,
    children: L.default.Messages.BEGINNING_GROUP_DM.format({
      name: d
    })
  });
  return N ? (0, a.jsx)(O, {
    channel: n,
    canManageRoles: A
  }) : (0, a.jsx)(_.default, {
    channelId: n.id,
    children: (0, a.jsx)(_.EmptyMessageBody, {
      children: L.default.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
        channelName: d
      })
    })
  })
}