"use strict";
i.r(t), i.d(t, {
  default: function() {
    return C
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
  I = i("976192"),
  L = i("904483"),
  A = i("429824"),
  p = i("919815"),
  m = i("858822"),
  T = i("993356"),
  G = i("58338"),
  O = i("422525"),
  b = i("522762"),
  x = i("466330"),
  R = i("981631"),
  j = i("689938");

function U(e) {
  let {
    guild: t,
    onSelect: n,
    hideSettings: d
  } = e, r = t.id, U = N.default.getDefaultChannel(r), C = (0, l.useStateFromStores)([M.default], () => {
    let e = M.default.getCurrentUser();
    return a()(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
  }, [t]), P = (0, x.default)({
    guild: t,
    source: R.InstantInviteSources.GUILD_CONTEXT_MENU,
    channel: U
  }), v = (0, b.default)(r), F = (0, m.default)(t), y = (0, T.default)(t), D = (0, O.default)(t), k = (0, I.default)({
    guildId: t.id,
    userId: _.default.getId(),
    analyticsLocation: {
      page: R.AnalyticsPages.GUILD_CHANNEL,
      section: R.AnalyticsSections.CHAT_USERNAME,
      object: R.AnalyticsObjects.CONTEXT_MENU_ITEM
    }
  }), H = (0, L.default)(t), B = (0, S.default)(t.id), Y = (0, c.default)({
    id: t.id,
    label: j.default.Messages.COPY_ID_GUILD
  }), w = (0, p.default)(t, {
    section: R.AnalyticsSections.GUILD_LIST
  }), V = (0, E.default)(t.id), z = (0, G.default)(t.id), X = (0, g.default)(), W = (0, A.default)(t), K = (0, f.useShouldUseNewNotificationSystem)("GuildContextMenu");

  function q() {
    (0, u.openModal)(e => (0, s.jsx)(h.GuildLeaveConfirmModalContents, {
      ...e,
      guild: t
    }))
  }
  return t.hasFeature(R.GuildFeatures.HUB) ? (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": j.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsxs)(u.MenuGroup, {
      children: [P, (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: j.default.Messages.HUB_PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("59500")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), k]
    }), C ? null : (0, s.jsx)(u.MenuGroup, {
      children: (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: j.default.Messages.LEAVE_HUB,
        action: q,
        color: "danger"
      })
    }), (0, s.jsx)(u.MenuGroup, {
      children: Y
    })]
  }) : (0, s.jsxs)(u.Menu, {
    navId: "guild-context",
    onClose: o.closeContextMenu,
    "aria-label": j.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [(0, s.jsx)(u.MenuGroup, {
      children: w
    }), (0, s.jsx)(u.MenuGroup, {
      children: P
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [F, K || __OVERLAY__ ? null : y, K && !__OVERLAY__ ? z : null, X, v, V]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [d ? null : D, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
        id: "privacy",
        label: j.default.Messages.PRIVACY_SETTINGS,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("59500")]).then(i.bind(i, "241420"));
          return i => (0, s.jsx)(e, {
            ...i,
            guild: t
          })
        })
      }), k]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [H, B]
    }), (0, s.jsxs)(u.MenuGroup, {
      children: [W, !C && (0, s.jsx)(u.MenuItem, {
        id: "leave-guild",
        label: j.default.Messages.LEAVE_SERVER,
        action: q,
        color: "danger"
      })]
    }), (0, s.jsx)(u.MenuGroup, {
      children: Y
    })]
  })
}

function C(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(d.default.CONTEXT_MENU);
  return (0, s.jsx)(r.AnalyticsLocationProvider, {
    value: t,
    children: (0, s.jsx)(U, {
      ...e
    })
  })
}