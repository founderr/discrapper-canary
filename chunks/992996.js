"use strict";
a.r(t), a.d(t, {
  default: function() {
    return K
  }
});
var n = a("37983"),
  i = a("884691"),
  l = a("627445"),
  d = a.n(l),
  s = a("446674"),
  u = a("77078"),
  r = a("126501"),
  o = a("388142"),
  c = a("473528"),
  f = a("578899"),
  g = a("685058"),
  p = a("498139"),
  I = a("578411"),
  E = a("383292"),
  M = a("163139"),
  h = a("230947"),
  m = a("747867"),
  _ = a("58622"),
  S = a("413266"),
  x = a("701203"),
  G = a("95039"),
  A = a("255812"),
  C = a("199938"),
  T = a("592407"),
  L = a("267567"),
  D = a("724026"),
  b = a("393414"),
  R = a("26989"),
  j = a("957255"),
  v = a("282109"),
  N = a("697218"),
  y = a("756609"),
  U = a("660279"),
  O = a("171710"),
  V = a("796454"),
  H = a("919765"),
  P = a("474571"),
  w = a("118503"),
  F = a("987772"),
  k = a("351825"),
  B = a("561359"),
  z = a("148337"),
  Y = a("599110"),
  W = a("49111"),
  Z = a("695838"),
  X = a("782340");

function q(e) {
  (0, u.openModal)(t => (0, n.jsx)(I.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let J = i.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: I
  } = e, J = (0, s.useStateFromStores)([N.default], () => N.default.getCurrentUser());
  d(null != J, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
    Y.default.track(W.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let K = (0, s.useStateFromStores)([v.default], () => v.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: Q,
      canManageChannels: $,
      showGuildAnalytics: ee
    } = (0, s.useStateFromStoresObject)([j.default], () => {
      let e = j.default.can(W.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(W.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: j.default.canAccessGuildSettings(t),
        canManageChannels: j.default.can(W.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, C.staffOnlyGuildSettingsAccess)(t.id) || e
      }
    }, [t]),
    et = (0, x.useCanReportRaid)(t),
    ea = t.isOwner(J),
    en = (0, s.useStateFromStores)([L.default], () => L.default.isLurking(t.id), [t.id]),
    ei = (0, s.useStateFromStores)([R.default], () => R.default.isCurrentUserGuest(t.id)),
    el = (0, A.default)(t.id, !0),
    ed = (0, g.default)(t),
    es = (0, _.default)({
      source: W.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eu = (0, h.default)({
      guildId: t.id,
      userId: J.id,
      analyticsLocation: {
        page: W.AnalyticsPages.GUILD_CHANNEL,
        section: W.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: F.default
    }),
    er = t.hasFeature(W.GuildFeatures.HUB),
    eo = t.id === Z.FAVORITES_RAW_GUILD_ID,
    ec = (0, D.default)(t.id),
    ef = (0, E.default)(t),
    eg = (0, M.default)(t),
    ep = (0, m.default)(t, !0),
    {
      isFavoritesPerk: eI
    } = (0, p.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eE
    } = f.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eM
    } = c.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    });
  return en || ei ? (0, n.jsx)(u.Menu, {
    onSelect: I,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(u.MenuItem, {
      id: "leave-guild",
      label: X.default.Messages.LEAVE_SERVER,
      icon: V.default,
      action: () => {
        T.default.leaveGuild(t.id), !ei && (0, b.transitionTo)(W.Routes.GUILD_DISCOVERY)
      }
    })
  }) : eo ? (0, n.jsxs)(u.Menu, {
    onSelect: I,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [eI && (0, n.jsx)(u.MenuItem, {
        id: "add-channel",
        label: X.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: k.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("746039").then(a.bind(a, "746039"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(u.MenuItem, {
        id: "create-category",
        label: X.default.Messages.CREATE_CATEGORY,
        icon: H.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("515680").then(a.bind(a, "515680"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: X.default.Messages.HIDE_MUTED_CHANNELS,
        checked: K,
        action: () => r.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : er ? (0, n.jsxs)(u.Menu, {
    onSelect: I,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(u.MenuGroup, {
      children: [Q ? (0, n.jsx)(u.MenuItem, {
        id: "settings",
        label: X.default.Messages.SERVER_SETTINGS,
        icon: P.default,
        action: () => {
          T.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, es, (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: X.default.Messages.PRIVACY_SETTINGS,
        icon: z.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("349406").then(a.bind(a, "349406"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), eu]
    }), ea ? null : (0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "leave",
        label: X.default.Messages.LEAVE_HUB,
        icon: V.default,
        color: "danger",
        action: () => q(t)
      })
    })]
  }) : (0, n.jsxs)(u.Menu, {
    onSelect: I,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": X.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(u.MenuGroup, {
      children: (0, n.jsx)(u.MenuItem, {
        id: "premium-subscribe",
        label: X.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: w.default,
        action: () => {
          (0, G.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: W.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ea && J.isStaff() && eE ? (0, n.jsx)(u.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: O.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, ea && J.isStaff() && eM ? (0, n.jsx)(u.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: O.default,
        action: () => {
          (0, o.forcePrompt)(t.id, W.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, es, Q ? (0, n.jsx)(u.MenuItem, {
        id: "settings",
        label: X.default.Messages.SERVER_SETTINGS,
        icon: P.default,
        action: () => {
          T.default.open(t.id, W.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ee ? (0, n.jsx)(u.MenuItem, {
        id: "insights",
        label: X.default.Messages.SERVER_INSIGHTS,
        icon: y.default,
        action: () => T.default.open(t.id, W.GuildSettingsSections.ANALYTICS)
      }) : null, $ ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u.MenuItem, {
          id: "create-channel",
          label: X.default.Messages.CREATE_CHANNEL,
          icon: k.default,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("581354").then(a.bind(a, "581354"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(u.MenuItem, {
          id: "create-category",
          label: X.default.Messages.CREATE_CATEGORY,
          icon: H.default,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("581354").then(a.bind(a, "581354"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: W.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, el, ef, eg, ed]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ec, (0, n.jsx)(u.MenuItem, {
        id: "notifications",
        label: X.default.Messages.NOTIFICATION_SETTINGS,
        icon: U.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("747593").then(a.bind(a, "747593"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(u.MenuItem, {
        id: "privacy",
        label: X.default.Messages.PRIVACY_SETTINGS,
        icon: z.default,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("349406").then(a.bind(a, "349406"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [eu, (0, n.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: X.default.Messages.HIDE_MUTED_CHANNELS,
        checked: K,
        action: () => r.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(u.MenuGroup, {
      children: [ep, et && t.isCommunity() ? (0, n.jsx)(u.MenuItem, {
        id: "report-raid",
        label: X.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: B.default,
        color: "danger",
        action: () => (0, S.openReportRaidModal)(t.id)
      }) : null, ea ? null : (0, n.jsx)(u.MenuItem, {
        id: "leave",
        label: X.default.Messages.LEAVE_SERVER,
        icon: V.default,
        color: "danger",
        action: () => q(t)
      })]
    })]
  })
});
var K = J