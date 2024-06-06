"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  i = a("512722"),
  s = a.n(i),
  d = a("442837"),
  u = a("704215"),
  r = a("481060"),
  o = a("5036"),
  c = a("553385"),
  f = a("52011"),
  I = a("890477"),
  E = a("458034"),
  _ = a("706140"),
  A = a("362658"),
  g = a("241851"),
  h = a("294978"),
  M = a("513102"),
  S = a("976192"),
  p = a("429824"),
  T = a("466330"),
  m = a("191471"),
  R = a("162157"),
  x = a("623624"),
  C = a("894059"),
  L = a("771212"),
  N = a("434404"),
  G = a("41776"),
  D = a("837949"),
  v = a("11352"),
  b = a("703656"),
  y = a("271383"),
  j = a("496675"),
  U = a("9156"),
  O = a("594174"),
  P = a("825185"),
  H = a("808602"),
  F = a("386103"),
  w = a("632310"),
  V = a("615814"),
  B = a("937482"),
  k = a("709586"),
  Y = a("185403"),
  z = a("151785"),
  W = a("288176"),
  Z = a("833571"),
  K = a("26290"),
  X = a("626135"),
  J = a("981631"),
  q = a("647086"),
  Q = a("689938"),
  $ = a("41327");

function ee(e) {
  (0, r.openModal)(t => (0, l.jsx)(g.GuildLeaveConfirmModalContents, {
    ...t,
    guild: e
  }))
}
let et = n.memo(function(e) {
  let {
    guild: t,
    onClose: i,
    onSelect: g
  } = e, et = (0, d.useStateFromStores)([O.default], () => O.default.getCurrentUser());
  s()(null != et, "GuildHeaderPopout: user cannot be undefined"), n.useEffect(() => {
    X.default.track(J.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let ea = (0, d.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: el,
      canManageChannels: en,
      showGuildAnalytics: ei
    } = (0, d.useStateFromStoresObject)([j.default], () => {
      let e = j.default.can(J.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(J.GuildFeatures.COMMUNITY);
      return {
        canAccessSettings: j.default.canAccessGuildSettings(t),
        canManageChannels: j.default.can(J.Permissions.MANAGE_CHANNELS, t),
        showGuildAnalytics: (0, L.staffOnlyGuildSettingsAccess)(t.id) || e
      }
    }, [t]),
    es = (0, R.useCanReportRaid)(t),
    ed = t.isOwner(et),
    eu = (0, d.useStateFromStores)([G.default], () => G.default.isLurking(t.id), [t.id]),
    er = (0, d.useStateFromStores)([y.default], () => y.default.isCurrentUserGuest(t.id)),
    eo = (0, C.default)(t.id, !0),
    ec = (0, E.default)(t),
    ef = (0, T.default)({
      source: J.InstantInviteSources.GUILD_HEADER,
      guild: t
    }),
    eI = (0, S.default)({
      guildId: t.id,
      userId: et.id,
      analyticsLocation: {
        page: J.AnalyticsPages.GUILD_CHANNEL,
        section: J.AnalyticsSections.GUILD_DROPDOWN_MENU
      },
      icon: Y.default
    }),
    eE = t.hasFeature(J.GuildFeatures.HUB),
    e_ = t.id === q.FAVORITES_RAW_GUILD_ID,
    eA = (0, D.default)(t.id),
    eg = (0, h.default)(t),
    eh = (0, M.default)(t),
    eM = (0, p.default)(t, !0),
    {
      isFavoritesPerk: eS
    } = (0, A.useFavoritesServerExperiment)("GuildHeaderPopout"),
    {
      triggerDeadchat: ep
    } = I.SimpleDeadchatPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: eT
    } = f.GamingStatsPromptExperiment.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    em = v.CustomNotificationSoundExperiment.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [eR] = (0, _.useGetDismissibleContent)([u.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    ex = em && eR === u.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return eu || er ? (0, l.jsx)(r.Menu, {
    onSelect: g,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, l.jsx)(r.MenuItem, {
      id: "leave-guild",
      label: Q.default.Messages.LEAVE_SERVER,
      icon: w.default,
      action: () => {
        N.default.leaveGuild(t.id), !er && (0, b.transitionTo)(J.Routes.GUILD_DISCOVERY)
      }
    })
  }) : e_ ? (0, l.jsxs)(r.Menu, {
    onSelect: g,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, l.jsxs)(r.MenuGroup, {
      children: [eS && (0, l.jsx)(r.MenuItem, {
        id: "add-channel",
        label: Q.default.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: z.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("29608")]).then(a.bind(a, "178125"));
          return t => (0, l.jsx)(e, {
            ...t
          })
        })
      }), (0, l.jsx)(r.MenuItem, {
        id: "create-category",
        label: Q.default.Messages.CREATE_CATEGORY,
        icon: V.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, "477782"));
          return t => (0, l.jsx)(e, {
            ...t
          })
        })
      })]
    }), (0, l.jsx)(r.MenuGroup, {
      children: (0, l.jsx)(r.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: Q.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ea,
        action: () => o.default.toggleCollapseGuild(t.id)
      })
    })]
  }) : eE ? (0, l.jsxs)(r.Menu, {
    onSelect: g,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, l.jsxs)(r.MenuGroup, {
      children: [el ? (0, l.jsx)(r.MenuItem, {
        id: "settings",
        label: Q.default.Messages.SERVER_SETTINGS,
        icon: B.default,
        action: () => {
          N.default.open(t.id, J.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ef, (0, l.jsx)(r.MenuItem, {
        id: "privacy",
        label: Q.default.Messages.PRIVACY_SETTINGS,
        icon: Z.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
          return a => (0, l.jsx)(e, {
            ...a,
            guild: t
          })
        })
      }), eI]
    }), ed ? null : (0, l.jsx)(r.MenuGroup, {
      children: (0, l.jsx)(r.MenuItem, {
        id: "leave",
        label: Q.default.Messages.LEAVE_HUB,
        icon: w.default,
        color: "danger",
        action: () => ee(t)
      })
    })]
  }) : (0, l.jsxs)(r.Menu, {
    onSelect: g,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": Q.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(r.MenuGroup, {
      children: (0, l.jsx)(r.MenuItem, {
        id: "premium-subscribe",
        label: Q.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: k.default,
        action: () => {
          (0, x.openGuildBoostingMarketingModal)({
            guildId: t.id,
            location: {
              section: J.AnalyticsSections.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, l.jsxs)(r.MenuGroup, {
      children: [ed && et.isStaff() && ep ? (0, l.jsx)(r.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: F.default,
        action: () => {
          (0, c.forcePrompt)(t.id, J.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, ed && et.isStaff() && eT ? (0, l.jsx)(r.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: F.default,
        action: () => {
          (0, c.forcePrompt)(t.id, J.MessageTypes.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, ef, el ? (0, l.jsx)(r.MenuItem, {
        id: "settings",
        label: Q.default.Messages.SERVER_SETTINGS,
        icon: B.default,
        action: () => {
          N.default.open(t.id, J.GuildSettingsSections.OVERVIEW)
        }
      }) : null, ei ? (0, l.jsx)(r.MenuItem, {
        id: "insights",
        label: Q.default.Messages.SERVER_INSIGHTS,
        icon: P.default,
        action: () => N.default.open(t.id, J.GuildSettingsSections.ANALYTICS)
      }) : null, en ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(r.MenuItem, {
          id: "create-channel",
          label: Q.default.Messages.CREATE_CHANNEL,
          icon: z.default,
          action: () => (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, l.jsx)(e, {
              ...a,
              channelType: J.ChannelTypes.GUILD_TEXT,
              guildId: t.id
            })
          })
        }), (0, l.jsx)(r.MenuItem, {
          id: "create-category",
          label: Q.default.Messages.CREATE_CATEGORY,
          icon: V.default,
          action: () => (0, r.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
            return a => (0, l.jsx)(e, {
              ...a,
              channelType: J.ChannelTypes.GUILD_CATEGORY,
              guildId: t.id
            })
          })
        })]
      }) : null, eo, eg, eh, ec]
    }), (0, l.jsxs)(r.MenuGroup, {
      children: [eA, (0, l.jsx)(r.MenuItem, {
        id: "notifications",
        label: (0, l.jsxs)("div", {
          className: $.newBadgeRow,
          children: [Q.default.Messages.NOTIFICATION_SETTINGS, ex && (0, l.jsx)(K.TextBadge, {
            className: $.newBadge,
            text: Q.default.Messages.NEW
          })]
        }),
        icon: ex ? void 0 : H.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("29041")]).then(a.bind(a, "751212"));
          return a => (0, l.jsx)(e, {
            ...a,
            guildId: t.id
          })
        })
      }), (0, l.jsx)(r.MenuItem, {
        id: "privacy",
        label: Q.default.Messages.PRIVACY_SETTINGS,
        icon: Z.default,
        action: () => (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("59500")]).then(a.bind(a, "241420"));
          return a => (0, l.jsx)(e, {
            ...a,
            guild: t
          })
        })
      })]
    }), (0, l.jsxs)(r.MenuGroup, {
      children: [eI, (0, l.jsx)(r.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: Q.default.Messages.HIDE_MUTED_CHANNELS,
        checked: ea,
        action: () => o.default.toggleCollapseGuild(t.id)
      })]
    }), (0, l.jsxs)(r.MenuGroup, {
      children: [eM, es && t.isCommunity() ? (0, l.jsx)(r.MenuItem, {
        id: "report-raid",
        label: Q.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: W.default,
        color: "danger",
        action: () => (0, m.openReportRaidModal)(t.id)
      }) : null, ed ? null : (0, l.jsx)(r.MenuItem, {
        id: "leave",
        label: Q.default.Messages.LEAVE_SERVER,
        icon: w.default,
        color: "danger",
        action: () => ee(t)
      })]
    })]
  })
});
t.default = et