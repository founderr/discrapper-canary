"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("410575"),
  l = n("727637"),
  u = n("980591"),
  d = n("58540"),
  _ = n("603113"),
  c = n("420660"),
  E = n("100527"),
  I = n("906732"),
  T = n("812206"),
  f = n("835473"),
  S = n("199902"),
  h = n("271383"),
  A = n("430824"),
  m = n("158776"),
  N = n("699516"),
  p = n("626135"),
  O = n("785717"),
  C = n("621853"),
  R = n("505737"),
  g = n("318661"),
  L = n("502762"),
  v = n("192133"),
  D = n("240328"),
  M = n("436478"),
  y = n("131640"),
  P = n("664202"),
  U = n("228168"),
  b = n("981631"),
  G = n("616922"),
  w = n("245876");

function k(e) {
  e.stopPropagation()
}

function B(e) {
  let {
    user: t,
    guildId: n,
    channelId: B,
    messageId: V,
    roleId: x,
    setNote: F,
    closePopout: H,
    setPopoutRef: Y,
    disableUserProfileLink: j = __OVERLAY__,
    analyticsParams: W = {},
    newAnalyticsLocations: K = []
  } = e, {
    analyticsLocations: z
  } = (0, I.default)([...K, E.default.PROFILE_POPOUT]), Z = r.useRef(null), Q = (0, g.default)(t.id, n), X = (0, l.default)(Z), q = (0, s.useStateFromStores)([C.default], () => {
    var e;
    return null === (e = C.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), J = (0, s.useStateFromStores)([A.default], () => null != n ? A.default.getGuild(n) : null), $ = (0, s.useStateFromStores)([h.default], () => null != n ? h.default.getMember(n, t.id) : null), ee = t.isNonUserBot(), {
    activity: et,
    customStatusActivity: en,
    status: ei,
    isMobile: er,
    isApplicationStreaming: es
  } = (0, s.useStateFromStoresObject)([S.default, m.default], () => {
    let e = null != S.default.getAnyStreamForUser(t.id);
    return {
      activity: m.default.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === b.ActivityTypes.PLAYING : n !== b.ActivityTypes.CUSTOM_STATUS
      }),
      customStatusActivity: m.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === b.ActivityTypes.CUSTOM_STATUS
      }),
      status: ee ? null : m.default.getStatus(t.id),
      isMobile: m.default.isMobileOnline(t.id),
      isApplicationStreaming: e
    }
  }), [ea, eo] = r.useState(!1), el = r.useMemo(() => null != n ? {
    [n]: [t.id]
  } : {}, [n, t.id]);
  (0, d.useSubscribeGuildMembers)(el);
  let eu = (0, R.default)(t.id, n),
    ed = (0, P.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: t,
      source: M.UserPopoutUpsellSource.USER_POPOUT,
      guildId: n
    }),
    [e_, ec] = r.useState(!1);
  (0, u.default)(() => ec(!0), ed.shouldShow ? 250 : null);
  let eE = (0, f.useGetOrFetchApplication)(null == et ? void 0 : et.application_id);
  return r.useEffect(() => {
    null == Y || Y(null == Z ? void 0 : Z.current)
  }, [Z, Y]), r.useEffect(() => {
    if (!ea)((null == et ? void 0 : et.application_id) == null || null != eE) && (null == n || (null == $ ? void 0 : $.fullProfileLoadedTimestamp) != null) && (function() {
      var e;
      let i, r, s;
      null != et && (i = et.party, r = et.assets, s = null != et.application_id ? T.default.getApplication(et.application_id) : null);
      let a = ei;
      ei === b.StatusTypes.ONLINE && (a = er ? b.AnalyticsUserStatusTypes.ONLINE_MOBILE : b.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
      let o = null != $ ? {
          has_nickname: !!(null == $ ? void 0 : $.nick),
          has_guild_member_avatar: !!(null == $ ? void 0 : $.avatar),
          has_guild_member_banner: !!(null == Q ? void 0 : Q.isUsingGuildMemberBanner()),
          has_guild_member_bio: !!(null == Q ? void 0 : Q.isUsingGuildMemberBio())
        } : {},
        l = null != q ? {
          other_application_id: null == q ? void 0 : q.id,
          other_application_name: t.toString()
        } : {};
      p.default.track(b.AnalyticEvents.OPEN_POPOUT, {
        type: "Profile Popout",
        guild_id: n,
        channel_id: B,
        other_user_id: t.id,
        application_id: null != et ? et.application_id : void 0,
        application_name: null != et ? et.name : void 0,
        sku_id: null != s ? s.primarySkuId : null,
        is_friend: N.default.isFriend(t.id),
        has_images: !!(null !== (e = null == r ? void 0 : r.large_image) && void 0 !== e ? e : null == r ? void 0 : r.small_image),
        party_max: null != i && null != i.size ? i.size[1] : void 0,
        party_id: null != i ? i.id : void 0,
        party_platform: null != i && (0, G.isSpotifyParty)(i.id) ? b.PlatformTypes.SPOTIFY : null,
        game_platform: (0, _.default)(et),
        profile_user_status: a,
        is_streaming: es,
        has_custom_status: null != en,
        has_avatar_decoration: null != t.avatarDecoration,
        has_profile_effect: (null == Q ? void 0 : Q.profileEffectId) != null,
        profile_has_nitro_customization: null != Q && (null == Q ? void 0 : Q.hasPremiumCustomization()),
        profile_has_theme_color_customized: null != Q && Q.hasThemeColors(),
        profile_has_theme_animation: (null == Q ? void 0 : Q.popoutAnimationParticleType) != null,
        ...o,
        ...l,
        ...W
      })
    }(), eo(!0))
  }, [$, null == et ? void 0 : et.application_id, eE, ea, n]), (0, i.jsx)(I.AnalyticsLocationProvider, {
    value: z,
    children: (0, i.jsx)(O.UserProfileAnalyticsProvider, {
      layout: "POPOUT",
      userId: t.id,
      guildId: n,
      channelId: B,
      messageId: V,
      roleId: x,
      shouldTrackViewOnMount: null == $ || null != $.fullProfileLoadedTimestamp,
      children: (0, i.jsx)(o.default, {
        section: b.AnalyticsSections.PROFILE_POPOUT,
        children: (0, i.jsx)(a.Dialog, {
          ref: Z,
          "aria-label": t.username,
          onClick: k,
          onContextMenu: k,
          style: ed.shouldShow ? {
            marginTop: D.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
          } : void 0,
          children: (0, i.jsxs)(L.default, {
            user: t,
            displayProfile: Q,
            profileType: U.UserProfileTypes.POPOUT,
            className: ed.shouldShow ? w.hasCollectiblesUpsell : void 0,
            showOutOfBoundaryComponents: e_,
            children: [(0, i.jsx)(y.default, {
              user: t,
              displayProfile: Q,
              guildId: n,
              channelId: B,
              onClose: () => null == H ? void 0 : H(),
              isMobile: er,
              isStreaming: (0, c.default)(et),
              status: ei,
              disableUserProfileLink: j,
              isHovering: X,
              upsell: ed.shouldShow ? (0, i.jsx)(D.default, {
                user: t,
                upsellSource: M.UserPopoutUpsellSource.USER_POPOUT,
                displayProfile: Q,
                onClose: H,
                ...ed
              }) : void 0
            }), (0, i.jsx)(L.default.Overlay, {
              children: (0, i.jsx)(v.default, {
                activity: et,
                customStatusActivity: en,
                displayProfile: Q,
                user: t,
                guild: J,
                guildMember: $,
                channelId: B,
                onClose: H,
                setNote: F,
                canDM: eu,
                analyticsParams: W
              })
            })]
          })
        })
      })
    })
  })
}