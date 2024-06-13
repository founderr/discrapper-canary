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
  E = n("199902"),
  C = n("314897"),
  g = n("592125"),
  S = n("496675"),
  _ = n("158776"),
  T = n("246946"),
  I = n("979651"),
  A = n("5192"),
  v = n("51144"),
  x = n("342656"),
  N = n("785717"),
  M = n("221292"),
  y = n("318661"),
  R = n("57048"),
  L = n("726059"),
  j = n("162267"),
  O = n("502762"),
  P = n("171368"),
  D = n("944546"),
  b = n("470900"),
  U = n("421486"),
  F = n("240328"),
  w = n("436478"),
  k = n("138394"),
  H = n("248345"),
  G = n("19836"),
  B = n("538564"),
  V = n("319300"),
  W = n("591600"),
  Y = n("584045"),
  z = n("664202"),
  K = n("520858"),
  Z = n("772056"),
  X = n("747711"),
  q = n("228168"),
  J = n("981631"),
  Q = n("689938"),
  $ = n("235892");
t.default = e => {
  var t;
  let {
    user: n,
    channel: s
  } = e, [ee, et] = l.useState(!1), en = l.useRef(0), {
    analyticsLocations: ea
  } = (0, c.default)(d.default.PROFILE_PANEL), el = null == n ? void 0 : n.isNonUserBot(), es = (0, y.default)(n.id), {
    installedIntegrations: ei,
    fetched: er,
    appsInGDMEnabled: eo,
    availableApplications: eu
  } = (0, h.usePrivateChannelIntegrationState)({
    channelId: s.id
  }), ed = (0, r.useStateFromStores)([I.default, g.default], () => {
    var e;
    return null != n ? g.default.getChannel(null === (e = I.default.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: ec
  } = f.HangStatusExperiment.useExperiment({
    guildId: null == ed ? void 0 : ed.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), {
    activity: ef,
    customStatusActivity: eh,
    isApplicationStreaming: em,
    isMobile: ep,
    status: eE,
    hangStatusActivity: eC
  } = (0, r.useStateFromStoresObject)([E.default, _.default, S.default], () => {
    let e = null != E.default.getAnyStreamForUser(n.id);
    return {
      activity: _.default.findActivity(n.id, t => {
        let {
          type: n
        } = t;
        return e ? n === J.ActivityTypes.PLAYING : n !== J.ActivityTypes.CUSTOM_STATUS && n !== J.ActivityTypes.HANG_STATUS
      }),
      customStatusActivity: _.default.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === J.ActivityTypes.CUSTOM_STATUS
      }),
      isApplicationStreaming: e,
      isMobile: _.default.isMobileOnline(n.id),
      status: el ? null : _.default.getStatus(n.id),
      hangStatusActivity: ec && null != ed && S.default.can(J.Permissions.CONNECT, ed) ? _.default.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === J.ActivityTypes.HANG_STATUS
      }) : null
    }
  }), eg = null != ef || null != eC || em, eS = null !== (t = A.default.getNickname(null, s.id, n)) && void 0 !== t ? t : v.default.getName(n), e_ = (0, r.useStateFromStores)([T.default], () => T.default.hidePersonalInformation), {
    mutualFriends: eT,
    isFetching: eI
  } = (0, L.default)(n.id, !n.bot), {
    mutualGuilds: eA,
    isFetching: ev
  } = (0, j.default)(n.id, !n.bot), ex = !n.bot && null != eT && eT.length > 0, eN = !n.bot && null != eA && eA.length > 0, eM = (0, z.useShouldShowUserPopoutCollectiblesUpsell)({
    popoutUser: n,
    source: w.UserPopoutUpsellSource.PROFILE_PANEL
  }), ey = (0, u.default)();
  l.useEffect(() => {
    en.current = Date.now()
  }, []), l.useEffect(() => {
    null != es && (0, R.trackProfilePanelViewed)({
      displayProfile: es,
      isMobile: ep,
      loadDurationMs: Date.now() - en.current,
      activity: ef,
      customStatusActivity: eh,
      status: eE
    })
  }, [es, ep, ef, eh, eE]);
  let eR = null == eA ? void 0 : eA.map(e => {
      let {
        guild: t,
        nick: l
      } = e;
      return (0, a.jsx)(b.GuildRow, {
        user: n,
        guild: t,
        nick: l,
        theme: ey,
        onSelect: () => (0, p.transitionToGuild)(t.id)
      }, t.id)
    }),
    eL = null == eT ? void 0 : eT.map(e => {
      let {
        key: t,
        user: n,
        status: l
      } = e;
      return (0, a.jsx)(D.FriendRow, {
        user: n,
        status: l,
        onSelect: () => {
          (0, P.openUserProfileModal)({
            userId: n.id,
            channelId: s.id,
            sourceAnalyticsLocations: ea,
            analyticsLocation: {
              section: J.AnalyticsSections.DM_PROFILE
            }
          })
        }
      }, t)
    }),
    ej = ei.map(e => (0, a.jsx)(K.default, {
      channel: s,
      integration: e
    }, e.application.id)),
    eO = l.useCallback(() => et(!0), []),
    eP = l.useCallback(() => et(!1), []),
    eD = (0, r.useStateFromStores)([C.default], () => C.default.getId()),
    eb = n.id === eD,
    eU = n.bot || eb,
    {
      enabled: eF
    } = (0, x.useProfileMutualsExperiment)({
      autoTrackExposure: !0,
      location: d.default.PROFILE,
      disable: eU
    });
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: ea,
    children: (0, a.jsx)(N.UserProfileAnalyticsProvider, {
      layout: "DM_PANEL",
      userId: n.id,
      channelId: s.id,
      children: (0, a.jsx)("aside", {
        className: $.profilePanel,
        onMouseEnter: eO,
        onMouseLeave: eP,
        children: (0, a.jsxs)(O.default, {
          user: n,
          displayProfile: es,
          profileType: q.UserProfileTypes.PANEL,
          themeOverride: ey,
          children: [eM.shouldShow && (0, a.jsx)(F.default, {
            user: n,
            upsellSource: w.UserPopoutUpsellSource.PROFILE_PANEL,
            displayProfile: es,
            isInSidebar: !0,
            ...eM
          }, n.id), (0, a.jsxs)(o.ScrollerNone, {
            children: [(0, a.jsx)(X.default, {
              user: n,
              displayProfile: es,
              channel: s,
              animateAssets: ee,
              forceShowPremiumBadge: ee
            }), (0, a.jsxs)(O.default.Overlay, {
              className: $.overlay,
              children: [(0, a.jsx)(Y.default, {
                user: n,
                nickname: eS,
                pronouns: null == es ? void 0 : es.pronouns
              }), (0, a.jsx)(B.default, {
                customStatusActivity: eh,
                animate: ee
              }), (0, a.jsx)(k.default, {}), (0, a.jsx)(G.default, {
                bio: null == es ? void 0 : es.bio,
                hidePersonalInformation: e_,
                animateOnHover: !0,
                isHovering: ee,
                userId: n.id
              }), eF && (0, a.jsx)(U.default, {
                className: $.profileMutuals,
                user: n
              }), !n.isSystemUser() && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(V.default, {
                  userId: n.id
                }), (0, a.jsx)(k.default, {})]
              }), !n.isSystemUser() && (0, a.jsx)(W.default, {
                user: n,
                setNote: !1
              })]
            }), eg ? (0, a.jsx)(O.default.Overlay, {
              className: $.overlay,
              children: (0, a.jsx)(H.default, {
                activity: null != ef || em ? ef : eC,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: J.AnalyticsPages.USER_PROFILE,
                    section: J.AnalyticsSections.DM_PROFILE
                  }
                }
              })
            }) : null, (eN || ex) && (0, a.jsxs)(O.default.Overlay, {
              className: $.profilePanelConnections,
              children: [eN ? (0, a.jsx)(Z.default, {
                className: $.mutualGuildsList,
                header: Q.default.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: eA.length
                }),
                isLoadingHeader: ev,
                loadingContentsCount: eA.length,
                itemType: Z.ListType.MutualGuildList,
                onExpand: () => {
                  (0, M.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: ea
                  })
                },
                children: eR
              }) : null, ex ? (0, a.jsx)(Z.default, {
                className: i()($.mutualFriendsList, {
                  [$.mutualFriendsDivider]: eN
                }),
                header: Q.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eT.length
                }),
                isLoadingHeader: eI,
                loadingContentsCount: eT.length,
                itemType: Z.ListType.MutualFriendsList,
                onExpand: () => {
                  (0, M.trackUserProfileAction)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: ea
                  })
                },
                children: eL
              }) : null]
            }), eo && (0, a.jsx)(O.default.Overlay, {
              className: i()($.profilePanelConnections, $.appListThemedContainer),
              children: (0, a.jsxs)(Z.default, {
                header: ej.length > 0 ? Q.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: ej.length
                }) : Q.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !er,
                isLoadingHeader: !1,
                itemType: Z.ListType.AppsList,
                children: [ej, eu.length > 0 && (0, a.jsxs)("div", {
                  className: $.appButtonContainer,
                  children: [0 === ei.length && (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: Q.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, a.jsx)(o.Button, {
                    onClick: () => {
                      (0, o.openModal)(e => (0, a.jsx)(m.default, {
                        channelId: s.id,
                        ...e
                      }))
                    },
                    color: $.appButtonColor,
                    className: $.appButton,
                    fullWidth: !0,
                    size: o.ButtonSizes.SMALL,
                    children: Q.default.Messages.PRIVATE_CHANNEL_ADD_APPS
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