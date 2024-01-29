"use strict";
t.r(r), t.d(r, {
  default: function() {
    return K
  }
}), t("222007");
var l, n, i = t("37983"),
  o = t("884691"),
  a = t("414456"),
  s = t.n(a),
  u = t("509043"),
  f = t("446674"),
  d = t("669491"),
  c = t("77078"),
  P = t("79112"),
  E = t("812204"),
  p = t("685665"),
  T = t("462274"),
  _ = t("618017"),
  O = t("190045"),
  U = t("335031"),
  I = t("252063"),
  h = t("38766"),
  m = t("845579"),
  y = t("271938"),
  S = t("42203"),
  v = t("305961"),
  N = t("18494"),
  A = t("697218"),
  L = t("471671"),
  g = t("275623"),
  R = t("945330"),
  C = t("474571"),
  M = t("216422"),
  B = t("987772"),
  b = t("956089"),
  D = t("599110"),
  w = t("315102"),
  x = t("719923"),
  H = t("713135"),
  k = t("581295"),
  F = t("878569"),
  G = t("236100"),
  j = t("590456"),
  W = t("49111"),
  z = t("646718"),
  Y = t("782340"),
  V = t("220817");
(n = l || (l = {}))[n.SHOULD_LOAD = 0] = "SHOULD_LOAD", n[n.LOADING = 1] = "LOADING", n[n.COMPLETE = 2] = "COMPLETE";
let X = {
    [j.UserProfileTypes.POPOUT]: 18,
    [j.UserProfileTypes.MODAL]: 24,
    [j.UserProfileTypes.SETTINGS]: 0,
    [j.UserProfileTypes.PANEL]: 18,
    [j.UserProfileTypes.POMELO_POPOUT]: 18,
    [j.UserProfileTypes.CANCEL_MODAL]: 0
  },
  Z = {
    [j.UserProfileTypes.MODAL]: W.AnalyticsPages.USER_PROFILE,
    [j.UserProfileTypes.POPOUT]: W.AnalyticsPages.USER_POPOUT,
    [j.UserProfileTypes.SETTINGS]: W.AnalyticsPages.USER_POPOUT,
    [j.UserProfileTypes.PANEL]: W.AnalyticsPages.DM_CHANNEL,
    [j.UserProfileTypes.POMELO_POPOUT]: W.AnalyticsPages.POMELO_POPOUT,
    [j.UserProfileTypes.CANCEL_MODAL]: W.AnalyticsPages.USER_POPOUT
  };

function q(e) {
  let {
    type: r,
    shown: l,
    onClick: n
  } = e, a = (0, f.useStateFromStores)([A.default], () => {
    let e = A.default.getCurrentUser();
    return x.default.canUsePremiumProfileCustomization(e)
  }), u = o.useRef(!1), {
    analyticsLocations: d
  } = (0, p.default)(E.default.BADGE);
  return o.useEffect(() => {
    l && !u.current && (u.current = !0, D.default.track(W.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: z.PremiumUpsellTypes.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: Z[r],
        section: W.AnalyticsSections.NITRO_BANNER,
        object: W.AnalyticsObjects.NITRO_BADGE
      },
      location_stack: d
    }))
  }, [d, l, r]), (0, i.jsx)(c.Tooltip, {
    tooltipContentClassName: V.premiumIconTooltipContent,
    text: a ? Y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, i.jsx)(c.Clickable, {
      ...e,
      onClick: a ? void 0 : () => {
        var e;
        e = d, (0, c.openModalLazy)(async () => {
          let {
            default: r
          } = await t.el("292890").then(t.bind(t, "292890"));
          return t => {
            let {
              onClose: l,
              ...n
            } = t;
            return (0, i.jsx)(r, {
              analyticsLocations: e,
              title: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: Y.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  l(), P.default.open(W.UserSettingsSections.PREMIUM, null, {
                    analyticsLocations: e
                  })
                }
              }),
              onClose: l,
              ...n
            })
          }
        }), null == n || n()
      },
      className: s(V.premiumIconWrapper, {
        [V.visible]: l,
        [V.clickable]: !a
      }),
      children: (0, i.jsx)(b.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(M.default, {
          width: 16,
          height: 16,
          className: V.premiumIcon
        })
      })
    })
  })
}

function J(e) {
  let {
    darkenOnHover: r,
    profileType: t,
    profileLabel: l,
    icon: n,
    ...o
  } = e, a = X[t], s = "pencil" === n ? B.default : C.default;
  return (0, i.jsx)(c.Clickable, {
    ...o,
    "aria-label": l,
    className: r ? V.pencilContainerDark : V.pencilContainer,
    children: (0, i.jsx)(c.Tooltip, {
      text: l,
      children: e => (0, i.jsx)(s, {
        ...e,
        width: a,
        height: a,
        className: V.editIcon
      })
    })
  })
}

function K(e) {
  var r, t, l;
  let {
    user: n,
    displayProfile: a,
    bannerSrc: P,
    onClose: E,
    guildId: p,
    profileType: A = j.UserProfileTypes.POPOUT,
    isHovering: C,
    animateOnHover: M,
    allowEdit: B = !0,
    showPremiumBadgeUpsell: b = !0,
    hasProfileEffect: D = !1
  } = e, [X, Z] = o.useState((null == a ? void 0 : a.banner) == null ? 2 : 0), K = (0, f.useStateFromStores)([v.default], () => v.default.getGuild(p)), Q = (0, f.useStateFromStores)([y.default], () => y.default.getId()), $ = Q === n.id && B || n.isClyde() && null != K && (0, _.canEditClydeAIProfile)(K), ee = x.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, z.PremiumTypes.TIER_2), [er, et] = o.useState(!1), el = (0, f.useStateFromStores)([L.default], () => L.default.isFocused()), en = m.GifAutoPlay.getSetting(), ei = (0, c.useToken)(d.default.unsafe_rawColors.PRIMARY_800).hex(), eo = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80), ea = (0, u.hex2int)((0, T.default)(n.getAvatarURL(p, eo), ei, !1)), es = (0, U.default)(null !== (r = null == a ? void 0 : a.primaryColor) && void 0 !== r ? r : ea).hsl, eu = (0, F.getUserBannerSize)(A), ef = null != P ? P : null == a ? void 0 : a.getBannerURL({
    size: eu,
    canAnimate: M || !en ? er : el
  }), ed = null != ef, ec = (0, f.useStateFromStores)([H.default], () => H.default.getUserProfile(n.id)), eP = S.default.getChannel(N.default.getChannelId()), {
    appsInGDMEnabled: eE,
    availableApplications: ep
  } = (0, I.usePrivateChannelIntegrationState)({
    channelId: null !== (t = null == eP ? void 0 : eP.id) && void 0 !== t ? t : ""
  }), eT = null == ec ? void 0 : ec.application, e_ = eE && null != ep.find(e => e.id === (null == eT ? void 0 : eT.id));
  (0, o.useEffect)(() => {
    if (ed && (ee || n.isClyde()) && 0 === X) {
      Z(1);
      let e = new Image;
      e.src = ef, e.onload = () => Z(2)
    }
  }, [n, ed, ee, ef, X]), o.useEffect(() => {
    if (en || !ee) return;
    let e = null != P ? P : null == a ? void 0 : a.getBannerURL({
      size: eu,
      canAnimate: !0
    });
    if (null == e) return;
    let r = new Image;
    r.src = e
  }, [en, ee, P, a, eu]);
  let eO = (0, h.default)({
    analyticsLocation: {
      page: W.AnalyticsPages.USER_POPOUT,
      section: W.AnalyticsSections.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(k.default, {
    isPremium: ee,
    hasThemeColors: null !== (l = null == a ? void 0 : a.canEditThemes) && void 0 !== l && l,
    profileType: A,
    hasBanner: ed,
    hasProfileEffect: D,
    children: (0, i.jsxs)("div", {
      className: s(V.banner, (0, F.getUserBannerStyles)({
        profileType: A,
        user: {
          hasBanner: ed,
          isPremium: ee,
          hasProfileEffect: D
        }
      }), {
        [V.reducedMotion]: !en
      }),
      onMouseMove: () => et(!0),
      onMouseLeave: () => et(!1),
      style: {
        backgroundImage: ed && ee ? "url(".concat(ef, ")") : void 0,
        backgroundColor: 2 !== X ? d.default.unsafe_rawColors.PRIMARY_800.css : es
      },
      children: [$ ? null != K || n.isClyde() ? null != K && n.isClyde() && (0, _.canEditClydeAIProfile)(K) ? (0, i.jsx)(J, {
        profileType: A,
        profileLabel: Y.default.Messages.CLYDE_SETTINGS,
        icon: "gear",
        onClick: () => {
          null == E || E(), (0, O.default)(K.id)
        }
      }) : null == K ? null : (0, i.jsx)(c.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: r
          } = e;
          return (0, i.jsx)(G.default, {
            onClose: r,
            onSelect: E,
            guild: K
          })
        },
        children: e => (0, i.jsx)(J, {
          darkenOnHover: D && C,
          profileLabel: Y.default.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: A
        })
      }) : (0, i.jsx)(J, {
        darkenOnHover: D && C,
        profileType: A,
        profileLabel: Y.default.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          null == E || E(), eO()
        }
      }) : (() => {
        let e = b && ed && A !== j.UserProfileTypes.SETTINGS;
        return e ? (0, i.jsx)(q, {
          type: A,
          shown: void 0 === C ? er : C,
          onClick: E
        }) : null
      })(), e_ ? A !== j.UserProfileTypes.MODAL ? null : (0, i.jsx)(c.Clickable, {
        onClick: E,
        "aria-label": Y.default.Messages.BACK,
        className: V.pencilContainer,
        children: (0, i.jsx)(c.Tooltip, {
          text: Y.default.Messages.BACK,
          children: e => (0, i.jsx)(R.default, {
            ...e,
            className: V.closeIcon,
            color: "white"
          })
        })
      }) : null, !en && (0, w.isAnimatedImageURL)(ef) && (0, i.jsx)(g.default, {
        className: V.gifTag
      })]
    })
  })
}