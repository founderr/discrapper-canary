"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("442837"),
  o = n("524437"),
  d = n("481060"),
  u = n("5036"),
  c = n("553385"),
  f = n("52011"),
  S = n("890477"),
  E = n("134726"),
  p = n("593128"),
  m = n("458034"),
  I = n("706140"),
  g = n("362658"),
  T = n("241851"),
  C = n("294978"),
  _ = n("513102"),
  A = n("976192"),
  M = n("429824"),
  h = n("466330"),
  N = n("191471"),
  x = n("162157"),
  b = n("623624"),
  R = n("894059"),
  L = n("771212"),
  v = n("434404"),
  G = n("41776"),
  D = n("837949"),
  j = n("11352"),
  y = n("703656"),
  P = n("271383"),
  O = n("496675"),
  U = n("9156"),
  F = n("594174"),
  B = n("825185"),
  w = n("808602"),
  H = n("386103"),
  V = n("632310"),
  Y = n("615814"),
  k = n("937482"),
  W = n("709586"),
  z = n("185403"),
  Z = n("151785"),
  K = n("288176"),
  X = n("833571"),
  q = n("725568"),
  J = n("26290"),
  Q = n("626135"),
  $ = n("981631"),
  ee = n("308083"),
  et = n("647086"),
  en = n("689938"),
  ea = n("515706");

function el(e) {
  (0, d.openModal)(t => (0, a.jsx)(T.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let es = l.memo(function(e) {
  let {
    guild: t,
    onClose: s,
    onSelect: T
  } = e, es = (0, r.useStateFromStores)([F.default], () => F.default.getCurrentUser());
  i()(null != es, "GuildHeaderPopout: user cannot be undefined"), l.useEffect(() => {
    Q.default.track($.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
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
        showGuildAnalytics: (0, L.staffOnlyGuildSettingsAccess)(t.id) || e,
        isGuildAdmin: O.default.can($.Permissions.ADMINISTRATOR, t)
      }
    }, [t]),
    ec = (0, x.useCanReportRaid)(t),
    ef = t.isOwner(es),
    eS = (0, r.useStateFromStores)([G.default], () => G.default.isLurking(t.id), [t.id]),
    eE = (0, r.useStateFromStores)([P.default], () => P.default.isCurrentUserGuest(t.id)),
    ep = (0, R.default)(t.id, !0),
    em = (0, m.default)(t),
    eI = (0, h.default)({
      source: $.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eg = (0, A.default)({
      guildId: t.id,
      userId: es.id,
      analyticsLocation: {
        page: $.AnalyticsPages.GUILD_CHANNEL,
        section: $.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: z.default
    }),
    eT = t.hasFeature($.GuildFeatures.HUB),
    eC = t.id === et.FAVORITES_RAW_GUILD_ID,
    e_ = (0, D.default)(t.id),
    eA = (0, C.default)(t),
    eM = (0, _.default)(t),
    eh = (0, M.default)(t, !0),
    {
      isFavoritesPerk: eN
    } = (0, g.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: ex
    } = S.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eb
    } = f.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    eR = j.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    {
      enableClanCreation: eL
    } = E.ClanGuildExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    [ev] = (0, I.useGetDismissibleContent)([o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    eG = eR && ev === o.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return eS || eE ? (0, a.jsx)(d.Menu, {
    onSelect: T,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: s,
    "aria-label": en.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, a.jsx)(d.MenuItem, {
      id: "leave-guild",
      label: en.default.Messages.LEAVE_SERVER,
      icon: V.default,
      action: () => {
        v.default.leaveGuild(t.id), !eE && (0, y.transitionTo)($.Routes.GUILD_DISCOVERY)
      }
    })
  }) : eC ? (0, a.jsxs)(d.Menu, {
    onSelect: T,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: s,
    "aria-label": en.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, a.jsxs)(d.MenuGroup, {
      children: [eN && (0, a.jsx)(d.MenuItem, {
        id: "add-channel",
        label: en.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: Z.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("29608")]).then(n.bind(n, "178125"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      }), (0, a.jsx)(d.MenuItem, {
        id: "create-category",
        label: en.default.Messages.CREATE_CATEGORY,
        icon: Y.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("1812")]).then(n.bind(n, "477782"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, a.jsx)(d.MenuGroup, {
      children: (0, a.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: en.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ei,
        action: () => u.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : eT ? (0, a.jsxs)(d.Menu, {
    onSelect: T,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: s,
    "aria-label": en.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, a.jsxs)(d.MenuGroup, {
      children: [er ? (0, a.jsx)(d.MenuItem, {
        id: "settings",
        label: en.default.Messages.SERVER_SETTINGS,
        icon: k.default,
        action: () => {
          v.default.open(t.id, $.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eI, (0, a.jsx)(d.MenuItem, {
        id: "privacy",
        label: en.default.Messages.PRIVACY_SETTINGS,
        icon: X.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("88408")]).then(n.bind(n, "241420"));
          return n => (0, a.jsx)(e, {
            ...n,
            guild: t
          })
        })
      }), eg]
    }), ef ? null : (0, a.jsx)(d.MenuGroup, {
      children: (0, a.jsx)(d.MenuItem, {
        id: "leave",
        label: en.default.Messages.LEAVE_HUB,
        icon: V.default,
        color: "danger",
        action: () => el(t)
      })
    })]
  }) : (0, a.jsxs)(d.Menu, {
    onSelect: T,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: s,
    "aria-label": en.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, a.jsx)(d.MenuGroup, {
      children: (0, a.jsx)(d.MenuItem, {
        id: "premium-subscribe",
        label: en.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: W.default,
        action: () => {
          (0, b.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: $.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, a.jsxs)(d.MenuGroup, {
      children: [ef && es.isStaff() && ex ? (0, a.jsx)(d.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: H.default,
        action: () => {
          (0, c.forcePrompt)(t.id, $.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, ef && es.isStaff() && eb ? (0, a.jsx)(d.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: H.default,
        action: () => {
          (0, c.forcePrompt)(t.id, $.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, eI, er ? (0, a.jsx)(d.MenuItem, {
        id: "settings",
        label: en.default.Messages.SERVER_SETTINGS,
        icon: k.default,
        action: () => {
          v.default.open(t.id, $.GuildSettingsSections.OVERVIEW)
        }
      }) : null, eu && eL && t.hasFeature($.GuildFeatures.CLAN) ? (0, a.jsx)(d.MenuItem, {
        id: "guild-settings",
        label: en.default.Messages.CLAN_SETTINGS,
        icon: k.default,
        action: () => (0, q.openFullScreenLayer)(e => {
          let {
            closeLayer: n
          } = e;
          return (0, a.jsx)(p.default, {
            onClose: n,
            guildId: t.id
          })
        }, {
          layerKey: ee.CLAN_SETTINGS_MODAL_LAYER_KEY
        })
      }) : null, ed ? (0, a.jsx)(d.MenuItem, {
        id: "insights",
        label: en.default.Messages.SERVER_INSIGHTS,
        icon: B.default,
        action: () => v.default.open(t.id, $.GuildSettingsSections.ANALYTICS)
      }) : null, eo ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.MenuItem, {
          id: "create-channel",
          label: en.default.Messages.CREATE_CHANNEL,
          icon: Z.default,
          action: () => (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("45094"), n.e("36494")]).then(n.bind(n, "218613"));
            return n => (0, a.jsx)(e, {
              ...n,
              channelType: $.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, a.jsx)(d.MenuItem, {
          id: "create-category",
          label: en.default.Messages.CREATE_CATEGORY,
          icon: Y.default,
          action: () => (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("45094"), n.e("36494")]).then(n.bind(n, "218613"));
            return n => (0, a.jsx)(e, {
              ...n,
              channelType: $.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, ep, eA, eM, em]
    }), (0, a.jsxs)(d.MenuGroup, {
      children: [e_, (0, a.jsx)(d.MenuItem, {
        id: "notifications",
        label: (0, a.jsxs)("div", {
          className: ea.newBadgeRow,
          children: [en.default.Messages.NOTIFICATION_SETTINGS, eG && (0, a.jsx)(J.TextBadge, {
            className: ea.newBadge,
            text: en.default.Messages.NEW
          })]
        }),
        icon: eG ? void 0 : w.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("5863"), n.e("34521")]).then(n.bind(n, "751212"));
          return n => (0, a.jsx)(e, {
            ...n,
            guildId: t.id
          })
        })
      }), (0, a.jsx)(d.MenuItem, {
        id: "privacy",
        label: en.default.Messages.PRIVACY_SETTINGS,
        icon: X.default,
        action: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("88408")]).then(n.bind(n, "241420"));
          return n => (0, a.jsx)(e, {
            ...n,
            guild: t
          })
        })
      })]
    }), (0, a.jsxs)(d.MenuGroup, {
      children: [eg, (0, a.jsx)(d.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: en.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ei,
        action: () => u.default.toggleCollapseGuild(t.id)
      })]
    }), (0, a.jsxs)(d.MenuGroup, {
      children: [eh, ec && t.isCommunity() ? (0, a.jsx)(d.MenuItem, {
        id: "report-raid",
        label: en.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: K.default,
        color: "danger",
        action: () => (0, N.openReportRaidModal)(t.id)
      }) : null, ef ? null : (0, a.jsx)(d.MenuItem, {
        id: "leave",
        label: en.default.Messages.LEAVE_SERVER,
        icon: V.default,
        color: "danger",
        action: () => el(t)
      })]
    })]
  })
});
t.default = es