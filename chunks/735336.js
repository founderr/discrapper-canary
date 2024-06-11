"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Z
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("866442"),
  l = n("442837"),
  u = n("692547"),
  d = n("481060"),
  _ = n("230711"),
  c = n("100527"),
  E = n("906732"),
  I = n("220082"),
  T = n("583405"),
  f = n("556084"),
  S = n("300284"),
  h = n("695346"),
  A = n("314897"),
  m = n("592125"),
  N = n("430824"),
  p = n("944486"),
  O = n("594174"),
  C = n("451478"),
  R = n("311715"),
  g = n("465670"),
  L = n("937482"),
  v = n("466111"),
  D = n("185403"),
  M = n("626135"),
  y = n("768581"),
  P = n("74538"),
  U = n("785717"),
  b = n("621853"),
  G = n("888778"),
  w = n("943217"),
  k = n("793397"),
  B = n("841040"),
  x = n("228168"),
  V = n("981631"),
  F = n("474936"),
  H = n("689938"),
  Y = n("214572");
let j = {
    [x.UserProfileTypes.POPOUT]: 18,
    [x.UserProfileTypes.MODAL]: 24,
    [x.UserProfileTypes.SETTINGS]: 0,
    [x.UserProfileTypes.PANEL]: 18,
    [x.UserProfileTypes.POMELO_POPOUT]: 18,
    [x.UserProfileTypes.CANCEL_MODAL]: 0
  },
  W = {
    [x.UserProfileTypes.MODAL]: V.AnalyticsPages.USER_PROFILE,
    [x.UserProfileTypes.POPOUT]: V.AnalyticsPages.USER_POPOUT,
    [x.UserProfileTypes.SETTINGS]: V.AnalyticsPages.USER_POPOUT,
    [x.UserProfileTypes.PANEL]: V.AnalyticsPages.DM_CHANNEL,
    [x.UserProfileTypes.POMELO_POPOUT]: V.AnalyticsPages.POMELO_POPOUT,
    [x.UserProfileTypes.CANCEL_MODAL]: V.AnalyticsPages.USER_POPOUT
  };

function K(e) {
  let {
    type: t,
    shown: s,
    onClick: o
  } = e, u = (0, l.useStateFromStores)([O.default], () => {
    let e = O.default.getCurrentUser();
    return P.default.canUsePremiumProfileCustomization(e)
  }), I = r.useRef(!1), {
    analyticsLocations: T
  } = (0, E.default)(c.default.BADGE);
  return r.useEffect(() => {
    s && !I.current && (I.current = !0, M.default.track(V.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: F.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: W[t],
        section: V.AnalyticsSections.NITRO_BANNER,
        object: V.AnalyticsObjects.NITRO_BADGE
      },
      location_stack: T
    }))
  }, [T, s, t]), (0, i.jsx)(d.Tooltip, {
    tooltipContentClassName: Y.premiumIconTooltipContent,
    text: u ? H.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : H.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, i.jsx)(d.Clickable, {
      ...e,
      onClick: u ? void 0 : () => {
        var e;
        e = T, (0, d.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("30364")]).then(n.bind(n, "968031"));
          return n => {
            let {
              onClose: r,
              ...s
            } = n;
            return (0, i.jsx)(t, {
              analyticsLocations: e,
              title: H.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: H.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  r(), _.default.open(V.UserSettingsSections.PREMIUM, null, {
                    analyticsLocations: e
                  })
                }
              }),
              onClose: r,
              ...s
            })
          }
        }), null == o || o()
      },
      className: a()(Y.premiumIconWrapper, {
        [Y.visible]: s,
        [Y.clickable]: !u
      }),
      children: (0, i.jsx)(d.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(v.default, {
          width: 16,
          height: 16,
          className: Y.premiumIcon
        })
      })
    })
  })
}

function z(e) {
  let {
    darkenOnHover: t,
    profileType: n,
    profileLabel: r,
    icon: s,
    ...a
  } = e, o = j[n], l = "pencil" === s ? D.default : L.default;
  return (0, i.jsx)(d.Clickable, {
    ...a,
    "aria-label": r,
    className: t ? Y.pencilContainerDark : Y.pencilContainer,
    children: (0, i.jsx)(d.Tooltip, {
      text: r,
      children: e => (0, i.jsx)(l, {
        ...e,
        width: o,
        height: o,
        className: Y.editIcon
      })
    })
  })
}

function Z(e) {
  var t, n, s;
  let {
    user: _,
    displayProfile: c,
    onClose: E,
    guildId: O,
    profileType: L,
    isHovering: v,
    animateOnHover: D,
    allowEdit: M = !0,
    showPremiumBadgeUpsell: j = !0,
    hasProfileEffect: W = !1
  } = e, Z = (0, l.useStateFromStores)([N.default], () => N.default.getGuild(O)), Q = (0, l.useStateFromStores)([A.default], () => A.default.getId()) === _.id && M, X = P.default.isPremiumAtLeast(null == c ? void 0 : c.premiumType, F.PremiumTypes.TIER_2), {
    trackUserProfileAction: q
  } = (0, U.useUserProfileAnalyticsContext)(), [J, $] = r.useState(!1), ee = (0, l.useStateFromStores)([C.default], () => C.default.isFocused()), et = h.GifAutoPlay.getSetting(), {
    bannerSrc: en,
    status: ei
  } = (0, G.default)({
    displayProfile: c,
    size: (0, k.getUserBannerSize)(L),
    canAnimate: D || !et ? J : ee
  }), er = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), ea = (0, o.hex2int)((0, I.default)(_.getAvatarURL(O, es), er, !1)), eo = (0, T.default)(null !== (t = null == c ? void 0 : c.primaryColor) && void 0 !== t ? t : ea).hsl, el = (0, l.useStateFromStores)([b.default], () => b.default.getUserProfile(_.id)), eu = m.default.getChannel(p.default.getChannelId()), {
    appsInGDMEnabled: ed,
    availableApplications: e_
  } = (0, f.usePrivateChannelIntegrationState)({
    channelId: null !== (n = null == eu ? void 0 : eu.id) && void 0 !== n ? n : V.EMPTY_STRING_SNOWFLAKE_ID
  }), ec = null == el ? void 0 : el.application, eE = ed && null != e_.find(e => e.id === (null == ec ? void 0 : ec.id)), eI = (0, S.default)({
    analyticsLocation: {
      page: V.AnalyticsPages.USER_POPOUT,
      section: V.AnalyticsSections.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(w.default, {
    isPremium: X,
    hasThemeColors: null !== (s = null == c ? void 0 : c.canEditThemes) && void 0 !== s && s,
    profileType: L,
    hasBanner: null != en,
    hasProfileEffect: W,
    children: (0, i.jsxs)("div", {
      className: a()(Y.banner, (0, k.getUserBannerStyles)({
        profileType: L,
        user: {
          hasBanner: null != en,
          isPremium: X,
          hasProfileEffect: W
        }
      }), {
        [Y.reducedMotion]: !et
      }),
      onMouseMove: () => $(!0),
      onMouseLeave: () => $(!1),
      style: {
        backgroundImage: null != en ? "url(".concat(en, ")") : void 0,
        backgroundColor: ei !== G.BannerLoadingStatus.COMPLETE ? u.default.unsafe_rawColors.PRIMARY_800.css : eo
      },
      children: [Q ? null == Z ? (0, i.jsx)(z, {
        darkenOnHover: W && v,
        profileType: L,
        profileLabel: H.default.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          q({
            action: "EDIT_PROFILE"
          }), null == E || E(), eI()
        }
      }) : (0, i.jsx)(d.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(B.default, {
            onClose: t,
            onSelect: E,
            guild: Z
          })
        },
        children: e => (0, i.jsx)(z, {
          darkenOnHover: W && v,
          profileLabel: H.default.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: L
        })
      }) : j && null != en && L !== x.UserProfileTypes.SETTINGS ? (0, i.jsx)(K, {
        type: L,
        shown: void 0 === v ? J : v,
        onClick: () => {
          q({
            action: "PRESS_PREMIUM_UPSELL"
          }), null == E || E()
        }
      }) : null, eE ? L !== x.UserProfileTypes.MODAL ? null : (0, i.jsx)(d.Clickable, {
        onClick: E,
        "aria-label": H.default.Messages.BACK,
        className: Y.pencilContainer,
        children: (0, i.jsx)(d.Tooltip, {
          text: H.default.Messages.BACK,
          children: e => (0, i.jsx)(g.default, {
            ...e,
            className: Y.closeIcon,
            color: "white"
          })
        })
      }) : null, !et && (0, y.isAnimatedImageURL)(en) && (0, i.jsx)(R.default, {
        className: Y.gifTag
      })]
    })
  })
}