"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("410030"),
  d = n("100527"),
  c = n("906732"),
  f = n("574176"),
  h = n("556084"),
  m = n("422677"),
  p = n("911367"),
  E = n("769654"),
  C = n("761174"),
  g = n("199902"),
  S = n("314897"),
  _ = n("592125"),
  T = n("496675"),
  I = n("158776"),
  A = n("246946"),
  v = n("979651"),
  N = n("5192"),
  x = n("51144"),
  M = n("342656"),
  R = n("785717"),
  y = n("221292"),
  L = n("318661"),
  O = n("57048"),
  j = n("726059"),
  P = n("162267"),
  D = n("502762"),
  b = n("171368"),
  U = n("944546"),
  F = n("470900"),
  w = n("421486"),
  k = n("347949"),
  B = n("240328"),
  H = n("436478"),
  G = n("138394"),
  V = n("248345"),
  W = n("19836"),
  Y = n("538564"),
  z = n("319300"),
  K = n("591600"),
  Z = n("584045"),
  q = n("664202"),
  X = n("520858"),
  Q = n("772056"),
  J = n("747711"),
  $ = n("228168"),
  ee = n("981631"),
  et = n("689938"),
  en = n("235892");
t.default = e => {
  var t;
  let {
    user: n,
    channel: s
  } = e, [ea, el] = l.useState(!1), es = l.useRef(0), {
    analyticsLocations: ei
  } = (0, c.default)(d.default.PROFILE_PANEL);
  (0, p.useFetchProfileEffects)();
  let er = null == n ? void 0 : n.isNonUserBot(),
    eo = (0, L.default)(n.id),
    {
      installedIntegrations: eu,
      fetched: ed,
      appsInGDMEnabled: ec,
      availableApplications: ef
    } = (0, h.usePrivateChannelIntegrationState)({
      channelId: s.id
    }),
    eh = (0, r.useStateFromStores)([v.default, _.default], () => {
      var e;
      return null != n ? _.default.getChannel(null === (e = v.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null
    }),
    {
      enableHangStatus: em
    } = f.HangStatusExperiment.useExperiment({
      guildId: null == eh ? void 0 : eh.guild_id,
      location: "ActivityStatus"
    }, {
      autoTrackExposure: !1
    }),
    {
      activity: ep,
      customStatusActivity: eE,
      isApplicationStreaming: eC,
      isMobile: eg,
      status: eS,
      hangStatusActivity: e_
    } = (0, r.useStateFromStoresObject)([g.default, I.default, T.default], () => {
      let e = null != g.default.getAnyStreamForUser(n.id);
      return {
        activity: I.default.findActivity(n.id, t => {
          let {
            type: n
          } = t;
          return e ? n === ee.ActivityTypes.PLAYING : n !== ee.ActivityTypes.CUSTOM_STATUS && n !== ee.ActivityTypes.HANG_STATUS
        }),
        customStatusActivity: I.default.findActivity(n.id, e => {
          let {
            type: t
          } = e;
          return t === ee.ActivityTypes.CUSTOM_STATUS
        }),
        isApplicationStreaming: e,
        isMobile: I.default.isMobileOnline(n.id),
        status: er ? null : I.default.getStatus(n.id),
        hangStatusActivity: em && null != eh && T.default.can(ee.Permissions.CONNECT, eh) ? I.default.findActivity(n.id, e => {
          let {
            type: t
          } = e;
          return t === ee.ActivityTypes.HANG_STATUS
        }) : null
      }
    }),
    eT = null != ep || null != e_ || eC,
    eI = null !== (t = N.default.getNickname(null, s.id, n)) && void 0 !== t ? t : x.default.getName(n),
    eA = (0, r.useStateFromStores)([A.default], () => A.default.hidePersonalInformation),
    {
      mutualFriends: ev,
      isFetching: eN
    } = (0, j.default)(n.id, !n.bot),
    {
      mutualGuilds: ex,
      isFetching: eM
    } = (0, P.default)(n.id, !n.bot),
    eR = !n.bot && null != ev && ev.length > 0,
    ey = !n.bot && null != ex && ex.length > 0,
    eL = (0, q.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: n,
      source: H.UserPopoutUpsellSource.PROFILE_PANEL
    }),
    eO = (0, u.default)();
  l.useEffect(() => {
    es.current = Date.now()
  }, []), l.useEffect(() => {
    null != eo && (0, O.trackProfilePanelViewed)({
      displayProfile: eo,
      isMobile: eg,
      loadDurationMs: Date.now() - es.current,
      activity: ep,
      customStatusActivity: eE,
      status: eS
    })
  }, [eo, eg, ep, eE, eS]);
  let ej = null == ex ? void 0 : ex.map(e => {
      let {
        guild: t,
        nick: l
      } = e;
      return (0, a.jsx)(F.GuildRow, {
        user: n,
        guild: t,
        nick: l,
        theme: eO,
        onSelect: () => (0, E.transitionToGuild)(t.id)
      }, t.id)
    }),
    eP = null == ev ? void 0 : ev.map(e => {
      let {
        key: t,
        user: n
      } = e;
      return (0, a.jsx)(U.FriendRow, {
        user: n,
        status: null != eS ? eS : ee.StatusTypes.UNKNOWN,
        onSelect: () => {
          (0, b.openUserProfileModal)({
            userId: n.id,
            channelId: s.id,
            sourceAnalyticsLocations: ei,
            analyticsLocation: {
              section: ee.AnalyticsSections.DM_PROFILE
            }
          })
        }
      }, t)
    }),
    eD = eu.map(e => (0, a.jsx)(X.default, {
      channel: s,
      integration: e
    }, e.application.id)),
    eb = l.useCallback(() => el(!0), []),
    eU = l.useCallback(() => el(!1), []),
    eF = (0, r.useStateFromStores)([S.default], () => S.default.getId()),
    ew = n.id === eF,
    ek = n.bot || ew,
    {
      enabled: eB
    } = (0, M.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: d.default.PROFILE,
      disable: ek
    }),
    eH = (0, C.useIsUserRecentGamesEnabled)({
      userId: n.id,
      location: "28tk0bf_2"
    });
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: ei,
    children: (0, a.jsx)(R.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: n.id,
      channelId: s.id,
      children: (0, a.jsx)("aside", {
        className: en.profilePanel,
        onMouseEnter: eb,
        onMouseLeave: eU,
        children: (0, a.jsxs)(D.default, {
          user: n,
          displayProfile: eo,
          profileType: $.UserProfileTypes.PANEL,
          themeOverride: eO,
          children: [eL.shouldShow && (0, a.jsx)(B.default, {
            user: n,
            upsellSource: H.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: eo,
            isInSidebar: !0,
            ...eL
          }, n.id), (0, a.jsxs)(o.ScrollerNone, {
            children: [(0, a.jsx)(J.default, {
              user: n,
              displayProfile: eo,
              channel: s,
              animateAssets: ea,
              forceShowPremiumBadge: ea
            }), (0, a.jsxs)(D.default.Overlay, {
              className: en.overlay,
              children: [(0, a.jsx)(Z.default, {
                user: n,
                nickname: eI,
                pronouns: null == eo ? void 0 : eo.pronouns
              }), (0, a.jsx)(Y.default, {
                customStatusActivity: eE,
                animate: ea
              }), (0, a.jsx)(G.default, {}), (0, a.jsx)(W.default, {
                bio: null == eo ? void 0 : eo.bio,
                hidePersonalInformation: eA,
                animateOnHover: !0,
                isHovering: ea,
                userId: n.id
              }), eB && (0, a.jsx)(w.default, {
                className: en.profileMutuals,
                user: n
              }), !n.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(z.default, {
                  userId: n.id
                }), (0, a.jsx)(G.default, {})]
              }), !n.isSystemUser() && (0, a.jsx)(K.default, {
                user: n,
                setNote: !1
              })]
            }), eT ? (0, a.jsx)(D.default.Overlay, {
              className: en.overlay,
              children: (0, a.jsx)(V.default, {
                activity: null != ep || eC ? ep : e_,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: ee.AnalyticsPages.USER_PROFILE,
                    section: ee.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, eH && (0, a.jsx)(k.UserProfileRecentGamesThemedSection, {
              userId: n.id
            }), (ey || eR) && (0, a.jsxs)(D.default.Overlay, {
              className: en.profilePanelConnections,
              children: [ey ? (0, a.jsx)(Q.default, {
                className: en.mutualGuildsList,
                header: et.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: ex.length
                }),
                isLoadingHeader: eM,
                loadingContentsCount: ex.length,
                itemType: Q.ListType.MutualGuildList,
                onExpand: () => {
                  (0, y.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: ei
                  })
                },
                children: ej
              }) : null, eR ? (0, a.jsx)(Q.default, {
                className: i()(en.mutualFriendsList, {
                  [en.mutualFriendsDivider]: ey
                }),
                header: et.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: ev.length
                }),
                isLoadingHeader: eN,
                loadingContentsCount: ev.length,
                itemType: Q.ListType.MutualFriendsList,
                onExpand: () => {
                  (0, y.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: ei
                  })
                },
                children: eP
              }) : null]
            }), ec && (0, a.jsx)(D.default.Overlay, {
              className: i()(en.profilePanelConnections, en.appListThemedContainer),
              children: (0, a.jsxs)(Q.default, {
                header: eD.length > 0 ? et.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eD.length
                }) : et.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !ed,
                isLoadingHeader: !1,
                itemType: Q.ListType.AppsList,
                children: [eD, ef.length > 0 && (0, a.jsxs)("div", {
                  className: en.appButtonContainer,
                  children: [0 === eu.length && (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: et.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(o.Button, {
                    onClick: () => {
                      (0, o.openModal)(e => (0, a.jsx)(m.default, {
                        channelId: s.id,
                        ...e
                      }))
                    },
                    color: en.appButtonColor,
                    className: en.appButton,
                    fullWidth: !0,
                    size: o.ButtonSizes.SMALL,
                    children: et.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                  })]
                })]
              })
            })]
          })]
        })
      })
    })
  })
}