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
  m = n(769654),
  E = n(199902),
  p = n(314897),
  g = n(592125),
  f = n(496675),
  C = n(158776),
  _ = n(246946),
  I = n(979651),
  x = n(5192),
  T = n(51144),
  N = n(342656),
  Z = n(785717),
  S = n(221292),
  v = n(318661),
  A = n(57048),
  M = n(726059),
  R = n(162267),
  j = n(502762),
  L = n(171368),
  O = n(944546),
  P = n(470900),
  y = n(421486),
  b = n(240328),
  D = n(436478),
  U = n(138394),
  k = n(248345),
  w = n(19836),
  H = n(538564),
  G = n(319300),
  B = n(591600),
  V = n(584045),
  F = n(664202),
  z = n(772056),
  W = n(747711),
  Y = n(228168),
  K = n(981631),
  q = n(689938),
  X = n(456635);
t.Z = e => {
  var t;
  let {
    user: n,
    channel: s
  } = e, [Q, J] = i.useState(!1), $ = i.useRef(0), {
    analyticsLocations: ee
  } = (0, d.ZP)(u.Z.PROFILE_PANEL), et = null == n ? void 0 : n.isNonUserBot(), en = (0, v.ZP)(n.id), el = (0, r.e7)([I.Z, g.Z], () => {
    var e;
    return null != n ? g.Z.getChannel(null === (e = I.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId) : null
  }), {
    enableHangStatus: ei
  } = h.n.useExperiment({
    guildId: null == el ? void 0 : el.guild_id,
    location: "ActivityStatus"
  }, {
    autoTrackExposure: !1
  }), {
    activity: es,
    customStatusActivity: ea,
    isApplicationStreaming: er,
    isMobile: eo,
    status: ec,
    hangStatusActivity: eu
  } = (0, r.cj)([E.Z, C.Z, f.Z], () => {
    let e = null != E.Z.getAnyStreamForUser(n.id);
    return {
      activity: C.Z.findActivity(n.id, t => {
        let {
          type: n
        } = t;
        return e ? n === K.IIU.PLAYING : n !== K.IIU.CUSTOM_STATUS && n !== K.IIU.HANG_STATUS
      }),
      customStatusActivity: C.Z.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === K.IIU.CUSTOM_STATUS
      }),
      isApplicationStreaming: e,
      isMobile: C.Z.isMobileOnline(n.id),
      status: et ? null : C.Z.getStatus(n.id),
      hangStatusActivity: ei && null != el && f.Z.can(K.Plq.CONNECT, el) ? C.Z.findActivity(n.id, e => {
        let {
          type: t
        } = e;
        return t === K.IIU.HANG_STATUS
      }) : null
    }
  }), ed = null != es || null != eu || er, eh = null !== (t = x.ZP.getNickname(null, s.id, n)) && void 0 !== t ? t : T.ZP.getName(n), em = (0, r.e7)([_.Z], () => _.Z.hidePersonalInformation), {
    mutualFriends: eE,
    isFetching: ep
  } = (0, M.Z)(n.id, !n.bot), {
    mutualGuilds: eg,
    isFetching: ef
  } = (0, R.Z)(n.id, !n.bot), eC = !n.bot && null != eE && eE.length > 0, e_ = !n.bot && null != eg && eg.length > 0, eI = (0, F.J)({
    popoutUser: n,
    source: D.m.PROFILE_PANEL
  }), ex = (0, c.ZP)();
  i.useEffect(() => {
    $.current = Date.now()
  }, []), i.useEffect(() => {
    null != en && (0, A.U)({
      displayProfile: en,
      isMobile: eo,
      loadDurationMs: Date.now() - $.current,
      activity: es,
      customStatusActivity: ea,
      status: ec
    })
  }, [en, eo, es, ea, ec]);
  let eT = null == eg ? void 0 : eg.map(e => {
      let {
        guild: t,
        nick: i
      } = e;
      return (0, l.jsx)(P.D, {
        user: n,
        guild: t,
        nick: i,
        theme: ex,
        onSelect: () => (0, m.X)(t.id)
      }, t.id)
    }),
    eN = null == eE ? void 0 : eE.map(e => {
      let {
        key: t,
        user: n,
        status: i
      } = e;
      return (0, l.jsx)(O.T, {
        user: n,
        status: i,
        onSelect: () => {
          (0, L.openUserProfileModal)({
            userId: n.id,
            channelId: s.id,
            sourceAnalyticsLocations: ee,
            analyticsLocation: {
              section: K.jXE.DM_PROFILE
            }
          })
        }
      }, t)
    }),
    eZ = i.useCallback(() => J(!0), []),
    eS = i.useCallback(() => J(!1), []),
    ev = (0, r.e7)([p.default], () => p.default.getId()),
    eA = n.id === ev,
    eM = n.bot || eA,
    {
      enabled: eR
    } = (0, N.qI)({
      autoTrackExposure: !0,
      location: u.Z.PROFILE,
      disable: eM
    });
  return (0, l.jsx)(d.Gt, {
    value: ee,
    children: (0, l.jsx)(Z.Mt, {
      layout: "DM_PANEL",
      userId: n.id,
      channelId: s.id,
      children: (0, l.jsx)("aside", {
        className: X.profilePanel,
        onMouseEnter: eZ,
        onMouseLeave: eS,
        children: (0, l.jsxs)(j.Z, {
          user: n,
          displayProfile: en,
          profileType: Y.y0.PANEL,
          themeOverride: ex,
          children: [eI.shouldShow && (0, l.jsx)(b.ZP, {
            user: n,
            upsellSource: D.m.PROFILE_PANEL,
            displayProfile: en,
            isInSidebar: !0,
            ...eI
          }, n.id), (0, l.jsxs)(o.ScrollerNone, {
            children: [(0, l.jsx)(W.Z, {
              user: n,
              displayProfile: en,
              channel: s,
              animateAssets: Q,
              forceShowPremiumBadge: Q
            }), (0, l.jsxs)(j.Z.Overlay, {
              className: X.overlay,
              children: [(0, l.jsx)(V.Z, {
                user: n,
                nickname: eh,
                pronouns: null == en ? void 0 : en.pronouns
              }), (0, l.jsx)(H.Z, {
                customStatusActivity: ea,
                animate: Q
              }), (0, l.jsx)(U.Z, {}), (0, l.jsx)(w.Z, {
                bio: null == en ? void 0 : en.bio,
                hidePersonalInformation: em,
                animateOnHover: !0,
                isHovering: Q,
                userId: n.id
              }), eR && (0, l.jsx)(y.ZP, {
                className: X.profileMutuals,
                user: n
              }), !n.isSystemUser() && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(G.Z, {
                  userId: n.id
                }), (0, l.jsx)(U.Z, {})]
              }), !n.isSystemUser() && (0, l.jsx)(B.Z, {
                user: n,
                setNote: !1
              })]
            }), ed ? (0, l.jsx)(j.Z.Overlay, {
              className: X.overlay,
              children: (0, l.jsx)(k.Z, {
                activity: null != es || er ? es : eu,
                user: n,
                channelId: s.id,
                analyticsParams: {
                  location: {
                    page: K.ZY5.USER_PROFILE,
                    section: K.jXE.DM_PROFILE
                  }
                }
              })
            }) : null, (e_ || eC) && (0, l.jsxs)(j.Z.Overlay, {
              className: X.profilePanelConnections,
              children: [e_ ? (0, l.jsx)(z.Z, {
                className: X.mutualGuildsList,
                header: q.Z.Messages.MUTUAL_GUILDS_COUNT.format({
                  count: eg.length
                }),
                isLoadingHeader: ef,
                loadingContentsCount: eg.length,
                itemType: z.R.MutualGuildList,
                onExpand: () => {
                  (0, S.pQ)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_GUILDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: ee
                  })
                },
                children: eT
              }) : null, eC ? (0, l.jsx)(z.Z, {
                className: a()(X.mutualFriendsList, {
                  [X.mutualFriendsDivider]: e_
                }),
                header: q.Z.Messages.MUTUAL_FRIENDS_COUNT.format({
                  count: eE.length
                }),
                isLoadingHeader: ep,
                loadingContentsCount: eE.length,
                itemType: z.R.MutualFriendsList,
                onExpand: () => {
                  (0, S.pQ)({
                    action: "PRESS_SECTION",
                    section: "MUTUAL_FRIENDS",
                    layout: "DM_PANEL",
                    userId: n.id,
                    channelId: s.id,
                    analyticsLocations: ee
                  })
                },
                children: eN
              }) : null]
            })]
          })]
        })
      })
    })
  })
}