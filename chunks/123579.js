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
  c = n("410030"),
  f = n("100527"),
  h = n("906732"),
  m = n("574176"),
  p = n("556084"),
  E = n("422677"),
  C = n("911367"),
  g = n("769654"),
  S = n("761174"),
  _ = n("199902"),
  T = n("314897"),
  I = n("592125"),
  A = n("496675"),
  N = n("158776"),
  v = n("246946"),
  x = n("594174"),
  M = n("979651"),
  R = n("5192"),
  y = n("51144"),
  L = n("342656"),
  O = n("785717"),
  j = n("221292"),
  P = n("484459"),
  D = n("318661"),
  b = n("57048"),
  U = n("726059"),
  F = n("162267"),
  w = n("87728"),
  k = n("502762"),
  H = n("171368"),
  B = n("944546"),
  G = n("470900"),
  V = n("421486"),
  W = n("347949"),
  Y = n("240328"),
  z = n("436478"),
  K = n("138394"),
  Z = n("248345"),
  q = n("19836"),
  X = n("538564"),
  Q = n("319300"),
  J = n("591600"),
  $ = n("584045"),
  ee = n("664202"),
  et = n("520858"),
  en = n("772056"),
  ea = n("747711"),
  el = n("228168"),
  es = n("981631"),
  ei = n("689938"),
  er = n("235892");
t.default = e => {
  var t;
  let {
    channel: n,
    showCallOrActivityPanel: s
  } = e, r = n.recipients[0], [eo, eu] = l.useState(!1), ed = l.useRef(0), ec = (0, w.default)(), {
    analyticsLocations: ef
  } = (0, h.default)(f.default.PROFILE_PANEL);
  (0, C.useFetchProfileEffects)();
  let eh = (0, u.useStateFromStores)([x.default], () => x.default.getUser(r)),
    em = null == eh ? void 0 : eh.isNonUserBot();
  o()(null != eh, "Profile Panel: user cannot be undefined");
  let ep = (0, D.default)(eh.id),
    {
      installedIntegrations: eE,
      fetched: eC,
      appsInGDMEnabled: eg,
      availableApplications: eS
    } = (0, p.usePrivateChannelIntegrationState)({
      channelId: n.id
    }),
    e_ = !ec && !s,
    eT = (0, u.useStateFromStores)([M.default, I.default], () => {
      var e;
      return null != eh ? I.default.getChannel(null === (e = M.default.getVoiceStateForUser(eh.id)) || void 0 === e ? void 0 : e.channelId) : null
    }),
    {
      enableHangStatus: eI
    } = m.HangStatusExperiment.useExperiment({
      guildId: null == eT ? void 0 : eT.guild_id,
      location: "ActivityStatus"
    }, {
      autoTrackExposure: !1
    }),
    {
      activity: eA,
      customStatusActivity: eN,
      isApplicationStreaming: ev,
      isMobile: ex,
      status: eM,
      hangStatusActivity: eR
    } = (0, u.useStateFromStoresObject)([_.default, N.default, A.default], () => {
      let e = null != _.default.getAnyStreamForUser(eh.id);
      return {
        activity: N.default.findActivity(eh.id, t => {
          let {
            type: n
          } = t;
          return e ? n === es.ActivityTypes.PLAYING : n !== es.ActivityTypes.CUSTOM_STATUS && n !== es.ActivityTypes.HANG_STATUS
        }),
        customStatusActivity: N.default.findActivity(eh.id, e => {
          let {
            type: t
          } = e;
          return t === es.ActivityTypes.CUSTOM_STATUS
        }),
        isApplicationStreaming: e,
        isMobile: N.default.isMobileOnline(eh.id),
        status: em ? null : N.default.getStatus(eh.id),
        hangStatusActivity: eI && null != eT && A.default.can(es.Permissions.CONNECT, eT) ? N.default.findActivity(eh.id, e => {
          let {
            type: t
          } = e;
          return t === es.ActivityTypes.HANG_STATUS
        }) : null
      }
    }),
    ey = null != eA || null != eR || ev,
    eL = null !== (t = R.default.getNickname(null, n.id, eh)) && void 0 !== t ? t : y.default.getName(eh),
    eO = (0, u.useStateFromStores)([v.default], () => v.default.hidePersonalInformation),
    {
      mutualFriends: ej,
      isFetching: eP
    } = (0, U.default)(eh.id, !eh.bot),
    {
      mutualGuilds: eD,
      isFetching: eb
    } = (0, F.default)(eh.id, !eh.bot),
    eU = !eh.bot && null != ej && ej.length > 0,
    eF = !eh.bot && null != eD && eD.length > 0,
    ew = (0, ee.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: eh,
      source: z.UserPopoutUpsellSource.PROFILE_PANEL
    }),
    ek = (0, c.default)();
  l.useEffect(() => {
    ed.current = Date.now()
  }, []), l.useEffect(() => {
    (0, P.maybeFetchUserProfileForPopout)(eh, {
      withMutualGuilds: !eh.bot,
      withMutualFriends: !eh.bot,
      channelId: n.id
    })
  }, [eh, n.id]), l.useEffect(() => {
    null != ep && e_ && (0, b.trackProfilePanelViewed)({
      displayProfile: ep,
      isMobile: ex,
      loadDurationMs: Date.now() - ed.current,
      activity: eA,
      customStatusActivity: eN,
      status: eM
    })
  }, [ep, ex, eA, eN, eM, e_]);
  let eH = null == eD ? void 0 : eD.map(e => {
      let {
        guild: t,
        nick: n
      } = e;
      return (0, a.jsx)(G.GuildRow, {
        user: eh,
        guild: t,
        nick: n,
        theme: ek,
        onSelect: () => (0, g.transitionToGuild)(t.id)
      }, t.id)
    }),
    eB = null == ej ? void 0 : ej.map(e => {
      let {
        key: t,
        user: l
      } = e;
      return (0, a.jsx)(B.FriendRow, {
        user: l,
        status: null != eM ? eM : es.StatusTypes.UNKNOWN,
        onSelect: () => {
          (0, H.openUserProfileModal)({
            userId: l.id,
            channelId: n.id,
            sourceAnalyticsLocations: ef,
            analyticsLocation: {
              section: es.AnalyticsSections.DM_PROFILE
            }
          })
        }
      }, t)
    }),
    eG = eE.map(e => (0, a.jsx)(et.default, {
      channel: n,
      integration: e
    }, e.application.id)),
    eV = l.useCallback(() => eu(!0), []),
    eW = l.useCallback(() => eu(!1), []),
    eY = (0, u.useStateFromStores)([T.default], () => T.default.getId()),
    ez = eh.id === eY,
    eK = eh.bot || ez,
    {
      enabled: eZ
    } = (0, L.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: f.default.PROFILE,
      disable: eK
    }),
    eq = (0, S.useIsUserRecentGamesEnabled)({
      userId: eh.id,
      location: "28tk0bf_2"
    });
  return e_ ? (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: ef,
    children: (0, a.jsx)(O.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: eh.id,
      channelId: n.id,
      children: (0, a.jsx)("aside", {
        className: er.profilePanel,
        onMouseEnter: eV,
        onMouseLeave: eW,
        children: (0, a.jsxs)(k.default, {
          user: eh,
          displayProfile: ep,
          profileType: el.UserProfileTypes.PANEL,
          themeOverride: ek,
          children: [ew.shouldShow && (0, a.jsx)(Y.default, {
            user: eh,
            upsellSource: z.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: ep,
            isInSidebar: !0,
            ...ew
          }, eh.id), (0, a.jsxs)(d.ScrollerNone, {
            children: [(0, a.jsx)(ea.default, {
              user: eh,
              displayProfile: ep,
              channel: n,
              animateAssets: eo,
              forceShowPremiumBadge: eo
            }), (0, a.jsxs)(k.default.Overlay, {
              children: [(0, a.jsx)($.default, {
                user: eh,
                nickname: eL,
                pronouns: null == ep ? void 0 : ep.pronouns
              }), (0, a.jsx)(X.default, {
                customStatusActivity: eN,
                animate: eo
              }), (0, a.jsx)(K.default, {}), (0, a.jsx)(q.default, {
                bio: null == ep ? void 0 : ep.bio,
                hidePersonalInformation: eO,
                animateOnHover: !0,
                isHovering: eo,
                userId: eh.id
              }), eZ && (0, a.jsx)(V.default, {
                className: er.profileMutuals,
                user: eh
              }), !eh.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(Q.default, {
                  userId: r
                }), (0, a.jsx)(K.default, {})]
              }), !eh.isSystemUser() && (0, a.jsx)(J.default, {
                user: eh,
                setNote: !1
              })]
            }), ey ? (0, a.jsx)(k.default.Overlay, {
              children: (0, a.jsx)(Z.default, {
                activity: null != eA || ev ? eA : eR,
                user: eh,
                channelId: n.id,
                analyticsParams: {
                  location: {
                    page: es.AnalyticsPages.USER_PROFILE,
                    section: es.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, eq && (0, a.jsx)(W.UserProfileRecentGamesThemedSection, {
              userId: r
            }), (eF || eU) && (0, a.jsxs)(k.default.Overlay, {
              className: er.profilePanelConnections,
              children: [eF ? (0, a.jsx)(en.default, {
                className: er.mutualGuildsList,
                header: ei.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: eD.length
                }),
                isLoadingHeader: eb,
                loadingContentsCount: eD.length,
                itemType: en.ListType.MutualGuildList,
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
                children: eH
              }) : null, eU ? (0, a.jsx)(en.default, {
                className: i()(er.mutualFriendsList, {
                  [er.mutualFriendsDivider]: eF
                }),
                header: ei.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: ej.length
                }),
                isLoadingHeader: eP,
                loadingContentsCount: ej.length,
                itemType: en.ListType.MutualFriendsList,
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
                children: eB
              }) : null]
            }), eg && (0, a.jsx)(k.default.Overlay, {
              className: i()(er.profilePanelConnections, er.appListThemedContainer),
              children: (0, a.jsxs)(en.default, {
                header: eG.length > 0 ? ei.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eG.length
                }) : ei.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !eC,
                isLoadingHeader: !1,
                itemType: en.ListType.AppsList,
                children: [eG, eS.length > 0 && (0, a.jsxs)("div", {
                  className: er.appButtonContainer,
                  children: [0 === eE.length && (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: ei.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(d.Button, {
                    onClick: () => {
                      (0, d.openModal)(e => (0, a.jsx)(E.default, {
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