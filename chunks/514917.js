"use strict";
n.r(t), n.d(t, {
  default: function() {
    return et
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("327037"),
  f = n("841098"),
  h = n("699209"),
  m = n("795696"),
  p = n("635792"),
  E = n("252063"),
  S = n("724110"),
  g = n("373469"),
  C = n("42203"),
  _ = n("957255"),
  I = n("824563"),
  T = n("102985"),
  v = n("697218"),
  x = n("800762"),
  N = n("387111"),
  A = n("158998"),
  M = n("713135"),
  R = n("765698"),
  j = n("506885"),
  L = n("217513"),
  y = n("893980"),
  O = n("58351"),
  P = n("430312"),
  b = n("789321"),
  D = n("627601"),
  U = n("10532"),
  w = n("915712"),
  F = n("369869"),
  k = n("802279"),
  V = n("465215"),
  B = n("301998"),
  H = n("491250"),
  G = n("453649"),
  W = n("849674"),
  Y = n("817080"),
  z = n("390413"),
  K = n("104649"),
  Z = n("80615"),
  X = n("80531"),
  Q = n("590456"),
  q = n("49111"),
  J = n("646718"),
  $ = n("782340"),
  ee = n("620310"),
  et = e => {
    var t;
    let {
      channel: n,
      showCall: s
    } = e, r = n.recipients[0], [et, en] = l.useState(!1), ea = l.useRef(0), el = (0, O.default)(), es = (0, u.useStateFromStores)([v.default], () => v.default.getUser(r)), ei = null == es ? void 0 : es.isNonUserBot();
    o(null != es, "Profile Panel: user cannot be undefined");
    let er = (0, L.default)(es.id),
      {
        installedIntegrations: eo,
        fetched: eu,
        appsInGDMEnabled: ed,
        availableApplications: ec
      } = (0, E.usePrivateChannelIntegrationState)({
        channelId: n.id
      }),
      ef = !el && !s,
      eh = (0, u.useStateFromStores)([x.default, C.default], () => {
        var e;
        return null != es ? C.default.getChannel(null === (e = x.default.getVoiceStateForUser(es.id)) || void 0 === e ? void 0 : e.channelId) : null
      }),
      {
        enableHangStatus: em
      } = h.HangStatusExperiment.useExperiment({
        guildId: null == eh ? void 0 : eh.guild_id,
        location: "ActivityStatus"
      }, {
        autoTrackExposure: !1
      }),
      {
        activity: ep,
        hangStatusActivity: eE,
        customStatusActivity: eS,
        isApplicationStreaming: eg,
        isMobile: eC,
        status: e_
      } = (0, u.useStateFromStoresObject)([g.default, I.default, _.default], () => {
        let e = null != g.default.getAnyStreamForUser(es.id);
        return {
          activity: I.default.findActivity(es.id, t => {
            let {
              type: n
            } = t;
            return e ? n === q.ActivityTypes.PLAYING : n !== q.ActivityTypes.CUSTOM_STATUS && n !== q.ActivityTypes.HANG_STATUS
          }),
          hangStatusActivity: em && null != eh && _.default.can(q.Permissions.CONNECT, eh) ? I.default.findActivity(es.id, e => {
            let {
              type: t
            } = e;
            return t === q.ActivityTypes.HANG_STATUS
          }) : null,
          customStatusActivity: I.default.findActivity(es.id, e => {
            let {
              type: t
            } = e;
            return t === q.ActivityTypes.CUSTOM_STATUS
          }),
          isApplicationStreaming: e,
          isMobile: I.default.isMobileOnline(es.id),
          status: ei ? null : I.default.getStatus(es.id)
        }
      }),
      eI = null != ep || null != eE || eg,
      eT = null !== (t = N.default.getNickname(null, n.id, es)) && void 0 !== t ? t : A.default.getName(es),
      ev = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
      [ex, eN, eA, eM, eR] = (0, u.useStateFromStoresArray)([M.default], () => [M.default.getMutualFriendsCount(es.id), M.default.getMutualFriends(es.id), M.default.getMutualGuilds(es.id), M.default.isFetchingProfile(es.id), M.default.isFetchingFriends(es.id)]),
      ej = (0, G.useGetVoiceChannelInfoForVoiceActivitySection)(es.id),
      eL = null != ej && !eg && null == eE,
      {
        showVoiceActivityInProfile: ey
      } = R.VoiceActivityProfileExperiment.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: eL && ef
      }),
      {
        enabled: eO
      } = m.default.useExperiment({
        location: "user DM panel"
      }, {
        autoTrackExposure: ef
      }),
      eP = !es.bot && null != eA && eA.length > 0,
      eb = !es.bot && null != ex && ex > 0,
      eD = (0, W.useShouldShowUserPopoutCollectiblesUpsell)({
        popoutUser: es,
        source: D.UserPopoutUpsellSource.PROFILE_PANEL
      }),
      eU = (0, f.default)();
    l.useEffect(() => {
      ea.current = Date.now()
    }, []), l.useEffect(() => {
      (0, j.default)(es.id, es.getAvatarURL(void 0, 80), {
        withMutualGuilds: !es.bot,
        withMutualFriendsCount: !es.bot
      })
    }, [es]), l.useEffect(() => {
      null != er && ef && (0, y.trackProfilePanelViewed)({
        displayProfile: er,
        isMobile: eC,
        loadDurationMs: Date.now() - ea.current,
        activity: ep,
        customStatusActivity: eS,
        status: e_
      })
    }, [er, eC, ep, eS, e_, ef]);
    let ew = null == eA ? void 0 : eA.map(e => (0, a.jsx)(Z.default, {
        connection: e,
        user: es,
        theme: eU
      }, e.guild.id)),
      eF = null == eN ? void 0 : eN.map(e => (0, a.jsx)(K.default, {
        connection: e
      }, e.key)),
      ek = eo.map(e => (0, a.jsx)(Y.default, {
        channel: n,
        integration: e
      }, e.application.id)),
      eV = l.useCallback(() => {
        !es.bot && !eR && null == eF && (0, c.fetchMutualFriends)(es.id)
      }, [eR, eF, es.id, es.bot]),
      eB = l.useCallback(() => en(!0), []),
      eH = l.useCallback(() => en(!1), []);
    return ef ? (0, a.jsx)("aside", {
      className: ee.profilePanel,
      onMouseEnter: eB,
      onMouseLeave: eH,
      children: (0, a.jsxs)(P.default, {
        user: es,
        profileType: Q.UserProfileTypes.PANEL,
        useDefaultClientTheme: !0,
        children: [eD.shouldShow && (0, a.jsx)(b.default, {
          user: es,
          upsellSource: D.UserPopoutUpsellSource.PROFILE_PANEL,
          displayProfile: er,
          isInSidebar: !0,
          ...eD
        }, es.id), (0, a.jsxs)(d.ScrollerNone, {
          children: [(0, a.jsx)(X.default, {
            user: es,
            displayProfile: er,
            channel: n,
            animateAssets: et,
            forceShowPremiumBadge: et
          }), (0, a.jsxs)(P.default.Inner, {
            children: [(0, a.jsx)(H.default, {
              user: es,
              nickname: eT,
              pronouns: null == er ? void 0 : er.pronouns
            }), (0, a.jsx)(k.default, {
              customStatusActivity: eS,
              animate: et
            }), (0, a.jsx)(U.default, {}), (0, a.jsx)(F.default, {
              bio: null == er ? void 0 : er.bio,
              hidePersonalInformation: ev,
              animateOnHover: !0,
              isHovering: et
            }), !es.isSystemUser() && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(V.default, {
                userId: r
              }), (0, a.jsx)(U.default, {})]
            }), (0, a.jsx)(B.default, {
              user: es,
              setNote: !1,
              hideNote: !1
            })]
          }), ey && eL ? (0, a.jsx)(P.default.Inner, {
            children: (0, a.jsx)(G.default, {
              voiceGuild: ej.voiceGuild,
              voiceChannel: ej.voiceChannel,
              color: ee.appButtonColor
            })
          }) : null, eI ? (0, a.jsx)(P.default.Inner, {
            children: (0, a.jsx)(w.default, {
              activity: null != ep ? ep : eE,
              user: es,
              channelId: n.id,
              analyticsParams: {
                location: {
                  page: q.AnalyticsPages.USER_PROFILE,
                  section: q.AnalyticsSections.DM_PROFILE
                }
              }
            })
          }) : null, (eP || eb) && (0, a.jsxs)(P.default.Inner, {
            className: ee.profilePanelConnections,
            children: [eP ? (0, a.jsx)(z.default, {
              className: ee.mutualGuildsList,
              header: $.default.Messages.MUTUAL_GUILDS_COUNT.format({
                count: null == eA ? void 0 : eA.length
              }),
              isLoadingHeader: eM,
              children: ew
            }) : null, eb ? (0, a.jsx)(z.default, {
              className: i(ee.mutualFriendsList, {
                [ee.mutualFriendsDivider]: eP
              }),
              header: $.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                count: ex
              }),
              isLoadingHeader: eM,
              isLoadingContents: eR,
              loadingContentsCount: ex,
              onFocus: eV,
              onHover: eV,
              itemType: z.ListType.MutualFriendsList,
              children: eF
            }) : null]
          }), ed && (0, a.jsx)(P.default.Inner, {
            className: i(ee.profilePanelConnections, ee.appListThemedContainer),
            children: (0, a.jsxs)(z.default, {
              header: ek.length > 0 ? $.default.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                count: ek.length
              }) : $.default.Messages.PRIVATE_CHANNEL_APPS_HEADER,
              isLoadingContents: !eu,
              isLoadingHeader: !1,
              itemType: z.ListType.AppsList,
              children: [ek, ec.length > 0 && (0, a.jsxs)("div", {
                className: ee.appButtonContainer,
                children: [0 === eo.length && (0, a.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: $.default.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                }), (0, a.jsx)(d.Button, {
                  onClick: () => {
                    (0, d.openModal)(e => (0, a.jsx)(S.default, {
                      channelId: n.id,
                      ...e
                    }))
                  },
                  color: ee.appButtonColor,
                  className: ee.appButton,
                  fullWidth: !0,
                  size: d.ButtonSizes.SMALL,
                  children: $.default.Messages.PRIVATE_CHANNEL_ADD_APPS
                })]
              })]
            })
          }), eO && (0, a.jsx)("div", {
            className: ee.giftButtonContainer,
            children: (0, a.jsx)(p.default, {
              className: ee.giftButton,
              look: d.Button.Looks.FILLED,
              buttonText: $.default.Messages.GIFT_NITRO,
              buttonTextClassName: ee.giftButtonCTA,
              color: d.Button.Colors.CUSTOM,
              giftRecipient: es,
              subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
              premiumModalAnalyticsLocation: {
                section: q.AnalyticsSections.DM_PROFILE
              }
            })
          })]
        })]
      })
    }) : null
  }