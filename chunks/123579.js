n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(410030),
  u = n(100527),
  d = n(906732),
  h = n(574176),
  m = n(556084),
  p = n(422677),
  E = n(769654),
  g = n(199902),
  f = n(314897),
  C = n(592125),
  _ = n(496675),
  I = n(158776),
  x = n(246946),
  T = n(979651),
  N = n(5192),
  Z = n(51144),
  S = n(342656),
  v = n(785717),
  A = n(221292),
  M = n(318661),
  R = n(57048),
  j = n(726059),
  L = n(162267),
  O = n(502762),
  P = n(171368),
  b = n(944546),
  y = n(470900),
  D = n(421486),
  U = n(240328),
  k = n(436478),
  w = n(138394),
  H = n(248345),
  B = n(19836),
  G = n(538564),
  V = n(319300),
  F = n(591600),
  z = n(584045),
  W = n(664202),
  Y = n(520858),
  K = n(772056),
  q = n(747711),
  X = n(228168),
  Q = n(981631),
  J = n(689938),
  $ = n(456635);
t.Z = e => {
  var t;
  let {
    user: n,
    channel: s
  } = e, [ee, et] = i.useState(!1), en = i.useRef(0), {
    analyticsLocations: el
  } = (0, d.ZP)(u.Z.PROFILE_PANEL), ei = null == n ? void 0 : n.isNonUserBot(), es = (0, M.ZP)(n.id), {
    installedIntegrations: ea,
    fetched: er,
    appsInGDMEnabled: eo,
    availableApplications: ec
  } = (0, m.j)({
    channelId: s.id
  }), eu = (0, r.e7)([T.Z, C.Z], () => {
    var e;
    return null != n ? C.Z.getChannel(null === (e = T.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: ed
  } = h.n.useExperiment({
    guildId: null == eu ? void 0 : eu.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), {
    activity: eh,
    customStatusActivity: em,
    isApplicationStreaming: ep,
    isMobile: eE,
    status: eg,
    hangStatusActivity: ef
  } = (0, r.cj)([g.Z, I.Z, _.Z], () => {
    let e = null != g.Z.getAnyStreamForUser(n.id);
    return {
      activity: I.Z.findActivity(n.id, t => {
        let {
          type: n
        } = t;
        return e ? n === Q.IIU.PLAYING : n !== Q.IIU.CUSTOM_STATUS && n !== Q.IIU.HANG_STATUS
      }),
      customStatusActivity: I.Z.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === Q.IIU.CUSTOM_STATUS
      }),
      isApplicationStreaming: e,
      isMobile: I.Z.isMobileOnline(n.id),
      status: ei ? null : I.Z.getStatus(n.id),
      hangStatusActivity: ed && null != eu && _.Z.can(Q.Plq.CONNECT, eu) ? I.Z.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === Q.IIU.HANG_STATUS
      }) : null
    }
  }), eC = null != eh || null != ef || ep, e_ = null !== (t = N.ZP.getNickname(null, s.id, n)) && void 0 !== t ? t : Z.ZP.getName(n), eI = (0, r.e7)([x.Z], () => x.Z.hidePersonalInformation), {
    mutualFriends: ex,
    isFetching: eT
  } = (0, j.Z)(n.id, !n.bot), {
    mutualGuilds: eN,
    isFetching: eZ
  } = (0, L.Z)(n.id, !n.bot), eS = !n.bot && null != ex && ex.length > 0, ev = !n.bot && null != eN && eN.length > 0, eA = (0, W.J)({
    popoutUser: n,
    source: k.m.PROFILE_PANEL
  }), eM = (0, c.ZP)();
  i.useEffect(() => {
    en.current = Date.now()
  }, []), i.useEffect(() => {
    null != es && (0, R.U)({
      displayProfile: es,
      isMobile: eE,
      loadDurationMs: Date.now() - en.current,
      activity: eh,
      customStatusActivity: em,
      status: eg
    })
  }, [es, eE, eh, em, eg]);
  let eR = null == eN ? void 0 : eN.map(e => {
      let {
        guild: t,
        nick: i
      } = e;
      return (0, l.jsx)(y.D, {
        user: n,
        guild: t,
        nick: i,
        theme: eM,
        onSelect: () => (0, E.X)(t.id)
      }, t.id)
    }),
    ej = null == ex ? void 0 : ex.map(e => {
      let {
        key: t,
        user: n,
        status: i
      } = e;
      return (0, l.jsx)(b.T, {
        user: n,
        status: i,
        onSelect: () => {
          (0, P.openUserProfileModal)({
            userId: n.id,
            channelId: s.id,
            sourceAnalyticsLocations: el,
            analyticsLocation: {
              section: Q.jXE.DM_PROFILE
            }
          })
        }
      }, t)
    }),
    eL = ea.map(e => (0, l.jsx)(Y.Z, {
      channel: s,
      integration: e
    }, e.application.id)),
    eO = i.useCallback(() => et(!0), []),
    eP = i.useCallback(() => et(!1), []),
    eb = (0, r.e7)([f.default], () => f.default.getId()),
    ey = n.id === eb,
    eD = n.bot || ey,
    {
      enabled: eU
    } = (0, S.qI)({
      autoTrackExposure: !0,
      location: u.Z.PROFILE,
      disable: eD
    });
  return (0, l.jsx)(d.Gt, {
    value: el,
    children: (0, l.jsx)(v.Mt, {
      layout: "DM_PANEL",
      userId: n.id,
      channelId: s.id,
      children: (0, l.jsx)("aside", {
        className: $.profilePanel,
        onMouseEnter: eO,
        onMouseLeave: eP,
        children: (0, l.jsxs)(O.Z, {
          user: n,
          displayProfile: es,
          profileType: X.y0.PANEL,
          themeOverride: eM,
          children: [eA.shouldShow && (0, l.jsx)(U.ZP, {
            user: n,
            upsellSource: k.m.PROFILE_PANEL,
            displayProfile: es,
            isInSidebar: !0,
            ...eA
          }, n.id), (0, l.jsxs)(o.ScrollerNone, {
            children: [(0, l.jsx)(q.Z, {
              user: n,
              displayProfile: es,
              channel: s,
              animateAssets: ee,
              forceShowPremiumBadge: ee
            }), (0, l.jsxs)(O.Z.Overlay, {
              className: $.overlay,
              children: [(0, l.jsx)(z.Z, {
                user: n,
                nickname: e_,
                pronouns: null == es ? void 0 : es.pronouns
              }), (0, l.jsx)(G.Z, {
                customStatusActivity: em,
                animate: ee
              }), (0, l.jsx)(w.Z, {}), (0, l.jsx)(B.Z, {
                bio: null == es ? void 0 : es.bio,
                hidePersonalInformation: eI,
                animateOnHover: !0,
                isHovering: ee,
                userId: n.id
              }), eU && (0, l.jsx)(D.ZP, {
                className: $.profileMutuals,
                user: n
              }), !n.isSystemUser() && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(V.Z, {
                  userId: n.id
                }), (0, l.jsx)(w.Z, {})]
              }), !n.isSystemUser() && (0, l.jsx)(F.Z, {
                user: n,
                setNote: !1
              })]
            }), eC ? (0, l.jsx)(O.Z.Overlay, {
              className: $.overlay,
              children: (0, l.jsx)(H.Z, {
                activity: null != eh || ep ? eh : ef,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: Q.ZY5.USER_PROFILE,
                    section: Q.jXE.DM_PROFILE
                  }
                }
              })
            }) : null, (ev || eS) && (0, l.jsxs)(O.Z.Overlay, {
              className: $.profilePanelConnections,
              children: [ev ? (0, l.jsx)(K.Z, {
                className: $.mutualGuildsList,
                header: J.Z.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: eN.length
                }),
                isLoadingHeader: eZ,
                loadingContentsCount: eN.length,
                itemType: K.R.MutualGuildList,
                onExpand: () => {
                  (0, A.pQ)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: el
                  })
                },
                children: eR
              }) : null, eS ? (0, l.jsx)(K.Z, {
                className: a()($.mutualFriendsList, {
                  [$.mutualFriendsDivider]: ev
                }),
                header: J.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: ex.length
                }),
                isLoadingHeader: eT,
                loadingContentsCount: ex.length,
                itemType: K.R.MutualFriendsList,
                onExpand: () => {
                  (0, A.pQ)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: el
                  })
                },
                children: ej
              }) : null]
            }), eo && (0, l.jsx)(O.Z.Overlay, {
              className: a()($.profilePanelConnections, $.appListThemedContainer),
              children: (0, l.jsxs)(K.Z, {
                header: eL.length > 0 ? J.Z.Messages.PRIVATE_CHANNEL_APPS_HEADER_COUNT.format({
                  count: eL.length
                }) : J.Z.Messages.PRIVATE_CHANNEL_APPS_HEADER,
                isLoadingContents: !er,
                isLoadingHeader: !1,
                itemType: K.R.AppsList,
                children: [eL, ec.length > 0 && (0, l.jsxs)("div", {
                  className: $.appButtonContainer,
                  children: [0 === ea.length && (0, l.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: J.Z.Messages.PRIVATE_CHANNEL_ADD_APPS_INFO
                  }), (0, l.jsx)(o.Button, {
                    onClick: () => {
                      (0, o.openModal)(e => (0, l.jsx)(p.default, {
                        channelId: s.id,
                        ...e
                      }))
                    },
                    color: $.appButtonColor,
                    className: $.appButton,
                    fullWidth: !0,
                    size: o.ButtonSizes.SMALL,
                    children: J.Z.Messages.PRIVATE_CHANNEL_ADD_APPS
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