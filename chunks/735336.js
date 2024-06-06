"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
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
  M = n("26290"),
  y = n("626135"),
  P = n("768581"),
  U = n("74538"),
  b = n("785717"),
  G = n("621853"),
  w = n("888778"),
  k = n("943217"),
  B = n("793397"),
  V = n("841040"),
  x = n("228168"),
  F = n("981631"),
  H = n("474936"),
  Y = n("689938"),
  j = n("214572");
let W = {
    [x.UserProfileTypes.POPOUT]: 18,
    [x.UserProfileTypes.MODAL]: 24,
    [x.UserProfileTypes.SETTINGS]: 0,
    [x.UserProfileTypes.PANEL]: 18,
    [x.UserProfileTypes.POMELO_POPOUT]: 18,
    [x.UserProfileTypes.CANCEL_MODAL]: 0
  },
  K = {
    [x.UserProfileTypes.MODAL]: F.AnalyticsPages.USER_PROFILE,
    [x.UserProfileTypes.POPOUT]: F.AnalyticsPages.USER_POPOUT,
    [x.UserProfileTypes.SETTINGS]: F.AnalyticsPages.USER_POPOUT,
    [x.UserProfileTypes.PANEL]: F.AnalyticsPages.DM_CHANNEL,
    [x.UserProfileTypes.POMELO_POPOUT]: F.AnalyticsPages.POMELO_POPOUT,
    [x.UserProfileTypes.CANCEL_MODAL]: F.AnalyticsPages.USER_POPOUT
  };

function z(e) {
  let {
    type: t,
    shown: s,
    onClick: o
  } = e, u = (0, l.useStateFromStores)([O.default], () => {
    let e = O.default.getCurrentUser();
    return U.default.canUsePremiumProfileCustomization(e)
  }), I = r.useRef(!1), {
    analyticsLocations: T
  } = (0, E.default)(c.default.BADGE);
  return r.useEffect(() => {
    s && !I.current && (I.current = !0, y.default.track(F.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: H.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: K[t],
        section: F.AnalyticsSections.NITRO_BANNER,
        object: F.AnalyticsObjects.NITRO_BADGE
      },
      location_stack: T
    }))
  }, [T, s, t]), (0, i.jsx)(d.Tooltip, {
    tooltipContentClassName: j.premiumIconTooltipContent,
    text: u ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
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
              title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  r(), _.default.open(F.UserSettingsSections.PREMIUM, null, {
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
      className: a()(j.premiumIconWrapper, {
        [j.visible]: s,
        [j.clickable]: !u
      }),
      children: (0, i.jsx)(M.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(v.default, {
          width: 16,
          height: 16,
          className: j.premiumIcon
        })
      })
    })
  })
}

function Z(e) {
  let {
    darkenOnHover: t,
    profileType: n,
    profileLabel: r,
    icon: s,
    ...a
  } = e, o = W[n], l = "pencil" === s ? D.default : L.default;
  return (0, i.jsx)(d.Clickable, {
    ...a,
    "aria-label": r,
    className: t ? j.pencilContainerDark : j.pencilContainer,
    children: (0, i.jsx)(d.Tooltip, {
      text: r,
      children: e => (0, i.jsx)(l, {
        ...e,
        width: o,
        height: o,
        className: j.editIcon
      })
    })
  })
}

function X(e) {
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
    showPremiumBadgeUpsell: y = !0,
    hasProfileEffect: W = !1
  } = e, K = (0, l.useStateFromStores)([N.default], () => N.default.getGuild(O)), X = (0, l.useStateFromStores)([A.default], () => A.default.getId()) === _.id && M, Q = U.default.isPremiumAtLeast(null == c ? void 0 : c.premiumType, H.PremiumTypes.TIER_2), {
    trackUserProfileAction: q
  } = (0, b.useUserProfileAnalyticsContext)(), [J, $] = r.useState(!1), ee = (0, l.useStateFromStores)([C.default], () => C.default.isFocused()), et = h.GifAutoPlay.getSetting(), {
    bannerSrc: en,
    status: ei
  } = (0, w.default)({
    displayProfile: c,
    size: (0, B.getUserBannerSize)(L),
    canAnimate: D || !et ? J : ee
  }), er = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), es = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), ea = (0, o.hex2int)((0, I.default)(_.getAvatarURL(O, es), er, !1)), eo = (0, T.default)(null !== (t = null == c ? void 0 : c.primaryColor) && void 0 !== t ? t : ea).hsl, el = (0, l.useStateFromStores)([G.default], () => G.default.getUserProfile(_.id)), eu = m.default.getChannel(p.default.getChannelId()), {
    appsInGDMEnabled: ed,
    availableApplications: e_
  } = (0, f.usePrivateChannelIntegrationState)({
    channelId: null !== (n = null == eu ? void 0 : eu.id) && void 0 !== n ? n : F.EMPTY_STRING_SNOWFLAKE_ID
  }), ec = null == el ? void 0 : el.application, eE = ed && null != e_.find(e => e.id === (null == ec ? void 0 : ec.id)), eI = (0, S.default)({
    analyticsLocation: {
      page: F.AnalyticsPages.USER_POPOUT,
      section: F.AnalyticsSections.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(k.default, {
    isPremium: Q,
    hasThemeColors: null !== (s = null == c ? void 0 : c.canEditThemes) && void 0 !== s && s,
    profileType: L,
    hasBanner: null != en,
    hasProfileEffect: W,
    children: (0, i.jsxs)("div", {
      className: a()(j.banner, (0, B.getUserBannerStyles)({
        profileType: L,
        user: {
          hasBanner: null != en,
          isPremium: Q,
          hasProfileEffect: W
        }
      }), {
        [j.reducedMotion]: !et
      }),
      onMouseMove: () => $(!0),
      onMouseLeave: () => $(!1),
      style: {
        backgroundImage: null != en ? "url(".concat(en, ")") : void 0,
        backgroundColor: ei !== w.BannerLoadingStatus.COMPLETE ? u.default.unsafe_rawColors.PRIMARY_800.css : eo
      },
      children: [X ? null == K ? (0, i.jsx)(Z, {
        darkenOnHover: W && v,
        profileType: L,
        profileLabel: Y.default.Messages.EDIT_PROFILE,
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
          return (0, i.jsx)(V.default, {
            onClose: t,
            onSelect: E,
            guild: K
          })
        },
        children: e => (0, i.jsx)(Z, {
          darkenOnHover: W && v,
          profileLabel: Y.default.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: L
        })
      }) : y && null != en && L !== x.UserProfileTypes.SETTINGS ? (0, i.jsx)(z, {
        type: L,
        shown: void 0 === v ? J : v,
        onClick: () => {
          q({
            action: "PRESS_PREMIUM_UPSELL"
          }), null == E || E()
        }
      }) : null, eE ? L !== x.UserProfileTypes.MODAL ? null : (0, i.jsx)(d.Clickable, {
        onClick: E,
        "aria-label": Y.default.Messages.BACK,
        className: j.pencilContainer,
        children: (0, i.jsx)(d.Tooltip, {
          text: Y.default.Messages.BACK,
          children: e => (0, i.jsx)(g.default, {
            ...e,
            className: j.closeIcon,
            color: "white"
          })
        })
      }) : null, !et && (0, P.isAnimatedImageURL)(en) && (0, i.jsx)(R.default, {
        className: j.gifTag
      })]
    })
  })
}