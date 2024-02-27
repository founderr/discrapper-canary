"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("316693"),
  d = n("509043"),
  c = n("446674"),
  f = n("77078"),
  h = n("18054"),
  C = n("798609"),
  p = n("679653"),
  E = n("454273"),
  m = n("462430"),
  g = n("592407"),
  _ = n("367376"),
  S = n("305961"),
  T = n("957255"),
  A = n("697218"),
  M = n("987772"),
  I = n("155207"),
  N = n("917686"),
  v = n("317134"),
  L = n("991170"),
  R = n("158998"),
  y = n("938244"),
  x = n("172554"),
  O = n("730859"),
  D = n("49111"),
  P = n("782340"),
  j = n("948746");

function b(e) {
  let {
    channel: t
  } = e, [n, l] = s.useState(!1), r = (0, p.default)(t, !0), b = (0, c.useStateFromStores)([S.default], () => S.default.getGuild(t.guild_id)), F = (0, c.useStateFromStores)([A.default], () => A.default.getUser(null == b ? void 0 : b.ownerId)), H = s.useMemo(() => null != b ? o(b.roles).sortBy(e => -e.position).filter(e => !(0, E.isEveryoneRoleId)(b.id, e.id)).value() : [], [b]), U = s.useMemo(() => o(H).filter(e => {
    if (null == b) return !1;
    let n = L.default.computePermissionsForRoles({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return u.default.has(n, D.Permissions.ADMINISTRATOR) || u.default.has(n, D.Permissions.VIEW_CHANNEL)
  }).value(), [t, b, H]), k = (0, c.useStateFromStoresArray)([A.default], () => {
    let e = {};
    for (let n of (null != F && (e[F.id] = F), Object.values(t.permissionOverwrites))) {
      if (n.type !== C.PermissionOverwriteType.MEMBER || null != e[n.id]) continue;
      let t = A.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return o(e).filter(e => {
      var n;
      let a = L.default.can({
          permission: D.Permissions.ADMINISTRATOR,
          user: e,
          context: t
        }),
        s = null !== (n = t.permissionOverwrites[e.id]) && void 0 !== n ? n : L.default.NONE,
        l = u.default.has(s.allow, D.Permissions.VIEW_CHANNEL);
      return a || l
    }).value()
  }, [t, F]), w = T.default.can(D.Permissions.MANAGE_CHANNELS, t) || T.default.can(D.Permissions.MANAGE_ROLES, t);

  function B() {
    h.default.open(t.id)
  }
  let G = s.useCallback(() => l(!1), []);
  return (0, a.jsxs)(x.default, {
    channelId: t.id,
    children: [(0, a.jsx)(x.EmptyMessageIcon, {
      locked: !0,
      channelType: t.type
    }), (0, a.jsx)(x.EmptyMessageHeader, {
      children: P.default.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: r
      })
    }), (0, a.jsx)(x.EmptyMessageBody, {
      children: P.default.Messages.BEGINNING_ROLE_REQUIRED_CHANNEL_DESCRIPTION.format({
        channelName: r,
        topicHook: () => _.default.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), w ? (0, a.jsxs)("div", {
      className: j.channelSettingButtons,
      children: [(0, a.jsx)(y.default, {
        label: P.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE,
        onClick: () => l(!0),
        icon: (0, a.jsx)(I.default, {
          width: 16,
          height: 16
        })
      }), (0, a.jsx)(y.default, {
        label: P.default.Messages.EDIT_CHANNEL,
        onClick: B,
        icon: (0, a.jsx)(M.default, {
          width: 16,
          height: 16
        })
      })]
    }) : null, (0, a.jsxs)("div", {
      className: j.members,
      children: [function() {
        if (1 !== k.length || U.length > 0) return (0, a.jsx)(O.default, {
          guildId: t.guild_id,
          className: j.avatars,
          maxUsers: 5,
          users: k
        });
        let e = k[0],
          n = R.default.getName(e);
        return (0, a.jsxs)("div", {
          className: j.avatars,
          children: [(0, a.jsx)(f.Avatar, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: f.AvatarSizes.SIZE_24
          }), (0, a.jsx)(f.Text, {
            tag: "span",
            className: j.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, a.jsx)(f.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: P.default.Messages.ROLE_REQUIRED_SINGLE_USER_MESSAGE
          })]
        })
      }(), U.map((e, n) => {
        var s, l;
        let r = null !== (l = e.colorString) && void 0 !== l ? l : (0, d.int2hex)(D.DEFAULT_ROLE_COLOR),
          o = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== void 0;
        return w ? (0, a.jsx)(N.default, {
          className: i(j.role, {
            [j.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          disabled: !w,
          verified: o,
          onClick: () => {
            g.default.open(t.guild_id, D.GuildSettingsSections.MEMBERS), g.default.selectRole(e.id)
          }
        }, e.id) : (0, a.jsx)(v.default, {
          className: i(j.role, {
            [j.last]: n === U.length - 1
          }),
          roleName: e.name,
          roleColor: r,
          verified: o
        }, e.id)
      })]
    }), n ? (0, a.jsx)(f.Modal, {
      renderModal: e => (0, a.jsx)(m.default, {
        ...e,
        onClose: () => (G(), e.onClose()),
        channelId: t.id
      }),
      onCloseRequest: () => l(!1)
    }) : null]
  })
}