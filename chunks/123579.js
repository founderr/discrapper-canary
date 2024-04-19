"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("232567"),
  f = n("410030"),
  h = n("100527"),
  m = n("906732"),
  p = n("963202"),
  E = n("369077"),
  C = n("574176"),
  g = n("556084"),
  S = n("422677"),
  _ = n("911367"),
  T = n("761174"),
  I = n("199902"),
  A = n("314897"),
  v = n("592125"),
  N = n("496675"),
  x = n("158776"),
  M = n("246946"),
  R = n("594174"),
  L = n("979651"),
  y = n("5192"),
  O = n("51144"),
  j = n("342656"),
  P = n("785717"),
  D = n("221292"),
  b = n("621853"),
  U = n("895618"),
  F = n("484459"),
  w = n("318661"),
  k = n("57048"),
  H = n("87728"),
  B = n("502762"),
  G = n("421486"),
  V = n("347949"),
  W = n("240328"),
  Y = n("436478"),
  z = n("138394"),
  K = n("248345"),
  Z = n("19836"),
  q = n("538564"),
  X = n("319300"),
  Q = n("591600"),
  J = n("584045"),
  $ = n("58307"),
  ee = n("664202"),
  et = n("520858"),
  en = n("772056"),
  ea = n("281172"),
  el = n("50333"),
  es = n("747711"),
  ei = n("228168"),
  er = n("981631"),
  eo = n("689938"),
  eu = n("859138");
t.default = e => {
  var t;
  let {
    channel: n,
    showCall: s
  } = e, r = n.recipients[0], [ed, ec] = l.useState(!1), ef = l.useRef(0), eh = (0, H.default)(), {
    analyticsLocations: em
  } = (0, m.default)(h.default.PROFILE_PANEL);
  (0, _.useFetchProfileEffects)();
  let ep = (0, u.useStateFromStores)([R.default], () => R.default.getUser(r)),
    eE = null == ep ? void 0 : ep.isNonUserBot();
  o()(null != ep, "Profile Panel: user cannot be undefined");
  let eC = (0, w.default)(ep.id),
    {
      installedIntegrations: eg,
      fetched: eS,
      appsInGDMEnabled: e_,
      availableApplications: eT
    } = (0, g.usePrivateChannelIntegrationState)({
      channelId: n.id
    }),
    eI = !eh && !s,
    eA = (0, u.useStateFromStores)([L.default, v.default], () => {
      var e;
      return null != ep ? v.default.getChannel(null === (e = L.default.getVoiceStateForUser(ep.id)) || void 0 === e ? void 0 : e.channelId) : null
    }),
    {
      enableHangStatus: ev
    } = C.HangStatusExperiment.useExperiment({
      guildId: null == eA ? void 0 : eA.guild_id,
      location: "ActivityStatus"
    }, {
      autoTrackExposure: !1
    }),
    {
      activity: eN,
      customStatusActivity: ex,
      isApplicationStreaming: eM,
      isMobile: eR,
      status: eL,
      hangStatusActivity: ey,
      isHangStatusPrimaryActivity: eO
    } = (0, u.useStateFromStoresObject)([I.default, x.default, N.default], () => {
      var e;
      let t = null != I.default.getAnyStreamForUser(ep.id);
      return {
        activity: x.default.findActivity(ep.id, e => {
          let {
            type: n
          } = e;
          return t ? n === er.ActivityTypes.PLAYING : n !== er.ActivityTypes.CUSTOM_STATUS && n !== er.ActivityTypes.HANG_STATUS
        }),
        customStatusActivity: x.default.findActivity(ep.id, e => {
          let {
            type: t
          } = e;
          return t === er.ActivityTypes.CUSTOM_STATUS
        }),
        isApplicationStreaming: t,
        isMobile: x.default.isMobileOnline(ep.id),
        status: eE ? null : x.default.getStatus(ep.id),
        isHangStatusPrimaryActivity: (null === (e = x.default.findActivity(ep.id, e => {
          let {
            type: n
          } = e;
          return t ? n === er.ActivityTypes.PLAYING : n !== er.ActivityTypes.CUSTOM_STATUS
        })) || void 0 === e ? void 0 : e.type) === er.ActivityTypes.HANG_STATUS,
        hangStatusActivity: ev && null != eA && N.default.can(er.Permissions.CONNECT, eA) ? x.default.findActivity(ep.id, e => {
          let {
            type: t
          } = e;
          return t === er.ActivityTypes.HANG_STATUS
        }) : null
      }
    }),
    ej = null != eN || null != ey || eM,
    eP = null !== (t = y.default.getNickname(null, n.id, ep)) && void 0 !== t ? t : O.default.getName(ep),
    eD = (0, u.useStateFromStores)([M.default], () => M.default.hidePersonalInformation),
    [eb, eU, eF, ew, ek] = (0, u.useStateFromStoresArray)([b.default], () => [b.default.getMutualFriendsCount(ep.id), b.default.getMutualFriends(ep.id), b.default.getMutualGuilds(ep.id), b.default.isFetchingProfile(ep.id), b.default.isFetchingFriends(ep.id)]),
    eH = (0, $.useGetVoiceChannelInfoForVoiceActivitySection)(ep.id),
    eB = null != eH && !eM && !eO,
    {
      showVoiceActivityInProfile: eG
    } = U.VoiceActivityProfileExperiment.useExperiment({
      location: "user DM panel"
    }, {
      autoTrackExposure: eB && eI
    }),
    eV = !ep.bot && null != eF && eF.length > 0,
    eW = !ep.bot && null != eb && eb > 0,
    eY = (0, ee.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: ep,
      source: Y.UserPopoutUpsellSource.PROFILE_PANEL
    }),
    ez = (0, f.default)();
  l.useEffect(() => {
    ef.current = Date.now()
  }, []), l.useEffect(() => {
    (0, F.maybeFetchUserProfileForPopout)(ep, {
      withMutualGuilds: !ep.bot,
      withMutualFriendsCount: !ep.bot
    })
  }, [ep]), l.useEffect(() => {
    null != eC && eI && (0, k.trackProfilePanelViewed)({
      displayProfile: eC,
      isMobile: eR,
      loadDurationMs: Date.now() - ef.current,
      activity: eN,
      customStatusActivity: ex,
      status: eL
    })
  }, [eC, eR, eN, ex, eL, eI]);
  let eK = null == eF ? void 0 : eF.map(e => (0, a.jsx)(el.default, {
      connection: e,
      user: ep,
      theme: ez
    }, e.guild.id)),
    eZ = null == eU ? void 0 : eU.map(e => (0, a.jsx)(ea.default, {
      connection: e,
      channelId: n.id
    }, e.key)),
    eq = eg.map(e => (0, a.jsx)(et.default, {
      channel: n,
      integration: e
    }, e.application.id)),
    eX = l.useCallback(() => {
      !ep.bot && !ek && null == eZ && (0, c.fetchMutualFriends)(ep.id)
    }, [ek, eZ, ep.id, ep.bot]),
    eQ = l.useCallback(() => ec(!0), []),
    eJ = l.useCallback(() => ec(!1), []),
    e$ = (0, u.useStateFromStores)([A.default], () => A.default.getId()),
    e0 = ep.id === e$,
    e1 = ep.bot || e0,
    {
      enabled: e2
    } = (0, j.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: h.default.PROFILE,
      disable: e1
    }),
    e4 = (0, T.useIsUserRecentGamesEnabled)({
      userId: ep.id,
      location: "28tk0bf_2"
    }),
    e3 = (0, p.useIsInUserClanExperiment)();
  return eI ? (0, a.jsx)(m.AnalyticsLocationProvider, {
    value: em,
    children: (0, a.jsx)(P.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: ep.id,
      channelId: n.id,
      children: (0, a.jsx)("aside", {
        className: eu.profilePanel,
        onMouseEnter: eQ,
        onMouseLeave: eJ,
        children: (0, a.jsxs)(B.default, {
          user: ep,
          displayProfile: eC,
          profileType: ei.UserProfileTypes.PANEL,
          themeOverride: ez,
          children: [eY.shouldShow && (0, a.jsx)(W.default, {
            user: ep,
            upsellSource: Y.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: eC,
            isInSidebar: !0,
            ...eY
          }, ep.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(es.default, {
              user: ep,
              displayProfile: eC,
              channel: n,
              animateAssets: ed,
              forceShowPremiumBadge: ed
            }), (0, a.jsxs)(B.default.Overlay, {
              children: [(0, a.jsx)(J.default, {
                user: ep,
                nickname: eP,
                pronouns: null == eC ? void 0 : eC.pronouns
              }), (0, a.jsx)(q.default, {
                customStatusActivity: ex,
                animate: ed
              }), (0, a.jsx)(z.default, {}), (0, a.jsx)(Z.default, {
                bio: null == eC ? void 0 : eC.bio,
                hidePersonalInformation: eD,
                animateOnHover: !0,
                isHovering: ed
              }), e3 && (0, a.jsx)(E.UserProfileClanSection, {
                userId: r
              }), e2 && (0, a.jsx)(G.default, {
                className: eu.profileMutuals,
                user: ep
              }), !ep.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(X.default, {
                  userId: r
                }), (0, a.jsx)(z.default, {})]
              }), (0, a.jsx)(Q.default, {
                user: ep,
                setNote: !1
              })]
            }), eG && eB ? (0, a.jsx)(B.default.Overlay, {
              children: (0, a.jsx)($.default, {
                voiceGuild: eH.voiceGuild,
                voiceChannel: eH.voiceChannel,
                color: eu.appButtonColor
              })
            }) : null, ej ? (0, a.jsx)(B.default.Overlay, {
              children: (0, a.jsx)(K.default, {
                activity: null != eN ? eN : ey,
                user: ep,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: er.AnalyticsPages.USER_PROFILE,
                    section: er.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, e4 && (0, a.jsx)(V.UserProfileRecentGamesThemedSection, {
              userId: r
            }), (eV || eW) && (0, a.jsxs)(B.default.Overlay, {
              className: eu.profilePanelConnections,
              children: [eV ? (0, a.jsx)(en.default, {
                className: eu.mutualGuildsList,
                header: eo.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == eF ? void 0 : eF.length
                }),
                isLoadingHeader: ew,
                onExpand: () => {
                  (0, D.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: ep.id,
                    channelId: n.id,
                    analyticsLocations: em
                  })
                },
                children: eK
              }) : null, eW ? (0, a.jsx)(en.default, {
                className: i()(eu.mutualFriendsList, {
                  [eu.mutualFriendsDivider]: eV
                }),
                header: eo.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eb
                }),
                isLoadingHeader: ew,
                isLoadingContents: ek,
                loadingContentsCount: eb,
                onFocus: eX,
                onHover: eX,
                itemType: en.ListType.MutualFriendsList,
                onExpand: () => {
                  (0, D.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: ep.id,
                    channelId: n.id,
                    analyticsLocations: em
                  })
                },
                children: eZ
              }) : null]
            }), e_ && (0, a.jsx)(B.default.Overlay, {
              className: i()(eu.profilePanelConnections, eu.appListThemedContainer),
              children: (0, a.jsxs)(en.default, {
                header: eq.length > 0 ? eo.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eq.length
                }) : eo.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !eS,
                isLoadingHeader: !1,
                itemType: en.ListType.AppsList,
                children: [eq, eT.length > 0 && (0, a.jsxs)("div", {
                  className: eu.appButtonContainer,
                  children: [0 === eg.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: eo.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(S.default, {
                        channelId: n.id,
                        ...e
                      }))
                    },
                    color: eu.appButtonColor,
                    className: eu.appButton,
                    fullWidth: !0,
                    size: d.ButtonSizes.SMALL,
                    children: eo.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                  })]
                })]
              })
            })]
          })]
        })
      })
    })
  }) : null
}