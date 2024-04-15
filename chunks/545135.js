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
  I = i("241851"),
  h = i("94953"),
  A = i("976192"),
  L = i("904483"),
  T = i("429824"),
  p = i("919815"),
  m = i("858822"),
  O = i("993356"),
  G = i("58338"),
  b = i("422525"),
  x = i("522762"),
  C = i("466330"),
  U = i("981631"),
  R = i("689938");

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
    source: U.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: j
  }), D = (0, x.default)(r), F = (0, m.default)(t), y = (0, O.default)(t), k = (0, b.default)(t), B = (0, A.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: U.AnalyticsPages.GUILD_CHANNEL,
      section: U.AnalyticsSections.CHAT_USERNAME,
      object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, h.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: U.AnalyticsPages.GUILD_CHANNEL,
      section: U.AnalyticsSections.CHAT_USERNAME,
      object: U.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), Y = (0, L.default)(t), w = (0, S.default)(t.id), V = (0, c.default)({
    id: t.id,
    label: R.default.Messages.COPY_ID_GUILD
  }), X = (0, p.default)(t, {
    section: U.AnalyticsSections.GUILD_LIST
  }), z = (0, E.default)(t.id), K = (0, G.default)(t.id), W = (0, g.default)(), q = (0, T.default)(t), J = (0, f.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function Q() {
    (0, u.openModal)(e => (0, s.jsx)(I.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(U.GuildFeatures.HUB) ? (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsxs)(u.MenuGroup, {
      children: [v, (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: R.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B]
    }), P ? null : (0, s.jsx)(u.MenuGroup, {
      children: (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: R.default.Messages.LEAVE_HUB,
        action: Q,
        color: "danger"
      })
    }), (0, s.jsx)(u.MenuGroup, {
      children: V
    })]
  }) : (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": R.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsx)(u.MenuGroup, {
      children: X
    }), (0, s.jsx)(u.MenuGroup, {
      children: v
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [F, J || __OVERLAY__ ? null : y, J && !__OVERLAY__ ? K : null, W, D, z]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [d ? null : k, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: R.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("88408")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), B, H]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [Y, w]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [q, !P && (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: R.default.Messages.LEAVE_SERVER,
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