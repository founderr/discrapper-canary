"use strict";
a.r(t), a("47120");
var n = a("735250"),
  i = a("470079"),
  l = a("512722"),
  s = a.n(l),
  u = a("442837"),
  d = a("524437"),
  r = a("481060"),
  o = a("5036"),
  c = a("553385"),
  f = a("52011"),
  g = a("890477"),
  I = a("134726"),
  E = a("458034"),
  p = a("706140"),
  M = a("362658"),
  m = a("241851"),
  h = a("294978"),
  _ = a("513102"),
  x = a("976192"),
  S = a("429824"),
  A = a("466330"),
  G = a("191471"),
  T = a("162157"),
  C = a("623624"),
  v = a("894059"),
  R = a("771212"),
  N = a("434404"),
  L = a("41776"),
  b = a("837949"),
  j = a("11352"),
  D = a("703656"),
  y = a("271383"),
  P = a("496675"),
  U = a("9156"),
  O = a("594174"),
  H = a("825185"),
  V = a("808602"),
  w = a("386103"),
  F = a("632310"),
  B = a("615814"),
  k = a("937482"),
  z = a("709586"),
  Y = a("185403"),
  W = a("151785"),
  Z = a("288176"),
  K = a("833571"),
  X = a("26290"),
  q = a("626135"),
  J = a("981631"),
  Q = a("647086"),
  $ = a("689938"),
  ee = a("515706");

function et(e) {
  (0, r.openModal)(t => (0, n.jsx)(m.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let ea = i.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: m
  } = e, ea = (0, u.useStateFromStores)([O.default], () => O.default.getCurrentUser());
  s()(null != ea, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
    q.default.track(J.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let en = (0, u.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: ei,
      canManageChannels: el,
      showGuildAnalytics: es,
      isGuildAdmin: eu
    } = (0, u.useStateFromStoresObject)([P.default], () => {
      let e = P.default.can(J.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(J.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: P.default.canAccessGuildSettings(t),
        canManageChannels: P.default.can(J.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, R.staffOnlyGuildSettingsAccess)(t.id) || e,
        isGuildAdmin: P.default.can(J.Permissions.ADMINISTRATOR, t)
      }
    }, [t]),
    ed = (0, T.useCanReportRaid)(t),
    er = t.isOwner(ea),
    eo = (0, u.useStateFromStores)([L.default], () => L.default.isLurking(t.id), [t.id]),
    ec = (0, u.useStateFromStores)([y.default], () => y.default.isCurrentUserGuest(t.id)),
    ef = (0, v.default)(t.id, !0),
    eg = (0, E.default)(t),
    eI = (0, A.default)({
      source: J.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eE = (0, x.default)({
      guildId: t.id,
      userId: ea.id,
      analyticsLocation: {
        page: J.AnalyticsPages.GUILD_CHANNEL,
        section: J.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: Y.default
    }),
    ep = t.hasFeature(J.GuildFeatures.HUB),
    eM = t.id === Q.FAVORITES_RAW_GUILD_ID,
    em = (0, b.default)(t.id),
    eh = (0, h.default)(t),
    e_ = (0, _.default)(t),
    ex = (0, S.default)(t, !0),
    {
      isFavoritesPerk: eS
    } = (0, M.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eA
    } = g.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eG
    } = f.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    eT = j.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    {
      enableClanCreation: eC
    } = I.ClanGuildExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    [ev] = (0, p.useGetDismissibleContent)([d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    eR = eT && ev === d.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return eo || ec ? (0, n.jsx)(r.Menu, {
    onSelect: m,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": $.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(r.MenuItem, {
      id: "leave-guild",
      label: $.default.Messages.LEAVE_SERVER,
      icon: F.default,
      action: () => {
        N.default.leaveGuild(t.id), !ec && (0, D.transitionTo)(J.Routes.GUILD_DISCOVERY)
      }
    })
  }) : eM ? (0, n.jsxs)(r.Menu, {
    onSelect: m,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": $.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [eS && (0, n.jsx)(r.MenuItem, {
        id: "add-channel",
        label: $.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: W.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("29608")]).then(a.bind(a, "178125"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(r.MenuItem, {
        id: "create-category",
        label: $.default.Messages.CREATE_CATEGORY,
        icon: B.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, "477782"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(r.MenuGroup, {
      children: (0, n.jsx)(r.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: $.default.Messages.HIDE_MUTED_CHANNELS,
        checked: en,
        action: () => o.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : ep ? (0, n.jsxs)(r.Menu, {
    onSelect: m,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": $.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [ei ? (0, n.jsx)(r.MenuItem, {
        id: "settings",
        label: $.default.Messages.SERVER_SETTINGS,
        icon: k.default,
        action: () => {
          N.default.open(t.id, J.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eI, (0, n.jsx)(r.MenuItem, {
        id: "privacy",
        label: $.default.Messages.PRIVACY_SETTINGS,
        icon: K.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), eE]
    }), er ? null : (0, n.jsx)(r.MenuGroup, {
      children: (0, n.jsx)(r.MenuItem, {
        id: "leave",
        label: $.default.Messages.LEAVE_HUB,
        icon: F.default,
        color: "danger",
        action: () => et(t)
      })
    })]
  }) : (0, n.jsxs)(r.Menu, {
    onSelect: m,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": $.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(r.MenuGroup, {
      children: (0, n.jsx)(r.MenuItem, {
        id: "premium-subscribe",
        label: $.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: z.default,
        action: () => {
          (0, C.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: J.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [er && ea.isStaff() && eA ? (0, n.jsx)(r.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: w.default,
        action: () => {
          (0, c.forcePrompt)(t.id, J.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, er && ea.isStaff() && eG ? (0, n.jsx)(r.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: w.default,
        action: () => {
          (0, c.forcePrompt)(t.id, J.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, eI, ei ? (0, n.jsx)(r.MenuItem, {
        id: "settings",
        label: $.default.Messages.SERVER_SETTINGS,
        icon: k.default,
        action: () => {
          N.default.open(t.id, J.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eu && eC && t.hasFeature(J.GuildFeatures.CLAN) ? (0, n.jsx)(r.MenuItem, {
        id: "guild-settings",
        label: $.default.Messages.CLAN_SETTINGS,
        icon: k.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("95589")]).then(a.bind(a, "593128"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }) : null, es ? (0, n.jsx)(r.MenuItem, {
        id: "insights",
        label: $.default.Messages.SERVER_INSIGHTS,
        icon: H.default,
        action: () => N.default.open(t.id, J.GuildSettingsSections.ANALYTICS)
      }) : null, el ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(r.MenuItem, {
          id: "create-channel",
          label: $.default.Messages.CREATE_CHANNEL,
          icon: W.default,
          action: () => (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: J.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(r.MenuItem, {
          id: "create-category",
          label: $.default.Messages.CREATE_CATEGORY,
          icon: B.default,
          action: () => (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: J.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, ef, eh, e_, eg]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [em, (0, n.jsx)(r.MenuItem, {
        id: "notifications",
        label: (0, n.jsxs)("div", {
          className: ee.newBadgeRow,
          children: [$.default.Messages.NOTIFICATION_SETTINGS, eR && (0, n.jsx)(X.TextBadge, {
            className: ee.newBadge,
            text: $.default.Messages.NEW
          })]
        }),
        icon: eR ? void 0 : V.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("34521")]).then(a.bind(a, "751212"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(r.MenuItem, {
        id: "privacy",
        label: $.default.Messages.PRIVACY_SETTINGS,
        icon: K.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [eE, (0, n.jsx)(r.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: $.default.Messages.HIDE_MUTED_CHANNELS,
        checked: en,
        action: () => o.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [ex, ed && t.isCommunity() ? (0, n.jsx)(r.MenuItem, {
        id: "report-raid",
        label: $.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: Z.default,
        color: "danger",
        action: () => (0, G.openReportRaidModal)(t.id)
      }) : null, er ? null : (0, n.jsx)(r.MenuItem, {
        id: "leave",
        label: $.default.Messages.LEAVE_SERVER,
        icon: F.default,
        color: "danger",
        action: () => et(t)
      })]
    })]
  })
});
t.default = ea