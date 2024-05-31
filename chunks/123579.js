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
  p = n("769654"),
  E = n("761174"),
  C = n("199902"),
  g = n("314897"),
  S = n("592125"),
  _ = n("496675"),
  T = n("158776"),
  I = n("246946"),
  A = n("979651"),
  v = n("5192"),
  N = n("51144"),
  x = n("342656"),
  M = n("785717"),
  R = n("221292"),
  y = n("318661"),
  L = n("57048"),
  O = n("726059"),
  j = n("162267"),
  P = n("502762"),
  D = n("171368"),
  b = n("944546"),
  U = n("470900"),
  F = n("421486"),
  w = n("347949"),
  k = n("240328"),
  B = n("436478"),
  H = n("138394"),
  G = n("248345"),
  V = n("19836"),
  W = n("538564"),
  Y = n("319300"),
  z = n("591600"),
  K = n("584045"),
  Z = n("664202"),
  q = n("520858"),
  X = n("772056"),
  Q = n("747711"),
  J = n("228168"),
  $ = n("981631"),
  ee = n("689938"),
  et = n("235892");
t.default = e => {
  var t;
  let {
    user: n,
    channel: s
  } = e, [en, ea] = l.useState(!1), el = l.useRef(0), {
    analyticsLocations: es
  } = (0, c.default)(d.default.PROFILE_PANEL), ei = null == n ? void 0 : n.isNonUserBot(), er = (0, y.default)(n.id), {
    installedIntegrations: eo,
    fetched: eu,
    appsInGDMEnabled: ed,
    availableApplications: ec
  } = (0, h.usePrivateChannelIntegrationState)({
    channelId: s.id
  }), ef = (0, r.useStateFromStores)([A.default, S.default], () => {
    var e;
    return null != n ? S.default.getChannel(null === (e = A.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: eh
  } = f.HangStatusExperiment.useExperiment({
    guildId: null == ef ? void 0 : ef.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), {
    activity: em,
    customStatusActivity: ep,
    isApplicationStreaming: eE,
    isMobile: eC,
    status: eg,
    hangStatusActivity: eS
  } = (0, r.useStateFromStoresObject)([C.default, T.default, _.default], () => {
    let e = null != C.default.getAnyStreamForUser(n.id);
    return {
      activity: T.default.findActivity(n.id, t => {
        let {
          type: n
        } = t;
        return e ? n === $.ActivityTypes.PLAYING : n !== $.ActivityTypes.CUSTOM_STATUS && n !== $.ActivityTypes.HANG_STATUS
      }),
      customStatusActivity: T.default.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === $.ActivityTypes.CUSTOM_STATUS
      }),
      isApplicationStreaming: e,
      isMobile: T.default.isMobileOnline(n.id),
      status: ei ? null : T.default.getStatus(n.id),
      hangStatusActivity: eh && null != ef && _.default.can($.Permissions.CONNECT, ef) ? T.default.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === $.ActivityTypes.HANG_STATUS
      }) : null
    }
  }), e_ = null != em || null != eS || eE, eT = null !== (t = v.default.getNickname(null, s.id, n)) && void 0 !== t ? t : N.default.getName(n), eI = (0, r.useStateFromStores)([I.default], () => I.default.hidePersonalInformation), {
    mutualFriends: eA,
    isFetching: ev
  } = (0, O.default)(n.id, !n.bot), {
    mutualGuilds: eN,
    isFetching: ex
  } = (0, j.default)(n.id, !n.bot), eM = !n.bot && null != eA && eA.length > 0, eR = !n.bot && null != eN && eN.length > 0, ey = (0, Z.useShouldShowUserPopoutCollectiblesUpsell)({
    popoutUser: n,
    source: B.UserPopoutUpsellSource.PROFILE_PANEL
  }), eL = (0, u.default)();
  l.useEffect(() => {
    el.current = Date.now()
  }, []), l.useEffect(() => {
    null != er && (0, L.trackProfilePanelViewed)({
      displayProfile: er,
      isMobile: eC,
      loadDurationMs: Date.now() - el.current,
      activity: em,
      customStatusActivity: ep,
      status: eg
    })
  }, [er, eC, em, ep, eg]);
  let eO = null == eN ? void 0 : eN.map(e => {
      let {
        guild: t,
        nick: l
      } = e;
      return (0, a.jsx)(U.GuildRow, {
        user: n,
        guild: t,
        nick: l,
        theme: eL,
        onSelect: () => (0, p.transitionToGuild)(t.id)
      }, t.id)
    }),
    ej = null == eA ? void 0 : eA.map(e => {
      let {
        key: t,
        user: n,
        status: l
      } = e;
      return (0, a.jsx)(b.FriendRow, {
        user: n,
        status: l,
        onSelect: () => {
          (0, D.openUserProfileModal)({
            userId: n.id,
            channelId: s.id,
            sourceAnalyticsLocations: es,
            analyticsLocation: {
              section: $.AnalyticsSections.DM_PROFILE
            }
          })
        }
      }, t)
    }),
    eP = eo.map(e => (0, a.jsx)(q.default, {
      channel: s,
      integration: e
    }, e.application.id)),
    eD = l.useCallback(() => ea(!0), []),
    eb = l.useCallback(() => ea(!1), []),
    eU = (0, r.useStateFromStores)([g.default], () => g.default.getId()),
    eF = n.id === eU,
    ew = n.bot || eF,
    {
      enabled: ek
    } = (0, x.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: d.default.PROFILE,
      disable: ew
    }),
    eB = (0, E.useIsUserRecentGamesEnabled)({
      userId: n.id,
      location: "28tk0bf_2"
    });
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: es,
    children: (0, a.jsx)(M.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: n.id,
      channelId: s.id,
      children: (0, a.jsx)("aside", {
        className: et.profilePanel,
        onMouseEnter: eD,
        onMouseLeave: eb,
        children: (0, a.jsxs)(P.default, {
          user: n,
          displayProfile: er,
          profileType: J.UserProfileTypes.PANEL,
          themeOverride: eL,
          children: [ey.shouldShow && (0, a.jsx)(k.default, {
            user: n,
            upsellSource: B.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: er,
            isInSidebar: !0,
            ...ey
          }, n.id), (0, a.jsxs)(o.ScrollerNone, {
            children: [(0, a.jsx)(Q.default, {
              user: n,
              displayProfile: er,
              channel: s,
              animateAssets: en,
              forceShowPremiumBadge: en
            }), (0, a.jsxs)(P.default.Overlay, {
              className: et.overlay,
              children: [(0, a.jsx)(K.default, {
                user: n,
                nickname: eT,
                pronouns: null == er ? void 0 : er.pronouns
              }), (0, a.jsx)(W.default, {
                customStatusActivity: ep,
                animate: en
              }), (0, a.jsx)(H.default, {}), (0, a.jsx)(V.default, {
                bio: null == er ? void 0 : er.bio,
                hidePersonalInformation: eI,
                animateOnHover: !0,
                isHovering: en,
                userId: n.id
              }), ek && (0, a.jsx)(F.default, {
                className: et.profileMutuals,
                user: n
              }), !n.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(Y.default, {
                  userId: n.id
                }), (0, a.jsx)(H.default, {})]
              }), !n.isSystemUser() && (0, a.jsx)(z.default, {
                user: n,
                setNote: !1
              })]
            }), e_ ? (0, a.jsx)(P.default.Overlay, {
              className: et.overlay,
              children: (0, a.jsx)(G.default, {
                activity: null != em || eE ? em : eS,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: $.AnalyticsPages.USER_PROFILE,
                    section: $.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, eB && (0, a.jsx)(w.UserProfileRecentGamesThemedSection, {
              userId: n.id
            }), (eR || eM) && (0, a.jsxs)(P.default.Overlay, {
              className: et.profilePanelConnections,
              children: [eR ? (0, a.jsx)(X.default, {
                className: et.mutualGuildsList,
                header: ee.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: eN.length
                }),
                isLoadingHeader: ex,
                loadingContentsCount: eN.length,
                itemType: X.ListType.MutualGuildList,
                onExpand: () => {
                  (0, R.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: es
                  })
                },
                children: eO
              }) : null, eM ? (0, a.jsx)(X.default, {
                className: i()(et.mutualFriendsList, {
                  [et.mutualFriendsDivider]: eR
                }),
                header: ee.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eA.length
                }),
                isLoadingHeader: ev,
                loadingContentsCount: eA.length,
                itemType: X.ListType.MutualFriendsList,
                onExpand: () => {
                  (0, R.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: es
                  })
                },
                children: ej
              }) : null]
            }), ed && (0, a.jsx)(P.default.Overlay, {
              className: i()(et.profilePanelConnections, et.appListThemedContainer),
              children: (0, a.jsxs)(X.default, {
                header: eP.length > 0 ? ee.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eP.length
                }) : ee.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !eu,
                isLoadingHeader: !1,
                itemType: X.ListType.AppsList,
                children: [eP, ec.length > 0 && (0, a.jsxs)("div", {
                  className: et.appButtonContainer,
                  children: [0 === eo.length && (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: ee.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(o.Button, {
                    onClick: () => {
                      (0, o.openModal)(e => (0, a.jsx)(m.default, {
                        channelId: s.id,
                        ...e
                      }))
                    },
                    color: et.appButtonColor,
                    className: et.appButton,
                    fullWidth: !0,
                    size: o.ButtonSizes.SMALL,
                    children: ee.default.Messages.PRIVATE_CHANNEL_ADD_APPS
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