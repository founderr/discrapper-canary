"use strict";
n.d(t, {
  Z: function() {
    return x
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(410575),
  l = n(727637),
  u = n(980591),
  _ = n(58540),
  c = n(603113),
  d = n(420660),
  E = n(100527),
  I = n(906732),
  T = n(812206),
  h = n(835473),
  f = n(199902),
  S = n(271383),
  A = n(430824),
  N = n(158776),
  m = n(699516),
  O = n(626135),
  R = n(785717),
  p = n(621853),
  g = n(505737),
  C = n(318661),
  v = n(502762),
  L = n(192133),
  D = n(240328),
  M = n(436478),
  P = n(131640),
  y = n(664202),
  U = n(228168),
  b = n(981631),
  G = n(616922),
  w = n(530086);

function B(e) {
  e.stopPropagation()
}

function x(e) {
  let {
    user: t,
    guildId: n,
    channelId: x,
    messageId: k,
    roleId: V,
    setNote: Z,
    closePopout: H,
    setPopoutRef: F,
    disableUserProfileLink: Y = __OVERLAY__,
    analyticsParams: j = {},
    newAnalyticsLocations: W = []
  } = e, {
    analyticsLocations: K
  } = (0, I.ZP)([...W, E.Z.PROFILE_POPOUT]), z = r.useRef(null), q = (0, C.ZP)(t.id, n), X = (0, l.Z)(z), Q = (0, s.e7)([p.Z], () => {
    var e;
    return null === (e = p.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), J = (0, s.e7)([A.Z], () => null != n ? A.Z.getGuild(n) : null), $ = (0, s.e7)([S.ZP], () => null != n ? S.ZP.getMember(n, t.id) : null), ee = t.isNonUserBot(), {
    activity: et,
    customStatusActivity: en,
    status: ei,
    isMobile: er,
    isApplicationStreaming: es
  } = (0, s.cj)([f.Z, N.Z], () => {
    let e = null != f.Z.getAnyStreamForUser(t.id);
    return {
      activity: N.Z.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === b.IIU.PLAYING : n !== b.IIU.CUSTOM_STATUS
      }),
      customStatusActivity: N.Z.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === b.IIU.CUSTOM_STATUS
      }),
      status: ee ? null : N.Z.getStatus(t.id),
      isMobile: N.Z.isMobileOnline(t.id),
      isApplicationStreaming: e
    }
  }), [eo, ea] = r.useState(!1), el = r.useMemo(() => null != n ? {
    [n]: [t.id]
  } : {}, [n, t.id]);
  (0, _.$)(el);
  let eu = (0, g.Z)(t.id, n),
    e_ = (0, y.J)({
      popoutUser: t,
      source: M.m.USER_POPOUT,
      guildId: n
    }),
    [ec, ed] = r.useState(!1);
  (0, u.Z)(() => ed(!0), e_.shouldShow ? 250 : null);
  let eE = (0, h.q)(null == et ? void 0 : et.application_id);
  return r.useEffect(() => {
    null == F || F(null == z ? void 0 : z.current)
  }, [z, F]), r.useEffect(() => {
    if (!eo) {
      if ((null == et ? void 0 : et.application_id) == null || null != eE)(null == n || (null == $ ? void 0 : $.fullProfileLoadedTimestamp) != null) && (function() {
        var e;
        let i, r, s;
        null != et && (i = et.party, r = et.assets, s = null != et.application_id ? T.Z.getApplication(et.application_id) : null);
        let o = ei;
        ei === b.Skl.ONLINE && (o = er ? b.j28.ONLINE_MOBILE : b.j28.ONLINE_DESKTOP);
        let a = null != $ ? {
            has_nickname: !!(null == $ ? void 0 : $.nick),
            has_guild_member_avatar: !!(null == $ ? void 0 : $.avatar),
            has_guild_member_banner: !!(null == q ? void 0 : q.isUsingGuildMemberBanner()),
            has_guild_member_bio: !!(null == q ? void 0 : q.isUsingGuildMemberBio())
          } : {},
          l = null != Q ? {
            other_application_id: null == Q ? void 0 : Q.id,
            other_application_name: t.toString()
          } : {};
        O.default.track(b.rMx.OPEN_POPOUT, {
          type: "Profile Popout",
          guild_id: n,
          channel_id: x,
          other_user_id: t.id,
          application_id: null != et ? et.application_id : void 0,
          application_name: null != et ? et.name : void 0,
          sku_id: null != s ? s.primarySkuId : null,
          is_friend: m.Z.isFriend(t.id),
          has_images: !!(null !== (e = null == r ? void 0 : r.large_image) && void 0 !== e ? e : null == r ? void 0 : r.small_image),
          party_max: null != i && null != i.size ? i.size[1] : void 0,
          party_id: null != i ? i.id : void 0,
          party_platform: null != i && (0, G.Ps)(i.id) ? b.ABu.SPOTIFY : null,
          game_platform: (0, c.Z)(et),
          profile_user_status: o,
          is_streaming: es,
          has_custom_status: null != en,
          has_avatar_decoration: null != t.avatarDecoration,
          has_profile_effect: (null == q ? void 0 : q.profileEffectId) != null,
          profile_has_nitro_customization: null != q && (null == q ? void 0 : q.hasPremiumCustomization()),
          profile_has_theme_color_customized: null != q && q.hasThemeColors(),
          profile_has_theme_animation: (null == q ? void 0 : q.popoutAnimationParticleType) != null,
          ...a,
          ...l,
          ...j
        })
      }(), ea(!0))
    }
  }, [$, null == et ? void 0 : et.application_id, eE, eo, n]), (0, i.jsx)(I.Gt, {
    value: K,
    children: (0, i.jsx)(R.Mt, {
      layout: "POPOUT",
      userId: t.id,
      guildId: n,
      channelId: x,
      messageId: k,
      roleId: V,
      shouldTrackViewOnMount: null == $ || null != $.fullProfileLoadedTimestamp,
      children: (0, i.jsx)(a.Z, {
        section: b.jXE.PROFILE_POPOUT,
        children: (0, i.jsx)(o.Dialog, {
          ref: z,
          "aria-label": t.username,
          onClick: B,
          onContextMenu: B,
          style: e_.shouldShow ? {
            marginTop: D.Ao
          } : void 0,
          children: (0, i.jsxs)(v.Z, {
            user: t,
            displayProfile: q,
            profileType: U.y0.POPOUT,
            className: e_.shouldShow ? w.hasCollectiblesUpsell : void 0,
            showOutOfBoundaryComponents: ec,
            children: [(0, i.jsx)(P.ZP, {
              user: t,
              displayProfile: q,
              guildId: n,
              channelId: x,
              onClose: () => null == H ? void 0 : H(),
              isMobile: er,
              isStreaming: (0, d.Z)(et),
              status: ei,
              disableUserProfileLink: Y,
              isHovering: X,
              upsell: e_.shouldShow ? (0, i.jsx)(D.ZP, {
                user: t,
                upsellSource: M.m.USER_POPOUT,
                displayProfile: q,
                onClose: H,
                ...e_
              }) : void 0
            }), (0, i.jsx)(v.Z.Overlay, {
              children: (0, i.jsx)(L.Z, {
                activity: et,
                customStatusActivity: en,
                displayProfile: q,
                user: t,
                guild: J,
                guildMember: $,
                channelId: x,
                onClose: H,
                setNote: Z,
                canDM: eu,
                analyticsParams: j
              })
            })]
          })
        })
      })
    })
  })
}