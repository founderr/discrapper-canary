"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var i = n("37983");
n("884691");
var s = n("627445"),
  a = n.n(s),
  l = n("446674"),
  u = n("77078"),
  d = n("272030"),
  o = n("812204"),
  r = n("685665"),
  c = n("861370"),
  f = n("255812"),
  S = n("47495"),
  g = n("724026"),
  E = n("271938"),
  _ = n("923959"),
  M = n("697218"),
  N = n("578411"),
  h = n("230947"),
  I = n("544955"),
  A = n("747867"),
  T = n("555914"),
  L = n("513472"),
  p = n("527660"),
  O = n("823772"),
  U = n("177508"),
  m = n("263673"),
  R = n("58622"),
  G = n("49111"),
  C = n("782340");

function v(e) {
  let {
    guild: t,
    onSelect: s,
    hideSettings: o
  } = e, r = t.id, v = _.default.getDefaultChannel(r), b = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), x = (0, R.default)({
    guild: t,
    source: G.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: v
  }), j = (0, m.default)(r), y = (0, L.default)(t), F = (0, p.default)(t), D = (0, U.default)(t), P = (0, h.default)({
    guildId: t.id,
    userId: E.default.getId(),
    analyticsLocation: {
      page: G.AnalyticsPages.GUILD_CHANNEL,
      section: G.AnalyticsSections.CHAT_USERNAME,
      object: G.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, I.default)(t), k = (0, f.default)(t.id), V = (0, c.default)({
    id: t.id,
    label: C.default.Messages.COPY_ID_GUILD
  }), Y = (0, T.default)(t, {
    section: G.AnalyticsSections.GUILD_LIST
  }), w = (0, g.default)(t.id), B = (0, O.default)(t.id), X = (0, A.default)(t), Z = (0, S.useShouldUseNewNotificationSystem)("GuildContextMenu"), W = t.hasFeature(G.GuildFeatures.HUB);

  function z() {
    (0, u.openModal)(e => (0, i.jsx)(N.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return W ? (0, i.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: d.closeContextMenu,
    "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, i.jsxs)(u.MenuGroup, {
      children: [x, (0, i.jsx)(u.MenuItem, {
        id: "privacy",
        label: C.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("349406").then(n.bind(n, "349406"));
          return n => (0, i.jsx)(e, {
            ...n,
            guild: t
          })
        })
      }), P]
    }), b ? null : (0, i.jsx)(u.MenuGroup, {
      children: (0, i.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: C.default.Messages.LEAVE_HUB,
        action: z,
        color: "danger"
      })
    }), (0, i.jsx)(u.MenuGroup, {
      children: V
    })]
  }) : (0, i.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: d.closeContextMenu,
    "aria-label": C.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, i.jsx)(u.MenuGroup, {
      children: Y
    }), (0, i.jsx)(u.MenuGroup, {
      children: x
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [y, Z || __OVERLAY__ ? null : F, Z && !__OVERLAY__ ? B : null, j, w]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [o ? null : D, __OVERLAY__ ? null : (0, i.jsx)(u.MenuItem, {
        id: "privacy",
        label: C.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("349406").then(n.bind(n, "349406"));
          return n => (0, i.jsx)(e, {
            ...n,
            guild: t
          })
        })
      }), P]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [H, k]
    }), (0, i.jsxs)(u.MenuGroup, {
      children: [X, !b && (0, i.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: C.default.Messages.LEAVE_SERVER,
        action: z,
        color: "danger"
      })]
    }), (0, i.jsx)(u.MenuGroup, {
      children: V
    })]
  })
}

function b(e) {
  let {
    AnalyticsLocationProvider: t
  } = (0, r.default)(o.default.CONTEXT_MENU);
  return (0, i.jsx)(t, {
    children: (0, i.jsx)(v, {
      ...e
    })
  })
}