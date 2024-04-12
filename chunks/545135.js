"use strict";
i.r(t), i.d(t, {
  default: function() {
    return P
  }
});
var s = i("735250");
i("470079");
var n = i("512722"),
  a = i.n(n),
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
  _ = i("314897"),
  N = i("984933"),
  M = i("594174"),
  h = i("241851"),
  I = i("94953"),
  A = i("976192"),
  L = i("904483"),
  p = i("429824"),
  m = i("919815"),
  T = i("858822"),
  G = i("993356"),
  b = i("58338"),
  O = i("422525"),
  x = i("522762"),
  C = i("466330"),
  R = i("981631"),
  U = i("689938");

function j(e) {
  let {
    guild: t,
    onSelect: n,
    hideSettings: d
  } = e, r = t.id, j = N.default.getDefaultChannel(r), P = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), v = (0, C.default)({
    guild: t,
    source: R.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: j
  }), F = (0, x.default)(r), y = (0, T.default)(t), D = (0, G.default)(t), k = (0, O.default)(t), H = (0, A.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: R.AnalyticsPages.GUILD_CHANNEL,
      section: R.AnalyticsSections.CHAT_USERNAME,
      object: R.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), B = (0, I.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: R.AnalyticsPages.GUILD_CHANNEL,
      section: R.AnalyticsSections.CHAT_USERNAME,
      object: R.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), Y = (0, L.default)(t), w = (0, S.default)(t.id), V = (0, c.default)({
    id: t.id,
    label: U.default.Messages.COPY_ID_GUILD
  }), X = (0, m.default)(t, {
    section: R.AnalyticsSections.GUILD_LIST
  }), z = (0, E.default)(t.id), K = (0, b.default)(t.id), W = (0, g.default)(), q = (0, p.default)(t), J = (0, f.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function Q() {
    (0, u.openModal)(e => (0, s.jsx)(h.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(R.GuildFeatures.HUB) ? (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": U.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsxs)(u.MenuGroup, {
      children: [v, (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: U.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), H]
    }), P ? null : (0, s.jsx)(u.MenuGroup, {
      children: (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: U.default.Messages.LEAVE_HUB,
        action: Q,
        color: "danger"
      })
    }), (0, s.jsx)(u.MenuGroup, {
      children: V
    })]
  }) : (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": U.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsx)(u.MenuGroup, {
      children: X
    }), (0, s.jsx)(u.MenuGroup, {
      children: v
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [y, J || __OVERLAY__ ? null : D, J && !__OVERLAY__ ? K : null, W, F, z]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [d ? null : k, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: U.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), H, B]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [Y, w]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [q, !P && (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: U.default.Messages.LEAVE_SERVER,
        action: Q,
        color: "danger"
      })]
    }), (0, s.jsx)(u.MenuGroup, {
      children: V
    })]
  })
}

function P(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, s.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, s.jsx)(j, {
      ...e
    })
  })
}