"use strict";
l.r(t), l.d(t, {
  default: function() {
    return G
  }
}), l("222007");
var s = l("37983"),
  i = l("884691"),
  n = l("627445"),
  u = l.n(n),
  a = l("446674"),
  o = l("77078"),
  r = l("901582"),
  d = l("252744"),
  c = l("340066"),
  f = l("750560"),
  _ = l("575365"),
  S = l("502651"),
  T = l("812204"),
  E = l("685665"),
  C = l("299285"),
  p = l("442939"),
  m = l("373469"),
  I = l("26989"),
  L = l("305961"),
  P = l("824563"),
  v = l("27618"),
  O = l("697218"),
  h = l("599110"),
  A = l("713135"),
  g = l("561845"),
  U = l("217513"),
  b = l("641055"),
  R = l("430312"),
  D = l("763866"),
  y = l("789321"),
  N = l("627601"),
  M = l("935409"),
  x = l("849674"),
  k = l("590456"),
  F = l("49111"),
  B = l("450484"),
  j = l("304118");

function w(e) {
  e.stopPropagation()
}

function H(e) {
  let {
    user: t,
    guildId: l,
    channelId: n,
    setNote: u,
    closePopout: O,
    setPopoutRef: H,
    disableUserProfileLink: G = __OVERLAY__,
    analyticsParams: Y = {}
  } = e, z = i.useRef(null), V = (0, U.default)(t.id, l), W = (0, d.default)(z), K = (0, a.useStateFromStores)([A.default], () => {
    var e;
    return null === (e = A.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), {
    AnalyticsLocationProvider: J
  } = (0, E.default)(T.default.PROFILE_POPOUT), q = (0, a.useStateFromStores)([L.default], () => null != l ? L.default.getGuild(l) : null), Z = (0, a.useStateFromStores)([I.default], () => null != l ? I.default.getMember(l, t.id) : null), Q = t.isNonUserBot(), {
    activity: X,
    customStatusActivity: $,
    status: ee,
    isMobile: et,
    isApplicationStreaming: el
  } = (0, a.useStateFromStoresObject)([m.default, P.default], () => {
    let e = null != m.default.getAnyStreamForUser(t.id);
    return {
      activity: P.default.findActivity(t.id, t => {
        let {
          type: l
        } = t;
        return e ? l === F.ActivityTypes.PLAYING : l !== F.ActivityTypes.CUSTOM_STATUS
      }),
      customStatusActivity: P.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === F.ActivityTypes.CUSTOM_STATUS
      }),
      status: Q ? null : P.default.getStatus(t.id),
      isMobile: P.default.isMobileOnline(t.id),
      isApplicationStreaming: e
    }
  }), [es, ei] = i.useState(!1), en = i.useMemo(() => null != l ? {
    [l]: [t.id]
  } : {}, [l, t.id]);
  (0, f.useSubscribeGuildMembers)(en);
  let eu = (0, g.default)(t.id, l),
    ea = (0, x.useShouldShowUserPopoutCollectiblesUpsell)({
      popoutUser: t,
      source: N.UserPopoutUpsellSource.USER_POPOUT,
      guildId: l
    }),
    [eo, er] = i.useState(!1);
  (0, c.default)(() => er(!0), ea.shouldShow ? 250 : null);
  let ed = (0, p.useGetOrFetchApplication)(null == X ? void 0 : X.application_id);
  return i.useEffect(() => {
    null == H || H(null == z ? void 0 : z.current)
  }, [z, H]), i.useEffect(() => {
    if (!es)((null == X ? void 0 : X.application_id) == null || null != ed) && (null == l || (null == Z ? void 0 : Z.fullProfileLoadedTimestamp) != null) && (function() {
      var e;
      let s, i, u;
      null != X && (s = X.party, i = X.assets, u = null != X.application_id ? C.default.getApplication(X.application_id) : null);
      let a = ee;
      ee === F.StatusTypes.ONLINE && (a = et ? F.AnalyticsUserStatusTypes.ONLINE_MOBILE : F.AnalyticsUserStatusTypes.ONLINE_DESKTOP);
      let o = null != Z ? {
          has_nickname: !!(null == Z ? void 0 : Z.nick),
          has_guild_member_avatar: !!(null == Z ? void 0 : Z.avatar),
          has_guild_member_banner: !!(null == V ? void 0 : V.isUsingGuildMemberBanner()),
          has_guild_member_bio: !!(null == V ? void 0 : V.isUsingGuildMemberBio())
        } : {},
        r = null != K ? {
          other_application_id: null == K ? void 0 : K.id,
          other_application_name: t.toString()
        } : {};
      h.default.track(F.AnalyticEvents.OPEN_POPOUT, {
        type: "Profile Popout",
        guild_id: l,
        channel_id: n,
        other_user_id: t.id,
        application_id: null != X ? X.application_id : void 0,
        application_name: null != X ? X.name : void 0,
        sku_id: null != u ? u.primarySkuId : null,
        is_friend: v.default.isFriend(t.id),
        has_images: !!(null !== (e = null == i ? void 0 : i.large_image) && void 0 !== e ? e : null == i ? void 0 : i.small_image),
        party_max: null != s && null != s.size ? s.size[1] : void 0,
        party_id: null != s ? s.id : void 0,
        party_platform: null != s && (0, B.isSpotifyParty)(s.id) ? F.PlatformTypes.SPOTIFY : null,
        game_platform: (0, _.default)(X),
        profile_user_status: a,
        is_streaming: el,
        has_custom_status: null != $,
        has_avatar_decoration: null != t.avatarDecoration,
        has_profile_effect: (null == V ? void 0 : V.profileEffectId) != null,
        profile_has_nitro_customization: null != V && (null == V ? void 0 : V.hasPremiumCustomization()),
        profile_has_theme_color_customized: null != V && V.hasThemeColors(),
        profile_has_theme_animation: (null == V ? void 0 : V.popoutAnimationParticleType) != null,
        ...o,
        ...r,
        ...Y
      })
    }(), ei(!0))
  }, [Z, null == X ? void 0 : X.application_id, ed, es, l]), (0, s.jsx)(J, {
    children: (0, s.jsx)(r.default, {
      section: F.AnalyticsSections.PROFILE_POPOUT,
      children: (0, s.jsx)(o.Dialog, {
        ref: z,
        "aria-label": t.username,
        onClick: w,
        onContextMenu: w,
        style: ea.shouldShow ? {
          marginTop: y.DEFAULT_COLLECTIBLES_UPSELL_HEIGHT
        } : void 0,
        children: (0, s.jsxs)(R.default, {
          user: t,
          guildId: l,
          profileType: k.UserProfileTypes.POPOUT,
          className: ea.shouldShow ? j.hasCollectiblesUpsell : void 0,
          showOutOfBoundaryComponents: eo,
          children: [(0, s.jsx)(M.default, {
            user: t,
            displayProfile: V,
            guildId: l,
            channelId: n,
            onClose: () => null == O ? void 0 : O(),
            isMobile: et,
            isStreaming: (0, S.default)(X),
            status: ee,
            disableUserProfileLink: G,
            isHovering: W,
            upsell: ea.shouldShow ? (0, s.jsx)(y.default, {
              user: t,
              upsellSource: N.UserPopoutUpsellSource.USER_POPOUT,
              displayProfile: V,
              onClose: O,
              ...ea
            }) : void 0
          }), (0, s.jsxs)(R.default.Inner, {
            children: [(0, s.jsx)(b.default, {
              onTooltipClose: O
            }), (0, s.jsx)(D.default, {
              activity: X,
              customStatusActivity: $,
              displayProfile: V,
              user: t,
              guild: q,
              guildMember: Z,
              channelId: n,
              onClose: O,
              setNote: u,
              canDM: eu
            })]
          })]
        })
      })
    })
  })
}
var G = i.memo(function(e) {
  let {
    userId: t,
    user: l,
    ...i
  } = e, n = (0, a.useStateFromStores)([O.default], () => O.default.getUser(t), [t]), o = null != l ? l : n;
  return u(null != o, "Unexpected missing user"), (0, s.jsx)(H, {
    user: o,
    ...i
  })
})