"use strict";
a.r(t), a("47120");
var n = a("735250"),
  l = a("470079"),
  i = a("512722"),
  s = a.n(i),
  r = a("442837"),
  o = a("524437"),
  d = a("481060"),
  u = a("5036"),
  c = a("553385"),
  f = a("52011"),
  S = a("890477"),
  E = a("134726"),
  p = a("593128"),
  T = a("458034"),
  I = a("706140"),
  m = a("362658"),
  g = a("241851"),
  _ = a("294978"),
  C = a("513102"),
  A = a("976192"),
  M = a("429824"),
  N = a("466330"),
  h = a("191471"),
  b = a("162157"),
  x = a("623624"),
  L = a("894059"),
  R = a("771212"),
  G = a("434404"),
  v = a("41776"),
  D = a("837949"),
  j = a("11352"),
  y = a("703656"),
  P = a("271383"),
  O = a("496675"),
  U = a("9156"),
  F = a("594174"),
  w = a("825185"),
  B = a("808602"),
  H = a("386103"),
  V = a("632310"),
  Y = a("615814"),
  W = a("937482"),
  k = a("709586"),
  z = a("185403"),
  Z = a("151785"),
  K = a("288176"),
  J = a("833571"),
  X = a("725568"),
  q = a("26290"),
  Q = a("626135"),
  $ = a("981631"),
  ee = a("308083"),
  et = a("647086"),
  ea = a("689938"),
  en = a("515706");

function el(e) {
  (0, d.openModal)(t => (0, n.jsx)(g.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let ei = l.memo(function(e) {
  let {
    guild: t,
    onClose: i,
    onSelect: g
  } = e, ei = (0, r.useStateFromStores)([F.default], () => F.default.getCurrentUser());
  s()(null != ei, "GuildHeaderPopout: user cannot be undefined"), l.useEffect(() => {
    Q.default.track($.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let es = (0, r.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: er,
      canManageChannels: eo,
      showGuildAnalytics: ed,
      isGuildAdmin: eu
    } = (0, r.useStateFromStoresObject)([O.default], () => {
      let e = O.default.can($.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature($.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: O.default.canAccessGuildSettings(t),
        canManageChannels: O.default.can($.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, R.staffOnlyGuildSettingsAccess)(t.id) || e,
        isGuildAdmin: O.default.can($.Permissions.ADMINISTRATOR, t)
      }
    }, [t]),
    ec = (0, b.useCanReportRaid)(t),
    ef = t.isOwner(ei),
    eS = (0, r.useStateFromStores)([v.default], () => v.default.isLurking(t.id), [t.id]),
    eE = (0, r.useStateFromStores)([P.default], () => P.default.isCurrentUserGuest(t.id)),
    ep = (0, L.default)(t.id, !0),
    eT = (0, T.default)(t),
    eI = (0, N.default)({
      source: $.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    em = (0, A.default)({
      guildId: t.id,
      userId: ei.id,
      analyticsLocation: {
        page: $.AnalyticsPages.GUILD_CHANNEL,
        section: $.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: z.default
    }),
    eg = t.hasFeature($.GuildFeatures.HUB),
    e_ = t.id === et.FAVORITES_RAW_GUILD_ID,
    eC = (0, D.default)(t.id),
    eA = (0, _.default)(t),
    eM = (0, C.default)(t),
    eN = (0, M.default)(t, !0),
    {
      isFavoritesPerk: eh
    } = (0, m.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: eb
    } = S.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: ex
    } = f.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    eL = j.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    {
      enableClanCreation: eR
    } = E.ClanGuildExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    [eG] = (0, I.useGetDismissibleContent)([o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    ev = eL && eG === o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return eS || eE ? (0, n.jsx)(d.Menu, {
    onSelect: g,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": ea.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, n.jsx)(d.MenuItem, {
      id: "leave-guild",
      label: ea.default.Messages.LEAVE_SERVER,
      icon: V.default,
      action: () => {
        G.default.leaveGuild(t.id), !eE && (0, y.transitionTo)($.Routes.GUILD_DISCOVERY)
      }
    })
  }) : e_ ? (0, n.jsxs)(d.Menu, {
    onSelect: g,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": ea.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(d.MenuGroup, {
      children: [eh && (0, n.jsx)(d.MenuItem, {
        id: "add-channel",
        label: ea.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: Z.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("29608")]).then(a.bind(a, "178125"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      }), (0, n.jsx)(d.MenuItem, {
        id: "create-category",
        label: ea.default.Messages.CREATE_CATEGORY,
        icon: Y.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, "477782"));
          return t => (0, n.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: ea.default.Messages.HIDE_MUTED_CHANNELS,
        checked: es,
        action: () => u.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : eg ? (0, n.jsxs)(d.Menu, {
    onSelect: g,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": ea.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsxs)(d.MenuGroup, {
      children: [er ? (0, n.jsx)(d.MenuItem, {
        id: "settings",
        label: ea.default.Messages.SERVER_SETTINGS,
        icon: W.default,
        action: () => {
          G.default.open(t.id, $.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eI, (0, n.jsx)(d.MenuItem, {
        id: "privacy",
        label: ea.default.Messages.PRIVACY_SETTINGS,
        icon: J.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), em]
    }), ef ? null : (0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuItem, {
        id: "leave",
        label: ea.default.Messages.LEAVE_HUB,
        icon: V.default,
        color: "danger",
        action: () => el(t)
      })
    })]
  }) : (0, n.jsxs)(d.Menu, {
    onSelect: g,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": ea.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuItem, {
        id: "premium-subscribe",
        label: ea.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: k.default,
        action: () => {
          (0, x.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: $.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [ef && ei.isStaff() && eb ? (0, n.jsx)(d.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: H.default,
        action: () => {
          (0, c.forcePrompt)(t.id, $.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, ef && ei.isStaff() && ex ? (0, n.jsx)(d.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: H.default,
        action: () => {
          (0, c.forcePrompt)(t.id, $.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, eI, er ? (0, n.jsx)(d.MenuItem, {
        id: "settings",
        label: ea.default.Messages.SERVER_SETTINGS,
        icon: W.default,
        action: () => {
          G.default.open(t.id, $.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eu && eR && t.hasFeature($.GuildFeatures.CLAN) ? (0, n.jsx)(d.MenuItem, {
        id: "guild-settings",
        label: ea.default.Messages.CLAN_SETTINGS,
        icon: W.default,
        action: () => (0, X.openFullScreenLayer)(e => {
          let {
            closeLayer: a
          } = e;
          return (0, n.jsx)(p.default, {
            onClose: a,
            guildId: t.id
          })
        }, {
          layerKey: ee.CLAN_SETTINGS_MODAL_LAYER_KEY
        })
      }) : null, ed ? (0, n.jsx)(d.MenuItem, {
        id: "insights",
        label: ea.default.Messages.SERVER_INSIGHTS,
        icon: w.default,
        action: () => G.default.open(t.id, $.GuildSettingsSections.ANALYTICS)
      }) : null, eo ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d.MenuItem, {
          id: "create-channel",
          label: ea.default.Messages.CREATE_CHANNEL,
          icon: Z.default,
          action: () => (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: $.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, n.jsx)(d.MenuItem, {
          id: "create-category",
          label: ea.default.Messages.CREATE_CATEGORY,
          icon: Y.default,
          action: () => (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, n.jsx)(e, {
              ...a,
              channelType: $.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, ep, eA, eM, eT]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [eC, (0, n.jsx)(d.MenuItem, {
        id: "notifications",
        label: (0, n.jsxs)("div", {
          className: en.newBadgeRow,
          children: [ea.default.Messages.NOTIFICATION_SETTINGS, ev && (0, n.jsx)(q.TextBadge, {
            className: en.newBadge,
            text: ea.default.Messages.NEW
          })]
        }),
        icon: ev ? void 0 : B.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("34521")]).then(a.bind(a, "751212"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(d.MenuItem, {
        id: "privacy",
        label: ea.default.Messages.PRIVACY_SETTINGS,
        icon: J.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [em, (0, n.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: ea.default.Messages.HIDE_MUTED_CHANNELS,
        checked: es,
        action: () => u.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [eN, ec && t.isCommunity() ? (0, n.jsx)(d.MenuItem, {
        id: "report-raid",
        label: ea.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: K.default,
        color: "danger",
        action: () => (0, h.openReportRaidModal)(t.id)
      }) : null, ef ? null : (0, n.jsx)(d.MenuItem, {
        id: "leave",
        label: ea.default.Messages.LEAVE_SERVER,
        icon: V.default,
        color: "danger",
        action: () => el(t)
      })]
    })]
  })
});
t.default = ei