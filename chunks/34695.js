"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("913144"),
  o = n("679653"),
  u = n("454273"),
  d = n("934288"),
  c = n("262973"),
  f = n("713135"),
  h = n("506885"),
  C = n("233069"),
  p = n("923959"),
  E = n("957255"),
  m = n("697218"),
  g = n("158998"),
  _ = n("19846"),
  S = n("172554"),
  T = n("172643"),
  A = n("710357"),
  M = n("931922"),
  N = n("582724"),
  I = n("834744"),
  v = n("372912"),
  L = n("952999"),
  R = n("49111"),
  y = n("782340"),
  x = n("890957");

function O(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, s = t && (0, u.isPrivateGuildChannel)(n), i = (0, l.useStateFromStores)([p.default], () => null != n.guild_id && n === p.default.getDefaultChannel(n.guild_id), [n]), r = (0, d.default)(n.id);
  if (r) return null;
  if (n.isForumPost()) return (0, a.jsx)(T.default, {
    channel: n
  });
  if (C.THREAD_CHANNEL_TYPES.has(n.type)) return (0, a.jsx)(v.default, {
    channel: n
  });
  else if (i) return (0, a.jsx)(L.default, {
    channel: n
  });
  else if (s) return (0, a.jsx)(M.default, {
    channel: n
  });
  return (0, a.jsx)(I.default, {
    channel: n
  })
}

function D(e) {
  var t;
  let {
    channel: n,
    showingBanner: u
  } = e, d = (0, o.default)(n), {
    type: C
  } = n, p = (0, l.useStateFromStores)([m.default], () => n.isPrivate() ? m.default.getUser(n.getRecipientId()) : null), T = g.default.useUserTag(p), {
    canManageRoles: M,
    canReadMessageHistory: I
  } = (0, l.useStateFromStoresObject)([E.default], () => ({
    canManageRoles: E.default.can(R.Permissions.MANAGE_ROLES, n),
    canReadMessageHistory: E.default.can(R.Permissions.READ_MESSAGE_HISTORY, n)
  })), v = (0, l.useStateFromStores)([f.default], () => C === R.ChannelTypes.DM ? f.default.getMutualGuilds(n.getRecipientId()) : null, [n, C]), {
    systemDMRedesignEnabled: L
  } = c.default.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null !== (t = n.isSystemDM()) && void 0 !== t && t
  });
  if (s.useEffect(() => {
      C === R.ChannelTypes.DM && null == v && null != p && r.default.wait(() => (0, h.default)(n.getRecipientId(), p.getAvatarURL(null, 80), {
        withMutualGuilds: !0
      }))
    }, [v, C, n, p]), n.isSystemDM()) return L ? (0, a.jsx)(N.default, {
    channel: n
  }) : (0, a.jsx)(A.default, {
    channel: n,
    children: y.default.Messages.SYSTEM_DM_EMPTY_MESSAGE
  });
  if (C === R.ChannelTypes.DM) return (0, a.jsxs)(A.default, {
    channel: n,
    user: p,
    children: [null != p && (0, a.jsx)(i.Heading, {
      variant: "heading-xl/medium",
      className: x.marginBottom20,
      children: T
    }), y.default.Messages.BEGINNING_DM.format({
      username: d
    }), (0, a.jsx)(_.default, {
      userId: n.getRecipientId(),
      channel: n,
      showingBanner: u
    })]
  });
  if (n.isMultiUserDM()) return n.isManaged() ? (0, a.jsxs)(S.default, {
    channelId: n.id,
    children: [(0, a.jsx)(S.EmptyMessageHeader, {
      children: y.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: d
      })
    }), (0, a.jsx)(S.EmptyMessageBody, {
      children: y.default.Messages.BEGINNING_GROUP_DM_MANAGED
    })]
  }) : (0, a.jsx)(A.default, {
    channel: n,
    children: y.default.Messages.BEGINNING_GROUP_DM.format({
      name: d
    })
  });
  return I ? (0, a.jsx)(O, {
    channel: n,
    canManageRoles: M
  }) : (0, a.jsx)(S.default, {
    channelId: n.id,
    children: (0, a.jsx)(S.EmptyMessageBody, {
      children: y.default.Messages.BEGINNING_CHANNEL_NO_HISTORY.format({
        channelName: d
      })
    })
  })
}