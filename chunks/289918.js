"use strict";
l.r(t), l.d(t, {
  default: function() {
    return K
  }
}), l("222007");
var r, a, n = l("37983"),
  s = l("884691"),
  i = l("414456"),
  o = l.n(i),
  u = l("509043"),
  d = l("446674"),
  c = l("669491"),
  f = l("77078"),
  T = l("79112"),
  p = l("812204"),
  m = l("685665"),
  E = l("462274"),
  P = l("335031"),
  S = l("252063"),
  v = l("38766"),
  h = l("845579"),
  g = l("271938"),
  _ = l("42203"),
  N = l("305961"),
  O = l("18494"),
  U = l("697218"),
  A = l("471671"),
  C = l("275623"),
  I = l("945330"),
  y = l("474571"),
  M = l("216422"),
  x = l("987772"),
  L = l("956089"),
  R = l("599110"),
  j = l("315102"),
  b = l("719923"),
  B = l("713135"),
  D = l("581295"),
  H = l("878569"),
  w = l("236100"),
  G = l("590456"),
  F = l("49111"),
  k = l("646718"),
  W = l("782340"),
  z = l("220817");
(a = r || (r = {}))[a.SHOULD_LOAD = 0] = "SHOULD_LOAD", a[a.LOADING = 1] = "LOADING", a[a.COMPLETE = 2] = "COMPLETE";
let Y = {
    [G.UserProfileTypes.POPOUT]: 18,
    [G.UserProfileTypes.MODAL]: 24,
    [G.UserProfileTypes.SETTINGS]: 0,
    [G.UserProfileTypes.PANEL]: 18,
    [G.UserProfileTypes.POMELO_POPOUT]: 18,
    [G.UserProfileTypes.CANCEL_MODAL]: 0
  },
  Z = {
    [G.UserProfileTypes.MODAL]: F.AnalyticsPages.USER_PROFILE,
    [G.UserProfileTypes.POPOUT]: F.AnalyticsPages.USER_POPOUT,
    [G.UserProfileTypes.SETTINGS]: F.AnalyticsPages.USER_POPOUT,
    [G.UserProfileTypes.PANEL]: F.AnalyticsPages.DM_CHANNEL,
    [G.UserProfileTypes.POMELO_POPOUT]: F.AnalyticsPages.POMELO_POPOUT,
    [G.UserProfileTypes.CANCEL_MODAL]: F.AnalyticsPages.USER_POPOUT
  };

function V(e) {
  let {
    type: t,
    shown: r,
    onClick: a
  } = e, i = (0, d.useStateFromStores)([U.default], () => {
    let e = U.default.getCurrentUser();
    return b.default.canUsePremiumProfileCustomization(e)
  }), u = s.useRef(!1), {
    analyticsLocations: c
  } = (0, m.default)(p.default.BADGE);
  return s.useEffect(() => {
    r && !u.current && (u.current = !0, R.default.track(F.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: k.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: Z[t],
        section: F.AnalyticsSections.NITRO_BANNER,
        object: F.AnalyticsObjects.NITRO_BADGE
      },
      location_stack: c
    }))
  }, [c, r, t]), (0, n.jsx)(f.Tooltip, {
    tooltipContentClassName: z.premiumIconTooltipContent,
    text: i ? W.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : W.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, n.jsx)(f.Clickable, {
      ...e,
      onClick: i ? void 0 : () => {
        var e;
        e = c, (0, f.openModalLazy)(async () => {
          let {
            default: t
          } = await l.el("292890").then(l.bind(l, "292890"));
          return l => {
            let {
              onClose: r,
              ...a
            } = l;
            return (0, n.jsx)(t, {
              analyticsLocations: e,
              title: W.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: W.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  r(), T.default.open(F.UserSettingsSections.PREMIUM, null, {
                    analyticsLocations: e
                  })
                }
              }),
              onClose: r,
              ...a
            })
          }
        }), null == a || a()
      },
      className: o(z.premiumIconWrapper, {
        [z.visible]: r,
        [z.clickable]: !i
      }),
      children: (0, n.jsx)(L.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, n.jsx)(M.default, {
          width: 16,
          height: 16,
          className: z.premiumIcon
        })
      })
    })
  })
}

function X(e) {
  let {
    darkenOnHover: t,
    profileType: l,
    profileLabel: r,
    icon: a,
    ...s
  } = e, i = Y[l], o = "pencil" === a ? x.default : y.default;
  return (0, n.jsx)(f.Clickable, {
    ...s,
    "aria-label": r,
    className: t ? z.pencilContainerDark : z.pencilContainer,
    children: (0, n.jsx)(f.Tooltip, {
      text: r,
      children: e => (0, n.jsx)(o, {
        ...e,
        width: i,
        height: i,
        className: z.editIcon
      })
    })
  })
}

function K(e) {
  var t, l, r;
  let {
    user: a,
    displayProfile: i,
    bannerSrc: T,
    onClose: p,
    guildId: m,
    profileType: U = G.UserProfileTypes.POPOUT,
    isHovering: y,
    animateOnHover: M,
    allowEdit: x = !0,
    showPremiumBadgeUpsell: L = !0,
    hasProfileEffect: R = !1
  } = e, [Y, Z] = s.useState((null == i ? void 0 : i.banner) == null ? 2 : 0), K = (0, d.useStateFromStores)([N.default], () => N.default.getGuild(m)), Q = (0, d.useStateFromStores)([g.default], () => g.default.getId()), q = Q === a.id && x, J = b.default.isPremiumAtLeast(null == i ? void 0 : i.premiumType, k.PremiumTypes.TIER_2), [$, ee] = s.useState(!1), et = (0, d.useStateFromStores)([A.default], () => A.default.isFocused()), el = h.GifAutoPlay.getSetting(), er = (0, f.useToken)(c.default.unsafe_rawColors.PRIMARY_800).hex(), ea = (0, f.getAvatarSize)(f.AvatarSizes.SIZE_80), en = (0, u.hex2int)((0, E.default)(a.getAvatarURL(m, ea), er, !1)), es = (0, P.default)(null !== (t = null == i ? void 0 : i.primaryColor) && void 0 !== t ? t : en).hsl, ei = (0, H.getUserBannerSize)(U), eo = null != T ? T : null == i ? void 0 : i.getBannerURL({
    size: ei,
    canAnimate: M || !el ? $ : et
  }), eu = null != eo, ed = (0, d.useStateFromStores)([B.default], () => B.default.getUserProfile(a.id)), ec = _.default.getChannel(O.default.getChannelId()), {
    appsInGDMEnabled: ef,
    availableApplications: eT
  } = (0, S.usePrivateChannelIntegrationState)({
    channelId: null !== (l = null == ec ? void 0 : ec.id) && void 0 !== l ? l : ""
  }), ep = null == ed ? void 0 : ed.application, em = ef && null != eT.find(e => e.id === (null == ep ? void 0 : ep.id));
  (0, s.useEffect)(() => {
    if (eu && J && 0 === Y) {
      Z(1);
      let e = new Image;
      e.src = eo, e.onload = () => Z(2)
    }
  }, [a, eu, J, eo, Y]), s.useEffect(() => {
    if (el || !J) return;
    let e = null != T ? T : null == i ? void 0 : i.getBannerURL({
      size: ei,
      canAnimate: !0
    });
    if (null == e) return;
    let t = new Image;
    t.src = e
  }, [el, J, T, i, ei]);
  let eE = (0, v.default)({
    analyticsLocation: {
      page: F.AnalyticsPages.USER_POPOUT,
      section: F.AnalyticsSections.PROFILE_POPOUT
    }
  });
  return (0, n.jsx)(D.default, {
    isPremium: J,
    hasThemeColors: null !== (r = null == i ? void 0 : i.canEditThemes) && void 0 !== r && r,
    profileType: U,
    hasBanner: eu,
    hasProfileEffect: R,
    children: (0, n.jsxs)("div", {
      className: o(z.banner, (0, H.getUserBannerStyles)({
        profileType: U,
        user: {
          hasBanner: eu,
          isPremium: J,
          hasProfileEffect: R
        }
      }), {
        [z.reducedMotion]: !el
      }),
      onMouseMove: () => ee(!0),
      onMouseLeave: () => ee(!1),
      style: {
        backgroundImage: eu && J ? "url(".concat(eo, ")") : void 0,
        backgroundColor: 2 !== Y ? c.default.unsafe_rawColors.PRIMARY_800.css : es
      },
      children: [q ? null == K ? (0, n.jsx)(X, {
        darkenOnHover: R && y,
        profileType: U,
        profileLabel: W.default.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          null == p || p(), eE()
        }
      }) : null == K ? null : (0, n.jsx)(f.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, n.jsx)(w.default, {
            onClose: t,
            onSelect: p,
            guild: K
          })
        },
        children: e => (0, n.jsx)(X, {
          darkenOnHover: R && y,
          profileLabel: W.default.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: U
        })
      }) : (() => {
        let e = L && eu && U !== G.UserProfileTypes.SETTINGS;
        return e ? (0, n.jsx)(V, {
          type: U,
          shown: void 0 === y ? $ : y,
          onClick: p
        }) : null
      })(), em ? U !== G.UserProfileTypes.MODAL ? null : (0, n.jsx)(f.Clickable, {
        onClick: p,
        "aria-label": W.default.Messages.BACK,
        className: z.pencilContainer,
        children: (0, n.jsx)(f.Tooltip, {
          text: W.default.Messages.BACK,
          children: e => (0, n.jsx)(I.default, {
            ...e,
            className: z.closeIcon,
            color: "white"
          })
        })
      }) : null, !el && (0, j.isAnimatedImageURL)(eo) && (0, n.jsx)(C.default, {
        className: z.gifTag
      })]
    })
  })
}