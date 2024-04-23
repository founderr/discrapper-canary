"use strict";
i.r(t), i.d(t, {
  default: function() {
    return j
  }
});
var n = i("735250");
i("470079");
var s = i("512722"),
  a = i.n(s),
  l = i("442837"),
  u = i("481060"),
  o = i("239091"),
  d = i("100527"),
  r = i("906732"),
  c = i("299206"),
  S = i("894059"),
  f = i("423589"),
  E = i("837949"),
  g = i("122074"),
  N = i("314897"),
  _ = i("984933"),
  M = i("594174"),
  I = i("241851"),
  h = i("94953"),
  A = i("976192"),
  m = i("904483"),
  L = i("429824"),
  T = i("919815"),
  p = i("858822"),
  O = i("993356"),
  G = i("58338"),
  C = i("422525"),
  b = i("522762"),
  x = i("466330"),
  U = i("981631"),
  v = i("689938");

function R(e) {
  let {
    guild: t,
    onSelect: s,
    hideSettings: d
  } = e, r = t.id, R = _.default.getDefaultChannel(r), j = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), P = (0, x.default)({
    guild: t,
    source: U.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: R
  }), F = (0, b.default)(r), y = (0, p.default)(t), D = (0, O.default)(t), k = (0, C.default)(t), B = (0, A.default)({
    guildId: t.id,
    userId: N.default.getId(),
    analyticsLocation: {
      page: U.AnalyticsPages.GUILD_CHANNEL,
      section: U.AnalyticsSections.CHAT_USERNAME,
      object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, h.default)({
    guildId: t.id,
    userId: N.default.getId(),
    analyticsLocation: {
      page: U.AnalyticsPages.GUILD_CHANNEL,
      section: U.AnalyticsSections.CHAT_USERNAME,
      object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), Y = (0, m.default)(t), w = (0, S.default)(t.id), V = (0, c.default)({
    id: t.id,
    label: v.default.Messages.COPY_ID_GUILD
  }), z = (0, T.default)(t, {
    section: U.AnalyticsSections.GUILD_LIST
  }), W = (0, E.default)(t.id), X = (0, G.default)(t.id), K = (0, g.default)(t.id), Q = (0, L.default)(t), q = (0, f.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function J() {
    (0, u.openModal)(e => (0, n.jsx)(I.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(U.GuildFeatures.HUB) ? (0, n.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [P, (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: v.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, n.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B]
    }), j ? null : (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: v.default.Messages.LEAVE_HUB,
        action: J,
        color: "danger"
      })
    }), (0, n.jsx)(u.MenuGroup, {
      children: V
    })]
  }) : (0, n.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: s,
    children: [(0, n.jsx)(u.MenuGroup, {
      children: z
    }), (0, n.jsx)(u.MenuGroup, {
      children: P
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [y, q || __OVERLAY__ ? null : D, q && !__OVERLAY__ ? X : null, K, F, W]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [d ? null : k, __OVERLAY__ ? null : (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: v.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, n.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B, H]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [Y, w]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [Q, !j && (0, n.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: v.default.Messages.LEAVE_SERVER,
        action: J,
        color: "danger"
      })]
    }), (0, n.jsx)(u.MenuGroup, {
      children: V
    })]
  })
}

function j(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, n.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, n.jsx)(R, {
      ...e
    })
  })
}