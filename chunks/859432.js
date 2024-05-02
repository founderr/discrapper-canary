"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("512722"),
  i = a.n(l),
  r = a("442837"),
  o = a("524437"),
  d = a("481060"),
  u = a("5036"),
  c = a("553385"),
  S = a("52011"),
  f = a("890477"),
  E = a("963202"),
  T = a("593128"),
  p = a("458034"),
  I = a("706140"),
  g = a("362658"),
  m = a("241851"),
  _ = a("294978"),
  C = a("513102"),
  A = a("976192"),
  M = a("429824"),
  N = a("466330"),
  h = a("191471"),
  x = a("162157"),
  L = a("623624"),
  b = a("894059"),
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
  B = a("825185"),
  w = a("808602"),
  H = a("386103"),
  V = a("632310"),
  Y = a("615814"),
  W = a("937482"),
  k = a("709586"),
  z = a("185403"),
  Z = a("151785"),
  K = a("288176"),
  q = a("833571"),
  J = a("725568"),
  Q = a("26290"),
  X = a("626135"),
  $ = a("981631"),
  ee = a("308083"),
  et = a("647086"),
  ea = a("689938"),
  en = a("653938");

function es(e) {
  (0, d.openModal)(t => (0, n.jsx)(m.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let el = s.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: m
  } = e, el = (0, r.useStateFromStores)([F.default], () => F.default.getCurrentUser());
  i()(null != el, "GuildHeaderPopout: user cannot be undefined"), s.useEffect(() => {
    X.default.track($.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let ei = (0, r.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
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
    ec = (0, x.useCanReportRaid)(t),
    eS = t.isOwner(el),
    ef = (0, r.useStateFromStores)([v.default], () => v.default.isLurking(t.id), [t.id]),
    eE = (0, r.useStateFromStores)([P.default], () => P.default.isCurrentUserGuest(t.id)),
    eT = (0, b.default)(t.id, !0),
    ep = (0, p.default)(t),
    eI = (0, N.default)({
      source: $.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eg = (0, A.default)({
      guildId: t.id,
      userId: el.id,
      analyticsLocation: {
        page: $.AnalyticsPages.GUILD_CHANNEL,
        section: $.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: z.default
    }),
    em = t.hasFeature($.GuildFeatures.HUB),
    e_ = t.id === et.FAVORITES_RAW_GUILD_ID,
    eC = (0, D.default)(t.id),
    eA = (0, _.default)(t),
    eM = (0, C.default)(t),
    eN = (0, M.default)(t, !0),
    {
      isFavoritesPerk: eh
    } = (0, g.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: ex
    } = f.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eL
    } = S.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    eb = j.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    {
      enableClanCreation: eR
    } = (0, E.useClanGuildExperiment)(t, "guild header"),
    [eG] = (0, I.useGetDismissibleContent)([o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    ev = eb && eG === o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return ef || eE ? (0, n.jsx)(d.Menu, {
    onSelect: m,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
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
    onSelect: m,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
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
        checked: ei,
        action: () => u.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : em ? (0, n.jsxs)(d.Menu, {
    onSelect: m,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
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
        icon: q.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("88408")]).then(a.bind(a, "241420"));
          return a => (0, n.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), eg]
    }), eS ? null : (0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuItem, {
        id: "leave",
        label: ea.default.Messages.LEAVE_HUB,
        icon: V.default,
        color: "danger",
        action: () => es(t)
      })
    })]
  }) : (0, n.jsxs)(d.Menu, {
    onSelect: m,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": ea.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, n.jsx)(d.MenuGroup, {
      children: (0, n.jsx)(d.MenuItem, {
        id: "premium-subscribe",
        label: ea.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: k.default,
        action: () => {
          (0, L.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: $.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [eS && el.isStaff() && ex ? (0, n.jsx)(d.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: H.default,
        action: () => {
          (0, c.forcePrompt)(t.id, $.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, eS && el.isStaff() && eL ? (0, n.jsx)(d.MenuItem, {
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
        action: () => (0, J.openFullScreenLayer)(e => {
          let {
            closeLayer: a
          } = e;
          return (0, n.jsx)(T.default, {
            onClose: a,
            guildId: t.id
          })
        }, {
          layerKey: ee.CLAN_SETTINGS_MODAL_LAYER_KEY
        })
      }) : null, ed ? (0, n.jsx)(d.MenuItem, {
        id: "insights",
        label: ea.default.Messages.SERVER_INSIGHTS,
        icon: B.default,
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
      }) : null, eT, eA, eM, ep]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [eC, (0, n.jsx)(d.MenuItem, {
        id: "notifications",
        label: (0, n.jsxs)("div", {
          className: en.newBadgeRow,
          children: [ea.default.Messages.NOTIFICATION_SETTINGS, ev && (0, n.jsx)(Q.TextBadge, {
            className: en.newBadge,
            text: ea.default.Messages.NEW
          })]
        }),
        icon: ev ? void 0 : w.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("29041")]).then(a.bind(a, "751212"));
          return a => (0, n.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, n.jsx)(d.MenuItem, {
        id: "privacy",
        label: ea.default.Messages.PRIVACY_SETTINGS,
        icon: q.default,
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
      children: [eg, (0, n.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: ea.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ei,
        action: () => u.default.toggleCollapseGuild(t.id)
      })]
    }), (0, n.jsxs)(d.MenuGroup, {
      children: [eN, ec && t.isCommunity() ? (0, n.jsx)(d.MenuItem, {
        id: "report-raid",
        label: ea.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: K.default,
        color: "danger",
        action: () => (0, h.openReportRaidModal)(t.id)
      }) : null, eS ? null : (0, n.jsx)(d.MenuItem, {
        id: "leave",
        label: ea.default.Messages.LEAVE_SERVER,
        icon: V.default,
        color: "danger",
        action: () => es(t)
      })]
    })]
  })
});
t.default = el