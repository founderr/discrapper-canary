t.r(n), t(47120);
var a = t(735250),
  l = t(470079),
  i = t(512722),
  s = t.n(i),
  o = t(442837),
  r = t(704215),
  u = t(481060),
  d = t(5036),
  c = t(553385),
  E = t(52011),
  I = t(890477),
  _ = t(458034),
  g = t(706140),
  M = t(362658),
  A = t(241851),
  N = t(294978),
  T = t(513102),
  h = t(976192),
  f = t(429824),
  L = t(466330),
  C = t(191471),
  Z = t(162157),
  m = t(623624),
  x = t(894059),
  p = t(771212),
  D = t(434404),
  S = t(41776),
  R = t(837949),
  G = t(11352),
  b = t(703656),
  U = t(271383),
  v = t(496675),
  P = t(9156),
  O = t(594174),
  j = t(709586),
  y = t(626135),
  H = t(981631),
  k = t(647086),
  w = t(689938),
  B = t(82587);

function V(e) {
  (0, u.openModal)(n => (0, a.jsx)(A.g, {
    ...n,
    guild: e
  }))
}
let F = l.memo(function(e) {
  let {
    guild: n,
    onClose: i,
    onSelect: A
  } = e, F = (0, o.e7)([O.default], () => O.default.getCurrentUser());
  s()(null != F, "GuildHeaderPopout: user cannot be undefined"), l.useEffect(() => {
    y.default.track(H.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: n.id
    })
  });
  let Y = (0, o.e7)([P.ZP], () => P.ZP.isGuildCollapsed(n.id), [n.id]),
    {
      canAccessSettings: z,
      canManageChannels: K,
      showGuildAnalytics: q
    } = (0, o.cj)([v.Z], () => {
      let e = v.Z.can(H.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(H.oNc.COMMUNITY);
      return {
        canAccessSettings: v.Z.canAccessGuildSettings(n),
        canManageChannels: v.Z.can(H.Plq.MANAGE_CHANNELS, n),
        showGuildAnalytics: (0, p.Fv)(n.id) || e
      }
    }, [n]),
    W = (0, Z.N8)(n),
    X = n.isOwner(F),
    J = (0, o.e7)([S.Z], () => S.Z.isLurking(n.id), [n.id]),
    Q = (0, o.e7)([U.ZP], () => U.ZP.isCurrentUserGuest(n.id)),
    $ = (0, x.Z)(n.id, !0),
    ee = (0, _.ZP)(n),
    en = (0, L.Z)({
      source: H.t4x.GUILD_HEADER,
      guild: n
    }),
    et = (0, h.Z)({
      guildId: n.id,
      userId: F.id,
      analyticsLocation: {
        page: H.ZY5.GUILD_CHANNEL,
        section: H.jXE.GUILD_DROPDOWN_MENU
      },
      icon: u.PencilIcon
    }),
    ea = n.hasFeature(H.oNc.HUB),
    el = n.id === k._,
    ei = (0, R.Z)(n.id),
    es = (0, N.Z)(n),
    eo = (0, T.Z)(n),
    er = (0, f.Z)(n, !0),
    {
      isFavoritesPerk: eu
    } = (0, M.z)("GuildHeaderPopout"),
    {
      triggerDeadchat: ed
    } = I.Z.useExperiment({
      guildId: n.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    {
      triggerGamingStats: ec
    } = E.F.useExperiment({
      guildId: n.id,
      location: "guild header"
    }, {
      autoTrackExposure: !1
    }),
    eE = G.Y.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: !0
    }).enabled,
    [eI] = (0, g.c)([r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    e_ = eE && eI === r.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return J || Q ? (0, a.jsx)(u.Menu, {
    onSelect: A,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: (0, a.jsx)(u.MenuItem, {
      id: "leave-guild",
      label: w.Z.Messages.LEAVE_SERVER,
      icon: u.DoorExitIcon,
      action: () => {
        D.Z.leaveGuild(n.id), !Q && (0, b.uL)(H.Z5c.GUILD_DISCOVERY)
      }
    })
  }) : el ? (0, a.jsxs)(u.Menu, {
    onSelect: A,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, a.jsxs)(u.MenuGroup, {
      children: [eu && (0, a.jsx)(u.MenuItem, {
        id: "add-channel",
        label: w.Z.Messages.FAVORITES_ADD_A_CHANNEL,
        color: "brand",
        icon: u.CirclePlusIcon,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("29608")]).then(t.bind(t, 178125));
          return n => (0, a.jsx)(e, {
            ...n
          })
        })
      }), (0, a.jsx)(u.MenuItem, {
        id: "create-category",
        label: w.Z.Messages.CREATE_CATEGORY,
        icon: u.FolderPlusIcon,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("1812")]).then(t.bind(t, 477782));
          return n => (0, a.jsx)(e, {
            ...n
          })
        })
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: w.Z.Messages.HIDE_MUTED_CHANNELS,
        checked: Y,
        action: () => d.Z.toggleCollapseGuild(n.id)
      })
    })]
  }) : ea ? (0, a.jsxs)(u.Menu, {
    onSelect: A,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, a.jsxs)(u.MenuGroup, {
      children: [z ? (0, a.jsx)(u.MenuItem, {
        id: "settings",
        label: w.Z.Messages.SERVER_SETTINGS,
        icon: u.SettingsIcon,
        action: () => {
          D.Z.open(n.id, H.pNK.OVERVIEW)
        }
      }) : null, en, (0, a.jsx)(u.MenuItem, {
        id: "privacy",
        label: w.Z.Messages.PRIVACY_SETTINGS,
        icon: u.ShieldIcon,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("49237"), t.e("99387"), t.e("96427"), t.e("77298"), t.e("23357"), t.e("19503"), t.e("15972"), t.e("12013"), t.e("6416"), t.e("43906"), t.e("32776"), t.e("95900"), t.e("8016"), t.e("33053"), t.e("68136"), t.e("19464"), t.e("76540"), t.e("4934"), t.e("22646"), t.e("87624"), t.e("5528"), t.e("44517"), t.e("43331"), t.e("30419"), t.e("18824"), t.e("31649"), t.e("35262")]).then(t.bind(t, 241420));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: n
          })
        })
      }), et]
    }), X ? null : (0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "leave",
        label: w.Z.Messages.LEAVE_HUB,
        icon: u.DoorExitIcon,
        color: "danger",
        action: () => V(n)
      })
    })]
  }) : (0, a.jsxs)(u.Menu, {
    onSelect: A,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: i,
    "aria-label": w.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "premium-subscribe",
        label: w.Z.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
        icon: (0, u.makeIconCompat)(j.Z),
        action: () => {
          (0, m.f)({
            guildId: n.id,
            location: {
              section: H.jXE.GUILD_HEADER_POPOUT
            }
          })
        }
      })
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [X && F.isStaff() && ed ? (0, a.jsx)(u.MenuItem, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: u.ChatCheckIcon,
        action: () => {
          (0, c.j8)(n.id, H.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, X && F.isStaff() && ec ? (0, a.jsx)(u.MenuItem, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: u.ChatCheckIcon,
        action: () => {
          (0, c.j8)(n.id, H.uaV.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, en, z ? (0, a.jsx)(u.MenuItem, {
        id: "settings",
        label: w.Z.Messages.SERVER_SETTINGS,
        icon: u.SettingsIcon,
        action: () => {
          D.Z.open(n.id, H.pNK.OVERVIEW)
        }
      }) : null, q ? (0, a.jsx)(u.MenuItem, {
        id: "insights",
        label: w.Z.Messages.SERVER_INSIGHTS,
        icon: u.AnalyticsIcon,
        action: () => D.Z.open(n.id, H.pNK.ANALYTICS)
      }) : null, K ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.MenuItem, {
          id: "create-channel",
          label: w.Z.Messages.CREATE_CHANNEL,
          icon: u.CirclePlusIcon,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("45094")]).then(t.bind(t, 218613));
            return t => (0, a.jsx)(e, {
              ...t,
              channelType: H.d4z.GUILD_TEXT,
              guildId: n.id
            })
          })
        }), (0, a.jsx)(u.MenuItem, {
          id: "create-category",
          label: w.Z.Messages.CREATE_CATEGORY,
          icon: u.FolderPlusIcon,
          action: () => (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("45094")]).then(t.bind(t, 218613));
            return t => (0, a.jsx)(e, {
              ...t,
              channelType: H.d4z.GUILD_CATEGORY,
              guildId: n.id
            })
          })
        })]
      }) : null, $, es, eo, ee]
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [ei, (0, a.jsx)(u.MenuItem, {
        id: "notifications",
        label: (0, a.jsxs)("div", {
          className: B.newBadgeRow,
          children: [w.Z.Messages.NOTIFICATION_SETTINGS, e_ && (0, a.jsx)(u.TextBadge, {
            className: B.newBadge,
            text: w.Z.Messages.NEW
          })]
        }),
        icon: e_ ? void 0 : u.BellIcon,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("5863"), t.e("53497")]).then(t.bind(t, 751212));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: n.id
          })
        })
      }), (0, a.jsx)(u.MenuItem, {
        id: "privacy",
        label: w.Z.Messages.PRIVACY_SETTINGS,
        icon: u.ShieldIcon,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("49237"), t.e("99387"), t.e("96427"), t.e("77298"), t.e("23357"), t.e("19503"), t.e("15972"), t.e("12013"), t.e("6416"), t.e("43906"), t.e("32776"), t.e("95900"), t.e("8016"), t.e("33053"), t.e("68136"), t.e("19464"), t.e("76540"), t.e("4934"), t.e("22646"), t.e("87624"), t.e("5528"), t.e("44517"), t.e("43331"), t.e("30419"), t.e("18824"), t.e("31649"), t.e("35262")]).then(t.bind(t, 241420));
          return t => (0, a.jsx)(e, {
            ...t,
            guild: n
          })
        })
      })]
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [et, (0, a.jsx)(u.MenuCheckboxItem, {
        id: "hide-muted-channels",
        label: w.Z.Messages.HIDE_MUTED_CHANNELS,
        checked: Y,
        action: () => d.Z.toggleCollapseGuild(n.id)
      })]
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [er, W && n.isCommunity() ? (0, a.jsx)(u.MenuItem, {
        id: "report-raid",
        label: w.Z.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
        icon: u.ShieldIcon,
        color: "danger",
        action: () => (0, C.J)(n.id)
      }) : null, X ? null : (0, a.jsx)(u.MenuItem, {
        id: "leave",
        label: w.Z.Messages.LEAVE_SERVER,
        icon: u.DoorExitIcon,
        color: "danger",
        action: () => V(n)
      })]
    })]
  })
});
n.default = F