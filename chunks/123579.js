"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("232567"),
  f = n("410030"),
  h = n("100527"),
  m = n("906732"),
  p = n("574176"),
  E = n("556084"),
  C = n("422677"),
  g = n("911367"),
  S = n("201819"),
  _ = n("199902"),
  T = n("314897"),
  I = n("592125"),
  A = n("496675"),
  v = n("158776"),
  N = n("246946"),
  x = n("594174"),
  M = n("979651"),
  R = n("5192"),
  L = n("51144"),
  y = n("342656"),
  O = n("785717"),
  j = n("221292"),
  P = n("621853"),
  D = n("895618"),
  b = n("484459"),
  U = n("318661"),
  F = n("57048"),
  w = n("87728"),
  k = n("747074"),
  H = n("421486"),
  B = n("347949"),
  G = n("240328"),
  V = n("436478"),
  W = n("138394"),
  Y = n("248345"),
  z = n("19836"),
  Z = n("538564"),
  K = n("319300"),
  X = n("591600"),
  q = n("584045"),
  Q = n("58307"),
  J = n("664202"),
  $ = n("520858"),
  ee = n("772056"),
  et = n("281172"),
  en = n("50333"),
  ea = n("747711"),
  el = n("228168"),
  es = n("981631"),
  ei = n("689938"),
  er = n("859138");
t.default = e => {
  var t;
  let {
    channel: n,
    showCall: s
  } = e, r = n.recipients[0], [eo, eu] = l.useState(!1), ed = l.useRef(0), ec = (0, w.default)(), {
    analyticsLocations: ef
  } = (0, m.default)(h.default.PROFILE_PANEL);
  (0, g.useFetchProfileEffects)();
  let eh = (0, u.useStateFromStores)([x.default], () => x.default.getUser(r)),
    em = null == eh ? void 0 : eh.isNonUserBot();
  o()(null != eh, "Profile Panel: user cannot be undefined");
  let ep = (0, U.default)(eh.id),
    {
      installedIntegrations: eE,
      fetched: eC,
      appsInGDMEnabled: eg,
      availableApplications: eS
    } = (0, E.usePrivateChannelIntegrationState)({
      channelId: n.id
    }),
    e_ = !ec && !s,
    eT = (0, u.useStateFromStores)([M.default, I.default], () => {
      var e;
      return null != eh ? I.default.getChannel(null === (e = M.default.getVoiceStateForUser(eh.id)) || void 0 === e ? void 0 : e.channelId) : null
    }),
    {
      enableHangStatus: eI
    } = p.HangStatusExperiment.useExperiment({
      guildId: null == eT ? void 0 : eT.guild_id,
      location: "ActivityStatus"
    }, {
      autoTrackExposure: !1
    }),
    {
      activity: eA,
      customStatusActivity: ev,
      isApplicationStreaming: eN,
      isMobile: ex,
      status: eM,
      hangStatusActivity: eR,
      isHangStatusPrimaryActivity: eL
    } = (0, u.useStateFromStoresObject)([_.default, v.default, A.default], () => {
      var e;
      let t = null != _.default.getAnyStreamForUser(eh.id);
      return {
        activity: v.default.findActivity(eh.id, e => {
          let {
            type: n
          } = e;
          return t ? n === es.ActivityTypes.PLAYING : n !== es.ActivityTypes.CUSTOM_STATUS && n !== es.ActivityTypes.HANG_STATUS
        }),
        customStatusActivity: v.default.findActivity(eh.id, e => {
          let {
            type: t
          } = e;
          return t === es.ActivityTypes.CUSTOM_STATUS
        }),
        isApplicationStreaming: t,
        isMobile: v.default.isMobileOnline(eh.id),
        status: em ? null : v.default.getStatus(eh.id),
        isHangStatusPrimaryActivity: (null === (e = v.default.findActivity(eh.id, e => {
          let {
            type: n
          } = e;
          return t ? n === es.ActivityTypes.PLAYING : n !== es.ActivityTypes.CUSTOM_STATUS
        })) || void 0 === e ? void 0 : e.type) === es.ActivityTypes.HANG_STATUS,
        hangStatusActivity: eI && null != eT && A.default.can(es.Permissions.CONNECT, eT) ? v.default.findActivity(eh.id, e => {
          let {
            type: t
          } = e;
          return t === es.ActivityTypes.HANG_STATUS
        }) : null
      }
    }),
    ey = null != eA || null != eR || eN,
    eO = null !== (t = R.default.getNickname(null, n.id, eh)) && void 0 !== t ? t : L.default.getName(eh),
    ej = (0, u.useStateFromStores)([N.default], () => N.default.hidePersonalInformation),
    [eP, eD, eb, eU, eF] = (0, u.useStateFromStoresArray)([P.default], () => [P.default.getMutualFriendsCount(eh.id), P.default.getMutualFriends(eh.id), P.default.getMutualGuilds(eh.id), P.default.isFetchingProfile(eh.id), P.default.isFetchingFriends(eh.id)]),
    ew = (0, Q.useGetVoiceChannelInfoForVoiceActivitySection)(eh.id),
    ek = null != ew && !eN && !eL,
    {
      showVoiceActivityInProfile: eH
    } = D.VoiceActivityProfileExperiment.useExperiment({
      location: "user DM panel"
    }, {
      autoTrackExposure: ek && e_
    }),
    eB = !eh.bot && null != eb && eb.length > 0,
    eG = !eh.bot && null != eP && eP > 0,
    eV = (0, J.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: eh,
      source: V.UserPopoutUpsellSource.PROFILE_PANEL
    }),
    eW = (0, f.default)();
  l.useEffect(() => {
    ed.current = Date.now()
  }, []), l.useEffect(() => {
    (0, b.default)(eh.id, eh.getAvatarURL(void 0, 80), {
      withMutualGuilds: !eh.bot,
      withMutualFriendsCount: !eh.bot
    })
  }, [eh]), l.useEffect(() => {
    null != ep && e_ && (0, F.trackProfilePanelViewed)({
      displayProfile: ep,
      isMobile: ex,
      loadDurationMs: Date.now() - ed.current,
      activity: eA,
      customStatusActivity: ev,
      status: eM
    })
  }, [ep, ex, eA, ev, eM, e_]);
  let eY = null == eb ? void 0 : eb.map(e => (0, a.jsx)(en.default, {
      connection: e,
      user: eh,
      theme: eW
    }, e.guild.id)),
    ez = null == eD ? void 0 : eD.map(e => (0, a.jsx)(et.default, {
      connection: e,
      channelId: n.id
    }, e.key)),
    eZ = eE.map(e => (0, a.jsx)($.default, {
      channel: n,
      integration: e
    }, e.application.id)),
    eK = l.useCallback(() => {
      !eh.bot && !eF && null == ez && (0, c.fetchMutualFriends)(eh.id)
    }, [eF, ez, eh.id, eh.bot]),
    eX = l.useCallback(() => eu(!0), []),
    eq = l.useCallback(() => eu(!1), []),
    eQ = (0, u.useStateFromStores)([T.default], () => T.default.getId()),
    eJ = eh.id === eQ,
    e$ = eh.bot || eJ,
    {
      enabled: e0
    } = (0, y.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: h.default.PROFILE,
      disable: e$
    }),
    e1 = (0, S.useIsUserRecentGamesFetchEnabled)({
      userId: eh.id,
      location: "28tk0bf_5"
    });
  return e_ ? (0, a.jsx)(m.AnalyticsLocationProvider, {
    value: ef,
    children: (0, a.jsx)(O.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: eh.id,
      channelId: n.id,
      children: (0, a.jsx)("aside", {
        className: er.profilePanel,
        onMouseEnter: eX,
        onMouseLeave: eq,
        children: (0, a.jsxs)(k.default, {
          user: eh,
          profileType: el.UserProfileTypes.PANEL,
          useDefaultClientTheme: !0,
          children: [eV.shouldShow && (0, a.jsx)(G.default, {
            user: eh,
            upsellSource: V.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: ep,
            isInSidebar: !0,
            ...eV
          }, eh.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(ea.default, {
              user: eh,
              displayProfile: ep,
              channel: n,
              animateAssets: eo,
              forceShowPremiumBadge: eo
            }), (0, a.jsxs)(k.default.Inner, {
              children: [(0, a.jsx)(q.default, {
                user: eh,
                nickname: eO,
                pronouns: null == ep ? void 0 : ep.pronouns
              }), (0, a.jsx)(Z.default, {
                customStatusActivity: ev,
                animate: eo
              }), (0, a.jsx)(W.default, {}), (0, a.jsx)(z.default, {
                bio: null == ep ? void 0 : ep.bio,
                hidePersonalInformation: ej,
                animateOnHover: !0,
                isHovering: eo
              }), e0 && (0, a.jsx)(H.default, {
                className: er.profileMutuals,
                user: eh
              }), !eh.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(K.default, {
                  userId: r
                }), (0, a.jsx)(W.default, {})]
              }), (0, a.jsx)(X.default, {
                user: eh,
                setNote: !1
              })]
            }), e1 && (0, a.jsx)(B.UserProfileRecentGamesThemedSection, {
              userId: r
            }), eH && ek ? (0, a.jsx)(k.default.Inner, {
              children: (0, a.jsx)(Q.default, {
                voiceGuild: ew.voiceGuild,
                voiceChannel: ew.voiceChannel,
                color: er.appButtonColor
              })
            }) : null, ey ? (0, a.jsx)(k.default.Inner, {
              children: (0, a.jsx)(Y.default, {
                activity: null != eA ? eA : eR,
                user: eh,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: es.AnalyticsPages.USER_PROFILE,
                    section: es.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, (eB || eG) && (0, a.jsxs)(k.default.Inner, {
              className: er.profilePanelConnections,
              children: [eB ? (0, a.jsx)(ee.default, {
                className: er.mutualGuildsList,
                header: ei.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: null == eb ? void 0 : eb.length
                }),
                isLoadingHeader: eU,
                onExpand: () => {
                  (0, j.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: eh.id,
                    channelId: n.id,
                    analyticsLocations: ef
                  })
                },
                children: eY
              }) : null, eG ? (0, a.jsx)(ee.default, {
                className: i()(er.mutualFriendsList, {
                  [er.mutualFriendsDivider]: eB
                }),
                header: ei.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eP
                }),
                isLoadingHeader: eU,
                isLoadingContents: eF,
                loadingContentsCount: eP,
                onFocus: eK,
                onHover: eK,
                itemType: ee.ListType.MutualFriendsList,
                onExpand: () => {
                  (0, j.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: eh.id,
                    channelId: n.id,
                    analyticsLocations: ef
                  })
                },
                children: ez
              }) : null]
            }), eg && (0, a.jsx)(k.default.Inner, {
              className: i()(er.profilePanelConnections, er.appListThemedContainer),
              children: (0, a.jsxs)(ee.default, {
                header: eZ.length > 0 ? ei.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eZ.length
                }) : ei.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !eC,
                isLoadingHeader: !1,
                itemType: ee.ListType.AppsList,
                children: [eZ, eS.length > 0 && (0, a.jsxs)("div", {
                  className: er.appButtonContainer,
                  children: [0 === eE.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: ei.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(C.default, {
                        channelId: n.id,
                        ...e
                      }))
                    },
                    color: er.appButtonColor,
                    className: er.appButton,
                    fullWidth: !0,
                    size: d.ButtonSizes.SMALL,
                    children: ei.default.Messages.PRIVATE_CHANNEL_ADD_APPS
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